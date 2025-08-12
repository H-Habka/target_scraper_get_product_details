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
        "url": "https://www.target.com/p/disney-winnie-the-pooh-mickey-mouse-fleece-sweatshirt-and-denim-pants-outfit-set-toddler/-/A-1000179152",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/honest-baby-2-piece-cozy-velour-zip-front-hoodie-and-sweatpant-set/-/A-1001321993",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-the-mandalorian-fleece-pullover-hoodie-and-pants-outfit-set-toddler/-/A-93782790",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-and-toddler-boy-cotton-hoodie-bodysuit-or-tee-top-and-pant-set-football-toddler/-/A-82740201",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-boys-hooded-sweatshirt-and-pants-set-for-toddler-to-big-kids-size-4/-/A-1005269668",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/sega-sonic-the-hedgehog-boys-2-piece-sweatshirt-and-pant-sets-for-toddlers-and-kids-size-4t/-/A-1004891663",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-spider-man-little-boys-zip-up-fleece-hoodie-graphic-t-shirt-and-jogger-3-piece-outfit-set-toddler-to-big-kid/-/A-88247864",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-spider-man-fleece-sweatshirt-and-jogger-and-pants-outfit-set-toddler/-/A-1001856639",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/yoga-sprout-baby-and-toddler-boy-cotton-hoodie-bodysuit-or-tee-top-and-pant-moon-toddler/-/A-82738879",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-junior-french-terry-pullover-hoodie-and-shorts-toddler/-/A-1003006328",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/little-treasure-baby-and-toddler-boy-hoodie-bodysuit-or-tee-top-and-pant-set-little-bear/-/A-82739666",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/teenage-mutant-ninja-turtles-donatello-raphael-leonardo-fleece-sweatshirt-and-pants-set-toddler-to-big-kid/-/A-89430028",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/blaze-and-the-monster-machines-toddler-boys-fleece-pullover-hoodie-pant-set-gray-red/-/A-85069767",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/sega-sonic-the-hedgehog-french-terry-pullover-hoodie-and-shorts-outfit-set-toddler/-/A-1003005815",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-scooby-doo-fleece-hoodie-and-pants-outfit-set-toddler/-/A-87249105",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/bluey-bingo-chloe-halloween-toddler-boys-fleece-sweatshirt-and-jogger-pants-outfit-set-white-black-2t/-/A-1000163232",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-boys-sweatshirt-and-pants-set-for-toddler-and-little-kids/-/A-93233943",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/sesame-street-elmo-fleece-half-zip-sweatshirt-and-pants-set-infant-to-toddler/-/A-88290222",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-toddler-boys-long-sleeve-t-shirt-fleece-pant-set-yellow/-/A-85167597",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-unisex-baby-and-toddler-cotton-hoodie-bodysuit-or-tee-top-and-pant-set-forest-animals/-/A-89267349",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Accessory Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/warner-bros-where-the-wild-things-are-max-cozy-faux-sherling-sweatshirt-and-felt-faux-fur-crown-toddler/-/A-1001188612",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Accessory Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-tie-dye-french-terry-zip-up-hoodie-graphic-t-shirt-pants-infant-to-toddler/-/A-88398370",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-and-toddler-boy-cotton-hoodie-bodysuit-or-tee-top-and-pant-set-plaid-moose-toddler/-/A-82740387",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-baby-fleece-pullover-hoodie-and-jogger-pants-set-infant/-/A-88316329",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/hudson-baby-infant-and-toddler-boy-cotton-hoodie-bodysuit-or-tee-top-and-pant-set-forest-toddler/-/A-82740390",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-junior-fleece-sweatshirt-and-twill-jogger-pants-outfit-set-toddler/-/A-1002541453",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/honest-baby-2-piece-cozy-velour-pop-over-hoodie-and-sweatpant-set/-/A-1001324086",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-spider-man-french-terry-sweatshirt-and-pants-set-toddler-to-little-kid/-/A-87913963",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-iron-man-thor-captain-america-zip-up-vest-2fer-jacket-and-pullover-fleece-hoodie-toddler/-/A-90541197",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Accessory Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/mixed-up-clothing-rand-hoodie-jogger-set/-/A-1001314540",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/cocomelon-cody-jj-fleece-pullover-sweatshirt-and-jogger-pants-set-infant-to-toddler/-/A-87290877",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/teenage-mutant-ninja-turtles-french-terry-pullover-hoodie-and-shorts-outfit-set-toddler/-/A-1003006501",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/spongebob-squarepants-french-terry-pullover-hoodie-and-shorts-outfit-set-toddler/-/A-1003006299",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/cocomelon-jj-pullover-hoodie-and-pants-outfit-set-infant-to-toddler/-/A-85071265",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/dc-comics-justice-league-batman-toddler-boys-fleece-fleece-jogger-pullover-hoodie-pants-set/-/A-85069781",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/yoga-sprout-baby-and-toddler-boy-cotton-hoodie-bodysuit-or-tee-top-and-pant-bear-hugs-toddler/-/A-82738857",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/touched-by-nature-baby-and-toddler-unisex-organic-cotton-hoodie-bodysuit-or-tee-top-and-pant-stripe-elephant-toddler/-/A-82740056",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/bluey-fleece-zip-up-hoodie-and-jogger-pants-set-toddler/-/A-88155672",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/colored-organics-organic-hoodie-and-pant-set/-/A-1002574339",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/minecraft-french-terry-pullover-hoodie-and-shorts-toddler/-/A-1003415306",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/organic-cotton-hoodie-jogger-set-beige-charlie-lou-baby/-/A-1002113062",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/mixed-up-clothing-baby-crewneck-sweatshirt-and-jogger-pant-set-black-white-hello/-/A-93720208",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/mixed-up-clothing-baby-crewneck-sweatshirt-and-jogger-pant-set-red-multicolor/-/A-93720063",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/mixed-up-clothing-boys-sweatshirt-and-jogger-set-red-multicolor/-/A-93720144",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/mixed-up-clothing-boys-sweatshirt-and-jogger-set-blue-multicolor/-/A-93720040",
        "tags": "Coordinate Sets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops, Top and Bottom Sets",
        "filters": {
          "type": "Coordinate Sets"
        }
      },
      {
        "url": "https://www.target.com/p/mightly-toddler-fair-trade-organic-cotton-zip-up-pocket-hoodie/-/A-1004010368",
        "tags": "Fleece Jackets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Fleece Jackets"
        }
      },
      {
        "url": "https://www.target.com/p/mightly-toddler-fair-trade-organic-cotton-zip-up-pocket-hoodie-magenta-3t/-/A-1004486152",
        "tags": "Fleece Jackets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Fleece Jackets"
        }
      },
      {
        "url": "https://www.target.com/p/mightly-toddler-organic-cotton-print-lightweight-zip-up-pocket-hoodie/-/A-1004010370",
        "tags": "Fleece Jackets, Hoodies & Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Fleece Jackets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-marvel-spider-man-knit-denim-button-up-hoodie-jacket-blue/-/A-94618306",
        "tags": "Hoodies & Sweatshirts, Jean Jackets, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Jean Jackets"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-bluey-knit-denim-button-up-hoodie-jacket-blue/-/A-94618307",
        "tags": "Hoodies & Sweatshirts, Jean Jackets, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Jean Jackets"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-mater-hoodie-toddler-to-little-kid/-/A-88290176",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-toy-story-buzz-lightyear-half-zip-hoodie-toddler/-/A-89300098",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-spider-man-hoodie/-/A-85075292",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/teenage-mutant-ninja-turtles-donatello-leonardo-michelangelo-raphael-fleece-pullover-hoodie-toddler-to-big-kid/-/A-85028583",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-fleece-pullover-hoodie-toddler/-/A-87364362",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/hot-wheels-fleece-half-zip-hoodie-toddler/-/A-88014843",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/bluey-bingo-fleece-half-zip-hoodie-toddler-to-big-kid/-/A-85001201",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-fleece-pullover-hoodie-toddler-to-big-kid/-/A-90111561",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/hot-wheels-fleece-pullover-hoodie-toddler/-/A-85562215",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-fleece-hangdown-hoodie-toddler-to-big-kid/-/A-90042540",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-fleece-pullover-hoodie-toddler/-/A-85404383",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-toddler-boys-fleece-half-zip-pullover-hoodie/-/A-85411028",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/bluey-bingo-fleece-pullover-hoodie-and-sweatshirt-toddler/-/A-88300419",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/sesame-street-elmo-hoodie/-/A-85036813",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/grayson-mini-toddler-boys-camo-french-terry-pullover-hoodie-t-shirt-green-black/-/A-90789935",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-captain-america-hulk-black-panther-miles-morales-venom-iron-man-half-zip-hoodie-toddler-to-little-kid/-/A-88074690",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/jurassic-park-fleece-pullover-hoodie-toddler-to-little-kid/-/A-87051046",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/bluey-mom-dad-bingo-fleece-hoodie-toddler/-/A-89675030",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-toy-story-buzz-lightyear-boys-pullover-hoodie-for-toddler-and-little-kids-white/-/A-1003555632",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-tails-knuckles-hoodie-toddler/-/A-87232038",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/monster-jam-maximum-destruction-el-toro-loco-grave-digger-fleece-pullover-hoodie-toddler/-/A-85040294",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/harry-potter-fleece-pullover-hoodie-little-kid-to-big-kid/-/A-88289926",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-spider-man-cozy-faux-sherling-cosplay-hoodie-toddler/-/A-93890145",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-avengers-pullover-hoodie-toddler/-/A-93680956",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-ghost-spider-miles-morales-spider-man-fleece-half-zip-hoodie-toddler-to-little-kid/-/A-87246027",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-nightmare-before-christmas-jack-skellington-oogie-boogie-sally-fleece-quarter-zip-hoodie-toddler/-/A-87921514",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/kids-joey-hoodie-olive-scout/-/A-1001820765",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/blue-s-clues-you-fleece-pullover-hoodie-toddler/-/A-87219334",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-frozen-fleece-hoodie-toddler/-/A-87539387",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/teenage-mutant-ninja-turtles-tmnt-leonardo-michelangelo-donatello-raphael-fleece-pullover-hoodie-toddler-to-big-kid/-/A-87643350",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-the-mandalorian-grogu-fleece-pullover-hoodie/-/A-88290144",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/pj-masks-catboy-fleece-half-zip-hoodie-toddler/-/A-87974564",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-paw-patrol-marshall-toddler-boys-fleece-cosplay-pullover-hoodie-red/-/A-85236177",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-teddy-bear-fisherman-toddler-graphic-hoodie/-/A-1002313426",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-toddler-graphic-hoodie/-/A-1001710086",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/peanuts-cozy-faux-sherling-cosplay-hoodie-toddler/-/A-93890128",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-rocky-zuma-rubble-fleece-pullover-hoodie-toddler/-/A-88328144",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-fleece-drop-shoulder-pullover-hoodie-toddler/-/A-1003050222",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-full-zip-hoodie-sweatshirt-pale-blue-and-dark-old-rose/-/A-1003010961",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/monster-jam-maximum-destruction-son-uva-digger-earth-shaker-fleece-pullover-hoodie-toddler/-/A-88096499",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/dc-comics-justice-league-superman-batman-the-flash-fleece-pullover-hoodie-toddler-to-big-kid/-/A-87915786",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-color-block-pullover-hoodie-sweatshirt-beige-and-off-white/-/A-1003011725",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/dreamworks-how-to-train-your-dragon-fleece-cosplay-hoodie-toddler/-/A-1003029708",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/thomas-friends-tank-engine-big-boys-fleece-half-zip-hoodie/-/A-85015711",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/transformers-optimus-prime-bumblebee-megatron-fleece-pullover-hoodie-toddler/-/A-88163688",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/thomas-friends-thomas-the-train-pullover-hoodie-toddler/-/A-88290906",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/jurassic-world-dinosaur-t-rex-fleece-pullover-hoodie/-/A-87974668",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-nightmare-before-christmas-jack-skellington-hoodie/-/A-85183749",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-the-mandalorian-grogu-cozy-faux-sherling-cosplay-hoodie-toddler/-/A-1000006140",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-spider-man-boys-hoodie-for-toddlers-and-big-boys/-/A-1001306991",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/pj-masks-catboy-owlette-gekko-fleece-hoodie/-/A-85411040",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-spider-man-hulk-fleece-pullover-hoodie-toddler/-/A-89728507",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/spongebob-squarepants-fleece-pullover-hoodie-toddler/-/A-85047480",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-hulk-miles-morales-spider-man-athletic-cosplay-hoodie-toddler-to-big-kid/-/A-88417222",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-monsters-inc-cozy-faux-sherling-cosplay-hoodie-toddler-sizes-12-months-6/-/A-93890164",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/nasa-astronaut-fleece-pullover-hoodie-toddler-to-big-kid/-/A-88298213",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-goofy-donald-duck-fleece-pullover-hoodie-infant-to-big-kid/-/A-87358574",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/bluey-bingo-dad-mom-fleece-matching-family-cosplay-pullover-hoodie-infant-to-little-kid/-/A-87236261",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-winnie-the-pooh-fleece-cosplay-pullover-hoodie-toddler/-/A-89300119",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/mixed-up-clothing-kids-viaje-hoodie/-/A-94053594",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-comics-iconic-logo-fleece-pullover-hoodie-toddler-to-big-kid/-/A-88688193",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-toddler-boys-fleece-half-zip-pullover-hoodie-grey-black/-/A-85046974",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-fleece-pullover-hoodie-toddler/-/A-85075116",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-block-checkered-lucky-dude-toddler-graphic-hoodie/-/A-1001345255",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-lion-king-winnie-the-pooh-pixar-monsters-inc-mickey-mouse-lilo-stitch-fleece-pullover-hoodie-infant-to-little-kid/-/A-88290669",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-here-comes-the-fun-puff-print-toddler-graphic-hoodie/-/A-1000157687",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-scooby-doo-fleece-pullover-hoodie-toddler/-/A-87197573",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/looney-tunes-buggs-bunny-toddler-boys-fleece-fashion-pullover-hoodie-blue-2t/-/A-88296709",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-the-child-hoodie-black/-/A-87280403",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-mandalorian-the-child-costume-hoodie-infant-to-big-kid/-/A-89665841",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-fleece-hoodie-toddler/-/A-87274502",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/teenage-mutant-ninja-turtles-tmnt-ninja-turtles-toddler-boys-half-zip-fleece-pullover-hoodie-green/-/A-85219999",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-the-child-fleece-half-zip-hoodie-toddler/-/A-89727562",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/avatar-the-last-airbender-aang-katara-sokka-hoodie-toddler/-/A-87132601",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/blaze-and-the-monster-machines-fleece-half-zip-hoodie-toddler/-/A-1003647369",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/sega-sonic-the-hedgehog-fleece-half-zip-hoodie-toddler-to-big-kid/-/A-87246037",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-lucky-duck-toddler-graphic-hoodie/-/A-1002532799",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-pushin-my-luck-toddler-graphic-hoodie/-/A-1001890689",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-lucky-clover-distressed-toddler-graphic-hoodie/-/A-1001890640",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-captain-america-fleece-hoodie-toddler/-/A-87369339",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-love-typewriter-toddler-graphic-hoodie/-/A-1001710131",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-lucky-clover-toddler-graphic-hoodie/-/A-1001890636",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-lucky-clover-toddler-graphic-hoodie/-/A-1001890680",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-football-game-day-toddler-graphic-hoodie/-/A-1001823823",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-shenanigans-squad-toddler-graphic-hoodie/-/A-1001345199",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-toddler-graphic-hoodie/-/A-1001709774",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-charmer-clover-toddler-graphic-hoodie/-/A-1001890704",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-a-wee-bit-irish-toddler-graphic-hoodie/-/A-1001345262",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-captain-america-spider-man-iron-man-venom-fleece-pullover-hoodie-toddler-to-big-kid/-/A-88290194",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-choose-happy-smiley-face-toddler-graphic-hoodie/-/A-1002350067",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-golf-icons-watercolor-toddler-graphic-hoodie/-/A-1002444268",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-toddler-graphic-hoodie/-/A-1001709650",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-pixar-toy-story-woody-buzz-lightyear-rex-forky-pullover-hoodie-toddler/-/A-87557236",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-two-two-two-toddler-graphic-hoodie/-/A-1000116421",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-toddler-graphic-hoodie/-/A-1002350147",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/mixed-up-clothing-kids-baja-hoodie/-/A-93162544",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/sega-sonic-the-hedgehog-toddler-boys-fleece-fashion-pullover-hoodie-navy/-/A-85411043",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/jurassic-park-fleece-pullover-hoodie-logo-toddler-to-big-kid/-/A-88298304",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-heart-breaker-sunglasses-toddler-graphic-hoodie/-/A-1001647015",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-march-vibes-basketball-toddler-graphic-hoodie/-/A-1002399650",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-chase-marshall-rubble-zuma-fleece-pullover-hoodie-toddler-to-little-kid/-/A-85038148",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/marvel-avengers-black-panther-fleece-pullover-hoodie-toddler/-/A-88040199",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/peppa-pig-kids-xs-snugible-blanket-hoodie-pillow/-/A-1000384762",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-lilo-and-stitch-unisex-pullover-hoodie-for-toddlers-and-big-kids-size-10/-/A-1005039444",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-game-day-toddler-graphic-hoodie/-/A-1001831865",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-lucky-typewriter-toddler-graphic-hoodie/-/A-1002225775",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-lucky-charm-friends-toddler-graphic-hoodie/-/A-1002532776",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-i-love-you-words-toddler-graphic-hoodie/-/A-1001709653",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-loads-of-luck-retro-truck-toddler-graphic-hoodie/-/A-1001890511",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-choose-happy-smiley-face-toddler-graphic-hoodie/-/A-1002350124",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-toddler-graphic-hoodie/-/A-1002349908",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-shamrock-and-roll-toddler-graphic-hoodie/-/A-1001345168",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-deer-snowman-scene-toddler-graphic-hoodie/-/A-1001646988",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-love-typewriter-toddler-graphic-hoodie/-/A-1001710137",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-lucky-typewriter-toddler-graphic-hoodie/-/A-1002225786",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-cutest-clover-toddler-graphic-hoodie/-/A-1001345181",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-game-day-football-toddler-graphic-hoodie/-/A-1001823647",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-football-game-day-stripes-toddler-graphic-hoodie/-/A-1001831854",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-time-to-celebrate-toddler-graphic-hoodie/-/A-1000157631",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-i-love-you-words-toddler-graphic-hoodie/-/A-1001709692",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-happy-go-lucky-smiley-face-toddler-graphic-hoodie/-/A-1001890679",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-happy-go-lucky-pot-of-gold-toddler-graphic-hoodie/-/A-1001890724",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/mykids-usa-baby-boy-excavator-pattern-long-sleeve-quality-fashion-hoodie/-/A-1004642292",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/rabble-gender-neutral-hoodie-and-magic-wonders-dabblz-bundle/-/A-1002108293",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-french-terry-sweatshirt-cat-jack-white/-/A-94436167",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-washed-french-terry-sweatshirt-cat-jack/-/A-94465143",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-fleece-crew-sweatshirt-cat-jack/-/A-94465235",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-fleece-crewneck-sweatshirt-cat-jack/-/A-90940493",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-boys-disney-mickey-mouse-striped-fleece-pullover-green/-/A-94609702",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/toddler-ms-rachel-herbie-fleece-pullover-sweatshirt-ivory/-/A-94505142",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/grayson-mini-toddler-boys-french-terry-crewneck-sweatshirt-white/-/A-93058800",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/grayson-mini-toddler-boys-french-terry-crewneck-sweatshirt-brown/-/A-93058796",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/grayson-mini-toddler-boys-have-more-fun-french-terry-crewneck-pullover-t-shirt-blue/-/A-90798566",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-and-friends-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000576495",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-little-turkey-typewriter-toddler-graphic-sweatshirt/-/A-92793368",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-holly-jolly-christmas-tree-toddler-graphic-sweatshirt/-/A-93544680",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-retro-football-game-day-toddler-graphic-sweatshirt/-/A-90213771",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-football-game-day-toddler-graphic-sweatshirt/-/A-90203637",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-christmas-crew-toddler-graphic-sweatshirt-5-6-pink/-/A-93207521",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000836522",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000841356",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-christmas-crew-hat-toddler-graphic-sweatshirt-5-6-pink/-/A-90229047",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-get-your-cray-on-toddler-graphic-sweatshirt/-/A-90568458",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-we-scare-because-we-care-graphic-long-sleeve-fleece-sweatshirt/-/A-1000654920",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000825696",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-space-logo-graphic-long-sleeve-fleece-sweatshirt/-/A-1000655558",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-snoopy-s-hockey-camp-graphic-long-sleeve-fleece-sweatshirt/-/A-1000698264",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-firefighter-mickey-graphic-long-sleeve-fleece-sweatshirt/-/A-1000660055",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-sunbathe-graphic-long-sleeve-fleece-sweatshirt/-/A-1000813420",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000824640",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-halloween-candy-bucket-chart-toddler-graphic-sweatshirt/-/A-92726066",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-rusteze-pit-crew-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659344",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-designed-for-speed-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659470",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-cousin-crew-lights-toddler-graphic-sweatshirt/-/A-93207542",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000792583",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000790441",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-and-friends-tis-the-season-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000640273",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/bluey-fleece-sweatshirt-and-cotton-gauze-hat-toddler-to-little-kid/-/A-90518569",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-watercolor-candy-corn-toddler-graphic-sweatshirt/-/A-92942546",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-snoopy-woodstock-chasing-snowflakes-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000726781",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-i-m-ready-for-school-graphic-long-sleeve-fleece-sweatshirt/-/A-1000635717",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-trolls-turn-it-up-poppy-graphic-long-sleeve-fleece-sweatshirt/-/A-1000797731",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000822828",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-merry-christmas-dude-graphic-long-sleeve-fleece-sweatshirt/-/A-1000751025",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-head-nature-fill-graphic-long-sleeve-fleece-sweatshirt/-/A-1000648187",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-jesse-yeehaw-graphic-long-sleeve-fleece-sweatshirt/-/A-1000792894",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-big-bro-square-toddler-graphic-sweatshirt/-/A-91813141",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-classic-pink-logo-graphic-long-sleeve-fleece-sweatshirt/-/A-1000610468",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-santa-squad-toddler-graphic-sweatshirt/-/A-90416562",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-cereal-killer-toddler-graphic-sweatshirt/-/A-92954551",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-snowman-face-toddler-graphic-sweatshirt/-/A-90265826",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-chase-rubble-marshall-hexagons-graphic-long-sleeve-fleece-sweatshirt/-/A-1000666020",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-and-minnie-reindeer-crossing-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000640551",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000824798",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-don-t-worry-be-hoppy-smiley-bunny-toddler-graphic-sweatshirt/-/A-91192855",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-cool-kids-club-toddler-graphic-sweatshirt/-/A-93792992",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-encanto-graphic-long-sleeve-fleece-sweatshirt/-/A-1000598469",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-time-to-embark-on-adventure-graphic-long-sleeve-fleece-sweatshirt/-/A-1000665883",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-cool-dudes-club-toddler-graphic-sweatshirt/-/A-94069957",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-touch-down-red-helmet-distressed-toddler-graphic-sweatshirt/-/A-91117514",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-dinosaur-moon-toddler-graphic-sweatshirt/-/A-93869135",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-best-doggone-valentine-graphic-long-sleeve-fleece-sweatshirt/-/A-1000645599",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-under-the-lights-jackson-storm-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659332",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-pushin-my-luck-toddler-graphic-sweatshirt/-/A-1001890548",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-believe-puff-print-toddler-graphic-sweatshirt/-/A-93246344",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-dr-seuss-dr-seuss-icons-graphic-long-sleeve-fleece-sweatshirt/-/A-1000598013",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000679138",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/teenage-mutant-ninja-turtles-fleece-sweatshirt-and-hat-toddler/-/A-92579248",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-distressed-smiley-face-toddler-graphic-sweatshirt/-/A-90568428",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-ready-for-action-chase-rubble-marshall/-/A-1000780999",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickeys-golf-team-graphic-long-sleeve-fleece-sweatshirt/-/A-1000615546",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-leo-graphic-long-sleeve-fleece-sweatshirt/-/A-1000786869",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-sketch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000624360",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-be-brave-everest-chase-marshall-rubble/-/A-1000780988",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-lucky-clover-distressed-toddler-graphic-sweatshirt/-/A-1001890786",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-big-bro-wavy-toddler-graphic-sweatshirt/-/A-91813142",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-go-taylor-s-boyfriend-sparkle-toddler-graphic-sweatshirt/-/A-1001806584",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-lightning-mcqueen-i-am-speed-graphic-long-sleeve-fleece-sweatshirt/-/A-1000609841",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-big-bro-club-stars-toddler-graphic-sweatshirt/-/A-91813154",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-bear-head-toddler-graphic-sweatshirt/-/A-91513866",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-valentine-s-heartbreaker-graphic-long-sleeve-fleece-sweatshirt/-/A-1000833230",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-shamrock-rocker-toddler-graphic-sweatshirt/-/A-90928223",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000679073",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-mach-speed-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659525",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-st-patrick-s-day-rad-little-lad-graphic-long-sleeve-fleece-sweatshirt/-/A-1001600724",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-daddy-s-gaming-buddy-toddler-graphic-sweatshirt/-/A-90568413",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000679203",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-tow-mater-towing-and-salvage-graphic-long-sleeve-fleece-sweatshirt/-/A-1000594364",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000831934",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-lightning-mcqueen-think-fast-graphic-long-sleeve-fleece-sweatshirt/-/A-1000578586",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000622120",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-honey-bunny-toddler-graphic-sweatshirt/-/A-91373351",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-camp-fire-s-mores-toddler-graphic-sweatshirt/-/A-91513844",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-toy-story-4-graphic-long-sleeve-fleece-sweatshirt/-/A-1000789044",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-oh-boy-stroll-graphic-long-sleeve-fleece-sweatshirt/-/A-1000670146",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-the-hunt-is-on-easter-toddler-graphic-sweatshirt/-/A-91333423",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-despicable-me-minions-make-yourself-heard-graphic-long-sleeve-fleece-sweatshirt/-/A-1000799342",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mike-yay-it-s-my-birthday-graphic-long-sleeve-fleece-sweatshirt/-/A-1000807959",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-big-brother-checkered-toddler-graphic-sweatshirt/-/A-91813181",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-dr-seuss-american-thing-two-graphic-long-sleeve-fleece-sweatshirt/-/A-1000580470",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-lightning-mcqueen-graphic-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659234",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-toying-around-graphic-long-sleeve-fleece-sweatshirt/-/A-1000793070",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-minnies-tennis-club-graphic-long-sleeve-fleece-sweatshirt/-/A-1000833410",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-good-vibes-skeleton-toddler-graphic-sweatshirt/-/A-92299511",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-checker-board-smiley-face-toddler-graphic-sweatshirt/-/A-92289169",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/transformers-fleece-sweatshirt-and-cosplay-costume-hat-toddler/-/A-93259192",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-snoopy-ski-ya-later-graphic-long-sleeve-fleece-sweatshirt/-/A-1000782746",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-lightning-mcqueen-95-graphic-long-sleeve-fleece-sweatshirt/-/A-1000594472",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-st-patrick-s-day-outlined-shamrock-graphic-long-sleeve-fleece-sweatshirt/-/A-1001601981",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-nature-graphic-long-sleeve-fleece-sweatshirt/-/A-1000615639",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-pawsome-explorers-graphic-long-sleeve-fleece-sweatshirt/-/A-1000589730",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-olaf-it-s-my-birthday-graphic-long-sleeve-fleece-sweatshirt/-/A-1000808661",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-need-a-lift-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659478",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-st-patrick-s-day-pushing-my-luck-today-graphic-long-sleeve-fleece-sweatshirt/-/A-1001601175",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pete-the-cat-explore-your-imagination-toddler-and-youth-crewneck-fleece-sweatshirt-graphic-long-sleeve-fleece-sweatshirt/-/A-1003968669",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-dory-nemo-marlin-graphic-long-sleeve-fleece-sweatshirt/-/A-1000579714",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000836369",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-toddler-graphic-sweatshirt/-/A-1001709954",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-princess-heart-grid-graphic-long-sleeve-fleece-sweatshirt/-/A-1000835399",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000836528",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-pose-graphic-long-sleeve-fleece-sweatshirt/-/A-1000670212",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-rugrats-the-great-chase-graphic-long-sleeve-fleece-sweatshirt/-/A-1000618333",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000819995",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-zuma-sketch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000626871",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-lucky-clover-toddler-graphic-sweatshirt/-/A-1001890797",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-shamrock-truck-toddler-graphic-sweatshirt/-/A-1002225592",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-skye-conversation-hearts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000833363",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-love-typewriter-toddler-graphic-sweatshirt/-/A-1001709877",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-hip-hop-bunny-with-glasses-toddler-graphic-sweatshirt/-/A-91373334",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-mouse-checker-badge-graphic-long-sleeve-fleece-sweatshirt/-/A-1000615447",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-belle-be-true-be-you-graphic-long-sleeve-fleece-sweatshirt/-/A-1000638754",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-in-my-game-day-era-red-toddler-graphic-sweatshirt/-/A-1001805970",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-football-season-star-toddler-graphic-sweatshirt/-/A-1001823573",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-squad-preschool-graphic-long-sleeve-fleece-sweatshirt/-/A-1000626765",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-rubble-sketch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000626920",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-plankton-one-percent-evil-graphic-long-sleeve-fleece-sweatshirt/-/A-1000618846",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-be-wild-bear-paw-toddler-graphic-sweatshirt/-/A-91513848",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-elsa-it-s-my-birthday-graphic-long-sleeve-fleece-sweatshirt/-/A-1000747890",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-retro-group-graphic-long-sleeve-fleece-sweatshirt/-/A-1000575266",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-snacks-are-my-love-language-toddler-graphic-sweatshirt/-/A-90568453",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-block-checkered-lucky-dude-toddler-graphic-sweatshirt/-/A-1001346983",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-al-big-haul-no-problem-graphic-long-sleeve-fleece-sweatshirt/-/A-1000842132",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-skye-lightning-graphic-long-sleeve-fleece-sweatshirt/-/A-1000807418",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-muntant-ninja-turtles-all-i-want-for-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000844373",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-baby-shark-fintastic-family-graphic-long-sleeve-fleece-sweatshirt/-/A-1000588556",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-moana-strong-spirit-graphic-long-sleeve-fleece-sweatshirt/-/A-1000791064",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000633194",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-egg-hunting-crew-bunny-toddler-graphic-sweatshirt/-/A-91235625",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000792022",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-toddler-graphic-sweatshirt/-/A-1001709984",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000721245",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-despicable-me-minions-a-lil-bit-bananas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000799789",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-bear-trees-toddler-graphic-sweatshirt/-/A-91513973",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-valentine-s-hot-wheels-graphic-long-sleeve-fleece-sweatshirt/-/A-1002023849",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/latino-heritage-month-toddler-sweatshirt-black/-/A-91007647",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-taking-the-circuit-by-storm-graphic-long-sleeve-fleece-sweatshirt/-/A-1000594013",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-dr-seuss-the-grinch-america-s-favorite-mean-one-graphic-long-sleeve-fleece-sweatshirt/-/A-1000590337",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-have-an-ice-day-graphic-long-sleeve-fleece-sweatshirt/-/A-1000706889",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000720867",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-pup-pup-lights-up-graphic-long-sleeve-fleece-sweatshirt/-/A-1000852284",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hey-arnold-fresh-arnold-graphic-long-sleeve-fleece-sweatshirt/-/A-1000855674",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-usa-stripes-graphic-long-sleeve-fleece-sweatshirt/-/A-1002104592",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-lol-surprise-you-glow-girl-graphic-long-sleeve-fleece-sweatshirt/-/A-1001998710",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hey-arnold-cool-arnold-graphic-long-sleeve-fleece-sweatshirt/-/A-1000855931",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-less-dont-more-dos-soccer-graphic-long-sleeve-fleece-sweatshirt/-/A-1000647819",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-graphic-long-sleeve-fleece-sweatshirt/-/A-1000658536",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/deux-par-deux-boy-pullover-french-terry-graphic-sweatshirt-teal-and-peach/-/A-1003012651",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-snow-patrol-graphic-long-sleeve-fleece-sweatshirt/-/A-1000840649",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-music-and-mickey-graphic-long-sleeve-fleece-sweatshirt/-/A-1000783759",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-lol-surprise-lol-bffs-4-eva-graphic-long-sleeve-fleece-sweatshirt/-/A-1002005260",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-player-2-start-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659093",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000592655",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-day-dreaming-sheep-graphic-long-sleeve-fleece-sweatshirt/-/A-1000646295",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-team-paw-everest-graphic-long-sleeve-fleece-sweatshirt/-/A-1000666000",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickeys-ski-shop-graphic-long-sleeve-fleece-sweatshirt/-/A-1000793522",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-heart-grid-graphic-long-sleeve-fleece-sweatshirt/-/A-1000645286",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-hopps-wilde-graphic-long-sleeve-fleece-sweatshirt/-/A-1000655926",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-firefighter-mickey-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659805",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-building-the-future-one-cube-at-a-time-graphic-long-sleeve-fleece-sweatshirt/-/A-1000655562",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hybrid-apparel-lewis-graphic-long-sleeve-fleece-sweatshirt/-/A-1001969116",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-easter-vibes-graphic-long-sleeve-fleece-sweatshirt/-/A-1002072414",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-alice-in-wonderland-graphic-long-sleeve-fleece-sweatshirt/-/A-1000784105",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000825092",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-americana-graphic-long-sleeve-fleece-sweatshirt/-/A-1000816964",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000643941",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-hakuna-matata-graphic-long-sleeve-fleece-sweatshirt/-/A-1000727634",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000788687",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-colorful-simba-graphic-long-sleeve-fleece-sweatshirt/-/A-1000730310",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mad-flex-sully-graphic-long-sleeve-fleece-sweatshirt/-/A-1000795771",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-pawsome-pups-to-the-rescue-graphic-long-sleeve-fleece-sweatshirt/-/A-1000842272",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-beyond-cool-graphic-long-sleeve-fleece-sweatshirt/-/A-1000813557",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-lilo-stitch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000799900",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000628827",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-love-you-lots-graphic-long-sleeve-fleece-sweatshirt/-/A-1000645296",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-scandinavian-bunny-with-flowers-graphic-long-sleeve-fleece-sweatshirt/-/A-1002611669",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-pups-at-play-graphic-long-sleeve-fleece-sweatshirt/-/A-1000665857",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000605538",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000790166",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-all-star-mickey-graphic-long-sleeve-fleece-sweatshirt/-/A-1000670089",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000605682",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000678909",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-easter-egg-every-kid-graphic-long-sleeve-fleece-sweatshirt/-/A-1002611142",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-villains-cruella-devil-spatter-graphic-long-sleeve-fleece-sweatshirt/-/A-1000802557",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-spongeboo-graphic-long-sleeve-fleece-sweatshirt/-/A-1000728135",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-ready-to-rock-pre-k-graphic-long-sleeve-fleece-sweatshirt/-/A-1003968063",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000711413",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-2nd-grade-squad-graphic-long-sleeve-fleece-sweatshirt/-/A-1000619016",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000803444",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-self-rescuing-damsel-graphic-long-sleeve-fleece-sweatshirt/-/A-1000646012",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-and-minnie-christmas-cookie-crew-graphic-long-sleeve-fleece-sweatshirt/-/A-1000581054",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-adventure-citys-heroes-graphic-long-sleeve-fleece-sweatshirt/-/A-1000807412",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-peter-pan-graphic-long-sleeve-fleece-sweatshirt/-/A-1000716960",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-villains-cruella-savage-graphic-long-sleeve-fleece-sweatshirt/-/A-1000802271",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-better-together-valentino-graphic-long-sleeve-fleece-sweatshirt/-/A-1000657342",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-ken-not-just-arm-candy-graphic-long-sleeve-fleece-sweatshirt/-/A-1002050452",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-in-good-spirits-graphic-long-sleeve-fleece-sweatshirt/-/A-1000713761",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-witch-way-to-the-candy-graphic-long-sleeve-fleece-sweatshirt/-/A-1000585377",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hey-arnold-retro-arnold-and-gerald-graphic-long-sleeve-fleece-sweatshirt/-/A-1000855237",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-happy-halloween-y-all-graphic-long-sleeve-fleece-sweatshirt/-/A-1000670651",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-mutant-mayhem-rocksteady-graphic-long-sleeve-fleece-sweatshirt/-/A-1000803570",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000709993",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000825003",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-bubble-guppies-bub-bub-bubble-gup-gup-guppies-graphic-long-sleeve-fleece-sweatshirt/-/A-1000759782",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-kids-crew-fleece-graphic-long-sleeve-fleece-sweatshirt/-/A-1002035929",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-lucky-typewriter-toddler-graphic-sweatshirt/-/A-1002225720",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-slinky-dog-bend-stretch-chill-graphic-long-sleeve-fleece-sweatshirt/-/A-1000646218",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-mommy-is-my-sunshine-graphic-long-sleeve-fleece-sweatshirt/-/A-1000766223",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000826539",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-christmas-crew-graphic-long-sleeve-fleece-sweatshirt/-/A-1000840376",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-sbob-and-gary-graphic-long-sleeve-fleece-sweatshirt/-/A-1000619076",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-little-tikes-fast-food-towing-graphic-long-sleeve-fleece-sweatshirt/-/A-1001989092",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-cat-scratches-graphic-long-sleeve-fleece-sweatshirt/-/A-1000634870",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-there-s-always-a-way-graphic-long-sleeve-fleece-sweatshirt/-/A-1000658381",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000841190",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-have-a-nice-day-graphic-long-sleeve-fleece-sweatshirt/-/A-1000586843",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-birthday-boy-graphic-long-sleeve-fleece-sweatshirt/-/A-1002086711",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-streetwear-shot-graphic-long-sleeve-fleece-sweatshirt/-/A-1000624809",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-toy-story-4-graphic-long-sleeve-fleece-sweatshirt/-/A-1000630695",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000643917",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-muntant-ninja-turtles-get-into-the-ninja-spirit-graphic-long-sleeve-fleece-sweatshirt/-/A-1000844333",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-mutant-mayhem-ninja-diet-graphic-long-sleeve-fleece-sweatshirt/-/A-1000804042",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-yelp-for-halloween-help-graphic-long-sleeve-fleece-sweatshirt/-/A-1000730658",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-love-is-in-the-air-graphic-long-sleeve-fleece-sweatshirt/-/A-1000835223",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-shenanigans-squad-toddler-graphic-sweatshirt/-/A-1001347037",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-encanto-graphic-long-sleeve-fleece-sweatshirt/-/A-1000598517",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000681746",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-despicable-me-minions-living-the-good-life-graphic-long-sleeve-fleece-sweatshirt/-/A-1000750122",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-lilo-stitch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000617640",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-pixar-character-shapes-graphic-long-sleeve-fleece-sweatshirt/-/A-1000796301",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-despicable-me-minions-hippie-lil-thing-graphic-long-sleeve-fleece-sweatshirt/-/A-1000799296",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-born-raised-usa-graphic-long-sleeve-fleece-sweatshirt/-/A-1000847879",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-sister-of-birthday-boy-graphic-long-sleeve-fleece-sweatshirt/-/A-1002085621",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-pumpkin-graphic-long-sleeve-fleece-sweatshirt/-/A-1000713353",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-mattel-halloween-graphic-long-sleeve-fleece-sweatshirt/-/A-1001972730",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-choose-happy-smiley-face-toddler-graphic-sweatshirt/-/A-1002350228",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000605526",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-trolls-show-up-glow-up-poppy-graphic-long-sleeve-fleece-sweatshirt/-/A-1000797668",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000669319",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-firefighter-mickey-graphic-long-sleeve-fleece-sweatshirt/-/A-1000660116",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-hey-boo-graphic-long-sleeve-fleece-sweatshirt/-/A-1000728527",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000605718",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000824565",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-graphic-long-sleeve-fleece-sweatshirt/-/A-1000800905",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-i-m-so-smart-graphic-long-sleeve-fleece-sweatshirt/-/A-1000752874",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000836497",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000785394",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-peeking-out-graphic-long-sleeve-fleece-sweatshirt/-/A-1000575228",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000709977",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-kicking-it-in-the-ole-west-graphic-long-sleeve-fleece-sweatshirt/-/A-1000792998",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-and-pluto-graphic-long-sleeve-fleece-sweatshirt/-/A-1000793904",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-explore-nature-graphic-long-sleeve-fleece-sweatshirt/-/A-1000793693",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-trolls-tis-the-season-trolly-branch-and-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000797259",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-radical-rides-80s-graphic-long-sleeve-fleece-sweatshirt/-/A-1001948470",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-more-bored-than-you-graphic-long-sleeve-fleece-sweatshirt/-/A-1000586264",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-trolls-poppy-holidays-graphic-long-sleeve-fleece-sweatshirt/-/A-1000797200",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-snow-cute-graphic-long-sleeve-fleece-sweatshirt/-/A-1000757184",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-scary-cute-graphic-long-sleeve-fleece-sweatshirt/-/A-1000730853",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-cats-dogs-graphic-long-sleeve-fleece-sweatshirt/-/A-1000832509",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-st-patrick-s-day-tiny-hooligan-graphic-long-sleeve-fleece-sweatshirt/-/A-1001600375",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000831710",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-in-my-football-era-red-toddler-graphic-sweatshirt/-/A-1001805994",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-minnie-cookie-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000640358",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-mtv-icon-collage-logo-graphic-long-sleeve-fleece-sweatshirt/-/A-1001982827",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-family-is-everything-graphic-long-sleeve-fleece-sweatshirt/-/A-1000635502",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/patpat-disney-winnie-the-pooh-sweatshirt-for-toddler-fall-winter-oufits/-/A-1005211976",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-will-trade-brother-for-candy-graphic-long-sleeve-fleece-sweatshirt/-/A-1000712674",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-i-love-mickey-graphic-long-sleeve-fleece-sweatshirt/-/A-1000645262",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-80s-bebop-rocksteady-graphic-long-sleeve-fleece-sweatshirt/-/A-1000626330",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-jessie-graphic-graphic-long-sleeve-fleece-sweatshirt/-/A-1000646142",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-rock-the-house-graphic-long-sleeve-fleece-sweatshirt/-/A-1000815346",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-race-crew-3-yrs-graphic-long-sleeve-fleece-sweatshirt/-/A-1002086588",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000824328",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-shine-on-graphic-long-sleeve-fleece-sweatshirt/-/A-1000852242",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-oh-boy-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659126",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-ren-stimpy-friendly-laughter-graphic-long-sleeve-fleece-sweatshirt/-/A-1000738983",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000824219",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000679259",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-lilo-and-stitch-alo-ho-ho-ho-ha-graphic-long-sleeve-fleece-sweatshirt/-/A-1000703474",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-squidward-i-dont-get-paid-enough-graphic-long-sleeve-fleece-sweatshirt/-/A-1000619103",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000728153",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-believe-in-the-impossible-graphic-long-sleeve-fleece-sweatshirt/-/A-1000795958",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-ready-to-smash-cake-graphic-long-sleeve-fleece-sweatshirt/-/A-1002086387",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-valentine-s-squad-graphic-long-sleeve-fleece-sweatshirt/-/A-1002054149",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-back-to-school-graphic-long-sleeve-fleece-sweatshirt/-/A-1002095057",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-colors-of-the-rainbow-graphic-long-sleeve-fleece-sweatshirt/-/A-1000766520",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000824003",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-little-tikes-imagination-is-all-it-takes-graphic-long-sleeve-fleece-sweatshirt/-/A-1001988162",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-lol-surprise-lol-time-to-shine-graphic-long-sleeve-fleece-sweatshirt/-/A-1002004600",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-wish-upon-a-star-graphic-long-sleeve-fleece-sweatshirt/-/A-1000657095",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000789226",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-patrick-it-s-lit-graphic-long-sleeve-fleece-sweatshirt/-/A-1000851079",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-inspired-by-barbie-graphic-long-sleeve-fleece-sweatshirt/-/A-1002080173",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-lilo-stitch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000799996",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-ready-for-shenanigans-graphic-long-sleeve-fleece-sweatshirt/-/A-1000835741",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-varsity-seal-graphic-long-sleeve-fleece-sweatshirt/-/A-1000784638",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-santiago-of-the-sea-the-crew-graphic-long-sleeve-fleece-sweatshirt/-/A-1000771231",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-in-my-football-era-maroon-toddler-graphic-sweatshirt/-/A-1001806273",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-christmas-photo-collage-graphic-long-sleeve-fleece-sweatshirt/-/A-1000840300",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000580614",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000592282",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-wish-hope-dream-grid-graphic-long-sleeve-fleece-sweatshirt/-/A-1000796113",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-winnie-the-pooh-christmas-cookie-testing-crew-graphic-long-sleeve-fleece-sweatshirt/-/A-1000729283",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-be-creative-graphic-long-sleeve-fleece-sweatshirt/-/A-1000638766",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-just-a-pup-who-loves-snow-graphic-long-sleeve-fleece-sweatshirt/-/A-1000840773",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-8-bit-mickey-name-square-graphic-long-sleeve-fleece-sweatshirt/-/A-1000615797",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-team-awesome-graphic-long-sleeve-fleece-sweatshirt/-/A-1000589472",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-i-m-a-winner-graphic-long-sleeve-fleece-sweatshirt/-/A-1000594562",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-yelp-for-snow-day-graphic-long-sleeve-fleece-sweatshirt/-/A-1000840884",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-chase-lightning-graphic-long-sleeve-fleece-sweatshirt/-/A-1000663394",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-welcome-to-the-dreamhouse-graphic-long-sleeve-fleece-sweatshirt/-/A-1002052498",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-st-patrick-s-day-coolest-clover-in-the-patch-graphic-long-sleeve-fleece-sweatshirt/-/A-1001600966",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-life-is-an-adventure-graphic-long-sleeve-fleece-sweatshirt/-/A-1000589948",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-respect-the-brotherhood-graphic-long-sleeve-fleece-sweatshirt/-/A-1000665337",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000622129",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-muntant-ninja-turtles-turtley-awesome-group-graphic-long-sleeve-fleece-sweatshirt/-/A-1000844221",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-winnie-the-pooh-tigger-christmas-ho-ho-ho-graphic-long-sleeve-fleece-sweatshirt/-/A-1000729239",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000733865",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000832205",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-i-m-just-here-for-the-snacks-disco-toddler-graphic-sweatshirt/-/A-1001806131",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-mutant-mayhem-turtle-time-graphic-long-sleeve-fleece-sweatshirt/-/A-1000803587",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-the-sword-and-the-stone-graphic-long-sleeve-fleece-sweatshirt/-/A-1000812451",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-halloween-graphic-long-sleeve-fleece-sweatshirt/-/A-1004250678",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-trick-rawr-treat-toddler-graphic-sweatshirt/-/A-93869254",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000792497",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-donald-duck-bogey-club-graphic-long-sleeve-fleece-sweatshirt/-/A-1000615515",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-little-tikes-summer-fun-graphic-long-sleeve-fleece-sweatshirt/-/A-1001988374",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-americana-graphic-long-sleeve-fleece-sweatshirt/-/A-1000698414",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000794892",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000591964",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-just-a-cat-who-loves-chickens-graphic-long-sleeve-fleece-sweatshirt/-/A-1000634668",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-americana-graphic-long-sleeve-fleece-sweatshirt/-/A-1000675656",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-minnie-track-and-field-graphic-long-sleeve-fleece-sweatshirt/-/A-1000748090",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000836096",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-the-founding-feather-graphic-long-sleeve-fleece-sweatshirt/-/A-1000624296",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-lilo-stitch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000799857",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000783441",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000832172",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000688716",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000622309",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-nature-patrol-graphic-long-sleeve-fleece-sweatshirt/-/A-1000590060",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-logo-vertical-graphic-long-sleeve-fleece-sweatshirt/-/A-1000634434",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-goofy-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659016",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-next-adventure-graphic-long-sleeve-fleece-sweatshirt/-/A-1000638730",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-halloween-graphic-long-sleeve-fleece-sweatshirt/-/A-1001977070",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-muntant-ninja-turtles-game-on-raph-graphic-long-sleeve-fleece-sweatshirt/-/A-1000836948",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-america-cars-graphic-long-sleeve-fleece-sweatshirt/-/A-1002105016",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000682552",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-vanellope-candy-graphic-long-sleeve-fleece-sweatshirt/-/A-1000809780",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-blue-waves-hello-graphic-long-sleeve-fleece-sweatshirt/-/A-1000754083",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-mouse-rhythm-waves-graphic-long-sleeve-fleece-sweatshirt/-/A-1000783750",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000791953",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-barbie-logo-pink-glitter-graphic-long-sleeve-fleece-sweatshirt/-/A-1002084346",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-love-moana-graphic-long-sleeve-fleece-sweatshirt/-/A-1000747538",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-i-m-a-hugger-graphic-long-sleeve-fleece-sweatshirt/-/A-1000656014",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-muntant-ninja-turtles-city-scape-with-turtles-graphic-long-sleeve-fleece-sweatshirt/-/A-1000837091",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mulan-princess-warrior-graphic-long-sleeve-fleece-sweatshirt/-/A-1000639041",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-valentine-s-day-be-my-meowentine-graphic-long-sleeve-fleece-sweatshirt/-/A-1001598719",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000825509",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000679058",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-nature-the-antidote-to-stress-graphic-long-sleeve-fleece-sweatshirt/-/A-1000648411",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-patches-graphic-long-sleeve-fleece-sweatshirt/-/A-1000793825",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-charmer-clover-toddler-graphic-sweatshirt/-/A-1001890466",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-lilo-stitch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000617303",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-shamrock-wishes-irish-kisses-graphic-long-sleeve-fleece-sweatshirt/-/A-1000828085",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-and-minnie-merry-christmas-ice-skating-graphic-long-sleeve-fleece-sweatshirt/-/A-1000640269",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000824664",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000819220",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-rugrats-reptar-meme-graphic-long-sleeve-fleece-sweatshirt/-/A-1000618346",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000629053",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-lets-race-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659515",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-charmed-im-sure-graphic-long-sleeve-fleece-sweatshirt/-/A-1000835624",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-dr-seuss-all-things-red-white-and-blue-graphic-long-sleeve-fleece-sweatshirt/-/A-1000595260",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-firefighter-graphic-long-sleeve-fleece-sweatshirt/-/A-1000802776",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-team-paw-skye-graphic-long-sleeve-fleece-sweatshirt/-/A-1000580585",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-happy-holidays-wreath-graphic-long-sleeve-fleece-sweatshirt/-/A-1000706456",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-blue-s-thinking-chair-graphic-long-sleeve-fleece-sweatshirt/-/A-1000766642",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-rugrats-retro-rugrats-graphic-long-sleeve-fleece-sweatshirt/-/A-1000618265",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-3rd-grade-squad-graphic-long-sleeve-fleece-sweatshirt/-/A-1000618908",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-squad-ghouls-graphic-long-sleeve-fleece-sweatshirt/-/A-1000713221",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-varsity-love-vibes-toddler-graphic-sweatshirt/-/A-1001743381",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000710150",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-happy-st-patricks-day-graphic-long-sleeve-fleece-sweatshirt/-/A-1000849743",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-dinotastic-graphic-long-sleeve-fleece-sweatshirt/-/A-1000793060",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-wish-graphic-long-sleeve-fleece-sweatshirt/-/A-1000792668",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-living-in-the-moment-graphic-long-sleeve-fleece-sweatshirt/-/A-1000630078",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000643961",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-retro-sunset-graphic-long-sleeve-fleece-sweatshirt/-/A-1000626589",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-sunset-shades-graphic-long-sleeve-fleece-sweatshirt/-/A-1000813715",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-stacked-graphic-long-sleeve-fleece-sweatshirt/-/A-1000658862",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000714568",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-charlie-brown-and-linus-skiing-graphic-long-sleeve-fleece-sweatshirt/-/A-1000840584",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-charlie-brown-snoopy-merry-christmas-warm-wishes-graphic-long-sleeve-fleece-sweatshirt/-/A-1000726331",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000669479",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000662635",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-living-legend-1934-graphic-long-sleeve-fleece-sweatshirt/-/A-1000624668",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-friends-from-the-start-graphic-long-sleeve-fleece-sweatshirt/-/A-1000594736",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-no-clue-why-i-m-out-of-bed-graphic-long-sleeve-fleece-sweatshirt/-/A-1000767097",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-tmnt-rebel-road-group-graphic-long-sleeve-fleece-sweatshirt/-/A-1000665346",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000823760",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-americana-graphic-long-sleeve-fleece-sweatshirt/-/A-1000698544",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000790112",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000662586",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-retro-styled-graphic-long-sleeve-fleece-sweatshirt/-/A-1000727359",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000825529",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-polly-pocket-90s-doll-graphic-long-sleeve-fleece-sweatshirt/-/A-1002021794",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-top-scarer-graphic-long-sleeve-fleece-sweatshirt/-/A-1000795789",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-santiago-of-the-sea-a-good-pirate-graphic-long-sleeve-fleece-sweatshirt/-/A-1000773516",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-thunder-hollow-piston-cup-graphic-long-sleeve-fleece-sweatshirt/-/A-1000594061",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-but-did-you-dye-toddler-graphic-sweatshirt/-/A-91109312",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000652018",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-st-patrick-s-day-sheep-holding-a-shamrock-graphic-long-sleeve-fleece-sweatshirt/-/A-1001601289",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000790256",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-kamp-koral-happy-kampers-graphic-long-sleeve-fleece-sweatshirt/-/A-1000787771",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000790317",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-little-tikes-teamwork-makes-the-dream-work-graphic-long-sleeve-fleece-sweatshirt/-/A-1001988322",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000824381",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-lucky-vibes-lightning-bolt-toddler-graphic-sweatshirt/-/A-1002533009",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000822959",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000731363",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-squidward-bah-humbug-graphic-long-sleeve-fleece-sweatshirt/-/A-1000704369",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-hakuna-matata-graphic-long-sleeve-fleece-sweatshirt/-/A-1000728011",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-minnie-all-star-1928-graphic-long-sleeve-fleece-sweatshirt/-/A-1000833443",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000788834",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-back-to-school-graphic-long-sleeve-fleece-sweatshirt/-/A-1002095323",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-zootopia-signage-graphic-long-sleeve-fleece-sweatshirt/-/A-1000655879",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-out-there-graphic-long-sleeve-fleece-sweatshirt/-/A-1000646070",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-dr-seuss-oh-places-you-ll-go-when-you-read-graphic-long-sleeve-fleece-sweatshirt/-/A-1003965766",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-let-s-shamrock-toddler-graphic-sweatshirt/-/A-90899391",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-hugs-kisses-pup-treats-graphic-long-sleeve-fleece-sweatshirt/-/A-1000833108",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-snoopy-and-friends-thrilled-to-be-chilled-graphic-long-sleeve-fleece-sweatshirt/-/A-1000850433",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-villains-black-hearted-graphic-long-sleeve-fleece-sweatshirt/-/A-1000802244",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000792015",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-boo-hide-and-seek-graphic-long-sleeve-fleece-sweatshirt/-/A-1000655086",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-donald-bit-of-a-show-off-graphic-long-sleeve-fleece-sweatshirt/-/A-1000785880",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-harris-hubert-hamish-graphic-long-sleeve-fleece-sweatshirt/-/A-1000809625",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-woodstock-ski-pro-graphic-long-sleeve-fleece-sweatshirt/-/A-1000726390",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-the-sword-and-the-stone-graphic-long-sleeve-fleece-sweatshirt/-/A-1000812376",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-villains-ursula-glam-rock-graphic-long-sleeve-fleece-sweatshirt/-/A-1000802272",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-bubble-guppies-bubble-grid-graphic-long-sleeve-fleece-sweatshirt/-/A-1000759631",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-you-re-my-lucky-charm-clovers-toddler-graphic-sweatshirt/-/A-1002532979",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-star-face-grid-graphic-long-sleeve-fleece-sweatshirt/-/A-1000657457",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-ask-me-if-i-care-graphic-long-sleeve-fleece-sweatshirt/-/A-1000587543",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-will-trade-sister-for-candy-graphic-long-sleeve-fleece-sweatshirt/-/A-1000712546",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-despicable-me-minions-retro-rainbow-skater-graphic-long-sleeve-fleece-sweatshirt/-/A-1000799284",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-barbie-heart-grid-graphic-long-sleeve-fleece-sweatshirt/-/A-1002082288",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-bubble-guppies-gil-graphic-long-sleeve-fleece-sweatshirt/-/A-1000758791",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-roarsome-graphic-long-sleeve-fleece-sweatshirt/-/A-1000646120",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-mutant-mayhem-graphic-long-sleeve-fleece-sweatshirt/-/A-1000819440",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-smiles-all-summer-graphic-long-sleeve-fleece-sweatshirt/-/A-1000751610",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000819923",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-daddy-is-my-sunshine-graphic-long-sleeve-fleece-sweatshirt/-/A-1000766522",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-nap-sketch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000634559",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-blue-let-s-play-graphic-long-sleeve-fleece-sweatshirt/-/A-1000766753",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000850557",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-daddy-s-pawsome-camping-buddy-graphic-long-sleeve-fleece-sweatshirt/-/A-1000590249",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-mood-graphic-long-sleeve-fleece-sweatshirt/-/A-1000586275",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-trolls-jolly-trolly-christmas-branch-and-poppy-graphic-long-sleeve-fleece-sweatshirt/-/A-1000796992",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-toy-story-graphic-long-sleeve-fleece-sweatshirt/-/A-1000784047",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-kamp-koral-kamp-krew-graphic-long-sleeve-fleece-sweatshirt/-/A-1000787919",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-the-one-and-only-graphic-long-sleeve-fleece-sweatshirt/-/A-1000788893",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000825653",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-graphic-long-sleeve-fleece-sweatshirt/-/A-1000800551",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-valentine-s-drive-to-win-graphic-long-sleeve-fleece-sweatshirt/-/A-1002025055",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-ignoring-you-graphic-long-sleeve-fleece-sweatshirt/-/A-1000586428",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-game-day-stars-toddler-graphic-sweatshirt/-/A-1001823595",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-earth-day-globe-graphic-long-sleeve-fleece-sweatshirt/-/A-1000723351",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-choose-happy-smiley-face-toddler-graphic-sweatshirt/-/A-1002350265",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-best-witches-graphic-long-sleeve-fleece-sweatshirt/-/A-1000728592",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000832030",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-classic-mickey-mouse-retro-sketches/-/A-1000783359",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-kamp-koral-kamp-koral-badge-graphic-long-sleeve-fleece-sweatshirt/-/A-1000787922",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-cottontail-candy-co-graphic-long-sleeve-fleece-sweatshirt/-/A-1002611657",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-foreva-whateva-eve-graphic-long-sleeve-fleece-sweatshirt/-/A-1000795887",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-st-patrick-s-day-lucky-vibes-graphic-long-sleeve-fleece-sweatshirt/-/A-1001598653",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-ready-for-a-super-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000664099",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-faces-grid-graphic-long-sleeve-fleece-sweatshirt/-/A-1000587223",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-forever-a-classic-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659084",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-keeping-our-cool-graphic-long-sleeve-fleece-sweatshirt/-/A-1000841032",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-trolls-lets-hang-out-branch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000797434",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-dr-seuss-cat-in-the-hat-usa-graphic-long-sleeve-fleece-sweatshirt/-/A-1000595100",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-uno-toddler-and-youth-crewneck-fleece-sweatshirt-graphic-long-sleeve-fleece-sweatshirt/-/A-1002096775",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-minnie-mouse-xoxo-graphic-long-sleeve-fleece-sweatshirt/-/A-1000630435",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-st-patrick-s-day-i-don-t-need-luck-i-ve-got-skills-graphic-long-sleeve-fleece-sweatshirt/-/A-1001600058",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-merry-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000791297",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-bonecrusher-hallo-wheels-68-with-bats-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659229",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-believe-christmas-toddler-graphic-sweatshirt/-/A-93207450",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000662268",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-tis-the-season-football-toddler-graphic-sweatshirt/-/A-1001823575",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-halloween-graphic-long-sleeve-fleece-sweatshirt/-/A-1001977169",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-play-with-me-graphic-long-sleeve-fleece-sweatshirt/-/A-1000792742",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-rugrats-snowball-fight-graphic-long-sleeve-fleece-sweatshirt/-/A-1000784865",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-lol-surprise-grow-grrrl-graphic-long-sleeve-fleece-sweatshirt/-/A-1002001048",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000795045",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-alice-in-wonderland-graphic-long-sleeve-fleece-sweatshirt/-/A-1000617073",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000826474",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-rock-em-sock-em-robots-robot-outline-graphic-long-sleeve-fleece-sweatshirt/-/A-1002011032",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-logo-graphic-long-sleeve-fleece-sweatshirt/-/A-1000615606",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-pit-crew-pre-k-graphic-long-sleeve-fleece-sweatshirt/-/A-1002094355",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-the-fox-has-arrived-graphic-long-sleeve-fleece-sweatshirt/-/A-1000655873",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-americana-graphic-long-sleeve-fleece-sweatshirt/-/A-1000698658",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000633057",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000836450",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-skye-character-graphic-long-sleeve-fleece-sweatshirt/-/A-1000666081",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-anna-it-s-my-birthday-graphic-long-sleeve-fleece-sweatshirt/-/A-1000808663",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-easter-graphic-long-sleeve-fleece-sweatshirt/-/A-1002072664",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-my-heart-decides-graphic-long-sleeve-fleece-sweatshirt/-/A-1000639012",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-santiago-of-the-sea-kitty-cat-crew-graphic-long-sleeve-fleece-sweatshirt/-/A-1000772435",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-creeping-it-real-graphic-long-sleeve-fleece-sweatshirt/-/A-1000761148",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-explore-graphic-long-sleeve-fleece-sweatshirt/-/A-1000793962",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000825467",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-kisses-and-valentine-wishes-graphic-long-sleeve-fleece-sweatshirt/-/A-1000835248",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-little-pumpkin-retro-toddler-graphic-sweatshirt/-/A-92793545",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000823486",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000795100",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-toy-story-4-graphic-long-sleeve-fleece-sweatshirt/-/A-1000789077",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000825338",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-bad-guys-don-t-win-medals-graphic-long-sleeve-fleece-sweatshirt/-/A-1000666809",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000824118",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-encanto-graphic-long-sleeve-fleece-sweatshirt/-/A-1000598650",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-xoxo-heart-graphic-long-sleeve-fleece-sweatshirt/-/A-1002026237",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000825174",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-pixel-sweater-deer-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000737297",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000790164",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000679877",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000579118",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-i-m-gonna-wreck-it-graphic-long-sleeve-fleece-sweatshirt/-/A-1000666970",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-having-snow-much-fun-graphic-long-sleeve-fleece-sweatshirt/-/A-1000840976",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000824756",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-ken-since-1961-graphic-long-sleeve-fleece-sweatshirt/-/A-1002052545",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-dr-seuss-original-i-am-green-eggs-and-ham-graphic-long-sleeve-fleece-sweatshirt/-/A-1000595083",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-scared-graphic-long-sleeve-fleece-sweatshirt/-/A-1000713466",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-monster-high-pastel-character-group-graphic-long-sleeve-fleece-sweatshirt/-/A-1002010118",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-for-days-graphic-long-sleeve-fleece-sweatshirt/-/A-1000630160",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-vampire-graphic-long-sleeve-fleece-sweatshirt/-/A-1000713613",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-present-patrol-graphic-long-sleeve-fleece-sweatshirt/-/A-1000852281",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-lilo-stitch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000617334",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-will-trade-sister-for-candy-toddler-graphic-sweatshirt/-/A-93032701",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000794942",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-here-till-midnight-graphic-long-sleeve-fleece-sweatshirt/-/A-1000791230",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-paw-patrol-is-on-a-roll-graphic-long-sleeve-fleece-sweatshirt/-/A-1000589799",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-autumn-leaves-and-pumpkins-please-graphic-long-sleeve-fleece-sweatshirt/-/A-1000727310",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-cookeys-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000853766",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-seasons-eatings-graphic-long-sleeve-fleece-sweatshirt/-/A-1000706528",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-firefighter-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659866",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-valentine-s-day-cupid-crew-graphic-long-sleeve-fleece-sweatshirt/-/A-1001598323",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000719537",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-little-tikes-find-the-way-graphic-long-sleeve-fleece-sweatshirt/-/A-1001988854",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-lol-surprise-grow-gurrl-heart-earth-graphic-long-sleeve-fleece-sweatshirt/-/A-1002000626",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-never-stop-dreaming-graphic-long-sleeve-fleece-sweatshirt/-/A-1000791006",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-witch-silhouette-graphic-long-sleeve-fleece-sweatshirt/-/A-1002090628",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-americana-graphic-long-sleeve-fleece-sweatshirt/-/A-1000698693",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-i-feel-so-alive-graphic-long-sleeve-fleece-sweatshirt/-/A-1000792799",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-barbie-witch-graphic-long-sleeve-fleece-sweatshirt/-/A-1002092070",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000788924",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-packed-for-adventure-pluto-mickey-graphic-long-sleeve-fleece-sweatshirt/-/A-1000648507",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-monster-fun-graphic-long-sleeve-fleece-sweatshirt/-/A-1000654802",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000825827",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-patrick-gary-graphic-long-sleeve-fleece-sweatshirt/-/A-1000606449",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-villains-maleficent-vicious-graphic-long-sleeve-fleece-sweatshirt/-/A-1000748752",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-st-patrick-s-day-shenanigans-with-my-gnomies-graphic-long-sleeve-fleece-sweatshirt/-/A-1001602821",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-gamer-logo-press-button-graphic-long-sleeve-fleece-sweatshirt/-/A-1000658955",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-can-i-take-a-mulligan-graphic-long-sleeve-fleece-sweatshirt/-/A-1000615832",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-trolls-feel-the-vibes-poppy-graphic-long-sleeve-fleece-sweatshirt/-/A-1000797965",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000826121",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-howl-eek-pups-graphic-long-sleeve-fleece-sweatshirt/-/A-1000730904",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-team-halftime-distressed-toddler-graphic-sweatshirt/-/A-1001806049",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-st-patrick-s-day-leprechaun-truck-delivering-luck-graphic-long-sleeve-fleece-sweatshirt/-/A-1001601745",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-space-cruising-graphic-long-sleeve-fleece-sweatshirt/-/A-1000655679",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-marine-life-institute-graphic-long-sleeve-fleece-sweatshirt/-/A-1000658481",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-i-woke-up-like-this-graphic-long-sleeve-fleece-sweatshirt/-/A-1000619068",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-minnie-pluto-sleigh-ride-together-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000640174",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-kamp-koral-kamp-koral-group-graphic-long-sleeve-fleece-sweatshirt/-/A-1000787885",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-peter-pan-graphic-long-sleeve-fleece-sweatshirt/-/A-1000717068",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-mouse-8-bit-graphic-long-sleeve-fleece-sweatshirt/-/A-1000615705",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-americana-graphic-long-sleeve-fleece-sweatshirt/-/A-1000698432",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-i-regret-nothing-graphic-long-sleeve-fleece-sweatshirt/-/A-1000706914",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-valentine-s-day-love-you-like-pizza-graphic-long-sleeve-fleece-sweatshirt/-/A-1001598927",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-have-a-pawsome-halloween-graphic-long-sleeve-fleece-sweatshirt/-/A-1000709629",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000790137",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-snoopy-and-woodstock-snow-much-fun-graphic-long-sleeve-fleece-sweatshirt/-/A-1000726282",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-life-is-just-purrfect-graphic-long-sleeve-fleece-sweatshirt/-/A-1000790047",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hey-arnold-arnold-and-gerald-on-bike-graphic-long-sleeve-fleece-sweatshirt/-/A-1000855349",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-pit-crew-1st-grade-graphic-long-sleeve-fleece-sweatshirt/-/A-1002094370",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-go-go-go-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659418",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000748043",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-team-girls-graphic-long-sleeve-fleece-sweatshirt/-/A-1000750643",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-talk-football-to-me-ball-toddler-graphic-sweatshirt/-/A-1001834928",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-simba-pumbaa-timon-graphic-long-sleeve-fleece-sweatshirt/-/A-1000717723",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-always-be-yourself-squidward-graphic-long-sleeve-fleece-sweatshirt/-/A-1000618818",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-american-darling-minnie-graphic-long-sleeve-fleece-sweatshirt/-/A-1000785653",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-toy-story-graphic-long-sleeve-fleece-sweatshirt/-/A-1000616981",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-revved-up-for-pre-k-graphic-long-sleeve-fleece-sweatshirt/-/A-1002093899",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-mutant-mayhem-ooze-your-ninja-graphic-long-sleeve-fleece-sweatshirt/-/A-1000804130",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-toddler-graphic-sweatshirt/-/A-1001709936",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000803470",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-chester-whipplefilter-graphic-long-sleeve-fleece-sweatshirt/-/A-1000594714",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000629001",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-ramone-like-what-you-see-graphic-long-sleeve-fleece-sweatshirt/-/A-1000665129",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-main-characters-graphic-long-sleeve-fleece-sweatshirt/-/A-1000727896",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-be-a-rainbow-graphic-long-sleeve-fleece-sweatshirt/-/A-1000646239",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000823911",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-rex-made-to-play-graphic-long-sleeve-fleece-sweatshirt/-/A-1000646050",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-winnie-the-pooh-pooh-piglet-wishing-for-a-merry-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000808565",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-spongebob-and-jellyfish-graphic-long-sleeve-fleece-sweatshirt/-/A-1000618714",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-lucky-duck-toddler-graphic-sweatshirt/-/A-1002532877",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-make-way-for-the-future-graphic-long-sleeve-fleece-sweatshirt/-/A-1000670167",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-toy-story-graphic-long-sleeve-fleece-sweatshirt/-/A-1000783930",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-pink-is-power-graphic-long-sleeve-fleece-sweatshirt/-/A-1002051425",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-little-explorers-club-graphic-long-sleeve-fleece-sweatshirt/-/A-1000793937",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-st-patrick-s-day-lucky-to-have-my-cousins-graphic-long-sleeve-fleece-sweatshirt/-/A-1001600181",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000732979",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-oh-boy-90s-graphic-long-sleeve-fleece-sweatshirt/-/A-1000802689",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-peanut-butter-jellyfish-graphic-long-sleeve-fleece-sweatshirt/-/A-1004186439",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000790214",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-mutant-mayhem-its-turtle-time-graphic-long-sleeve-fleece-sweatshirt/-/A-1000803731",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-vday-alphabet-toddler-graphic-sweatshirt/-/A-90568584",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-halloween-is-bootacular-graphic-long-sleeve-fleece-sweatshirt/-/A-1000714017",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-daisy-duck-graphic-long-sleeve-fleece-sweatshirt/-/A-1000802742",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-aloha-from-bikini-bottom-graphic-long-sleeve-fleece-sweatshirt/-/A-1000619144",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000788786",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-mouse-sunglasses-graphic-long-sleeve-fleece-sweatshirt/-/A-1000788864",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-punk-graphic-long-sleeve-fleece-sweatshirt/-/A-1000615787",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-kamp-koral-kamp-koral-logo-badge-graphic-long-sleeve-fleece-sweatshirt/-/A-1000787833",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-collegiate-graphic-long-sleeve-fleece-sweatshirt/-/A-1000587336",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000581245",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000823068",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-the-lion-king-graphic-long-sleeve-fleece-sweatshirt/-/A-1000623844",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-game-day-football-toddler-graphic-sweatshirt/-/A-1001823583",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000839697",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-blue-s-clues-me-graphic-long-sleeve-fleece-sweatshirt/-/A-1000753571",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-jimmy-neutron-boy-genius-graphic-long-sleeve-fleece-sweatshirt/-/A-1000856467",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-americana-graphic-long-sleeve-fleece-sweatshirt/-/A-1000698463",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-shells-and-stripes-graphic-long-sleeve-fleece-sweatshirt/-/A-1000770020",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-lit-fireworks-patrick-graphic-long-sleeve-fleece-sweatshirt/-/A-1000675748",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-its-my-birthday-graphic-long-sleeve-fleece-sweatshirt/-/A-1002086053",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-jr-comin-atcha-graphic-long-sleeve-fleece-sweatshirt/-/A-1000815085",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-mtv-retro-gamer-logo-graphic-long-sleeve-fleece-sweatshirt/-/A-1001983686",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-your-own-pace-graphic-long-sleeve-fleece-sweatshirt/-/A-1000655781",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-muntant-ninja-turtles-happy-holidays-graphic-long-sleeve-fleece-sweatshirt/-/A-1000844346",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-sandy-boo-y-all-graphic-long-sleeve-fleece-sweatshirt/-/A-1000728424",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-happy-halloween-character-grid-graphic-long-sleeve-fleece-sweatshirt/-/A-1000709553",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-toy-story-graphic-long-sleeve-fleece-sweatshirt/-/A-1000783926",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000822957",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-turtle-power-graphic-long-sleeve-fleece-sweatshirt/-/A-1000665643",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-toy-story-tacos-are-my-valentine-graphic-long-sleeve-fleece-sweatshirt/-/A-1003933569",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-less-dont-more-dos-tennis-graphic-long-sleeve-fleece-sweatshirt/-/A-1000647851",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-encanto-graphic-long-sleeve-fleece-sweatshirt/-/A-1000598480",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-baby-shark-don-t-mess-with-mama-shark-graphic-long-sleeve-fleece-sweatshirt/-/A-1000588633",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000720751",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-sandy-cheeks-graphic-long-sleeve-fleece-sweatshirt/-/A-1000618663",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-peter-pan-graphic-long-sleeve-fleece-sweatshirt/-/A-1000717471",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000592244",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-let-s-play-graphic-long-sleeve-fleece-sweatshirt/-/A-1000752355",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-only-good-days-ahead-graphic-long-sleeve-fleece-sweatshirt/-/A-1000657651",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-mutant-mayhem-superfly-graphic-long-sleeve-fleece-sweatshirt/-/A-1000803637",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000826591",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-be-kind-turning-smiles-toddler-graphic-sweatshirt/-/A-1002349888",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-the-sword-and-the-stone-graphic-long-sleeve-fleece-sweatshirt/-/A-1000812482",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-candy-inspector-colorful-toddler-graphic-sweatshirt/-/A-92942525",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-lucky-clover-toddler-graphic-sweatshirt/-/A-1001890853",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-road-trip-ready-graphic-long-sleeve-fleece-sweatshirt/-/A-1000793472",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-santiago-of-the-sea-adventure-awaits-amigos-graphic-long-sleeve-fleece-sweatshirt/-/A-1000773139",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-happy-st-patricks-day-graphic-long-sleeve-fleece-sweatshirt/-/A-1000827835",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-tracker-paw-patrol-graphic-long-sleeve-fleece-sweatshirt/-/A-1000626848",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000831893",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-the-brady-bunch-the-brady-kids-graphic-long-sleeve-fleece-sweatshirt/-/A-1001991050",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-xoxo-barbie-graphic-long-sleeve-fleece-sweatshirt/-/A-1002058014",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-barbie-arrow-heart-logo-graphic-long-sleeve-fleece-sweatshirt/-/A-1002083667",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000633249",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-try-to-keep-up-graphic-long-sleeve-fleece-sweatshirt/-/A-1000786288",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-lol-surprise-catch-some-rays-graphic-long-sleeve-fleece-sweatshirt/-/A-1001999149",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-building-future-recycle-graphic-long-sleeve-fleece-sweatshirt/-/A-1000722890",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000794934",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000824465",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-baby-shark-sharktastic-graphic-long-sleeve-fleece-sweatshirt/-/A-1000588347",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-spongebob-slugger-pants-graphic-long-sleeve-fleece-sweatshirt/-/A-1000593471",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000662726",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000822842",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-monster-high-frankiestein-voltageous-graphic-long-sleeve-fleece-sweatshirt/-/A-1002008360",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-lilo-stitch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000617532",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000591920",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-lol-surprise-always-extra-graphic-long-sleeve-fleece-sweatshirt/-/A-1002005007",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-and-minnie-merry-and-bright-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000640193",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hey-arnold-arnold-gerald-and-abner-graphic-long-sleeve-fleece-sweatshirt/-/A-1000855610",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-filmore-says-chill-dude-graphic-long-sleeve-fleece-sweatshirt/-/A-1000808777",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-race-to-finish-line-graphic-long-sleeve-fleece-sweatshirt/-/A-1000667304",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-magenta-excited-graphic-long-sleeve-fleece-sweatshirt/-/A-1000752029",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-easter-graphic-long-sleeve-fleece-sweatshirt/-/A-1002074880",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-i-wheelie-love-4th-of-july-graphic-long-sleeve-fleece-sweatshirt/-/A-1002105163",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-pretty-and-punk-graphic-long-sleeve-fleece-sweatshirt/-/A-1000615785",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-wave-form-graphic-long-sleeve-fleece-sweatshirt/-/A-1000616042",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-rolling-into-pre-k-graphic-long-sleeve-fleece-sweatshirt/-/A-1002093712",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-graphic-long-sleeve-fleece-sweatshirt/-/A-1002035824",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-pluto-goofy-gift-wrapping-crew-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000640298",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-top-o-the-whatever-graphic-long-sleeve-fleece-sweatshirt/-/A-1000835680",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000792629",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-santiago-of-the-sea-mermaid-magic-graphic-long-sleeve-fleece-sweatshirt/-/A-1000772017",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000719006",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-aliens-triple-threat-graphic-long-sleeve-fleece-sweatshirt/-/A-1000646119",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000747239",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-team-paw-chase-graphic-long-sleeve-fleece-sweatshirt/-/A-1000666025",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-no-gps-graphic-long-sleeve-fleece-sweatshirt/-/A-1000793604",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-fall-graphic-long-sleeve-fleece-sweatshirt/-/A-1004513816",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-fierce-kind-creative-graphic-long-sleeve-fleece-sweatshirt/-/A-1000638743",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-garfield-odie-game-on-graphic-long-sleeve-fleece-sweatshirt/-/A-1000625711",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-ariel-sea-beauty-graphic-long-sleeve-fleece-sweatshirt/-/A-1000638833",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-do-you-think-i-actually-care-graphic-long-sleeve-fleece-sweatshirt/-/A-1000634565",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-brother-squad-toddler-graphic-sweatshirt/-/A-92171097",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-fairytale-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000657298",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-playdate-material-graphic-long-sleeve-fleece-sweatshirt/-/A-1000722818",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-dashing-through-the-snow-graphic-long-sleeve-fleece-sweatshirt/-/A-1001977366",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-too-cute-to-pinch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000691534",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-quackateer-graphic-long-sleeve-fleece-sweatshirt/-/A-1000624757",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-and-friends-time-to-get-festive-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000640156",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-valentino-goat-graphic-long-sleeve-fleece-sweatshirt/-/A-1000796266",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-wheres-the-fire-graphic-long-sleeve-fleece-sweatshirt/-/A-1000670051",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-garfield-panel-logo-graphic-long-sleeve-fleece-sweatshirt/-/A-1000786252",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-1st-grade-squad-graphic-long-sleeve-fleece-sweatshirt/-/A-1000618970",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000662595",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-blue-you-and-halloween-boo-graphic-long-sleeve-fleece-sweatshirt/-/A-1000761783",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-fly-on-the-4th-of-july-graphic-long-sleeve-fleece-sweatshirt/-/A-1000593833",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-iconic-graphic-long-sleeve-fleece-sweatshirt/-/A-1000624515",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-barbie-easter-graphic-long-sleeve-fleece-sweatshirt/-/A-1002074987",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-garf-laying-graphic-long-sleeve-fleece-sweatshirt/-/A-1000625695",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-and-minnie-heart-graphic-long-sleeve-fleece-sweatshirt/-/A-1000645391",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-latso-graphic-long-sleeve-fleece-sweatshirt/-/A-1000646248",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-i-m-fine-this-is-fine-graphic-long-sleeve-fleece-sweatshirt/-/A-1000786282",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000577965",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-nickelodeon-paw-patrol-graphic-long-sleeve-fleece-sweatshirt/-/A-1000828720",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-muntant-ninja-turtles-santas-helpers-in-a-half-shell-graphic-long-sleeve-fleece-sweatshirt/-/A-1000844399",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-lol-surprise-boogie-babe-palm-trees-graphic-long-sleeve-fleece-sweatshirt/-/A-1001999431",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000628967",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-rugrats-reptar-tokyo-graphic-long-sleeve-fleece-sweatshirt/-/A-1000784838",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-can-t-have-rainbow-without-blue-graphic-long-sleeve-fleece-sweatshirt/-/A-1000766730",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-resting-cat-face-graphic-long-sleeve-fleece-sweatshirt/-/A-1000585939",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-despicable-me-minions-mine-mine-mine-graphic-long-sleeve-fleece-sweatshirt/-/A-1000799155",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-merry-beachmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000840268",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-rubble-crew-graphic-long-sleeve-fleece-sweatshirt/-/A-1000748881",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-happy-halloween-graphic-long-sleeve-fleece-sweatshirt/-/A-1000730680",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-snoopy-and-linus-cozy-and-cuddly-graphic-long-sleeve-fleece-sweatshirt/-/A-1000850522",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000715943",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-little-monster-toddler-graphic-sweatshirt/-/A-92725993",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000820153",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-one-wish-can-change-the-world-graphic-long-sleeve-fleece-sweatshirt/-/A-1000657215",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-the-lion-king-graphic-long-sleeve-fleece-sweatshirt/-/A-1000623498",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-checkered-groovy-bunny-toddler-graphic-sweatshirt/-/A-91373244",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-patrol-squad/-/A-1000780996",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-race-crew-5-yrs-graphic-long-sleeve-fleece-sweatshirt/-/A-1002085315",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-field-day-fun-day-graphic-long-sleeve-fleece-sweatshirt/-/A-1000828235",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000591705",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-boo-s-clues-graphic-long-sleeve-fleece-sweatshirt/-/A-1000761700",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000622250",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000788818",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-embroidered-love-typewriter-toddler-graphic-sweatshirt/-/A-1001709887",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-chillin-with-my-snowmies-graphic-long-sleeve-fleece-sweatshirt/-/A-1000757359",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000587151",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-start-my-diet-tomorrow-graphic-long-sleeve-fleece-sweatshirt/-/A-1000634700",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-hot-head-donald-duck-graphic-long-sleeve-fleece-sweatshirt/-/A-1000624546",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hey-arnold-since-96-graphic-long-sleeve-fleece-sweatshirt/-/A-1000854111",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-christmas-botanical-butterfly-graphic-long-sleeve-fleece-sweatshirt/-/A-1000808220",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-polly-pocket-believe-in-the-little-things-graphic-long-sleeve-fleece-sweatshirt/-/A-1002021394",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-the-sword-and-the-stone-graphic-long-sleeve-fleece-sweatshirt/-/A-1000673444",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-dr-seuss-don-t-worry-go-along-graphic-long-sleeve-fleece-sweatshirt/-/A-1000588956",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-patrick-sparkers-flag-graphic-long-sleeve-fleece-sweatshirt/-/A-1000817152",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-trolls-trick-or-troll-branch-and-poppy-graphic-long-sleeve-fleece-sweatshirt/-/A-1000797380",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000789283",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-polly-pocket-polly-pocket-pink-logo-graphic-long-sleeve-fleece-sweatshirt/-/A-1002015220",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-in-my-football-era-green-toddler-graphic-sweatshirt/-/A-1001806076",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-squidward-nope-not-today-graphic-long-sleeve-fleece-sweatshirt/-/A-1000619105",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-roarsome-rex-graphic-long-sleeve-fleece-sweatshirt/-/A-1000646057",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-lucky-retro-stars-toddler-graphic-sweatshirt/-/A-1002277207",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-oh-what-fun-it-is-to-race-graphic-long-sleeve-fleece-sweatshirt/-/A-1001975565",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mike-yeah-maybe-graphic-long-sleeve-fleece-sweatshirt/-/A-1000795796",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-character-panels-graphic-long-sleeve-fleece-sweatshirt/-/A-1000796089",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000803394",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-blue-outline-graphic-long-sleeve-fleece-sweatshirt/-/A-1000766888",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/disney-mickey-mouse-sketches/-/A-1000783404",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-classic-doc-hudson-car-show-ready-graphic-long-sleeve-fleece-sweatshirt/-/A-1000664924",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-garfield-only-a-morning-person-on-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000706615",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-stitch-happy-halloween-graphic-long-sleeve-fleece-sweatshirt/-/A-1000712833",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-tow-ready-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659377",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-lilo-stitch-graphic-long-sleeve-fleece-sweatshirt/-/A-1000799924",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-monster-high-draculara-graphic-long-sleeve-fleece-sweatshirt/-/A-1002008343",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-nickelodeon-paw-patrol-graphic-long-sleeve-fleece-sweatshirt/-/A-1000828797",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-christmas-crew-graphic-long-sleeve-fleece-sweatshirt/-/A-1001975647",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-mickey-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000825673",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-blue-s-clues-you-clue-into-kindness-graphic-long-sleeve-fleece-sweatshirt/-/A-1000753220",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-smell-my-feet-puff-print-toddler-graphic-sweatshirt/-/A-93019554",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-dr-seuss-batty-for-halloween-thing-1-and-thing-2-graphic-long-sleeve-fleece-sweatshirt/-/A-1000585320",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-lol-surprise-lol-dance-graphic-long-sleeve-fleece-sweatshirt/-/A-1002002797",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-instant-message-gingerbread-men-cookie-sheets-christmas-graphic-long-sleeve-fleece-sweatshirt/-/A-1000853764",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-bubble-guppies-deema-graphic-long-sleeve-fleece-sweatshirt/-/A-1000759279",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-hot-wheels-revved-up-for-1st-grade-graphic-long-sleeve-fleece-sweatshirt/-/A-1002094098",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-do-you-even-lift-graphic-long-sleeve-fleece-sweatshirt/-/A-1000646019",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000788822",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-teenage-muntant-ninja-turtles-gaming-group-and-logo-graphic-long-sleeve-fleece-sweatshirt/-/A-1000837050",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-snoopy-woodstock-ski-stripes-graphic-long-sleeve-fleece-sweatshirt/-/A-1000840457",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-graphic-long-sleeve-fleece-sweatshirt/-/A-1000826167",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-baby-shark-fish-friends-forever-graphic-long-sleeve-fleece-sweatshirt/-/A-1000588486",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-ferris-bueller-s-day-off-bueller-bueller-bueller-graphic-long-sleeve-fleece-sweatshirt/-/A-1002031421",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-positive-vibes-graphic-long-sleeve-fleece-sweatshirt/-/A-1000630108",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-trolls-merry-trollsmas-poppy-graphic-long-sleeve-fleece-sweatshirt/-/A-1000797139",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-its-fun-to-explore-graphic-long-sleeve-fleece-sweatshirt/-/A-1000793875",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/the-juniper-shop-trick-or-treat-lightning-bolt-toddler-graphic-sweatshirt/-/A-92546821",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-dr-seuss-abc-book-characters-graphic-long-sleeve-fleece-sweatshirt/-/A-1003966087",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-cars-vintage-graphic-long-sleeve-fleece-sweatshirt/-/A-1000659483",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-minnie-mickey-graphic-long-sleeve-fleece-sweatshirt/-/A-1000658934",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-disney-peter-pan-graphic-long-sleeve-fleece-sweatshirt/-/A-1000713977",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-mattel-mh-the-movie-logo-graphic-long-sleeve-fleece-sweatshirt/-/A-1001972702",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-pawfect-pals-graphic-long-sleeve-fleece-sweatshirt/-/A-1000665977",
        "tags": "Hoodies & Sweatshirts, Pullover Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing, Tops",
        "filters": {
          "type": "Pullover Sweatshirts"
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
