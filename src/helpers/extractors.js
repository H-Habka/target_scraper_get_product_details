import { formatHandleFromUrl, extractSKU, calculatePrices } from "./formatters.js";
import { getDescription } from "./description.js";
import { SELECTORS, DEFAULT_VALUES } from "./constants.js";
import { gotoTargetWithRetries } from "./gotoWithRetries.js";

// Helper to get current variant SKU from URL
async function getVariantSKUFromURL(page) {
  return await page.evaluate(() => {
    const url = new URL(window.location.href);
    return url.pathname.split('-').pop().replace('/', '');
  });
}

// Price extraction with error handling
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
    currentPrice = parsePrice(await page.$eval('span[data-test="product-price"]', el => el.textContent));
  } catch (err) {
    console.warn("⚠️ Could not extract current price:", err.message);
  }

  try {
    originalPrice = parsePrice(await page.$eval('span.h-text-line-through', el => el.textContent));
  } catch {
    originalPrice = null;
  }

  return {
    currentPrice: currentPrice ?? 0,
    originalPrice
  };
}

// Get main product image
async function getMainImageSrc(page) {
  try {
    return await page.$eval('.CarouselDesktopmainImgBlock .ZoomControllermainImage', img => img.src);
  } catch {
    return '';
  }
}

// Safe click with stabilization
async function safeClick(page, selector, timeout = 5000) {
  try {
    await page.waitForSelector(selector, { 
      visible: true,
      timeout,
      state: 'attached'
    });
    await page.$eval(selector, el => {
      el.scrollIntoView({block: "center", behavior: "smooth"});
      el.click();
    });
    await page.waitForTimeout(500); // Stabilization delay
    return true;
  } catch (error) {
    console.warn(`Click failed on ${selector}:`, error.message);
    return false;
  }
}

// Extract all product images
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

// Extract variant data from current page
async function extractVariantData(page) {
  const currentSKU = await getVariantSKUFromURL(page);
  const { currentPrice, originalPrice } = await extractPrice(page);
  const images = await extractImages(page);
  
  return {
    sku: currentSKU,
    price: currentPrice,
    compareAtPrice: originalPrice,
    mainImage: images[0] || '',
    allImages: images
  };
}

// Wait for image to change after variant selection
async function waitForImageChange(page, oldImage, timeout = 10000) {
  try {
    await page.waitForFunction(
      (prevImage) => {
        const img = document.querySelector('.CarouselDesktopmainImgBlock .ZoomControllermainImage');
        return img && img.src !== prevImage;
      },
      { timeout },
      oldImage
    );
    return true;
  } catch {
    return false;
  }
}

// Extract all variant options
async function extractVariants(page) {
  try {
    const variantSection = await page.waitForSelector(
      `div[data-module-type="ProductDetailVariationSelector"]`,
      { timeout: 8000 }
    );

    const variantTitles = await variantSection.$$eval(
      "div.h-margin-a-module-gap > div",
      (items) => items.map(item => 
        item.querySelector("div:nth-child(1) > span")?.innerText?.trim()
      ).filter(Boolean)
    );

    const variantsData = {
      option1Name: variantTitles[0] || 'Color',
      option2Name: variantTitles[1] || 'Size',
      colors: [],
      sizes: []
    };

    const variantItems = await variantSection.$$("div.h-margin-a-module-gap > div");
    
    for (const item of variantItems) {
      const variantTitle = await item.$eval("div:nth-child(1) > span", el => el.innerText.trim());
      const anchors = await item.$$("div > ul > li > a");
      
      for (const anchor of anchors) {
        const variantData = await anchor.evaluate((el) => ({
          label: el.querySelector("span")?.innerText?.trim() || 
                el.querySelector("img")?.alt?.trim() || '',
          isSelected: el.getAttribute("aria-label")?.includes("selected"),
          variantImage: el.querySelector("img")?.src || null,
          selector: 'div > ul > li > a' // Static selector
        }));

        if (/color/i.test(variantTitle)) {
          variantsData.colors.push(variantData);
        } 
        else if (/size/i.test(variantTitle) && variantTitle !== 'Size Group') {
          variantsData.sizes.push(variantData);
        }
        else if (variantTitle === 'Size Group' && 
                ['Boys', 'Girls'].includes(variantData.label)) {
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

// Process all color variants
async function processColorVariants(page, variantsData) {
  const results = [];
  const selectedColor = variantsData.colors.find(c => c.isSelected);
  const sizeVariants = variantsData.sizes.filter(s => !['Boys', 'Girls'].includes(s.label));

  // 1. Process selected color first
  if (selectedColor) {
    results.push({
      ...(await extractVariantData(page)),
      color: selectedColor.label,
      colorImage: selectedColor.variantImage,
      sizes: [...sizeVariants]
    });
  }

  // 2. Process other colors
  for (const color of variantsData.colors) {
    if (color.isSelected) continue;

    const oldImage = await getMainImageSrc(page);
    if (!await safeClick(page, color.selector)) continue;

    await page.waitForTimeout(1500); // Wait for page update
    const changed = await waitForImageChange(page, oldImage);
    
    if (changed) {
      results.push({
        ...(await extractVariantData(page)),
        color: color.label,
        colorImage: color.variantImage,
        sizes: [...sizeVariants]
      });
    }

    // Return to selected color
    if (selectedColor) {
      await safeClick(page, selectedColor.selector);
      await page.waitForTimeout(1500);
    }
  }

  return results;
}

// Main extraction function
export async function extractTargetProductData(page, url) {
  try {
    await gotoTargetWithRetries(page, url);
    await page.waitForTimeout(3000); // Initial stabilization

    // Extract base product info
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
      const sizeGroup = variantsData.sizes.find(s => ['Boys', 'Girls'].includes(s.label));
      if (sizeGroup && !sizeGroup.isSelected) {
        await safeClick(page, sizeGroup.selector);
        await page.waitForTimeout(3000);
        return await extractTargetProductData(page, url);
      }

      variants = await processColorVariants(page, variantsData);
      
      // Build variant images map
      variantImagesMap = variants.reduce((map, variant) => {
        map[variant.sku] = variant.colorImage || variant.mainImage;
        return map;
      }, {});
    }

    // Prepare final output
    const allVariants = [];
    const uniqueImages = new Set();

    // Format color variants
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
        "Cost per item": calculatePrices(colorVariant.price).costPerItem
      });

      // Add size variants for this color
      colorVariant.sizes.forEach(size => {
        allVariants.push({
          Handle: handle,
          "Variant SKU": colorVariant.sku,
          "Option1 Name": variantsData?.option1Name || 'Color',
          "Option1 Value": colorVariant.color,
          "Option2 Name": variantsData?.option2Name || 'Size',
          "Option2 Value": size.label,
          "Variant Price": colorVariant.price,
          "Variant Compare At Price": colorVariant.compareAtPrice,
          "Image Src": colorVariant.mainImage,
          "Variant Image": '',
          "Cost per item": calculatePrices(colorVariant.price).costPerItem
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