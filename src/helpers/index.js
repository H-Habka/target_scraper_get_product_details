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

export async function extractMainImage({ page }) {
  try {
    return await page.$eval(
      `div[data-test="image-gallery-item-0"] img`,
      (img) => img.src
    );
  } catch {
    return "";
  }
}

export async function extractTitle(page, fallbackTitle) {
  try {
    return await page.$eval('h1[data-test="product-title"]', (el) =>
      el.textContent.trim()
    );
  } catch {
    return fallbackTitle?.replace(/_/g, " ") || "";
  }
}

// Helper: extract breadcrumbs
export async function extractBreadcrumbs(page) {
  try {
    return await page.$$eval(
      'a[data-test="@web/Breadcrumbs/BreadcrumbLink"]',
      (anchors) =>
        anchors
          .map((a) => a.textContent.trim().replace(/,/g, ";")) // Replace any inner commas with ;
          .filter(Boolean)
          .join(",")
    );
  } catch {
    return "";
  }
}

export async function handleCollectVariants({ page }) {
  const variantSection = await page.waitForSelector(
    `div[data-module-type="ProductDetailVariationSelector"]`,
    { timeout: 10000 } // 10 seconds in milliseconds
  );

  const variantItemWrapper = await variantSection.$$(
    "div.h-margin-a-module-gap > div"
  );
  const anchorsPerVariant = {};

  let variantOrder = 1;
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
        const isSelected = el.getAttribute("aria-label")?.includes("selected");

        return { isSelected };
      });
      anchorsDetails.push(detail);
    }

    anchorsPerVariant[variantTitle] = {
      items: anchorsDetails.map((item, index) => {
        return { ...item, anchor: anchors[index] };
      }),
      order: variantOrder,
    };

    variantOrder++;
  }

  return anchorsPerVariant;
}

export function generateCompareAtPrice({ variantPrice }) {
  const min = 0.15;
  const max = 0.3;
  const randomPercent = min + Math.random() * (max - min);
  const compareAtPrice = Math.round(variantPrice * (1 + randomPercent));
  return compareAtPrice;
}

export async function waitForImageChangeCheck({ page, anchorToClick }) {
  let oldMainImage = await extractMainImage({ page });

  if (anchorToClick) {
    await anchorToClick.evaluate((el) => el.scrollIntoView());
  }

  await anchorToClick?.click();
  await page.waitForFunction(
    (prevMainImage) => {
      const currMainImage = document.querySelector(
        `div[data-test="image-gallery-item-0"] img`
      )?.src;
      if (currMainImage !== prevMainImage) return true;
      return false;
    },
    oldMainImage,
    { timeout: 10000 }
  );
}

export async function waitForUrlChange({ page }) {
  await page.waitForFunction(
    (oldUrl) => window.location.href !== oldUrl,
    {},
    page.url()
  );
}

export async function extractLabel({ anchor }) {
  const sizeVariantLabel = await anchor.evaluate((el) => {
    // Try to get text from a span inside <a>
    const span = el.querySelector("span");
    let label = span ? span.innerText.trim() : null;

    // If there's an <img> inside <a>, get its alt text
    const img = el.querySelector("img");
    if (!label && img && img.alt) {
      label = img.alt.trim();
    }

    return label;
  });

  return sizeVariantLabel;
}

export async function selectCorrectSizeGroup({ page, sizeGroupAnchors }) {
  if (sizeGroupAnchors?.items && sizeGroupAnchors?.items.length) {
    for (const { label, isSelected, anchor } of sizeGroupAnchors?.items) {
      if (["boys", "girls", "kids"].includes(label?.toLowerCase())) {
        if (!isSelected) {
          await anchor.click();
          anchorsPerVariant = await handleCollectVariants({ page });
        }
      }
    }
  }
}

export function capitalizeFirst(str = "") {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
