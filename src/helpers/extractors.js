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

// Helper functions
async function getMainImageSrc(page) {
  try {
    return await page.$eval('.CarouselDesktopmainImgBlock .ZoomControllermainImage', img => img.src);
  } catch {
    return '';
  }
}

async function waitForImageLoad(page, timeout = 10000) {
  try {
    await page.waitForFunction(() => {
      const img = document.querySelector('.CarouselDesktopmainImgBlock .ZoomControllermainImage');
      return img && img.complete && img.naturalWidth > 0;
    }, { timeout });
  } catch (error) {
    console.warn('Image load timeout exceeded');
  }
}

async function extractBaseSKU(url) {
  const match = url.match(/preselect=(\d+)/);
  return match ? match[1] : extractSKU(url);
}

async function extractVariants(page) {
  try {
    const variantSection = await page.waitForSelector(
      `div[data-module-type="ProductDetailVariationSelector"]`,
      { timeout: 5000 }
    );

    const variantTitles = await variantSection.$$eval(
      "div.h-margin-a-module-gap > div",
      (variantsItem) => {
        return variantsItem.map((item) => {
          return item.querySelector("div:nth-child(1) > span")?.innerText?.trim();
        }).filter(Boolean);
      }
    );

    const variantItemWrapper = await variantSection.$$(
      "div.h-margin-a-module-gap > div"
    );

    const variantsData = {
      option1Name: variantTitles[0] || 'Color',
      option2Name: variantTitles[1] || 'Size',
      colors: [],
      sizes: []
    };

    for (const item of variantItemWrapper) {
      const variantTitleHandle = await item.$("div:nth-child(1) > span");
      const variantTitle = variantTitleHandle ? 
        await variantTitleHandle.evaluate(el => el.innerText.trim()) : '';

      const anchors = await item.$$("div > ul > li > a");
      
      for (const anchor of anchors) {
        const variantData = await anchor.evaluate((el) => {
          const span = el.querySelector("span");
          let label = span ? span.innerText.trim() : null;
          
          const img = el.querySelector("img");
          if (!label && img && img.alt) {
            label = img.alt.trim();
          }

          const isSelected = el.getAttribute("aria-label")?.includes("selected");
          const variantImage = img?.src || null;
          
          return { 
            label, 
            isSelected, 
            variantImage,
            href: el.href
          };
        });

        variantData.anchor = anchor;

        if (variantTitle.toLowerCase().includes('color')) {
          variantsData.colors.push(variantData);
        } 
        else if (variantTitle.toLowerCase().includes('size') && variantTitle !== 'Size Group') {
          variantsData.sizes.push(variantData);
        }
        else if (variantTitle === 'Size Group') {
          if (variantData.label === 'Boys' || variantData.label === 'Girls') {
            variantsData.sizes.push(variantData);
          }
        }
      }
    }

    return variantsData;
  } catch (error) {
    console.log('No variants found:', error.message);
    return null;
  }
}

export async function extractTargetProductData(page, url) {
  try {
    await gotoTargetWithRetries(page, url);
    console.info("✅ Page loaded, waiting for stability...");
    await page.waitForTimeout(3000);

    // 1. Extract basic identifiers
    const handle = formatHandleFromUrl(url);
    const baseSKU = await extractBaseSKU(url);
    const title = await extractTitle(page, handle);

    // 2. Extract pricing data
    const { currentPrice, originalPrice } = await extractPrice(page);
    const { variantPrice, compareAtPrice } = calculatePrices(currentPrice, originalPrice);

    // 3. Extract all images for main product
    const imageHandles = await extractImages(page);
    let mainImage = imageHandles[0] || '';

    // 4. Extract variants if they exist
    const variantsData = await extractVariants(page);
    const allVariants = [];
    let option1Name = '';
    let option2Name = '';

    if (variantsData) {
      option1Name = variantsData.option1Name;
      option2Name = variantsData.option2Name;

      // Process Size Group first if exists
      const sizeGroup = variantsData.sizes.find(s => s.label === 'Boys' || s.label === 'Girls');
      if (sizeGroup && !sizeGroup.isSelected) {
        await sizeGroup.anchor.click();
        await page.waitForTimeout(3000);
        // Re-extract after size group change
        return await extractTargetProductData(page, url);
      }

      // Process Color variants
      for (const color of variantsData.colors) {
        let variantImages = [];
        let variantPrice = currentPrice;
        let variantSKU = baseSKU;

        if (!color.isSelected && color.href) {
          const oldImage = await getMainImageSrc(page);
          await color.anchor.click();
          await page.waitForTimeout(2000);
          await waitForImageLoad(page);
          
          // Verify image actually changed
          const newImage = await getMainImageSrc(page);
          if (newImage && newImage !== oldImage) {
            const priceData = await extractPrice(page);
            variantPrice = priceData.currentPrice;
            variantImages = await extractImages(page);
          }
        } else {
          variantImages = imageHandles;
        }

        allVariants.push({
          Handle: handle,
          "Option1 Name": option1Name,
          "Option1 Value": color.label,
          "Option2 Name": option2Name,
          "Option2 Value": '',
          "Variant Price": variantPrice,
          "Variant Compare At Price": compareAtPrice,
          "Variant Image": color.variantImage,
          "Image Src": variantImages[0] || mainImage,
          "Variant SKU": variantSKU
        });
      }

      // Process Size variants
      for (const size of variantsData.sizes) {
        if (size.label === 'Boys' || size.label === 'Girls') continue;

        allVariants.push({
          Handle: handle,
          "Option1 Name": option1Name,
          "Option1 Value": variantsData.colors[0]?.label || '',
          "Option2 Name": option2Name,
          "Option2 Value": size.label,
          "Variant Price": currentPrice,
          "Variant Compare At Price": compareAtPrice,
          "Variant Image": '',
          "Image Src": mainImage,
          "Variant SKU": baseSKU
        });
      }
    }

    // 5. Compile product data
    const breadcrumbs = await extractBreadcrumbs(page);
    const description = await getDescription(page);

    const productRow = {
      Handle: handle,
      Title: title,
      "Body (HTML)": description,
      Vendor: DEFAULT_VALUES.VENDOR,
      Type: breadcrumbs.split(',').pop()?.trim() || DEFAULT_VALUES.TYPE,
      Tags: breadcrumbs,
      "Variant SKU": baseSKU,
      "Cost per item": currentPrice,
      "Original Price": originalPrice,
      "Variant Price": variantPrice,
      "Variant Compare At Price": compareAtPrice,
      "Image Src": mainImage,
      ...DEFAULT_VALUES,
      "product.metafields.custom.original_product_url": url,
    };

    const extraImages = imageHandles.slice(1).map(src => ({
      Handle: handle,
      "Image Src": src
    }));

    return { 
      productRow, 
      extraImages,
      variants: allVariants.length ? allVariants : [productRow],
      option1Name,
      option2Name
    };
  } catch (error) {
    console.error(`❌ Error processing ${url}:`, error.message);
    throw error;
  }
}

// Helper: extract title
async function extractTitle(page, fallbackTitle) {
  try {
    return await page.$eval(
      'h1[data-test="product-title"]',
      el => el.textContent.trim()
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
      anchors => anchors.map(a => a.textContent.trim()).filter(Boolean).join(",")
    );
  } catch {
    return "";
  }
}

// Helper: extract all images
async function extractImages(page) {
  try {
    return await page.$$eval(
      'div.styles_zoomableImage__R_OOf img',
      imgs => imgs.map(img => img.src).filter(Boolean)
    );
  } catch {
    return [];
  }
}