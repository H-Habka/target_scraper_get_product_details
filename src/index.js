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
      "url": "https://www.target.com/p/boy-s-aaahh-real-monsters-characters-eggster-sweatshirt/-/A-1002734948",
      "tags": "Aaahh!!! Real Monsters, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Aaahh!!! Real Monsters"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-aladdin-genie-applause-sign-pull-over-hoodie/-/A-87529462",
      "tags": "Aladdin, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Aladdin"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-alice-in-wonderland-map-of-cheshire-cat-paw-prints-pull-over-hoodie/-/A-85633148",
      "tags": "Alice in Wonderland, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Alice in Wonderland"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-alice-in-wonderland-cheshire-tattoo-we-are-all-mad-here-pull-over-hoodie/-/A-85633136",
      "tags": "Alice in Wonderland, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Alice in Wonderland"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-alice-in-wonderland-pocket-sketch-alice-pull-over-hoodie/-/A-85824030",
      "tags": "Alice in Wonderland, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Alice in Wonderland"
      }
    },
    {
      "url": "https://www.target.com/p/castore-alpine-racing-f1-2025-kids-team-hoodie/-/A-1002315511",
      "tags": "Alpine F1 Team, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Alpine F1 Team"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-ant-man-and-the-wasp-quantumania-look-out-for-the-little-guy-pull-over-hoodie/-/A-89016596",
      "tags": "Ant-Man, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Ant-Man"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-ant-man-and-the-wasp-quantumania-movie-logo-black-pull-over-hoodie/-/A-89016752",
      "tags": "Ant-Man, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Ant-Man"
      }
    },
    {
      "url": "https://www.target.com/p/yu-gi-oh-main-characters-and-monsters-youth-black-graphic-hoodie/-/A-84809470",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops, Yu-Gi-Oh!",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Art Class"
      }
    },
    {
      "url": "https://www.target.com/p/yu-gi-oh-main-characters-and-monsters-youth-athletic-gray-graphic-hoodie/-/A-84810651",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops, Yu-Gi-Oh!",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Art Class"
      }
    },
    {
      "url": "https://www.target.com/p/yu-gi-oh-character-group-with-main-monsters-long-sleeve-black-youth-hooded-sweatshirt/-/A-88756558",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops, Yu-Gi-Oh!",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Art Class"
      }
    },
    {
      "url": "https://www.target.com/p/yu-gi-oh-dark-magician-puff-print-long-sleeve-black-youth-hooded-sweatshirt/-/A-88756559",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops, Yu-Gi-Oh!",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Art Class"
      }
    },
    {
      "url": "https://www.target.com/p/yugi-gi-oh-yugi-logo-long-sleeve-blue-youth-sweatshirt/-/A-88868257",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops, Yu-Gi-Oh!",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Art Class"
      }
    },
    {
      "url": "https://www.target.com/p/yu-gi-oh-it-s-time-to-duel-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-88756447",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops, Yu-Gi-Oh!",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Art Class"
      }
    },
    {
      "url": "https://www.target.com/p/yu-gi-oh-yugi-character-with-circle-frame-and-logo-youth-athletic-heather-gray-crew-neck-sweatshirt/-/A-88813983",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops, Yu-Gi-Oh!",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "Art Class"
      }
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-pullover-graphic-sweatshirt-beige/-/A-1003010904",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops, deux par deux",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "deux par deux"
      }
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-printed-pullover-sweatshirt-beige-palm-tree-and-teal/-/A-1003011090",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops, deux par deux",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "deux par deux"
      }
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-pullover-graphic-sweatshirt-lime-green/-/A-1003011124",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops, deux par deux",
      "filters": {
        "type": "Pullover Sweatshirts",
        "brand": "deux par deux"
      }
    },
    {
      "url": "https://www.target.com/p/boys-french-terry-zip-up-hoodie-uniform-sweatshirt-cat-jack-blue/-/A-94493151",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-fleece-zip-up-sweatshirt-cat-jack/-/A-85208711",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-2pk-fleece-zip-up-hoodie-cat-jack/-/A-85264096",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-fleece-zip-up-sweatshirt-cat-38-jack-8482/-/A-94493187",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/kids-adaptive-fleece-zip-up-hooded-sweatshirt-cat-jack-black/-/A-94581064",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-halloween-glow-in-the-dark-zip-up-hooded-sweatshirt-cat-jack-black/-/A-94449922",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/minecraft-creeper-fleece-zip-up-hoodie-little-kid-to-big-kid/-/A-87232780",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/leveret-kids-zipper-classic-solid-color-sweat-hoodie/-/A-89567658",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/leveret-kids-zipper-cotton-solid-color-hoodie/-/A-89572023",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/marvel-spider-man-spider-verse-fleece-zip-up-hoodie-little-kid-to-big-kid/-/A-88397401",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/dc-comics-justice-league-superman-fleece-zip-up-hoodie-and-cape-little-kid-to-big-kid/-/A-88397427",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-dc-comics-the-flash-cosplay-hooded-sweatshirt-red/-/A-86271088",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-premium-fleece-full-zip-hoodie-all-in-motion/-/A-90945937",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/seven-times-six-bluey-hoodie-kids-3d-ears-embroidered-long-sleeve-zip-up-costume-sweatshirt-blue/-/A-1004542941",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-jurassic-park-cosplay-full-zip-pullover-hoodie-green/-/A-94492353",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/disney-pixar-toy-story-buzz-lightyear-fleece-zip-up-hoodie-toddler-to-big-kid/-/A-88397395",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/galaxy-by-harvic-boy-s-slim-fit-fleece-lined-zip-up-hoodie/-/A-1004685218",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/seven-times-six-minecraft-jacket-boys-creeper-fleece-gamer-zip-up-hoodie-green/-/A-1003961990",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/bluey-bingo-cozy-faux-shearling-zip-up-cosplay-hoodie-toddler-to-little-kid/-/A-89476247",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/leveret-kids-zipper-boho-solid-color-sweat-hoodie/-/A-89567550",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/marvel-spider-man-avengers-fleece-zip-up-cosplay-hoodie-little-kid-to-big-kid/-/A-93131259",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/seven-times-six-pokemon-hoodie-kids-gen-01-zip-up-3-d-character-costume-hoodie/-/A-1004268582",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/disney-toy-story-mickey-mouse-lilo-stitch-fleece-zip-up-hoodie-little-kid-to-big-kid/-/A-94049698",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-color-block-full-zip-hoodie-sweatshirt-blue-navy-and-cream/-/A-1003011230",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/leveret-kids-zipper-neutral-solid-color-sweat-hoodie/-/A-89567984",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/marvel-spider-man-avengers-fleece-zip-up-cosplay-hoodie-little-kid-to-big-kid/-/A-1000137469",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/transformers-optimus-prime-bumblebee-megatron-fleece-zip-up-hoodie-little-kid-to-big-kid/-/A-88296543",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/disney-pixar-cars-incredibles-winnie-the-pooh-zip-up-cosplay-hoodie-infant-to-toddler/-/A-88363000",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/marvel-spider-man-fleece-zip-up-cosplay-hoodie-toddler-to-big-kid/-/A-89089012",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/red-bull-racing-f1-kid-s-2024-team-full-zip-hoodie/-/A-92352292",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/marvel-spider-man-avengers-fleece-zip-up-hoodie-little-kid-to-big-kid/-/A-88148130",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/marvel-avengers-black-panther-cosplay-fleece-zip-up-pullover-hoodie-toddler-to-little-kid/-/A-88337215",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/scooby-doo-scooby-doo-fleece-zip-up-hoodie-brown/-/A-87245870",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/disney-mickey-mouse-minnie-mouse-lion-king-simba-fleece-zip-up-hoodie/-/A-89243071",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/city-threads-100-cotton-kids-unisex-soft-fleece-zip-hoodie-with-inner-pockets-usa-made/-/A-1001830183",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/paw-patrol-fleece-zip-up-hoodie-little-kid-to-big-kid/-/A-94103410",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/disney-winnie-the-pooh-mickey-mouse-tigger-pluto-zip-up-hoodie-newborn-to-little-kid/-/A-89745838",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/castore-red-bull-racing-f1-kid-s-2025-team-full-zip-hoodie/-/A-1002208382",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/champion-boys-double-knit-zip-up-hoodie/-/A-94609778",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/galaxy-by-harvic-boy-s-slim-fit-fleece-lined-zip-up-hoodie-2-pack/-/A-1004685257",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/seven-times-six-marvel-spider-man-jacket-boys-superhero-fleece-zip-up-hoodie-multicolored/-/A-1004119403",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/galaxy-by-harvic-boy-s-slim-fit-fleece-lined-zip-up-hoodie-3-pack/-/A-1004685260",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/castore-alpine-racing-f1-2025-kids-team-full-zip-hoodie/-/A-1002315505",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-minecraft-mineral-wash-zip-up-hooded-sweatshirt-green-gray/-/A-94431025",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-pokemon-zip-up-hooded-sweatshirt-light-beige/-/A-94431031",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/converse-boys-french-terry-zip-up-sweatshirt/-/A-92289908",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-messi-zip-up-hooded-sweatshirt-gray/-/A-94467771",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-mario-character-hooded-sweatshirt-royal-blue/-/A-93599979",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-sonic-the-hedgehog-character-hooded-sweatshirt-blue/-/A-93717581",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/marvel-miles-morales-spider-man-boys-zip-up-hooded-sweatshirt-for-toddlers-and-big-kids/-/A-1004605426",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-pikachu-character-hooded-sweatshirt-yellow/-/A-93717604",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/gildan-kids-classic-hooded-sweatshirt/-/A-1002295847",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/nickelodeon-teenage-mutant-ninja-turtles-michelangelo-boys-zip-up-hooded-sweatshirt-for-big-kids-size-10/-/A-1005039464",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-bluey-zip-up-sweatshirt-light-blue/-/A-91700847",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-marvel-spider-man-ghost-spider-zip-up-sweatshirt-white-black-purple-disney-store/-/A-88541501",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-spider-man-character-hooded-sweatshirt-black-red/-/A-93623624",
      "tags": "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Marvel, Tops, Zip-Up Sweatshirts",
      "filters": {
        "type": "Zip-Up Sweatshirts",
        "brand": "Marvel"
      }
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-short-sleeve-upf-50-sun-protection-rash-guard/-/A-86529642",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/rufflebutts-gender-inclusive-long-sleeve-full-zip-rash-guard/-/A-1003432669",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-long-sleeve-rashguard-navy-blue-and-turquoise/-/A-1004085352",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-long-sleeve-solid-rashguard-top-cat-38-jack-8482-blue/-/A-94414549",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-maui-38-sons-shark-graphic-swim-rashguard-blue/-/A-94653585",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-maui-38-sons-sun-graphic-swim-rashguard-tan/-/A-94653587",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-baby-boys-long-sleeve-one-piece-rash-guard/-/A-91269910",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-boys-long-sleeve-rash-guard/-/A-88348942",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-boys-upf50-sun-protected-zipper-long-sleeve-rash-guard/-/A-1001533343",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-printed-long-sleeve-rashguard-light-blue-beach-on-black/-/A-1004084282",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/power-rangers-boys-upf-50-rash-guard-and-swim-trunks-swimsuit-set-for-big-kids-4/-/A-1003763966",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ms-rachel-dinosaur-upf-50-rash-guard-and-swim-trunks-outfit-set/-/A-1003546590",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-solid-raglan-long-sleeve-rash-guard-top-art-class-8482-navy-blue/-/A-94567284",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-short-sleeve-rash-guard-top-cat-jack/-/A-94208344",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-boys-upf50-long-sleeve-rash-guard-blue-star-6/-/A-1003388088",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/primary-kids-long-sleeve-one-piece-baseball-rash-guard/-/A-1003010979",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boy-s-kayak-short-raglan-sleeve-rashguard-tee-noruk-collection/-/A-1002771308",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/spongebob-squarepants-surfboard-upf-50-rash-guard-and-swim-trunks-outfit-set/-/A-1002839811",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/jurassic-world-dinosaur-upf-50-rash-guard-and-swim-trunks-outfit-set-little-kid-to-big-kid/-/A-86921195",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-short-sleeve-upf-50-sun-protection-rash-guard/-/A-1003419768",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/primary-kids-long-sleeve-baseball-rash-guard/-/A-1002778301",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/marvel-spider-man-little-boys-upf-50-rash-guard-and-swim-trunks-outfit-set-logo-spider-man-navy-white-red-5-6/-/A-1002770451",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-youth-unisex-s-s-upf-50-sport-fit-rash-guard/-/A-1002306993",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-youth-unisex-ls-hybrid-hooded-upf-50-sun-shirt/-/A-1002287944",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-miles-morales-hooded-rash-guard-black/-/A-93623736",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-avengers-assemble-rash-guard-blue-white/-/A-93623523",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-lightning-mcqueen-rash-guard-red/-/A-93623499",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/primary-kids-long-sleeve-rash-guard/-/A-1002590175",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-minecraft-movie-art-rash-guard-top-green-black/-/A-93441060",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-long-sleeve-upf-50-sun-protection-rash-guard/-/A-86529063",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-long-sleeve-upf-50-sun-protection-rash-guard/-/A-1003619939",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-waves-printed-and-striped-rash-guard-set-cat-jack-green/-/A-94159374",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-long-sleeve-solid-rash-guard-top-art-class-8482-mint-green/-/A-92227284",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-crab-printed-rash-guard-set-cat-jack-red/-/A-94159472",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-short-sleeve-solid-ocean-spray-rash-guard-top-art-class-8482-green/-/A-93598231",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-marvel-captain-america-shield-rash-guard-top-white-blue/-/A-93441048",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-solid-rash-guard-top-cat-jack-yellow/-/A-87907395",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/adaptive-short-sleeve-reversible-one-piece-rashguard-cat-38-jack-8482-blue-yellow/-/A-93575146",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/andy-evan-toddler-shark-graphic-rashguard-set/-/A-1001718559",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/andy-evan-toddler-sunglasses-graphic-rashguard-set/-/A-1001718554",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-grave-digger-little-boys-upf-50-rash-guard-and-swim-trunks-outfit-set-green-black/-/A-1001646442",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/teenage-mutant-ninja-turtles-upf-50-pullover-rash-guard-and-swim-trunks-outfit-set/-/A-1001808888",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/thomas-friends-upf-50-rash-guard-and-swim-trunks-outfit-set-little-kid/-/A-1001646447",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/bluey-bingo-dad-mom-pullover-rash-guard-and-swim-trunks-outfit-set-little-kid/-/A-88164967",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-baby-long-sleeve-rash-guard/-/A-89242053",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-grave-digger-boys-short-sleeve-swimsuit-rashguard-shirt-top-black/-/A-1000863555",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-lake-life-short-sleeve-swimsuit-rashguard-top-swim-shirt-black/-/A-1000863548",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-solid-rash-guard-top-cat-38-jack-8482-lime-green/-/A-88923678",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-jaws-solid-rash-guard-top-black-turquoise-blue/-/A-92366932",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-sonic-the-hedgehog-rash-guard-swimsuit-top-blue/-/A-92304664",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-spider-man-rash-guard-top-black/-/A-92304665",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-minecraft-fictitious-character-rash-guard-top-black/-/A-89210431",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-pokemon-rash-guard-top-yellow/-/A-92304661",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-short-sleeve-solid-rash-guard-top-art-class-8482-light-blue/-/A-92227288",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-short-sleeve-tree-printed-rash-guard-top-art-class-8482-charcoal-gray/-/A-92227282",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-long-sleeve-solid-rash-guard-top-art-class-8482-black/-/A-92227275",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/quicksand-infant-toddler-and-little-boy-s-rash-guard-and-trunks-swimsuit-sets/-/A-92447312",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-usa-made-recycled-nylon-boys-upf-50-long-sleeve-rashguard/-/A-92488263",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-usa-made-boys-upf-50-short-sleeve-rashguard/-/A-92082592",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-chlorine-resistant-short-sleeve-upf-50-rash-guard-swim-trunk-set/-/A-91687429",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-usa-made-swim-upf-50-hooded-long-sleeve-rashguard-tee-for-boys-and-girls/-/A-91533747",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-usa-made-boys-upf-50-long-sleeve-rashguard/-/A-91332879",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-boys-long-sleeve-rash-guard-banana-size-10/-/A-91255195",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-star-wars-rash-guard-top-disney-store/-/A-89789845",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-marvel-fictitious-character-rash-guard-top-black/-/A-89210429",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-spider-man-fictitious-character-rash-guard-top-gray/-/A-89210436",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/girls-swim-set-with-long-sleeve-rash-guard-swim-shorts-and-sunglasses-kids-ages-3t-8-years-pink-beach-life/-/A-90442729",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-toddler-long-sleeve-rash-guard/-/A-89242052",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-navy-short-sleeve-rashguard-and-mint-colorblock-swim-trunk/-/A-88271242",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/marvel-spider-man-pullover-rash-guard-and-swim-trunks-toddler-to-big-kid/-/A-1000975522",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pokemon-pikachu-upf-50-rash-guard-swim-shirt-little-kid-to-big-kid/-/A-88668829",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/disney-mickey-mouse-surfboard-upf-50-rash-guard-shirt-swim-trunks-outfit-set-little-kid-to-big-kid/-/A-86953395",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/hot-wheels-upf-50-pullover-rash-guard-and-swim-trunks-outfit-set-toddler-to-big-kid/-/A-86943010",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sega-sonic-the-hedgehog-pullover-rash-guard-and-swim-trunks-outfit-set-little-kid-to-big-kid/-/A-86921203",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minecraft-zombie-creeper-alex-steve-rash-guard-and-swim-trunks-outfit-set-little-kid-to-big-kid/-/A-87035482",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pokemon-bulbasaur-charmander-squirtle-pikachu-pullover-rash-guard-and-swim-trunks-outfit-set-toddler-to-big-kid/-/A-86913342",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-rash-guard-and-swim-trunks-outfit-set-little-kid/-/A-86918116",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/paw-patrol-rubble-marshall-chase-pullover-rash-guard-and-swim-trunks-outfit-set-little-kid/-/A-86918009",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/marvel-avengers-spider-man-captain-america-hulk-iron-man-pullover-rash-guard-swim-trunks-outfit-set-toddler-to-big-kid/-/A-86918015",
      "tags": "Boys’ Clothing, Kids’ Clothing, Rashguards, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-boys-swim-trunks/-/A-88678445",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/rokka-rolla-boys-swim-shorts-with-compression-liner/-/A-92168331",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/rokka-rolla-boys-4-way-stretch-board-swim-trunks/-/A-90847810",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-hybrid-tie-dye-swim-shorts-art-class-8482/-/A-89084583",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-lands-end-kids-print-swim-trunks/-/A-86529288",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-boys-upf50-gingham-swim-trunks/-/A-1002892985",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/rokka-rolla-boys-swim-trunks/-/A-90847947",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minecraft-steve-creeper-alex-skeleton-swim-trunks-bathing-suit-toddler-to-big-kid/-/A-86951907",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pokemon-pikachu-swim-trunks-bathing-suit-little-kid-to-big-kid/-/A-86931492",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sega-sonic-the-hedgehog-knuckles-tails-swim-trunks-bathing-suit-little-kid-to-big-kid/-/A-87279230",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-hybrid-striped-swim-shorts-art-class-8482-gray/-/A-89084585",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/bluey-bingo-bluey-swim-trunks-bathing-suit-little-kid/-/A-87872701",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-maximum-destruction-megalodon-grave-digger-el-toro-loco-swim-trunks-bathing-suit-little-kid/-/A-87872319",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minecraft-creeper-compression-swim-trunks-bathing-suit-upf-50-quick-dry-little-kid-to-big-kid/-/A-91126887",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-boys-upf50-swim-trunks/-/A-91269923",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-jurassic-park-snakeskin-printed-swim-shorts-teal-green-black/-/A-89210428",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/teenage-mutant-ninja-turtles-michelangelo-donatello-raphael-leonardo-upf-50-swim-trunks-toddler-to-little-kid/-/A-91525270",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-usa-made-swim-jammer-for-boys-and-girls-upf-50/-/A-91380182",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/marvel-spider-man-avengers-spidey-and-his-amazing-friends-upf-50-swim-trunks-toddler-to-big-kid/-/A-87483793",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-boys-seersucker-swim-trunks/-/A-89096140",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/naruto-character-in-waves-boy-s-blue-swim-trunks-shorts/-/A-89369969",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-tie-dye-swim-trunks-art-class/-/A-87389724",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-swim-trunks-bathing-suit-little-kid/-/A-86953417",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-palm-printed-swim-trunks-art-class-green/-/A-87389729",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-solid-swim-shorts-art-class-8482-tan/-/A-89513503",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-avengers-assemble-swim-trunks-blue/-/A-93623524",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-piped-splice-swim-jammer-swimsuit-22-40/-/A-1002285790",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-boys-upf50-sun-protected-dolphin-hem-swim-trunks/-/A-1001544579",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-miles-morales-swim-trunks-black/-/A-93623737",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-crocodile-printed-swim-shorts-cat-38-jack-8482-green/-/A-93598227",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-dinosaur-and-palm-tree-printed-swim-shorts-cat-38-jack-8482-black/-/A-92227349",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-sunset-swimming-trunks-pool-board-shorts-elastic-waistband/-/A-1000875693",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-solid-compression-jammer-swimsuit-22-44/-/A-1002309029",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-molecule-splice-jammer-swimsuit-22-44/-/A-1001332380",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-dinosaur-printed-swim-shorts-cat-38-jack-8482/-/A-93598228",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-striped-swim-shorts-cat-38-jack-8482/-/A-93598241",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-tie-dye-swim-trunks-cat-38-jack-8482-blue/-/A-94372705",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-geo-swim-trunks-art-class-8482-blue/-/A-94372710",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-palm-tree-geo-printed-swim-trunks-cat-38-jack-8482/-/A-94372707",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-tie-dye-printed-swim-trunks-art-class-8482/-/A-94372714",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-celebration-shark-swim-trunks-cat-38-jack-8482-blue/-/A-94372703",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-wavey-dino-palm-printed-swim-trunks-cat-38-jack-8482-green/-/A-94372708",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-shark-fin-swim-trunks-art-class-8482-blue/-/A-94229759",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-swim-trunks-art-class-8482-orange/-/A-94372713",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-quarter-striped-swim-trunks-art-class-8482-blue/-/A-94188357",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-mojave-swim-trunks-art-class-8482-aqua-green/-/A-94188356",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-humor-food-printed-swim-trunks-cat-38-jack-8482-blue/-/A-94372711",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-striped-swim-trunks-cat-jack/-/A-94208213",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-may-lilies-swim-trunks-art-class-8482-black-and-purple/-/A-94188947",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-hibiscus-printed-swim-trunks-art-class-8482-blue/-/A-94372712",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-animal-in-jungle-swim-trunks-cat-38-jack-8482-teal/-/A-94372706",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-summer-icons-printed-swim-trunks-art-class-8482-black/-/A-94372715",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-tropical-hibiscus-printed-swim-trunks-cat-38-jack-8482/-/A-94372735",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/toddler-boys-39-adaptive-39-tropical-floral-39-swim-trunk-cat-38-jack-8482-orange/-/A-93575165",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-lands-end-kids-husky-print-swim-trunks/-/A-1003210152",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-minecraft-swim-shorts-green/-/A-92304660",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-pokemon-swim-shorts-yellow-black/-/A-92304663",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-maui-38-sons-geo-printed-swim-trunks-black/-/A-94653582",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-maui-38-sons-geo-shark-printed-swim-trunks-blue/-/A-94653583",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/jurassic-world-park-dinosaur-upf-50-swim-trunks-bathing-suit/-/A-1002726006",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-lightning-mcqueen-swim-trunks-red-black/-/A-93623525",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/hot-wheels-upf-50-swim-trunks-bathing-suit/-/A-1002989768",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pokemon-pikachu-compression-upf-50-swim-trunks-bathing-suit-little-kid-to-big/-/A-91126790",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minecraft-upf-50-swim-trunks-bathing-suit/-/A-1002719154",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pokemon-upf-50-swim-trunks-bathing-suit/-/A-1002719148",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/disney-lilo-stitch-upf-50-swim-trunks-bathing-suit-sizes-6-14-16/-/A-1002725927",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minions-upf-50-swim-trunks-bathing-suit/-/A-1002768988",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/disney-mickey-mouse-baby-swim-trunks-bathing-suit-little-kid-to-big-kid/-/A-87991649",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/blippi-boys-upf-50-swim-trunks-bathing-suit-for-toddler-and-big-kids-3t/-/A-1003763967",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/bluey-bingo-bluey-swim-trunks-bathing-suit-toddler/-/A-87872699",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-boys-upf-50-swim-trunks-bathing-suit-for-toddler-and-big-kids-2t/-/A-1003763974",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/disney-cars-lightning-mcqueen-boys-upf-50-swim-trunks-bathing-suit-for-toddler-and-big-kids-size-2t/-/A-1003763991",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/disney-mickey-mouse-boys-upf-50-swim-trunks-bathing-suit-for-toddler-and-big-kids-size-6/-/A-1003763981",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/john-deere-upf-50-swim-trunks-bathing-suit/-/A-1002769034",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/upf-50-swim-trunks-bathing-suit-little-kid-to-big/-/A-91112012",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-toddler-upf50-seersucker-swim-trunks/-/A-1003418263",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/andy-evan-kids-green-geo-print-swim-trunk/-/A-1001718283",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/nickelodeon-teenage-mutant-ninja-turtles-boys-upf-50-swim-trunks-bathing-suit-for-big-kids-4/-/A-1003763959",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-toddler-boys-upf50-swim-trunks/-/A-91269906",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/primary-kids-swim-trunk-in-rainbow-stripe/-/A-1002991049",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-kids-gingham-swim-trunks-7/-/A-91269888",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-baby-boys-upf50-swim-trunks/-/A-91267489",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/star-wars-yoda-3-pack-swim-trunks-bathing-suits-little-kid-to-big-kid/-/A-86963491",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-boys-dragon-zombie-grave-digger-megalodon-allover-swim-trunks-black/-/A-86501003",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-boys-upf50-seersucker-swim-trunks/-/A-1003418230",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-boys-upf-50-soft-stretch-club-above-the-knee-swim-trunks-usa-made/-/A-1003611294",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/blue-horizon-swimwear-boys-swim-trunks-fun-printed-youth-quick-dry-kids-bathing-suit-shorts-for-boys/-/A-1005080431",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-grave-digger-boys-swimming-trunks-shorts-elastic-waistband-grey/-/A-1000875686",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-swim-trunk/-/A-1002590318",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-floral-printed-swim-shorts-cat-38-jack-8482/-/A-92227314",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-food-printed-swim-shorts-cat-38-jack-8482-teal-blue/-/A-93598232",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-colorblock-swim-shorts-cat-jack/-/A-91947397",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-submarine-printed-swim-shorts-cat-38-jack-8482-green/-/A-92227362",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-striped-swim-shorts-art-class-8482-black/-/A-92227276",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-solid-swim-shorts-art-class/-/A-91947373",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-striped-swim-shorts-cat-38-jack-8482-blue/-/A-92227347",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-ombre-design-swim-shorts-cat-38-jack-8482-blue/-/A-92228042",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-tiles-printed-swim-shorts-art-class-blue-pink/-/A-94628719",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-checkered-swim-shorts-cat-38-jack-8482-green/-/A-92228041",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-tree-printed-swim-shorts-cat-38-jack-8482-pink/-/A-93598249",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-waves-printed-swim-shorts-cat-38-jack-8482-blue/-/A-92227363",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-desert-tiles-printed-swim-shorts-art-class-8482/-/A-93598248",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-striped-seersucker-swim-shorts-cat-jack-blue/-/A-92227361",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-shark-printed-swim-shorts-cat-38-jack-8482-blue/-/A-93598225",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-dinosaur-printed-swim-shorts-cat-38-jack-8482-pink/-/A-92227313",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-bird-printed-swim-shorts-cat-jack-aqua-green/-/A-94589594",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-pizza-printed-swim-shorts-cat-38-jack-8482-blue/-/A-93598236",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-dinosaur-printed-swim-shorts-cat-38-jack-8482-orange/-/A-92227350",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-pineapple-printed-trunks-cat-38-jack-8482-purple/-/A-94414542",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-solid-trunks-art-class-8482-blue/-/A-94414547",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-solid-seersucker-trunks-cat-38-jack-8482-green/-/A-94414543",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-tropical-leaf-trunks-cat-38-jack-8482-aqua-green/-/A-94414540",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-rainbow-beach-chamelon-trunks-cat-38-jack-8482-black/-/A-94414539",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-spider-man-swim-shorts-red/-/A-92304667",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-sonic-the-hedgehog-swim-shorts-blue/-/A-92304666",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-jaws-printed-swim-shorts-black-turquoise-blue/-/A-92366931",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-pokemon-swim-shorts/-/A-92304662",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-jurassic-world-shapes-printed-swim-shorts-black/-/A-92366933",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-marvel-black-panther-swim-shorts-black/-/A-89732618",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/heat-swimwear-boys-printed-tie-front-swim-trunk-shorts/-/A-1004187239",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/heat-swimwear-boys-printed-tie-front-swim-trunk-shorts/-/A-1004246287",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/banana-boat-upf50-boy-s-whale-print-bathing-suit-4-way-stretch-royal-or-aqua/-/A-1003061968",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/banana-boat-upf50-boy-s-turtle-print-bathing-suit-4-way-stretch-teal-or-turquoise/-/A-1003061977",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-marvel-captain-america-shield-swim-shorts-blue-red/-/A-93441051",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-minecraft-movie-art-swim-shorts-white-green/-/A-93441695",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-usa-made-boys-upf-50-recycled-polyester-soft-stretch-below-the-knee-printed-swim-board-shorts/-/A-92487833",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-usa-made-boys-upf-50-soft-stretch-below-the-knee-swim-board-shorts/-/A-92487962",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-striped-swim-shorts-art-class-8482-blue/-/A-93598247",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-plaid-swim-shorts-art-class-8482-green/-/A-92227274",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-palm-tree-printed-swim-shorts-art-class-8482-black/-/A-92227286",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-striped-swim-shorts-art-class-8482/-/A-93598242",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-ombre-striped-swim-shorts-art-class-8482-aqua-blue/-/A-92227219",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-palm-leaf-printed-swim-shorts-art-class-8482/-/A-93598235",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-ombre-design-striped-swim-shorts-art-class-8482/-/A-92227364",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-palm-tree-printed-swim-shorts-art-class-8482-blue/-/A-92227283",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-solid-swim-shorts-art-class-8482-blue/-/A-93598240",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-solid-hybrid-swim-shorts-art-class-8482/-/A-93598238",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-smiley-face-swim-shorts-art-class-8482-blue/-/A-92227287",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-floral-swim-shorts-art-class-green/-/A-90265701",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-striped-swim-shorts-art-class-8482-black/-/A-92227291",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-striped-swim-shorts-art-class/-/A-90265699",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-striped-trunks-cat-38-jack-8482-blue/-/A-94414550",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-two-toned-checkered-trunks-art-class-8482-blue/-/A-94414546",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-gingham-printed-trunks-cat-38-jack-8482/-/A-94467779",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-tonal-colorblock-trunks-art-class-8482/-/A-94414548",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-flamingo-skateboarding-trunks-cat-38-jack-8482-blue/-/A-94414541",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-cheetah-printed-trunks-art-class-8482-navy-blue/-/A-94414544",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-usa-made-boys-swim-liner-for-under-boys-trunks/-/A-92090523",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boy-s-kids-shirt-with-matching-swim-short-gottex-4t/-/A-1001400418",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/twilight-blossoms-swim-shorts-charlie-lou-baby/-/A-1002579202",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/gender-neutral-kids-surf-swim-shorts-me-henry/-/A-1001177414",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/gender-neutral-kids-surf-swim-shorts-me-henry/-/A-1001177359",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-usa-made-swim-jammer-color-block-for-boys-and-girls-upf-50/-/A-92349178",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-smile-graphic-print-boardshorts-olive-scout/-/A-1003241516",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/naruto-color-changing-line-art-boy-s-navy-boardshorts/-/A-94140508",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/andy-evan-kids-tropical-print-boardshort-w-built-in-comfort-stretch-short-liner/-/A-90715526",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-sharkies-jammer-swimsuit-22-40/-/A-1001528662",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/andy-evan-toddler-geometric-print-boardshort-w-built-in-comfort-stretch-short-liner/-/A-90715504",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-sea-jellies-jammer-swimsuit-22-40/-/A-1001528771",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-sharkies-brief-swimsuit-22-40/-/A-1001333169",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-leo-brief-swimsuit-26-40/-/A-1001529396",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-sagittarius-brief-swimsuit-26-40/-/A-1001529212",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-aries-brief-swimsuit-26-40/-/A-1001529444",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-camouflage-jammer-swimsuit-22-40/-/A-1001530317",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-fractalicious-brief-swimsuit-22-40/-/A-1002288080",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/iswim-swirl-jammer-swimsuit-22-40/-/A-1001333062",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-hydrolast-sonar-waves-jammer-swimsuit-22-40/-/A-1001333348",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-virgo-brief-swimsuit-26-40/-/A-1001529426",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-pisces-brief-swimsuit-26-40/-/A-1001529568",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-sagittarius-jammer-swimsuit-24-40/-/A-1001529632",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-capricorn-jammer-swimsuit-24-40/-/A-1001371623",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-x-alex-gretchen-walsh-tidal-taffy-brief-swimsuit-26-40/-/A-1001529901",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-hydrolast-men-s-camo-water-polo-brief/-/A-1002304081",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-fractalicious-jammer-swimsuit/-/A-1002287992",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-capricorn-brief-swimsuit-26-40/-/A-1001371599",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-light-wave-splice-jammer-swimsuit/-/A-1002306289",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-gemini-brief-swimsuit-26-40/-/A-1001529350",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-x-alex-gretchen-walsh-boardwalk-breeze-brief-swimsuit-26-40/-/A-1001529799",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-aquarius-brief-swimsuit-26-40/-/A-1001529505",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-sea-jellies-brief-swimsuit-22-40/-/A-1001529136",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-libra-brief-swimsuit-26-40/-/A-1001529576",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-x-alex-gretchen-walsh-pool-star-brief-swimsuit-26-40/-/A-1001529520",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-hydrolast-solid-brief-swimsuit-22-44/-/A-1002306733",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-hydrolast-solid-jammer-swimsuit-22-44/-/A-1002306514",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-gemini-jammer-swimsuit-24-40/-/A-1001529524",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-taurus-brief-swimsuit-26-40/-/A-1001529364",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-catalyst-brief-swimsuit/-/A-1002288360",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-new-waves-brief-swimsuit-22-40/-/A-1001333740",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-sonic-bloom-brief-swimsuit-22-40/-/A-1001529554",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-molecule-usa-jammer-swimsuit-22-44/-/A-1001334337",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-i-scream-brief-swimsuit-22-40/-/A-1001528572",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-fenced-in-jammer-swimsuit-22-40/-/A-1001528800",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-molecule-brief-swimsuit-22-44/-/A-1001333254",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-groovy-zodiac-scorpio-brief-swimsuit-26-40/-/A-1001333428",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-hydrolast-men-s-water-polo-brief/-/A-1002308746",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-wild-thing-jammer-swimsuit-22-40/-/A-1001529734",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-solid-brief-swimsuit-22-44/-/A-1002308362",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-hydrolast-sonar-waves-brief-swimsuit-22-40/-/A-1001334348",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sporti-i-scream-jammer-swimsuit-22-40/-/A-1001528585",
      "tags": "Boys’ Clothing, Kids’ Clothing, Swim Trunks, Swimsuits",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-emerald-green-kids-hoodie-fleece-onesie-kids-medium-fits-4-6-4-8/-/A-90175818",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-halloween-skeleton-union-suit-cat-jack-black/-/A-94445408",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-food-fight-union-suit-cat-jack-black/-/A-94445411",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/nasa-boys-meatball-one-piece-astronaut-space-suit-pajama-costume-union-suit-blue/-/A-85071648",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/harry-potter-unisex-kids-hooded-pajama-union-suit/-/A-86050405",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pok-mon-little-big-boys-one-piece-hooded-blanket-sleeper-pajama/-/A-93656676",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minecraft-little-big-boys-one-piece-hooded-blanket-sleeper-pajama/-/A-93656680",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-39-2pk-adaptive-reversible-pajamas-cat-38-jack-8482-coral-red-lavender/-/A-94486499",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sonic-the-hedgehog-little-big-boys-one-piece-hooded-union-suit-pajamas/-/A-1000935349",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/transformers-boys-retro-union-suit-one-piece-pajama/-/A-93285845",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-boys-classic-the-flash-union-suit-footless-sleep-pajama-costume-red/-/A-86136841",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-big-boys-superhero-character-hooded-union-suit-footless-pajamas-costume/-/A-85922160",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minecraft-kids-fleece-creeper-hooded-union-suit-zip-front-footless-sleep-pajama/-/A-1001854156",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minions-boys-kigurumi-union-suit-fleece-pajamas-stuart-kevin-designs/-/A-1004941959",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/despicable-me-boys-bob-the-minion-union-suit-costume-sleep-pajama-for-kids-yellow/-/A-93285850",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/power-rangers-boy-s-all-character-union-suit-costume-sleep-pajama-multicolored/-/A-90060021",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dreamworks-shrek-boys-character-union-suit-sleep-pajama-for-kids-beige/-/A-93285840",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-pikachu-union-suit-navy-blue/-/A-94330056",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ben-10-boys-cartoon-omnitrix-character-union-suit-footless-sleep-pajama-multicolored/-/A-87801313",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/hot-wheels-cars-boys-tossed-print-race-long-sleeve-union-suit-sleep-pajama-blue/-/A-87801306",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/nasa-boys-space-shuttle-astronaut-meatball-patch-one-piece-union-suit/-/A-1001223585",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-cheetah-spots-kids-hoodie-chenille-onesie-kids-large-fits-4-9-4-11/-/A-90100710",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-bright-red-kids-hoodie-fleece-onesie/-/A-90175812",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-tis-the-season-kids-hoodie-fleece-onesie/-/A-90549129",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-winter-wonderland-kids-fleece-onesie-kids-large-fits-4-9-4-11/-/A-90530827",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-grave-digger-boys-union-suit-kids-fleece-one-piece-pajamas/-/A-1005180169",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/jurassic-world-little-big-boy-s-hooded-onesie-blanket-sleeper-pajama/-/A-92265388",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-max-d-boys-union-suit-kids-monster-truck-fleece-pajamas/-/A-1005105111",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-its-a-snow-day-kids-fleece-onesie/-/A-90177338",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-navy-pink-polka-kids-hoodie-chenille-onesie/-/A-90100719",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-winter-wonderland-kids-hoodie-fleece-onesie/-/A-89963806",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-lemon-yellow-kids-hoodie-fleece-onesie-kids-small-fits-4-2-4-5/-/A-90175850",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-emerald-green-kids-fleece-onesie-kids-xsmall-fits-3-10-4-1/-/A-90177309",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-bright-red-kids-fleece-onesie/-/A-90177313",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-batman-little-big-boys-hooded-onesie-blanket-sleeper-pajama/-/A-92265385",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-howling-moon-kids-hoodie-chenille-onesie/-/A-90099962",
      "tags": "Boys’ Clothing, Footie Pajamas & Union Suits, Kids’ Clothing, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-2pc-short-sleeve-graphic-t-shirt-and-pants-pajama-set-cat-jack/-/A-94445410",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-2pc-short-sleeve-halloween-pajama-set-cat-jack-black/-/A-94445406",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-long-sleeve-halloween-witch-cats-snuggly-soft-pajama-set-cat-jack-pink/-/A-94445412",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-2pc-tight-fit-knit-sweater-pajama-set-cat-jack/-/A-94035013",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-long-sleeve-snuggly-soft-pajama-set-cat-jack/-/A-94445403",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-3pc-printed-short-sleeve-pajama-set-cat-jack/-/A-92764746",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-halloween-bats-long-sleeve-snuggly-soft-pajama-set-cat-jack-gray/-/A-94445404",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-short-sleeve-t-shirt-and-plaid-fleece-pants-pajama-set-cat-jack/-/A-94445407",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-2pc-tank-top-and-pajama-set-cat-jack/-/A-94035296",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-2pc-short-sleeve-pajama-set-cat-jack/-/A-94445405",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-adaptive-2pc-port-access-pajama-set-cat-jack-green/-/A-92199298",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-2-piece-short-sleeve-textured-knit-pajama-shorts-sleep-set/-/A-91198067",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-justice-league-4pc-pajama-set-black-red-blue/-/A-81169209",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-2-piece-short-sleeve-jersey-pajama-shorts-set/-/A-85960338",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-bluey-3pc-snug-fit-pajama-set-blue/-/A-89374053",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-2-piece-super-soft-jersey-snug-fit-pajama-set/-/A-84686882",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/harry-potter-boys-hogwarts-all-houses-sleep-pajama-set-shorts-multicolored/-/A-91158432",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dinosaur-character-blue-and-black-stripe-youth-long-sleeve-pajama-set/-/A-89007846",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-short-sleeve-tee-and-shorts-pajama-set/-/A-87290346",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-2-piece-short-sleeve-jersey-pajama-pants-set/-/A-85960288",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/harry-potter-boys-little-hogwarts-wizard-crest-pajama-short-set/-/A-85922029",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/captain-underpants-superhero-pose-short-sleeve-shirt-red-white-striped-sleep-pajama-pants-set/-/A-91524418",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dinosaur-character-with-camo-pattern-youth-short-sleeve-pajama-set/-/A-89007764",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/harry-potter-gryffindor-hufflepuff-ravenclaw-slytherin-pajama-shirt-and-shorts-sleep-set-little-kid-to-big-kid/-/A-87575247",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/five-nights-at-freddy-s-youth-2-piece-short-sleeve-pajama-set/-/A-90994444",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/scooby-doo-scooby-dooby-doo-cotton-pajama-short-set/-/A-87330326",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-megalodon-el-toro-loco-grave-digger-pullover-pajama-shirt-and-shorts-sleep-set-little-kid/-/A-87580776",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/peanuts-boys-joe-cool-snoopy-pajamas-raglan-shirt-and-pant-sleepwear-set/-/A-84228194",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/peanuts-boys-joe-cool-snoopy-pajamas-shirt-and-shorts-sleepwear-set/-/A-84228203",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/hot-wheels-boys-monster-trucks-toys-tossed-print-sleep-pajama-set-shorts-multicolored/-/A-88871501",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/despicable-me-boys-minions-bello-raglan-sleep-pajama-set-shorts-shirt-multicolored/-/A-86058204",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-boys-grave-digger-truck-sleep-pajama-set-shorts-crewneck-multicolored/-/A-86058227",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-2-piece-hacci-pajama-sets/-/A-89914575",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/scooby-doo-boy-s-pajamas-mystery-machine-shirt-and-shorts-2-pc-pajama-set/-/A-84228237",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/peanuts-boy-s-snoopy-nope-not-today-sleep-pajama-set-short-crewneck-multicolored/-/A-86058145",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/miraculous-tales-of-ladybug-cat-noir-boys-character-pajama-set-shorts-multicolored/-/A-88752790",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/intimo-harry-potter-kids-all-houses-crest-pajamas/-/A-88116542",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/scooby-doo-boys-snack-sleep-repeat-scooby-sleep-pajama-set-short-multicolored/-/A-86057998",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/beyblade-burst-surge-boys-hikaru-and-hyuga-shirt-and-shorts-pajama-set-hyuga-and-hikaru/-/A-84228435",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/harry-potter-boys-gryffindor-house-athletic-varsity-jogger-pajama-set/-/A-85922032",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-2-piece-super-soft-jersey-long-sleeve-snug-fit-pajama-set/-/A-91944266",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-2-piece-muscle-tank-jersey-pajama-shorts-set/-/A-91522907",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-face-youth-boy-s-black-white-checkered-long-sleeve-shirt-sleep-pants-set/-/A-88947086",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/jurassic-world-mosasaurus-short-sleeve-shirt-gray-camo-sleep-pajama-pants-set/-/A-91523628",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-boys-justice-league-digital-camo-the-flash-2-pc-pajama-set-red/-/A-84702030",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ryan-s-world-pajamas-boys-super-hero-shirt-and-plush-pants-pajama-set/-/A-88029359",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-boys-justice-league-digital-camo-superman-2-pc-pajama-set-blue/-/A-84701939",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/jurassic-world-boys-blue-t-rex-park-logo-sleep-pajama-set-shorts-black/-/A-86058017",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-megalodon-el-toro-loco-grave-digger-pullover-pajama-shirt-and-pants-sleep-set-little-kid/-/A-87565230",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-viscose-from-bamboo-2-piece-snug-fit-pajama-set-2-pack/-/A-1002198100",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-2-piece-long-sleeve-soft-textured-knit-pajama-shorts-set/-/A-91522908",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-2-piece-milky-jersey-short-sleeve-button-down-coat-pajama-set/-/A-1001648936",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-39-stitch-halloween-2pc-sleep-pajama-set-white/-/A-94492356",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/john-deere-tractor-pajama-shirt-and-pajama-pants-sleep-set/-/A-1003394817",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-justice-league-cosplay-pajama-shirt-pajama-shorts-and-detachable-cape-3-piece-sleep-set-little-kid-to-big-kid/-/A-1002841579",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-39-mickey-halloween-2pc-sleep-pajama-set-black/-/A-94492354",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minions-boys-pajamas-one-in-a-minion-sleep-shirt-and-pant-2-piece-sleep-set-multicolored/-/A-1003105440",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-2-piece-pajama-set-short-sleeve-jersey-tee-and-waffle-thermal-shorts/-/A-1002011678",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/despicable-me-boys-movie-minions-1-in-a-minion-sleep-pajama-set-shorts-multicolored/-/A-88871480",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/five-nights-at-freddy-s-horror-video-game-youth-boys-pajama-sleep-wear-set/-/A-85873901",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/transformers-boys-optimus-prime-bumblebee-characters-logo-sleep-pajama-set-multicolored/-/A-89531197",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/peanuts-boys-happy-halloween-snoopy-sleep-pajama-set-for-kids-black/-/A-1000169489",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-2-piece-velour-pajama-set/-/A-89914661",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/jurassic-world-boys-movie-film-park-logo-icon-tight-fit-sleep-pajama-set-multicolored/-/A-88858405",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/prince-of-sleep-boys-solid-pajama-sets-snug-fitting-ribbed-pj-tops-bottoms-for-boys/-/A-92400993",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-2-piece-textured-jersey-short-sleeve-jersey-pajama-pants-set/-/A-1002011670",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-boys-megalodon-predator-truck-sleep-pajama-lounge-set-blue/-/A-1004457744",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/power-rangers-boys-red-ranger-classic-character-costume-sleep-pajama-set-red/-/A-89531228",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ben-10-boys-cartoon-omnitrix-characters-aliens-sleep-pajama-set-shorts-multicolored/-/A-88871473",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/harry-potter-pajama-shirt-and-pajama-pants-sleep-set/-/A-1003546555",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/where-s-waldo-character-pose-boy-s-long-sleeve-shirt-red-white-striped-sleep-pajama-pants-set/-/A-91713390",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/back-to-the-future-delorean-long-sleeve-shirt-checkerboard-sleep-pajama-pants-set/-/A-91524359",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/how-to-train-your-dragon-toothless-short-sleeve-shirt-red-white-striped-sleep-pajama-pants-set/-/A-91524434",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-boys-truck-long-sleeve-grave-digger-tight-fit-sleep-pajama-set-multicolored/-/A-88858283",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/jurassic-world-boys-movie-film-park-logo-blue-tight-fit-sleep-pajama-set-multicolored/-/A-88858344",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-grave-digger-long-sleeve-shirt-and-pants-pajama-set-black/-/A-1000169485",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-justice-league-superman-batman-sweatshirt-and-pants-set-infant-to-toddler/-/A-88853548",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-infant-toddler-boys-2-piece-super-soft-jersey-snug-fit-pajama-set-with-matching-socks/-/A-84235641",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/my-little-pony-retro-shine-bright-youth-long-sleeve-shirt-striped-sleep-pajama-pants-set/-/A-93333236",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/despicable-me-boys-minions-crew-bob-stuart-phil-kevin-sleep-pajama-set-yellow/-/A-88858201",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/where-s-waldo-character-head-boy-s-short-sleeve-shirt-red-white-striped-sleep-pajama-pants-set/-/A-91524437",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-justice-league-batman-christmas-pajama-shirt-and-pants-sleep-set-little-kid-to-big-kid/-/A-87574815",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/hot-wheels-pajama-shirt-and-pants-sleep-set-little-kid-to-big-kid/-/A-88668870",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/where-s-waldo-youth-short-sleeve-shirt-striped-sleep-pajama-pants-set/-/A-93333438",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/universal-trolls-branch-character-pose-boy-s-long-sleeve-shirt-red-white-striped-sleep-pajama-pants-set/-/A-91524349",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-soft-fleece-2-piece-pajama-sleep-set/-/A-87674285",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/how-to-train-your-dragon-toothless-long-sleeve-shirt-red-white-striped-sleep-pajama-pants-set/-/A-89658767",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/fast-furious-race-car-logo-long-sleeve-shirt-checkerboard-sleep-pajama-pants-set/-/A-89658785",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/captain-underpants-superhero-pose-long-sleeve-shirt-red-white-striped-sleep-pajama-pants-set/-/A-91524478",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-pok-233-mon-2pc-short-sleeve-pajama-set-blue/-/A-92903685",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-minecraft-button-up-pajama-set-blue/-/A-94222601",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-spider-man-pajama-set-gray/-/A-93758594",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-spider-man-2pc-short-sleeve-pajama-set-red/-/A-92903714",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-bowser-2pc-pajama-set-yellow/-/A-94222587",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-3pc-jurassic-park-pajama-set-orange/-/A-94416493",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-pok-233-mon-2pc-short-sleeve-baseball-jersey-coat-pajama-set-navy-blue/-/A-92743988",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-spider-man-2pc-tight-fit-pajama-set-blue/-/A-94222606",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-kirby-2pc-pajama-set-blue/-/A-94222590",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-bluey-2pc-tight-fit-pajama-set-blue/-/A-94222586",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-4pc-spider-man-long-sleeve-pajama-set-red/-/A-94416495",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-captain-america-3pc-pajama-set-gray/-/A-92903705",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-4pc-sonic-long-sleeve-pajama-set-black/-/A-94330061",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-squishmallows-3pc-pajama-set-orange/-/A-92744002",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-messi-2pc-pajama-set-black/-/A-94222592",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-tmnt-2pc-tight-fit-pajama-set-gray/-/A-94222608",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-3pc-superman-pajama-set-blue/-/A-94416494",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-usc-football-short-sleeve-t-shirt-and-pants-pajama-set-beige/-/A-94311225",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-lankybox-2pc-pajama-set-blue/-/A-94222591",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-4pc-bluey-long-sleeve-halloween-pajama-set-orange-black/-/A-94416497",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-4pc-nightmare-before-christmas-long-sleeve-pajama-set-white-black/-/A-94416496",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-4pc-pikachu-long-sleeve-pajama-set-navy-blue/-/A-94330062",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-lilo-38-stitch-3pc-pajama-set-blue/-/A-92903731",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-4pc-mario-kart-long-sleeve-pajama-set-gray/-/A-94330059",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-bluey-3pc-pajama-set-blue/-/A-92903517",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-short-sleeve-stranger-things-t-shirt-and-pants-pajama-set-black/-/A-94416498",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-pokemon-2pc-pajama-set-blue/-/A-91700982",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-malibu-racing-short-sleeve-t-shirt-and-pants-pajama-set-white/-/A-94311226",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lego-ninjago-little-big-boy-s-4-piece-costume-cotton-pajama-set/-/A-91994692",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pok-mon-little-big-boys-long-sleeve-4-piece-100-cotton-pajama-sets/-/A-1002446394",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-teenage-mutant-ninja-turtles-leonardo-38-raphael-4pc-tight-fit-short-sleeve-cotton-pajama-set-green/-/A-90630985",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-toy-story-buzz-lightyear-38-woody-4pc-uniform-tight-fit-short-sleeve-cotton-pajama-set-white-blue-green/-/A-90630992",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/harry-potter-boys-little-hogwarts-wizard-crest-pajama-short-set/-/A-1002468294",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-boys-batman-ready-for-action-shirt-and-shorts-2-pc-pajama-set/-/A-84102520",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-bluey-4pc-tight-fit-short-sleeve-pajama-set-blue/-/A-90630991",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-toy-story-2pc-pajama-set-white/-/A-93222140",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kirby-boys-pajama-3-pc-pajama-set/-/A-1001056525",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pok-mon-little-big-boys-short-sleeve-4-piece-100-cotton-pajama-sets/-/A-1003005578",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/blue-dinosaurs-trucks-2-pack-shortsleeve-pajamas/-/A-93147063",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-little-big-boys-4-piece-cotton-pajama-sets/-/A-1000811341",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-mickey-mouse-2pc-pajama-set-white/-/A-93222128",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/nickelodeon-paw-patrol-big-boys-2-piece-sleepwear-slipper-set-blue-gray-8/-/A-1004243846",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sonic-the-hedgehog-little-big-boy-s-4-piece-cotton-pajama-set/-/A-92152186",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-pok-mon-pikachu-4pc-tight-fit-cotton-short-sleeve-pajama-set-yellow/-/A-90630977",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/transformers-little-big-boy-s-costume-4-piece-cotton-pajama-set/-/A-91994680",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/jurassic-world-boys-movie-film-dinosaurs-roaming-park-logo-pajama-set-multicolored/-/A-87804419",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dog-man-boys-pajama-set/-/A-1001298392",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/nickelodeon-paw-patrol-big-boys-4-piece-cotton-sleepwear-sets-white-multi-8/-/A-1004177864",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lego-jurassic-world-little-big-boys-2-piece-cotton-sleepwear-and-slipper-set/-/A-1004243844",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pok-mon-little-big-boys-4-piece-short-sleeve-cotton-pajama-sets/-/A-1003118942",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/scooby-doo-movies-boys-pajamas-2pc-sleep-set/-/A-84602815",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/despicable-me-boys-minions-sorry-i-was-hungry-raglan-sleep-pajama-set-multicolored/-/A-86058213",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dragon-ball-z-goku-boy-s-3-pack-pajama-set/-/A-89413357",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/seven-times-six-minecraft-kid-s-aop-creeper-icons-2-piece-button-down-coat-pajama-pant-set/-/A-1001002015",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pok-mon-little-big-boy-s-pikachu-4-piece-cotton-pajama-set/-/A-92161356",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/five-nights-at-freddy-s-youth-sleepwear-set-tee-shirt-sleep-shorts-sleep-pants/-/A-89997523",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dinosaur-character-with-camo-pattern-youth-long-sleeve-pajama-set/-/A-89007755",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/2-piece-short-sleeve-jammie-set/-/A-1004302264",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/the-land-before-time-littlefoot-youth-short-sleeve-pajama-set-with-camo-design/-/A-89658795",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-dc-comics-batman-pajamas-set-4-piece-short-sleeve-batman-pajamas-short-sleeves-shorts-and-pants-pajamas-set-navy-blue-8/-/A-1004519843",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/naruto-close-up-character-face-boy-s-short-sleeve-t-shirt-lounge-shorts-combo-set/-/A-91367387",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-superman-pajamas-boys-3pc-shirt-pant-set-with-detachable-cape-blue/-/A-1003687870",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pok-mon-little-big-boys-pikachu-4-piece-cotton-pajama-set/-/A-1000031638",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/harry-potter-boys-raglan-shirt-and-plaid-pajama-pants-set/-/A-84982552",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/marvel-little-big-boy-s-4-piece-black-panther-cotton-pajama-sets/-/A-92690560",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/posh-peanut-buddy-classic-pajama-set/-/A-1001535514",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-boys-batman-spec-readout-short-sleeve-shirt-and-shorts-pajama-set-bat-specs/-/A-84295155",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/scooby-doo-boys-mystery-machine-long-sleeve-shirt-and-pants-pajama-set-multicolor/-/A-84603094",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/star-wars-little-big-boys-4-piece-long-sleeve-and-pants-cotton-pajama-set/-/A-94097490",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/naruto-youth-3-piece-sleep-set-with-tee-shirt-shorts-and-sleep-pants/-/A-89997529",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/posh-peanut-miles-classic-pajama-set/-/A-1001576924",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-boys-el-toro-loco-crazy-bull-truck-pajama-shorts-2pc-set-black/-/A-1004457337",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/hot-wheels-pajama-shirt-and-pants-little-kid-to-big-kid/-/A-92251707",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-flash-little-boys-2-piece-shirt-pants-pajama-set-red/-/A-84102526",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/jurassic-park-dinosaur-group-short-2-pack-boy-s-sleep-set/-/A-90470900",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-boy-s-teen-titans-go-chill-2-piece-raglan-and-pants-pajamas-set/-/A-84984839",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/five-nights-at-freddy-s-i-survived-heads-youth-boy-s-red-white-striped-short-sleeve-shirt-sleep-pants-set/-/A-88947140",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dexter-s-laboratory-dexter-text-wall-boy-s-2-pack-pajama-set/-/A-1004784316",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/power-rangers-boy-s-dino-fury-costume-4-piece-cotton-pajama-set/-/A-91994675",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-justice-league-superman-batman-pajama-shirt-and-pants-detachable-cape-sleep-set-little-kid-to-big-kid/-/A-85949314",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pok-mon-little-big-boys-2-piece-polyester-pajama-short-sets/-/A-1003845047",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/little-dreamer-little-big-boys-4-piece-polyester-pajama-sets/-/A-1004524221",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/beyblade-burst-boys-wizard-and-spinner-tops-2-piece-pant-raglan-pajama-set-beyblade-ace-dragon/-/A-84295248",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/gerber-baby-and-toddler-boys-fleece-pajamas-2-piece/-/A-91927692",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-boys-batman-gray-costume-pajama-set/-/A-87330494",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ninja-skills-youth-boy-s-red-white-striped-long-sleeve-shirt-sleep-pants-set/-/A-88947173",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/e-t-checkerboard-youth-boys-long-sleeve-pajama-set/-/A-90598054",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-batman-big-boys-2-piece-cotton-sleepwear-and-slipper-set/-/A-1004243841",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/beyblade-burst-boys-spinner-tops-2-piece-shorts-and-t-shirt-pajama-set-beyblade-ace-dragon/-/A-84295263",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/juniors-slam-dunk-classic-pajama-set-posh-peanut/-/A-1002357944",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/super-mario-little-big-boy-s-4-piece-cotton-pajama-sets/-/A-93003148",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/super-mario-little-boys-short-sleeve-3-piece-level-up-pajama-set-blue-red-multi-4/-/A-1003005587",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/the-smurfs-pajamas-boys-grouchy-smurf-short-sleeves-and-shorts-set/-/A-1003222070",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/super-mario-little-big-boys-short-sleeve-4-piece-100-cotton-pajama-sets/-/A-1003005582",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/hot-wheels-cars-boy-s-pajamas-race-team-shirt-and-shorts-pajama-set/-/A-84228243",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/jurassic-park-boys-pajamas-set-4-piece-long-sleeve-dinosaur-pajamas-tyrannosaurus-velociraptor-pajamas-set-navy-white-orange-6/-/A-1004519853",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-softsnooze-viscose-from-bamboo-big-boys-long-sleeve-pajama-set/-/A-93908244",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/super-mario-little-big-boys-4-piece-short-sleeve-pajama-sets/-/A-1003119005",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/youth-boys-2-piece-naruto-sleepwear-set-with-long-sleeve-shirt-and-sleep-pants/-/A-89997711",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/justice-league-boys-aquaman-cotton-costume-pajama-set/-/A-85922197",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/intimo-big-boys-harry-potter-hogwarts-school-crest-raglan-pajama-set-black/-/A-85922247",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dragon-ball-z-youth-sleepwear-set-tee-shirt-sleep-shorts-and-sleep-pants/-/A-89997520",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/wwe-boys-roman-reigns-icon-wreck-everyone-and-leave-tank-short-pajama-set-black/-/A-85071664",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/wwe-boys-seth-rollins-for-the-greater-good-tank-short-sleep-pajama-set-black/-/A-84593486",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/chick-pea-baby-all-cotton-4pc-pajama-set-for-baby-boy-cute-and-comfy-sleepwear/-/A-1001012004",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/scooby-doo-boys-scooby-shaggy-ruh-roh-raglan-sleep-pajama-set-blue/-/A-84851026",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/textiel-trade-boy-s-space-jam-long-pajama-set/-/A-90216361",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/harry-potter-boys-hogwarts-castle-raglan-shirt-and-shorts-2-pc-pajama-set-black/-/A-84983566",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/naruto-classic-black-and-white-checker-pattern-youth-boy-s-long-sleeve-pajama-set/-/A-88868337",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/naruto-youth-hoodie-and-sweatpant-set/-/A-90273778",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pok-mon-little-big-boy-s-character-print-4-piece-cotton-pajama-set/-/A-92161354",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/seven-times-six-marvel-comics-kid-s-avengers-icons-aop-2-piece-jersey-pajama-pant-set-multicolored/-/A-1001012839",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/textiel-trade-boys-paw-patrol-long-sleeve-fleece-pajama-set/-/A-93525212",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ryan-s-world-boys-super-hero-long-sleeve-shirt-plush-pants-pajama-set/-/A-88020051",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/beyblade-burst-boys-spinner-tops-fafnir-let-it-rip-2-piece-pajama-set-beyblade-let-it-rip/-/A-84295229",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/naruto-classic-characters-youth-blue-striped-long-sleeve-pajama-set/-/A-88947048",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/five-nights-at-freddy-s-youth-boy-s-red-white-striped-long-sleeve-shirt-sleep-pant-set/-/A-88947095",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/juniors-gatsby-classic-pajama-set-posh-peanut/-/A-1003607937",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/super-mario-little-big-boys-2-piece-fleece-sleepwear-pajama-sets/-/A-1000033568",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-big-boys-the-flash-logo-short-sleeve-shirt-pajama-short-set-red/-/A-84701988",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-boys-grave-digger-raglan-sleep-pajama-set-shirt-pants-black/-/A-84851083",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/where-s-waldo-little-big-boys-4pc-cotton-pajama-sets/-/A-1000811292",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/textiel-trade-boy-s-minions-short-sleeve-tee-and-shorts-pajama-set/-/A-1002314508",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/super-mario-kart-little-big-boy-s-4-piece-cotton-pajama-set/-/A-92100350",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/title-attack-mode-youth-boy-s-blue-and-white-wash-long-sleeve-shirt-sleep-pants-set/-/A-88947150",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/textiel-trade-boy-s-avengers-long-sleeve-and-pants-pajama-set/-/A-91946669",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ben-10-boys-cartoon-tv-series-omnitrix-characters-aliens-pajama-set-multicolored/-/A-87804396",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/beyblade-burst-boys-spinner-tops-tossed-print-raglan-sleep-pajama-set-blue/-/A-84851107",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/animal-crossing-little-boys-new-horizons-character-pajamas-2-piece-set/-/A-88165850",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/scooby-doo-boys-pjs-ruh-roh-pajamas-raglan-shirt-and-pants-sleep-set/-/A-84593547",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/jurassic-park-boys-pajamas-set-4-piece-long-sleeve-dinosaur-pajamas-tyrannosaurus-velociraptor-pajamas-set-navy-white-orange-4/-/A-1004519847",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pajama-set-rock-n-skull-charlie-lou-baby/-/A-1002790144",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/justice-league-boys-cyborg-cotton-costume-pajama-set/-/A-85922304",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ninja-skills-youth-boy-s-red-white-striped-short-sleeve-shirt-sleep-pants-set/-/A-88947163",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-dc-comics-batman-pajamas-set-4-piece-short-sleeve-batman-pajamas-short-sleeves-shorts-and-pants-pajamas-set-navy-blue-6/-/A-1004519839",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-boys-superman-superhero-cotton-costume-pajama-set/-/A-87329803",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-boys-classic-the-flash-the-crimson-comet-raglan-sleep-pajama-set-black/-/A-84851139",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-justice-league-robin-cosplay-pajama-shirt-and-pants-sleep-set-little-kid-to-big-kid/-/A-87449389",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/space-jam-looney-tunes-pajama-shirt-and-pants-sleep-set-little-kid-to-big-kid/-/A-85949343",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/seven-times-six-super-mario-kid-s-aop-icons-2-piece-button-down-coat-pajama-pant-set/-/A-1001002021",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/space-cadet-blue-and-black-striped-long-sleeve-pajama-set/-/A-89007830",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/burt-s-bees-baby-kids-2pc-snug-fit-pajama-set/-/A-91600264",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-dc-comics-batman-pajamas-set-4-piece-short-sleeve-batman-pajamas-short-sleeves-shorts-and-pants-pajamas-set-navy-blue-4/-/A-1004519837",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/scooby-doo-boys-pajamas-ruh-roh-snug-fit-cotton-kids-pajama-set-black/-/A-86744410",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/attack-mode-youth-boy-s-blue-and-white-wash-short-sleeve-shirt-sleep-pants-set/-/A-88947110",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/let-s-roll-youth-boy-s-black-white-checkered-long-sleeve-shirt-sleep-pants-set/-/A-88947181",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/chucky-window-2-pack-boy-s-pajama-set/-/A-1005130721",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/the-cat-in-the-hat-thing-1-thing-2-boy-s-2-pack-pajama-set/-/A-1004578898",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/how-to-train-your-dragon-boys-toothless-class-raglan-pajama-pant-set-black/-/A-1003389814",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-lost-kitties-pajama-set/-/A-1005130726",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lego-ninjago-little-boys-4-piece-short-sleeve-cotton-pajama-sets-size-4/-/A-1005162740",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/rene-rofe-boys-buffalo-plaid-3pc-henley-long-sleeve-pajama-set/-/A-1001657860",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/star-wars-little-big-boys-2-piece-polyester-pajama-sets/-/A-1005177418",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/star-wars-little-big-boys-2-piece-or-3-piece-loose-fit-pajama-sets/-/A-1005162799",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/girls-furby-pajama-set/-/A-1005130717",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-five-nights-at-freddy-s-boys-pajama-set/-/A-1005195190",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-modal-blend-big-boys-long-sleeve-pajama-set/-/A-93908168",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/steven-universe-pink-character-bubble-boy-s-2-pack-pajama-set/-/A-1004342464",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/power-rangers-kids-ranger-character-tight-fit-shorts-sleep-pajama-set/-/A-1003105532",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pajama-set-mama-s-boy-charlie-lou-baby/-/A-1003331875",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/star-wars-little-boys-2-piece-grogu-loose-fit-pajama-set/-/A-1005177422",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/the-flash-superhero-youth-long-sleeve-striped-pajama-set/-/A-1004578895",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-dungeons-dragons-pajama-set/-/A-1005130742",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-batman-pajamas-boys-3pc-shirt-pant-set-detachable-cape-black/-/A-1003687864",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-dungeons-dragons-pajama-set/-/A-1005130730",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-two-piece-cotton-tie-dye-short-pajamas/-/A-89198948",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-two-piece-cotton-striped-boys-pajamas/-/A-89618924",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-cotton-short-pajamas-animal-prints/-/A-93871276",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-cotton-short-pajamas-classic-prints/-/A-93871386",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-cotton-short-pajamas-vehicle-prints/-/A-93871444",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-two-piece-cotton-ups-truck-pajamas/-/A-89931251",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/hudson-baby-boy-cotton-pajama-set-construction/-/A-88761083",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-two-piece-boho-solid-color-thermal-pajamas/-/A-89892658",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-two-piece-classic-solid-color-thermal-pajamas/-/A-89892771",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-cotton-pajamas-vehicle-prints/-/A-93871076",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/long-sleeve-pajamas-in-construction/-/A-1003295104",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajama Sets, Pajamas",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-shawl-collar-fleece-solid-color-robe/-/A-89531476",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/rising-star-unicorn-girls-boys-robe-kids-soft-plush-hooded-bathrobe-ages-3-8-years/-/A-90431780",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-fleece-solid-color-hooded-robe/-/A-89531300",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/prince-of-sleep-fleece-robes-for-boys-boys-pj-sleepwear/-/A-90614613",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lego-ninjago-little-big-boy-s-ninjago-costume-plush-fleece-robe/-/A-92083474",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/muslin-bath-robe-for-kids-100-cotton-4-layer-absorbent-muslin-fabric-by-comfy-cubs/-/A-1001592733",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/bc-bare-cotton-boys-hooded-robe-microfiber-plush-fleece-bathrobe/-/A-1001646463",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pok-mon-little-big-boys-kids-fluffy-soft-fleece-sleepwear-robe/-/A-94095284",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/scooby-doo-kids-costume-robe-soft-plush-fleece-hooded-with-ears/-/A-84593544",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sleep-on-it-boys-plush-fleece-robe-with-3d-character-hood/-/A-84716012",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-fleece-hooded-robe/-/A-93849522",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sonic-the-hedgehog-little-big-boy-s-costume-plush-fleece-robe/-/A-92128836",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/jurassic-world-boy-s-raptor-dinosaur-costume-plush-fleece-robe/-/A-92100345",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/bc-bare-cotton-boys-shawl-robe-microfiber-plush-fleece-bathrobe/-/A-1001001837",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/star-wars-the-mandalorian-little-big-boys-yoda-plush-fleece-robes/-/A-1003256266",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-fleece-hooded-christmas-robe/-/A-93826894",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/marvel-avengers-little-big-boys-panther-king-plush-fleece-robe/-/A-1003255444",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/marvel-little-big-boys-across-the-spiderverse-part-one-plush-robe/-/A-1003256284",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/bc-bare-cotton-shawl-robe-microfiber-plush-fleece-bathrobe/-/A-1001646548",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/super-mario-bros-boys-costume-plush-fleece-robe/-/A-92083509",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-little-big-boys-batman-velvet-fleece-hooded-robe/-/A-1001934539",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/rising-star-shark-girls-boys-robe-kids-soft-plush-hooded-bathrobe-ages-3-8-years/-/A-90431703",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/power-rangers-little-big-boy-s-costume-plush-fleece-robe/-/A-92083479",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/monster-jam-toy-trucks-boys-graphic-fleece-plush-hooded-robe-bathrobe-black/-/A-84850945",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/youth-boys-five-nights-at-freddy-s-hooded-robe/-/A-90614341",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/fruit-of-the-loom-kid-s-lightweight-waffle-robe/-/A-1001782946",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/joyfy-christmas-kids-dinosaur-robe-for-boys-hooded-boys-bath-robe-kids-christmas-pajamas/-/A-1001258518",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/beyblade-burst-boys-spinner-tops-graphic-fleece-plush-hooded-robe-bathrobe-blue/-/A-84295218",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/seven-times-six-nintendo-boys-super-mario-yoshi-and-super-mushroom-kids-fleece-robe/-/A-1000999253",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/transformers-little-big-boy-s-costume-plush-fleece-robe/-/A-92083504",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/super-mario-little-big-boys-mario-kart-plush-fleece-robe/-/A-1003405924",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/linum-kids-100-polyester-super-plush-double-brushed-hooded-bathrobe-robe/-/A-1000143266",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/linum-kids-100-polyester-super-plush-double-brushed-hooded-bathrobe-design/-/A-1000154380",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/linum-kids-100-polyester-super-plush-double-brushed-hooded-bathrobe-turtle-kids65-design/-/A-1000154440",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/linum-kids-100-polyester-super-plush-double-brushed-hooded-bathrobe-turtle-kids96-design/-/A-1000154389",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/linum-kids-100-polyester-super-plush-double-brushed-hooded-bathrobe-turtle-kids50-design/-/A-1000154372",
      "tags": "Boys’ Clothing, Kids’ Clothing, Pajamas, Robes",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-2pk-fleece-jogger-sweatpants-cat-jack/-/A-85268038",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-fleece-sweatpants-cat-jack/-/A-94338277",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-pull-on-fleece-sweatpants-cat-jack/-/A-94445439",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-pull-on-glow-in-the-dark-halloween-skeleton-sweatpants-cat-jack-black/-/A-94486014",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-2pk-fleece-sweatpants-cat-jack/-/A-94445448",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-performance-jogger-pants-all-in-motion/-/A-77615660",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-soft-gym-jogger-pants-all-in-motion-8482/-/A-91349053",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-active-light-jogger-pants-all-in-motion-8482/-/A-93112853",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-twill-straight-leg-pants-all-in-motion/-/A-94756510",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-skinny-fit-ripstop-pull-on-jogger-pants-art-class/-/A-85683391",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-drawstring-jogger-pants/-/A-89317745",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/leveret-kids-sweatpants/-/A-89317956",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minecraft-neon-skeleton-line-art-boy-s-black-sweatpants/-/A-87523080",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lanky-box-characters-lanky-box-youth-black-jogger-pants/-/A-90171406",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-tech-fleece-sport-jogger-pants-art-class-8482/-/A-90917802",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-fleece-jogger-pants-art-class/-/A-94706903",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-fleece-jogger-pants-art-class/-/A-91005796",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sega-sonic-the-hedgehog-2-pack-pants/-/A-85051250",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/marvel-avengers-spider-man-venom-iron-man-thor-fleece-3-pack-jogger-pants-toddler-to-big-kid/-/A-85037784",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-iron-knee-active-tech-fleece-tricot-pants/-/A-87672422",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/disney-mickey-mouse-lion-king-pixar-cars-fleece-2-pack-pants-infant-to-toddler/-/A-89820604",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/pj-masks-gekko-owlette-catboy-fleece-2-pack-jogger-pants-little-kid/-/A-87973818",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/star-wars-fleece-2-pack-jogger-pants-little-kid-to-big-kid/-/A-87246628",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/champion-kids-signature-fleece-jogger-pants/-/A-94609782",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/paw-patrol-skye-marshall-everest-little-girls-fleece-3-pack-jogger-pants-pink-purple-oatmeal-7-8/-/A-92825748",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-mid-rise-double-knit-sports-jogger-pants-art-class/-/A-94444764",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/gioberti-kids-and-boys-jogger-track-sweatpants-with-ribbed-cuff-leg/-/A-93202674",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sonic-the-hedgehog-sonic-tails-knuckles-checkered-flag-boy-s-black-sweatpants/-/A-87367860",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minecraft-adventure-club-youth-athletic-heather-sweatpants/-/A-87367909",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-waving-youth-athletic-heather-sweatpants/-/A-87615434",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minecraft-mob-heads-youth-black-sweatpants/-/A-87337357",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/black-white-flash-youth-boy-s-black-sweatpants/-/A-86121548",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/tom-jerry-building-block-tower-boy-s-black-sweatpants/-/A-86394044",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/bioworld-harry-potter-hogwarts-houses-letters-youth-black-graphic-sweatpants/-/A-86316774",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minecraft-creepers-youth-athletic-gray-jogger-sweatpants/-/A-87337982",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/godzilla-classic-silhouette-character-with-kanji-logo-youth-boys-athletic-heather-sweatpants/-/A-88043178",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/my-hero-academia-deku-victory-stance-boy-s-black-sweatpants/-/A-87615469",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/nasa-wordplay-screen-print-boy-s-athletic-heather-gray-sweatpants/-/A-86121608",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/scooby-doo-teal-text-youth-boys-black-sweatpants/-/A-87615463",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/beetlejuice-polaroids-youth-athletic-gray-graphic-sweatpants/-/A-87252625",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/scooby-doo-ruh-roh-boy-s-black-sweatpants/-/A-86394054",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sonic-the-hedgehog-modern-vertical-logo-youth-boys-black-sweatpants/-/A-87482273",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/bioworld-dragon-ball-z-goku-and-gohan-with-logo-youth-gray-graphic-sweatpants/-/A-87367939",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/naruto-classic-naruto-ninjutsu-stance-men-s-athletic-heather-sweatpants/-/A-88813587",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/flash-minimalist-youth-boy-s-black-sweatpants/-/A-86121551",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/scooby-doo-ruh-roh-boy-s-black-sweatpants/-/A-88032716",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dragonball-z-monochromatic-color-goku-youth-black-graphic-sweatpants/-/A-88813599",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sonic-the-hedgehog-boxed-in-sonic-knuckles-tails-boy-s-black-sweatpants/-/A-87450803",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/superman-flying-with-vertical-title-logo-youth-black-graphic-sweatpants/-/A-88142264",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/naruto-classic-gaara-of-the-desert-boy-s-black-sweatpants/-/A-88813678",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/looney-tunes-badge-youth-black-graphic-sweatpants/-/A-86316839",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/superman-man-of-steel-character-youth-black-graphic-sweatpants/-/A-88142286",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/naruto-classic-colorful-characters-boy-s-athletic-heather-sweatpants/-/A-87523065",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ac-dc-angus-young-red-silhouette-youth-black-graphic-sweatpants/-/A-88861389",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/scooby-doo-mystery-machine-boy-s-black-sweatpants/-/A-86383424",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/beetlejuice-chibi-ghost-with-the-most-youth-black-graphic-sweatpants/-/A-87252745",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/looney-tunes-sylvester-tweety-youth-boy-s-athletic-gray-sweatpants/-/A-86121594",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ac-dc-angus-young-red-silhouette-youth-black-graphic-sweatpants/-/A-88861347",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-league-of-super-pets-animal-heroes-boy-s-black-sweatpants/-/A-86316872",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/french-terry-sweatpants-with-side-pockets-navy-blue/-/A-1002803481",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/french-terry-sweatpants-with-side-pockets-black/-/A-1002803522",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/french-terry-sweatpants-with-side-pockets-grayish-teal/-/A-1002803506",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-justice-league-batman-superman-flash-3-pack-jogger-pants/-/A-87245769",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-boys-chino-jogger-pants-from-ruggedbutts/-/A-87888556",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/five-nights-at-freddy-s-character-with-checkered-background-youth-black-graphic-jogger-pants/-/A-88857043",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/naruto-smiling-naruto-character-youth-athletic-gray-graphic-jogger-pants/-/A-88857017",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/five-nights-at-freddy-s-vertical-layout-with-boxed-characters-youth-athletic-heather-gray-jogger-pants/-/A-88857019",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dungeons-dragons-icons-boy-s-black-jogger-pants/-/A-88313098",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/spongebob-squarepants-patrick-star-fleece-2-pack-pants/-/A-87246611",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/star-trek-spock-images-with-frames-and-logo-boy-s-athletic-heather-jogger-pants/-/A-87945443",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-dotted-stripe-jogger-pants/-/A-88079045",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/marvel-spider-man-spidey-and-his-amazing-friends-fleece-2-pack-pants/-/A-85236785",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/gioberti-kids-and-boys-athletic-jogger-track-pants-with-ribbed-zipper-ankle-cuffs/-/A-93202758",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minecraft-diamond-miner-symbol-youth-black-graphic-jogger-pants/-/A-88000896",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dragon-ball-z-goku-gohan-krillin-boy-s-athletic-heather-jogger-pants/-/A-88702900",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/transformers-optimus-prime-bumblebee-fleece-2-pack-pants-little-kid-to-big-kid/-/A-87557281",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dc-comics-justice-league-batman-fleece-2-pack-pants/-/A-85702607",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/looney-tunes-sylvester-sufferin-succotash-youth-black-graphic-jogger-pants/-/A-88142316",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-heather-navy-knit-jogger-pants/-/A-88079105",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/x-ray-boy-s-commuter-chino-jogger-flat-waist/-/A-1001360192",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/five-nights-at-freddy-s-vertical-title-with-boxed-characters-youth-black-graphic-jogger-pants/-/A-88857046",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/levi-39-s-174-boys-39-box-tab-graphic-logo-jogger-pants/-/A-89081704",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/french-terry-denim-jogger-pant-black-jeans/-/A-1002790791",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/star-trek-logo-with-planets-asteroid-stars-boy-s-athletic-heather-jogger-pants/-/A-88256168",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/acdc-angus-young-playing-guitar-boy-s-black-jogger-pants/-/A-88317513",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/harry-potter-hufflepuff-badger-youth-black-graphic-jogger-pants/-/A-86218699",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/my-hero-academia-deku-boy-s-black-jogger-pants/-/A-88920855",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/tom-jerry-jumping-characters-with-checkered-background-youth-heather-gray-graphic-jogger-pants/-/A-88142055",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/tom-jerry-tom-playing-a-guitar-with-jerry-and-title-logo-youth-black-graphic-jogger-pants/-/A-88142259",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/harry-potter-hogwarts-house-mascots-boy-s-black-jogger-pants/-/A-88032668",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/bioworld-dungeons-dragons-natural-twenty-crit-graphic-with-logo-youth-athletic-heather-gray-jogger-pants/-/A-88043209",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/tom-jerry-characters-and-title-logo-youth-heather-gray-graphic-jogger-pants/-/A-88142162",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/dragon-ball-z-son-goku-with-kanji-name-and-english-text-youth-athletic-heather-gray-graphic-jogger-pants/-/A-88000905",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/superman-flying-superhero-youth-boy-s-black-jogger-pants/-/A-89205748",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/polar-express-believe-with-polar-bear-and-train-youth-black-graphic-jogger-pants/-/A-88857038",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/bioworld-growing-up-creepie-full-color-logo-youth-black-graphic-jogger-pants/-/A-89051002",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/bioworld-growing-up-creepie-large-logo-graphic-with-character-art-youth-heather-gray-graphic-jogger-pants/-/A-89021642",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/champion-boys-tech-zip-jogger-pants/-/A-94609774",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/shazam-character-with-circle-frame-and-logo-name-youth-athletic-heather-graphic-jogger-pants/-/A-88857020",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/shazam-movie-grunge-frame-with-character-and-logo-youth-black-graphic-jogger-pants/-/A-88857056",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/gioberti-kids-and-boys-athletic-track-jogger-pants-with-ribbed-cuff-leg/-/A-93202824",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boy-s-s-jogger-pants-with-pockets-mayoral/-/A-1003811428",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boy-s-s-jogger-pants-noruk-collection/-/A-1003277921",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/champion-boys-double-knit-jogger-pants/-/A-94609773",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/gremlins-gizmo-military-style-text-with-squares-youth-heather-gray-graphic-jogger-pants/-/A-89021652",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/looney-tunes-sylvester-and-tweety-we-ll-play-sandwich-youth-black-graphic-jogger-pants/-/A-88142249",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/shazam-movie-character-and-logo-youth-black-graphic-jogger-pants/-/A-88857052",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/looney-tunes-taz-tantrum-youth-black-graphic-jogger-pants/-/A-88142289",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boy-s-s-jogger-pants-noruk-collection/-/A-1003277919",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/stretch-twill-jogger-pant-dark-olive-green/-/A-1002803177",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boy-s-s-jogger-pants-noruk-collection/-/A-1003277911",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-usa-made-fleece-cotton-soft-pocket-jogger-for-boys-and-girls/-/A-91227792",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-usa-made-100-cotton-fleece-soft-lightweight-pocket-jogger-for-boys-and-girls/-/A-91282153",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-husky-basic-iron-knee-fleece-joggers/-/A-1004914483",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/jumpstart-boy-s-slim-fitting-cotton-stretch-classic-twill-joggers/-/A-1003183539",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/the-polar-express-santa-do-you-hear-the-bell-boys-black-joggers/-/A-88451428",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/space-jam-1996-collegiate-text-with-characters-youth-boys-black-joggers/-/A-89838955",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/marvel-spider-man-little-boys-2-pack-pants-blue-grey-6/-/A-87235389",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/bioworld-dragonball-z-kame-symbol-with-goku-text-youth-black-graphic-sweats/-/A-88920956",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/naruto-classic-rock-lee-stance-mode-youth-athletic-heather-gray-graphic-joggers/-/A-88000893",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/the-polar-express-train-and-mountain-boys-athletic-heather-joggers/-/A-88451396",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/acdc-angus-young-silhouette-with-logo-youth-black-graphic-sweats/-/A-89177176",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boy-s-twill-pants-noruk-collection/-/A-1003811466",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boy-s-twill-stretch-pants-noruk-collection/-/A-1003811439",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boy-s-s-multi-pocket-stretch-denim-pants-noruk-collection/-/A-1003277908",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/mykids-usa-children-boys-excavator-descending-cartoon-sports-trousers-with-pockets/-/A-1003452903",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/mykids-usa-autumn-embroidered-pattern-casual-trousers/-/A-1003337044",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-athletic-tech-fleece-sweat-pants/-/A-87870227",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Sweatpants",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-adventure-pants-all-in-motion/-/A-89554652",
      "tags": "Active Pants, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/mizuno-yth-mizuno-power-warm-up-pants/-/A-90151249",
      "tags": "Active Pants, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-active-comfort-jogger-pants-all-in-motion/-/A-94756484",
      "tags": "Active Pants, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-heavyweight-jogger-pants-all-in-motion/-/A-90945940",
      "tags": "Active Pants, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-mesh-spacer-jogger-pants-all-in-motion-8482/-/A-91338683",
      "tags": "Active Pants, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-mesh-jogger-pants-all-in-motion/-/A-91184116",
      "tags": "Active Pants, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-performance-jogger-pants-all-in-motion/-/A-94756515",
      "tags": "Active Pants, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-spacer-jogger-pants-all-in-motion/-/A-94471828",
      "tags": "Active Pants, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-golf-pants-all-in-motion/-/A-91013481",
      "tags": "Active Pants, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-twill-5-pocket-pants-all-in-motion/-/A-94471818",
      "tags": "Active Pants, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/mizuno-youth-alpha-quest-trainer-pant/-/A-80173356",
      "tags": "Active Pants, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/minus33-merino-wool-midweight-kid-s-base-layer-bottom-100-merino-wool/-/A-89832570",
      "tags": "Active Pants, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/mizuno-yth-recover-jogger/-/A-1002768610",
      "tags": "Active Pants, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-school-uniform-kids-mesh-gym-shorts/-/A-86739514",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-basketball-160-shorts-all-in-motion-8482/-/A-94148389",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-printed-mesh-shorts-all-in-motion/-/A-94749680",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-mesh-spacer-shorts-all-in-motion/-/A-94471833",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-active-light-woven-shorts-all-in-motion/-/A-94674801",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-everyday-shorts-all-in-motion-8482/-/A-94674838",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-soft-stretch-woven-shorts-all-in-motion/-/A-94756513",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-hybrid-shorts-all-in-motion/-/A-90109160",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/eg-pro-enduro-flex-girl-s-compression-short-graded-inseam/-/A-1001398303",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-adventure-shorts-all-in-motion/-/A-89554653",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-training-shorts-all-in-motion-8482/-/A-93111698",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-soft-stretch-shorts-all-in-motion/-/A-93111696",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-pattern-active-shorts/-/A-1003408706",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/fairtex-kids-muay-thai-boxing-shorts-bsk2106-siam/-/A-1001703885",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-textured-woven-shorts-all-in-motion/-/A-94505181",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-golf-shorts-all-in-motion/-/A-89505136",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/fairtex-kids-muay-thai-boxing-shorts-bsk2102-summer/-/A-1001549749",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/fairtex-kids-muay-thai-boxing-shorts-bsk2104-midnight-red/-/A-1001549741",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/fairtex-kids-muay-thai-boxing-shorts-bsk2108-silent-warrior/-/A-1001549735",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/fairtex-kids-muay-thai-boxing-shorts-bsk2107-turquoise/-/A-1001549733",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-pattern-active-shorts/-/A-87254138",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-usa-made-boys-cotton-upf-50-soft-3-pocket-jersey-shorts/-/A-92149866",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-mesh-shorts-all-in-motion/-/A-89505156",
      "tags": "Active Shorts, Activewear, Boys’ Activewear",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/raw-x-boy-s-2-pack-combo-belted-twill-cargo-shorts/-/A-1002945254",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-pull-on-shorts-cat-jack/-/A-94150031",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-pull-on-at-the-knee-knit-shorts-cat-jack/-/A-88274464",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-2pk-pull-on-woven-shorts-cat-jack/-/A-78327493",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-flat-front-at-the-knee-chino-shorts-cat-jack/-/A-89674007",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-pull-on-above-the-knee-denim-shorts-cat-jack/-/A-92797494",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-french-terry-pull-on-shorts-cat-jack/-/A-92868552",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-flat-front-uniform-shorts-cat-38-jack-8482/-/A-88909047",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-playwear-at-the-knee-pull-on-shorts-cat-jack-navy/-/A-94616587",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-above-the-knee-printed-pull-on-shorts-cat-jack-navy-blue/-/A-94721594",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-at-the-knee-pull-on-cargo-denim-shorts-cat-jack/-/A-92866063",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-pull-on-shorts-cat-38-jack-8482/-/A-93276674",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-uniform-quick-dry-shorts-cat-38-jack-8482/-/A-94290596",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-denim-at-the-knee-shorts-cat-jack/-/A-93020883",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-adaptive-quick-dry-shorts-cat-38-jack-8482-tan/-/A-93300712",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-2pk-adaptive-knit-shorts-cat-38-jack-8482-black-red/-/A-93300498",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-at-the-knee-chambray-flat-front-chino-shorts-cat-jack-blue/-/A-93002770",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-quick-dry-above-the-knee-pull-on-shorts-cat-jack/-/A-93229388",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-textured-above-the-knee-pull-on-shorts-cat-jack/-/A-94660064",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-4th-of-july-gauze-checkerboard-pull-on-shorts-cat-jack-red/-/A-94253788",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-4th-of-july-pull-on-textured-gauze-shorts-cat-38-jack-8482-light-blue/-/A-94148251",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-pull-on-cargo-knee-shorts-cat-jack/-/A-92934701",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-4th-of-july-pull-on-geometric-print-shorts-cat-jack/-/A-94253792",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-pull-on-above-the-knee-shorts-cat-jack/-/A-93073793",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-above-the-knee-pull-on-shorts-cat-jack/-/A-94492443",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-flat-front-39-at-the-knee-39-chino-shorts-cat-38-jack-8482/-/A-93276672",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-above-the-knee-pull-on-shorts-cat-jack/-/A-93576242",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-above-the-knee-french-terry-pull-on-shorts-cat-jack/-/A-94125991",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-textured-above-the-knee-pull-on-shorts-cat-jack-sage-green/-/A-94660065",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-loose-jean-shorts-art-class/-/A-92748953",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-knit-sport-shorts-art-class/-/A-89634583",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-knit-sports-pull-on-shorts-art-class/-/A-94451742",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-cargo-shorts-art-class/-/A-92946799",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-nylon-shorts-art-class/-/A-94140200",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-mid-rise-textured-knit-pull-on-shorts-art-class/-/A-94444765",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-baggy-jean-shorts-art-class-medium-wash/-/A-92748952",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-baggy-cargo-jean-shorts-art-class-gray-wash/-/A-92748954",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-slim-jean-shorts-art-class/-/A-92748943",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-carpenter-pull-on-shorts-art-class-8482/-/A-94500738",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-fleece-shorts-art-class/-/A-92947381",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-mid-rise-fleece-pull-on-shorts-art-class/-/A-94444711",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-pull-on-shorts-art-class/-/A-92946820",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-corduroy-pull-on-shorts-art-class/-/A-94465367",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-woven-striped-shorts-art-class/-/A-94141246",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-active-chino-shorts/-/A-88498876",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/hope-henry-boys-organic-cotton-seersucker-short-kids/-/A-83229990",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-school-uniform-kids-plain-front-blend-chino-shorts/-/A-86739582",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/levi-s-boys-skinny-dobby-pull-on-shorts/-/A-89809068",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/mizuno-youth-boy-s-icon-6-training-short/-/A-89135010",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/levi-s-boys-relaxed-fit-pull-on-shorts/-/A-92311434",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/levi-s-boys-slim-jean-shorts/-/A-92311634",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-minecraft-woven-shorts-gray/-/A-94431026",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-bluey-terry-shorts-black/-/A-94408550",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-messi-logo-ombre-tricot-shorts-blue/-/A-94467768",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/converse-boys-french-terry-pull-on-shorts/-/A-92309604",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/converse-boys-pull-on-all-star-logo-mesh-cargo-shorts/-/A-94300143",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/converse-boys-pull-on-logo-basketball-shorts/-/A-94300144",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/converse-boys-ripstop-cargo-shorts/-/A-92289936",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-pok-233-mon-masterball-fleece-shorts-gray/-/A-94681136",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/converse-boys-french-terry-pull-on-shorts/-/A-92309609",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-maui-38-sons-woven-shorts-gray/-/A-94653589",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-messi-logo-ombre-tricot-shorts-black/-/A-94467767",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-minecraft-shorts-white/-/A-94222603",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/at-the-buzzer-boys-athletic-shorts-77726-gry-8/-/A-1003558619",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-cabana-striped-shorts-olive-scout-x-julie-sousa/-/A-1004218980",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-stitch-terry-shorts-blue/-/A-94431034",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boys-39-pikachu-woven-shorts/-/A-94431028",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/at-the-buzzer-boys-athletic-stripe-basketball-sports-shorts-with-pockets/-/A-1003331295",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/galaxy-approved-boy-s-stretch-cotton-cargo-shorts/-/A-1003188740",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/hanes-boys-jersey-shorts-2-pack/-/A-1003254434",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sol-angeles-kids-circle-waves-short/-/A-1003686953",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-grayson-shorts-olive-scout/-/A-1002731470",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-leo-athletic-shorts-olive-scout/-/A-1002476537",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sol-angeles-kids-black-white-stripe-short/-/A-1003707673",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sol-angeles-kids-circle-waves-short/-/A-1003707657",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/mixed-up-clothing-boys-sweatshorts-sodalite-blue/-/A-93209479",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/mixed-up-clothing-boys-sweatshorts-jacquard-stripe/-/A-93209666",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/ruggedbutts-boys-hybrid-shorts/-/A-1002893193",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-mason-corduroy-shorts-olive-scout/-/A-1002255224",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/primary-kids-under-short-5-pack/-/A-1002936767",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/galaxy-approved-boy-s-stretch-slim-fit-school-uniform-twill-shorts/-/A-1003519294",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-ian-mesh-color-block-basketball-shorts-olive-scout/-/A-1003241012",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/galaxy-approved-boy-s-stretch-cotton-cargo-shorts-2-pack/-/A-1003188804",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/galaxy-approved-boy-s-stretch-slim-fit-school-uniform-twill-shorts-3-pack/-/A-1003519324",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/mykids-usa-boys-solid-color-green-soft-casual-style-shorts/-/A-1003286350",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-denim-short-denim-blue/-/A-1003636054",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/primary-kids-park-short/-/A-1003048804",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sol-angeles-kids-coastal-waves-short/-/A-1003707665",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-short-black/-/A-1003635453",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/primary-kids-staycool-stretch-gym-short/-/A-1002734697",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/hope-henry-boys-linen-blend-short-kids/-/A-1002929923",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/gioberti-boy-s-garment-wash-casual-shorts-with-stripe-contrast-denim/-/A-93391853",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/primary-kids-garment-dyed-stretch-chino-short/-/A-1003331677",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/vizari-kids-napa-soccer-shorts-for-for-boys-and-girls/-/A-90738049",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/primary-kids-chambray-beach-short/-/A-1002936869",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/vizari-kids-campo-soccer-shorts/-/A-92288891",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-short-teal/-/A-1003635409",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-gene-denim-shorts-olive-scout/-/A-1002734632",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-organic-athletic-shorts-ochre/-/A-1002580201",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-kash-sweat-shorts-olive-scout/-/A-1002560672",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/sol-angeles-kids-circle-waves-short/-/A-1003707689",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-jay-distressed-denim-shorts-olive-scout/-/A-1002476512",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-husky-active-performance-chino-shorts/-/A-1003620052",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/hope-henry-heirloom-boys-linen-blend-short-kids/-/A-1001269844",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/primary-kids-flexknit-gym-short/-/A-1002936527",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/primary-kids-gym-short/-/A-1002590138",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-organic-pull-on-shorts-orange-chambray-jackalo/-/A-1000008481",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-organic-athletic-shorts-parakeet/-/A-1002580209",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boy-s-hugo-twill-boys-shorts-me-henry/-/A-1001251265",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-stretch-canvas-utility-cargo-shorts/-/A-91557976",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/vizari-kids-trento-soccer-shorts-for-for-boys-and-girls/-/A-90738012",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/boy-s-crew-gauze-shorts-me-henry/-/A-1001251216",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/mafoose-youth-lightweight-interlock-posicharge-competitor-comfort-short/-/A-1002999668",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-stretch-twill-short-tan/-/A-1003484682",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/primary-kids-track-short/-/A-1002749178",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-boxer-shorts-teal-with-yellow-truck-11-12-years/-/A-1004084232",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-boxer-shorts-dinosaur-on-mottled-and-tan-background/-/A-1004084250",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-stretch-twill-short-dark-olive-green/-/A-1003484708",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-boxer-shorts-sloths-on-tan-background/-/A-1004084208",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/eg-pro-basic-training-youth-graded-short-with-pockets/-/A-1001402909",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-stretch-twill-short-vibrant-orange/-/A-1003484721",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-color-block-short-blue-navy-and-cream/-/A-1003635424",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-boxer-shorts-light-sage-and-gray-crocodile/-/A-1004084211",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-above-the-knee-shorts/-/A-1004010257",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-parachute-cargo-pocket-shorts-dark-gray/-/A-1003635976",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/mykids-usa-boys-solid-color-cotton-casual-style-shorts/-/A-1003193942",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/champion-kids-signature-fleece-shorts/-/A-94609781",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-denim-short-black-jeans/-/A-1003636053",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/city-threads-usa-made-cotton-boys-soft-above-knee-side-pocket-shorts-upf-50/-/A-92721418",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-alley-club-shorts-olive-scout-x-julie-sousa/-/A-1004218970",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-short-vibrant-orange/-/A-1003635279",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/gioberti-boy-s-casual-tropical-print-shorts/-/A-93391780",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-boxer-shorts-pack-of-3-multicolored/-/A-1004084256",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-printed-chambray-short-pale-blue-and-navy/-/A-1003635375",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/kids-organic-athletic-shorts-jackalo/-/A-93994091",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/at-the-buzzer-boys-athletic-shorts-with-pockets/-/A-1003317451",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/gender-neutral-s-bluepeter-short-me-henry/-/A-1001177576",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/gender-neutral-kid-s-bluepeter-short-me-henry/-/A-1001177697",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/mykids-usa-baby-boy-and-girl-solid-color-basic-denim-shorts-with-pockets-in-summer/-/A-1004525874",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-boxer-shorts-tools-on-bluish-gray-background/-/A-1004084244",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-athletic-shorts-blue-and-black/-/A-1003635479",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-french-terry-short-pale-blue/-/A-1003635336",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-slant-pocket-bermuda-shorts-light-taupe/-/A-1003607654",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-printed-french-terry-short-beige-palm-tree-and-teal/-/A-1003635346",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-slant-pocket-bermuda-shorts-navy-blue-striped/-/A-1003635251",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/galaxy-approved-boy-s-stretch-slim-fit-school-uniform-twill-shorts-2-pack/-/A-1003519309",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    },
    {
      "url": "https://www.target.com/p/deux-par-deux-boy-parachute-cargo-pocket-shorts-dark-teal/-/A-1003636029",
      "tags": "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      "filters": {}
    }
  ],

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
