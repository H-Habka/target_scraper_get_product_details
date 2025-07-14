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
    originalPrice = null; // Optional
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

async function safeClick(page, selector, timeout = 5000) {
  try {
    await page.waitForSelector(selector, { visible: true, timeout });
    await page.$eval(selector, el => {
      el.scrollIntoView({block: "center"});
      el.click();
    });
    return true;
  } catch (error) {
    console.warn(`Click failed on ${selector}:`, error.message);
    return false;
  }
}

async function extractVariants(page) {
  try {
    const variantSection = await page.waitForSelector(
      `div[data-module-type="ProductDetailVariationSelector"]`,
      { timeout: 8000 }
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
      const variantTitle = await item.$eval("div:nth-child(1) > span", el => el.innerText.trim());
      const anchors = await item.$$("div > ul > li > a");
      
      for (const anchor of anchors) {
        const variantData = await anchor.evaluate((el) => {
          const label = el.querySelector("span")?.innerText?.trim() || 
                       el.querySelector("img")?.alt?.trim() || '';
          return {
            label,
            isSelected: el.getAttribute("aria-label")?.includes("selected"),
            variantImage: el.querySelector("img")?.src || null,
            selector: 'div > ul > li > a' // Static selector for reliability
          };
        });

        if (variantTitle.toLowerCase().includes('color')) {
          variantsData.colors.push(variantData);
        } 
        else if (variantTitle.toLowerCase().includes('size') && variantTitle !== 'Size Group') {
          variantsData.sizes.push(variantData);
        }
        else if (variantTitle === 'Size Group' && 
                (variantData.label === 'Boys' || variantData.label === 'Girls')) {
          variantsData.sizes.push(variantData);
        }
      }
    }

    return variantsData;
  } catch (error) {
    console.log('Variant extraction failed:', error.message);
    return null;
  }
}

async function processProductVariants(page, variantsData) {
  const results = [];
  const selectedColor = variantsData.colors.find(c => c.isSelected);
  const sizeVariants = variantsData.sizes.filter(s => !['Boys', 'Girls'].includes(s.label));

  // 1. Process selected color first
  if (selectedColor) {
    const variantData = await extractVariantData(page);
    results.push({
      ...variantData,
      color: selectedColor.label,
      colorImage: selectedColor.variantImage,
      sizes: [...sizeVariants] // Copy all sizes for this color
    });
  }

  // 2. Process other colors
  for (const color of variantsData.colors) {
    if (color.isSelected) continue;

    const oldImage = await getMainImageSrc(page);
    const clicked = await safeClick(page, color.selector);
    if (!clicked) continue;

    await page.waitForTimeout(2000); // Wait for page to update

    const variantData = await extractVariantData(page);
    results.push({
      ...variantData,
      color: color.label,
      colorImage: color.variantImage,
      sizes: [...sizeVariants] // Copy all sizes for this color
    });

    // Return to selected color
    if (selectedColor) {
      await safeClick(page, selectedColor.selector);
      await page.waitForTimeout(2000);
    }
  }

  return results;
}

export async function extractTargetProductData(page, url) {
  try {
    await gotoTargetWithRetries(page, url);
    await page.waitForTimeout(3000);

    // Extract base info
    const handle = formatHandleFromUrl(url);
    const title = await extractTitle(page, handle);
    const breadcrumbs = await extractBreadcrumbs(page);
    const description = await getDescription(page);
    const variantsData = await extractVariants(page);

    // Process variants
    let variants = [];
    let variantImagesMap = {};
    
    if (variantsData) {
      // Handle Size Group first if needed
      const sizeGroup = variantsData.sizes.find(s => s.label === 'Boys' || s.label === 'Girls');
      if (sizeGroup && !sizeGroup.isSelected) {
        await safeClick(page, sizeGroup.selector);
        await page.waitForTimeout(3000);
        return await extractTargetProductData(page, url);
      }

      variants = await processProductVariants(page, variantsData);
      
      // Build variant images map
      variantImagesMap = variants.reduce((map, variant) => {
        map[variant.sku] = variant.colorImage || variant.mainImage;
        return map;
      }, {});
    }

    // Prepare final data structure
    const allVariants = [];
    const uniqueImages = new Set();

    // Add color variants
    variants.forEach(colorVariant => {
      uniqueImages.add(colorVariant.mainImage);
      if (colorVariant.colorImage) uniqueImages.add(colorVariant.colorImage);

      allVariants.push({
        Handle: handle,
        "Variant SKU": colorVariant.sku,
        "Option1 Name": variantsData?.option1Name || 'Color',
        "Option1 Value": colorVariant.color,
        "Option2 Name": '',
        "Option2 Value": '',
        "Variant Price": colorVariant.price,
        "Variant Compare At Price": colorVariant.compareAtPrice,
        "Image Src": colorVariant.mainImage,
        "Variant Image": colorVariant.colorImage,
        "Cost per item": colorVariant.price * 0.8 // 20% margin
      });

      // Add size variants for this color
      colorVariant.sizes.forEach(size => {
        allVariants.push({
          Handle: handle,
          "Variant SKU": colorVariant.sku, // Same SKU as parent color
          "Option1 Name": variantsData?.option1Name || 'Color',
          "Option1 Value": colorVariant.color,
          "Option2 Name": variantsData?.option2Name || 'Size',
          "Option2 Value": size.label,
          "Variant Price": colorVariant.price,
          "Variant Compare At Price": colorVariant.compareAtPrice,
          "Image Src": colorVariant.mainImage, // Parent color image
          "Variant Image": '', // No image for sizes
          "Cost per item": colorVariant.price * 0.8
        });
      });
    });

    return {
      productRow: {
        Handle: handle,
        Title: title,
        "Body (HTML)": description,
        Vendor: DEFAULT_VALUES.VENDOR,
        Type: breadcrumbs.split(',').pop()?.trim() || DEFAULT_VALUES.TYPE,
        Tags: breadcrumbs,
        Published: true,
        "Option1 Name": variantsData?.option1Name || 'Color',
        "Option2 Name": variantsData?.option2Name || 'Size',
        "Variant Grams": 0,
        "Variant Inventory Tracker": "shopify",
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Gift Card": false,
        "Google Shopping / Gender": "female",
        ...DEFAULT_VALUES,
        "original_prodect_url": url,
        "variants_skus_images_mapper": JSON.stringify(variantImagesMap)
      },
      variants: allVariants,
      extraImages: Array.from(uniqueImages).map(src => ({
        Handle: handle,
        "Image Src": src
      }))
    };
  } catch (error) {
    console.error(`❌ Error processing ${url}:`, error.message);
    throw error;
  }
}

// Keep other helper functions (extractPrice, extractTitle, extractBreadcrumbs, extractImages)
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