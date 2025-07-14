import {
  formatHandleFromUrl,
  extractSKU,
  calculatePrices,
} from "./formatters.js";
import { getDescription } from "./description.js";
import { SELECTORS, DEFAULT_VALUES } from "./constants.js";
import { gotoTargetWithRetries } from "./gotoWithRetries.js";

/**
 * Extract price from page safely
 */
export async function extractPrice(page) {
  function parsePrice(text) {
    const cleaned = text.replace(/[^\d.]/g, "");
    const value = parseFloat(cleaned);
    return isNaN(value) ? null : value;
  }

  let currentPrice = null;
  let originalPrice = null;

  try {
    await page.waitForSelector('span[data-test="product-price"]', {
      timeout: 8000,
    });
    const currentPriceText = await page.$eval(
      'span[data-test="product-price"]',
      (el) => el.textContent
    );
    currentPrice = parsePrice(currentPriceText);
  } catch (err) {
    console.warn("⚠️ Could not extract current price:", err.message);
  }

  try {
    const originalPriceText = await page.$eval(
      "span.h-text-line-through",
      (el) => el.textContent
    );
    originalPrice = parsePrice(originalPriceText);
  } catch {
    originalPrice = null; // Optional
  }

  return {
    currentPrice: currentPrice ?? 0,
    originalPrice,
  };
}

export async function extractTargetProductData(page, url) {
  try {
    await gotoTargetWithRetries(page, url);
    console.info("✅ Page loaded, waiting for stability...");
    await page.waitForTimeout(3000);

    // 1. Extract basic identifiers
    const handle = formatHandleFromUrl(url);
    const sku = extractSKU(url);
    const title = await extractTitle(page, handle);

    // 2. Extract pricing data
    const { currentPrice, originalPrice } = await extractPrice(page);
    const { variantPrice, compareAtPrice } = calculatePrices(
      currentPrice,
      originalPrice
    );

    // 3. Extract other product data
    const breadcrumbs = await extractBreadcrumbs(page);
    const description = await getDescription(page);
    const imageHandles = await extractImages(page);

    console.log("first phase Done");

    const variantSection = await page.waitForSelector(
      `div[data-module-type="ProductDetailVariationSelector"]`
    );

    const variantsOptions = await variantSection.$$eval(
      "div.h-margin-a-module-gap > div",
      (variantsItem) => {
        return variantsItem.map((item) => {
          const variantTitle = item
            .querySelector("div:nth-child(1) > span")
            ?.innerText?.trim();
          return { variantTitle };
        });
      }
    );

    const variantItemWrapper = await variantSection.$$(
      "div.h-margin-a-module-gap > div"
    );

    const anchorsPerVariant = {};

    for (const item of variantItemWrapper) {
      // Get the title by evaluating in the page context
      const variantTitleHandle = await item.$("div:nth-child(1) > span");
      let variantTitle = "";
      if (variantTitleHandle) {
        variantTitle = await variantTitleHandle.evaluate((el) =>
          el.innerText.trim()
        );
      }

      const anchors = await item.$$("div > ul > li > a");
      const anchorsDetails = [];

      for (const anchor of anchors) {
        const detail = await anchor.evaluate((el) => {
          // Try to get text from a span inside <a>
          const span = el.querySelector("span");
          let label = span ? span.innerText.trim() : null;

          // If there's an <img> inside <a>, get its alt text
          const img = el.querySelector("img");
          if (!label && img && img.alt) {
            label = img.alt.trim();
          }

          const isSelected = el
            .getAttribute("aria-label")
            ?.includes("selected");

          return { label, isSelected };
        });
        anchorsDetails.push(detail);
      }

      anchorsPerVariant[variantTitle] = anchorsDetails.map((item, index) => {
        return { ...item, anchor: anchors[index] };
      });
    }

    console.log(anchorsPerVariant);

    if (
      anchorsPerVariant["Size Group"] &&
      anchorsPerVariant["Size Group"].length
    ) {
      for (const { label, isSelected, anchor } of anchorsPerVariant[
        "Size Group"
      ]) {
        if (label === "Boys") {
          if (!isSelected) {
            await anchor.click();
            // Note You Have to reread variant
          }
        }
      }
    }

    if (anchorsPerVariant["Color"]) {
      for (const colorVariant of anchorsPerVariant["Color"]) {
        await colorVariant.anchor.click();
        await page.waitForTimeout(4000);
      }
    }
    await page.waitForTimeout(2000);

    // 4. Compile main product row
    const productRow = {
      Handle: handle,
      Title: title,
      "Body (HTML)": description,
      Vendor: DEFAULT_VALUES.VENDOR,
      Type: breadcrumbs.split(",").pop()?.trim() || DEFAULT_VALUES.TYPE,
      Tags: breadcrumbs,
      "Variant SKU": sku,
      "Cost per item": currentPrice,
      "Original Price": originalPrice,
      "Variant Price": variantPrice,
      "Variant Compare At Price": compareAtPrice,
      "Image Src": imageHandles[0] || "",
      ...DEFAULT_VALUES,
      "product.metafields.custom.original_product_url": url,
    };

    const extraImages = imageHandles.slice(1).map((src) => ({
      Handle: handle,
      "Image Src": src,
    }));

    return { productRow, extraImages };
  } catch (error) {
    console.error(`❌ Error processing ${url}:`, error.message);
    throw error;
  }
}

// Helper: extract title
async function extractTitle(page, fallbackTitle) {
  try {
    return await page.$eval('h1[data-test="product-title"]', (el) =>
      el.textContent.trim()
    );
  } catch {
    return fallbackTitle?.replace(/_/g, " ") || "";
  }
}

// Helper: extract breadcrumbs
async function extractBreadcrumbs(page) {
  try {
    return await page.$$eval(
      'a[data-test="@web/Breadcrumbs/BreadcrumbLink"]',
      (anchors) =>
        anchors
          .map((a) => a.textContent.trim())
          .filter(Boolean)
          .join(",")
    );
  } catch {
    return "";
  }
}

// Helper: extract all images
async function extractImages(page) {
  try {
    return await page.$$eval("div.styles_zoomableImage__R_OOf img", (imgs) =>
      imgs.map((img) => img.src).filter(Boolean)
    );
  } catch {
    return [];
  }
}
