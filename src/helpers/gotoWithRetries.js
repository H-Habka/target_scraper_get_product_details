import { SELECTORS } from './constants.js';

export async function gotoTargetWithRetries(page, url, retries = 3) {
  const fallbackSelectors = [
    'h1[data-test="product-title"]', // Product title
    '[data-test="product-price"]',   // Price
    'div[data-test="image-container"]' // Image
  ];

  for (let i = 0; i <= retries; i++) {
    try {
      console.log(`🌐 Loading URL (attempt ${i+1}/${retries+1})}`);
      
      await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 60000
      });

      // Wait for any of the key elements to appear
      await Promise.any([
        ...fallbackSelectors.map(selector => 
          page.waitForSelector(selector, { timeout: 15000 })
        ),
        page.waitForTimeout(10000) // Fallback timeout
      ]);

      return; // Success
    } catch (error) {
      console.warn(`⚠️ Attempt ${i+1} failed: ${error.message}`);
      if (i === retries) throw error;
      await page.waitForTimeout(3000 * (i+1)); // Exponential backoff
    }
  }
}