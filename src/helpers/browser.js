// helpers/browser.js
import { chromium } from "playwright";

export async function launchBrowser() {
  const browser = await chromium.launch({
    headless: false,
  });
  return browser;
}
