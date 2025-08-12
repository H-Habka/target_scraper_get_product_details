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

  const urls =  [
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-parachute-cargo-pocket-shorts-dark-gray/-/A-1003635976",
        "tags": "Bottoms, Cargo Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Cargo Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-parachute-cargo-pocket-shorts-dark-teal/-/A-1003636029",
        "tags": "Bottoms, Cargo Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Cargo Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-khaki-4t/-/A-92698507",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-khaki-3t/-/A-92698506",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-stretch-flat-front-uniform-chino-shorts-cat-jack/-/A-87050930",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-gray-3t/-/A-92698500",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-khaki-2t/-/A-92698505",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-gray-4t/-/A-92698501",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-khaki-5t/-/A-92698508",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-gray-2t/-/A-92698499",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-gray-5t/-/A-92698502",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-khaki-18m/-/A-92698504",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-gray-18m/-/A-92698498",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-khaki-12m/-/A-92698503",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-gray-12m/-/A-92698497",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-quick-dry-chino-shorts-cat-jack/-/A-94887860",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-uniform-quick-dry-shorts-cat-38-jack-8482/-/A-94253665",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-quick-dry-pull-on-shorts-cat-38-jack-8482/-/A-94087123",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Pull-on Shorts",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-adaptive-quick-dry-shorts-cat-38-jack-8482-tan/-/A-93300537",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Toddler Boys’ Adaptive Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/hope-henry-boys-organic-cotton-stretch-chino-short-toddler/-/A-85566581",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Trouser Shorts",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-chino-shorts-navy-blue/-/A-93780397",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-chino-shorts-green/-/A-92929733",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-boys-stretch-chino-shorts/-/A-1003239776",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-stretch-twill-short-vibrant-orange/-/A-1003484721",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Pull-on Shorts",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/hope-henry-boys-linen-blend-short-toddler/-/A-1002929846",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Trouser Shorts",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-slant-pocket-bermuda-shorts-royal-blue-striped/-/A-1003635299",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-slant-pocket-bermuda-shorts-navy-blue-striped/-/A-1003635251",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-slant-pocket-bermuda-shorts-light-taupe/-/A-1003607654",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-slant-pocket-bermuda-shorts-navy-blue/-/A-1003635287",
        "tags": "Bottoms, Chino Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Chino Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-boys-hybrid-shorts/-/A-1002893230",
        "tags": "Bottoms, Fashion Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Pull-on Shorts",
        "filters": {
          "type": "Fashion Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-french-terry-short-beige-with-palm-trees/-/A-1003635356",
        "tags": "Bottoms, Fashion Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Pull-on Shorts",
        "filters": {
          "type": "Fashion Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-short-gradient-beige-and-teal/-/A-1003636810",
        "tags": "Bottoms, Fashion Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Fashion Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-chambray-short-pale-blue-and-navy/-/A-1003635375",
        "tags": "Bottoms, Fashion Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Fashion Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/hope-henry-boys-organic-cotton-chambray-short-toddler/-/A-91302777",
        "tags": "Bottoms, Jean Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Jean Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-denim-shortalls-medium-wash/-/A-93780393",
        "tags": "Bottoms, Jean Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Jean Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-railroad-striped-shortalls-red/-/A-93780372",
        "tags": "Bottoms, Jean Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Jean Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/rufflebutts-toddler-boys-stretch-denim-shorts/-/A-91546913",
        "tags": "Bottoms, Jean Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Jean Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-denim-short-black-jeans/-/A-1003636053",
        "tags": "Bottoms, Jean Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Jean Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-denim-short-dark-denim-blue/-/A-1003484669",
        "tags": "Bottoms, Jean Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Jean Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-denim-short-denim-blue/-/A-1003636054",
        "tags": "Bottoms, Jean Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Jean Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/mixed-up-clothing-boys-sweatshorts-jacquard-stripe/-/A-93209666",
        "tags": "Bottoms, Jogger Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Pull-on Shorts",
        "filters": {
          "type": "Jogger Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-boys-solid-color-green-soft-casual-style-shorts/-/A-1003286350",
        "tags": "Bottoms, Jogger Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Pull-on Shorts",
        "filters": {
          "type": "Jogger Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-short-teal/-/A-1003635409",
        "tags": "Bottoms, Lounge Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Pull-on Shorts",
        "filters": {
          "type": "Lounge Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-short-vibrant-orange/-/A-1003635279",
        "tags": "Bottoms, Lounge Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Pull-on Shorts",
        "filters": {
          "type": "Lounge Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-zip-pocket-shorts-navy-blue/-/A-1003635466",
        "tags": "Bottoms, Lounge Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Lounge Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-short-black/-/A-1003635453",
        "tags": "Bottoms, Lounge Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Lounge Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-zip-pocket-shorts-pale-mauve-blue/-/A-1003635432",
        "tags": "Bottoms, Lounge Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Pull-on Shorts",
        "filters": {
          "type": "Lounge Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-pull-on-shorts-cat-jack/-/A-89735210",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-pull-on-woven-shorts-cat-jack/-/A-93536722",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-pull-on-knit-shorts-cat-jack/-/A-92761977",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-pull-on-denim-shorts-cat-jack/-/A-94743237",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-pull-on-cargo-shorts-cat-jack/-/A-93876110",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-button-front-destructed-shorts-cat-38-jack-8482-light-blue/-/A-94280113",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-3pk-fun-shorts-cat-38-jack-8482-red-gray-blue/-/A-94068015",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-3pk-dino-printed-pull-on-shorts-cat-38-jack-8482-dark-olive-green/-/A-94087121",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-pull-on-denim-shorts-cat-38-jack-8482/-/A-93276635",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-3pk-racecar-shorts-cat-38-jack-8482-blue/-/A-94474450",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-pull-on-denim-shorts-cat-jack-black/-/A-94474468",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-pull-on-woven-shorts-cat-jack-brown/-/A-94621426",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-denim-shorts-cat-jack/-/A-93016711",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-knit-shorts-cat-jack-green/-/A-94579538",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-2pk-adaptive-knit-shorts-cat-38-jack-8482-black-red/-/A-93300536",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Toddler Boys’ Adaptive Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-2pk-adaptive-knit-shorts-cat-38-jack-8482-navy-blue-olive-green/-/A-93300714",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Toddler Boys’ Adaptive Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-chambray-solid-pull-on-shorts-cat-jack/-/A-90748190",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-5pk-knit-shorts-cat-38-jack-8482-white-green-blue/-/A-94582866",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-5pk-knit-shorts-cat-38-jack-8482/-/A-89646905",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-striped-chambray-pull-on-shorts-cat-jack/-/A-90047395",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-2pk-knit-shorts-cat-jack/-/A-94664496",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-and-toddler-boys-shorts-2-pack/-/A-91511134",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-and-toddler-boys-knit-short-3-pack/-/A-91212269",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-and-toddler-boys-pull-on-knit-shorts-3-pack/-/A-91219730",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/hope-henry-boys-relaxed-linen-pull-on-short-toddler/-/A-86713686",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/grayson-mini-toddler-boys-camo-shorts/-/A-94486229",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/grayson-mini-toddler-boys-striped-shorts/-/A-94339708",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/grayson-mini-toddler-boys-checkered-shorts/-/A-94486231",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/grayson-mini-toddler-boys-french-terry-drop-crotch-pull-on-shorts-blue/-/A-91553007",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/grayson-mini-toddler-boys-tie-dye-french-terry-drop-crotch-pull-on-shorts/-/A-91553008",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-boys-pull-on-shorts/-/A-1003240302",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-cotton-boys-soft-above-knee-side-pocket-shorts-upf-50/-/A-92721418",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-boxer-shorts-light-sage-and-gray-crocodile/-/A-1004084211",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-boxer-shorts-dinosaur-on-mottled-and-tan-background/-/A-1004084250",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-boys-hybrid-shorts/-/A-1002728062",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-coral-seersucker-shorts/-/A-1002727979",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-boardshorts-blue-wave-and-black/-/A-1004084047",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-boxer-shorts-sloths-on-tan-background/-/A-1004084208",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-stretch-twill-short-green/-/A-1003484695",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-stretch-twill-short-dark-olive-green/-/A-1003484708",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-boardshorts-orange-red-and-blue-sharks-on-gray/-/A-1004084093",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-boys-solid-color-cotton-casual-style-shorts/-/A-1003193942",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-stretch-twill-short-tan/-/A-1003484682",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-boxer-shorts-pack-of-3-multicolored/-/A-1004084256",
        "tags": "Bottoms, Pull-on Shorts, Shorts, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Pull-on Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/hope-henry-boys-organic-cotton-seersucker-short-toddler/-/A-83229503",
        "tags": "Bottoms, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Trouser Shorts",
        "filters": {
          "type": "Trouser Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/hope-henry-boys-organic-seersucker-short-toddler/-/A-91302827",
        "tags": "Bottoms, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Trouser Shorts",
        "filters": {
          "type": "Trouser Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/hope-henry-heirloom-boys-linen-blend-short-toddler/-/A-1001269810",
        "tags": "Bottoms, Shorts, Toddler Boys’ Clothing, Toddler Clothing, Trouser Shorts",
        "filters": {
          "type": "Trouser Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-sharks-printed-embossed-pullover-cover-up-cat-jack-blue/-/A-92000741",
        "tags": "Cover Ups, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Cover Ups"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-towel-terry-full-zip-hoodie-cover-up-top-cat-jack-white/-/A-89417645",
        "tags": "Cover Ups, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing, Hoodies & Sweatshirts, Tops",
        "filters": {
          "type": "Cover Ups"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-navy-sun-protective-button-down-shirt/-/A-88348863",
        "tags": "Cover Ups, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Cover Ups"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-cars-one-piece-rash-guard-red-black/-/A-91940264",
        "tags": "One-piece Rash Guards, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "One-piece Rash Guards"
        }
      },
      {
        "url": "https://www.target.com/p/adaptive-short-sleeve-reversible-one-piece-rashguard-cat-38-jack-8482-blue-yellow/-/A-93575146",
        "tags": "One-piece Rash Guards, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "One-piece Rash Guards"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-toddler-boys-rashguard/-/A-91257182",
        "tags": "One-piece Rash Guards, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "One-piece Rash Guards"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-long-sleeve-rashguard-light-blue-beach-on-black/-/A-1004084282",
        "tags": "One-piece Rash Guards, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "One-piece Rash Guards"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-spider-man-zip-up-one-piece-bathing-suit-toddler/-/A-87972642",
        "tags": "One-piece Swimsuits, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "One-piece Swimsuits"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-swim-upf-50-rashguard-lap-onesie-for-boys-and-girls/-/A-91487752",
        "tags": "One-piece Swimsuits, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "One-piece Swimsuits"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-and-toddler-boys-long-sleeved-rashguard-one-piece-swimsuit/-/A-1001847462",
        "tags": "One-piece Swimsuits, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "One-piece Swimsuits"
        }
      },
      {
        "url": "https://www.target.com/p/finis-cozy-kids-one-piece-thermal-swimmer-upf-50/-/A-1001873233",
        "tags": "One-piece Swimsuits, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "One-piece Swimsuits"
        }
      },
      {
        "url": "https://www.target.com/p/carter-s-just-one-you-toddler-boys-long-sleeve-solid-rash-guard-and-trunk-set-green/-/A-94087239",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/carter-s-just-one-you-toddler-boys-long-sleeve-dinosaur-rash-guard-and-trunk-set-blue/-/A-94087238",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-mickey-mouse-palm-tree-rash-guard-set-green/-/A-92000718",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-spider-man-rash-guard-set-white-blue-red/-/A-92000712",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/carter-s-just-one-you-baby-boys-long-sleeve-landscape-printed-rash-guard-set-blue-orange/-/A-94582900",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/carter-s-just-one-you-toddler-boys-long-sleeve-gingham-checkered-rash-guard-set-blue-navy-blue/-/A-92198435",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/carter-s-just-one-you-toddler-boys-long-sleeve-sharks-printed-rash-guard-set-navy-blue/-/A-94582918",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/carter-s-just-one-you-toddler-boys-long-sleeve-anchors-printed-rash-guard-set-blue-red/-/A-94582917",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/carter-s-just-one-you-toddler-boys-long-sleeve-dinosaur-printed-rash-guard-set-green/-/A-94582919",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/carter-s-just-one-you-toddler-boys-4th-of-july-long-sleeve-shark-rash-guard-and-trunk-set-red-white-blue/-/A-94087240",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-crab-printed-rash-guard-set-cat-jack-red/-/A-93447252",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-short-sleeve-skateboarding-flamingo-rashguard-swim-set-cat-jack-blue/-/A-94342798",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/carter-s-just-one-you-toddler-boys-long-sleeve-rash-guard-set/-/A-90573294",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-spider-man-captain-america-hulk-iron-man-pullover-rash-guard-swim-trunks-outfit-set-toddler-to-big-kid/-/A-86918016",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-and-toddler-boys-long-sleeved-rashguard-swimsuit-set-2-piece/-/A-91114577",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-and-toddler-boys-rashguard-and-swim-trunks-and-trunks-set-2-piece/-/A-91257135",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/bluey-bingo-dad-mom-pullover-rash-guard-and-swim-trunks-outfit-set-toddler/-/A-86918185",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-desert-cactus/-/A-91838510",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-gone-surfing/-/A-91838485",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-rash-guard-and-swim-trunks-outfit-set-toddler-to-little-kid/-/A-86918112",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-d100-toy-story-monsters-inc-mickey-mouse-buzz-lightyear-rash-guard-and-swim-trunks-outfit-infant-to-toddler/-/A-89277207",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-sea-turtle/-/A-91838441",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-shark-patrol/-/A-91838644",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-mint-surfer/-/A-91838629",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/carter-s-just-one-you-toddler-boys-long-sleeve-hooded-dino-rash-guard-set-navy-blue-orange/-/A-89456421",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-surfboard-upf-50-rash-guard-shirt-swim-trunks-outfit-set-toddler/-/A-86953399",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-spider-man-toddler-boys-swim-rash-guard-swim-trunks-blue-4t/-/A-86952001",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-rubble-marshall-chase-pullover-rash-guard-and-swim-trunks-outfit-set-toddler/-/A-86906912",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/transformers-megatron-optimus-prime-bumblebee-rash-guard-and-swim-trunks-outfit-set-toddler-to-big-kid/-/A-88164891",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-ice-cream-truck/-/A-91838541",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-pirate-octopus/-/A-91838589",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-space/-/A-91838641",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-whale-hello-there/-/A-91876469",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-navy-palm/-/A-91838368",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-rawr/-/A-91838337",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-sea-octopus/-/A-91838592",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-looking-sharp-shark/-/A-91838338",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-beach-vibe-dino/-/A-91838392",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-chameleon/-/A-91838595",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-taco/-/A-91838519",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-sea-characters/-/A-91876490",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/quicksand-infant-toddler-and-little-boy-s-rash-guard-and-trunks-swimsuit-sets/-/A-92447312",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/ocean-pacific-toddler-little-and-big-boy-s-rash-guard-and-trunks-swimsuit-sets/-/A-92359809",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/lands-end-kids-chlorine-resistant-short-sleeve-upf-50-rash-guard-swim-trunk-set/-/A-91687429",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-toy-story-alien-rex-slinky-dog-woody-baby-pullover-rash-guard-and-swim-trunks-outfit-set-infant-to-little-kid/-/A-86908194",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-navy-anchor/-/A-91838321",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-junior-surfboard-upf-50-rash-guard-and-swim-trunks-outfit-set-toddler/-/A-1002443450",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/ms-rachel-dinosaur-upf-50-rash-guard-and-swim-trunks-outfit-set-toddler/-/A-1003546592",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-rash-guard-shirt-and-swim-trunks-outfit-set-toddler-sizes-2t-14-16/-/A-86964158",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/teenage-mutant-ninja-turtles-upf-50-pullover-rash-guard-and-swim-trunks-outfit-set-toddler/-/A-1001808895",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-hulk-spider-man-boys-rash-guard-and-swim-trunks-outfit-set-toddler-to-big-kid/-/A-88140562",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-just-chillin/-/A-91876485",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-surfer-dude/-/A-91838351",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-ride-the-waves/-/A-91838661",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-pineapple/-/A-92180138",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-upf-50-pullover-rash-guard-and-swim-trunks-outfit-set-toddler-sizes-2t-18-20/-/A-1002634240",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/thomas-friends-toddler-boys-upf-50-rash-guard-and-swim-trunks-outfit-set-bright-blue-red-5t/-/A-1001646437",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-toddler-boys-two-piece-swim-trunks-and-long-sleeve-rash-guard-set/-/A-1002881110",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-vacay-mode/-/A-91876414",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-ocean-explorer/-/A-92180187",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-ahoy-mate-shark/-/A-91876437",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-going-on-safari/-/A-91838489",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-pirate-shark/-/A-92125733",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-shark-expert/-/A-91876450",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-navy-short-sleeve-rashguard-and-mint-colorblock-swim-trunk/-/A-88271242",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-boys-swim-rashguard-set-dino-mite/-/A-91838600",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/p-s-from-aeropostale-little-boy-s-2-piece-rashguard-swim-sets/-/A-92725476",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/cocomelon-tomtom-jj-cody-nico-mochi-wally-short-sleeve-rash-guard-swim-shirt-swim-trunks-bathing-suit/-/A-86918164",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/jurassic-park-t-rex-upf-50-rash-guard-twill-swim-trunks-outfit-set-toddler/-/A-92194700",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-flamingo-graphic-raglan-rashguard-and-boardshort-set/-/A-90719709",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-sailboat-graphic-rashguard-set/-/A-1001718584",
        "tags": "Rash Guard Sets, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Sets"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-long-sleeve-rash-guard/-/A-89242052",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/rufflebutts-gender-inclusive-long-sleeve-full-zip-rash-guard/-/A-1003432669",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-long-sleeve-rash-guard-top-cat-jack/-/A-90008443",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-short-sleeve-rash-guard-top-cat-jack/-/A-90008391",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-short-sleeve-rash-guard-top-cat-jack-red/-/A-94342790",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-short-sleeve-rash-guard-top-cat-jack-lime-green/-/A-93447257",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-baby-long-sleeve-rash-guard/-/A-89242053",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-swim-upf-50-hooded-long-sleeve-rashguard-tee-for-boys-and-girls/-/A-91533747",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/leveret-toddler-long-sleeve-rashguard-upf-50/-/A-89083504",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/green-sprouts-baby-toddler-long-sleeve-zip-rashguard-shirt/-/A-89227483",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-boys-upf-50-long-sleeve-rashguard/-/A-91332879",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-spider-man-captain-america-hulk-thor-black-widow-black-panther-rash-guard-swim-shirt-toddler-to-big-kid/-/A-88031554",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/leveret-toddler-short-sleeve-rashguard-upf-50/-/A-89083661",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/primary-baby-rash-guard/-/A-1003056191",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-toddler-neutral-swim-rashguard-upf-50/-/A-1002929681",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-boys-upf50-sun-protected-zipper-long-sleeve-rash-guard/-/A-1001533343",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-boys-upf-50-short-sleeve-rashguard/-/A-92082592",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-swim-upf-50-boys-color-block-long-sleeve-rashguard-shirt/-/A-91534089",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-boys-upf50-short-sleeve-rash-guard-coral-2t/-/A-1001818053",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/saro-2025-long-sleeve-upf-50-swim-shirt-for-kids-ultra-soft-chlorine-resistant-quick-dry-sun-protection-top/-/A-1003127068",
        "tags": "Rash Guard Tops, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Rash Guard Tops"
        }
      },
      {
        "url": "https://www.target.com/p/leveret-baby-reusable-swim-diaper-upf-50/-/A-1002371232",
        "tags": "Swim Pants, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Pants"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-swim-leggings-for-girls-and-boys-upf-50/-/A-91372641",
        "tags": "Swim Pants, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Pants"
        }
      },
      {
        "url": "https://www.target.com/p/green-sprouts-baby-toddler-eco-snap-swim-diaper/-/A-1003484744",
        "tags": "Swim Pants, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Pants"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-boys-swim-trunks/-/A-88678445",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-boys-upf50-swim-trunks/-/A-91269906",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-bluey-swim-shorts-blue/-/A-91940233",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-bluey-4th-of-july-stripe-swim-shorts-red-white-blue/-/A-94336251",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-monster-jam-checker-swim-shorts-black/-/A-94336252",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-toy-story-striped-swim-shorts-green/-/A-94336253",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-baby-upf50-seersucker-swim-trunks/-/A-1003418237",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-mattel-hot-wheels-checkered-swim-shorts-white-black/-/A-92000710",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-shark-bite-printed-swim-shorts-cat-jack-navy/-/A-94624656",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-dinosaur-printed-swim-board-shorts-cat-jack-black/-/A-94624678",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-striped-seersucker-swim-shorts-cat-jack-blue/-/A-92000733",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-sharks-printed-aqua-magic-swim-shorts-cat-jack-orange/-/A-92000738",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-dolphin-hem-race-car-printed-swim-shorts-cat-jack-dark-blue/-/A-94624674",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-4th-of-july-sharks-with-sparklers-swim-shorts-cat-jack-blue/-/A-94567273",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-4th-of-july-american-flag-swim-shorts-cat-jack-red-white-blue/-/A-94567271",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-swim-board-shorts-cat-jack-dark-blue/-/A-94624680",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-beach-scenic-printed-swim-board-shorts-cat-jack-light-blue/-/A-94598578",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-postcard-print-dolphin-hem-swim-shorts-cat-jack-green/-/A-94596336",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-gingham-trunk-cat-jack-blue/-/A-94467804",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-dinosaur-printed-ombre-swim-shorts-cat-jack/-/A-93447230",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-sea-gull-printed-swim-shorts-cat-jack-aqua-green/-/A-94596274",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-palm-tree-printed-swim-shorts-cat-jack-pink/-/A-94596304",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-checkered-swim-shorts-cat-jack-yellow/-/A-94624659",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-ombre-chameleon-swim-shorts-cat-jack-green/-/A-94567268",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-striped-trunk-cat-jack-red-white-blue/-/A-94467831",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-striped-swim-shorts-cat-38-jack-8482/-/A-94567272",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-scenic-beach-swim-shorts-cat-jack-pink-blue/-/A-94567269",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-snack-time-swim-shorts-cat-jack-light-blue/-/A-94567267",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-sailboat-and-striped-2pk-value-swim-shorts-cat-jack/-/A-94683018",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-dolphin-hem-dragon-printed-swim-shorts-cat-jack-pink/-/A-94624676",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-tree-and-bird-printed-tropical-toucan-swim-shorts-cat-jack-cream/-/A-94624672",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-2pk-value-swim-shorts-cat-jack/-/A-93447249",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-and-toddler-boys-swim-trunks-2-pack/-/A-91235119",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-rubble-marshall-chase-skye-swim-trunks-bathing-suit-toddler/-/A-87872344",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-avengers-spidey-and-his-amazing-friends-upf-50-swim-trunks-toddler-to-big-kid/-/A-86906576",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-swim-jammer-for-boys-and-girls-upf-50/-/A-91380182",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/monster-jam-maximum-destruction-megalodon-grave-digger-el-toro-loco-swim-trunks-bathing-suit-toddler/-/A-87872320",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-boys-seersucker-swim-trunks/-/A-89096140",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-and-toddler-boys-swim-trunks-2-pack/-/A-91210776",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-baby-swim-trunks-bathing-suit-toddler/-/A-87991644",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/hot-wheels-upf-50-swim-trunks-bathing-suit-toddler/-/A-1002989771",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/john-deere-upf-50-swim-trunks-bathing-suit-toddler/-/A-1002769030",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-boys-upf-50-swim-trunks-bathing-suit-for-toddler-and-big-kids-2t/-/A-1003763974",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/minions-upf-50-swim-trunks-bathing-suit-toddler/-/A-1002768984",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/cocomelon-nico-tomtom-cody-jj-baby-swim-trunks-bathing-suit-toddler/-/A-88279812",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-boys-upf-50-swim-trunks-bathing-suit-for-toddler-and-big-kids-size-6/-/A-1003763981",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-boys-swim-liner-for-under-boys-trunks/-/A-92090523",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-swim-trunks-bathing-suit-toddler/-/A-86953420",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/kids-smile-graphic-print-boardshorts-olive-scout/-/A-1003241516",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/teenage-mutant-ninja-turtles-michelangelo-donatello-raphael-leonardo-upf-50-swim-trunks-toddler-to-little-kid/-/A-91525264",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-upf50-gingham-swim-trunks/-/A-1002893081",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-upf50-seersucker-swim-trunks/-/A-1003418263",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-geometric-print-boardshort-w-built-in-comfort-stretch-short-liner/-/A-90715504",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-upf50-americana-swim-trunks/-/A-1003418260",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/twilight-blossoms-swim-shorts-charlie-lou-baby/-/A-1002579202",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-boys-upf-50-soft-stretch-below-the-knee-swim-board-shorts/-/A-92487962",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-swim-jammer-color-block-for-boys-and-girls-upf-50/-/A-92349178",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-boys-upf-50-recycled-polyester-soft-stretch-below-the-knee-printed-swim-board-shorts/-/A-92487833",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-boys-upf-50-soft-stretch-club-above-the-knee-swim-trunks-usa-made/-/A-1003611294",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-tropical-print-boardshort-w-built-in-comfort-stretch-short-liner/-/A-90715509",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-baby-boys-upf50-swim-trunks/-/A-91267489",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-baby-upf50-americana-swim-trunks/-/A-1003418253",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-swim-trunks-blue-green-and-lime-gradient/-/A-1004104697",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-swim-trunks-orange-sloths-on-navy-blue/-/A-1004104724",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-swim-trunks-light-blue-beach-on-black/-/A-1004104716",
        "tags": "Swim Shorts, Swimsuits, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Swim Shorts"
        }
      },
      {
        "url": "https://www.target.com/p/beverly-hills-polo-club-toddler-sport-sandals-outdoor-hook-and-loop-closure/-/A-86925661",
        "tags": "Ankle Strap Sandals, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Ankle Strap Sandals"
        }
      },
      {
        "url": "https://www.target.com/p/xray-footwear-erwin-boy-s-toddler-boat-shoe/-/A-93864492",
        "tags": "Boat Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Boat Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-kids-boys-casual-shoes-moccasin-driving-loafers-casual-dress-penny-slip-on-boat-shoes-toddler-little-kids/-/A-86417693",
        "tags": "Boat Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Boat Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-little-kids-boys-loafer-little-kid-sizes/-/A-86276045",
        "tags": "Boat Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Boat Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/dr-scholl-s-infant-girls-maplewood-toddler-boot-first-walker-shoe/-/A-1001661691",
        "tags": "Booties, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Booties"
        }
      },
      {
        "url": "https://www.target.com/p/little-love-bug-company-chelsea-boot/-/A-1005162164",
        "tags": "Chelsea Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Chelsea Boots"
        }
      },
      {
        "url": "https://www.target.com/p/deer-stags-kids-brock-jr-chelsea-boot/-/A-87137423",
        "tags": "Chelsea Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Chelsea Boots"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-lucas-chelsea-boots-cat-38-jack-8482-cognac/-/A-87876240",
        "tags": "Chukka Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Chukka Boots"
        }
      },
      {
        "url": "https://www.target.com/p/hot-wheels-toddler-boys-clogs-with-adjustable-strap/-/A-1005061529",
        "tags": "Clogs, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Clogs"
        }
      },
      {
        "url": "https://www.target.com/p/foamwalk-toddler-boy-s-novelty-clogs-with-faux-shearling-and-fur-lining-cute-shark-and-dog-clogs-for-toddler/-/A-93728871",
        "tags": "Clogs, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Clogs"
        }
      },
      {
        "url": "https://www.target.com/p/foamwalk-toddler-boy-s-furry-little-solid-clog-with-faux-shearling-lining-toddler-classic-lined-clog/-/A-93728879",
        "tags": "Clogs, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Clogs"
        }
      },
      {
        "url": "https://www.target.com/p/crocs-toddler-realtree-edge-baya-camo-clogs/-/A-1002211227",
        "tags": "Clogs, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Clogs"
        }
      },
      {
        "url": "https://www.target.com/p/crocs-toddler-baya-marbled-clogs/-/A-1000556354",
        "tags": "Clogs, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Clogs"
        }
      },
      {
        "url": "https://www.target.com/p/rugged-bear-girls-snow-boots/-/A-87887909",
        "tags": "Combat Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Combat Boots"
        }
      },
      {
        "url": "https://www.target.com/p/rugged-bear-girls-snow-boots/-/A-87887896",
        "tags": "Combat Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Combat Boots"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-timberland-classic-6-inch-waterproof-boot/-/A-82028994",
        "tags": "Combat Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Combat Boots"
        }
      },
      {
        "url": "https://www.target.com/p/french-toast-boy-s-school-shoes-toddler-sizes/-/A-88790718",
        "tags": "Derby Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Derby Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-boys-double-hook-and-loop-school-little-kids/-/A-86926028",
        "tags": "Derby Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Derby Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-unisex-dress-shoes-for-toddlers-and-little-kids-oxford-style-with-faux-leather-lace-up-closure-perfect-for-weddings-church-school-uniform/-/A-88218845",
        "tags": "Derby Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Derby Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-boys-slip-on-buckle-school-shoes-toddler-big-kids/-/A-1001533675",
        "tags": "Derby Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Derby Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/french-toast-boys-hook-and-loop-school-shoes-toddler-sizes/-/A-88790714",
        "tags": "Derby Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Derby Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/french-toast-boys-slip-on-comfort-school-shoes-with-buckle-detail-toddler-sizes/-/A-86926031",
        "tags": "Derby Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Derby Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/french-toast-boy-s-school-shoes-little-kids-sizes/-/A-86985955",
        "tags": "Derby Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Derby Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-baby-toddler-walking-shoes-with-lace-up-closure-and-hard-sole-for-better-support-infant-toddler-sizes/-/A-86926248",
        "tags": "Derby Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Derby Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/french-toast-boys-hook-and-loop-school-shoes-little-kids-sizes/-/A-86985988",
        "tags": "Derby Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Derby Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/sesame-street-kids-first-walking-shoes-infant-little-kids/-/A-88073468",
        "tags": "Derby Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Derby Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/rugged-bear-boy-closed-toe-toddler-sport-sandals/-/A-86925428",
        "tags": "Fisherman Sandals, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Fisherman Sandals"
        }
      },
      {
        "url": "https://www.target.com/p/foamwalk-toddler-boy-s-eva-comfy-cute-shark-clogs-and-fisherman-sandals-for-boys/-/A-92083386",
        "tags": "Fisherman Sandals, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Fisherman Sandals"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-chase-marshall-light-up-summer-sandals-hook-loop-adjustable-strap-closed-toe-sandal-water-shoe-blue-sizes-6-12-toddler-little-kid/-/A-86925860",
        "tags": "Fisherman Sandals, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Fisherman Sandals"
        }
      },
      {
        "url": "https://www.target.com/p/dr-scholl-s-infant-boys-island-toddler-sandals/-/A-1001661115",
        "tags": "Fisherman Sandals, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Fisherman Sandals"
        }
      },
      {
        "url": "https://www.target.com/p/spider-man-boys-flip-flops-toddler-little-kids/-/A-1001036277",
        "tags": "Flip Flops, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Flip Flops"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-boy-toddler-flip-flops-with-back-strap/-/A-86925905",
        "tags": "Flip Flops, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Flip Flops"
        }
      },
      {
        "url": "https://www.target.com/p/disney-characters-flip-flop-sandals-kid-water-shoes-minnie-moana-toystory-frozen-cars-thong-beach-slides-summer-slip-on-quick-dry-toddler-little-kid/-/A-86924824",
        "tags": "Flip Flops, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Flip Flops"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-boys-slip-on-flip-flops-toddler-little-kids/-/A-1001195739",
        "tags": "Flip Flops, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Flip Flops"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-toy-story-boys-dual-sizes-sandals-toddler-little-kids/-/A-86925955",
        "tags": "Flip Flops, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Flip Flops"
        }
      },
      {
        "url": "https://www.target.com/p/carter-39-s-just-one-you-174-toddler-boys-39-olive-first-walker-sandals-tan/-/A-92802176",
        "tags": "Footbed Sandals, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Footbed Sandals"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-spider-man-eva-sandals-black/-/A-92605571",
        "tags": "Footbed Sandals, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Footbed Sandals"
        }
      },
      {
        "url": "https://www.target.com/p/rugged-bear-hook-and-loop-girls-boys-footbed-sandals-with-buckle-detail-casual-flat-open-toe-lightweight-summer-shoes-toddler/-/A-86925279",
        "tags": "Footbed Sandals, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Footbed Sandals"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-bluey-eva-sandals-blue/-/A-92827486",
        "tags": "Footbed Sandals, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Footbed Sandals"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-girls-leather-open-toe-sandals-toddler-little-kids/-/A-1001888725",
        "tags": "Footbed Sandals, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Footbed Sandals"
        }
      },
      {
        "url": "https://www.target.com/p/rugged-bear-boys-toddler-closed-toe-officer-and-fireman-theme-active-sport-sandals-with-adjustable-hook-and-loop-closure-toddler/-/A-89190734",
        "tags": "Footbed Sandals, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Footbed Sandals"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-bruce-shark-loafer-slippers-cat-jack-blue/-/A-89514984",
        "tags": "Loafer Slippers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafer Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/spider-man-toddler-slipper-multi/-/A-93484303",
        "tags": "Loafer Slippers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafer Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-toddler-slipper/-/A-93278987",
        "tags": "Loafer Slippers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafer Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-toddler-boys-loafer-shoes-penny-loafer-casual-slip-on-moccasin-flats-for-boys-dress-shoes-toddler/-/A-87792921",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-baby-boys-first-walking-shoes-non-slip-lace-up-soft-flexible-and-comfortable-for-all-day-wear-infant-toddler/-/A-87789910",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-baby-boys-first-walking-shoes-flexible-and-comfortable-for-all-day-wear-perfect-for-baptisms-weddings-and-special-events-infant-toddler/-/A-87789788",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/sail-toddler-boys-rope-boat-shoes-toddler-little-kids-sizes/-/A-87969868",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-baby-boys-lace-up-first-walking-shoes-soft-and-flexible-for-all-day-wear-perfect-for-baptisms-weddings-and-special-events-infant-toddler/-/A-87789840",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-boys-dress-shoes-school-uniform-derby-shoes-loafers-toddler-boy/-/A-88508647",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-little-kids-boys-loafer-shoes-penny-loafer-casual-slip-on-moccasin-flats-for-boys-dress-shoes-little-kids/-/A-87739079",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-boys-lace-up-closure-dress-shoes-classic-oxford-with-lace-up-design-toddler-sizes/-/A-87951324",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-boys-loafers-casual-slip-on-lightweight-driving-shoes-toddler-sizes/-/A-91380301",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/dr-scholl-s-youth-girls-madison-play-kids-slip-ons/-/A-92656626",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes, Sneakers",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-classic-hook-and-loop-boys-school-shoes/-/A-88073571",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-boys-slip-on-casual-boat-style-shoes-little-kids-toddler/-/A-94089021",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-boys-loafer-boat-shoes-toddler-casual-dress-boat-shoe-loafers-with-comfortable-moccasin-design/-/A-87803119",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/french-toast-boys-school-shoes/-/A-87739066",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/hey-dude-boys-wally-boys-comfortable-slip-on-shoes/-/A-1005080004",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/hey-dude-wally-toddler-boys-comfortable-slip-on-shoe/-/A-1005040061",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/hey-dude-wally-basic-kids-kid-s-comfortable-slip-on-shoes/-/A-1005079950",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/hey-dude-wally-stretch-sox-youth-kid-s-comfortable-slip-on-shoes/-/A-1005039982",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/xray-footwear-boy-s-toddler-viggo/-/A-1001314124",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/xray-footwear-boy-s-toddler-murphy/-/A-1001314087",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/xray-footwear-dorian-boy-s-toddler-loafers/-/A-93864495",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-boys-oxford-dress-shoes-little-kids-big-kids/-/A-87513779",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-boys-school-shoes-teen-sizes/-/A-88508638",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/french-toast-slip-on-boys-school-uniform-dress-shoes-little-kids/-/A-86986084",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/xray-footwear-rio-loafer-casual-shoe/-/A-1004133581",
        "tags": "Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Loafers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-boys-slip-on-buckle-school-shoes-toddler-sizes/-/A-90034777",
        "tags": "Mary Jane Flats, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Mary Jane Flats"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-carter-moccasin-slippers-cat-jack-chestnut/-/A-88742774",
        "tags": "Moccasin Slippers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Moccasin Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/beverly-hills-polo-club-boys-moccasins-slippers-unisex-indoor-outdoor-house-shoes-with-anti-slip-sole-toddler/-/A-88790669",
        "tags": "Moccasin Slippers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Moccasin Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-boy-s-metal-buckle-accent-dress-oxford-boys-shoes-comfortable-uniform-formal-boys-shoes-toddler-little-kid/-/A-88375580",
        "tags": "Monks, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Monks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-shane-knit-dress-shoes-cat-jack-charcoal-gray/-/A-90413871",
        "tags": "Oxfords, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Oxfords"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-boys-classic-oxford-casual-dress-shoe-toddler-little-kids/-/A-86770659",
        "tags": "Oxfords, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Oxfords"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-boys-wingtip-oxford-lace-dress-shoes-toddler-little-kids/-/A-86923029",
        "tags": "Oxfords, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Oxfords"
        }
      },
      {
        "url": "https://www.target.com/p/toy-story-kids-casual-no-lace-shoes-buzz-lightyear-sheriff-woody-low-top-canvas-slip-on-tennis-boys-sneakers-size-5-12-toddler-little-kid/-/A-87537536",
        "tags": "Performance Sneakers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Performance Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/avalanche-boys-sneakers-lightweight-tennis-breathable-athletic-running-shoes-little-kid/-/A-87892779",
        "tags": "Performance Sneakers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Performance Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/beverly-hills-boys-open-toe-sport-sandals-toddler-sizes/-/A-87891467",
        "tags": "Platform Sandals, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Platform Sandals"
        }
      },
      {
        "url": "https://www.target.com/p/disney-malver-spider-man-cars-boys-casual-boots-toddler-little-kids/-/A-1002191875",
        "tags": "Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Rain Boots"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-spider-man-3d-plush-microsuede-slippers-red/-/A-92830116",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-disney-captain-america-slide-slippers-blue/-/A-93146282",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-dual-boys-dual-sizes-slippers-toddler-little-kids/-/A-87258292",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-plush-slippers-toddler/-/A-86770688",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/disney-lilo-stitch-dual-sizes-slippers-toddler-little-kids/-/A-1002744481",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-paw-patrol-boys-slippers-toddler/-/A-86770793",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-paw-patrol-toddler-girls-dual-sizes-slippers/-/A-87446062",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-dual-boys-dual-sizes-slippers-toddler-little-kids/-/A-87261217",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/dc-comics-batman-boys-slippers-toddler/-/A-86770810",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-paw-patrol-marshall-and-chase-toddler-boys-dual-sizes-slippers/-/A-87261219",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/sega-sonic-the-hedgehog-boys-dual-sizes-slippers-toddler-little-kids/-/A-86697411",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/sesame-street-kids-happy-cookie-monster-dual-sizes-slippers-toddler-little-kids/-/A-87664189",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-paw-patrol-toddler-girls-dual-sizes-slippers/-/A-87446065",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-paw-patrol-marshall-and-chase-3d-toddler-boys-dual-sizes-slippers/-/A-87261206",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/jurassic-world-t-rex-boys-dual-size-slippers-toddler-little-kids/-/A-87900655",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/badgley-mischka-formal-sandals-hig-heels/-/A-87446124",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/tmnt-boys-dual-sizes-slippers-toddler-little-kids/-/A-86925900",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/sega-sonic-the-hedgehog-boys-dual-sizes-3d-slippers-toddler-little-kids/-/A-91793520",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/cocomelon-dual-sizes-boys-slippers-toddler/-/A-86770644",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/avalanche-girls-boys-snow-boots-winter-outdoor-waterproof-slip-resistant-cold-weather-shoes-toddler-little-kid/-/A-87664146",
        "tags": "Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slide Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-39-the-avengers-slide-sandals-blue/-/A-93666953",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/boys-39-spider-man-slide-sandals-black/-/A-93666952",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/spider-man-boys-closed-toe-sport-sandals-toddler-little-kids/-/A-1001008309",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/disney-cars-lightning-mcqueen-boys-slides-toddler-little-kids/-/A-1001008296",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/spider-man-boys-slides-toddler-little-kids/-/A-1001008307",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/aeropostale-toddler-boys-shark-eva-clog-slides-lightweight-water-sandals-w-heel-strap-non-slip-sole/-/A-1004197322",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/beverly-hills-polo-club-boys-sport-sandals-toddler-sizes/-/A-88513181",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-paw-patrol-boys-dual-sizes-sandals-toddler-little-kids/-/A-89776088",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/spider-man-boys-open-toe-sport-sandals-toddler-little-kids/-/A-1001008344",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-sonic-the-hedgehog-comfort-slides/-/A-93632607",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/boys-39-disney-pixar-cars-slide-sandals-red/-/A-93666951",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-boys-dual-sizes-slides-little-kids-toddler/-/A-1001036221",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/beverly-hills-polo-club-boys-sport-sandals-toddler-sizes/-/A-88513187",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-chase-marshall-light-up-summer-sandals-hook-loop-adjustable-strap-open-toe-sandal-water-shoe-blue-sizes-6-12-toddler-little-kid/-/A-86925877",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-boys-dual-sizes-clogs-toddler-little-kids/-/A-1001036246",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/kids-bluey-and-bingo-mismatch-flip-flop-slides/-/A-1004842642",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-paw-patrol-boys-slides-toddler-little-kids/-/A-1000966742",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-super-heroes-boys-slides-toddler-little-kids/-/A-1001153943",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/kids-blippi-stripes-slippers-slides-flip-flops/-/A-1004842557",
        "tags": "Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Slides"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-mateo-high-top-sneakers-cat-jack/-/A-87854453",
        "tags": "Shoes, Sneaker Boots, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneaker Boots"
        }
      },
      {
        "url": "https://www.target.com/p/little-love-bug-company-william-high-top-sneaker/-/A-1003752020",
        "tags": "Shoes, Sneaker Boots, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneaker Boots"
        }
      },
      {
        "url": "https://www.target.com/p/deer-stags-boys-niles-hybrid-fashion-sneaker-boot/-/A-87071493",
        "tags": "Shoes, Sneaker Boots, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneaker Boots"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-ezra-canvas-sneakers-cat-jack/-/A-87854315",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-levi-boat-shoes-cat-38-jack-8482-cognac/-/A-92781772",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-rylie-retro-sneakers-cat-jack/-/A-92606860",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-samson-retro-sneakers-cat-jack-navy-blue/-/A-94267128",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-spider-man-high-top-sneakers-red/-/A-92605586",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/carter-39-s-just-one-you-174-toddler-boys-39-first-walker-sneakers-khaki/-/A-90880032",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/carter-39-s-just-one-you-174-toddler-boys-39-daily-first-walker-sneakers-white/-/A-92802194",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/carter-39-s-just-one-you-174-toddler-boys-39-dino-ash-first-walker-sneakers-navy-blue/-/A-93160196",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/s-sport-by-skechers-toddler-jarrod-sneakers-black/-/A-89530815",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/disney-toddler-boys-mickey-mouse-sneakers-with-2-red-lights/-/A-87792920",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/dc-comics-batman-boys-sneakers-w-one-white-light-toddler/-/A-86262006",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/mickey-mouse-kids-casual-no-lace-shoes-low-top-canvas-slip-on-tennis-boys-sneakers-disney-character-sneaker-shoe-size-5-12-toddler-little-kid/-/A-87537557",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-paw-patrol-boys-w-two-red-lights-sneakers-toddler/-/A-86276173",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/s-sport-by-skechers-toddler-myles-sneakers-lime-green/-/A-92605565",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-cars-boys-w-two-red-lights-sneakers-toddler/-/A-86276972",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-cars-boys-vintage-sneakers-toddler-little-kids/-/A-1002191840",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-boys-canvas-sneakers-toddler-little-kids/-/A-90867542",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/french-toast-boys-lace-up-casual-sneakers-toddler-little-kids/-/A-87537501",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/dr-scholl-s-infant-boys-madison-boat-toddler-shoes/-/A-1001661596",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-disney-spider-man-athletic-sneakers-black/-/A-92781770",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/s-sport-by-skechers-toddler-remmie-sneakers-black/-/A-92605566",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/s-sport-by-skechers-toddler-everett-sneakers-blue/-/A-94072080",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/natural-steps-toddler-slip-on-adjustable-strap-sneaker-blue/-/A-93500758",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/natural-steps-toddler-slip-on-sneaker/-/A-1002394886",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-minnie-mouse-baby-boys-bootie-shoe-infant/-/A-1002849294",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-toy-story-toddler-boys-light-up-sneakers/-/A-87537464",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-boys-sneakers-toddler-little-kids/-/A-86922850",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-boys-light-up-sneakers-toddler-little-kids/-/A-90018401",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-boys-sneakers-toddler/-/A-90018410",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-paw-patrol-boy-s-with-two-red-lights-sneakers/-/A-86276190",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-amazing-sneakers-toddler-little-kids/-/A-1002191842",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/natural-steps-toddler-slip-on-sneaker-green/-/A-93500755",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/natural-steps-toddler-slip-on-sneaker-black/-/A-93500772",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-disney-boy-s-lightning-mcqueen-cars-slip-on-shoes-lowtop-canvas-sneakers-for-boys-sizes-5-10-toddlers-11-12-little-kids/-/A-1002782854",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/french-toast-boys-lace-up-casual-sneakers-toddler-little-kids/-/A-87446205",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/hot-wheels-toddler-boys-sneakers/-/A-1005036099",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/hot-wheels-toddler-boys-light-up-sneakers/-/A-1005078722",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-paw-patrol-athletic-sneakers-black/-/A-92605567",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/beverly-hills-polo-club-toddler-boys-slip-on-canvas-sneakers-toddler/-/A-86276297",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/teenage-mutant-ninja-turtles-toddler-boys-light-up-sneakers-black-green/-/A-87880554",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/hot-wheels-monster-trucks-toddler-boys-sneakers/-/A-1005078239",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/hot-wheels-monster-trucks-toddler-boys-light-up-sneakers/-/A-1005078735",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/dr-scholl-s-infant-boys-sync-toddler-oxfords-dark-honey-smooth-10-m/-/A-1000051133",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/beverly-hills-polo-club-boys-fashion-sneakers-boat-shoes-slip-on-loafers-casual-school-shoes/-/A-88790666",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/disney-minnie-mouse-girls-sneakers-w-one-red-light-and-cute-bowknot-toddler/-/A-86276799",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-paw-patrol-boys-canvas-sneakers-toddler-little-kids/-/A-1000966693",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-iron-man-captain-america-boys-light-up-sneakers-toddler-little-kids/-/A-90867566",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-teenage-mutant-ninja-turtles-boys-light-up-sneakers-toddler-little-kids/-/A-90899240",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/jurassic-world-boys-light-up-fashion-sneakers-toddler-little-kids/-/A-90018395",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/komuello-toddler-boy-first-walk-sock-shoes-train/-/A-89299663",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-teenage-mutant-ninja-turtles-sneakers-black/-/A-90430394",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-jurassic-athletic-sneakers/-/A-94268900",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-bluey-athletic-sneakers-blue/-/A-94268894",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/beverly-hills-polo-club-boys-high-top-casual-sneakers-little-kids/-/A-86276264",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/beverly-hills-polo-club-little-kids-boys-lace-up-sneakers/-/A-88375577",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/komuello-baby-boy-first-walk-sock-shoes-crown-prince/-/A-89299562",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-paw-patrol-boys-sneakers-w-two-red-lights-toddler/-/A-86276159",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/french-toast-kids-sneakers-little-kid-sizes/-/A-90906752",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/kensie-girl-toddler-lace-up-sneakers/-/A-1004853955",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/baby-deer-toddler-lace-up-canvas-sneaker/-/A-1004461073",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/timberland-toddler-allston-low-lace-up-sneaker/-/A-1001519545",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/s-sport-by-skechers-toddler-fluxe-sneakers-black/-/A-90430393",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-speedster-slippers-toddler-little-kids/-/A-1002191861",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-unisex-kids-walking-shoes-first-walker-medium-width-non-slip-sole-toddler/-/A-1001533677",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/komuello-toddler-shoes-sneakers-blue-12-18m/-/A-89236174",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/crocs-toddler-classic-sneaker-t/-/A-1004707810",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/komuello-toddler-shoes-simple-black/-/A-92158653",
        "tags": "Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-bluey-character-sock-slippers-blue/-/A-94857257",
        "tags": "Shoes, Sock Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sock Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-marvel-spiderman-character-sock-slippers-red/-/A-94585974",
        "tags": "Shoes, Sock Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sock Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-lilo-stitch-character-sock-slippers-blue/-/A-94585973",
        "tags": "Shoes, Sock Slippers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sock Slippers"
        }
      },
      {
        "url": "https://www.target.com/p/komuello-toddler-boy-girl-first-walk-sock-shoes-flat-style-brown-stripe/-/A-89336729",
        "tags": "Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sock Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/komuello-baby-boy-first-walk-sock-shoes-galaxy/-/A-89299530",
        "tags": "Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sock Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/komuello-baby-boy-first-walk-sock-shoes-shark-tank/-/A-89299554",
        "tags": "Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sock Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/komuello-toddler-boy-first-walk-sock-shoes-tyno/-/A-89299649",
        "tags": "Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sock Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/komuello-toddler-boy-girl-first-walk-sock-shoes-white-tiger/-/A-89299585",
        "tags": "Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sock Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/komuello-toddler-boy-first-walk-sock-shoes-big-bear/-/A-89299644",
        "tags": "Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sock Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/komuello-baby-boyfirst-walk-sock-shoes-aeroplanes/-/A-89299546",
        "tags": "Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sock Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/komuello-toddler-boy-first-walk-sock-shoes-dinos/-/A-89299597",
        "tags": "Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
        "filters": {
          "type": "Sock Sneakers"
        }
      },
      {
        "url": "https://www.target.com/p/spider-man-boys-dual-sizes-water-shoes-toddler-little-kids/-/A-1001036213",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Water Shoes",
        "filters": {
          "type": "Water Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-super-heroes-boys-water-shoes-toddler-little-kids/-/A-1001153977",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Water Shoes",
        "filters": {
          "type": "Water Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-toddler-and-kids-boy-sandal-and-water-shoe-palm-tree/-/A-86502776",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Water Shoes",
        "filters": {
          "type": "Water Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-toddler-and-kids-boy-sandal-and-water-shoe-anchor/-/A-86502667",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Water Shoes",
        "filters": {
          "type": "Water Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-toddler-and-kids-boy-sandal-and-water-shoe-palm-leaf/-/A-86502728",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Water Shoes",
        "filters": {
          "type": "Water Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-toddler-and-kids-boy-sandal-and-water-shoe-blue-shark/-/A-86502683",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Water Shoes",
        "filters": {
          "type": "Water Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-toddler-and-kids-boy-sandal-and-water-shoe-whale/-/A-86502826",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Water Shoes",
        "filters": {
          "type": "Water Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-toddler-and-kids-boy-sandal-and-water-shoe-green-dinosaur/-/A-86502708",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Water Shoes",
        "filters": {
          "type": "Water Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-toddler-and-kids-boy-sandal-and-water-shoe-dinosaurs/-/A-86502686",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Water Shoes",
        "filters": {
          "type": "Water Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/dc-comics-batman-boys-water-shoes-kids-aqua-socks-sandals-waterproof-sports-slip-on-superhero-beach-slides-swim-slippers-toddler-little-kid/-/A-86770771",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Water Shoes",
        "filters": {
          "type": "Water Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/speedo-toddler-solid-shore-explorer-water-shoes-blue/-/A-85918454",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Water Shoes",
        "filters": {
          "type": "Water Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/speedo-toddler-shore-explorer-water-shoe/-/A-89300365",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Water Shoes",
        "filters": {
          "type": "Water Shoes"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-toy-story-slip-on-boots-toddler/-/A-86923468",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Western Boots",
        "filters": {
          "type": "Western Boots"
        }
      },
      {
        "url": "https://www.target.com/p/josmo-kids-paw-patrol-cowboy-boots-chase-and-marshall-calf-high-western-country-cow-boy-boot-toddler-little-kid/-/A-1000034638",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Western Boots",
        "filters": {
          "type": "Western Boots"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-toy-story-pull-on-boots-brown/-/A-85361829",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Western Boots",
        "filters": {
          "type": "Western Boots"
        }
      },
      {
        "url": "https://www.target.com/p/little-love-bug-company-winter-boot/-/A-1005240928",
        "tags": "Shoes, Toddler Boys’ Shoes, Toddler Shoes, Winter Boots",
        "filters": {
          "type": "Winter Boots"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-adaptive-short-sleeve-2pk-bodysuit-cat-38-jack-8482/-/A-93313614",
        "tags": "Child Bodysuits, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing, Leotards and Bodysuits",
        "filters": {
          "type": "Child Bodysuits"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-adaptive-short-sleeve-2pk-abdominal-access-bodysuit-cat-38-jack-8482/-/A-93313859",
        "tags": "Child Bodysuits, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing, Leotards and Bodysuits",
        "filters": {
          "type": "Child Bodysuits"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-adaptive-short-sleeve-bodysuit-with-abdominal-access-cat-jack/-/A-86038665",
        "tags": "Child Bodysuits, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing, Leotards and Bodysuits",
        "filters": {
          "type": "Child Bodysuits"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-kids-adaptive-long-sleeve-bodysuit-with-abdominal-access-cat-jack/-/A-86038654",
        "tags": "Child Bodysuits, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing, Leotards and Bodysuits",
        "filters": {
          "type": "Child Bodysuits"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-adaptive-2pk-tank-bodysuit-with-abdominal-access-cat-38-jack-8482-white-gray/-/A-91212390",
        "tags": "Child Bodysuits, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing, Leotards and Bodysuits",
        "filters": {
          "type": "Child Bodysuits"
        }
      },
      {
        "url": "https://www.target.com/p/toddlers-39-2pk-adaptive-long-sleeve-bodysuit-with-abdominal-access-cat-38-jack-8482-navy-blue-green/-/A-94576203",
        "tags": "Child Bodysuits, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing, Leotards and Bodysuits",
        "filters": {
          "type": "Child Bodysuits"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-adaptive-long-sleeve-2pk-abdominal-access-bodysuit-cat-38-jack-8482/-/A-93315711",
        "tags": "Child Bodysuits, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing, Leotards and Bodysuits",
        "filters": {
          "type": "Child Bodysuits"
        }
      },
      {
        "url": "https://www.target.com/p/toddlers-39-2pk-adaptive-short-sleeve-bodysuit-with-abdominal-access-cat-38-jack-8482-burgundy-coral-pink/-/A-94576207",
        "tags": "Child Bodysuits, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing, Leotards and Bodysuits",
        "filters": {
          "type": "Child Bodysuits"
        }
      },
      {
        "url": "https://www.target.com/p/toddlers-39-2pk-adaptive-long-sleeve-bodysuit-with-abdominal-access-cat-38-jack-8482-burgundy-coral-pink/-/A-94576202",
        "tags": "Child Bodysuits, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing, Leotards and Bodysuits",
        "filters": {
          "type": "Child Bodysuits"
        }
      },
      {
        "url": "https://www.target.com/p/toddlers-39-adaptive-halloween-fleece-set-cat-38-jack-8482-light-olive-green/-/A-94492966",
        "tags": "Coordinate Sets, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/boys-39-adaptive-jeans-cat-38-jack-8482/-/A-94600602",
        "tags": "Jeans, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Jeans"
        }
      },
      {
        "url": "https://www.target.com/p/toddlers-39-adaptive-fleece-jogger-pants-cat-38-jack-8482/-/A-94576196",
        "tags": "Jogger Pants, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Jogger Pants"
        }
      },
      {
        "url": "https://www.target.com/p/toddlers-39-adaptive-fleece-crew-sweatshirt-cat-38-jack-8482-navy-blue/-/A-94576199",
        "tags": "Pullover Sweatshirts, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing, Hoodies & Sweatshirts, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-girls-39-2pk-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482-cream-gentle-pink/-/A-94638341",
        "tags": "T-shirts, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-adaptive-2pk-long-sleeve-t-shirt-cat-38-jack-8482/-/A-93575176",
        "tags": "T-shirts, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddlers-adaptive-short-sleeve-graphic-t-shirt-cat-jack/-/A-94569191",
        "tags": "T-shirts, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-girls-39-halloween-graphic-t-shirt-cat-38-jack-8482-purple/-/A-94638339",
        "tags": "T-shirts, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-2pk-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482/-/A-94645683",
        "tags": "T-shirts, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-adaptive-2pk-short-sleeve-t-shirt-cat-38-jack-8482/-/A-93575170",
        "tags": "T-shirts, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-girls-39-2pk-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482/-/A-94645686",
        "tags": "T-shirts, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-kids-adaptive-2pk-short-sleeve-undershirt-with-abdominal-access-cat-jack-gray-white/-/A-86038653",
        "tags": "T-shirts, Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddlers-39-adaptive-fleece-zip-up-hoodie-cat-38-jack-8482-black/-/A-94576200",
        "tags": "Toddler Boys’ Adaptive Clothing, Toddler Boys’ Clothing, Toddler Clothing, Zip-Up Sweatshirts, Hoodies & Sweatshirts, Tops",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/hanes-toddler-boys-10pk-athletic-socks-colors-may-vary/-/A-50905683",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-10pk-fruits-ankle-socks-cat-jack/-/A-93083778",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/hanes-toddler-boys-39-6pk-pure-comfort-ankle-socks-white-green-blue/-/A-94655542",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-6pk-waffle-ribbed-ankle-socks-cat-jack/-/A-94591673",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-8pk-ankle-socks-dealworthy-8482/-/A-90873550",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-8pk-low-cut-socks-dealworthy-8482-white/-/A-90850103",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-cozyway-non-slip-ankle-style-socks-with-grippers-6-pack-for-baby-boys-and-girls-black-white-and-gray-1-3-years/-/A-92760521",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-style-socks-with-grippers-12-pack-for-baby-boys-and-girls-black-white-and-dark-gray-1-3-years/-/A-92760511",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-style-socks-with-grippers-12-pack-for-baby-boys-and-girls-solid-white-1-3-years/-/A-92760482",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-style-socks-with-grippers-12-pack-for-baby-boys-and-girls-solid-gray-1-3-years/-/A-92760489",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-cozyway-non-slip-ankle-style-socks-with-grippers-6-pack-for-baby-boys-and-girls-white-3-5-years/-/A-92760464",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/the-peanutshell-baby-boys-and-girls-12pk-organic-cotton-socks/-/A-1001195626",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-style-socks-with-grippers-12-pack-for-baby-boys-and-girls-color-block-1-3-years/-/A-92760400",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-cozyway-non-slip-ankle-style-socks-with-grippers-12-pack-for-baby-boys-and-girls-solid-black-1-3-years/-/A-92760509",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-style-socks-with-grippers-12-pack-for-baby-boys-and-girls-multi-colored-1-3-years/-/A-92760474",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-style-socks-with-grippers-9-pack-for-baby-boys-and-girls-assorted-colors-1-3-years/-/A-92760530",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/the-peanutshell-baby-boys-and-girls-12pk-organic-cotton-socks-grey-oatmeal-mint/-/A-1001689859",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/gamago-funny-feet-toddler-socks-future-ceo/-/A-91318014",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-non-slip-cute-mary-jane-socks-for-baby-set-of-5/-/A-94114900",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-style-socks-with-grippers-12-pack-for-baby-boys-and-girls-assorted-colors-1-3-years/-/A-92760531",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-style-socks-with-grippers-9-pack-for-baby-boys-and-girls-assorted-colors-1-3-years/-/A-92760503",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-pairs-summer-super-thin-breathable-socks-for-kids-baby-plaid-socks/-/A-1003058592",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-style-socks-with-grippers-12-pack-for-baby-boys-and-girls-assorted-color-block-1-3-years/-/A-92760434",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/dots-and-stripes-toddler-socks-set-of-5/-/A-1002652459",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-cozyway-non-slip-ankle-style-socks-with-grippers-6-pack-for-baby-boys-and-girls-assorted-colors-1-3-years/-/A-92760536",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-dino-stripes-toddler-socks-set-of-5/-/A-1002652460",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-doggy-and-stripes-toddler-socks-set-of-5/-/A-1002652182",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-style-socks-with-grippers-12-pack-for-baby-boys-and-girls-multi-colored-1-3-years/-/A-92760499",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/gamago-funny-feet-toddler-socks-space-cadet/-/A-91317981",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/gamago-funny-feet-toddler-socks-whatever/-/A-91317991",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-style-socks-with-grippers-12-pack-for-baby-boys-and-girls-assorted-colors-1-3-years/-/A-92760492",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-style-socks-with-grippers-12-pack-for-baby-boys-and-girls-black-white-and-gray-1-3-years/-/A-92760493",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/gamago-funny-feet-toddler-socks-old-school-dinosaur/-/A-91318011",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-ankle-cotton-toddler-socks-12-pack-stretch-toddler-boy-socks-socks-for-toddler-boys-boys-multicolor-1t-3t/-/A-92760322",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-style-socks-with-grippers-12-pack-for-baby-boys-and-girls-mixed-colors-1-3-years/-/A-92760490",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-ankle-cotton-toddler-socks-12-pack-stretch-toddler-girl-socks-toddler-boy-socks-black-white-dark-gray-1t-3t/-/A-92760356",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/gamago-funny-feet-toddler-socks-free-hugs/-/A-91318026",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/gamago-funny-feet-toddler-socks-book-nerd/-/A-91317995",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-cozyway-non-slip-ankle-style-socks-with-grippers-6-pack-for-baby-boys-and-girls-white-6-12-months/-/A-92760461",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/ctm-infant-s-soft-fancy-solid-and-patterned-socks-3-pack/-/A-92401732",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-spring-baby-breathable-animals-cartoon-color-patchwork-socks/-/A-1003089818",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Crew Socks",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-kid-embroidered-pattern-color-matching-design-non-slip-socks-1-lot-3-pairs/-/A-1004660970",
        "tags": "Ankle Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Ankle Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-athletic-6pk-low-cut-socks-cat-jack-white/-/A-82218318",
        "tags": "Athletic Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Athletic Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-10pk-ankle-socks-cat-jack-black-gray/-/A-81555256",
        "tags": "Athletic Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Athletic Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-chevron-purple-and-lilac/-/A-93985708",
        "tags": "Athletic Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Athletic Socks"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-girls-and-boys-soft-organic-cotton-diaper-cover/-/A-91116763",
        "tags": "Bloomers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Bloomers"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-girls-and-boys-soft-cotton-diaper-cover/-/A-90936284",
        "tags": "Bloomers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Bloomers"
        }
      },
      {
        "url": "https://www.target.com/p/lucky-me-grayson-boys-organic-cotton-boxer-brief-underwear-multiple-colors-and-sizes-6-pack/-/A-1002422214",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/lucky-me-jameson-boys-performance-brief-underwear-multiple-colors-and-sizes-5-pack/-/A-1002267293",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Briefs",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/hanes-toddler-boys-10pk-boxer-briefs-colors-may-vary/-/A-79373015",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-disney-3pk-boxer-briefs/-/A-90511988",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-spider-man-3pk-boxer-briefs/-/A-89262426",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-boys-soft-cotton-boxer-brief/-/A-90832046",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/hanes-toddler-boys-39-6pk-organic-cotton-boxer-briefs/-/A-91683921",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-6pk-39-monsters-39-boxer-briefs-cat-38-jack-8482/-/A-93006484",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/john-deere-construction-trucks-3-pack-boxer-briefs-underwear-toddler/-/A-1003757670",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/lucky-me-nolan-boys-organic-cotton-boxer-briefs/-/A-1000470741",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-boys-organic-cotton-boxer-brief/-/A-90831965",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/stretchy-boxer-briefs-gone-fishin-charlie-lou-baby/-/A-1003754708",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/lucky-me-nolan-boys-organic-cotton-briefs-underwear-multi-colored-multiple-sizes-7-pack/-/A-1001176354",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Briefs",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-boys-100-organic-cotton-briefs-3-pack-usa-made/-/A-1004707323",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Briefs",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/lucy-me-jameson-boys-performance-boxer-briefs-multi-colored-multiple-sizes-5-pack/-/A-1000382639",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-boys-100-organic-cotton-boxer-briefs-3-pack-usa-made/-/A-1005040560",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-boys-100-organic-cotton-athletic-boxer-brief-usa-made/-/A-1004356104",
        "tags": "Boxer Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Boxer Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/hanes-toddler-boys-6pk-briefs-colors-may-vary/-/A-84727964",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/hanes-toddler-boys-briefs-blue/-/A-85864523",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-marvel-spider-man-7pk-underwear/-/A-82758583",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-7pk-toy-story-pixar-briefs/-/A-54607696",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-jurassic-world-7pk-briefs/-/A-89262425",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-mickey-mouse-7pk-briefs/-/A-90511989",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-boys-soft-cotton-briefs/-/A-90831962",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-cars-7pk-underwear/-/A-93719526",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/hanes-toddler-boys-39-6pk-organic-cotton-briefs/-/A-91683920",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-7pk-39-dinos-39-briefs-cat-38-jack-8482/-/A-93006486",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-7pk-briefs-cat-38-jack-8482/-/A-93006487",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-7pk-paw-patrol-classic-briefs/-/A-93482482",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-7pk-mickey-mouse-briefs/-/A-94640351",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-4pk-briefs-dealworthy-8482/-/A-90827459",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-7pk-bluey-underwear/-/A-82344233",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/lucky-me-lucas-boys-organic-cotton-briefs-multiple-colors-and-sizes-6-pack/-/A-1002093611",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-boys-organic-cotton-brief/-/A-90832124",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-boys-and-girls-soft-cotton-simple-brief/-/A-91043686",
        "tags": "Briefs, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Briefs"
        }
      },
      {
        "url": "https://www.target.com/p/baby-boys-6pk-crew-socks-cat-jack/-/A-84606929",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-6pk-dino-crew-socks-cat-jack/-/A-93083780",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-6pk-critter-crew-socks-cat-jack/-/A-94591672",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-stripes-dinosaur-design-3-5-years-old/-/A-92809594",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-black-white-gray-blue-light-blue-3-5-years-old/-/A-92809766",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-girls-white-3-5-years-old/-/A-92809756",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-girls-white-1-3-years-old/-/A-92809753",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-girls-black-3-5-years-old/-/A-92809772",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/john-deere-truck-farm-animal-3-pack-non-slip-grip-crew-socks-toddler/-/A-1002927671",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-crew-cotton-toddler-socks-12-pack-stretch-toddler-girl-socks-toddler-boy-socks-toddler-white-socks-white-1t-3t/-/A-92809764",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-crew-cotton-toddler-socks-12-pack-stretch-toddler-girl-socks-toddler-boy-socks-black-white-gray-1t-3t/-/A-92809694",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-crew-cotton-toddler-socks-12-pack-stretch-toddler-girl-socks-toddler-boy-socks-girls-multicolor-3t-5t/-/A-92809707",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-black-blue-light-blue-gray-3-5-years-old/-/A-92809779",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-girls-gray-1-3-years-old/-/A-92809679",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-6-pack-for-boys-black-white-gray-3-5-years-old/-/A-92809584",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/kids-marvel-superhero-adventures-baby-variety-crew-socks-6-pack/-/A-1004493368",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-wiggle-proof-jersey-crew-socks-8-pack/-/A-93046964",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-gathered-ruffles-baby-leg-warmers-set-of-3-lilac-ballet-pink-sky-blue/-/A-93639321",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Leg Warmers",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/onesies-brand-boys-jersey-crew-wiggle-proof-socks-12-pack/-/A-90835471",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-peek-a-boo-animal-non-skid-toddler-socks-set-of-6-owl-and-lion-large/-/A-94144456",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/kids-crew-socks-3-pack-olive-scout/-/A-1001300421",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-crew-cotton-toddler-socks-12-pack-stretch-toddler-girl-socks-for-all-day-comfort-toddler-boy-socks-black-3t-5t/-/A-92809696",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-full-steam-ahead-train-socks-set-of-4/-/A-94114986",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-girls-black-white-gray-1-3-years-old/-/A-92809787",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-peek-a-boo-animal-non-skid-toddler-socks-set-of-6-cat-and-duck-large/-/A-94142633",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-peek-a-boo-animal-non-skid-toddler-socks-set-of-6-cat-and-owl-large/-/A-94142721",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-peek-a-boo-animal-non-skid-toddler-socks-set-of-6-zoo-animals-large/-/A-94142204",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-peek-a-boo-animal-non-skid-toddler-socks-set-of-6-cat-and-duck-small/-/A-94142685",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-baby-knee-high-non-slip-socks-cable-knit-tube-stockings-with-grips-for-toddlers-newborn-girls-boys-5-pairs-18-36-months/-/A-92809652",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Knee High Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-cutie-bear-mesh-socks-set-of-5/-/A-1001282001",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-funny-zoo-animal-socks-for-toddlers-set-of-3/-/A-94135832",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-my-best-buddy-socks-for-baby-set-of-6-arctic-buddies-1-3/-/A-94143429",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-blue-baby-leg-warmers-set-of-3-owls-moustaches-chevron/-/A-93655146",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Leg Warmers",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/magical-seahorse-socks-0-2-from-the-sock-panda/-/A-92434801",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-crew-cotton-toddler-socks-12-pack-stretch-toddler-boy-socks-socks-for-toddler-boys-boys-multicolor-3t-5t/-/A-92809702",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-boys-casual-scrunch-socks-set-of-6-set-1/-/A-1002630532",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Knee High Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-ruffled-knee-high-socks-3-pairs-for-baby-girls-black-white-grey-1-3-years/-/A-92760358",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Knee High Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-vintage-floral-pattern-toddler-socks-set-of-5/-/A-94115777",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-peek-a-boo-animal-non-skid-toddler-socks-set-of-6-zoo-animals-small/-/A-94142562",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-toddler-s-thick-casual-ankle-socks-set-of-3-leopard-small/-/A-94135498",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-adorable-pets-baby-socks-set-of-5-boy/-/A-94143744",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-non-slip-cute-mary-jane-socks-for-baby-set-of-4/-/A-94115248",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-sporty-shoe-socks-set-of-6/-/A-1000019613",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-peek-a-boo-animal-non-skid-toddler-socks-set-of-6-bears-and-buddies-small/-/A-1000021913",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-peek-a-boo-animal-non-skid-toddler-socks-set-of-6-owl-lion-small/-/A-94142723",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-my-best-buddy-socks-for-baby-set-of-6-pastel-pals/-/A-94144349",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Knee High Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-my-best-buddy-socks-for-baby-set-of-6-forest-friends-1-3/-/A-94143428",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-adorable-pets-baby-socks-set-of-5-nautical/-/A-94143741",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-cutie-bear-mesh-socks-set-of-5/-/A-94116226",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-pastel-dots-baby-leg-warmers-set-of-3-pink-aqua-lavender/-/A-93639320",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Leg Warmers",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/socksmith-8-0-inch-reindeer-games-antlers-christmas-tree-snowflakes-crew-socks/-/A-1001200477",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-toddler-s-thick-casual-ankle-socks-set-of-3-monkey-small/-/A-94135685",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/socksmith-8-0-inch-festive-snowman-lights-holidays-scarf-top-hat-crew-socks/-/A-1001200505",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-giraffe/-/A-93970095",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Leg Warmers",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-casual-cute-socks-for-baby-set-of-4-berry-pink/-/A-94142732",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-my-best-buddy-socks-for-baby-set-of-6-woodland-buddies/-/A-94143422",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Knee High Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-casual-cute-socks-for-baby-set-of-4-slate-blue/-/A-94142722",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-peek-a-boo-animal-non-skid-toddler-socks-set-of-6-bears-and-buddies-large/-/A-94142496",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-fun-and-playtime-baby-leg-warmers-set-of-3-robots-checkers-sea-adventures/-/A-93655141",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Leg Warmers",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-wilderness-buddies-baby-leg-warmers-set-of-3-piggies-and-flowers/-/A-93655273",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Leg Warmers",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/socksmith-8-0-inch-fashionable-penguins-2-4-years-snow-seamless-toe-crew-socks/-/A-1001200507",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-panda/-/A-93970097",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Leg Warmers",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-playful-patterns-baby-toddler-leg-warmers-elephants-and-cars/-/A-93877576",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Leg Warmers",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-brown-bear/-/A-93970092",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Leg Warmers",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-baby-unisex-breathable-thermal-cartoon-patchwork-socks-non-slip/-/A-1003452055",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-baby-cartoon-3d-doll-patched-pattern-non-slip-floor-socks/-/A-1004429374",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-6-pack-for-boys-black-white-gray-1-3-years-old/-/A-92809595",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-fun-and-playtime-baby-leg-warmers-set-of-3-apple-owls-dots/-/A-93655230",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Leg Warmers",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-crew-cotton-toddler-socks-12-pack-stretch-toddler-girl-socks-toddler-boy-socks-toddler-white-socks-white-3t-5t/-/A-92809705",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-crew-cotton-toddler-socks-12-pack-stretch-toddler-girl-socks-for-all-day-comfort-toddler-boy-socks-black-1t-3t/-/A-92809695",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Low Cut Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-my-best-buddy-socks-for-baby-set-of-6-nocturnal-friends/-/A-94143407",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Knee High Socks",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/socksmith-9-0-inch-festive-snowman-lights-holidays-scarf-top-hat-crew-socks/-/A-1001200504",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/socksmith-9-0-inch-fashionable-penguins-4-7-years-snow-seamless-toe-crew-socks/-/A-1001200458",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-fun-and-playtime-baby-leg-warmers-set-of-3-stripes-apple-robots/-/A-93655144",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Leg Warmers",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-fun-and-playtime-baby-leg-warmers-set-of-3-multicolor-owls-pink-ruffles/-/A-93655138",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Leg Warmers",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-baby-print-pattern-spring-autumn-cotton-1bag-5pairs-socks/-/A-1004437495",
        "tags": "Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Crew Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-warm-non-skid-tights-for-toddlers-set-of-2-mary-janes-diamonds/-/A-1002654212",
        "tags": "Knee High Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Leg Warmers",
        "filters": {
          "type": "Knee High Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-leg-warmers-set-of-3-ruched-white-black-pink/-/A-93639619",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-ruffle-leg-warmers-for-toddler-gray/-/A-93877605",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-ruffle-leg-warmers-for-toddler-pink/-/A-93877609",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-striped-ruching-black/-/A-1000550134",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-solid-colored-baby-leg-warmers-set-of-3-lavender-light-pink-hot-pink/-/A-93654992",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-striped-ruching-white/-/A-1000550136",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-really-ruffly-baby-toddler-leg-warmers-dark-navy/-/A-93864775",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-leg-warmers-football/-/A-93639608",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-checkers-black-and-white/-/A-93986283",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-really-ruffly-baby-toddler-leg-warmers-red/-/A-93864773",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-hearts-pink/-/A-93969955",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-solid-colored-baby-leg-warmers-set-of-3-black-blue-red/-/A-93654977",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-solid-colored-baby-leg-warmers-set-of-3-red-white-black/-/A-93654988",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-moustache-white-and-multicolored/-/A-93985728",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-argyle-pink/-/A-93985116",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-stripes-multi-blue/-/A-93970075",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-elephant/-/A-93970093",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-wilderness-buddies-baby-leg-warmers-set-of-3-giraffe-tiger-panda/-/A-93655177",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-sports-baby-leg-warmers-set-of-3-basketball-football-baseball/-/A-93655155",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-argyle-yellow/-/A-93985110",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-happy-legs-baby-and-toddler-leg-warmers-set-of-3-blue/-/A-93655199",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-really-ruffly-baby-toddler-leg-warmers-white/-/A-93877407",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-animal-print/-/A-1000007781",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-really-ruffly-baby-toddler-leg-warmers-pink/-/A-93877408",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-rainbow-brite/-/A-1000006245",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-pink-football/-/A-93985729",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-stripes-multi-fun/-/A-93987361",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-solid-black/-/A-93985382",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-guitar/-/A-93970034",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-pig/-/A-93970096",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-solid-white/-/A-1000007767",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-dots-yellow-and-white/-/A-93985204",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-solid-red/-/A-93985206",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-hearts-ruffles/-/A-93969966",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-striped-ruching-pink/-/A-93984712",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-stripes-green-and-white/-/A-93986279",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-children-s-argyle-knit-leg-warmers-set-of-3/-/A-93639621",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-stripes-orange-and-black/-/A-93986280",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-argyle-black/-/A-1000007759",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-ballerina/-/A-93970062",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-ruffle-leg-warmers-for-toddler-light-blue/-/A-93877604",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-ruched-and-dots-baby-toddler-leg-warmers-white-ruched-and-dots/-/A-93877595",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-stripes-kelly-green-and-black/-/A-93986274",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-playful-patterns-baby-toddler-leg-warmers-orange-and-black-polka-dots/-/A-93877572",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-leg-warmers-stripes-black-yellow/-/A-1004525939",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-playful-patterns-baby-toddler-leg-warmers-eiffel-tower/-/A-93877577",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-solid-pink/-/A-93970089",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-dots-pink-white-with-ruffles/-/A-93970033",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-happy-legs-baby-and-toddler-leg-warmers-set-of-3-pink/-/A-93655200",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-argyle-sky-blue/-/A-1000007760",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-soccer/-/A-93969950",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-space-trip/-/A-93985428",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-chevron-aqua-and-white/-/A-93986284",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-tiger/-/A-93970094",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-striped-ruching-aqua/-/A-1000550133",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-striped-leg-warmers-for-baby-and-toddler-cool-blue/-/A-93639609",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-ruched-and-dots-baby-toddler-leg-warmers-lavender-ruched-and-dots/-/A-93877586",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-really-ruffly-baby-toddler-leg-warmers-mustard/-/A-93864957",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-stripes-pink-orange/-/A-93970071",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-ruched-and-dots-baby-toddler-leg-warmers-pink-ruched-and-dots/-/A-93877585",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-stripes-red-and-white/-/A-93985405",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-ruched-and-dots-baby-toddler-leg-warmers-black-ruched-and-dots/-/A-93877587",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-leopard/-/A-93969901",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-blue-owls/-/A-93986281",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-chevron-yellow-and-grey/-/A-93985171",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-playful-patterns-baby-toddler-leg-warmers-clouds-and-stars/-/A-93877573",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-solid-hot-pink/-/A-93985207",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-ruched-and-dots-baby-toddler-leg-warmers-gray-ruched-and-dots/-/A-93969128",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-gathered-ruffles-baby-leg-warmers-set-of-3-sky-blue-foggy-gray-cloudy-white/-/A-93639614",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-dots-lilac-and-white/-/A-93985172",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-really-ruffly-baby-toddler-leg-warmers-black/-/A-93877390",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-layered-ruffles-baby-leg-warmers-set-of-3-aqua-lavender-amber/-/A-93655070",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-pink-zebra/-/A-93969908",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-dots-multi-color/-/A-93970069",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-blue-bear/-/A-93970090",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-rainbow-clouds/-/A-93969968",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-ruched-and-dots-baby-toddler-leg-warmers-red-ruched-and-dots/-/A-93877588",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-white-zebra/-/A-93985725",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-playful-patterns-baby-toddler-leg-warmers-colorful-flowers/-/A-93877574",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-nature-ruched/-/A-93969929",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-chevron-pink-and-white/-/A-93985146",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-owl-and-flower-leg-warmers/-/A-93639607",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-stripes-blue-rainbow/-/A-1000549909",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-playful-patterns-baby-toddler-leg-warmers-black-and-white-polka-dots/-/A-93877575",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-dots-light-pink-white/-/A-1000881583",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-dots-aqua-white/-/A-1000881586",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-dots-red-and-black/-/A-1000007762",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-cupcakes/-/A-93970058",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-striped-ruching-marigold/-/A-1000550135",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-really-ruffly-baby-toddler-leg-warmers-gray/-/A-93877401",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-ruffle-leg-warmers-for-toddler-lavender/-/A-93877606",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-dots-pink-white/-/A-93877652",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-chevron-hot-pink-and-white/-/A-93985495",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-argyle-red/-/A-93985109",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-ruffle-leg-warmers-for-toddler-hot-pink/-/A-93877603",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-rocker-baby-leg-warmers/-/A-93754591",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-basketball/-/A-1000989839",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-skulls-green/-/A-93877651",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-thin-stripes-black-white/-/A-93970076",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-animals-and-fun-colorful-baby-toddler-leg-warmers-argyle-gray/-/A-93985118",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-chevron-red-and-white/-/A-1000881602",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-pirates-baby-leg-warmers/-/A-93639618",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-red-baseball/-/A-1000881584",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-stripes-pink-white/-/A-93970078",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-ruffle-leg-warmers-for-toddler-red/-/A-93877607",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-chevron-gray-and-white/-/A-93986286",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-chevron-black-and-white/-/A-93985148",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-solid-purple/-/A-1000881585",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-stripes-ice-blue/-/A-1000550132",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-cars/-/A-93985493",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-1-solid-brown/-/A-1000007766",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-toddler-leg-warmers-2-solid-blue/-/A-1000881274",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-colorful-baby-leg-warmers-stripes-green-black/-/A-1004525899",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-baby-toddler-leg-warmer-collection-premium-value-pack-set-of-5-vs7/-/A-93655193",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-dots-baby-leg-warmers-set-of-3-aqua-pink-yellow/-/A-93654852",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-purple-baby-leg-warmers-set-of-3-ruched-solid-dots/-/A-93654859",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-stripes-baby-leg-warmers-set-of-3-orange-pink-rainbow-pink-ruffle/-/A-93655067",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-dots-and-ruffles-baby-leg-warmers-set-of-3/-/A-93655081",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-gathered-ruffles-baby-leg-warmers-set-of-3-lilac-cherry-red-fuschia/-/A-93806497",
        "tags": "Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Leg Warmers"
        }
      },
      {
        "url": "https://www.target.com/p/hanes-toddler-boys-10pk-heel-shield-athletic-socks-colors-may-vary/-/A-79797860",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/hanes-toddler-boys-6pk-low-cut-super-soft-socks/-/A-79720556",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-20pk-low-cut-socks-cat-jack-black-white/-/A-89262464",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-low-cut-shoes-cat-38-jack-8482/-/A-91188151",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/hanes-girls-10pk-heel-shield-athletic-socks-colors-may-vary/-/A-79797861",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-8pk-low-cut-socks-dealworthy-8482/-/A-90873539",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-10pk-low-cut-socks-cat-jack/-/A-93083779",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-6pk-colorblock-ankle-socks-cat-jack/-/A-94591667",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-10pk-dino-striped-ankle-socks-cat-jack/-/A-94591665",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-grip-low-cut-toddler-socks-14-pack-for-girls-pastel-colors-1-3-years-old/-/A-92809777",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-stripes-dinosaur-design-1-3-years-old/-/A-92809673",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-girls-black-white-gray-3-5-years-old/-/A-92809798",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-black-white-gray-blue-light-blue-1-3-years-old/-/A-92809791",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-grip-low-cut-toddler-socks-12-pack-for-girls-pastel-colors-3-5-years-old/-/A-92809790",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-girls-black-1-3-years-old/-/A-92809795",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-bears-and-cars-1-3-years-old/-/A-92809618",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-crew-cotton-toddler-socks-12-pack-stretch-toddler-girl-socks-for-all-day-comfort-toddler-boy-socks-rainbow-1t-3t/-/A-92809713",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-grip-low-cut-toddler-socks-15-pack-for-boys-girls-black-white-gray-3-5-years-old/-/A-92809762",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-toddler-ankle-socks-with-grips-low-cut-socks-for-baby-girls-boys-14-pairs-1-3-years/-/A-92809623",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-grip-low-cut-toddler-socks-12-pack-for-boys-girls-white-1-3-years-old/-/A-92809796",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-black-white-gray-with-black-or-gray-heel-3-5-years-old/-/A-92809789",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-crew-cotton-toddler-socks-12-pack-stretch-toddler-girl-socks-for-all-day-comfort-toddler-boy-socks-rainbow-1t-3t/-/A-92809760",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-black-white-gray-aqua-blue-sky-blue-lime-green-3-5-years-old/-/A-92809774",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-black-white-gray-aqua-blue-sky-blue-lime-green-1-3-years-old/-/A-92809802",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-6-pack-for-boys-black-blue-light-blue-gray-stripes-1-3-years-old/-/A-92809805",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-or-crew-grip-toddler-socks-12-pack-for-boys-girls-colorful-3-5-years-old/-/A-92809588",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-grip-low-cut-toddler-socks-15-pack-for-boys-girls-black-white-gray-1-3-years-old/-/A-92809807",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-6-pack-for-boys-black-blue-light-blue-gray-1-3-years-old/-/A-92809784",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-black-white-gray-with-black-or-gray-heel-1-3-years-old/-/A-92809788",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-grip-low-cut-toddler-socks-12-pack-for-boys-girls-black-white-gray-1-3-years-old/-/A-92809642",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-girls-gray-3-5-years-old/-/A-92809797",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-crew-grip-toddler-socks-12-pack-for-boys-black-blue-light-blue-gray-stripe-3-5-years-old/-/A-92809803",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-grip-low-cut-toddler-socks-14-pack-for-boys-black-white-gray-dark-gray-blue-light-blue-1-3-years-old/-/A-92809641",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/cozyway-non-slip-ankle-grip-low-cut-toddler-socks-14-pack-for-boys-girls-gray-3-5-years-old/-/A-92809635",
        "tags": "Low Cut Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Low Cut Socks"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-wiggle-proof-no-show-socks-white-8-pack/-/A-93046955",
        "tags": "No Show Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "No Show Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-cotton-rhumba-tights-for-baby-toddlers-set-of-2-6-12-mos/-/A-1000105035",
        "tags": "Over the Knee Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Over the Knee Socks"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-cotton-rhumba-tights-for-baby-toddlers-set-of-2-18-24-mos/-/A-1000105016",
        "tags": "Over the Knee Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
        "filters": {
          "type": "Over the Knee Socks"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-pixar-6pk-training-underwear/-/A-91683816",
        "tags": "Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Training Underwear",
        "filters": {
          "type": "Training Underwear"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-paw-patrol-6pk-training-underwear/-/A-91683834",
        "tags": "Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Training Underwear",
        "filters": {
          "type": "Training Underwear"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-peppa-pig-potty-training-underwear/-/A-93276669",
        "tags": "Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Training Underwear",
        "filters": {
          "type": "Training Underwear"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-6pk-minnie-mouse-potty-training-underwear/-/A-94640352",
        "tags": "Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Training Underwear",
        "filters": {
          "type": "Training Underwear"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-6pk-spider-man-potty-training-underwear/-/A-94640354",
        "tags": "Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing, Training Underwear",
        "filters": {
          "type": "Training Underwear"
        }
      },
      {
        "url": "https://www.target.com/p/itzy-ritzy-pack-like-a-boss-packing-cubes/-/A-80751814",
        "tags": "Accessories, Bag and Luggage Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories, Packing Cube Sets",
        "filters": {
          "type": "Bag and Luggage Sets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-dinosaur-baseball-hat-cat-jack-green/-/A-94502386",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-spider-man-baseball-hat/-/A-92423793",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-disney-cars-cotton-baseball-hat-red-one-size-fits-most/-/A-94591158",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/monster-jam-grave-digger-earth-shaker-maximum-destruction-el-toro-loco-megalodon-adjustable-snapback-baseball-cap-one-size/-/A-93164369",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/monster-jam-grave-digger-el-toro-loco-megalodon-mesh-adjustable-snapback-baseball-cap-one-size/-/A-93164372",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/dalix-infant-toddler-baseball-hat-baby-cap-tiny-extra-small-girls-boys/-/A-93525818",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/speedo-sms-trucker-hat/-/A-92289141",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/speedo-sms-new-trucker-hat/-/A-92289082",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/john-deere-twill-baseball-cap-hat-one-size-sizes-os-toddler-os-youth/-/A-1002869620",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/john-deere-mesh-adjustable-snapback-baseball-cap-one-size-sizes-os-toddler-os-youth/-/A-1002869616",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-children-s-baseball-cap-2025-cross-border-baby-duckbill-cap-outdoor-beach-sun-hat/-/A-1005175502",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-baby-smiley-embroidered-pattern-color-matching-design-sunshade-peaked-hats/-/A-1004417661",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-boys-blaze-the-monster-machines-2-pack-cotton-baseball-cap-ages-2-4-with-sunglasses-blaze-blue-red/-/A-1004233548",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-international-harvester-daddy-s-little-helper-trucker-cap-a3487/-/A-1000993432",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/case-ih-t-is-for-tractor-ih-toddler-red-black-twill-cap-hat-a1610-tod/-/A-1001910724",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-case-ih-this-kiddo-is-raised-red-tan-denim-hat-ih07-2806/-/A-1001036311",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-international-harvester-my-dad-feeds-your-dad-trucker-cap-a3488/-/A-1000993439",
        "tags": "Accessories, Baseball Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Baseball Hats"
        }
      },
      {
        "url": "https://www.target.com/p/keababies-3pk-warmzy-baby-beanies-0-36-months-baby-hats-baby-winter-hat-for-newborn-infant-toddlers-boys-girls/-/A-85359635",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/keababies-muff-baby-beanie-baby-hat-for-baby-boys-girls-winter-hats-for-kids-newborn-infant-toddler-6-36-months/-/A-89647113",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/monster-jam-grave-digger-el-toro-loco-megalodon-monster-truck-onesize-beanie-winter-hat/-/A-92749963",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/keababies-2pk-baby-hats-baby-beanies-newborn-hats-for-baby-girls-boys-baby-winter-hat-6-36-months-infant-hat/-/A-89872515",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/arctic-gear-toddler-acrylic-beanie-winter-hat/-/A-89440989",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/arctic-gear-toddler-acrylic-cuff-winter-hat/-/A-89440963",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/arctic-gear-toddler-acrylic-ribbed-cuff-with-matching-pom/-/A-90208258",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-unisex-baby-knit-cuffed-beanie-3pk-cream-black/-/A-84822141",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-family-knit-cuffed-beanie-3pk-navy-burgundy/-/A-84014956",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-family-knit-cuffed-beanie-3pk-navy-black/-/A-84014990",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/arctic-gear-toddler-acrylic-ribbed-cuff-winter-hat/-/A-89440954",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/wrapables-winter-warm-knitted-animal-ears-earflap-hood-beanie-hat-for-baby-and-toddlers/-/A-1001284177",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-6pc-knit-cuffed-beanie-rust-cream-black/-/A-90253780",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/kids-fisherman-beanie-olive-scout/-/A-1001134772",
        "tags": "Accessories, Beanies, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Beanies"
        }
      },
      {
        "url": "https://www.target.com/p/arctic-gear-toddler-acrylic-wool-beanie/-/A-89511547",
        "tags": "Accessories, Boater Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Boater Hats"
        }
      },
      {
        "url": "https://www.target.com/p/arctic-gear-toddler-acrylic-ribbed-cuff-winter-hat-with-pom/-/A-89440953",
        "tags": "Accessories, Boater Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Boater Hats"
        }
      },
      {
        "url": "https://www.target.com/p/arctic-gear-toddler-acrylic-wool-beanie-2-pack/-/A-89483113",
        "tags": "Accessories, Boater Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Boater Hats"
        }
      },
      {
        "url": "https://www.target.com/p/arctic-gear-toddler-specialty-winter-hat/-/A-89440977",
        "tags": "Accessories, Boater Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Boater Hats"
        }
      },
      {
        "url": "https://www.target.com/p/arctic-gear-toddler-fleece-cap-winter-hat/-/A-89446484",
        "tags": "Accessories, Boater Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Boater Hats"
        }
      },
      {
        "url": "https://www.target.com/p/hope-henry-baby-brimmed-linen-baby-bonnet-infant/-/A-1001314081",
        "tags": "Accessories, Bonnets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Bonnets"
        }
      },
      {
        "url": "https://www.target.com/p/speedo-toddler-bucket-hat-rainbow/-/A-91318866",
        "tags": "Accessories, Bucket Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Bucket Hats"
        }
      },
      {
        "url": "https://www.target.com/p/baby-boys-reversible-crab-swim-hat-cat-38-jack-8482-orange/-/A-93160189",
        "tags": "Accessories, Bucket Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Bucket Hats"
        }
      },
      {
        "url": "https://www.target.com/p/monster-jam-el-toro-loco-grave-digger-maximum-destruction-megalodon-monster-mutt-zombie-bucket-sun-hat-one-size/-/A-1001323948",
        "tags": "Accessories, Bucket Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Bucket Hats"
        }
      },
      {
        "url": "https://www.target.com/p/batman-boys-bucket-hat-and-matching-baseball-cap-kids-ages-2-4/-/A-90149421",
        "tags": "Accessories, Bucket Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Bucket Hats"
        }
      },
      {
        "url": "https://www.target.com/p/speedo-toddler-bucket-hat-blue-shark/-/A-91318865",
        "tags": "Accessories, Bucket Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Bucket Hats"
        }
      },
      {
        "url": "https://www.target.com/p/speedo-kids-bucket-hat-parfait-pink/-/A-94570684",
        "tags": "Accessories, Bucket Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Bucket Hats"
        }
      },
      {
        "url": "https://www.target.com/p/speedo-kids-bucket-hat-picton-blue/-/A-94570685",
        "tags": "Accessories, Bucket Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Bucket Hats"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-baby-cartoon-embroidered-pattern-solid-color-sunshade-bucket-hats/-/A-1004417710",
        "tags": "Accessories, Bucket Hats, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Bucket Hats"
        }
      },
      {
        "url": "https://www.target.com/p/monster-jam-grave-digger-truck-baby-fleece-ear-muffs-newborn/-/A-1002841100",
        "tags": "Accessories, Earmuffs, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Earmuffs"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-winter-infant-baby-boys-and-girls-solid-fluffy-thermal-bomber-hats/-/A-1003385564",
        "tags": "Accessories, Earmuffs, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Earmuffs"
        }
      },
      {
        "url": "https://www.target.com/p/baby-boys-paper-straw-fedora-cat-jack-beige/-/A-93160187",
        "tags": "Accessories, Fedoras, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Fedoras"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-kids-zipper-gloves/-/A-89959661",
        "tags": "Accessories, Gloves, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Gloves"
        }
      },
      {
        "url": "https://www.target.com/p/tushbaby-vegan-leather-paci-pod/-/A-84987861",
        "tags": "Accessories, Handbag Organizers, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Handbag Organizers"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-toddler-boy-fleece-trapper-hat-and-mitten-2pc-set-coronet-blue/-/A-82246364",
        "tags": "Accessories, Hat and Glove Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Glove Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-and-toddler-fleece-trapper-hat-and-mitten-2pc-set-black-red-plaid/-/A-82873288",
        "tags": "Accessories, Hat and Glove Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Glove Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-6pc-trapper-hat-mitten-and-bootie-set-blue-elephant-giraffe/-/A-90238544",
        "tags": "Accessories, Hat and Glove Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Glove Sets"
        }
      },
      {
        "url": "https://www.target.com/p/dr-seuss-thing-1-and-thing-2-youth-cuffed-pom-beanie-and-gloves-set/-/A-90211777",
        "tags": "Accessories, Hat and Glove Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Glove Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-6pc-trapper-hat-mitten-and-bootie-set-green-elf-reindeer/-/A-90238494",
        "tags": "Accessories, Hat and Glove Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Glove Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-6pc-trapper-hat-mitten-and-bootie-set-santa-reindeer/-/A-90238508",
        "tags": "Accessories, Hat and Glove Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Glove Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-6pc-trapper-hat-mitten-and-bootie-set-santa-green-elf/-/A-90238504",
        "tags": "Accessories, Hat and Glove Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Glove Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-6pc-trapper-hat-mitten-and-bootie-set-santa-red-elf/-/A-90238551",
        "tags": "Accessories, Hat and Glove Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Glove Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-6pc-trapper-hat-mitten-and-bootie-set-cream-bear-gray-elephant/-/A-90238556",
        "tags": "Accessories, Hat and Glove Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Glove Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-6pc-trapper-hat-mitten-and-bootie-set-red-elf-reindeer/-/A-90238539",
        "tags": "Accessories, Hat and Glove Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Glove Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-6pc-trapper-hat-mitten-and-bootie-set-navy-penguin-reindeer/-/A-90238516",
        "tags": "Accessories, Hat and Glove Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Glove Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-6pc-trapper-hat-mitten-and-bootie-set-red-elf-green-elf/-/A-90238474",
        "tags": "Accessories, Hat and Glove Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Glove Sets"
        }
      },
      {
        "url": "https://www.target.com/p/rugged-bear-toddler-winter-hat-ski-mittens-set-cozy-beanie-with-pom-pom-warm-mittens-for-boys-girls-ages-2-3-years/-/A-1000462833",
        "tags": "Accessories, Hat and Mitten Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Mitten Sets"
        }
      },
      {
        "url": "https://www.target.com/p/rising-star-baby-girls-and-boys-hat-with-mittens-set-winter-set-for-infants-ages-0-24-months/-/A-92643775",
        "tags": "Accessories, Hat and Mitten Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Mitten Sets"
        }
      },
      {
        "url": "https://www.target.com/p/arctic-gear-toddler-winter-fleece-cap-and-gaiter-set/-/A-89619380",
        "tags": "Accessories, Hat and Scarf Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat and Scarf Sets"
        }
      },
      {
        "url": "https://www.target.com/p/monster-jam-grave-digger-monster-truck-baby-beanie-scarf-and-and-gloves-3-piece-winter-accessory-set/-/A-1002888798",
        "tags": "Accessories, Hat, Glove and Scarf Sets, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Hat, Glove and Scarf Sets"
        }
      },
      {
        "url": "https://www.target.com/p/superman-boys-4-pack-mittens-set-for-winter-toddler-boys-ages-2-4/-/A-90514075",
        "tags": "Accessories, Kids’ Accessories, Mittens, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Mittens"
        }
      },
      {
        "url": "https://www.target.com/p/justice-league-boys-4-pack-winter-mittens-set-for-toddler-ages-2-4/-/A-90514070",
        "tags": "Accessories, Kids’ Accessories, Mittens, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Mittens"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-cloud-umbrella-cat-38-jack-8482/-/A-92616607",
        "tags": "Accessories, Kids’ Accessories, Stick Umbrellas, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Stick Umbrellas"
        }
      },
      {
        "url": "https://www.target.com/p/tiara-kid-s-bow-tie-stud-earrings-in-14k-yellow-gold/-/A-18818907",
        "tags": "Accessories, Kids’ Accessories, Stud Earrings, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Stud Earrings"
        }
      },
      {
        "url": "https://www.target.com/p/tiara-kid-39-s-heart-stud-earrings-in-14k-yellow-gold/-/A-18818929",
        "tags": "Accessories, Kids’ Accessories, Stud Earrings, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Stud Earrings"
        }
      },
      {
        "url": "https://www.target.com/p/green-sprouts-baby-toddler-upf-50-eco-flap-hat/-/A-89240648",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-and-toddler-boy-sun-protection-hat-dark-blue-whale/-/A-82732741",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-and-toddler-boy-sun-protection-hat-blue-shark/-/A-82732745",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-and-toddler-boy-sun-protection-hat-blue-whale/-/A-82732776",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-and-toddler-boy-sun-protection-hat-blue-sailboat/-/A-82732727",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-and-toddler-boy-sun-protection-hat-shark/-/A-82732780",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-and-toddler-boy-sun-protection-hat-sailboat/-/A-82732772",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/tiny-twinkle-sun-protection-baby-flap-hat-with-upf-50-for-infants-toddlers-boys-and-girls/-/A-1002531610",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/tiny-twinkle-sun-hat-with-upf-50-uv-protection-and-adjustable-brim-for-toddlers/-/A-1002531589",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-and-toddler-boy-sun-protection-hat-blue-white-stripe/-/A-82730489",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-and-toddler-boy-sun-protection-hat-blue-stripe/-/A-82730505",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/makemake-organics-organic-baby-bucket-sun-hat-linen-palms/-/A-1004323030",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-and-toddler-sunhat-one-size-fits-most/-/A-91252823",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/organic-bucket-sun-hat-mandarin/-/A-1004049321",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/organic-baby-sun-hat-muslin-periwinkle/-/A-1004322993",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/organic-bucket-sun-hat-brown-stripes/-/A-1004049346",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/makemake-organics-organic-bucket-sun-hat-bohemia-6-24-months/-/A-1004049317",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/organic-bucket-sun-hat-green-stripes/-/A-1004049343",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/organic-bucket-sun-hat-palm/-/A-1004037873",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/organic-bucket-sun-hat-wild-meadow/-/A-1004049337",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/organic-bucket-sun-hat-wild-tropics/-/A-1004049383",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/organic-bucket-sun-hat-brown-checkered/-/A-1004049340",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/makemake-organics-organic-bucket-sun-hat-blue-petunia/-/A-1004049334",
        "tags": "Accessories, Kids’ Accessories, Sun Hats, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sun Hats"
        }
      },
      {
        "url": "https://www.target.com/p/carter-39-s-just-one-you-174-toddler-sunglasses-green/-/A-89120288",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/roshambo-bend-in-half-flexible-round-kids-sunglasses-made-in-italy-polarized-uv400-lens-carrying-sleeve-silicone-strap-ear-locks-included/-/A-91516897",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/roshambo-bend-in-half-flexible-heart-kids-sunglasses-made-in-italy-polarized-uv400-lens-carrying-sleeve-silicone-strap-ear-locks-included/-/A-91516880",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/roshambo-bend-in-half-flexible-kids-sunglasses-made-in-italy-polarized-uv400-lens-carrying-sleeve-silicone-strap-ear-locks-included/-/A-91516873",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-sunglass-cat-jack/-/A-94495028",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-shark-sunglasses-cat-38-jack-8482-blue/-/A-92616604",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/tiny-twinkle-toddler-round-retro-polarized-flexible-sunglasses-with-strap-ages-0-48-months/-/A-1004912078",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/babiators-aviator-sunglasses/-/A-89970013",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/go-by-goldbug-sunglasses/-/A-89854002",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/babiators-original-keyhole-jet-black-smoke-lens-0-2-years/-/A-93283985",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/babiators-original-navigator-think-pink-smoke-lens-0-2-years/-/A-93284002",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/babiators-polarized-flower-peachy-keen-rose-gold-mirrored-lens-0-2-years/-/A-93283992",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/babiators-originals-navigator-jet-black-smoke-lenses-0-2-years/-/A-93283979",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/babiators-polarized-heart-frosted-pink-purple-mirrored-lens-0-2-years/-/A-93283998",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/babiators-original-navigator-good-as-blue-smoke-lens-0-2-years/-/A-93284009",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/babiators-original-keyhole-mint-to-be-smoke-lens-ages-0-2/-/A-93284014",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/little-suns-by-babiators-keyhole-sunglasses-blue/-/A-93445569",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/little-suns-by-babiators-flower-sunglasses-yellow/-/A-93445570",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/sunnies-thank-you-berry-punch-glare-free-kids-sunglasses-polarized-lenses-100-uv-protection-anti-slip-stylish-eye-protection/-/A-92391553",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/blippi-s-officially-licensed-flexible-kids-sunglasses-made-in-italy-polarized-uv400-lens-polishing-sleeve-silicone-strap-ear-locks-included/-/A-91516887",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/sunnies-not-my-gumdrop-button-littles-glare-free-kids-sunglasses-polarized-lenses-100-uv-protection-anti-slip-stylish-eye-protection/-/A-92128268",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/babiators-polarized-flower-peachy-keen-rose-gold-mirrored-lens-6-years/-/A-93284008",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/sunnies-tea-time-with-poodles-littles-glare-free-kids-sunglasses-polarized-lenses-100-uv-protection-anti-slip-stylish-eye-protection/-/A-92158018",
        "tags": "Accessories, Kids’ Accessories, Sunglasses, Toddler Accessories, Toddler Boys’ Accessories",
        "filters": {
          "type": "Sunglasses"
        }
      },
      {
        "url": "https://www.target.com/p/saro-toddler-weekender-bag-large-capacity-travel-carrier-with-pockets-adjustable-shoulder-strap/-/A-1003700995",
        "tags": "Accessories, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories, Top Handle Bags",
        "filters": {
          "type": "Top Handle Bags"
        }
      },
      {
        "url": "https://www.target.com/p/textiel-trade-kids-marvel-hulk-mini-backpack/-/A-1002361406",
        "tags": "Accessories, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories, Tote Bags",
        "filters": {
          "type": "Tote Bags"
        }
      },
      {
        "url": "https://www.target.com/p/textiel-trade-kids-pj-masks-trio-duffle-bag/-/A-1002201016",
        "tags": "Accessories, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories, Tote Bags",
        "filters": {
          "type": "Tote Bags"
        }
      },
      {
        "url": "https://www.target.com/p/nuroo-soft-newborn-beanie-with-foldable-cuff-pinwheels/-/A-88190754",
        "tags": "Accessories, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories, Winter Headbands",
        "filters": {
          "type": "Winter Headbands"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-newborn-baby-solid-color-rabbit-patched-design-wool-knitting-tire-caps/-/A-1004784366",
        "tags": "Accessories, Kids’ Accessories, Toddler Accessories, Toddler Boys’ Accessories, Winter Headbands",
        "filters": {
          "type": "Winter Headbands"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-plaid-flannel-twofer-hoodie/-/A-93590560",
        "tags": "Button Down Shirts, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Shirts & Polos",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-french-terry-hooded-full-zip-cardigan-sweatshirt-monkey-on-navy-moped/-/A-1002991886",
        "tags": "Cardigans, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Sweaters",
        "filters": {
          "type": "Cardigans"
        }
      },
      {
        "url": "https://www.target.com/p/modern-moments-by-gerber-baby-boys-2-piece-hoodie-and-pant-set/-/A-1001642421",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/modern-moments-by-gerber-baby-neutral-2-piece-hoodie-and-pant-set/-/A-1001642424",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-donald-duck-goofy-pluto-french-terry-pullover-hoodie-and-set-infant-to-big-kid/-/A-87290826",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-french-terry-sweatshirt-shorts-grey/-/A-87289078",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-and-toddler-boys-2-piece-sweatshirt-pant-set/-/A-89651372",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-fleece-sweatshirt-and-pants-set-toddler/-/A-85315911",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-lion-king-mickey-mouse-pumbaa-timon-simba-fleece-sweatshirt-and-pants-set-newborn-to-little-kid/-/A-89618155",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/pj-masks-gekko-owlette-catboy-fleece-pullover-hoodie-and-pants-outfit-set-toddler/-/A-87974693",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-lion-king-simba-baby-fleece-pullover-hoodie-pants/-/A-85411035",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-and-toddler-boy-cotton-hoodie-bodysuit-or-tee-top-and-pant-set-one-draft-pick-toddler/-/A-82740431",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/london-fog-little-big-boys-2-piece-fleece-hoodie-and-sweatpants-sets/-/A-94003242",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Suit Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/honest-baby-2-piece-light-weight-hoodie-sweatpant-set/-/A-1001313761",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-pocket-crewneck-sweatshirt-and-joggers-set-cat-38-jack-8482/-/A-94598581",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-rubble-marshall-chase-fleece-pullover-hoodie-and-pants-outfit-set-toddler/-/A-90127642",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-2pc-halloween-teddy-bear-pumpkin-fleece-sweatshirt-pants-set-orange/-/A-94609704",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-disney-mickey-mouse-halloween-fleece-sweatshirt-pants-set-black/-/A-94619919",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-2pk-ms-rachel-bus-pullover-sweatshirt-and-shorts-set-heather-gray/-/A-94505133",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-2pc-hot-wheels-fleece-sweatshirt-pants-set-blue/-/A-94609699",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-2pc-ford-bronco-fleece-sweatshirt-pants-set-off-white/-/A-94609698",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-2pc-teenage-mutant-ninja-turtles-fleece-sweatshirt-pants-set-blue/-/A-94609700",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-pullover-hoodie-and-french-terry-shorts-toddler-sizes-2t-10-12/-/A-1002768857",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-spider-man-iron-man-hulk-captain-america-fleece-sweatshirt-and-pants-set-toddler-to-little-kid/-/A-89622795",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-winnie-the-pooh-pullover-hoodie-and-french-terry-shorts-toddler/-/A-92205929",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-fleece-pullover-hoodie-and-pants-outfit-set-toddler/-/A-85015716",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-christmas-halloween-fleece-sweatshirt-and-jogger-pants-outfit-set-toddler/-/A-93444487",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/monster-jam-grave-digger-fleece-sweatshirt-and-jogger-pants-outfit-set-toddler/-/A-1001847939",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-waffle-knit-pullover-sweatshirt-and-jogger-pants-outfit-set-toddler/-/A-1002034821",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-lion-king-mickey-mouse-goofy-donald-duck-simba-waffle-knit-pullover-hoodie-and-shorts-toddler/-/A-92302234",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-pullover-hoodie-and-french-terry-shorts-toddler/-/A-1003487790",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-fleece-pullover-hoodie-and-pants-outfit-set-toddler/-/A-85044399",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/jurassic-world-jurassic-world-dinosaur-jurassic-park-fleece-pullover-hoodie-and-pants-outfit-set-toddler/-/A-88398407",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/bluey-fleece-hoodie-and-pants-outfit-set-toddler-to-big-kid/-/A-89790115",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/sesame-street-cookie-monster-pullover-hoodie-and-french-terry-shorts-toddler/-/A-92205941",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-lion-king-pixar-toy-story-woody-rex-buzz-lightyear-slinky-dog-sweatshirt-and-jogger-pants-set-toddler-to-little-kid/-/A-90508476",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/harry-potter-pullover-hoodie-and-french-terry-shorts-toddler/-/A-1003612097",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/sesame-street-waffle-knit-pullover-sweatshirt-and-jogger-pants-outfit-set-toddler/-/A-1002178449",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-baby-and-toddler-boys-2-piece-sweatshirt-pant-set/-/A-91311831",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/thomas-friends-pullover-hoodie-and-french-terry-shorts-toddler/-/A-1002594944",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/peppa-pig-george-fleece-pullover-hoodie-felt-teeth-and-puff-scales-for-realistic-dino-look-jogger-pants-outfit-set-toddler/-/A-90429243",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-fleece-sweatshirt-and-twill-jogger-pants-outfit-set-toddler/-/A-1002541660",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-lion-king-winnie-the-pooh-waffle-knit-drop-shoulder-sweatshirt-and-jogger-pants-set-toddler/-/A-92302256",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-pixar-toy-story-rex-forky-buzz-lightyear-fleece-pullover-hoodie-and-pants-outfit-set-toddler/-/A-88290903",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-christmas-fleece-pullover-hoodie-and-pants-outfit-set-infant-to-little-kid/-/A-89300117",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-nightmare-before-christmas-jack-fleece-hoodie-pants/-/A-87557184",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-nickelodeon-chase-rubble-and-marshall-boys-pullover-hoodie-and-joggers-set-for-little-kids-blue/-/A-93231819",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/honest-baby-2-piece-cozy-velour-pop-over-hoodie-and-sweatpant-set/-/A-1001323972",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-goofy-donald-duck-pluto-fleece-pullover-t-shirt-and-pants-toddler/-/A-85316092",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/bluey-fleece-pullover-hoodie-and-pants-outfit-set-toddler-to-little-kid/-/A-87232876",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/pinkfong-baby-shark-hoodie-pants/-/A-85050651",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/peanuts-christmas-fleece-sweatshirt-and-jogger-pants-outfit-set-toddler/-/A-93161086",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/blippi-boys-2-piece-sweatshirt-and-pants-set-for-toddlers/-/A-1001307958",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-rubble-marshall-chase-fleece-t-shirt-and-pants-toddler/-/A-87132561",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-spider-man-miles-morales-spider-man-fleece-pullover-hoodie-and-pants-outfit-set-toddler/-/A-88291190",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      }
    ]

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
