import { getDescription } from "./description.js";
import {
  calculatePrices,
  extractSKU,
  formatHandleFromUrl,
} from "./formatters.js";
import { gotoTargetWithRetries } from "./gotoWithRetries.js";
import {
  extractBreadcrumbs,
  extractMainImage,
  extractPrice,
  extractTitle,
  getVariantKey,
  handleCollectVariants,
} from "./index.js";

export async function extractTargetProductData(page, url, extraTags) {
  try {
    await gotoTargetWithRetries(page, url);
    console.info("✅ Page loaded, waiting for stability...");
    await page.waitForTimeout(3000);

    // 1. Extract basic identifiers
    const handle = formatHandleFromUrl(url);
    const breadcrumbs = await extractBreadcrumbs(page);
    const description = await getDescription(page);
    const title = await extractTitle(page, handle);

    let anchorsPerVariant;

    anchorsPerVariant = await handleCollectVariants({ page });

    if (
      anchorsPerVariant["Size Group"] &&
      anchorsPerVariant["Size Group"].length
    ) {
      for (const { label, isSelected, anchor } of anchorsPerVariant[
        "Size Group"
      ]) {
        if (label === "Boys" || label === "Girls") {
          if (!isSelected) {
            await anchor.click();
            anchorsPerVariant = await handleCollectVariants({ page });
          }
        }
      }
    }

    const colorKey = getVariantKey(anchorsPerVariant, "Color");
    const sizeKey = getVariantKey(anchorsPerVariant, "Size");

    if (anchorsPerVariant[colorKey]) {
      if (!anchorsPerVariant[colorKey]?.[0]?.isSelected) {
        let oldMainImage = await extractMainImage({ page });

        await anchorsPerVariant[colorKey]?.[0]?.anchor?.click();
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
        anchorsPerVariant = await handleCollectVariants({ page });
      }
    }
    if (anchorsPerVariant[sizeKey]) {
      const anchorsToLoopOn = anchorsPerVariant[sizeKey];
      if (!anchorsToLoopOn?.[0]?.isSelected) {
        await anchorsToLoopOn?.[0]?.anchor?.click();
        await page.waitForFunction(
          (oldUrl) => window.location.href !== oldUrl,
          {},
          page.url()
        );
      }
    }

    const allVariants = [];

    if (anchorsPerVariant[colorKey]) {
      for (const colorVariant of anchorsPerVariant[colorKey]) {
        if (!colorVariant?.isSelected) {
          let oldMainImage = await extractMainImage({ page });

          await colorVariant?.anchor?.click();
          await page.waitForFunction(
            (prevMainImage) => {
              const currMainImage = document.querySelector(
                `div[data-test="image-gallery-item-0"] img`
              )?.src;
              if (
                currMainImage &&
                prevMainImage &&
                currMainImage !== prevMainImage
              )
                return true;
              return false;
            },
            oldMainImage,
            { timeout: 10000 }
          );
        }

        const mainImage = await extractMainImage({ page });

        anchorsPerVariant = await handleCollectVariants({ page });

        const colorVariantLabel = await colorVariant.anchor.evaluate((el) => {
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

        colorVariant.label = colorVariantLabel;

        if (anchorsPerVariant[sizeKey]) {
          const anchorsToLoopOn = anchorsPerVariant[sizeKey];
          for (const sizeVariant of anchorsToLoopOn) {
            await sizeVariant.anchor.click();
            await page.waitForFunction(
              (oldUrl) => window.location.href !== oldUrl,
              {},
              page.url()
            );
            const sku = extractSKU(page.url());

            const sizeVariantLabel = await sizeVariant.anchor.evaluate((el) => {
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

            sizeVariant.label = sizeVariantLabel;

            console.log(
              `${colorVariant.label} -- ${sizeVariant.label} -- ${sku}`
            );

            const { currentPrice, originalPrice } = await extractPrice(page);
            const { variantPrice, compareAtPrice, costPerItem } =
              calculatePrices(currentPrice, originalPrice);

            allVariants.push({
              color: colorVariant.label,
              size: sizeVariant.label,
              sku,
              variantPrice,
              compareAtPrice,
              costPerItem,
              mainImage,
            });
          }
        }
      }
    } else {
      if (anchorsPerVariant[sizeKey]) {
        const anchorsToLoopOn = anchorsPerVariant[sizeKey];
        const mainImage = await extractMainImage({ page });
        for (const sizeVariant of anchorsToLoopOn) {
          await sizeVariant.anchor.click();
          await page.waitForFunction(
            (oldUrl) => window.location.href !== oldUrl,
            {},
            page.url()
          );
          const sku = extractSKU(page.url());

          const label = await sizeVariant.anchor.evaluate((el) => {
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

          sizeVariant.label = label;

          console.log(`${sizeVariant.label} -- ${sku}`);

          const { currentPrice, originalPrice } = await extractPrice(page);
          const { variantPrice, compareAtPrice, costPerItem } = calculatePrices(
            currentPrice,
            originalPrice
          );

          allVariants.push({
            color: null,
            size: sizeVariant.label,
            sku,
            variantPrice,
            compareAtPrice,
            costPerItem,
            mainImage,
          });
        }
      }
    }

    const allShopifyRows = [];

    let option1Name = "";
    let option2Name = "";

    const hasColor = !!anchorsPerVariant[colorKey];
    const hasSize = !!anchorsPerVariant[sizeKey];

    if (hasColor && hasSize) {
      option1Name = "Color";
      option2Name = "Size";
    } else if (hasColor) {
      option1Name = "Color";
      option2Name = "";
    } else if (hasSize) {
      option1Name = "Size";
      option2Name = "";
    } else {
      option1Name = "";
      option2Name = "";
    }

    const finalProductTags = [
      ...new Set([...breadcrumbs.split(","), ...extraTags.split(", ")]),
    ].join(", ");

    for (let index = 0; index < allVariants.length; index++) {
      const variant = allVariants[index];
      allShopifyRows.push({
        Handle: handle,
        Title: index === 0 ? title : "",
        "Body (HTML)": index === 0 ? description : "",
        "Variant SKU": variant.sku || "",
        "Option1 Name": index === 0 ? option1Name : "",
        "Option1 Value": variant?.[option1Name?.toLocaleLowerCase()] || "",
        "Option2 Name": index === 0 ? option2Name : "",
        "Option2 Value": variant?.[option2Name?.toLocaleLowerCase()] || "",
        "Cost per item": variant.costPerItem || "",
        "Variant Price": variant.variantPrice || "",
        // "Variant Compare At Price": variant.compareAtPrice || "",
        "Variant Image": variant.mainImage || "",
        "Image Src": index === 0 ? variant.mainImage : "",
        "Variant Fulfillment Service": "manual",
        "Variant Inventory Policy": "deny",
        "Variant Inventory Tracker": "shopify",
        Type: index === 0 ? "USA Products" : "",
        Vendor: index === 0 ? "Target" : "",
        Tags: index === 0 ? finalProductTags : "",
        original_product_url: index === 0 ? url : "",
      });
    }

    return allShopifyRows;
  } catch (error) {
    console.error(`❌ Error processing ${url}:`, error.message);
    throw error;
  }
}
