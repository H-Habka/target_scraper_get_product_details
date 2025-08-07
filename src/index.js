import { launchBrowser } from "./helpers/browser.js";
import { extractTargetProductData } from "./helpers/extractors.js";
import { saveToCSVAndExcel } from "./helpers/fileIO.js";

(async () => {
  const browser = await launchBrowser();
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    locale: "en-US",
    timezoneId: "America/New_York",
    viewport: { width: 1366, height: 768 },
    colorScheme: "light",
    extraHTTPHeaders: {
      "Accept-Language": "en-US,en;q=0.9",
    },
  });

  const page = await context.newPage();

  const urls = [
    {
      url: "https://www.target.com/p/dc-comics-justice-league-superman-batman-waterproof-rain-jacket-cape-and-umbrella-3-piece-set-toddler-to-little-kid/-/A-88164456",
      tags: "Coats & Jackets, Rain Coats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/bluey-zip-up-waterproof-hooded-rain-jacket-coat-toddler-sizes-2t-7-8/-/A-1000177582",
      tags: "Coats & Jackets, Rain Coats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/bluey-zip-up-waterproof-hooded-rain-jacket-coat-toddler/-/A-1003487702",
      tags: "Coats & Jackets, Rain Coats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-blue-shark-print-raincoat/-/A-90950501",
      tags: "Coats & Jackets, Rain Coats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-39-heart-printed-clear-rain-jacket-cat-38-jack-8482-pink/-/A-94482959",
      tags: "Coats & Jackets, Rain Coats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-colorblock-clear-rain-jacket-cat-38-jack-8482-green-blue-orange/-/A-94482958",
      tags: "Coats & Jackets, Rain Coats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-long-sleeve-flannel-hoodie-jacket-cat-jack-orange/-/A-94474451",
      tags: "Coats & Jackets, Shirt Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Shirt Jackets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-twill-snap-front-jacket-cat-38-jack-8482-brown/-/A-94505032",
      tags: "Coats & Jackets, Shirt Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Shirt Jackets",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-little-big-boys-heavyweight-snow-bibs/-/A-93093471",
      tags: "Coats & Jackets, Snow Bibs, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Snow Bibs",
      },
    },
    {
      url: "https://www.target.com/p/london-fog-boys-classic-heavyweight-snow-bib/-/A-89627029",
      tags: "Coats & Jackets, Snow Bibs, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Snow Bibs",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-full-zip-softshell-jacket-cat-38-jack-8482/-/A-94467845",
      tags: "Coats & Jackets, Softshell Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Softshell Jackets",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-toddler-boys-indigo-trucker-jacket-medium-wash/-/A-86745524",
      tags: "Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing, Trucker Jackets",
      filters: {
        type: "Trucker Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-boys-fleece-lined-full-zip-windbreaker-rain-jacket/-/A-91335122",
      tags: "Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing, Windbreakers",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/kids-ramsey-rain-jacket-olive-scout/-/A-1002255256",
      tags: "Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing, Windbreakers",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-two-piece-mid-season-outerwear-set-blue-and-gray/-/A-1003125686",
      tags: "Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing, Windbreakers",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-two-piece-mid-season-outerwear-set-pale-green-sage-tan-and-gray/-/A-1003108097",
      tags: "Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing, Windbreakers",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-colorblock-printed-two-piece-mid-season-outerwear-set-forest-green-with-black-pines/-/A-1003130492",
      tags: "Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing, Windbreakers",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-colorblock-printed-two-piece-mid-season-outerwear-set-navy-blue-mountains-and-taupe/-/A-1003125761",
      tags: "Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing, Windbreakers",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-two-piece-mid-season-outerwear-set-royal-blue-and-black/-/A-1003119900",
      tags: "Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing, Windbreakers",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/minime-baby-and-toddler-unisex-hooded-reversible-cotton-rich-star-print-quilted-jacket/-/A-1002435795",
      tags: "Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing, Wrap Jackets",
      filters: {
        type: "Wrap Jackets",
      },
    },
    {
      url: "https://www.target.com/p/bluey-hawaiian-button-down-dress-shirt-toddler-to-big-kid/-/A-88942325",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-millennium-falcon-tie-fighter-x-wing-button-down-dress-shirt-toddler/-/A-87571913",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/ruggedbutts-boys-short-sleeve-button-down-shirt/-/A-89058932",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-short-sleeve-button-down-shirt/-/A-91648762",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-hawaiian-matching-family-hawaiian-button-down-shirt-little-kid-to-big/-/A-91789913",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-hawaiian-matching-family-hawaiian-button-down-dress-shirt-toddler/-/A-91789886",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-toy-story-mickey-mouse-cars-nightmare-before-christmas-button-down-shirt-toddler-to-big-kid/-/A-88622612",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-long-sleeve-oxford-button-down-shirt-cat-jack-white/-/A-92974926",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-short-sleeve-4th-of-july-food-button-down-shirt-cat-38-jack-8482-cream/-/A-94284346",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-embroidered-shark-t-shirt-cat-38-jack-8482-dark-blue/-/A-93276631",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-short-sleeve-halloween-button-down-shirt-cat-38-jack-8482-black/-/A-94502377",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-long-sleeve-dot-printed-39-button-down-39-shirt-cat-38-jack-8482-navy-blue/-/A-91114552",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-navy-gingham-button-down-shirt/-/A-84946297",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-junior-flannel-button-down-dress-shirt-toddler-sizes-2t-14-16/-/A-1000179250",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing, T-shirts",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-blue-chambray-button-down-shirt/-/A-84946394",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-hawaiian-button-down-dress-shirt-matching-family-toddler-to-adult/-/A-88713723",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-blue-chambray-button-down-shirt/-/A-84946280",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-white-poplin-button-down-shirt/-/A-84946290",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-alley-club-button-down-shirt-olive-scout-x-julie-sousa/-/A-1004218960",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/ruggedbutts-toddler-boys-long-sleeve-button-down-shirt/-/A-1003239726",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-grey-chambray-button-down-shirt/-/A-84946309",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-lt-blue-chambray-racecar-buttondown-shirt/-/A-93590434",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/ruggedbutts-toddler-boys-long-sleeve-button-down-shirt-rowan-plaid-2t/-/A-1001186402",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-long-sleeve-button-down-shirt-white-2-years/-/A-1003010429",
      tags: "Button Down Shirts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-slant-pocket-bermuda-shorts-royal-blue-striped/-/A-1003635299",
      tags: "Chino Shorts, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-baby-cotton-gauze-matching-family-button-down-shirt-and-shorts-outfit-set-newborn-to-infant/-/A-92997041",
      tags: "Coordinate Sets, Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-mickey-mouse-woven-gauze-button-up-top-shorts-set-blue/-/A-93726603",
      tags: "Coordinate Sets, Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-navy-vest-buttondown-shirt-set/-/A-93591066",
      tags: "Coordinate Sets, Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-boys-rust-plaid-two-faced-buttondown-set/-/A-90116796",
      tags: "Coordinate Sets, Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-boys-heather-charcoal-yeti-knit-pique-buttondown-set/-/A-89889505",
      tags: "Coordinate Sets, Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-chambray-polo-and-vest-set/-/A-1002581606",
      tags: "Coordinate Sets, Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-4-peice-plaid-short-set/-/A-1002581578",
      tags: "Coordinate Sets, Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-boys-navy-holiday-sharks-knit-pique-buttondown-set/-/A-89854540",
      tags: "Coordinate Sets, Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-plaid-buttondown-two-fer-shirt-and-pants-set/-/A-91665285",
      tags: "Coordinate Sets, Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-long-sleeve-buttondown-pant-set/-/A-1002581509",
      tags: "Coordinate Sets, Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/ruggedbutts-navy-sun-protective-button-down-shirt/-/A-88348863",
      tags: "Cover Ups, Dresswear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Cover Ups",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-mesh-baseball-jersey-button-down-dress-shirt-toddler/-/A-1000748792",
      tags: "Dresswear, Jerseys, Toddler Boys’ Clothing, Toddler Clothing, T-shirts",
      filters: {
        type: "Jerseys",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-mesh-baseball-jersey-button-down-dress-shirt-toddler/-/A-1000748795",
      tags: "Dresswear, Jerseys, Toddler Boys’ Clothing, Toddler Clothing, T-shirts",
      filters: {
        type: "Jerseys",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-long-sleeve-interlock-uniform-polo-shirt-cat-38-jack-8482/-/A-88297978",
      tags: "Dresswear, Polo Shirts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-short-sleeve-interlock-uniform-polo-shirt-cat-38-jack-8482/-/A-88297984",
      tags: "Dresswear, Polo Shirts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-chambray-solid-pull-on-shorts-cat-jack/-/A-90748190",
      tags: "Dresswear, Pull-on Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-alley-club-shorts-olive-scout-x-julie-sousa/-/A-1004218970",
      tags: "Dresswear, Pull-on Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-trucks-grave-digger-short-sleeve-button-down-dress-shirt/-/A-87239192",
      tags: "Dresswear, T-shirts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-grave-digger-el-toro-loco-megalodon-truck-matching-family-hawaiian-button-down-shirt-toddler/-/A-1003418608",
      tags: "Dresswear, T-shirts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-scooby-doo-surfboard-hawaiian-button-down-shirt-little-kid-to-big/-/A-92697920",
      tags: "Dresswear, T-shirts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/baby-boys-2pc-disney-mickey-mouse-onesie-shorts-suspender-set-blue/-/A-93726608",
      tags: "Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
      filters: {
        type: "Top and Bottom Sets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-button-down-top-and-woven-shorts-set-navy-blue-khaki/-/A-93780382",
      tags: "Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
      filters: {
        type: "Top and Bottom Sets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-39-gosh-toddler-boys-39-short-sleeve-horizontal-striped-woven-top-and-shorts-set-blue/-/A-92929729",
      tags: "Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
      filters: {
        type: "Top and Bottom Sets",
      },
    },
    {
      url: "https://www.target.com/p/slant-pocket-pants-navy-blue/-/A-1002803560",
      tags: "Dresswear, Toddler Boys’ Clothing, Toddler Clothing, Trousers",
      filters: {
        type: "Trousers",
      },
    },
  ];

  let allShopifyRows = [];
  let failedUrls = [];
  let currentIndex = 0;
  const total = urls.length;

  for (const urlEntry of urls) {
    let params;
    if (typeof urlEntry === "string") {
      params = {
        url: urlEntry,
        extraTags: "",
        filters: {},
      };
    } else if (typeof urlEntry === "object" && urlEntry.url) {
      params = {
        url: urlEntry.url,
        extraTags: urlEntry.tags || "",
        filters: typeof urlEntry.filters === "object" ? urlEntry.filters : {},
      };
    } else {
      console.warn("❌ Invalid urlEntry:", urlEntry);
      failedUrls.push(urlEntry);
      continue;
    }

    try {
      const shopifyRows = await extractTargetProductData(page, params);
      allShopifyRows.push(...shopifyRows);
      currentIndex++;
      console.log(
        `✅ One Success - Progress: ${currentIndex}/${total} (${(
          (currentIndex / total) *
          100
        ).toFixed(1)}%)`
      );
    } catch (err) {
      console.error("❌ Failed:", params.url, err.message);
      currentIndex++;
      console.log(
        `❌ One Failed - Progress: ${currentIndex}/${total} (${(
          (currentIndex / total) *
          100
        ).toFixed(1)}%)`
      );
      failedUrls.push({ url: params.url, tags: params.extraTags });
    }
  }

  saveToCSVAndExcel({
    productRow: allShopifyRows,
    excel: false,
    csv: true,
    failedUrls,
  });
  console.log("✅ Saved all to single output file.");

  // Save results to JSON files

  await browser.close();
})();
