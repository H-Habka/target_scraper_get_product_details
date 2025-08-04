import { getDescription } from "./description.js";
import {
  calculatePrices,
  extractSKU,
  formatHandleFromUrl,
} from "./formatters.js";
import { gotoTargetWithRetries } from "./gotoWithRetries.js";
import {
  capitalizeFirst,
  extractBreadcrumbs,
  extractLabel,
  extractMainImage,
  extractPrice,
  extractTitle,
  handleCollectVariants,
  selectCorrectSizeGroup,
  waitForImageChangeCheck,
  waitForUrlChange,
} from "./index.js";

export async function extractTargetProductData(page, params) {
  const { url, extraTags = "", filters = {} } = params;
  try {
    await gotoTargetWithRetries(page, url);
    console.info("✅ Page loaded, waiting for stability...");
    await page.waitForTimeout(3000);

    // 1. Extract core product info
    const handle = formatHandleFromUrl(url);
    const breadcrumbs = await extractBreadcrumbs(page);
    const description = await getDescription(page);
    const title = await extractTitle(page, handle);

    // 2. Collect variants and handle Size Group if present
    let anchorsPerVariant = await handleCollectVariants({ page });
    await selectCorrectSizeGroup({
      page,
      sizeGroupAnchors: anchorsPerVariant["Size Group"],
    });

    // 3. Detect actual master/slave variant keys (ignore "Size Group")
    const variantKeysOrdered = Object.entries(anchorsPerVariant)
      .filter(([key]) => key !== "Size Group")
      .sort((a, b) => a[1].order - b[1].order)
      .map(([key]) => key);

    const masterKey = variantKeysOrdered[0]; // e.g. "Color" or "Size"
    const slaveKey = variantKeysOrdered[1]; // e.g. "Size" or undefined

    const allVariants = [];

    // 4. Handle NO variant case
    if (!masterKey) {
      // No variants: just one default product row
      const mainImage = await extractMainImage({ page });
      const sku = extractSKU(page.url());
      const { currentPrice, originalPrice } = await extractPrice(page);
      const { variantPrice, compareAtPrice, costPerItem } = calculatePrices(
        currentPrice,
        originalPrice
      );
      allVariants.push({
        sku,
        variantPrice,
        compareAtPrice,
        costPerItem,
        mainImage,
      });
    } else {
      // 5. Master loop
      for (const masterVariant of anchorsPerVariant[masterKey]?.items ?? []) {
        // Click master variant if not selected
        if (!masterVariant?.isSelected) {
          if (masterKey.toLowerCase() === "color") {
            await waitForImageChangeCheck({
              anchorToClick: masterVariant.anchor,
              page,
            });
          } else {
            await masterVariant.anchor.click();
            await waitForUrlChange({ page });
          }
        }

        // Always update variants after master changes
        anchorsPerVariant = await handleCollectVariants({ page });

        // Fetch master label and main image (after color change)
        const masterLabel = await extractLabel({
          anchor: masterVariant.anchor,
        });
        let mainImage = await extractMainImage({ page });

        // 6. Slave loop, if present
        if (slaveKey && anchorsPerVariant[slaveKey]) {
          for (
            let slaveIndex = 0;
            slaveIndex < anchorsPerVariant[slaveKey].items.length;
            slaveIndex++
          ) {
            const slaveVariant = anchorsPerVariant[slaveKey].items[slaveIndex];

            // Scroll container for first slave variant to avoid out-of-view click
            if (slaveIndex === 0 && slaveVariant.anchor) {
              await slaveVariant.anchor.evaluate((el) => {
                if (el?.parentElement?.parentElement?.scrollTo) {
                  el.parentElement.parentElement.scrollTo(0, 0);
                }
              });
              await page.waitForTimeout(100); // Small delay for stability
            }

            if (slaveKey.toLowerCase() === "color") {
              try {
                await waitForImageChangeCheck({
                  anchorToClick: slaveVariant.anchor,
                  page,
                });
              } catch (err) {
                page.waitForTimeout(1000);
              }
              mainImage = await extractMainImage({ page });
            } else {
              await slaveVariant.anchor.click();
              await waitForUrlChange({ page });
            }

            // Fetch slave label
            const slaveLabel = await extractLabel({
              anchor: slaveVariant.anchor,
            });

            const sku = extractSKU(page.url());
            const { currentPrice, originalPrice } = await extractPrice(page);
            const { variantPrice, compareAtPrice, costPerItem } =
              calculatePrices(currentPrice, originalPrice);

            allVariants.push({
              [masterKey.toLowerCase()]: masterLabel,
              [slaveKey.toLowerCase()]: slaveLabel,
              sku,
              variantPrice,
              compareAtPrice,
              costPerItem,
              mainImage,
            });
          }
        } else {
          // No slave, just push master variant
          const sku = extractSKU(page.url());
          const { currentPrice, originalPrice } = await extractPrice(page);
          const { variantPrice, compareAtPrice, costPerItem } = calculatePrices(
            currentPrice,
            originalPrice
          );
          allVariants.push({
            [masterKey.toLowerCase()]: masterLabel,
            sku,
            variantPrice,
            compareAtPrice,
            costPerItem,
            mainImage,
          });
        }
      }
    }

    // 7. Shopify rows mapping
    const option1Name = masterKey || "";
    const option2Name = slaveKey || "";

    const baseTags = "clothes";
    const finalProductTags = extraTags
      ? `${baseTags}, ${extraTags.trim()}`
      : baseTags;

    // Generate unique handle using SKU instead of timestamp
    const firstVariant = allVariants[0];
    const skuSuffix = firstVariant?.sku ? `-${firstVariant.sku}` : `-${Date.now()}`;
    const uniqueHandle = `${handle}${skuSuffix}`;

    const chunkSize = 100; // Shopify limit
    const chunks = [];
    for (let i = 0; i < allVariants.length; i += chunkSize) {
      chunks.push(allVariants.slice(i, i + chunkSize));
    }

    const allShopifyRows = [];
    for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
      const variantsChunk = chunks[chunkIndex];
      // Create a unique handle per chunk
      const chunkHandle =
        chunkIndex === 0 ? uniqueHandle : `${uniqueHandle}-${chunkIndex + 1}`;
      const chunkTitle =
        chunkIndex === 0 ? title : `${title} (Part ${chunkIndex + 1})`;
      for (let index = 0; index < variantsChunk.length; index++) {
        const variant = variantsChunk[index];
        allShopifyRows.push({
          Handle: chunkHandle,
          Title: index === 0 ? chunkTitle : "",
          "Body (HTML)": index === 0 ? description : "",
          "Variant SKU": variant.sku || "",
          "Option1 Name": index === 0 ? capitalizeFirst(option1Name) : "",
          "Option1 Value": variant?.[option1Name?.toLowerCase()] || "",
          "Option2 Name": index === 0 ? capitalizeFirst(option2Name) : "",
          "Option2 Value": variant?.[option2Name?.toLowerCase()] || "",
          "Cost per item": variant.costPerItem || "",
          "Variant Price": variant.variantPrice || "",
          // ... other fields ...
          "Variant Image": variant.mainImage || "",
          "Image Src": index === 0 ? variant.mainImage : "",
          "Variant Fulfillment Service": "manual",
          "Variant Inventory Policy": "deny",
          "Variant Inventory Tracker": "shopify",
          Type: index === 0 ? "USA Products" : "",
          Vendor: index === 0 ? "Target" : "",
          Tags: index === 0 ? finalProductTags : "",
          "product.metafields.custom.original_prodect_url":
            index === 0 ? url : "",
          "product.metafields.custom.brand":
            index === 0 ? filters.brand || "" : "",
          "product.metafields.custom.item_type":
            index === 0 ? filters.type || "" : "",
        });
      }
    }

    return allShopifyRows;
  } catch (error) {
    console.error(`❌ Error processing ${url}:`, error.message);
    throw error;
  }
}
