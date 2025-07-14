import { launchBrowser } from './helpers/browser.js';
import { extractTargetProductData } from './helpers/extractors.js';
import { saveToCSVAndExcel } from './helpers/fileIO.js';

(async () => {
  const browser = await launchBrowser();
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  const urls = [
    'https://www.target.com/p/girls-39-sleeveless-tank-dress-cat-38-jack-8482/-/A-94147428?preselect=93629653'
  ];

  for (const url of urls) {
    try {
      console.log(`Processing: ${url}`);
      const { productRow, variants, extraImages } = await extractTargetProductData(page, url);
      await saveToCSVAndExcel(productRow, variants, extraImages);
      console.log(`✅ Successfully processed: ${url}`);
    } catch (error) {
      console.error(`❌ Failed to process ${url}:`, error.message);
    }
  }

  await browser.close();
})();