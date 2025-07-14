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

async function safeClick(page, selector, timeout = 5000) {
  try {
    await page.waitForSelector(selector, { 
      visible: true,
      timeout: timeout 
    });
    const element = await page.$(selector);
    await element.evaluate(el => el.scrollIntoView({block: "center"}));
    await page.waitForTimeout(500); // Additional stabilization
    await element.click();
    return true;
  } catch (error) {
    console.warn(`Click failed on selector ${selector}:`, error.message);
    return false;
  }
}

async function extractVariants(page) {
  try {
    const variantSection = await page.waitForSelector(
      `div[data-module-type="ProductDetailVariationSelector"]`,
      { timeout: 8000, state: 'attached' }
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
            href: el.href,
            selector: 'div > ul > li > a' // Store selector for later use
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
    console.log('Variant extraction failed:', error.message);
    return null;
  }
}

async function getVariantSKUFromURL(page) {
  return await page.evaluate(() => {
    const url = new URL(window.location.href);
    return url.pathname.split('-').pop().replace('/', '');
  });
}

async function extractVariantData(page) {
  const currentSKU = await getVariantSKUFromURL(page);
  const { currentPrice, originalPrice } = await extractPrice(page);
  const images = await extractImages(page);
  const mainImage = images[0] || '';
  
  return {
    sku: currentSKU,
    price: currentPrice,
    compareAtPrice: originalPrice,
    mainImage,
    allImages: images
  };
}

async function processColorVariants(page, variantsData) {
  const results = [];
  const selectedColor = variantsData.colors.find(c => c.isSelected);
  
  // First collect all non-selected colors
  for (const color of variantsData.colors) {
    if (color.isSelected) continue;
    
    const oldImage = await getMainImageSrc(page);
    const oldSKU = await getVariantSKUFromURL(page);
    
    // Use safeClick with the stored selector
    const clicked = await safeClick(page, color.selector);
    if (!clicked) continue;
    
    // Wait for both SKU and image to change
    await Promise.all([
      page.waitForFunction(
        (sku) => {
          const url = new URL(window.location.href);
          const currentSKU = url.pathname.split('-').pop().replace('/', '');
          return currentSKU !== sku;
        },
        {},
        oldSKU
      ),
      waitForImageChange(page, oldImage)
    ]);
    
    const variantData = await extractVariantData(page);
    results.push({
      ...variantData,
      color: color.label,
      colorImage: color.variantImage
    });
    
    // Return to selected color
    if (selectedColor) {
      await safeClick(page, selectedColor.selector);
      await page.waitForTimeout(2000);
    }
  }
  
  // Then collect selected color data (no need to click)
  if (selectedColor) {
    const variantData = await extractVariantData(page);
    results.unshift({
      ...variantData,
      color: selectedColor.label,
      colorImage: selectedColor.variantImage
    });
  }
  
  return results;
}

export async function extractTargetProductData(page, url) {
  try {
    await gotoTargetWithRetries(page, url);
    console.info("✅ Page loaded, waiting for stability...");
    await page.waitForTimeout(3000);

    // Extract base product info
    const handle = formatHandleFromUrl(url);
    const title = await extractTitle(page, handle);
    const breadcrumbs = await extractBreadcrumbs(page);
    const description = await getDescription(page);
    const variantsData = await extractVariants(page);

    // Process variants
    let colorVariants = [];
    let sizeVariants = [];
    let variantImagesMap = {};
    
    if (variantsData) {
      // Handle Size Group first
      const sizeGroup = variantsData.sizes.find(s => s.label === 'Boys' || s.label === 'Girls');
      if (sizeGroup && !sizeGroup.isSelected) {
        await safeClick(page, sizeGroup.selector);
        await page.waitForTimeout(3000);
        return await extractTargetProductData(page, url);
      }

      // Process Color Variants
      colorVariants = await processColorVariants(page, variantsData);

      // Create variant images mapping
      variantImagesMap = colorVariants.reduce((acc, variant) => {
        acc[variant.sku] = variant.colorImage || variant.mainImage;
        return acc;
      }, {});

      // Process Size Variants
      sizeVariants = variantsData.sizes
        .filter(s => !['Boys', 'Girls'].includes(s.label))
        .map(size => ({
          sku: colorVariants[0]?.sku ||  getVariantSKUFromURL(page),
          price: colorVariants[0]?.price || 0,
          compareAtPrice: colorVariants[0]?.compareAtPrice || 0,
          mainImage: colorVariants[0]?.mainImage || '',
          color: colorVariants[0]?.color || '',
          colorImage: colorVariants[0]?.colorImage || '',
          size: size.label
        }));
    }

    // Compile final data
    const allVariants = [...colorVariants, ...sizeVariants];
    const uniqueImages = [...new Set(allVariants.flatMap(v => v.allImages || []))];

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
      variants: allVariants.map((variant, index) => ({
        Handle: handle,
        "Variant SKU": variant.sku,
        "Option1 Value": variant.color,
        "Option2 Value": variant.size || '',
        "Variant Price": variant.price,
        "Variant Compare At Price": variant.compareAtPrice,
        "Image Src": index === 0 ? uniqueImages.join(', ') : variant.mainImage,
        "Image Position": index + 1,
        "Variant Image": variant.colorImage,
        "Cost per item": variant.price * 0.8, // Assuming 20% margin
        Status: "active"
      })),
      extraImages: uniqueImages.slice(1).map((src, index) => ({
        Handle: handle,
        "Image Src": src,
        "Image Position": index + 2
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