import { launchBrowser } from "./helpers/browser.js";
import { extractTargetProductData } from "./helpers/extractors.js";
import { saveToCSVAndExcel } from "./helpers/fileIO.js";

(async () => {
  const browser = await launchBrowser();
  const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
    locale: "en-US",
    timezoneId: "America/New_York",
  });
  const page = await context.newPage();

  const urls = [
    "https://www.target.com/p/girls-39-tumble-shorts-all-in-motion-8482/-/A-93297590",
  ];

  for (const url of urls) {
    try {
      const { productRow, extraImages } = await extractTargetProductData(
        page,
        url
      );
      saveToCSVAndExcel(productRow, extraImages);
      console.log("✅ Saved:", url);
    } catch (err) {
      console.error("❌ Failed:", err.message);
    }
  }

  await browser.close();
})();
