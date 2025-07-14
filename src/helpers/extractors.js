import { formatHandleFromUrl, extractSKU, calculatePrices } from "./formatters.js";
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
    await page.waitForSelector('span[data-test="product-price"]', { timeout: 8000 });
    const currentPriceText = await page.$eval('span[data-test="product-price"]', el => el.textContent);
    currentPrice = parsePrice(currentPriceText);
  } catch (err) {
    console.warn("⚠️ Could not extract current price:", err.message);
  }

  try {
    const originalPriceText = await page.$eval('span.h-text-line-through', el => el.textContent);
    originalPrice = parsePrice(originalPriceText);
  } catch {
    originalPrice = null;
  }

  return {
    currentPrice: currentPrice ?? 0,
    originalPrice
  };
}

// Extract SKU from page content
async function extractSKUFromPage(page) {
  try {
    return await page.$eval('[data-test="product-item-number"]', el =>
      el.innerText.replace('Item Number (DPCI):', '').trim()
    );
  } catch {
    return '';
  }
}

export async function extractTargetProductData(page, url) {
  try {
    await gotoTargetWithRetries(page, url);
    console.info("✅ Page loaded, waiting for stability...");
    await page.waitForTimeout(3000);

    const handle = formatHandleFromUrl(url);
    const breadcrumbs = await extractBreadcrumbs(page);
    const description = await getDescription(page);
    const imageHandles = await extractImages(page);

    const { currentPrice, originalPrice } = await extractPrice(page);
    const { variantPrice, compareAtPrice } = calculatePrices(currentPrice, originalPrice);
    const title = await extractTitle(page, handle);
    const sku = extractSKU(url);

    const productRow = {
      Handle: handle,
      Title: title,
      "Body (HTML)": description,
      Vendor: DEFAULT_VALUES.VENDOR,
      Type: breadcrumbs.split(',').pop()?.trim() || DEFAULT_VALUES.TYPE,
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

    const extraImages = imageHandles.slice(1).map(src => ({
      Handle: handle,
      "Image Src": src
    }));

    const variantRows = await extractVariants(page, handle);

    return { productRow, extraImages, variantRows };
  } catch (error) {
    console.error(`❌ Error processing ${url}:`, error.message);
    throw error;
  }
}

async function extractVariants(page, baseHandle) {
  const variantRows = [];
  try {
    const variantSection = await page.$(`div[data-module-type="ProductDetailVariationSelector"]`);
    if (!variantSection) return [];

    const variantItemWrapper = await variantSection.$$('div.h-margin-a-module-gap > div');
    const anchorsPerVariant = {};

    for (const item of variantItemWrapper) {
      const titleHandle = await item.$('div:nth-child(1) > span');
      const variantTitle = titleHandle ? await titleHandle.evaluate(el => el.innerText.trim()) : '';

      const anchors = await item.$$('div > ul > li > a');
      const anchorsDetails = [];

      for (const anchor of anchors) {
        const detail = await anchor.evaluate(el => {
          const span = el.querySelector('span');
          let label = span ? span.innerText.trim() : null;
          const img = el.querySelector('img');
          if (!label && img?.alt) label = img.alt.trim();
          const isSelected = el.getAttribute('aria-label')?.includes('selected');
          return { label, isSelected, swatchImage: img?.src || '' };
        });
        anchorsDetails.push({ ...detail, anchor });
      }

      anchorsPerVariant[variantTitle] = anchorsDetails;
    }

    // Handle Size Group selection first
    if (anchorsPerVariant["Size Group"]?.length) {
      const sizeGroup = anchorsPerVariant["Size Group"].find(item => ["Girls", "Boys"].includes(item.label));
      if (sizeGroup && !sizeGroup.isSelected) {
        await sizeGroup.anchor.click();
        await page.waitForTimeout(2000);
      }
    }

    // Handle Color Variants
    if (anchorsPerVariant["Color"]) {
      for (const color of anchorsPerVariant["Color"]) {
        if (!color.isSelected) {
          const oldImage = await page.$eval('div.styles_zoomableImage__R_OOf img', img => img.src).catch(() => '');
          await color.anchor.click();

          await page.waitForFunction(prev => {
            const img = document.querySelector('div.styles_zoomableImage__R_OOf img')?.src;
            return img && img !== prev;
          }, oldImage, { timeout: 15000 });

          await page.waitForTimeout(2000);
        }

        const variantSKU = await extractSKUFromPage(page);
        const { currentPrice, originalPrice } = await extractPrice(page);
        const mainImage = await page.$eval('div.styles_zoomableImage__R_OOf img', img => img.src).catch(() => '');

        variantRows.push({
          Handle: baseHandle,
          "Option1 Name": "Color",
          "Option1 Value": color.label,
          "Option2 Name": "",
          "Option2 Value": "",
          "Variant SKU": variantSKU,
          "Cost per item": currentPrice,
          "Original Price": originalPrice,
          "Image Src": mainImage,
          "Variant Swatch Image": color.swatchImage
        });
      }
    }

    // Handle Size Variants (no image)
    if (anchorsPerVariant["Size"]) {
      for (const size of anchorsPerVariant["Size"]) {
        if (!size.isSelected) {
          await size.anchor.click();
          await page.waitForTimeout(1500);
        }

        const variantSKU = await extractSKUFromPage(page);
        const { currentPrice, originalPrice } = await extractPrice(page);

        variantRows.push({
          Handle: baseHandle,
          "Option1 Name": "",
          "Option1 Value": "",
          "Option2 Name": "Size",
          "Option2 Value": size.label,
          "Variant SKU": variantSKU,
          "Cost per item": currentPrice,
          "Original Price": originalPrice,
          "Image Src": "",
          "Variant Swatch Image": size.swatchImage || ""
        });
      }
    }

    return variantRows;
  } catch (err) {
    console.warn("⚠️ Variant extraction failed:", err.message);
    return [];
  }
}

// Helper: extract title
async function extractTitle(page, fallbackTitle) {
  try {
    return await page.$eval('h1[data-test="product-title"]', el => el.textContent.trim());
  } catch {
    return fallbackTitle?.replace(/_/g, " ") || "";
  }
}

// Helper: extract breadcrumbs
async function extractBreadcrumbs(page) {
  try {
    return await page.$$eval('a[data-test="@web/Breadcrumbs/BreadcrumbLink"]',
      anchors => anchors.map(a => a.textContent.trim()).filter(Boolean).join(",")
    );
  } catch {
    return "";
  }
}

// Helper: extract images
async function extractImages(page) {
  try {
    return await page.$$eval('div.styles_zoomableImage__R_OOf img',
      imgs => imgs.map(img => img.src).filter(Boolean)
    );
  } catch {
    return [];
  }
}
