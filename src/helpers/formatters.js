import { generateCompareAtPrice } from "./index.js";
import { EXCHANGE_RATE, VARAINT_PRICE_RATE } from "./constants.js";

// helpers/formatters.js
export function formatHandleFromUrl(url) {
  try {
    const urlObj = typeof url === "string" ? new URL(url) : url;
    const pathParts = urlObj.pathname.split("/");
    const baseHandle = pathParts[2]?.replace(/-+$/, "");
    const sku = extractSKU(urlObj);

    if (!baseHandle || !sku) return null;

    return `${baseHandle.replace(/[^\w-]/g, "")}_${sku}`.toLowerCase();
  } catch (error) {
    console.error("❌ Invalid URL for handle extraction:", error.message);
    return null;
  }
}

export function extractSKU(url) {
  try {
    const urlObj = typeof url === "string" ? new URL(url) : url;
    return (
      urlObj.searchParams.get("preselect") ||
      urlObj.pathname.match(/\/A-(\d+)/)?.[1] ||
      null
    );
  } catch (error) {
    console.error("❌ Invalid URL for SKU extraction:", error.message);
    return null;
  }
}

export function calculatePrices(currentPrice, originalPrice) {
  const costPerItemInDollar = originalPrice ?? currentPrice;
  const costPerItem = +costPerItemInDollar * EXCHANGE_RATE;
  const variantPrice = costPerItem * VARAINT_PRICE_RATE;

  return {
    variantPrice: Math.floor(variantPrice) + 0.99,
    costPerItem: costPerItem.toFixed(2),
    compareAtPrice: generateCompareAtPrice({ variantPrice }),
  };
}
