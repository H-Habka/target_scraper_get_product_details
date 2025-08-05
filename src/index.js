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
      url: "https://www.target.com/p/boys-spacer-pullover-hoodie-sweatshirt-all-in-motion/-/A-94471822",
      tags: "Athletic Sweatshirts, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-challenger-hoodie/-/A-84755524",
      tags: "Athletic Sweatshirts, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-boy-s-velocity-hoodie/-/A-79131796",
      tags: "Athletic Sweatshirts, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-boy-s-warmup-hoodie/-/A-76125880",
      tags: "Athletic Sweatshirts, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boys-soft-stretch-1-4-zip-layered-sweatshirt-all-in-motion/-/A-91380022",
      tags: "Athletic Sweatshirts, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boys-active-comfort-fleece-pullover-hoodie-all-in-motion/-/A-94749683",
      tags: "Athletic Sweatshirts, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boys-active-comfort-fleece-crewneck-sweatshirt-all-in-motion/-/A-94756506",
      tags: "Athletic Sweatshirts, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/vapor-apparel-youth-upf-50-uv-sun-protection-solar-hoodie/-/A-94216434",
      tags: "Athletic Sweatshirts, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boys-fleece-hoodie-sweatshirt-cat-jack/-/A-94445444",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boys-long-sleeve-pull-over-hooded-t-shirt-cat-jack/-/A-94247064",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boys-hooded-fleece-sweatshirt-cat-jack/-/A-94571482",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-fleece-crew-sweatshirt-cat-38-jack-8482-navy-blue/-/A-94576201",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boys-stucco-skeleton-graphic-sweatshirt-cat-jack-beige/-/A-94449926",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boys-fleece-hoodie-sweatshirt-art-class/-/A-94444707",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boys-fleece-hoodie-sweatshirt-art-class/-/A-92947384",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hanes-kids-comfort-blend-eco-smart-hoodie/-/A-81534165",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-spongebob-squarepants-distressed-best-friends-pull-over-hoodie/-/A-87693782",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-long-sleeve-classic-solid-color-sweatshirt/-/A-89567170",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-character-boxes-pull-over-hoodie/-/A-83875489",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-collage-pull-over-hoodie/-/A-83875650",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-bb-8-lighter-pull-over-hoodie/-/A-84177820",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-pull-over-hoodie/-/A-85436666",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-darth-vader-artistic-helmet-pull-over-hoodie/-/A-84177253",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-classic-characters-youth-heather-hoodie/-/A-84810654",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-school-crest-boy-s-royal-blue-sweatshirt/-/A-86382902",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-nightmare-before-christmas-jack-skellington-hoodie/-/A-85183748",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-fleece-pullover-hoodie-little-kid-to-big-kid/-/A-85562209",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-long-sleeve-neutral-solid-color-sweatshirt/-/A-89567290",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/acdc-dirty-deeds-done-dirt-cheap-youth-black-crew-neck-sweatshirt/-/A-89177260",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-knuckles-hoodie/-/A-85183130",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-panda-feeding-time-crew-neck-long-sleeve-athletic-heather-boy-s-sweatshirt/-/A-89002045",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-long-sleeve-boho-solid-color-sweatshirt/-/A-89567038",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-avengers-spider-man-hulk-fleece-pullover-hoodie-little-kid-to-big-kid/-/A-89728508",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-squidward-plankton-spongebob-patrick-hoodie-toddler-to-big-kid/-/A-85411033",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-fleece-hoodie-little-kid-to-big-kid/-/A-87274499",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-hooded-sweatshirt-kids-hoodie-pullover-sweatshirt-with-kangaroo-pocket-boho-solid-color/-/A-1000400424",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-hooded-sweatshirt-kids-hoodie-pullover-sweatshirt-with-kangaroo-pocket-classic-solid-color/-/A-1000400479",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-hooded-sweatshirt-kids-hoodie-pullover-sweatshirt-with-kangaroo-pocket-neutral-solid-color/-/A-1000400553",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/g-iii-sports-boys-rebels-ole-miss-hoodie-sweatshirt/-/A-1004145492",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/reebok-boys-power-popover-hoodie-sweatshirt/-/A-1004737989",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/reebok-boys-power-1895-hoodie-sweatshirt/-/A-1004738046",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-ollie-pullover-hoodie-sweatshirt/-/A-1004730334",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-marizo-pullover-hoodie-sweatshirt/-/A-1004765038",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-minecraft-boys-game-on-creeper-mob-graphic-print-hoodie-sweatshirt-black/-/A-1000041014",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/g-iii-sports-boys-mississippi-rebels-hoodie-sweatshirt/-/A-1004145860",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/g-iii-sports-boys-texas-rangers-hoodie-sweatshirt/-/A-1004145479",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-french-terry-full-zip-hoodie-sweatshirt-pale-blue-and-dark-old-rose/-/A-1003010961",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-french-terry-color-block-pullover-hoodie-sweatshirt-beige-and-off-white/-/A-1003011725",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boys-jurassic-world-pullover-sweatshirt-hoodie-brown/-/A-94505165",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-pokemon-zip-up-hoodie-boy-s-pikachu-electric-type-3d-ears-sweatshirt-yellow/-/A-1004268665",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/beyblade-burst-boys-ace-dragon-spinner-top-pullover-sweatshirt-hoodie/-/A-84228363",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/beyblade-burst-show-boys-unisex-characters-sweatshirt-hoodie-pullover-grey/-/A-92211716",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-perfect-outfit-youth-boy-hoodie-short-sleeve-tee-and-lounge-shorts-3-piece-combo-set/-/A-1004705474",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-rocket-logo-pull-over-hoodie/-/A-82373625",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-stranger-things-biking-in-upside-down-pull-over-hoodie/-/A-1001059563",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-classic-black-logo-lightweight-hoodie/-/A-1002992953",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-classic-logo-character-fill-pull-over-hoodie/-/A-90952659",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-fleece-pullover-hoodie-toddler-to-big-kid/-/A-90111557",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-maruchan-big-face-ramen-bowl-pull-over-hoodie/-/A-1001936800",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/godzilla-classic-art-and-logo-youth-black-hoodie/-/A-84810180",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/jurassic-park-fleece-pullover-hoodie-toddler-to-little-kid/-/A-87051045",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-hanukkah-peace-love-latkes-pull-over-hoodie/-/A-91915042",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-comics-iconic-logo-fleece-pullover-hoodie-toddler-to-big-kid/-/A-88688182",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hufflepuff-gold-crest-pull-over-hoodie/-/A-87698652",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-sun-s-down-zombies-around-pull-over-hoodie/-/A-83875613",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-egyptian-glyphs-pull-over-hoodie/-/A-85894305",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-stranger-things-bold-logo-pull-over-hoodie/-/A-1001059532",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-toy-story-woody-buzz-lightyear-rex-forky-pullover-hoodie-little-kid/-/A-87557238",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-quidditch-slytherin-team-crest-pull-over-hoodie/-/A-87698517",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/godzilla-classic-art-and-logo-youth-athletic-gray-hoodie/-/A-84810284",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-guitar-flag-logo-pull-over-hoodie/-/A-86338090",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-clone-wars-captain-head-shot-portrait-pull-over-hoodie/-/A-84207790",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-elf-on-the-shelf-pop-art-portraits-pull-over-hoodie/-/A-90200259",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lankybox-all-over-character-print-long-sleeve-youth-blue-hooded-sweatshirt/-/A-1000525231",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/peppa-pig-kids-snugible-blanket-hoodie-pillow/-/A-1000384764",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-surfer-meowscles-pull-over-hoodie/-/A-90952442",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-camo-silhouette-pull-over-hoodie/-/A-85436677",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-jedi-fallen-order-darth-vader-s-inquisitor-squad-pull-over-hoodie/-/A-84207690",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-maruchan-egg-drop-ramen-pull-over-hoodie/-/A-1001941449",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-wolf-pull-over-hoodie/-/A-83875571",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-decorative-hogwarts-symbol-pull-over-hoodie/-/A-90483003",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-rippley-s-surf-shop-pull-over-hoodie/-/A-90953086",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/simple-beetlejuice-logo-youth-boy-s-black-hoodie/-/A-85295436",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-gingerbread-cookie-circle-pull-over-hoodie/-/A-85446029",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-love-and-thunder-classic-logo-pull-over-hoodie/-/A-87574122",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-experiment-626-halftone-smile-pull-over-hoodie/-/A-85637559",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-90s-mickey-mouse-distressed-pull-over-hoodie/-/A-85435343",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-breath-of-the-wild-circle-logo-pull-over-hoodie/-/A-93074377",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-line-art-seal-pull-over-hoodie/-/A-83437907",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-retro-character-panels-pull-over-hoodie/-/A-85753608",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-facial-expressions-of-stitch-pull-over-hoodie/-/A-85637729",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-captain-america-hulk-black-panther-miles-morales-venom-iron-man-half-zip-hoodie-toddler-to-little-kid/-/A-88074695",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-mario-3d-run-pull-over-hoodie/-/A-93074352",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pinocchio-real-boy-strut-pull-over-hoodie/-/A-85753936",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-up-wilderness-explorer-badge-pull-over-hoodie/-/A-87573585",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-block-kitten-with-block-heart-and-logo-youth-black-graphic-hoodie/-/A-89050955",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-animated-yellow-logo-pull-over-hoodie/-/A-89052545",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-characters-trick-or-treat-pull-over-hoodie/-/A-84090596",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hogwarts-icon-pattern-pull-over-hoodie/-/A-90482386",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-cute-avengers-pull-over-hoodie/-/A-87570341",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-g-logo-pull-over-hoodie/-/A-83440570",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-create-explore-survive-pull-over-hoodie/-/A-83875514",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-slytherin-dark-badge-logo-pull-over-hoodie/-/A-83441694",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-fish-text-stack-pull-over-hoodie/-/A-91644076",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-distressed-wild-and-free-tour-pull-over-hoodie/-/A-85763766",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-repeating-name-pull-over-hoodie/-/A-85436302",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-vintage-lean-pull-over-hoodie/-/A-85439039",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-graffiti-spider-logo-pull-over-hoodie/-/A-89018658",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-1986-hunting-logo-pull-over-hoodie/-/A-91647503",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-unlucky-donald-pull-over-hoodie/-/A-85439047",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-circle-of-stars-logo-pull-over-hoodie/-/A-87101022",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-logo-distressed-pull-over-hoodie/-/A-87100520",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-character-retro-poster-pull-over-hoodie/-/A-93074407",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ac-dc-monochrome-logo-and-cannon-youth-heather-gray-graphic-hoodie/-/A-88861502",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/thomas-friends-tank-engine-big-boys-fleece-half-zip-hoodie/-/A-85015706",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-candy-logo-pull-over-hoodie/-/A-85574375",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-ugly-christmas-sweater-pull-over-hoodie/-/A-85446159",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-patch-in-the-pocket-pull-over-hoodie/-/A-85823900",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-luigi-little-brother-pull-over-hoodie/-/A-82357025",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-halloween-i-m-with-creepy-pull-over-hoodie/-/A-89918738",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-fightertown-usa-pull-over-hoodie/-/A-87100485",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-king-of-arrows-pull-over-hoodie/-/A-85280586",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-retro-rainbow-ring-pull-over-hoodie/-/A-85433149",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-spider-man-santa-hat-pull-over-hoodie/-/A-85446000",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-ssss-creeper-pull-over-hoodie/-/A-83875655",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-friends-retro-group-circle-pull-over-hoodie/-/A-85438617",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-christmas-wreath-logo-pull-over-hoodie/-/A-85584159",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/superman-silhouette-youth-boy-s-royal-blue-hoodie/-/A-85295580",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-alex-pull-over-hoodie/-/A-83875747",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-star-ship-meeting-pull-over-hoodie/-/A-79806951",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-inside-out-fear-anger-sadness-disgust-joy-pull-over-hoodie/-/A-92916410",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/serious-flash-youth-boy-s-athletic-gray-hoodie/-/A-86196255",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-ugly-christmas-super-mario-pixel-pull-over-hoodie/-/A-81950607",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-dungeons-dragons-natural-twenty-crit-graphic-with-logo-youth-athletic-heather-gray-hoodie/-/A-88043099",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-block-kitten-with-block-heart-youth-black-graphic-hoodie/-/A-89050952",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-clone-wars-darth-maul-big-face-pull-over-hoodie/-/A-84177307",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-a-new-hope-r2-d2-body-pull-over-hoodie/-/A-87417008",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-mandalorian-helmet-reflection-pull-over-hoodie/-/A-79806946",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-donatello-leonardo-michelangelo-raphael-fleece-pullover-hoodie-toddler-to-big-kid/-/A-85028579",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-is-santa-pull-over-hoodie/-/A-85761399",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-neon-logo-pull-over-hoodie/-/A-86336747",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-yoda-lucky-one-pull-over-hoodie/-/A-85895635",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-scooby-doo-fleece-pullover-hoodie-little-kid-to-big-kid/-/A-87197572",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-nightmare-before-christmas-fleece-jack-skellington-oogie-boogie-sally-quarter-zip-hoodie-little-kid/-/A-87921515",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-polar-express-vintage-poster-boy-s-black-hoodie/-/A-88451443",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dc-x-sonic-the-hedgehog-from-the-shadows-shadow-x-batman-yellow-outline-youth-long-sleeve-hoodie/-/A-93802599",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hogwarts-herbology-pull-over-hoodie/-/A-90482883",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-neon-outlines-pull-over-hoodie/-/A-85438002",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-bear-pocket-sketch-pull-over-hoodie/-/A-85753787",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-classic-cartoon-smile-pull-over-hoodie/-/A-85438444",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-bakugo-deku-and-uraraka-youth-boys-black-hoodie/-/A-84809783",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-classic-logo-pull-over-hoodie/-/A-87698480",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-tie-dye-silhouette-pull-over-hoodie/-/A-85436044",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-bb-8-deconstruct-pull-over-hoodie/-/A-84207625",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-porgs-frame-pull-over-hoodie/-/A-82357190",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-chalk-print-pull-over-hoodie/-/A-81526075",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-silhouette-dots-pull-over-hoodie/-/A-1001021035",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dc-x-sonic-chaos-controller-youth-long-sleeve-hoodie/-/A-93802483",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-the-mystery-machine-youth-black-graphic-hoodie/-/A-89386835",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-collage-youth-black-graphic-hoodie/-/A-91071098",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-on-santa-s-naughty-list-pull-over-hoodie/-/A-89917699",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-neon-kanji-pull-over-hoodie/-/A-85435546",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-world-poster-pull-over-hoodie/-/A-93074412",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-sketch-pull-over-hoodie/-/A-85439074",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-ghast-sketch-pull-over-hoodie/-/A-83875423",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-red-tarot-card-pull-over-hoodie/-/A-1001022730",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/batman-youth-boys-black-graphic-hoodie/-/A-87976185",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-princesses-periodic-table-pull-over-hoodie/-/A-84207915",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-bugs-bunny-speech-bubble-what-s-up-doc-youth-heather-gray-graphic-hoodie/-/A-89002183",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-fast-stripes-pull-over-hoodie/-/A-93074540",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-red-shadows-pull-over-hoodie/-/A-85667409",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-widow-gradient-logo-pull-over-hoodie/-/A-84177832",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mtv-tapestry-logo-pull-over-hoodie/-/A-84177568",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hermione-and-crookshanks-pull-over-hoodie/-/A-90482778",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/space-jam-squad-youth-royal-blue-hoodie/-/A-86196174",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-america-body-pull-over-hoodie/-/A-87570387",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-experiment-626-spirit-animal-pull-over-hoodie/-/A-87238541",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-list-of-spells-pull-over-hoodie/-/A-83439153",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-hunt-text-stack-pull-over-hoodie/-/A-91644189",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-vintage-sunset-logo-pull-over-hoodie/-/A-84177222",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/beetlejuice-animated-series-youth-boy-s-black-hoodie/-/A-85295631",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-bear-collegiate-pull-over-hoodie/-/A-85752488",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-smiling-mickey-mouse-distressed-pull-over-hoodie/-/A-89801206",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-comic-book-pull-over-hoodie/-/A-85438736",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-rainbow-cute-but-crazy-palm-tree-pull-over-hoodie/-/A-85637536",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-iron-man-love-3000-mask-pull-over-hoodie/-/A-87569903",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-distressed-ski-club-pull-over-hoodie/-/A-90846368",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-10-reasons-being-a-jedi-pull-over-hoodie/-/A-84210271",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-eeyore-always-tired-club-pull-over-hoodie/-/A-85645978",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-tie-dye-pants-portrait-pull-over-hoodie/-/A-85437840",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-fantastic-four-classic-logo-pull-over-hoodie/-/A-87573474",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-empire-cartoon-characters-pull-over-hoodie/-/A-84210247",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-clint-barton-portrait-pull-over-hoodie/-/A-85281173",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-minnie-jersey-pull-over-hoodie/-/A-85435718",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-red-batcycle-pull-over-hoodie/-/A-85667467",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-official-one-only-pull-over-hoodie/-/A-85438159",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-hieroglyphs-pull-over-hoodie/-/A-93074580",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-resistance-pilot-rainbow-stripe-pull-over-hoodie/-/A-84207645",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-life-is-ruff-pull-over-hoodie/-/A-85823930",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-charmander-red-line-pull-over-hoodie/-/A-87422312",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-stranger-things-christmas-snowflakes-logo-pull-over-hoodie/-/A-89659678",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-clone-wars-yoda-jedi-master-action-pose-pull-over-hoodie/-/A-84207660",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-cut-pineapple-silhouette-pull-over-hoodie/-/A-85436546",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-kittens-climbing-pocket-badge-pull-over-hoodie/-/A-85633306",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-rainbow-launch-pull-over-hoodie/-/A-84177387",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-tie-dye-silhouette-pull-over-hoodie/-/A-85439283",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-distressed-pull-over-hoodie/-/A-85435780",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-cowboy-pull-over-hoodie/-/A-85439198",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nerf-team-blaster-distressed-badge-pull-over-hoodie/-/A-87692709",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-jaws-neon-poster-pull-over-hoodie/-/A-86194967",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-all-over-character-print-long-sleeve-boy-s-blue-oversized-wearable-hoodie-blanket/-/A-1000525237",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-five-nights-at-freddys-horror-game-black-hoodie/-/A-85295904",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-anime-deku-bakugo-youth-boys-heather-grey-hoodie/-/A-84810368",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-mandalorian-helmet-box-up-pull-over-hoodie/-/A-82159807",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-clone-wars-jedi-group-shot-retro-line-pull-over-hoodie/-/A-84207603",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-obi-wan-kenobi-vader-vs-kenobi-crossed-lightsabers-pull-over-hoodie/-/A-87586493",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-stars-and-stripes-logo-pull-over-hoodie/-/A-86338045",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-raven-attack-pull-over-hoodie/-/A-90923517",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-darth-vader-lightsaber-outline-pull-over-hoodie/-/A-84177228",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-dc-comic-book-batman-symbol-black-graphic-print-hoodie/-/A-84810102",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-scooby-ate-my-homework-youth-black-graphic-hoodie/-/A-89386876",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-little-boys-fleece-fashion-pullover-hoodie-navy/-/A-85411044",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-hieroglyphic-moon-phase-logo-pull-over-hoodie/-/A-86120560",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-athletic-club-pull-over-hoodie/-/A-85439057",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-grumpy-bear-stay-frosty-pull-over-hoodie/-/A-91915018",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-pullover-hoodie/-/A-1004010357",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-joey-character-with-spiral-background-and-logo-youth-black-graphic-hoodie/-/A-88919720",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-winged-scarab-frame-pull-over-hoodie/-/A-86119288",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-spray-can-graffiti-pull-over-hoodie/-/A-91644482",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-darth-vader-fleece-pullover-hoodie-little-kid-to-big-kid/-/A-85069749",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-avengers-hulk-miles-morales-spider-man-athletic-cosplay-hoodie-toddler-to-big-kid/-/A-88417223",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-spongebob-squarepants-like-a-boss-pull-over-hoodie/-/A-87694007",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-hero-and-sidekick-spotted-pull-over-hoodie/-/A-87910220",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-painted-simba-pull-over-hoodie/-/A-85646425",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-boy-s-toy-story-buzz-lightyear-space-ranger-pullover-hoodie/-/A-91194690",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-batman-fleece-hoodie-little-kid-to-big-kid/-/A-87051077",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/warner-bros-looney-tunes-marvin-the-martian-bugs-bunny-fleece-pullover-hoodie-toddler-to-big-kid/-/A-88348549",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-red-white-and-blue-stars-pull-over-hoodie/-/A-85763599",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-hoodie-black/-/A-87280397",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-eeyore-face-portrait-pull-over-hoodie/-/A-85645928",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-mandalorian-grogu-little-bounty-of-thankfulness-pull-over-hoodie/-/A-89578642",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-classic-style-pull-over-hoodie/-/A-85437494",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-quidditch-hufflepuff-team-crest-pull-over-hoodie/-/A-87698612",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-force-pull-over-hoodie/-/A-79806986",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-spider-man-2099-logo-pull-over-hoodie/-/A-89018850",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-captain-america-clover-shield-pull-over-hoodie/-/A-85872144",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-mandalorian-helmet-stamp-pull-over-hoodie/-/A-82158152",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-kirby-flying-portrait-pull-over-hoodie/-/A-89420050",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-lightning-tech-logo-pull-over-hoodie/-/A-89051941",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-cuddle-team-leader-broken-heart-pull-over-hoodie/-/A-90953226",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-bros-pattern-pull-over-hoodie/-/A-85033267",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-resistance-pilot-rainbow-race-pull-over-hoodie/-/A-84207627",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-moods-of-donald-duck-pull-over-hoodie/-/A-85435814",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-obi-wan-kenobi-lightsaber-dark-side-vs-jedi-clash-pull-over-hoodie/-/A-87759293",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-black-panther-lucky-shirt-pull-over-hoodie/-/A-85874430",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-metallic-pull-over-hoodie/-/A-85438089",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-peace-sign-pull-over-hoodie/-/A-85436369",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-the-magic-letter-pull-over-hoodie/-/A-90482940",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-mandalorian-mythosaur-skull-logo-pull-over-hoodie/-/A-81526355",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-elf-on-the-shelf-christmas-cheer-pull-over-hoodie/-/A-90200216",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-st-patrick-s-day-extra-life-mushroom-lucky-charm-pull-over-hoodie/-/A-85886521",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-obi-wan-kenobi-vader-vs-kenobi-artistic-lightsaber-duel-pull-over-hoodie/-/A-87586442",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-natured-filled-logo-pull-over-hoodie/-/A-91646705",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-yarn-lifter-meowscles-pull-over-hoodie/-/A-90923847",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-maverick-talk-to-me-goose-pull-over-hoodie/-/A-87100528",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-a-new-hope-chasing-the-falcon-pull-over-hoodie/-/A-87417069",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-red-camo-logo-pull-over-hoodie/-/A-85637742",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-jurassic-world-fallen-kingdom-4th-of-july-logo-pull-over-hoodie/-/A-1000131454",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-christmas-morning-pull-over-hoodie/-/A-89917762",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-icons-silhouettes-pull-over-hoodie/-/A-85435406",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-hero-of-the-night-pull-over-hoodie/-/A-89052639",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lanky-box-boxy-long-sleeve-boy-s-yellow-cosplay-hoodie/-/A-93713959",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-kylo-ren-emblem-pull-over-hoodie/-/A-84209970",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-halloween-stormtrooper-crossbones-pull-over-hoodie/-/A-84089489",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-ocarina-of-time-pull-over-hoodie/-/A-82353550",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-shang-chi-and-the-legend-of-the-ten-rings-fleece-hoodie-black/-/A-87533994",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-old-school-mickey-pull-over-hoodie/-/A-85438581",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-koopa-king-bowser-pull-over-hoodie/-/A-87422419",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-polar-express-believe-retro-train-pull-over-hoodie/-/A-1001059073",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-a-new-hope-darth-vader-dogfight-pull-over-hoodie/-/A-87417128",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-avengers-captain-america-fleece-hoodie-little-kid/-/A-87369338",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-darth-vader-x-wing-millennium-falcon-fleece-pullover-hoodie-toddler-to-big-kid/-/A-88290863",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-goofy-donald-duck-fleece-pullover-hoodie-infant-to-big-kid/-/A-87358578",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dc-league-of-super-pets-krypto-the-super-dog-youth-royal-blue-hoodie/-/A-86383070",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-classic-mickey-mouse-pull-over-hoodie/-/A-85436506",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-logo-pull-over-hoodie/-/A-84207763",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/elf-movie-character-raised-by-elves-youth-black-graphic-hoodie/-/A-87945000",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-having-a-blast-pull-over-hoodie/-/A-83875691",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mtv-christmas-tree-logo-pull-over-hoodie/-/A-81950655",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/thomas-friends-thomas-the-train-pullover-hoodie-little-kid/-/A-88290904",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-collegiate-letters-youth-black-graphic-hoodie/-/A-89386804",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mclaren-f1-kids-core-essentials-hoodie/-/A-92466188",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peely-aerosol-can-pull-over-hoodie/-/A-90923389",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-squad-art-youth-heather-gray-hoodie/-/A-84809896",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-legend-poster-pull-over-hoodie/-/A-85435769",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-classic-iron-man-pull-over-hoodie/-/A-87569876",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-kids-baja-hoodie/-/A-93162544",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-the-true-original-pull-over-hoodie/-/A-85438324",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cuphead-vintage-circle-pull-over-hoodie/-/A-81525912",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-soccer-just-kickin-it-pull-over-hoodie/-/A-85439292",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/blaze-and-the-monster-machines-fleece-half-zip-hoodie-little-kid-to-big-kid/-/A-1003647368",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-distressed-flag-pull-over-hoodie/-/A-93074436",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mtv-christmas-monster-logo-pull-over-hoodie/-/A-81950367",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-stand-together-anime-friends-pull-over-hoodie/-/A-90482499",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-peace-sign-pull-over-hoodie/-/A-85435437",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-darth-vader-need-space-pull-over-hoodie/-/A-79806966",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-unstoppable-stitch-pull-over-hoodie/-/A-87237655",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-bb-8-sunset-pull-over-hoodie/-/A-84177266",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-running-pull-over-hoodie/-/A-85437459",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-polar-express-conductor-boy-s-black-hoodie/-/A-88451488",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-soccer-mexico-pull-over-hoodie/-/A-85439109",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-halloween-pikachu-jack-o-lantern-caramel-apple-pull-over-hoodie/-/A-89632564",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-maximum-destruction-son-uva-digger-earth-shaker-fleece-pullover-hoodie-little-kid-to-big-kid/-/A-88096504",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-toad-icons-pull-over-hoodie/-/A-93074681",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-buzz-poster-pull-over-hoodie/-/A-87759354",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-abby-cadabby-kids-snugible-blanket-hoodie-pillow/-/A-1000384759",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-classic-character-youth-royal-blue-hoodie/-/A-84809578",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-tropical-minnie-pull-over-hoodie/-/A-85438473",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-hakuna-matata-stripe-heart-pull-over-hoodie/-/A-85554526",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-classic-circle-distressed-pull-over-hoodie/-/A-85438058",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lord-of-the-rings-fellowship-of-the-ring-eye-of-sauron-pull-over-hoodie/-/A-88119654",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-breath-of-the-wild-portrait-pull-over-hoodie/-/A-93074554",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-retro-minnie-boxes-pull-over-hoodie/-/A-85435511",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-fleece-pullover-hoodie-little-kid/-/A-88258378",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-heart-crusher-youth-graphic-hoodie/-/A-1001551966",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-red-fire-vader-pull-over-hoodie/-/A-1001941930",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-slytherin-snake-pull-over-hoodie/-/A-1001936831",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-egg-silhouette-pull-over-hoodie/-/A-85760847",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-portrait-pull-over-hoodie/-/A-85436867",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-bros-character-guide-pull-over-hoodie/-/A-82363002",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-slime-logo-pull-over-hoodie/-/A-82357143",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-speedster-portrait-pull-over-hoodie/-/A-89053751",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-little-boys-fleece-half-zip-pullover-hoodie/-/A-85411029",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-pocket-silhouette-pull-over-hoodie/-/A-85437354",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-best-friend-shot-pull-over-hoodie/-/A-87572938",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-original-art-pull-over-hoodie/-/A-85438600",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-neon-wave-pull-over-hoodie/-/A-85437691",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-mascot-houses-box-up-pull-over-hoodie/-/A-1001414840",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-black-and-white-stitch-pull-over-hoodie/-/A-85824330",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-and-rafiki-scene-pull-over-hoodie/-/A-85753993",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-valentine-s-day-boba-fett-cupid-pull-over-hoodie/-/A-85778537",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-swinging-6th-birthday-pull-over-hoodie/-/A-92225775",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-boom-pull-over-hoodie/-/A-83875677",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-impatient-pull-over-hoodie/-/A-85438566",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-wizard-in-training-pull-over-hoodie/-/A-90482353",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-snow-goggles-landscape-pull-over-hoodie/-/A-90896185",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/nickelodeon-paw-patrol-marshall-little-boys-fleece-cosplay-pullover-hoodie-red/-/A-85236184",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-and-luigi-st-patrick-s-day-not-wearing-green-pull-over-hoodie/-/A-85886637",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-poses-in-pink-panels-pull-over-hoodie/-/A-87238365",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-quidditch-gold-team-seeker-pull-over-hoodie/-/A-83437804",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-mario-kart-rainbow-road-racing-pull-over-hoodie/-/A-87422502",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-stranger-things-roads-apart-pull-over-hoodie/-/A-87398179",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-large-pose-pull-over-hoodie/-/A-85436692",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-sinister-kylo-pull-over-hoodie/-/A-84209942",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-kirby-black-and-white-portrait-pull-over-hoodie/-/A-89420041",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-durr-burger-pull-over-hoodie/-/A-91644286",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-yoshi-smiling-jumping-pull-over-hoodie/-/A-82365460",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-hakuna-matata-means-no-worries-pull-over-hoodie/-/A-85646420",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hagrid-hedwig-kawaii-cuties-pull-over-hoodie/-/A-83438846",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-life-is-better-in-the-wilderness-pull-over-hoodie/-/A-85438967",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-mix-galaxy-style-logo-pull-over-hoodie/-/A-82363236",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/red-bull-racing-f1-kid-s-2024-team-pullover-hoodie/-/A-93226136",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-character-stack-pull-over-hoodie/-/A-91647475",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-block-butterfly-flying-youth-royal-blue-graphic-hoodie/-/A-89051394",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-boy-s-toy-story-woody-the-cowboy-pullover-costume-hoodie/-/A-91306504",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-crew-pull-over-hoodie/-/A-93074686",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-explore-hyrule-pull-over-hoodie/-/A-93074402",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-alice-oh-dear-cried-so-much-pull-over-hoodie/-/A-85633095",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-goonies-skull-map-logo-pull-over-hoodie/-/A-87698468",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-large-donald-duck-pull-over-hoodie/-/A-85438972",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-pluto-perked-dog-ears-pull-over-hoodie/-/A-85438571",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-pixel-character-square-pull-over-hoodie/-/A-79806968",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-bb-8-on-the-run-pull-over-hoodie/-/A-84209926",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-americana-flag-pull-over-hoodie/-/A-85761565",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-grunge-logo-youth-royal-blue-graphic-hoodie/-/A-84809963",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-stratocaster-boxes-pull-over-hoodie/-/A-86338140",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-victory-royale-slime-pull-over-hoodie/-/A-90953155",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-fear-the-wither-pull-over-hoodie/-/A-83875601",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-collegiate-piglet-pull-over-hoodie/-/A-85753654",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-house-shield-pull-over-hoodie/-/A-1001022872",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-black-and-white-panel-pull-over-hoodie/-/A-85832332",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-cuddle-team-leader-popsicle-pull-over-hoodie/-/A-90952145",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-sylvester-and-tweedy-we-ll-play-sandwich-graphic-boy-s-black-hoodie/-/A-88142053",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-darth-vadercute-cartoon-pull-over-hoodie/-/A-82369512",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-traditional-mickey-pull-over-hoodie/-/A-85437798",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-elf-on-the-shelf-deck-the-halls-pull-over-hoodie/-/A-90200197",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-victory-royale-gradient-logo-pull-over-hoodie/-/A-90923999",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-fleece-pullover-hoodie-little-kid-to-big-kid/-/A-85075115",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cars-mcqueen-racing-series-pull-over-hoodie/-/A-1001413926",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-group-pull-over-hoodie/-/A-81680346",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cuphead-best-friend-mugman-pull-over-hoodie/-/A-86081222",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-classic-mickey-distressed-pull-over-hoodie/-/A-85436430",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-retro-lucky-hat-youth-graphic-hoodie/-/A-1002225539",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-ornate-crest-pull-over-hoodie/-/A-83439638",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-space-jam-bugs-bunny-youth-black-graphic-hoodie/-/A-88033229",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/jurassic-park-fleece-pullover-hoodie-logo-toddler-to-big-kid/-/A-88298310",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-talk-to-me-goose-quote-pull-over-hoodie/-/A-87100463",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-bear-sketch-with-red-shirt-pull-over-hoodie/-/A-85645958",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-fleece-hoodie-little-kid/-/A-87539392",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/godzilla-monster-and-logo-youth-black-graphic-hoodie/-/A-84810192",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peely-banana-smoothie-pull-over-hoodie/-/A-90925026",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-hakuna-matata-silhouette-pull-over-hoodie/-/A-85646435",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-maruchan-i-heart-ramen-pull-over-hoodie/-/A-1000141173",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peel-yourself-logo-pull-over-hoodie/-/A-90923320",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-character-box-up-rainbow-pull-over-hoodie/-/A-87422197",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-face-pull-over-hoodie/-/A-85438912",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-portrait-pull-over-hoodie/-/A-85438357",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-celestial-amp-logo-pull-over-hoodie/-/A-86339386",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-mario-and-luigi-pull-over-hoodie/-/A-87422404",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-superheroes-of-earth-pull-over-hoodie/-/A-87570307",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-superman-and-krypto-walk-o-clock-pull-over-hoodie/-/A-87423776",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-house-shields-pull-over-hoodie/-/A-1001022124",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-yoda-st-patrick-s-day-pinch-me-you-will-not-pull-over-hoodie/-/A-85894484",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-comics-classic-avengers-pull-over-hoodie/-/A-87573516",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-spongebob-squarepants-skater-bob-pull-over-hoodie/-/A-87694014",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-colorful-repeating-name-youth-boys-black-hoodie/-/A-87450751",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-pluto-pull-over-hoodie/-/A-85437942",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-youth-graphic-hoodie/-/A-1001709806",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-cute-husky-puppies-pull-over-hoodie/-/A-90847270",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-lean-pull-over-hoodie/-/A-85438638",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-fleece-hangdown-hoodie-toddler-to-big-kid/-/A-90042532",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-kitten-strut-movie-logo-pull-over-hoodie/-/A-85633206",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-breath-of-the-wild-arch-pull-over-hoodie/-/A-87422360",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-bros-pixel-cast-with-names-pull-over-hoodie/-/A-81526141",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-clone-wars-commander-cody-bust-logo-pull-over-hoodie/-/A-84207676",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-avengers-spider-man-hoodie/-/A-85075293",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-a-new-hope-endor-summer-camp-pull-over-hoodie/-/A-87417186",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-ugly-christmas-mario-pull-over-hoodie/-/A-81951676",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-retro-rocket-launch-pull-over-hoodie/-/A-82368415",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-color-block-racers-pull-over-hoodie/-/A-93074615",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-guitar-chart-pull-over-hoodie/-/A-86337025",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-apr-s-ski-pull-over-hoodie/-/A-90895992",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-pikmin-3-deluxe-stronger-together-pull-over-hoodie/-/A-93074427",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-rocky-zuma-rubble-fleece-pullover-hoodie-little-kid/-/A-88328143",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-eat-sleep-repeat-pull-over-hoodie/-/A-85637693",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-club-house-group-shot-pull-over-hoodie/-/A-85437482",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-fazbear-s-pizza-security-youth-athletic-gray-hoodie/-/A-84810097",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-hugs-and-kisses-youth-graphic-hoodie/-/A-1001551995",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-loot-drop-party-llama-pull-over-hoodie/-/A-91644970",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-neon-mickey-pull-over-hoodie/-/A-85437728",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-red-logo-youth-boys-black-hoodie/-/A-89097549",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-drip-logo-pull-over-hoodie/-/A-85830797",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-fleece-pullover-hoodie-little-kid/-/A-87219338",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-durr-burger-logo-pull-over-hoodie/-/A-90954262",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-boys-creeper-face-graphic-print-kids-hoodie/-/A-1001924731",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-grogu-way-pull-over-hoodie/-/A-1001091398",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-big-hero-6-hello-i-am-baymax-pull-over-hoodie/-/A-87572848",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-groot-st-patrick-s-day-get-your-green-on-pull-over-hoodie/-/A-85873360",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-enderman-boy-s-long-sleeve-cosplay-zip-up-hoodie/-/A-1000881654",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-character-group-colored-pull-over-hoodie/-/A-87422222",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-sunburst-stratocaster-pull-over-hoodie/-/A-86339451",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-diamond-miner-pull-over-hoodie/-/A-83875698",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-steve-create-explore-survive-pull-over-hoodie/-/A-83875566",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/defenders-of-earth-justice-league-youth-boys-athletic-gray-hoodie/-/A-85731623",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-cute-jigglypuff-pull-over-hoodie/-/A-87422290",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-hero-icon-clover-pull-over-hoodie/-/A-85872260",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lankybox-characters-youth-royal-blue-long-sleeve-hoodie/-/A-1001337528",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragonball-z-goku-riding-a-cloud-with-circle-background-and-title-logo-youth-royal-blue-graphic-hoodie/-/A-88043104",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-youth-graphic-hoodie/-/A-1001709845",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-but-first-hunny-pull-over-hoodie/-/A-85645948",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-floral-hogwarts-crest-pull-over-hoodie/-/A-90482867",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-pride-land-characters-pull-over-hoodie/-/A-85753767",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-and-shaggy-youth-black-graphic-hoodie/-/A-84810306",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-neon-magic-pull-over-hoodie/-/A-85832344",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-graffiti-creeper-pull-over-hoodie/-/A-83875795",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-bros-1985-box-art-pull-over-hoodie/-/A-87422459",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-raven-logo-pull-over-hoodie/-/A-90924216",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-stance-distressed-pull-over-hoodie/-/A-85436797",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bluey-mom-dad-bingo-fleece-hoodie-little-kid-to-big-kid/-/A-89675031",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-character-logo-youth-royal-blue-long-sleeve-hoodie/-/A-1001337536",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-alice-and-the-talking-flowers-pull-over-hoodie/-/A-85633296",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-simpsons-skeleton-bart-and-lisa-pull-over-hoodie/-/A-90376581",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-halloween-zombie-scene-pull-over-hoodie/-/A-89918529",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-portrait-pull-over-hoodie/-/A-85435634",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-plankton-squidward-spongebob-squarepants-fleece-pullover-hoodie-little-kid-to-big-kid/-/A-88163671",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-slyttherin-ravenclaw-hufflepuff-fleece-pullover-hoodie-toddler-to-big-kid/-/A-85041649",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-100-retro-steamboat-willie-pull-over-hoodie/-/A-1001000578",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-minnie-date-night-pull-over-hoodie/-/A-85439332",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-not-today-pull-over-hoodie/-/A-85824235",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-quidditch-ravenclaw-team-crest-pull-over-hoodie/-/A-87698598",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-legends-poster-pull-over-hoodie/-/A-1001937273",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-periodic-table-of-favorite-heroes-pull-over-hoodie/-/A-84177636",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/rabble-gender-neutral-interchangeable-velcro-patch-hoodie/-/A-1001626001",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dc-gotham-knights-character-group-symbols-distorted-boxes-youth-boys-black-hoodie/-/A-84810107",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pinocchio-let-your-conscience-be-your-guide-pull-over-hoodie/-/A-85646076",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-boba-fett-fleece-pullover-hoodie-little-kid-to-big-kid/-/A-87296129",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-pikachu-sitting-portrait-pull-over-hoodie/-/A-89828750",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nerf-vintage-logo-pull-over-hoodie/-/A-87692958",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-hei-hei-boat-snack-pull-over-hoodie/-/A-84207862",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-peanuts-woodstock-snoopy-fleece-pullover-hoodie-little-kid-to-big-kid/-/A-88248069",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-raven-victory-royale-pull-over-hoodie/-/A-90924194",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-glow-icon-pull-over-hoodie/-/A-1001092422",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/acdc-logo-boy-s-black-graphic-hoodie/-/A-86393372",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-logo-filled-with-hearts-pull-over-hoodie/-/A-85760680",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-bulbasaur-squirtle-and-charmander-good-vibes-pull-over-hoodie/-/A-87422228",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-hero-four-leaf-clover-pull-over-hoodie/-/A-85872045",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-the-whole-family-pull-over-hoodie/-/A-85823858",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-enderman-pull-over-hoodie/-/A-83875682",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-eeveelutions-pull-over-hoodie/-/A-87422285",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-checkers-pull-over-hoodie/-/A-85435438",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-tmnt-ninja-turtles-little-boys-half-zip-fleece-pullover-hoodie-green/-/A-85220004",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-mouse-camo-bow-pull-over-hoodie/-/A-85436681",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-winnie-the-pooh-fleece-cosplay-pullover-hoodie-little-kid-to-big-kid/-/A-89300120",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-out-of-this-world-pull-over-hoodie/-/A-86335790",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-goofy-wave-pull-over-hoodie/-/A-85438886",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-spongebob-squarepants-yasss-cheer-pull-over-hoodie/-/A-87693855",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-tigger-colorful-script-pull-over-hoodie/-/A-85753061",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-ugly-christmas-mario-pull-over-hoodie/-/A-81949138",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-krypto-super-dog-pull-over-hoodie/-/A-87424547",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-splatoon-inkling-squid-pull-over-hoodie/-/A-84177302",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-halloween-trick-or-treat-pikachu-pull-over-hoodie/-/A-89632097",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-triple-fret-logo-pull-over-hoodie/-/A-86337236",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-link-sword-pull-over-hoodie/-/A-93074604",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-how-are-you-feeling-pull-over-hoodie/-/A-87238668",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-tmnt-leonardo-michelangelo-donatello-raphael-fleece-pullover-hoodie-toddler-to-big-kid/-/A-87643351",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-i-am-groot-cute-smiling-groot-face-pull-over-hoodie/-/A-1000140845",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-mouse-love-pull-over-hoodie/-/A-85436222",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-panels-pull-over-hoodie/-/A-85436904",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-spirit-tracks-link-pull-over-hoodie/-/A-84207972",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-emoji-space-logo-equation-pull-over-hoodie/-/A-84177616",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-football-game-day-youth-graphic-hoodie/-/A-1001823536",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-friends-pictures-pull-over-hoodie/-/A-85438234",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-foxy-and-foxy-silhouette-youth-black-graphic-hoodie/-/A-89522825",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-retro-logo-pull-over-hoodie/-/A-85830491",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-jaws-amity-island-surfboard-repair-pull-over-hoodie/-/A-86195076",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-victory-royale-gold-script-pull-over-hoodie/-/A-91644625",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-rainbow-smash-large-pull-over-hoodie/-/A-91646095",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ochaco-deku-youth-black-hoodie/-/A-85295508",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-you-are-the-maverick-to-my-goose-pull-over-hoodie/-/A-87100474",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-i-m-buzz-lightyear-i-m-always-sure-pull-over-hoodie/-/A-87587292",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-be-kind-to-our-planet-pull-over-hoodie/-/A-85438011",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-mandalorian-bounty-hunter-shadow-pull-over-hoodie/-/A-79806926",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-experiment-626-i-don-t-do-mornings-pull-over-hoodie/-/A-87238562",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-just-a-kid-who-loves-hunting-pull-over-hoodie/-/A-91644000",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-group-shot-pull-over-hoodie/-/A-83875672",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-a-new-hope-stormtrooper-camouflage-pull-over-hoodie/-/A-1001939474",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-zelda-breath-of-the-wild-eye-pull-over-hoodie/-/A-82372311",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-st-patrick-s-day-lucky-yoshi-retro-pull-over-hoodie/-/A-85886439",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-widow-hourglass-silhouette-pull-over-hoodie/-/A-82362902",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/pj-masks-catboy-fleece-half-zip-hoodie-little-kid/-/A-87974577",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-snack-time-youth-heather-gray-graphic-hoodie/-/A-89002137",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-isabela-portrait-magical-floral-powers-pull-over-hoodie/-/A-86104729",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-hanging-with-ducks-pull-over-hoodie/-/A-90846169",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-meowscles-pancakes-pull-over-hoodie/-/A-90951962",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-ravenclaw-motto-pull-over-hoodie/-/A-1001414730",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-classic-logo-pull-over-hoodie/-/A-86338726",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-minecraft-boy-s-minecraft-world-steve-creeper-wolf-pullover-hooded-hoodie/-/A-1001924757",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hogwarts-houses-vintage-collage-pull-over-hoodie/-/A-83440596",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-legends-creeper-pull-over-hoodie/-/A-1001937279",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-not-today-floral-circle-pull-over-hoodie/-/A-93127092",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-neon-gradient-pull-over-hoodie/-/A-85438214",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-eeyore-100-acre-woods-jersey-pull-over-hoodie/-/A-85645881",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-duchess-and-thomas-love-in-paris-pull-over-hoodie/-/A-85554577",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-all-might-vs-all-for-one-youth-black-graphic-hoodie/-/A-84810529",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/godzilla-classic-god-art-youth-boy-s-royal-blue-hoodie/-/A-85874279",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-retro-hakuna-matata-dance-pull-over-hoodie/-/A-85752987",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-bulbasaur-wink-face-pull-over-hoodie/-/A-87422306",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-minnie-heart-silhouette-pull-over-hoodie/-/A-85761389",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-triforce-embroidery-print-pull-over-hoodie/-/A-93074347",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-rainbow-smash-console-pull-over-hoodie/-/A-90952463",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-donkey-kong-arcade-pull-over-hoodie/-/A-84207951",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-smiling-piglet-sketch-portrait-pull-over-hoodie/-/A-85645891",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-magical-traveler-silhouette-pull-over-hoodie/-/A-84207947",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-white-sanctum-sanctorum-logo-pull-over-hoodie/-/A-85830558",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-incredible-hulk-jump-smash-pull-over-hoodie/-/A-82362219",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bluey-bingo-fleece-half-zip-hoodie-toddler-to-big-kid/-/A-85001195",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-scar-surrounded-by-idiots-sunset-pull-over-hoodie/-/A-84207935",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-the-lovers-mickey-and-minnie-pull-over-hoodie/-/A-85760587",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-lucky-stack-pull-over-hoodie/-/A-85761010",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/heroes-black-graphic-justice-league-youth-hoodie/-/A-84809862",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-kro-pastel-pull-over-hoodie/-/A-85012928",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-modern-logo-pull-over-hoodie/-/A-1000141189",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-headshot-pull-over-hoodie/-/A-85439113",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-clone-wars-square-group-photos-pull-over-hoodie/-/A-84177088",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-chewie-valentine-heart-pull-over-hoodie/-/A-85778992",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-piglet-pocket-sketch-pull-over-hoodie/-/A-85752840",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-clone-wars-yoda-epic-are-my-jedi-skills-pull-over-hoodie/-/A-84207805",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dinosaurs-long-sleeve-boy-s-blue-oversized-wearable-hoodie-blanket/-/A-1000513543",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-bear-in-flight-with-red-balloon-pull-over-hoodie/-/A-85645845",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-genie-unleash-the-power-pull-over-hoodie/-/A-84177488",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-aviator-sunglasses-logo-pull-over-hoodie/-/A-87100491",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-donald-pluto-goofy-pull-over-hoodie/-/A-85438508",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-eevee-face-pull-over-hoodie/-/A-87422256",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-retro-distressed-buzz-and-sox-pull-over-hoodie/-/A-87586944",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-triple-trouble-pull-over-hoodie/-/A-89052135",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-polka-dot-minnie-pull-over-hoodie/-/A-85438219",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-checkers-pull-over-hoodie/-/A-85435428",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-stranger-things-hellfire-club-costume-pull-over-hoodie/-/A-87115452",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-group-gold-badge-pull-over-hoodie/-/A-85011941",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-yellow-white-and-blue-script-pull-over-hoodie/-/A-85753869",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-gaaro-versus-naruto-youth-black-hoodie/-/A-89764602",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-floral-outline-silhouette-pull-over-hoodie/-/A-85438084",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-main-character-grid-youth-athletic-gray-graphic-hoodie/-/A-84809455",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-new-stormtrooper-profile-pull-over-hoodie/-/A-79806991",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-minimalist-name-pull-over-hoodie/-/A-85436705",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-book-of-boba-fett-challenge-accepted-this-is-the-way-pull-over-hoodie/-/A-85911718",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-main-characters-and-monsters-youth-royal-blue-graphic-hoodie/-/A-84809305",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-fighter-jet-logo-pull-over-hoodie/-/A-87100769",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-r2-d2-schematics-pull-over-hoodie/-/A-81525983",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-chrome-logo-pull-over-hoodie/-/A-86336199",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-naruto-shippuden-anime-cartoon-royal-blue-hoodie/-/A-84810026",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-tie-dye-mickey-pull-over-hoodie/-/A-85436872",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-friends-cropped-portraits-pull-over-hoodie/-/A-85439174",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-pullover-hoodie-pockets/-/A-85037372",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-little-boys-fleece-half-zip-pullover-hoodie-grey-black/-/A-85046970",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-hockey-player-sketch-pull-over-hoodie/-/A-90896000",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-dog-family-in-squares-pull-over-hoodie/-/A-85637052",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-survival-mode-sketch-pull-over-hoodie/-/A-83875632",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-halloween-pikachu-candy-bag-pull-over-hoodie/-/A-89632245",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-phastos-pull-over-hoodie/-/A-85010814",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-traditional-minnie-pull-over-hoodie/-/A-85436110",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/jurassic-world-dinosaur-t-rex-fleece-pullover-hoodie/-/A-87974673",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-baseball-player-pull-over-hoodie/-/A-85436642",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-trust-moving-company-pull-over-hoodie/-/A-85281817",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ac-dc-74-jailbreak-album-cover-youth-heather-gray-graphic-hoodie/-/A-88861508",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-cartoon-scooby-shaggy-ruh-roh-youth-boys-black-hoodie/-/A-84809488",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-mario-circle-icon-pull-over-hoodie/-/A-84177436",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-wizard-and-owl-pull-over-hoodie/-/A-87910196",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-rainbow-smash-cone-logo-pull-over-hoodie/-/A-90952357",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-youth-hoodie-and-sweatpant-set/-/A-90273759",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-american-flag-aviator-sunglasses-logo-pull-over-hoodie/-/A-86117876",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-black-silhouette-hakuna-matata-pull-over-hoodie/-/A-85646344",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-splatoon-stay-fresh-splatter-pull-over-hoodie/-/A-93074456",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-100-acre-woods-map-pull-over-hoodie/-/A-85646084",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-cheshire-cat-we-re-all-mad-here-colorful-pull-over-hoodie/-/A-85824297",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-purple-arrow-icon-pull-over-hoodie/-/A-85280789",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-fleece-half-zip-hoodie-little-kid-to-big-kid/-/A-89727565",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-rainbow-cheshire-pull-over-hoodie/-/A-87810953",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-friends-grid-pull-over-hoodie/-/A-85438958",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hogwarts-alumni-ravenclaw-pull-over-hoodie/-/A-83440861",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-best-friends-pull-over-hoodie/-/A-85752775",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-guard-comic-cover-pull-over-hoodie/-/A-84207770",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-piglet-bring-on-the-sunshine-pull-over-hoodie/-/A-85645908",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-bb-9e-retro-pop-pull-over-hoodie/-/A-84207688",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-colorful-logo-pull-over-hoodie/-/A-87287264",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-pocket-surfer-pull-over-hoodie/-/A-85436856",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-negative-ghost-rider-the-pattern-is-full-pull-over-hoodie/-/A-87100831",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-because-i-was-inverted-pull-over-hoodie/-/A-87100461",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-power-of-sith-trooper-pull-over-hoodie/-/A-84210100",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-mech-suit-birthday-pull-over-hoodie/-/A-87570014",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hogwarts-illuminating-moon-pull-over-hoodie/-/A-87698663",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-plaid-silhouette-pull-over-hoodie/-/A-85435978",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-evil-pumpkin-face-pull-over-hoodie/-/A-84264695",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-chewie-copilot-pull-over-hoodie/-/A-84210012",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-cultivate-kindness-pull-over-hoodie/-/A-87286511",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-pluto-smile-with-santa-hat-pull-over-hoodie/-/A-85764041",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-the-perfect-pair-heart-pull-over-hoodie/-/A-85753159",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-soccer-star-pull-over-hoodie/-/A-85761074",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-bouncing-smiling-tigger-pull-over-hoodie/-/A-85646006",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-hang-loose-kauai-hawaii-pull-over-hoodie/-/A-87238009",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-favorites-pull-over-hoodie/-/A-82358109",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-boom-pull-over-hoodie/-/A-83875599",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-silver-logo-pull-over-hoodie/-/A-87759344",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-good-and-evil-pull-over-hoodie/-/A-81525987",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-i-do-nothing-everyday-pull-over-hoodie/-/A-85754027",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-pocket-sketch-thumper-pull-over-hoodie/-/A-86126829",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-ohana-and-a-kiss-pull-over-hoodie/-/A-85823812",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-name-stack-distressed-pull-over-hoodie/-/A-85435331",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-mandalorian-trading-card-pull-over-hoodie/-/A-82158659",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-ugly-christmas-mario-and-bowser-pull-over-hoodie/-/A-81949636",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-incredibles-2-ugly-christmas-family-pull-over-hoodie/-/A-81883575",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-sox-outline-pull-over-hoodie/-/A-87587105",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dc-batman-superhero-neon-logo-youth-boys-black-hoodie/-/A-85332866",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-halloween-pikachu-magic-wand-pull-over-hoodie/-/A-89632560",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-scar-i-m-surrounded-by-idiots-pull-over-hoodie/-/A-85646408",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-you-re-despicable-daffy-duck-youth-royal-blue-graphic-hoodie/-/A-89002290",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-scarlet-witch-pull-over-hoodie/-/A-85831801",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nerf-classic-logo-pull-over-hoodie/-/A-87692977",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-resistance-favorite-characters-pull-over-hoodie/-/A-84207727",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-house-mascots-pull-over-hoodie/-/A-87698456",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-holiday-arrow-pull-over-hoodie/-/A-85281227",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-christmas-cateye-pull-over-hoodie/-/A-85280898",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-mandalorian-seek-destroy-stamp-pull-over-hoodie/-/A-82158008",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-a-christmas-story-kids-i-triple-dog-dare-ya-youth-black-graphic-hoodie/-/A-87944898",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-hakuna-matata-jungle-trio-pull-over-hoodie/-/A-85753915",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-oh-bother-pull-over-hoodie/-/A-85753786",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-avengers-logo-pull-over-hoodie/-/A-85832435",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-clone-wars-yoda-size-matters-not-pull-over-hoodie/-/A-84177075",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-movie-logo-black-pull-over-hoodie/-/A-89018684",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-halloween-evil-jack-o-lantern-pull-over-hoodie/-/A-89918480",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-halloween-death-star-drip-pull-over-hoodie/-/A-84089745",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lord-of-the-rings-fellowship-of-the-ring-close-up-ring-pull-over-hoodie/-/A-88118948",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-simple-minnie-pull-over-hoodie/-/A-85438705",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-the-gangs-together-for-holiday-pull-over-hoodie/-/A-87433736",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-chilling-youth-royal-blue-graphic-hoodie/-/A-89387701",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-since-1946-retro-poster-pull-over-hoodie/-/A-86339548",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-hogwarts-legacy-small-art-deco-logo-pull-over-hoodie/-/A-88403951",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-dark-side-halloween-pull-over-hoodie/-/A-87417055",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-fleece-half-zip-hoodie-toddler-to-big-kid/-/A-87246031",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-pump-up-the-volume-pull-over-hoodie/-/A-85436181",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-large-lightning-bolt-stamp-pull-over-hoodie/-/A-89051976",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/be-looney-youth-boys-looney-tunes-cartoon-characters-black-hoodie/-/A-84809212",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-ugly-christmas-mario-coin-pull-over-hoodie/-/A-81948761",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-mouse-starry-bow-pull-over-hoodie/-/A-85761511",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-circle-halo-pull-over-hoodie/-/A-82156801",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-cap-shield-pull-over-hoodie/-/A-87569980",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-classic-yoda-man-pull-over-hoodie/-/A-84210204",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tonka-tough-like-dad-pull-over-hoodie/-/A-86500040",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-california-group-pull-over-hoodie/-/A-85437311",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/pink-floyd-division-bell-adult-black-hoodie/-/A-90274297",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-cartoon-color-block-bugs-bunny-youth-boys-heather-grey-hoodie/-/A-84809945",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-boy-s-full-zip-plush-3d-face-costume-look-a-like-hoodie/-/A-87837395",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/nerf-shapes-youth-black-hoodie/-/A-90370417",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-character-and-logo-youth-black-hoodie/-/A-84810418",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-character-square-pull-over-hoodie/-/A-85435900",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-halloween-fun-size-candy-pull-over-hoodie/-/A-84265330",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-mandalorian-follow-the-candy-pull-over-hoodie/-/A-87416798",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-candy-corn-helmet-pull-over-hoodie/-/A-87417100",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-classic-logo-youth-athletic-gray-graphic-hoodie/-/A-84809510",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-hulkbuster-pull-over-hoodie/-/A-87570080",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-bb-8-rebel-emblem-pull-over-hoodie/-/A-84207748",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-clone-wars-group-shot-box-up-pull-over-hoodie/-/A-84207795",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-sox-portrait-pull-over-hoodie/-/A-87587148",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-rampaging-gargantos-pull-over-hoodie/-/A-85832172",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-mirabel-in-nature-floral-and-butterflies-pull-over-hoodie/-/A-87287930",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-original-grump-pull-over-hoodie/-/A-85435813",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-movie-poster-pull-over-hoodie/-/A-85012166",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/nasa-explore-wordplay-w-nasa-logo-athletic-heather-youth-hoodie/-/A-84810609",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-friend-hugs-pull-over-hoodie/-/A-85753579",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-distressed-sitting-minnie-pull-over-hoodie/-/A-85438458",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-anime-cartoon-characters-youth-boys-grey-hoodie/-/A-84809876",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/trinity-in-red-circle-justice-league-youth-boys-royal-blue-hoodie/-/A-85731317",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-arishem-the-judge-poster-pull-over-hoodie/-/A-85011334",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-love-and-thunder-distressed-main-characters-pull-over-hoodie/-/A-87574009",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-widow-vintage-pose-pull-over-hoodie/-/A-84177396",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-scooby-doo-puppy-circle-pull-over-hoodie/-/A-84210186",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-paisley-silhouette-pull-over-hoodie/-/A-85760709",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-retro-shamrock-pride-pull-over-hoodie/-/A-85763911",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-54-stratocaster-pull-over-hoodie/-/A-86333779",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-80s-genie-pull-over-hoodie/-/A-87529300",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-santa-s-cool-list-pull-over-hoodie/-/A-89917761",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-wanda-and-strange-glitch-pull-over-hoodie/-/A-85831581",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-team-sesame-street-1969-count-von-count-youth-black-hoodie/-/A-89765101",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-merry-catmas-pull-over-hoodie/-/A-85446360",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-chin-up-halloween-jack-o-lantern-face-pull-over-hoodie/-/A-84265385",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-telecaster-logo-pull-over-hoodie/-/A-86333040",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-jaws-shark-blueprint-pull-over-hoodie/-/A-86195208",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-darth-vader-wreckin-with-pull-over-hoodie/-/A-84210199",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pokemon-halloween-jack-o-lantern-pikachu-pull-over-hoodie/-/A-89632375",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-mwahaha-halloween-horror-pull-over-hoodie/-/A-87257305",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-large-portrait-pull-over-hoodie/-/A-85438293",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-mufasa-stripe-profile-pull-over-hoodie/-/A-85646424",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-not-afraid-to-use-dark-side-pull-over-hoodie/-/A-84184244",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-neon-palm-trees-silhouette-pull-over-hoodie/-/A-85436431",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-team-sesame-street-1969-cookie-monster-mvp-youth-heather-gray-hoodie/-/A-89765328",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-minnie-vintage-couple-pull-over-hoodie/-/A-85439352",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-antonio-wild-child-pull-over-hoodie/-/A-87287463",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-stranger-things-four-friends-rift-apocalypse-poster-pull-over-hoodie/-/A-86778555",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-icons-crest-pull-over-hoodie/-/A-89880486",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-fall-minnie-pull-over-hoodie/-/A-85761429",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-aviator-sunglasses-reflection-logo-pull-over-hoodie/-/A-87100467",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-arishem-the-judge-pull-over-hoodie/-/A-85012798",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-stranger-things-caution-creel-house-rift-poster-pull-over-hoodie/-/A-86778544",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-eeyore-not-a-morning-person-pull-over-hoodie/-/A-85645969",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-not-all-there-cheshire-cat-pull-over-hoodie/-/A-85633111",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-book-of-boba-fett-tusken-raiders-and-boba-bounty-hunters-pull-over-hoodie/-/A-85688882",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-tongue-out-pull-over-hoodie/-/A-85437013",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-retro-knights-of-ren-pull-over-hoodie/-/A-84209994",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-hierographic-superhero-profile-sketch-pull-over-hoodie/-/A-86120052",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-costume-pull-over-hoodie/-/A-85437203",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-dark-side-of-the-force-pull-over-hoodie/-/A-84210257",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-multiverse-chronobowl-pull-over-hoodie/-/A-89052377",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-she-hulk-attorney-at-law-flex-icon-outline-pull-over-hoodie/-/A-87384743",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-classic-pride-lands-pull-over-hoodie/-/A-85753510",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-animal-print-silhouette-pull-over-hoodie/-/A-85436410",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-never-forget-who-you-are-pull-over-hoodie/-/A-85752571",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-artistic-red-white-graffiti-pull-over-hoodie/-/A-85667479",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-powered-pack-poster-pull-over-hoodie/-/A-87422914",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-buggs-bunny-little-boys-fleece-fashion-pullover-hoodie-blue-6/-/A-88296706",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-a-christmas-story-oh-fudge-ralphie-with-soap-in-mouth-youth-heather-gray-graphic-hoodie/-/A-87944980",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-mighty-lucky-thor-pull-over-hoodie/-/A-82188063",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-widow-taskmaster-costume-pull-over-hoodie/-/A-81494760",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/plushible-sesame-street-oscar-the-grouch-kids-snugible-blanket-hoodie-pillow/-/A-90961194",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-happy-tail-pluto-holiday-pull-over-hoodie/-/A-85752530",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/plushible-sesame-street-cookie-monster-kids-snugible-blanket-hoodie-pillow/-/A-90961191",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-radical-pull-over-hoodie/-/A-85437297",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-clone-wars-yoda-big-face-pull-over-hoodie/-/A-84177238",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-black-widow-my-lucky-shirt-pull-over-hoodie/-/A-85874446",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-halloween-not-the-treats-pull-over-hoodie/-/A-84090284",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-adventure-poster-pull-over-hoodie/-/A-85753581",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-executioner-stormtrooper-pull-over-hoodie/-/A-79806979",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mtv-christmas-logo-snowman-pull-over-hoodie/-/A-81950693",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-minne-retro-circle-pull-over-hoodie/-/A-85437112",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-scooby-doo-puppy-frame-pull-over-hoodie/-/A-82364969",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-ghoulactic-halloween-stormtrooper-pull-over-hoodie/-/A-84089754",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-mandalorian-character-collage-pull-over-hoodie/-/A-79806923",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-signature-pull-over-hoodie/-/A-85436934",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ant-man-and-the-wasp-quantumania-movie-logo-white-pull-over-hoodie/-/A-89016701",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-green-gargantos-pull-over-hoodie/-/A-85832408",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-tropical-flower-silhouette-pull-over-hoodie/-/A-85436657",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-gifts-and-arrows-pull-over-hoodie/-/A-85282043",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-botanical-silhouette-pull-over-hoodie/-/A-85437675",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-clone-wars-jedi-padawan-ahsoka-portrait-pull-over-hoodie/-/A-84207655",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-ready-for-action-pull-over-hoodie/-/A-85667516",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-russian-hawkeye-logo-pull-over-hoodie/-/A-85281282",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-clone-wars-jedi-vs-sith-pull-over-hoodie/-/A-84207601",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-long-live-the-king-sketch-pull-over-hoodie/-/A-85752815",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-daddy-s-little-hunting-buddy-pull-over-hoodie/-/A-91644041",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-bold-youth-graphic-hoodie/-/A-1002277094",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-choose-happy-smiley-face-youth-hoodie/-/A-1003380720",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-black-official-logo-pull-over-hoodie/-/A-89051671",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-just-happy-to-be-here-youth-hoodie/-/A-1003380342",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/fit-as-a-fiddle-violin-youth-long-sleeve-hoodie/-/A-93695906",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-i-love-you-words-youth-graphic-hoodie/-/A-1001709767",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-witch-in-training-pull-over-hoodie/-/A-90482672",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-clover-silhouette-pull-over-hoodie/-/A-85760630",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-gulf-of-mexico-surfer-youth-long-sleee-hoodie/-/A-1002590753",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-leprechaun-pull-over-hoodie/-/A-85761368",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-clover-distressed-youth-graphic-hoodie/-/A-1001890500",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-i-can-t-be-bothered-says-absolem-pull-over-hoodie/-/A-85633190",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-fishing-bold-logo-pull-over-hoodie/-/A-91644965",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-charmer-clover-youth-graphic-hoodie/-/A-1001890556",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-comic-style-art-youth-black-graphic-hoodie/-/A-90274678",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-usagi-yojimbo-and-mariko-youth-black-graphic-hoodie/-/A-91071131",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-bee-the-change-youth-hoodie/-/A-1003380471",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hippity-hoppity-stacked-youth-hoodie/-/A-1003380109",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-pool-floats-youth-hoodie/-/A-1003380123",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-decorative-noble-simba-pull-over-hoodie/-/A-85645883",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-waving-half-tone-style-youth-boys-athletic-gray-hoodie/-/A-92947031",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/padel-tennis-racket-rhapsody-youth-long-sleeve-hoodie/-/A-93696125",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-retro-strange-pull-over-hoodie/-/A-85832444",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-grumpy-bear-new-year-same-hot-mess-pull-over-hoodie/-/A-91914938",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-black-logo-pull-over-hoodie/-/A-85281644",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-black-and-white-logo-pull-over-hoodie/-/A-85280771",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-raven-float-on-pull-over-hoodie/-/A-90923817",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-white-lightning-bolt-stamp-pull-over-hoodie/-/A-89052112",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-classic-emblem-youth-black-graphic-hoodie/-/A-84810616",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-chill-out-airbrushed-pull-over-hoodie/-/A-85439101",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-any-road-will-take-you-there-the-white-rabbit-pull-over-hoodie/-/A-85633349",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-dc-comic-book-batman-line-art-heather-grey-hoodie/-/A-84809314",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-mask-cutout-pull-over-hoodie/-/A-86119943",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-proven-naughty-pull-over-hoodie/-/A-89917521",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-marvel-st-patrick-s-day-this-is-my-lucky-shirt-pull-over-hoodie/-/A-87587611",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-sith-trooper-schematic-villain-pull-over-hoodie/-/A-84210122",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/national-lampoon-s-christmas-vacation-merry-christmas-and-to-all-a-good-night-youth-black-graphic-hoodie/-/A-87944903",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-activate-group-panels-pull-over-hoodie/-/A-87423973",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/flash-running-youth-boy-s-royal-blue-hoodie/-/A-86196084",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-hulk-incredibly-lucky-clover-pull-over-hoodie/-/A-82186536",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-clone-wars-lightsaber-duel-pull-over-hoodie/-/A-84207678",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-lucky-clover-youth-graphic-hoodie/-/A-1001890623",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-my-mom-is-my-hero-cartoon-heroes-pull-over-hoodie/-/A-91343907",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-sand-land-hoodie-yellow-and-black-sheriff-rao-poster-design-on-black/-/A-1005197469",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-here-he-comes-our-ultraman-youth-black-hoodie/-/A-89244239",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-what-would-wednesday-do-pull-over-hoodie/-/A-89880483",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-four-leaf-clover-fill-pull-over-hoodie/-/A-85764024",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/short-n-sweet-boy-s-long-sleeve-hoodie/-/A-1002508488",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-tropical-floral-logo-pull-over-hoodie/-/A-86337843",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boys-nintendo-legend-of-zelda-triforce-fade-lightweight-hoodie/-/A-1002992911",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-vibrate-your-molecules-pull-over-hoodie/-/A-89053082",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/grillin-and-chillin-like-a-football-villain-youth-long-sleeve-hoodie/-/A-93696289",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/elf-movie-big-title-logo-and-characters-youth-black-graphic-hoodie/-/A-87944886",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-bishop-security-pull-over-hoodie/-/A-85281805",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/trinity-basic-colors-justice-league-youth-boys-athletic-gray-hoodie/-/A-85731340",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-darth-vader-st-patrick-s-day-your-lack-of-green-disturbing-pull-over-hoodie/-/A-85894815",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-a-new-hope-millennium-falcon-logo-pull-over-hoodie/-/A-1001938769",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-gradient-seal-pull-over-hoodie/-/A-85831430",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-love-typewriter-youth-graphic-hoodie/-/A-1001709720",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/go-sports-but-where-s-the-food-youth-long-sleeve-hoodie/-/A-93696405",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/all-buff-no-fluff-gym-rat-youth-long-sleeve-hoodie/-/A-93698279",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-keep-phasing-pull-over-hoodie/-/A-89052491",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-halloween-ghoulactic-haunted-house-pull-over-hoodie/-/A-84091190",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-bb-9e-flames-pull-over-hoodie/-/A-84207686",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-batman-bat-tech-youth-boys-black-hoodie/-/A-85886182",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-this-is-my-lucky-shirt-pull-over-hoodie/-/A-85761103",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-skater-santa-claus-pull-over-hoodie/-/A-89917569",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-land-before-time-retro-great-valley-pull-over-hoodie/-/A-84177318",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/teddy-hugs-youth-long-sleeve-hoodie/-/A-1001313597",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-boba-fett-birthday-kid-pull-over-hoodie/-/A-92232112",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-mandala-silhouette-pull-over-hoodie/-/A-85438787",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-mob-pull-over-hoodie/-/A-83875634",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-arched-varsity-youth-hoodie/-/A-1003380568",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-game-day-youth-graphic-hoodie/-/A-1001831880",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-superman-hoodie-superhero-man-of-steel-dc-comics-superpowers-crypto-s-fly-on-royal/-/A-1005197443",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/gamer-get-a-life-youth-long-sleeve-hoodie/-/A-1002523005",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-looney-tunes-classic-cartoon-bugs-bunny-blue-graphic-hoodie/-/A-84809427",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/family-is-a-gift-youth-long-sleeve-hoodie/-/A-1000883547",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-mystery-gang-doodle-youth-black-graphic-hoodie/-/A-89386799",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-alphabet-i-love-you-youth-graphic-hoodie/-/A-1001552114",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-peter-pan-st-patrick-s-day-pinch-proof-tinkerbell-pull-over-hoodie/-/A-85887589",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/perfect-spirals-flaming-football-youth-long-sleeve-hoodie/-/A-93696231",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-hogwarts-legacy-the-graphorn-logo-pull-over-hoodie/-/A-88403996",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-modern-character-group-black-hoodie/-/A-84809393",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-speedster-silhouette-pull-over-hoodie/-/A-89053679",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-arched-distressed-youth-graphic-hoodie/-/A-1002277047",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/keep-calm-and-respawn-controller-youth-long-sleeve-hoodie/-/A-93561183",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-icee-bear-halloween-scare-pull-over-hoodie/-/A-85931482",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-superman-core-vintage-invincible-youth-black-graphic-hoodie/-/A-88451511",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-happy-go-lucky-shamrock-youth-hoodie/-/A-1003380745",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/coolest-turkey-in-town-youth-long-sleeve-hoodie/-/A-1000883576",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-trek-the-next-generation-dad-you-are-as-smart-as-data-as-strong-as-worf-as-dependable-as-geordi-as-brave-as-picard-pull-over-hoodie/-/A-87336990",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/rip-gulf-of-mexico-1607-2025-youth-long-sleee-hoodie/-/A-1002590792",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/grill-eat-repeat-football-youth-long-sleeve-hoodie/-/A-93696262",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-triple-gold-logo-pull-over-hoodie/-/A-89053189",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-kate-bishop-and-hawkeye-pull-over-hoodie/-/A-85281705",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-batcycle-in-the-shadows-pull-over-hoodie/-/A-85667395",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-time-travel-logo-pull-over-hoodie/-/A-89052724",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-badge-youth-boy-s-black-hoodie/-/A-86196182",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-fine-electric-instruments-desert-pull-over-hoodie/-/A-86337035",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-iconic-scenes-pull-over-hoodie/-/A-89880130",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-love-a-lot-bear-year-of-the-dragon-pull-over-hoodie/-/A-91915294",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-justice-heroes-logo-pull-over-hoodie/-/A-89053600",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/champion-boys-oversized-graphic-hoodie/-/A-94609772",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-youth-graphic-hoodie/-/A-1001709660",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-mask-and-moon-phases-pull-over-hoodie/-/A-86120584",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/a-leading-role-teletubbies-premium-po-pullover-child-hoodie/-/A-93001272",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-superman-core-vintage-comic-character-art-logo-youth-black-graphic-hoodie/-/A-88451537",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-recover-hoodie/-/A-1002768625",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-pickleball-paddles-crossed-youth-graphic-hoodie/-/A-1002604193",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-supergirl-sky-flight-pull-over-hoodie/-/A-89053699",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-a-new-hope-mother-s-day-mom-runs-galaxy-pull-over-hoodie/-/A-91342989",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/padel-paladin-youth-long-sleeve-hoodie/-/A-93696095",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/gulf-of-mexico-wave-text-youth-long-sleee-hoodie/-/A-1002590834",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/velma-scooby-doo-cartoon-character-jeebies-ville-youth-boys-royal-blue-hoodie/-/A-84809632",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-dc-comic-book-flying-superman-royal-blue-graphic-print-hoodie/-/A-84809978",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/pawsitive-bear-youth-long-sleeve-hoodie/-/A-1000883437",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/batman-retro-joker-boy-s-athletic-heather-gray-graphic-hoodie/-/A-86393299",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-a-very-merry-unbirthday-pull-over-hoodie/-/A-85824110",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-rainbow-frame-pull-over-hoodie/-/A-93074626",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-be-mine-cursive-heart-youth-graphic-hoodie/-/A-1001743130",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mega-man-ice-man-character-youth-black-graphic-hoodie/-/A-90274738",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/christmas-ginger-bread-candy-cane-green-gamer-oversized-wearable-hoodie-blanket/-/A-1000525246",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-red-water-bold-logo-pull-over-hoodie/-/A-91645452",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-kind-turning-smiles-youth-graphic-hoodie/-/A-1002349961",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-distressed-superheroes-team-pull-over-hoodie/-/A-89051758",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-shamrock-truck-youth-graphic-hoodie/-/A-1002225582",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-obi-wan-kenobi-vader-and-kenobi-face-off-pull-over-hoodie/-/A-87586550",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-this-is-my-hunting-shirt-orange-logo-pull-over-hoodie/-/A-91644322",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/butterfly-youth-long-sleeve-hoodie/-/A-1000883544",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-kids-viaje-hoodie/-/A-94053594",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-superman-subject-zero-pull-over-hoodie/-/A-89052930",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/youth-harry-potter-seeker-graphic-w-logo-screen-print-black-hoodie/-/A-84809245",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-widow-bold-hourglass-pull-over-hoodie/-/A-84207944",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-night-animals-pull-over-hoodie/-/A-1001411311",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/teddy-dreams-boy-s-long-sleeve-hoodie/-/A-1002508613",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-super-squad-pull-over-hoodie/-/A-87423272",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-but-first-tacos-outline-youth-hoodie/-/A-1003380736",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-be-mine-distressed-checkered-youth-graphic-hoodie/-/A-1001743127",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-vibes-distressed-youth-graphic-hoodie/-/A-1002225812",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/nerdlucks-youth-royal-blue-hoodie/-/A-85295541",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-rafiki-drawing-pull-over-hoodie/-/A-85753624",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lilo-stitch-groovy-planets-stitch-pull-over-hoodie/-/A-90847624",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-playful-minnie-pull-over-hoodie/-/A-85436990",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-sith-trooper-helmet-pull-over-hoodie/-/A-84210142",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-supreme-leader-snoke-pull-over-hoodie/-/A-84177337",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-the-last-jedi-bb-8-roll-with-it-pull-over-hoodie/-/A-84207586",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-elf-on-the-shelf-plaid-love-pull-over-hoodie/-/A-90200194",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-america-chavez-pull-over-hoodie/-/A-85831657",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-love-clover-youth-graphic-hoodie/-/A-1002225795",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-i-love-you-words-youth-graphic-hoodie/-/A-1001709785",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-shamrock-stormtrooper-pull-over-hoodie/-/A-85894801",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-lucky-clover-youth-graphic-hoodie/-/A-1001890688",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/castore-mclaren-f1-kids-core-essentials-hoodie/-/A-1005138345",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sweets-bunny-with-candy-basket-boy-s-long-sleeve-hoodie/-/A-1002508543",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-porg-and-a-shamrock-pull-over-hoodie/-/A-85895115",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/gulf-of-mexico-black-and-white-wave-youth-long-sleee-hoodie/-/A-1002590637",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-kro-colorful-pull-over-hoodie/-/A-85261810",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/blockbuster-be-kind-rewind-circular-logo-adult-black-hoodie/-/A-90274240",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lost-gods-stay-cool-pull-over-hoodie/-/A-90896293",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-polar-express-believe-train-pull-over-hoodie/-/A-1001940564",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/star-trek-the-original-series-spock-pop-art-youth-heather-gray-graphic-hoodie/-/A-87944889",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/rip-gulf-of-mexico-1607-2025-youth-long-sleee-hoodie/-/A-1002590853",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nintendo-super-mario-tire-pull-over-hoodie/-/A-93074447",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-pineapple-silhouette-pull-over-hoodie/-/A-85438476",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-valentine-s-whale-youth-graphic-hoodie/-/A-1001552178",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-finding-dory-always-a-way-pull-over-hoodie/-/A-87574545",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/touchdown-football-sports-youth-long-sleeve-hoodie/-/A-1002524577",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-hulk-mech-suit-punch-pull-over-hoodie/-/A-87570024",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-youth-graphic-hoodie/-/A-1002350012",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elf-i-m-a-cotton-headed-ninny-muggins-pull-over-hoodie/-/A-1001413528",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-mesh-spacer-hooded-sweatshirt-all-in-motion/-/A-91216416",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Target Brands, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "Target ¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-fleece-hooded-sweatshirt-all-in-motion-8482/-/A-91338684",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Target Brands, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "Target ¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/kids-target-matching-family-sweatshirt-wondershop-red/-/A-92295978",
      tags: "Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Target Brands, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "Target ¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-yes-i-need-all-these-dogs-pull-over-hoodie/-/A-85637062",
      tags: "101 Dalmatians, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-collage-of-dalmatian-family-graphic-long-sleeve-fleece-sweatshirt/-/A-1000822199",
      tags: "101 Dalmatians, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-mommy-s-lil-bestie-graphic-long-sleeve-fleece-sweatshirt/-/A-1000847218",
      tags: "101 Dalmatians, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-friends-fur-life-graphic-long-sleeve-fleece-sweatshirt/-/A-1000847503",
      tags: "101 Dalmatians, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-puppy-dalmatian-love-sweatshirt/-/A-1001936363",
      tags: "101 Dalmatians, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-spring-flowers-graphic-long-sleeve-fleece-sweatshirt/-/A-1000822205",
      tags: "101 Dalmatians, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-brothers-make-the-best-friends-graphic-long-sleeve-fleece-sweatshirt/-/A-1000847381",
      tags: "101 Dalmatians, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-daddy-s-lil-bestie-graphic-long-sleeve-fleece-sweatshirt/-/A-1000847269",
      tags: "101 Dalmatians, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-tic-tac-toe-grid-of-puppies-graphic-long-sleeve-fleece-sweatshirt/-/A-1000822219",
      tags: "101 Dalmatians, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-a-christmas-story-you-ll-shoot-your-eye-out-kid-youth-black-graphic-sweatshirt/-/A-87944812",
      tags: "A Christmas Story, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "A Christmas Story",
      },
    },
    {
      url: "https://www.target.com/p/a-christmas-story-i-can-t-put-my-arms-down-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-90274570",
      tags: "A Christmas Story, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "A Christmas Story",
      },
    },
    {
      url: "https://www.target.com/p/a-christmas-story-oh-fudge-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-90274602",
      tags: "A Christmas Story, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "A Christmas Story",
      },
    },
    {
      url: "https://www.target.com/p/acdc-let-there-be-rock-poster-youth-royal-blue-hoodie/-/A-84810632",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/ac-dc-let-there-be-rock-poster-youth-athletic-gray-hoodie/-/A-84810551",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-boys-black-long-sleeve-hooded-sweatshirt/-/A-1004432438",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-rock-or-bust-long-sleeve-boys-black-hooded-sweatshirt/-/A-88531438",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-angus-young-long-sleeve-black-youth-hooded-sweatshirt/-/A-88814096",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-world-tour-08-09-long-sleeve-black-youth-hooded-sweatshirt/-/A-89765445",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-red-rectangle-logo-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-89245498",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-logo-boombox-background-long-sleeve-youth-black-sweatshirt/-/A-93147720",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-givin-the-dog-a-bone-crew-neck-long-sleeve-boys-black-sweatshirt/-/A-88317478",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-logo-and-angus-young-youth-black-crew-neck-sweatshirt/-/A-89177280",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-logo-youth-black-crew-neck-long-sleeve-sweatshirt/-/A-1001337369",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-money-talks-distressed-graphic-crew-neck-long-sleeve-boy-s-black-sweatshirt/-/A-88317469",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-boys-black-long-sleeve-hooded-sweatshirt/-/A-1004432471",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-boys-black-long-sleeve-hooded-sweatshirt/-/A-1004432466",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-tribal-art-crew-neck-long-sleeve-athletic-heather-boy-s-sweatshirt/-/A-88531439",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-powerage-crew-neck-long-sleeve-boys-black-sweatshirt/-/A-88531449",
      tags: "AC/DC, Boys’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
        brand: "AC/DC",
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
