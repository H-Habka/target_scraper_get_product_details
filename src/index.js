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
        "url": "https://www.target.com/p/boys-disney-play-by-the-rules-soccer-graphic-long-sleeve-fleece-sweatshirt/-/A-1000793363",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-trolls-dance-vibes-poppy-branch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000797838",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-friends-and-leftovers-graphic-long-sleeve-fleece-sweatshirt/-/A-1000727049",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-summer-is-for-camping-graphic-long-sleeve-fleece-sweatshirt/-/A-1000589398",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-st-patrick-s-day-honk-if-lucky-graphic-long-sleeve-fleece-sweatshirt/-/A-1001599004",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-lol-surprise-let-s-be-kind-plants-graphic-long-sleeve-fleece-sweatshirt/-/A-1002000218",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000633162",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-simba-graphic-long-sleeve-fleece-sweatshirt/-/A-1000821115",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-be-kind-turning-smiles-toddler-graphic-sweatshirt/-/A-1002350293",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000820233",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-classic-drawing/-/A-1000783412",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-plankton-naughty-list-graphic-long-sleeve-fleece-sweatshirt/-/A-1000728815",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-squidward-hopes-and-dreams-graphic-long-sleeve-fleece-sweatshirt/-/A-1000618608",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-there-are-no-rules-graphic-long-sleeve-fleece-sweatshirt/-/A-1000665414",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-happy-halloween-graphic-long-sleeve-fleece-sweatshirt/-/A-1000708979",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-best-friends-forever-graphic-long-sleeve-fleece-sweatshirt/-/A-1000635345",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-brave-explorers-graphic-long-sleeve-fleece-sweatshirt/-/A-1000590174",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hey-arnold-valentine-s-my-love-graphic-long-sleeve-fleece-sweatshirt/-/A-1000854412",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000836430",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-toy-story-sorry-mom-my-valentine-graphic-long-sleeve-fleece-sweatshirt/-/A-1002006235",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-tis-the-season-graphic-long-sleeve-fleece-sweatshirt/-/A-1000585575",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-lilo-stitch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000799865",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-lilo-stitch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000617478",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-ski-with-me-graphic-long-sleeve-fleece-sweatshirt/-/A-1000670401",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-lol-surprise-drip-drop-splatters-graphic-long-sleeve-fleece-sweatshirt/-/A-1001999141",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-strong-heart-bright-spirit-graphic-long-sleeve-fleece-sweatshirt/-/A-1000657406",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-minnie-mouse-collegiate-graphic-long-sleeve-fleece-sweatshirt/-/A-1000615414",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-stay-sharp-graphic-long-sleeve-fleece-sweatshirt/-/A-1000665431",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-thanks-i-get-king-magnifico-graphic-long-sleeve-fleece-sweatshirt/-/A-1000657354",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-the-lion-king-graphic-long-sleeve-fleece-sweatshirt/-/A-1000623857",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-villains-hades-glam-rock-graphic-long-sleeve-fleece-sweatshirt/-/A-1000802457",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-baby-shark-grandpa-shark-graphic-long-sleeve-fleece-sweatshirt/-/A-1000588421",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000825219",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-spongebob-scaredy-pants-graphic-long-sleeve-fleece-sweatshirt/-/A-1000728329",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-monster-high-clawdeen-wolf-graphic-long-sleeve-fleece-sweatshirt/-/A-1002008514",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-retro-dolls-graphic-long-sleeve-fleece-sweatshirt/-/A-1002051483",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-halloween-party-patrol-graphic-long-sleeve-fleece-sweatshirt/-/A-1000709668",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-but-first-lasagna-graphic-long-sleeve-fleece-sweatshirt/-/A-1000587356",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-love-m-and-m-graphic-long-sleeve-fleece-sweatshirt/-/A-1000645327",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-barbie-logo-hearts-graphic-long-sleeve-fleece-sweatshirt/-/A-1002084464",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-multicolor-hand-peace-sign-graphic-long-sleeve-fleece-sweatshirt/-/A-1000624491",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/joggies-pitch-black-toddler-footless-hoodie-onesie/-/A-90083066",
        "tags": "Hoodies & Sweatshirts, Rompers, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Rompers"
        }
      },
      {
        "url": "https://www.target.com/p/joggies-tiedye-black-toddler-footless-hoodie-onesie/-/A-90201632",
        "tags": "Hoodies & Sweatshirts, Rompers, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Rompers"
        }
      },
      {
        "url": "https://www.target.com/p/joggies-black-red-toddler-footless-hoodie-onesie/-/A-90083111",
        "tags": "Hoodies & Sweatshirts, Rompers, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Rompers"
        }
      },
      {
        "url": "https://www.target.com/p/joggies-navy-blue-toddler-footless-hoodie-onesie/-/A-90083145",
        "tags": "Hoodies & Sweatshirts, Rompers, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Rompers"
        }
      },
      {
        "url": "https://www.target.com/p/joggies-tiedye-blue-toddler-footless-hoodie-onesie/-/A-90201619",
        "tags": "Hoodies & Sweatshirts, Rompers, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Rompers"
        }
      },
      {
        "url": "https://www.target.com/p/joggies-charcoal-gray-toddler-footless-hoodie-onesie/-/A-90201272",
        "tags": "Hoodies & Sweatshirts, Rompers, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Rompers"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-long-sleeve-flannel-hoodie-jacket-cat-jack-orange/-/A-94474451",
        "tags": "Hoodies & Sweatshirts, Shirt Jackets, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Shirt Jackets"
        }
      },
      {
        "url": "https://www.target.com/p/grayson-mini-toddler-boys-racing-hoodie-t-shirt-gray/-/A-94486233",
        "tags": "Hoodies & Sweatshirts, T-shirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/grayson-mini-toddler-boys-good-things-are-coming-graphic-t-shirt-black/-/A-94745952",
        "tags": "Hoodies & Sweatshirts, T-shirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/sesame-street-matching-family-cosplay-pullover-hoodie-toddler/-/A-93437200",
        "tags": "Hoodies & Sweatshirts, T-shirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-inside-out-matching-family-pullover-hooded-t-shirt-toddler-sizes-2t-2xl/-/A-93890892",
        "tags": "Hoodies & Sweatshirts, T-shirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-this-is-my-camping-sweatshirt-long-sleeve-graphic-t-shirt/-/A-1000589198",
        "tags": "Hoodies & Sweatshirts, T-shirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/kids-bridger-short-sleeve-hoodie-olive-scout/-/A-1002544059",
        "tags": "Hoodies & Sweatshirts, T-shirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-s-mickey-friends-cool-hoodie-mickey-t-shirt/-/A-90924428",
        "tags": "Hoodies & Sweatshirts, T-shirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/grayson-mini-toddler-boys-french-terry-striped-hoodie-t-shirt-beige/-/A-90429364",
        "tags": "Hoodies & Sweatshirts, T-shirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-this-is-my-camping-sweatshirt-short-sleeve-graphic-t-shirt/-/A-1000430467",
        "tags": "Hoodies & Sweatshirts, T-shirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-this-is-my-camping-sweatshirt/-/A-1000589167",
        "tags": "Hoodies & Sweatshirts, T-shirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "T-shirts"
        }
      },
      {
        "url": "https://www.target.com/p/mixed-up-clothing-baby-crewneck-sweatshirt-and-jogger-pant-set-blue-multicolor/-/A-93720080",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Top and Bottom Sets, Tops",
        "filters": {
          "type": "Top and Bottom Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-minnie-mouse-lion-king-simba-fleece-zip-up-hoodie-toddler/-/A-88074680",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/sesame-street-cookie-monster-fleece-hoodie-toddler/-/A-88335656",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-rubble-chase-skye-fleece-zip-up-pullover-hoodie-toddler-to-little-kid/-/A-87403805",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/jurassic-world-jurassic-world-dinosaur-t-rex-fleece-zip-up-hoodie-toddler/-/A-88243098",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-cars-incredibles-winnie-the-pooh-zip-up-cosplay-hoodie-infant-to-toddler/-/A-88363037",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-fleece-zip-up-hoodie-sweatshirt-cat-jack/-/A-94465227",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-boy-s-avengers-superhero-roleplay-fashion-hoodie-jacket-spider-man-red-size-10/-/A-93355188",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-marvel-spider-man-faux-shearling-hoodie-zip-up-sweatshirt-red/-/A-94615083",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-bluey-cosplay-faux-shearling-hoodie-zip-up-sweatshirt-light-blue/-/A-94618309",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-halloween-dino-zip-up-hoodie-cat-38-jack-8482-black/-/A-94582870",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/blippi-boys-zip-up-hoodie-for-toddlers-and-little-kids-blue/-/A-1001307006",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/sega-sonic-the-hedgehog-fleece-zip-up-hoodie-toddler/-/A-88398151",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-spider-verse-fleece-zip-up-hoodie-toddler/-/A-88397399",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-toy-story-buzz-lightyear-fleece-zip-up-hoodie-toddler-to-big-kid/-/A-88397394",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-boys-zip-up-hoodie-with-ears-for-infants-and-toddlers-kids-size-12m/-/A-1005039442",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/grayson-mini-toddler-boys-french-terry-zip-up-hoodie-blue/-/A-94652561",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-cars-lightning-mcqueen-boys-zip-up-hoodie-with-pockets-for-toddlers-and-big-kids/-/A-1001306993",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-avengers-fleece-zip-up-hoodie-toddler/-/A-88148122",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-toy-story-mickey-mouse-lilo-stitch-fleece-zip-up-hoodie-toddler/-/A-94049702",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/bluey-bingo-cozy-faux-shearling-zip-up-cosplay-hoodie-toddler-to-little-kid/-/A-88231003",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/cocomelon-fleece-zip-up-hoodie-infant-to-toddler/-/A-89947636",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-winnie-the-pooh-mickey-mouse-tigger-pluto-zip-up-hoodie-newborn-to-little-kid/-/A-88225719",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/godzilla-fleece-vintage-wash-matching-family-zip-up-hoodie-toddler/-/A-1002541618",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/john-deere-tractor-fleece-zip-up-hoodie-toddler/-/A-1004421851",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/hanes-pure-comfort-baby-lightweight-french-terry-full-zip-hoodie-organic-cotton-boys-girls/-/A-93621983",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-color-block-full-zip-hoodie-sweatshirt-blue-navy-and-cream/-/A-1003011230",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/harry-potter-hedwig-owl-fleece-zip-up-costume-hoodie-newborn-to-toddler/-/A-88243344",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-black-panther-cosplay-fleece-zip-up-pullover-hoodie-toddler-to-little-kid/-/A-88337194",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-the-child-fleece-zip-up-cosplay-hoodie-toddler/-/A-88235918",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-fleece-matching-family-zip-up-cosplay-hoodie-toddler/-/A-93825840",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/doodle-pants-koala-hoodie-gray/-/A-90292618",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-fleece-zip-up-cosplay-hoodie-toddler-to-big-kid/-/A-89089009",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-scooby-doo-fleece-zip-up-hoodie-brown/-/A-87245874",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/pinkfong-baby-shark-zip-up-cosplay-hoodie-toddler/-/A-85131729",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/dc-comics-justice-league-superman-fleece-zip-up-hoodie-and-cape-toddler/-/A-88397422",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-toy-story-buzz-lightyear-boys-zip-up-hoodie-for-toddler-and-little-kids-size-2t/-/A-1005039441",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/goumikids-baby-organic-cotton-knit-hoodie-bark-3-6m/-/A-89846091",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/goumikids-baby-organic-cotton-knit-hoodie-bark-18-24m/-/A-89846088",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-glow-in-the-dark-dino-halloween-zip-up-sweatshirt-cat-jack-black/-/A-90781610",
        "tags": "Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Zip-Up Sweatshirts",
        "filters": {
          "type": "Zip-Up Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-short-sleeve-woven-chambray-shirt-light-blue-denim/-/A-86735926",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-long-sleeve-woven-chambray-shirt-light-blue-denim/-/A-86735928",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-lilo-stitch-mickey-mouse-lion-king-simba-hawaiian-blue-button-down-shirt-toddler/-/A-87232752",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/bluey-hawaiian-button-down-dress-shirt-toddler-to-big-kid/-/A-88942325",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-millennium-falcon-tie-fighter-x-wing-button-down-dress-shirt-toddler/-/A-87571913",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-boys-short-sleeve-button-down-shirt/-/A-89058932",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/rufflebutts-toddler-short-sleeve-button-down-shirt/-/A-91648762",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-hawaiian-matching-family-hawaiian-button-down-shirt-little-kid-to-big/-/A-91789913",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-hawaiian-matching-family-hawaiian-button-down-dress-shirt-toddler/-/A-91789886",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-39-gosh-toddler-boys-39-plaid-woven-top-orange/-/A-89449717",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-toy-story-mickey-mouse-cars-nightmare-before-christmas-button-down-shirt-toddler-to-big-kid/-/A-88622612",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-plaid-checkered-woven-short-sleeve-shirt-navy-blue/-/A-86735936",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-plaid-long-sleeve-checkered-woven-shirt-navy-blue/-/A-86735930",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/jaws-hawaiian-button-down-dress-shirt-adult/-/A-89136190",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/sesame-street-boy-s-short-sleeve-graphic-polo-shirt-white-size-12-months/-/A-93231203",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-long-sleeve-oxford-button-down-shirt-cat-jack-white/-/A-92974926",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-striped-woven-shirt-cat-38-jack-8482-black-white/-/A-93866062",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-double-weave-woven-shirt-cat-jack/-/A-92761968",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-checkered-jacquard-shirt-cat-38-jack-8482-red-orange/-/A-93866059",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-embroidered-tropical-t-shirt-cat-38-jack-8482-cream/-/A-93276632",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-embroidered-shark-t-shirt-cat-38-jack-8482-dark-blue/-/A-93276631",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-short-sleeve-4th-of-july-food-button-down-shirt-cat-38-jack-8482-cream/-/A-94284346",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-sailboat-printed-gauze-woven-shirt-cat-38-jack-8482-blue/-/A-92824317",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-short-sleeve-woven-shirt-cat-jack/-/A-94474453",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-short-sleeve-halloween-button-down-shirt-cat-38-jack-8482-black/-/A-94502377",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-short-sleeve-slub-poplin-woven-shirt-cat-38-jack-8482-brown/-/A-94505030",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-long-sleeve-dot-printed-39-button-down-39-shirt-cat-38-jack-8482-navy-blue/-/A-91114552",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-39-adaptive-short-sleeve-palm-leaf-woven-top-cat-38-jack-8482-teal-green/-/A-94131181",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-disney-mickey-friends-button-down-jersey-white/-/A-93726602",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-hot-wheels-button-down-jersey-blue/-/A-93726600",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-39-gosh-toddler-boys-39-shark-printed-woven-shirt-white-blue/-/A-92929728",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-short-sleeve-chambray-shirt-blue/-/A-93780411",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-short-sleeve-plaid-woven-shirt-red-blue-white/-/A-93780377",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-39-gosh-toddler-boys-39-long-sleeve-western-plaid-shirt-cream-tan/-/A-94474448",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-39-gosh-toddler-boys-39-long-sleeve-plaid-shirt-navy-blue/-/A-94474447",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-39-gosh-toddler-boys-39-long-sleeve-corduroy-shirt-cream/-/A-94474446",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-blue-trees-woven-shirt/-/A-94457166",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-39-gosh-toddler-boys-39-long-sleeve-chambray-woven-shirt/-/A-94474445",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-rubble-marshall-chase-hawaiian-button-down-shirt-toddler-to-big-kid/-/A-89021745",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/hot-wheels-matching-family-button-down-dress-shirt-toddler-sizes-2t-2xl/-/A-1002749320",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/bluey-bingo-muffin-hawaiian-button-down-shirt-and-shorts-little-kid-to-big-kid/-/A-91284822",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/monster-jam-trucks-grave-digger-short-sleeve-button-down-dress-shirt/-/A-87239192",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/hot-wheels-button-down-dress-shirt-toddler-sizes-2t-14-16/-/A-1002749355",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-plaid-woven-long-sleeve-flannel-shirt-burgundy-brown-cream/-/A-91042548",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-long-sleeve-plaid-woven-shirt-green-blue-red/-/A-91896872",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/monster-jam-grave-digger-el-toro-loco-megalodon-truck-matching-family-hawaiian-button-down-shirt-toddler/-/A-1003418608",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-winnie-the-pooh-button-down-dress-shirt-toddler-sizes-12-months-10-12/-/A-1002435129",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/jurassic-world-jurassic-park-t-rex-hawaiian-button-down-dress-shirt-toddler-to-adult/-/A-89300141",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/teenage-mutant-ninja-turtles-mesh-baseball-jersey-button-down-dress-shirt-toddler/-/A-1000748792",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, Jerseys, T-shirts",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-grey-chambray-button-down-shirt/-/A-84946336",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/monster-jam-grave-digger-truck-flannel-matching-family-button-down-dress-shirt-toddler/-/A-1002769426",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/spongebob-squarepants-short-sleeve-button-down-shirt-blue/-/A-87415363",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-scooby-doo-surfboard-hawaiian-button-down-shirt-little-kid-to-big/-/A-92697920",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-navy-gingham-button-down-shirt/-/A-84946297",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-mesh-baseball-jersey-button-down-dress-shirt-toddler/-/A-1000748795",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, Jerseys, T-shirts",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-junior-flannel-button-down-dress-shirt-toddler-sizes-2t-14-16/-/A-1000179250",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-blue-chambray-button-down-shirt/-/A-84946394",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/kids-jagger-denim-button-up-shirt-olive-scout/-/A-1002544038",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/despicable-me-minions-hawaiian-button-down-dress-shirt-matching-family-toddler-to-adult/-/A-88713723",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-infant-blue-chambray-button-down-shirt/-/A-84946280",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/mixed-up-clothing-hemd-short-sleeve-button-down/-/A-93720079",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-white-poplin-button-down-shirt/-/A-84946290",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-plaid-woven-long-sleeve-shirt-green/-/A-91042541",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-brown-corduroy-buttondown/-/A-93370747",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/kids-alley-club-button-down-shirt-olive-scout-x-julie-sousa/-/A-1004218960",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-aqua-geo-shark-buttondown-shirt/-/A-1002728042",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-boys-long-sleeve-button-down-shirt/-/A-1003239726",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/kids-chambers-long-sleeve-pocket-tee-shirts-steel-blue-2t-olive-scout/-/A-1002523130",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-toddler-boys-woven-collard-button-down-plaid-shirt-tan-plaid-24-months/-/A-89616348",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-boys-waffle-knit-long-sleeve-crew-neck-shirt/-/A-89956231",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-infant-grey-chambray-button-down-shirt/-/A-84946309",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-crosshatch-checkered-pop-buttondown-shirt/-/A-1002728036",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/harry-potter-flannel-button-down-dress-shirt-toddler-sizes-2t-14-16/-/A-1000330066",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-white-plaid-two-fer-shirt/-/A-91150293",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-boys-plaid-buttondown-shirt/-/A-93166965",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-plaid-long-sleeve-flannel-shirt-green-red/-/A-91188197",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/mixed-up-clothing-baby-hemd-short-sleeve-button-down/-/A-93720210",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-lt-blue-chambray-racecar-buttondown-shirt/-/A-93590434",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-boys-long-sleeve-button-down-shirt-rowan-plaid-2t/-/A-1001186402",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-long-sleeve-button-down-shirt-white-2-years/-/A-1003010429",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-long-sleeve-button-down-shirt-navy-blue-stripes/-/A-1003010597",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-short-sleeve-button-down-shirt-plaid/-/A-1003028215",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-baby-short-sleeve-button-down-shirt/-/A-91648789",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-fall-themed-rugby-shirt/-/A-93590529",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-baby-boys-long-sleeve-button-down-shirt/-/A-1003239759",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-short-sleeve-button-down-shirt-black-and-beige-plaid/-/A-1003014775",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-green-plaid-buttondown-shirt/-/A-93590456",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-short-sleeve-button-down-shirt/-/A-1003028086",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-chambray-short-sleeve-shirt/-/A-1003028327",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-printed-chambray-short-sleeve-shirt/-/A-1003028396",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-long-sleeve-button-down-shirt/-/A-1003014549",
        "tags": "Button Down Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Button Down Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-toddler-boys-henley-t-shirts-3-pack/-/A-91257136",
        "tags": "Henley Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Henley Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-short-sleeve-henley-t-shirt-cat-jack/-/A-93090813",
        "tags": "Henley Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Henley Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-short-sleeve-henley-t-shirt-cream-navy-blue/-/A-93780405",
        "tags": "Henley Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Henley Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/honest-baby-5-pack-waffle-henley/-/A-1001274293",
        "tags": "Henley Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Henley Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/honest-baby-5-pack-waffle-henley/-/A-1001829827",
        "tags": "Henley Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Henley Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-boys-knit-long-sleeve-henley-tee/-/A-89956326",
        "tags": "Henley Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Henley Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-boys-short-sleeve-knit-henley/-/A-1003239919",
        "tags": "Henley Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Henley Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-baby-boys-knit-long-sleeve-henley-tee/-/A-91235472",
        "tags": "Henley Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Henley Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-baby-toddler-boys-upf50-sun-protective-hooded-shirt/-/A-1001544400",
        "tags": "Henley Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Henley Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/honest-baby-5-pack-waffle-henley/-/A-1001274169",
        "tags": "Henley Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Henley Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-baby-boys-short-sleeve-knit-henley/-/A-1003239649",
        "tags": "Henley Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Henley Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-soft-cotton-boys-jersey-2-button-short-sleeve-polo-shirt/-/A-91854996",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-long-sleeve-interlock-uniform-polo-shirt-cat-38-jack-8482/-/A-88297978",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-adaptive-short-sleeve-uniform-polo-shirt-cat-jack/-/A-94486509",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-adaptive-long-sleeve-uniform-polo-shirt-cat-jack/-/A-94482986",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-39-short-sleeve-interlock-uniform-polo-shirt-cat-38-jack-8482/-/A-88297984",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-short-sleeve-polo-t-shirt-cat-jack/-/A-93904517",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-boys-pique-short-sleeve-polo-shirt/-/A-93173616",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/studio-3-little-big-boy-s-4-pack-short-sleeve-pique-polo-uniform-shirts/-/A-92942199",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/city-threads-usa-made-100-cotton-soft-knit-jersey-2-button-long-sleeve-boys-polo-shirt/-/A-91228640",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-baby-boys-pique-short-sleeve-polo-shirt/-/A-93173605",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/leveret-kids-cotton-long-sleeve-polo-shirt/-/A-89477675",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/mixed-up-clothing-the-thank-you-polo/-/A-94053605",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-baby-boys-knit-short-sleeve-performance-polo/-/A-1002893087",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-cars-boys-short-sleeve-polo-shirt-for-toddler-and-big-kids-size-2t/-/A-1005239318",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops, T-shirts",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-baby-kids-boys-striped-short-sleeves-polo-shirt/-/A-1003210519",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-short-sleeve-polo-shirt/-/A-1003014911",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/ruggedbutts-toddler-boys-knit-short-sleeve-performance-polo/-/A-1002893101",
        "tags": "Polo Shirts, Shirts & Polos, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Polo Shirts"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-children-s-polka-dots-knitted-cardigan-for-spring-boys-and-girls-sweater/-/A-1003255909",
        "tags": "Cardigans, Sweaters, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Cardigans"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-disney-cars-lightning-mcqueen-racing-pullover-sweater-ivory/-/A-94619918",
        "tags": "Pullover Sweaters, Sweaters, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweaters"
        }
      },
      {
        "url": "https://www.target.com/p/modern-moments-by-gerber-baby-neutral-embroidered-sweater/-/A-1001855044",
        "tags": "Pullover Sweaters, Sweaters, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweaters"
        }
      },
      {
        "url": "https://www.target.com/p/andy-evan-toddler-fall-striped-sweater-with-truck/-/A-1005060935",
        "tags": "Pullover Sweaters, Sweaters, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweaters"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-toddler-boys-striped-sweater-with-pocket/-/A-1003474676",
        "tags": "Pullover Sweaters, Sweaters, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweaters"
        }
      },
      {
        "url": "https://www.target.com/p/gerber-infant-and-toddler-boys-henley-sweater/-/A-90113605",
        "tags": "Pullover Sweaters, Sweaters, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweaters"
        }
      },
      {
        "url": "https://www.target.com/p/disney-nightmare-before-christmas-matching-family-long-sleeve-sweater-toddler/-/A-93970621",
        "tags": "Pullover Sweaters, Sweaters, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweaters"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-baby-boys-automobile-cars-cartoon-crew-neck-long-sleeve-grey-pullover/-/A-1003494791",
        "tags": "Pullover Sweaters, Sweaters, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweaters"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-baby-boy-cartoon-graphic-contrast-design-v-neck-sleeveless-knitted-vest-sweater/-/A-1004355110",
        "tags": "Sweater Vests, Sweaters, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Sweater Vests"
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
