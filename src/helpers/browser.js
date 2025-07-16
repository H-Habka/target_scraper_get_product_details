// helpers/browser.js
import "dotenv/config";
import { chromium } from "playwright";
const headless = process.env.HEADLESS === "true";

export async function launchBrowser() {
  const browser = await chromium.launch({
    headless: headless,
  });
  return browser;
}
