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
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-1985-box-art-t-shirt/-/A-87422417",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-link-silhouette-t-shirt/-/A-1001414238",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-and-luigi-performance-tee/-/A-87422391",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-favorites-t-shirt/-/A-89288271",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-circle-icon-performance-tee/-/A-84634870",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-color-block-racers-t-shirt/-/A-93074631",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-kart-pixelated-racers-ready-t-shirt/-/A-85170758",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-periodic-table-of-elements-t-shirt/-/A-82362616",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-colorful-character-grid-t-shirt/-/A-87572914",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-big-brother-t-shirt/-/A-79783019",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-character-lineup-t-shirt/-/A-89288189",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-kart-spikey-shell-t-shirt/-/A-85170433",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-kart-everyday-is-game-day-group-shot-t-shirt/-/A-82356388",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-st-patrick-s-day-lucky-luigi-retro-t-shirt/-/A-85886773",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-odyssey-dinosaur-t-shirt/-/A-79783049",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-and-luigi-t-shirt/-/A-79712615",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-circle-icon-t-shirt/-/A-79710689",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-piranha-oh-snap-t-shirt/-/A-1001024544",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-ugly-christmas-luigi-wreath-t-shirt/-/A-81948268",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-kart-determination-t-shirt/-/A-83076144",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-christmas-mario-all-i-want-are-video-games-t-shirt/-/A-81950990",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-big-bro-mario-t-shirt/-/A-85827642",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-tears-of-the-kingdom-glowing-shrine-rune-t-shirt/-/A-89419956",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-splatoon-inkling-heroes-t-shirt/-/A-79710805",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-kart-game-on-t-shirt/-/A-79783086",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-donkey-kong-ladder-faux-pocket-t-shirt/-/A-89288211",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-pixel-cast-with-names-t-shirt/-/A-79711912",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-character-guide-t-shirt/-/A-82362533",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-link-s-awakening-hylian-shield-t-shirt/-/A-82354970",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-hidden-pattern-t-shirt/-/A-1001024549",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-donkey-kong-it-s-on-t-shirt/-/A-79783123",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-animal-crossing-characters-t-shirt/-/A-82366486",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-bros-team-t-shirt/-/A-82370272",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-power-up-bingo-t-shirt/-/A-85155463",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-cartoon-link-t-shirt/-/A-82352618",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-link-s-awakening-hylian-shield-performance-tee/-/A-89598126",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-kart-winner-t-shirt/-/A-79711486",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-epic-gamers-wanted-t-shirt/-/A-89288280",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-majora-s-mask-3d-poster-t-shirt/-/A-93074691",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-triforce-paint-splatter-print-t-shirt/-/A-85088533",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-periodic-table-t-shirt/-/A-82362351",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-luigi-s-mansion-3-poster-t-shirt/-/A-89288195",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-link-s-awakening-switch-logo-performance-tee/-/A-89598009",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-link-silhouette-t-shirt/-/A-82366978",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-classic-n64-t-shirt/-/A-82370714",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-christmas-mario-mustache-for-presents-t-shirt/-/A-81949030",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-retro-boo-ghost-t-shirt/-/A-84088122",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-toadette-peachette-party-t-shirt/-/A-82359579",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-t-shirt/-/A-83978683",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-outta-control-nes-controller-t-shirt/-/A-85389601",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-japanese-t-shirt/-/A-82363466",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-splatoon-spleediddle-splat-t-shirt/-/A-82365901",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-splatoon-choose-your-weapon-t-shirt/-/A-82369112",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-brick-t-shirt/-/A-82368972",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-splatoon-squid-kid-15-t-shirt/-/A-82367238",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-pattern-t-shirt/-/A-85827533",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-nes-duck-hunt-t-shirt/-/A-85088690",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bowser-stripe-t-shirt/-/A-82360048",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-original-donkey-kong-gameplay-t-shirt/-/A-85827660",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-and-bowser-ugly-christmas-sweater-t-shirt/-/A-85446431",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-my-game-is-next-level-t-shirt/-/A-85827686",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-big-bro-t-shirt/-/A-85825871",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-brick-break-85-tie-dye-logo-t-shirt/-/A-79711535",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-christmas-super-mario-mustache-t-shirt/-/A-84867234",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-luigi-lil-bro-t-shirt/-/A-82363722",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-ocarina-of-time-t-shirt/-/A-82373082",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-zelda-sword-in-the-stone-t-shirt/-/A-82366151",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-power-players-t-shirt/-/A-85388607",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-my-heart-belongs-to-link-t-shirt/-/A-85554405",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-jumpman-t-shirt/-/A-85827663",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-animal-crossing-group-shot-panels-t-shirt/-/A-89288312",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-metroid-samus-returns-cover-art-t-shirt/-/A-86377858",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-kirby-flying-portrait-t-shirt/-/A-89420031",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-birthday-super-mario-t-shirt/-/A-1001034272",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-ugly-christmas-super-mario-pixel-t-shirt/-/A-81950700",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-splatoon-inkling-squid-t-shirt/-/A-85025733",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-kart-8-fierce-t-shirt/-/A-82368639",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-luigi-s-mansion-3-logo-t-shirt/-/A-89288165",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-halloween-link-belt-costume-t-shirt/-/A-87422530",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-ugly-christmas-super-mario-happy-holidays-t-shirt/-/A-84867776",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-power-up-t-shirt/-/A-82366755",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-samus-super-metroid-cover-t-shirt/-/A-86375657",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-ugly-christmas-mario-wreath-t-shirt/-/A-81951894",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-ugly-christmas-mario-t-shirt/-/A-81951553",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-spirit-tracks-link-t-shirt/-/A-82372220",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-animal-crossing-new-leaf-panels-t-shirt/-/A-82367456",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-game-on-mario-t-shirt/-/A-82368963",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-luigi-circle-icon-t-shirt/-/A-1001034513",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-donkey-kong-fist-pump-t-shirt/-/A-93074671",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-rainbow-frame-t-shirt/-/A-79782984",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-splatoon-zink-logo-t-shirt/-/A-82363755",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-little-brother-luigi-t-shirt/-/A-82366105",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-schematic-nes-controller-t-shirt/-/A-86375891",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-st-patrick-s-day-extra-life-mushroom-lucky-charm-t-shirt/-/A-85886453",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-animal-crossing-new-horizons-frame-t-shirt/-/A-82374709",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-the-windwaker-character-panels-distressed-t-shirt-black-large/-/A-93074595",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-ugly-christmas-super-mario-t-shirt/-/A-82361599",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-start-logo-t-shirt/-/A-89288128",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-manhole-t-shirt/-/A-85155089",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-metroid-box-art-t-shirt/-/A-85089239",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-tears-of-the-kingdom-blin-tribe-portrait-t-shirt/-/A-89420061",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-yoshi-st-patrick-s-lucky-and-cute-performance-tee/-/A-82185892",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-christmas-tree-mosaic-t-shirt/-/A-81950306",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-yoshi-st-patrick-s-good-luck-charm-t-shirt/-/A-82185379",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-race-flag-t-shirt/-/A-82368736",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-game-master-t-shirt/-/A-82371073",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-luigi-circle-icon-t-shirt/-/A-79710484",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-donkey-kong-arcade-t-shirt/-/A-85132432",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-triforce-paint-splatter-print-t-shirt/-/A-1001034341",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-st-patrick-s-day-pinch-proof-luigi-retro-t-shirt/-/A-85886364",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-link-hero-t-shirt/-/A-86375774",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-watercolor-yoshi-t-shirt/-/A-93074591",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-rainbow-stars-t-shirt/-/A-89288119",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-animal-crossing-new-horizons-periodic-table-of-characters-t-shirt/-/A-89288319",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-splatoon-inkling-squid-t-shirt/-/A-85089327",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-character-nice-list-t-shirt/-/A-87431015",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-always-in-control-controller-distressed-t-shirt/-/A-89288331",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-luigi-back-to-back-t-shirt/-/A-82368169",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-i-m-the-big-bro-t-shirt/-/A-1001034406",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-nope-not-today-t-shirt/-/A-89288301",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-lemmy-costume-t-shirt/-/A-81494940",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-metroid-samus-returns-grid-t-shirt/-/A-82371093",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-metroid-80-s-vibe-t-shirt/-/A-86377882",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-tough-guys-t-shirt/-/A-1001939575",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-triforce-characters-t-shirt/-/A-93074477",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-breath-of-the-wild-portrait-t-shirt/-/A-93074571",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-nes-85-controller-t-shirt/-/A-86377586",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-the-windwaker-link-hyah-t-shirt/-/A-89288225",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-ugly-christmas-mario-wreath-t-shirt/-/A-81951775",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-super-star-t-shirt/-/A-85827648",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-halloween-boo-silhouettes-t-shirt/-/A-87257122",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-u-deluxe-character-poster-t-shirt/-/A-89288161",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-mushroom-t-shirt/-/A-85025758",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-and-luigi-paper-jam-smash-t-shirt/-/A-85827628",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-star-outline-t-shirt/-/A-85827706",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-donkey-kong-wild-one-t-shirt/-/A-82373116",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-st-patrick-s-day-lucky-yoshi-retro-t-shirt/-/A-85886370",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-this-is-my-waluigi-costume-t-shirt/-/A-84808829",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-boo-ghost-t-shirt/-/A-82360976",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-link-s-awakening-switch-logo-t-shirt/-/A-86376752",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-pixel-cast-with-names-t-shirt/-/A-82366053",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-stained-glass-t-shirt/-/A-82351873",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-ugly-christmas-mario-t-shirt/-/A-82364092",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-determination-t-shirt/-/A-79783042",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-keep-calm-i-got-this-controller-t-shirt/-/A-89288325",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-tears-of-the-kingdom-game-poster-t-shirt/-/A-89419842",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-st-patrick-s-day-link-pinch-proof-t-shirt/-/A-85886829",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-animal-crossing-character-lineup-t-shirt/-/A-85333430",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-st-patrick-s-day-link-pinch-proof-sketch-t-shirt/-/A-85886260",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-party-t-shirt/-/A-87572869",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-eat-sleep-nes-game-repeat-t-shirt/-/A-79711053",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-luigi-s-mansion-mash-up-t-shirt/-/A-82351963",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-dad-you-are-strong-heroic-kind-helpful-t-shirt/-/A-86503046",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-big-brother-t-shirt/-/A-81914517",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-this-is-my-luigi-costume-t-shirt/-/A-84808772",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-t-shirt/-/A-82351837",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-yoshi-90s-vibe-t-shirt/-/A-85089150",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-classic-nes-controller-t-shirt/-/A-86377617",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-this-is-my-mario-costume-t-shirt/-/A-84808799",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-metroid-samus-pose-t-shirt/-/A-86377808",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-u-deluxe-t-shirt/-/A-82360054",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-splatoon-inkling-squid-t-shirt/-/A-82364419",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-halloween-splatoon-pumpkin-t-shirt/-/A-81494961",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-jumping-mario-over-the-piranha-plants-t-shirt/-/A-85388445",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-tough-guys-t-shirt/-/A-85153711",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-raccoon-mario-made-in-the-80-s-t-shirt/-/A-85153929",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-retro-distressed-controller-stripe-t-shirt/-/A-89288257",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-link-s-awakening-switch-logo-t-shirt/-/A-86377247",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-jump-friends-t-shirt/-/A-85827586",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-link-s-awakening-avatar-t-shirt/-/A-79712250",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-donkey-kong-is-my-spirit-animal-t-shirt/-/A-82356313",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-zelda-link-logo-action-pose-t-shirt/-/A-82372358",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-and-yoshi-t-shirt/-/A-82370033",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-kart-racing-grand-prix-special-cup-t-shirt/-/A-85170059",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-animal-crossing-title-logo-t-shirt/-/A-86376024",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-marker-mario-t-shirt/-/A-79710744",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-donkey-kong-barrel-crossing-t-shirt/-/A-82366586",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-yoshi-adventure-t-shirt/-/A-83053182",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-and-crew-t-shirt/-/A-85827852",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-characters-all-here-t-shirt/-/A-82358766",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-my-game-never-stops-mario-brothers-t-shirt/-/A-85827734",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-this-is-my-larry-costume-t-shirt/-/A-84808882",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-super-squad-t-shirt/-/A-82361338",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-periodic-table-of-super-mario-t-shirt/-/A-89288349",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bowser-pose-t-shirt/-/A-93074397",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-black-and-white-character-squares-t-shirt/-/A-89288307",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-luigi-s-mansion-3-gooigi-t-shirt/-/A-86926678",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-yoshi-s-crafted-world-t-shirt/-/A-89288343",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-koopa-king-bowser-t-shirt/-/A-1001939390",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-this-is-my-toad-costume-t-shirt/-/A-84808898",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-rosalina-and-luma-striped-background-portrait-t-shirt/-/A-82368823",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-and-luigi-t-shirt/-/A-87422368",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-high-five-t-shirt/-/A-93074696",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-link-s-awakening-marin-avatar-t-shirt/-/A-86375807",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-toad-snowman-t-shirt/-/A-81951639",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-nes-classic-controller-t-shirt/-/A-79711559",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-3ds-game-on-t-shirt/-/A-85388547",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-u-deluxe-nabbit-portrait-t-shirt/-/A-89288108",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-retro-pixel-character-t-shirt-black-x-large/-/A-93074538",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-splatoon-inkling-panels-t-shirt/-/A-82369369",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-animal-crossing-k-k-slider-live-show-t-shirt/-/A-82362035",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-donkey-kong-it-s-on-distressed-t-shirt/-/A-89288248",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-link-my-skills-are-legendary-t-shirt/-/A-89288223",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-faves-t-shirt-royal-blue-medium/-/A-93074657",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-animal-crossing-panels-t-shirt/-/A-82363876",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-characters-in-stripes-t-shirt/-/A-82369662",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-this-is-my-iggy-costume-t-shirt/-/A-84808750",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-level-up-t-shirt/-/A-89288174",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-kirby-black-and-white-portrait-t-shirt/-/A-89420093",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-game-sleep-repeat-t-shirt/-/A-89288244",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-character-fill-t-shirt/-/A-89288266",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-big-nes-controller-t-shirt/-/A-82368445",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-high-five-distressed-t-shirt/-/A-1001939014",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-star-fox-zero-gamers-t-shirt/-/A-89288251",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-u-deluxe-morton-portrait-t-shirt/-/A-89288113",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-world-poster-t-shirt/-/A-89288153",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-group-portrait-t-shirt/-/A-89288204",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-group-game-on-t-shirt/-/A-82364743",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-character-panels-t-shirt-red-medium/-/A-93074487",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-rainbow-star-power-t-shirt/-/A-85827630",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-st-patrick-s-day-yoshi-good-luck-charm-t-shirt/-/A-85886544",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-kart-racers-action-mach-up-poster-t-shirt/-/A-93074372",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-sheik-pose-t-shirt/-/A-86377534",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-walk-circle-1985-t-shirt/-/A-86377566",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-splatoon-logo-t-shirt/-/A-85155154",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-old-school-nes-controller-emblem-t-shirt/-/A-86376453",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-here-we-go-distressed-varsity-t-shirt/-/A-89288278",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-ganon-portrait-t-shirt/-/A-86376059",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-distressed-square-t-shirt/-/A-89288206",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-ugly-christmas-tree-super-mario-t-shirt/-/A-84867318",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-it-s-my-8th-birthday-level-up-t-shirt-black-small/-/A-93074474",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-here-we-go-t-shirt/-/A-83979188",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-old-school-nes-controller-t-shirt/-/A-86377677",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-my-are-pixels-t-shirt/-/A-85388754",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-splatoon-orange-inkling-squid-performance-tee/-/A-89598121",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-yoshi-birthday-t-shirt/-/A-93074496",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-portrait-t-shirt-red-medium/-/A-93074610",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bowser-circle-t-shirt-red-medium/-/A-93074443",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-ugly-christmas-sweater-t-shirt-black-small/-/A-93074643",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-mario-i-m-the-best-t-shirt/-/A-83979107",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-peace-t-shirt-black-small/-/A-93074384",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-character-triangles-t-shirt-red-medium/-/A-93074652",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-level-up-t-shirt-black-large/-/A-93074620",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-kicking-it-old-school-nes-controller-t-shirt/-/A-85389474",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-teamwork-high-five-t-shirt/-/A-85827696",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boys-nintendo-don-t-get-older-level-up-t-shirt/-/A-1004546591",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-animal-crossing-items-found-title-logo-t-shirt/-/A-86377010",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-super-mario-yoshi-birthday-five-t-shirt/-/A-1001411579",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-link-s-awakening-whale-stone-tablet-t-shirt/-/A-86376286",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
        "filters": {
          "brand": "Nintendo"
        }
      },
      {
        "url": "https://www.target.com/p/no-fear-eyes-logo-crew-neck-long-sleeve-youth-athletic-heather-tee/-/A-93651341",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, No Fear, Tops",
        "filters": {
          "brand": "No Fear"
        }
      },
      {
        "url": "https://www.target.com/p/no-fear-classic-logo-youth-black-crew-neck-long-sleeve-tee/-/A-93890546",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, No Fear, Tops",
        "filters": {
          "brand": "No Fear"
        }
      },
      {
        "url": "https://www.target.com/p/no-fear-floating-flame-graphic-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-91714106",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, No Fear, Tops",
        "filters": {
          "brand": "No Fear"
        }
      },
      {
        "url": "https://www.target.com/p/no-fear-cracked-skull-crew-neck-long-sleeve-youth-athletic-heather-tee/-/A-93651337",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, No Fear, Tops",
        "filters": {
          "brand": "No Fear"
        }
      },
      {
        "url": "https://www.target.com/p/no-fear-logo-crew-neck-long-sleeve-youth-athletic-heather-tee/-/A-93651329",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, No Fear, Tops",
        "filters": {
          "brand": "No Fear"
        }
      },
      {
        "url": "https://www.target.com/p/no-fear-does-not-play-well-with-others-youth-crew-neck-short-sleeve-tee/-/A-1002521560",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, No Fear, Tops",
        "filters": {
          "brand": "No Fear"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-no-fear-wherever-the-fear-may-be-look-it-in-the-eyes-youth-white-short-sleeve-tee/-/A-92629147",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, No Fear, Tops",
        "filters": {
          "brand": "No Fear"
        }
      },
      {
        "url": "https://www.target.com/p/no-fear-been-there-wrecked-that-crew-neck-short-sleeve-red-boy-s-t-shirt/-/A-92402466",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, No Fear, Tops",
        "filters": {
          "brand": "No Fear"
        }
      },
      {
        "url": "https://www.target.com/p/no-fear-dead-serious-text-graphic-crew-neck-short-sleeve-boy-s-black-t-shirt/-/A-91713652",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, No Fear, Tops",
        "filters": {
          "brand": "No Fear"
        }
      },
      {
        "url": "https://www.target.com/p/kids-summertime-graphic-tee-olive-scout-x-julie-sousa/-/A-1004219029",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Olive + Scout, Tops",
        "filters": {
          "brand": "Olive + Scout"
        }
      },
      {
        "url": "https://www.target.com/p/kids-panda-graphic-print-short-sleeve-tee-olive-scout/-/A-1003241084",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Olive + Scout, Tops",
        "filters": {
          "brand": "Olive + Scout"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-onward-character-icon-crest-performance-tee/-/A-89597762",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Onward, Tops",
        "filters": {
          "brand": "Onward"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-ouija-halloween-planchette-t-shirt/-/A-84808749",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Ouija, Tops",
        "filters": {
          "brand": "Ouija"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-ouija-will-you-be-my-valentine-yes-or-no-t-shirt/-/A-85563143",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Ouija, Tops",
        "filters": {
          "brand": "Ouija"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-happy-howloween-costumes-long-sleeve-graphic-t-shirt/-/A-1004250764",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, PAW Patrol, Tops",
        "filters": {
          "brand": "PAW Patrol"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-chase-halloween-long-sleeve-graphic-t-shirt/-/A-1004250734",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, PAW Patrol, Tops",
        "filters": {
          "brand": "PAW Patrol"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-red-white-brave-4th-of-july-t-shirt/-/A-1004374208",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, PAW Patrol, Tops",
        "filters": {
          "brand": "PAW Patrol"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-proud-pups-4th-of-july-parade-t-shirt/-/A-1004374129",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, PAW Patrol, Tops",
        "filters": {
          "brand": "PAW Patrol"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-rubble-free-to-be-me-4th-of-july-t-shirt/-/A-1004374202",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, PAW Patrol, Tops",
        "filters": {
          "brand": "PAW Patrol"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-be-happy-be-free-4th-of-july-t-shirt/-/A-1004374205",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, PAW Patrol, Tops",
        "filters": {
          "brand": "PAW Patrol"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-birthday-t-shirt-little-kid/-/A-1000155963",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, PAW Patrol, Tops",
        "filters": {
          "brand": "PAW Patrol"
        }
      },
      {
        "url": "https://www.target.com/p/paw-patrol-chase-rubble-marshall-2-pack-graphic-t-shirts-little-kid-to-big-kid/-/A-87291066",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, PAW Patrol, Tops",
        "filters": {
          "brand": "PAW Patrol"
        }
      },
      {
        "url": "https://www.target.com/p/boys-paw-patrol-happy-howloween-costumes-short-sleeve-graphic-t-shirt/-/A-1004250931",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, PAW Patrol, Tops",
        "filters": {
          "brand": "PAW Patrol"
        }
      },
      {
        "url": "https://www.target.com/p/pj-masks-owlette-catboy-gekko-3-pack-graphic-t-shirts/-/A-87198880",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, PJ Masks, Tops",
        "filters": {
          "brand": "PJ Masks"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-paul-frank-earth-day-t-shirt/-/A-91246581",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Paul Frank, Tops",
        "filters": {
          "brand": "Paul Frank"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-paul-frank-halloween-julius-the-monkey-pirate-t-shirt/-/A-89579184",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Paul Frank, Tops",
        "filters": {
          "brand": "Paul Frank"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-paul-frank-recycool-julius-the-monkey-t-shirt/-/A-91246325",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Paul Frank, Tops",
        "filters": {
          "brand": "Paul Frank"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-paul-frank-think-green-julius-the-monkey-t-shirt/-/A-91246113",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Paul Frank, Tops",
        "filters": {
          "brand": "Paul Frank"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679416",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679749",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679640",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679610",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679576",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000680116",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679501",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679772",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000680108",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679723",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679697",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000680142",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679302",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679620",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679365",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679369",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679972",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679600",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000680170",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679330",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679544",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-long-sleeve-graphic-t-shirt/-/A-1000679468",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680435",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000679950",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680304",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680522",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680018",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680257",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000679774",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680512",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680655",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000679861",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680416",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000679901",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680570",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680484",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680701",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680166",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680198",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680455",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680295",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000679798",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000680355",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts-short-sleeve-graphic-t-shirt/-/A-1000679880",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000678596",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000679207",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000678710",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000679143",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000678699",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000679175",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000679568",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000678625",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000679022",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000678575",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000679580",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000678564",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000679013",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000678690",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000679288",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peanuts/-/A-1000678709",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peanuts, Tops",
        "filters": {
          "brand": "Peanuts"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-love-our-world-t-shirt/-/A-88716740",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-christmas-dear-santa-t-shirt/-/A-87693442",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-team-peppa-soccer-t-shirt/-/A-87693095",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-football-players-t-shirt/-/A-87691551",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-fall-frame-t-shirt/-/A-89581370",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-george-lucky-little-boy-t-shirt/-/A-87691584",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-distressed-christmas-sweater-t-shirt/-/A-87693165",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-gymnastics-t-shirt/-/A-87693317",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peppa-pig-george-big-bro-t-shirt/-/A-1004605999",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-christmas-let-s-get-festive-t-shirt/-/A-87693242",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-christmas-santa-s-little-helpers-t-shirt/-/A-87691509",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-st-patrick-s-day-lucky-charm-t-shirt/-/A-87693268",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-christmas-gingerbread-cookie-characters-t-shirt/-/A-87691536",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-tie-dye-peppa-t-shirt/-/A-87693241",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-uk-soccer-t-shirt/-/A-87693236",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-super-puddle-jumper-t-shirt/-/A-87693110",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-blue-logo-t-shirt/-/A-87693343",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-halloween-trick-or-treat-t-shirt/-/A-87693223",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-george-little-brother-t-shirt/-/A-87693596",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-be-your-own-kind-of-magical-forest-t-shirt/-/A-87693612",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-christmas-lights-t-shirt/-/A-87693413",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-christmas-gingerbread-cookie-family-t-shirt/-/A-87691555",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-100th-day-of-school-t-shirt/-/A-87693455",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-christmas-up-to-snow-good-t-shirt/-/A-87693078",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-let-s-put-our-boots-on-time-to-play-t-shirt/-/A-87693468",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-taiwan-soccer-t-shirt/-/A-87693227",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-hooray-it-s-christmas-t-shirt/-/A-87693427",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-christmas-unicorn-t-shirt/-/A-87693489",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-christmas-gingerbread-cookies-t-shirt/-/A-89659941",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peppa-pig-pig-famly-lineup-short-sleeve-graphic-t-shirt/-/A-1004151022",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peppa-pig-peppa-george-baby-reading-short-sleeve-graphic-t-shirt/-/A-1004151349",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boys-peppa-pig-together-forever-short-sleeve-graphic-t-shirt/-/A-1004150777",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-magic-is-real-t-shirt/-/A-89581388",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-st-patrick-s-day-pinch-proof-t-shirt/-/A-87693102",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-spring-portrait-t-shirt/-/A-91245622",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peppa-pig-best-mummy-ever-t-shirt/-/A-91343371",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peppa Pig, Tops",
        "filters": {
          "brand": "Peppa Pig"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pete-the-cat-certified-cookie-tester-long-sleeve-graphic-t-shirt/-/A-1003970201",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pete the Cat, Tops",
        "filters": {
          "brand": "Pete the Cat"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pete-the-cat-it-s-all-groovy-short-sleeve-graphic-t-shirt/-/A-1003970184",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pete the Cat, Tops",
        "filters": {
          "brand": "Pete the Cat"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pete-the-cat-magic-sunglasses-skateboard-short-sleeve-graphic-t-shirt/-/A-1003969386",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pete the Cat, Tops",
        "filters": {
          "brand": "Pete the Cat"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pete-the-cat-pete-do-your-best-short-sleeve-graphic-t-shirt/-/A-1003969520",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pete the Cat, Tops",
        "filters": {
          "brand": "Pete the Cat"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pete-the-cat-groovy-short-sleeve-graphic-t-shirt/-/A-1003969492",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pete the Cat, Tops",
        "filters": {
          "brand": "Pete the Cat"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pete-the-cat-space-is-groovy-short-sleeve-graphic-t-shirt/-/A-1003969498",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pete the Cat, Tops",
        "filters": {
          "brand": "Pete the Cat"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pete-the-cat-groovy-raglan-graphic-t-shirt/-/A-1003970470",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pete the Cat, Tops",
        "filters": {
          "brand": "Pete the Cat"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-peter-pan-pirate-ship-flight-neon-t-shirt/-/A-1001941718",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-camp-neverland-est-1953-t-shirt/-/A-85373450",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-st-patrick-s-day-tinkerbell-i-don-t-need-luck-i-m-magical-t-shirt/-/A-85887661",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-lost-boys-never-grow-t-shirt/-/A-82367475",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-captain-hook-and-the-pirates-t-shirt/-/A-1001941500",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-you-re-my-happy-thought-t-shirt/-/A-90647461",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-flight-silhouettes-t-shirt/-/A-89017161",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-silhouette-peter-scenes-t-shirt/-/A-89017216",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-camp-never-land-never-grow-up-t-shirt/-/A-86926758",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-i-ve-got-you-hooked-t-shirt/-/A-89017333",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-never-grow-up-t-shirt/-/A-82372844",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-animated-flying-scene-t-shirt/-/A-89017397",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-tinker-bell-portrait-t-shirt/-/A-89017204",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-animated-movie-poster-t-shirt/-/A-89017375",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-tinker-bell-i-m-always-fly-t-shirt/-/A-89017005",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-let-there-be-flight-t-shirt/-/A-89017181",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-take-me-to-never-land-logo-t-shirt/-/A-89016877",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-captain-hook-captain-of-chaos-t-shirt/-/A-89016999",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-wendy-portrait-t-shirt/-/A-89016826",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-get-lost-t-shirt/-/A-89017134",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-movie-logo-t-shirt/-/A-89017077",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-peter-pan-wendy-skull-rock-enter-if-ye-dare-t-shirt/-/A-89017065",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Peter Pan, Tops",
        "filters": {
          "brand": "Peter Pan"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-phineas-ferb-phineas-and-ferb-perry-the-platypus-face-t-shirt/-/A-86126472",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Phineas and Ferb, Tops",
        "filters": {
          "brand": "Phineas and Ferb"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-phineas-ferb-phineas-and-ferb-man-with-plan-t-shirt/-/A-86126390",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Phineas and Ferb, Tops",
        "filters": {
          "brand": "Phineas and Ferb"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-phineas-ferb-deck-the-platypus-t-shirt/-/A-87433675",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Phineas and Ferb, Tops",
        "filters": {
          "brand": "Phineas and Ferb"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-phineas-ferb-phineas-and-ferb-missing-perry-platypus-poster-t-shirt/-/A-86126453",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Phineas and Ferb, Tops",
        "filters": {
          "brand": "Phineas and Ferb"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-phineas-ferb-phineas-and-ferb-man-of-action-t-shirt/-/A-86126435",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Phineas and Ferb, Tops",
        "filters": {
          "brand": "Phineas and Ferb"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-phineas-ferb-perry-love-t-shirt/-/A-85565776",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Phineas and Ferb, Tops",
        "filters": {
          "brand": "Phineas and Ferb"
        }
      },
      {
        "url": "https://www.target.com/p/pink-floyd-dark-side-of-the-moon-youth-boys-black-graphic-tee/-/A-84941537",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/pink-floyd-prism-with-rainbow-and-moon-youth-black-graphic-tee/-/A-84597654",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/pink-floyd-the-division-bell-icon-youth-black-short-sleeve-crew-neck-graphic-tee/-/A-87974138",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-pink-floyd-a-momentary-lapse-of-reason-world-tour-youth-white-short-sleeve-crew-neck-graphic-tee/-/A-87974251",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/pink-floyd-dark-side-of-the-moon-boy-s-navy-t-shirt/-/A-85451041",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-the-band-t-shirt/-/A-1004636036",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-point-of-the-dark-side-t-shirt/-/A-1004635835",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-dark-side-moon-t-shirt/-/A-1004635588",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/pink-floyd-1989-delicate-sound-of-thunder-sticker-graphic-crew-neck-short-sleeve-boys-black-t-shirt/-/A-88562501",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/pink-floyd-dark-side-of-the-moon-comic-art-boy-s-charcoal-t-shirt/-/A-86316700",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/pink-floyd-world-tour-earth-planes-crew-neck-short-sleeve-athletic-heather-boy-s-t-shirt/-/A-90119894",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/pink-floyd-wish-you-were-here-prism-graphic-crew-neck-short-sleeve-black-youth-t-shirt/-/A-90060785",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/pink-floyd-wish-you-were-here-album-art-boy-s-heather-gray-t-shirt/-/A-87945240",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/pink-floyd-dark-side-of-the-moon-album-art-boy-s-black-t-shirt/-/A-86316778",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-atom-mother-heart-pyramid-t-shirt/-/A-1004636446",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/pink-floyd-distressed-endless-river-crew-neck-short-sleeve-boys-white-t-shirt/-/A-88144856",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/pink-floyd-boys-black-crew-neck-short-sleeve-t-shirt/-/A-1004429841",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-dark-side-cover-t-shirt/-/A-1004635987",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-the-moon-t-shirt/-/A-1004636024",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-dark-side-to-floyd-t-shirt/-/A-1004635644",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-dark-side-heads-t-shirt/-/A-1004636462",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-vintage-galaxy-floyd-t-shirt/-/A-1004636012",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-meddle-t-shirt/-/A-1004636675",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-animals-sky-t-shirt/-/A-1003751486",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-ummagumma-t-shirt/-/A-1004636486",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-wish-you-were-here-grid-t-shirt/-/A-1004635999",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-chalk-prism-t-shirt/-/A-1004636231",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-pig-t-shirt/-/A-1004636298",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-animals-1977-t-shirt/-/A-1004635716",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-pompeii-t-shirt/-/A-1004636475",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-rainbow-group-t-shirt/-/A-1004635648",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-piper-t-shirt/-/A-1004636733",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-more-t-shirt/-/A-1004635684",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-roosevelt-stadium-t-shirt/-/A-1004635735",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-band-pyramid-t-shirt/-/A-1004636634",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-dark-side-of-the-moon-superb-album-t-shirt/-/A-1004636573",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-galaxy-group-t-shirt/-/A-1004635923",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-lava-tiles-t-shirt/-/A-1004636144",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-animals-black-t-shirt/-/A-1004635685",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-young-guns-t-shirt/-/A-1004636048",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-paint-box-t-shirt/-/A-1004636258",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-dark-side-bubbles-t-shirt/-/A-1004635778",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-miro-t-shirt/-/A-1004635470",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-dark-side-triangle-t-shirt/-/A-1004635327",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-carnegie-t-shirt/-/A-1004635734",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-spokes-t-shirt/-/A-1004636716",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-animals-tour-black-t-shirt/-/A-1004635789",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-all-seeing-eye-space-t-shirt/-/A-1004635713",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-allseeing-prism-t-shirt/-/A-1004636190",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-portraits-t-shirt/-/A-1004635767",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-clouds-t-shirt/-/A-1004636095",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-money-t-shirt/-/A-1004636243",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-emblem-black-t-shirt/-/A-1004635623",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-neon-division-bell-t-shirt/-/A-1004636535",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-dark-side-of-the-moon-t-shirt/-/A-1004636711",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-one-of-these-days-t-shirt/-/A-1004636293",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-1975-prism-t-shirt/-/A-1004636129",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-welcome-to-the-machine-t-shirt/-/A-1004636337",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-beat-1973-t-shirt/-/A-1004635986",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-broken-glass-prism-t-shirt/-/A-1004636181",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pink-floyd-prism-circle-t-shirt/-/A-1004635929",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pink Floyd, Tops",
        "filters": {
          "brand": "Pink Floyd"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pinky-and-the-brain-distressed-pinch-proof-brain-face-t-shirt/-/A-90779928",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pinky and the Brain, Tops",
        "filters": {
          "brand": "Pinky and the Brain"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pirates-of-the-caribbean-dead-man-s-chest-dead-men-tell-no-tales-black-pearl-t-shirt/-/A-88152557",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pirates of the Caribbean, Tops",
        "filters": {
          "brand": "Pirates of the Caribbean"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pirates-of-the-caribbean-curse-of-the-black-pearl-jack-sparrow-hello-my-lovelies-t-shirt/-/A-88153347",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pirates of the Caribbean, Tops",
        "filters": {
          "brand": "Pirates of the Caribbean"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pirates-of-the-caribbean-curse-of-the-black-pearl-black-and-white-rope-skull-logo-t-shirt/-/A-88152790",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pirates of the Caribbean, Tops",
        "filters": {
          "brand": "Pirates of the Caribbean"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pirates-of-the-caribbean-curse-of-the-black-pearl-black-and-white-skull-logo-t-shirt/-/A-88152907",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pirates of the Caribbean, Tops",
        "filters": {
          "brand": "Pirates of the Caribbean"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pirates-of-the-caribbean-curse-of-the-black-pearl-jack-sparrow-icons-t-shirt/-/A-88153179",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pirates of the Caribbean, Tops",
        "filters": {
          "brand": "Pirates of the Caribbean"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pirates-of-the-caribbean-curse-of-the-black-pearl-jack-sparrow-swagger-t-shirt/-/A-88152870",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pirates of the Caribbean, Tops",
        "filters": {
          "brand": "Pirates of the Caribbean"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pirates-of-the-caribbean-on-stranger-tides-distressed-skull-logo-t-shirt/-/A-88153129",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pirates of the Caribbean, Tops",
        "filters": {
          "brand": "Pirates of the Caribbean"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pirates-of-the-caribbean-on-stranger-tides-undead-on-arrival-skull-logo-t-shirt/-/A-88153041",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pirates of the Caribbean, Tops",
        "filters": {
          "brand": "Pirates of the Caribbean"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-poison-skull-and-snake-t-shirt/-/A-88540115",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Poison, Tops",
        "filters": {
          "brand": "Poison"
        }
      },
      {
        "url": "https://www.target.com/p/boys-39-pokemon-elevated-short-sleeve-t-shirt-tan/-/A-93600082",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-charmander-bulbasaur-squirtle-christmas-tree-long-sleeve-graphic-t-shirt/-/A-93763395",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-christmas-santa-hat-long-sleeve-graphic-t-shirt/-/A-93634076",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pika-pika-scared-long-sleeve-graphic-t-shirt/-/A-1002377216",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-electric-type-pikachu-long-sleeve-graphic-t-shirt/-/A-1002385159",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-and-friends-long-sleeve-graphic-t-shirt/-/A-1002386905",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-long-sleeve-graphic-t-shirt/-/A-93763405",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-magikarp-aquatic-long-sleeve-graphic-t-shirt/-/A-1000913326",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-charmander-pokedex-long-sleeve-graphic-t-shirt/-/A-1002396978",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-eevee-group-long-sleeve-graphic-t-shirt/-/A-1002355791",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-info-chart-long-sleeve-graphic-t-shirt/-/A-1002396643",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-starry-mew-long-sleeve-graphic-t-shirt/-/A-1002396414",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-dragonite-charizard-prepare-for-battle-long-sleeve-graphic-t-shirt/-/A-1002358065",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-charmander-bulbasaur-squirtle-meowth-athletic-logo-long-sleeve-graphic-t-shirt/-/A-93580226",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-happy-holidays-long-sleeve-graphic-t-shirt/-/A-93699937",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-eevee-leaves-long-sleeve-graphic-t-shirt/-/A-1000913206",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-cafe-group-long-sleeve-graphic-t-shirt/-/A-1000913115",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-winter-fun-sledding-long-sleeve-graphic-t-shirt/-/A-93699889",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-psyduck-spiral-long-sleeve-graphic-t-shirt/-/A-1002395523",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-bidoof-cafe-long-sleeve-graphic-t-shirt/-/A-1000913263",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-sprig-fuec-quax-cafe-long-sleeve-graphic-t-shirt/-/A-1000913165",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-thumbs-up-kanji-long-sleeve-graphic-t-shirt/-/A-1002376050",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-panel-comic-manga-long-sleeve-graphic-t-shirt/-/A-1002395969",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-anime-kanji-long-sleeve-graphic-t-shirt/-/A-1002377645",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-eevee-pattern-long-sleeve-graphic-t-shirt/-/A-1002396518",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-attack-long-sleeve-graphic-t-shirt/-/A-1002385133",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-magikarp-long-sleeve-graphic-t-shirt/-/A-1002395496",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-checkered-long-sleeve-graphic-t-shirt/-/A-1002386143",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-squirtle-bulbasaur-charmander-group-long-sleeve-graphic-t-shirt/-/A-1002347973",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-eat-sleep-battle-repeat-long-sleeve-graphic-t-shirt/-/A-1002386609",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-charizard-flash-fire-long-sleeve-graphic-t-shirt/-/A-1002350533",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-fuecoco-stats-long-sleeve-graphic-t-shirt/-/A-1002357982",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-wink-long-sleeve-graphic-t-shirt/-/A-1002377682",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-friends-retro-checkered-long-sleeve-graphic-t-shirt/-/A-1002377875",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-battle-ready-long-sleeve-graphic-t-shirt/-/A-1002347894",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-miraidon-collegiate-long-sleeve-graphic-t-shirt/-/A-1002355794",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-miraidon-legend-long-sleeve-graphic-t-shirt/-/A-1002357998",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-psyduck-anime-long-sleeve-graphic-t-shirt/-/A-1002377355",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-neon-battle-mode-long-sleeve-graphic-t-shirt/-/A-1002385684",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pika-presents-long-sleeve-graphic-t-shirt/-/A-1002353107",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-grid-long-sleeve-graphic-t-shirt/-/A-1002386074",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-hypnotic-pikachu-art-long-sleeve-graphic-t-shirt/-/A-1002396418",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-koraidon-collegiate-long-sleeve-graphic-t-shirt/-/A-1002358010",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pokedex-pikachu-long-sleeve-graphic-t-shirt/-/A-1002396270",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-koraidon-elements-long-sleeve-graphic-t-shirt/-/A-1002355835",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-thunderbolt-long-sleeve-graphic-t-shirt/-/A-1002395046",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-gotta-catch-em-all-long-sleeve-graphic-t-shirt/-/A-1002358031",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-logo-style-long-sleeve-graphic-t-shirt/-/A-1002381072",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-slowpoke-relax-do-nothing-repeat-long-sleeve-graphic-t-shirt/-/A-1002377554",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-manga-comic-style-lightning-long-sleeve-graphic-t-shirt/-/A-1002377555",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-mewtwo-battle-long-sleeve-graphic-t-shirt/-/A-1002357863",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-group-in-circle-long-sleeve-graphic-t-shirt/-/A-1002347948",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-gengar-neon-long-sleeve-graphic-t-shirt/-/A-1002382801",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-happy-pikachu-long-sleeve-graphic-t-shirt/-/A-1002382057",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-with-hat-long-sleeve-graphic-t-shirt/-/A-1002352996",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-vileplum-family-long-sleeve-graphic-t-shirt/-/A-1000913201",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-collegiate-long-sleeve-graphic-t-shirt/-/A-1002358083",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pika-pikachu-grid-long-sleeve-graphic-t-shirt/-/A-1002380496",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-eevee-evolution-stickers-long-sleeve-graphic-t-shirt/-/A-1002396607",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pok-flakes-long-sleeve-graphic-t-shirt/-/A-1002353105",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-happy-eevee-long-sleeve-graphic-t-shirt/-/A-1002385911",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pika-presents-long-sleeve-graphic-t-shirt/-/A-1002352974",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-seasons-greetings-long-sleeve-graphic-t-shirt/-/A-1002352789",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-the-snuggle-is-real-pikachu-and-piplup-long-sleeve-graphic-t-shirt/-/A-1002350375",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-peeking-pikachu-long-sleeve-graphic-t-shirt/-/A-1002360567",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-pumpkin-long-sleeve-graphic-t-shirt/-/A-1002377154",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-eevee-evolutions-long-sleeve-graphic-t-shirt/-/A-1002376102",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pumpkin-party-long-sleeve-graphic-t-shirt/-/A-1002355486",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-sled-long-sleeve-graphic-t-shirt/-/A-1002352945",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-gotta-catch-em-all-starters-long-sleeve-graphic-t-shirt/-/A-1002387078",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-bulbasaur-anime-battle-long-sleeve-graphic-t-shirt/-/A-1002377729",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-snorlax-team-sleep-long-sleeve-graphic-t-shirt/-/A-1002377334",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-miraidon-elements-long-sleeve-graphic-t-shirt/-/A-1002358071",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-rowlet-growing-your-wings-takes-time-long-sleeve-graphic-t-shirt/-/A-1000913293",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-eevee-friends-retro-stripe-long-sleeve-graphic-t-shirt/-/A-1002384547",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-trainer-long-sleeve-graphic-t-shirt/-/A-1002380848",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-moon-witch-long-sleeve-graphic-t-shirt/-/A-1002355397",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-witch-pikachu-with-candy-long-sleeve-graphic-t-shirt/-/A-1002355382",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-pokedex-diagram-long-sleeve-graphic-t-shirt/-/A-1002385096",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-catch-em-all-thank-you-long-sleeve-graphic-t-shirt/-/A-1002358091",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-psyduck-snorlax-gengar-cool-long-sleeve-graphic-t-shirt/-/A-1002377348",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-team-magikarp-long-sleeve-graphic-t-shirt/-/A-1002377317",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-happy-eevee-cute-long-sleeve-graphic-t-shirt/-/A-1002377625",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-trick-or-treat-long-sleeve-graphic-t-shirt/-/A-1002375147",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-trick-or-treat-long-sleeve-graphic-t-shirt/-/A-1002355471",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-champ-pikachu-shy-long-sleeve-graphic-t-shirt/-/A-1002377583",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-gotta-eat-em-all-long-sleeve-graphic-t-shirt/-/A-1002377013",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-koraidon-legend-long-sleeve-graphic-t-shirt/-/A-1002358043",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-eevee-133-long-sleeve-graphic-t-shirt/-/A-1002380830",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-happy-meowth-retro-long-sleeve-graphic-t-shirt/-/A-1002377841",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-japanese-long-sleeve-graphic-t-shirt/-/A-1002386601",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-meowth-mischevious-laugh-long-sleeve-graphic-t-shirt/-/A-1002387013",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-sprigatito-stats-long-sleeve-graphic-t-shirt/-/A-1002357984",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-candy-i-choose-you-long-sleeve-graphic-t-shirt/-/A-1002377281",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-bulba-pattern-long-sleeve-graphic-t-shirt/-/A-1002353122",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pokeball-trainer-long-sleeve-graphic-t-shirt/-/A-1002380183",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-39-pok-mon-wrap-short-sleeve-graphic-t-shirt-white/-/A-92185936",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-39-pikachu-mineral-wash-tank-top-yellow/-/A-94431027",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-angry-pikachu-t-shirt/-/A-89014414",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-christmas-tree-characters-t-shirt/-/A-87756259",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-bulbasaur-rocks-t-shirt/-/A-89829917",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-it-s-my-8th-birthday-pikachu-t-shirt/-/A-89830098",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-eeveelutions-t-shirt/-/A-86819133",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-039-love-jigglypuff-t-shirt/-/A-89829880",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-digital-pikachu-t-shirt/-/A-87900414",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-character-circles-t-shirt/-/A-89014408",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-it-s-my-7th-birthday-starters-t-shirt/-/A-89828960",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-love-heart-neon-t-shirt/-/A-89829750",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-it-s-my-7th-birthday-pikachu-t-shirt/-/A-89830103",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-it-s-my-10th-birthday-starters-t-shirt/-/A-89829125",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-logo-characters-t-shirt/-/A-88537391",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-it-s-my-6th-birthday-starters-t-shirt/-/A-89828926",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-miraidon-circle-t-shirt/-/A-89829582",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-charmander-rocks-t-shirt/-/A-89829854",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-eeveelutions-performance-tee/-/A-88005949",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-all-about-eevee-eeveeloution-performance-tee/-/A-1001414870",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-wink-face-performance-tee/-/A-87422263",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-mimikyu-gengar-litwick-duskull-haunted-house-short-sleeve-graphic-t-shirt/-/A-92917868",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-mimikyu-halloween-forest-short-sleeve-graphic-t-shirt/-/A-92864901",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-charizard-charmander-charmeleon-fire-spin-short-sleeve-graphic-t-shirt/-/A-94100452",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-psyduck-confusion-short-sleeve-graphic-t-shirt/-/A-93804172",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-snorlax-nope-not-today-short-sleeve-graphic-t-shirt/-/A-92910129",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-christmas-presents-short-sleeve-graphic-t-shirt/-/A-93804957",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-bulbasaur-psyduck-pikachu-gengar-meowth-squirtle-jigglypuff-charmander-short-sleeve-graphic-t-shirt/-/A-93459644",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-eevee-jigglypuff-charmander-squirtle-bulbasaur-meowth-short-sleeve-graphic-t-shirt/-/A-93794986",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-gengar-short-sleeve-graphic-t-shirt/-/A-1002396375",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-magikarp-water-type-short-sleeve-graphic-t-shirt/-/A-94078726",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-eevee-evolution-stickers-short-sleeve-graphic-t-shirt/-/A-93804079",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-sprigatito-stats-short-sleeve-graphic-t-shirt/-/A-93459658",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-happy-short-sleeve-graphic-t-shirt/-/A-94113002",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-umbreon-celestial-moon-and-clouds-short-sleeve-graphic-t-shirt/-/A-92864660",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-mewtwo-ready-for-battle-short-sleeve-graphic-t-shirt/-/A-94079522",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-wink-short-sleeve-graphic-t-shirt/-/A-1002377515",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-team-pikachu-badge-short-sleeve-graphic-t-shirt/-/A-93803692",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-christmas-santa-sleigh-with-presents-short-sleeve-graphic-t-shirt/-/A-93804143",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-bidoof-normal-type-sinnoh-region-short-sleeve-graphic-t-shirt/-/A-92864827",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-electric-type-short-sleeve-graphic-t-shirt/-/A-94112988",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-fuecoco-sprigatito-quaxly-padea-starters-short-sleeve-graphic-t-shirt/-/A-94100463",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-sprigatito-fuecoco-quaxly-battle-ready-paldea-starters-short-sleeve-graphic-t-shirt/-/A-93054409",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-eevee-squares-short-sleeve-graphic-t-shirt/-/A-94100499",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-charmander-bulbasaur-squirtle-snowball-fight-short-sleeve-graphic-t-shirt/-/A-93488076",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-rowlet-growing-your-wings-takes-time-short-sleeve-graphic-t-shirt/-/A-1000913136",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-snowy-christmas-outfit-short-sleeve-graphic-t-shirt/-/A-94113016",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-collegiate-short-sleeve-graphic-t-shirt/-/A-1002356246",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-quaxly-stats-short-sleeve-graphic-t-shirt/-/A-93459698",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-dragonite-and-charizard-dragon-battle-short-sleeve-graphic-t-shirt/-/A-92910492",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-japanese-short-sleeve-graphic-t-shirt/-/A-1002386191",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-sprig-fuec-quax-cafe-short-sleeve-graphic-t-shirt/-/A-1000913120",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-squirtle-wartortle-blastoise-evolution-short-sleeve-graphic-t-shirt/-/A-94078685",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-eevolution-stacked-names-short-sleeve-graphic-t-shirt/-/A-1000018407",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/pok-mon-eevee-pikachu-charmander-squirtle-bulbasaur-grid-short-sleeve-graphic-t-shirt/-/A-94155327",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-character-box-up-rainbow-performance-tee/-/A-87422173",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-battle-mode-neon-short-sleeve-graphic-t-shirt/-/A-94113176",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-fuecoco-fire-type-paldea-starter-short-sleeve-graphic-t-shirt/-/A-94080473",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-happy-eevee-short-sleeve-graphic-t-shirt/-/A-94079575",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-pattern-short-sleeve-graphic-t-shirt/-/A-93803958",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-bidoof-cafe-short-sleeve-graphic-t-shirt/-/A-1000913311",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-snorlax-team-sleep-short-sleeve-graphic-t-shirt/-/A-93022593",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-dragonite-dragonair-dratini-evolution-short-sleeve-graphic-t-shirt/-/A-92864832",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachi-neon-outline-short-sleeve-graphic-t-shirt/-/A-93804139",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-charmander-smile-performance-tee/-/A-87422331",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-eevee-pattern-short-sleeve-graphic-t-shirt/-/A-93459295",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-eevee-leaves-short-sleeve-graphic-t-shirt/-/A-1000913107",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-charmander-fire-type-retro-gamer-grid-short-sleeve-graphic-t-shirt/-/A-94078742",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-lightning-bolt-short-sleeve-graphic-t-shirt/-/A-93459510",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-pika-wall-short-sleeve-graphic-t-shirt/-/A-93580121",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-snowy-christmas-outfit-short-sleeve-graphic-t-shirt/-/A-94113020",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/pok-mon-jirachi-night-sky-frame-short-sleeve-graphic-t-shirt/-/A-94155312",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-sitting-portrait-performance-tee/-/A-89828744",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-laughing-performance-tee/-/A-87422227",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-halloween-jack-o-lantern-pumpkin-short-sleeve-graphic-t-shirt/-/A-93459610",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-eevee-face-performance-tee/-/A-87422248",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-team-magikarp-short-sleeve-graphic-t-shirt/-/A-93459580",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-face-wink-short-sleeve-graphic-t-shirt/-/A-93803876",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-starry-mew-short-sleeve-graphic-t-shirt/-/A-93459413",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-cute-jigglypuff-performance-tee/-/A-87422230",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-gengar-ghost-type-short-sleeve-graphic-t-shirt/-/A-92910168",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-magikarp-aquatic-short-sleeve-graphic-t-shirt/-/A-1000913276",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-psyduck-water-type-054-anime-short-sleeve-graphic-t-shirt/-/A-94079530",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-bulbasaur-wink-face-performance-tee/-/A-87422280",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-miraidon-legend-short-sleeve-graphic-t-shirt/-/A-1002355995",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-koraidon-legend-short-sleeve-graphic-t-shirt/-/A-1002356789",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pokedex-pikachu-short-sleeve-graphic-t-shirt/-/A-1002396401",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-starter-pok-mon-short-sleeve-graphic-t-shirt/-/A-1002396302",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-the-snuggle-is-real-pikachu-and-piplup-short-sleeve-graphic-t-shirt/-/A-1002348305",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pok-mon-trainer-short-sleeve-graphic-t-shirt/-/A-1002395718",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-charmander-squirtle-bulbasaur-kanto-group-short-sleeve-graphic-t-shirt/-/A-93459723",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-gotta-catch-em-all-starters-short-sleeve-graphic-t-shirt/-/A-1002386436",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-retro-checkered-short-sleeve-graphic-t-shirt/-/A-94112994",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-eevee-vaporeon-jolteon-flareon-eeveelutions-short-sleeve-graphic-t-shirt/-/A-93054392",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-slowpoke-taking-it-slow-short-sleeve-graphic-t-shirt/-/A-1002396835",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-eevee-133-normal-type-generation-1-short-sleeve-graphic-t-shirt/-/A-94079046",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-bulbasaur-anime-battle-short-sleeve-graphic-t-shirt/-/A-93804162",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-gengar-ghost-type-manga-short-sleeve-graphic-t-shirt/-/A-94079543",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-peeking-pikachu-short-sleeve-graphic-t-shirt/-/A-1002360580",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-miraidon-elements-short-sleeve-graphic-t-shirt/-/A-1002355814",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-grookey-scorbunny-and-sobble-short-sleeve-graphic-t-shirt/-/A-1002348300",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-eevee-evolutions-short-sleeve-graphic-t-shirt/-/A-94080214",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-quaxly-pond-water-type-paldea-starter-short-sleeve-graphic-t-shirt/-/A-92864758",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-cafe-group-short-sleeve-graphic-t-shirt/-/A-1000913234",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-dragonite-stained-glass-dragon-type-short-sleeve-graphic-t-shirt/-/A-92864831",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-totodile-water-type-short-sleeve-graphic-t-shirt/-/A-94100491",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-kanji-short-sleeve-graphic-t-shirt/-/A-94113011",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-checkered-short-sleeve-graphic-t-shirt/-/A-1002386326",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-jiggypuff-music-notes-short-sleeve-graphic-t-shirt/-/A-1002395990",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-mewtwo-battle-short-sleeve-graphic-t-shirt/-/A-1002356380",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-charizard-flash-fire-short-sleeve-graphic-t-shirt/-/A-1002348358",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-slowpoke-relax-do-nothing-repeat-short-sleeve-graphic-t-shirt/-/A-1002377596",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-vileplum-family-short-sleeve-graphic-t-shirt/-/A-1000913098",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-snorlax-short-sleeve-graphic-t-shirt/-/A-1002396844",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-neon-pikachu-short-sleeve-graphic-t-shirt/-/A-1002395551",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-halloween-pumpkin-party-short-sleeve-graphic-t-shirt/-/A-93459703",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-thumbs-up-kanji-short-sleeve-graphic-t-shirt/-/A-1002376154",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-poses-short-sleeve-graphic-t-shirt/-/A-1002400108",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-anime-kanji-short-sleeve-graphic-t-shirt/-/A-1002377460",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-psyduck-headache-short-sleeve-graphic-t-shirt/-/A-1002395738",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-grid-short-sleeve-graphic-t-shirt/-/A-1002396875",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-charmander-squirtlew-bulbasaur-retro-checker-short-sleeve-graphic-t-shirt/-/A-94079550",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pok-mon-squares-short-sleeve-graphic-t-shirt/-/A-1002395762",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-the-journey-start-here-short-sleeve-graphic-t-shirt/-/A-1002396908",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pick-of-the-patch-short-sleeve-graphic-t-shirt/-/A-1002376918",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-happy-meowth-retro-short-sleeve-graphic-t-shirt/-/A-1002377858",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-gotta-catch-em-all-short-sleeve-graphic-t-shirt/-/A-1002396147",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-bulbasaur-squirtle-and-charmander-good-vibes-performance-tee/-/A-87422206",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-halloween-trick-or-treat-short-sleeve-graphic-t-shirt/-/A-93054275",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-retro-pok-mon-short-sleeve-graphic-t-shirt/-/A-1002396761",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-pattern-short-sleeve-graphic-t-shirt/-/A-1002395535",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-litwick-halloween-ghost-type-short-sleeve-graphic-t-shirt/-/A-92864714",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-starter-pok-mon-outline-short-sleeve-graphic-t-shirt/-/A-1002396076",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pika-speed-short-sleeve-graphic-t-shirt/-/A-1002399926",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-psyduck-snorlax-gengar-cool-short-sleeve-graphic-t-shirt/-/A-1002377397",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-gotta-catch-em-all-short-sleeve-graphic-t-shirt/-/A-1002356463",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-manga-battle-short-sleeve-graphic-t-shirt/-/A-93803885",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-punk-icons-short-sleeve-graphic-t-shirt/-/A-93803923",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pika-pikachu-grid-short-sleeve-graphic-t-shirt/-/A-1002380517",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-thunderbolt-short-sleeve-graphic-t-shirt/-/A-1002395075",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-happy-pikachu-short-sleeve-graphic-t-shirt/-/A-1002381819",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pok-mon-athletic-logo-short-sleeve-graphic-t-shirt/-/A-1002396150",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-pokedex-diagram-short-sleeve-graphic-t-shirt/-/A-1002385210",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-team-pok-mon-short-sleeve-graphic-t-shirt/-/A-1002395775",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-bulba-pattern-short-sleeve-graphic-t-shirt/-/A-1002353329",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-manga-comic-style-lightning-short-sleeve-graphic-t-shirt/-/A-1002377524",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-eevee-friends-retro-stripe-short-sleeve-graphic-t-shirt/-/A-1002384231",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-charmander-squirtle-bulbasaur-kanto-starters-short-sleeve-graphic-t-shirt/-/A-93023562",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-meowth-mischevious-laugh-short-sleeve-graphic-t-shirt/-/A-93488322",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-trainer-short-sleeve-graphic-t-shirt/-/A-1002380818",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-koraidon-elements-short-sleeve-graphic-t-shirt/-/A-1002355883",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-lighting-short-sleeve-graphic-t-shirt/-/A-1002399922",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-group-in-circle-short-sleeve-graphic-t-shirt/-/A-1002347905",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-retrogamer-short-sleeve-graphic-t-shirt/-/A-1002395139",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pokeball-trainer-short-sleeve-graphic-t-shirt/-/A-1002380152",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-manga-art-short-sleeve-graphic-t-shirt/-/A-1002395662",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-hypnotic-pikachu-art-short-sleeve-graphic-t-shirt/-/A-1002396136",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-gotta-catch-em-all-design-short-sleeve-graphic-t-shirt/-/A-1002396257",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pika-wreath-short-sleeve-graphic-t-shirt/-/A-1002400060",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-electric-type-pikachu-short-sleeve-graphic-t-shirt/-/A-1002384987",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-zubat-stars-short-sleeve-graphic-t-shirt/-/A-94100486",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-happy-eevee-cute-short-sleeve-graphic-t-shirt/-/A-1002377711",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-team-player-short-sleeve-graphic-t-shirt/-/A-1002395889",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-eat-sleep-battle-repeat-short-sleeve-graphic-t-shirt/-/A-1002386634",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-starter-pok-mon-logo-short-sleeve-graphic-t-shirt/-/A-1002396301",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-halloween-candy-i-choose-you-short-sleeve-graphic-t-shirt/-/A-94079495",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-trick-or-treat-short-sleeve-graphic-t-shirt/-/A-1002374938",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-solrock-celestial-short-sleeve-graphic-t-shirt/-/A-94100636",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pika-presents-short-sleeve-graphic-t-shirt/-/A-1002353054",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-halloween-happy-short-sleeve-graphic-t-shirt/-/A-1002400110",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-i-m-so-sweet-short-sleeve-graphic-t-shirt/-/A-1002395868",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-snow-boarding-short-sleeve-graphic-t-shirt/-/A-1002400134",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pika-face-short-sleeve-graphic-t-shirt/-/A-1002399905",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pumpkin-costume-short-sleeve-graphic-t-shirt/-/A-1002400073",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-witch-pikachu-with-candy-short-sleeve-graphic-t-shirt/-/A-1002355494",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-halloween-pumpkin-costume-short-sleeve-graphic-t-shirt/-/A-93459560",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-plaid-logo-short-sleeve-graphic-t-shirt/-/A-1002395422",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-plaid-badge-short-sleeve-graphic-t-shirt/-/A-93804022",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-power-nap-short-sleeve-graphic-t-shirt/-/A-1002395339",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-stantler-short-sleeve-graphic-t-shirt/-/A-93459534",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-gotta-eat-em-all-short-sleeve-graphic-t-shirt/-/A-1002376501",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-psyduck-spiral-short-sleeve-graphic-t-shirt/-/A-1002395375",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pokemon-pikachu-halloween-witch-and-pumpkin-short-sleeve-graphic-t-shirt/-/A-93804157",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-logo-short-sleeve-graphic-t-shirt/-/A-1002396072",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-moon-witch-short-sleeve-graphic-t-shirt/-/A-1002355435",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pika-pika-short-sleeve-graphic-t-shirt/-/A-1002395011",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-miraidon-collegiate-short-sleeve-graphic-t-shirt/-/A-1002355843",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-sled-short-sleeve-graphic-t-shirt/-/A-1002353191",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-retro-pikachu-short-sleeve-graphic-t-shirt/-/A-1002395419",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-39-pokemon-woven-button-up-shirt-aqua-blue/-/A-93600068",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-colorful-starters-banners-t-shirt/-/A-1001414682",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-and-eeveelutions-logo-t-shirt/-/A-87899951",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-025-electrifying-t-shirt/-/A-89014124",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-generations-fire-type-t-shirt/-/A-89829263",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-starters-grid-pokedex-t-shirt/-/A-89829707",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-charizard-info-grid-t-shirt/-/A-87966217",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-koraidon-group-t-shirt/-/A-89829821",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-lucario-type-fighting-steel-t-shirt/-/A-87899655",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-koraidon-portrait-t-shirt/-/A-89828983",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-it-s-my-5th-birthday-t-shirt/-/A-89404811",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-icon-bulbasaur-001-t-shirt/-/A-92915398",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-mewtwo-ready-for-battle-t-shirt/-/A-88537333",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-mewtwo-pikachu-and-psyduck-skateboard-decks-t-shirt/-/A-1001414785",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-fuecoco-circle-t-shirt/-/A-89014004",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-it-s-my-8th-birthday-starters-t-shirt/-/A-89828968",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-classic-logo-t-shirt/-/A-88104078",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-best-birthday-ever-t-shirt/-/A-87900128",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-charmander-retro-grid-t-shirt/-/A-87965942",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-halloween-pikachu-bag-of-candy-t-shirt/-/A-87574075",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-sleepy-trio-t-shirt/-/A-1002737907",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-character-circles-t-shirt/-/A-1001037841",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-halloween-pikachu-witch-costume-t-shirt/-/A-89631662",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-my-kind-of-party-happy-birthday-t-shirt/-/A-87900542",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-charmander-metallic-badge-t-shirt/-/A-87966082",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-bulbasaur-garden-t-shirt/-/A-1002738016",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-charmander-on-tree-stump-t-shirt/-/A-1002737804",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-happy-jump-t-shirt/-/A-87899538",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-christmas-window-t-shirt/-/A-87965801",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-squirtle-retro-grid-t-shirt/-/A-88745796",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-happy-holidays-crew-t-shirt/-/A-89631955",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-christmas-tree-friends-t-shirt/-/A-87965764",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-glaceon-ice-attack-t-shirt/-/A-92913826",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-icon-gengar-094-t-shirt/-/A-92915149",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-025-pikachu-t-shirt/-/A-89829973",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-oddish-outline-t-shirt/-/A-90565671",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-clefairy-moonlit-dance-t-shirt/-/A-89014915",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-halloween-pikachu-caramel-apple-t-shirt/-/A-87574151",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-poke-balls-t-shirt/-/A-87899433",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-colorful-friends-t-shirt/-/A-89014101",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-comic-squirtle-t-shirt/-/A-89829268",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-halloween-pikachu-bag-of-candy-t-shirt/-/A-89632054",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/pokemon-boys-ready-to-battle-gen-1-pokemon-character-kids-t-shirt/-/A-92506894",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-outer-space-mismagius-t-shirt/-/A-92914285",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-christmas-pikachu-sleigh-t-shirt/-/A-87756197",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-icy-types-t-shirt/-/A-92913618",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-squirtle-metallic-badge-t-shirt/-/A-88745808",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-ice-types-artistic-t-shirt/-/A-92913685",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-grass-type-group-t-shirt/-/A-87965609",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-paint-splash-vulpix-t-shirt/-/A-92913797",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-black-and-white-t-shirt/-/A-89829289",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-ready-to-battle-retro-grid-t-shirt/-/A-87966024",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-halloween-pikachu-jack-o-lantern-t-shirt/-/A-89631614",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-halloween-pikachu-wizard-costume-t-shirt/-/A-87573776",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-watercolor-eevee-t-shirt/-/A-92915393",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-lineart-mismagius-t-shirt/-/A-92914042",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-miraidon-group-t-shirt/-/A-89829644",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-halloween-pikachu-trick-or-treat-t-shirt/-/A-87573809",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-laughing-t-shirt/-/A-86819293",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-koraidon-circle-t-shirt/-/A-89013894",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-halloween-pikachu-witch-hat-t-shirt/-/A-87573736",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-and-eevee-happy-holidays-t-shirt/-/A-89631862",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pals-pikachu-and-eevee-t-shirt/-/A-92914617",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-gotta-catch-em-all-flowers-t-shirt/-/A-1002738011",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-sweet-pink-neon-t-shirt/-/A-89829269",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-it-s-my-10th-birthday-pikachu-t-shirt/-/A-89830107",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-rocks-t-shirt/-/A-89013730",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-sitting-portrait-t-shirt/-/A-89012962",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-charmander-kanto-tour-t-shirt/-/A-89829609",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-get-ready-to-battle-pikachu-retro-t-shirt/-/A-87966143",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-logo-pikachu-wink-t-shirt/-/A-89829575",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-comic-panels-t-shirt/-/A-89830035",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-clefairy-large-portrait-t-shirt/-/A-89014687",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-bulbasaur-retro-grid-t-shirt/-/A-87966029",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-eevee-face-t-shirt/-/A-86819156",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-rules-guitar-t-shirt/-/A-89828869",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-floral-oddish-t-shirt/-/A-90565791",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-trainer-characters-t-shirt/-/A-89013618",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-mismagius-0429-t-shirt/-/A-92914065",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-celestial-clefairy-t-shirt/-/A-1002737404",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-christmas-happy-holidays-snowman-t-shirt/-/A-87756418",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-colorful-sylveon-stars-t-shirt/-/A-1002737585",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-charmander-line-art-t-shirt/-/A-86819255",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-it-s-my-9th-birthday-pikachu-t-shirt/-/A-89830084",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-character-box-up-rainbow-t-shirt/-/A-86819206",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-it-s-my-birthday-t-shirt/-/A-87965884",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/pokemon-boy-s-game-face-generation-1-starter-characters-kids-t-shirt/-/A-92624064",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-ghost-type-group-t-shirt/-/A-87965855",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-majestic-bidoof-t-shirt/-/A-1002737776",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-squirtle-rocks-t-shirt/-/A-89828772",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-blastoise-paint-splatter-t-shirt/-/A-89014458",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-quaxly-circle-t-shirt/-/A-89013286",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-christmas-pikachu-and-delibird-happy-holidays-t-shirt/-/A-87756292",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-halloween-pikachu-witch-costume-t-shirt/-/A-87573749",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-halloween-this-is-my-eevee-costume-t-shirt/-/A-89632370",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-and-eevee-cuteness-overload-happy-birthday-t-shirt/-/A-89014051",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-colorful-square-characters-t-shirt/-/A-89013632",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-cute-jigglypuff-t-shirt/-/A-86819292",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-3d-retro-title-t-shirt/-/A-89828893",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-squirtle-kanto-tour-t-shirt/-/A-89828667",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-ghost-type-mismagius-t-shirt/-/A-92914220",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-sweet-cupcake-neon-t-shirt/-/A-89829506",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-bulbasaur-wink-face-t-shirt/-/A-86819058",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-bulbasaur-squirtle-and-charmander-good-vibes-t-shirt/-/A-86819267",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-halloween-trick-or-treating-pikachu-t-shirt/-/A-89632304",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-christmas-happy-holidays-patch-t-shirt/-/A-87756406",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-eevee-happy-birthday-red-t-shirt/-/A-87900073",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-gotta-catch-em-all-group-t-shirt/-/A-86819277",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-happy-holidays-snowman-pikachu-t-shirt/-/A-89632649",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-christmas-jigglypuff-and-fennekin-stocking-t-shirt/-/A-87756287",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-pikachu-have-a-charged-up-birthday-t-shirt/-/A-88537645",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-halloween-pumpkin-pikachu-t-shirt/-/A-89631593",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-majestic-bidoof-t-shirt/-/A-1002737772",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-halloween-night-mismagius-t-shirt/-/A-92914405",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pokemon-squirtle-best-birthday-ever-t-shirt/-/A-87900161",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-sprigatito-stats/-/A-1002356503",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-eevee-evolution-stickers/-/A-1002396636",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-group-in-circle/-/A-1002348242",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-meowth-mischevious-laugh/-/A-1002387223",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-trick-or-treat/-/A-1002355340",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-dragonite-charizard-prepare-for-battle/-/A-1002356621",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-bulba-pattern/-/A-1002352481",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-fuecoco-stats/-/A-1002356643",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-miraidon-legend/-/A-1002356705",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-happy-halloween/-/A-1002404815",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-friends-retro-checkered/-/A-1002377879",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-starry-mew/-/A-1002396505",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-eat-sleep-battle-repeat/-/A-1002386643",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-and-friends/-/A-1002386900",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-slowpoke-relax-do-nothing-repeat/-/A-1002377563",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-eevee-group/-/A-1002356626",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-moon-witch/-/A-1002355332",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-snorlax-team-sleep/-/A-1002377698",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-squirtle-bulbasaur-charmander-group/-/A-1002348223",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pick-of-the-patch/-/A-1002376895",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-info-chart/-/A-1002396618",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-the-snuggle-is-real-pikachu-and-piplup/-/A-1002350467",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-mewtwo-battle/-/A-1002356478",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-manga-comic-style-lightning/-/A-1002377501",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-battle-ready/-/A-1002348217",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-electric-type-pikachu/-/A-1002385287",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-japanese/-/A-1002386260",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-magikarp/-/A-1002395607",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-eevee-friends-retro-stripe/-/A-1002384513",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-champ-pikachu-shy/-/A-1002377580",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-psyduck-confusion/-/A-1002377809",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-psyduck-anime/-/A-1002377450",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-psyduck-snorlax-gengar-cool/-/A-1002377363",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-peeking-pikachu/-/A-1002360539",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-kanto-starters/-/A-1002356667",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pok-mon-athletic/-/A-1002396233",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pokeball-trainer/-/A-1002386530",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pika-pikachu-grid/-/A-1002380491",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-thunderbolt/-/A-1002394996",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-pikachu-thumbs-up-kanji-raglan-graphic-t-shirt/-/A-1004718434",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-koraidon-legend/-/A-1002356537",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/boys-pok-mon-happy-meowth-retro/-/A-1002377850",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pokemon, Tops",
        "filters": {
          "brand": "Pokemon"
        }
      },
      {
        "url": "https://www.target.com/p/polly-pocket-take-me-to-pollyville-crew-neck-long-sleeve-gray-heather-youth-sweatshirt/-/A-92984431",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Polly Pocket, Tops",
        "filters": {
          "brand": "Polly Pocket"
        }
      },
      {
        "url": "https://www.target.com/p/poppy-playtime-boys-poppy-and-wuggy-character-graphic-t-shirt/-/A-91166493",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Poppy Playtime, Tops",
        "filters": {
          "brand": "Poppy Playtime"
        }
      },
      {
        "url": "https://www.target.com/p/poppy-playtime-boys-bad-guys-huggy-mommy-long-legs-boxy-boo-t-shirt/-/A-91166435",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Poppy Playtime, Tops",
        "filters": {
          "brand": "Poppy Playtime"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pound-puppies-puppy-pocket-t-shirt/-/A-82885979",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pound Puppies, Tops",
        "filters": {
          "brand": "Pound Puppies"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pound-puppies-grateful-for-puppies-t-shirt/-/A-89581438",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pound Puppies, Tops",
        "filters": {
          "brand": "Pound Puppies"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-pound-puppies-beagle-love-t-shirt/-/A-1001930527",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Pound Puppies, Tops",
        "filters": {
          "brand": "Pound Puppies"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-character-grid-boy-s-short-sleeve-tee-short-sleeve-graphic-t-shirt/-/A-1001959461",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-zord-character-heads-short-sleeve-graphic-t-shirt/-/A-92724121",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-character-group-block-short-sleeve-graphic-t-shirt/-/A-92722408",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-blue-ranger-costume-tee-t-shirt/-/A-87692992",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-red-ranger-with-faces-boy-s-short-sleeve-tee-short-sleeve-graphic-t-shirt/-/A-1002027771",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-mighty-morphin-group-short-sleeve-graphic-t-shirt/-/A-93772186",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-black-ranger-costume-tee-t-shirt/-/A-87692962",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-retro-rangers-boy-s-short-sleeve-tee-short-sleeve-graphic-t-shirt/-/A-1002029983",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-do-you-even-morph-bro-short-sleeve-graphic-t-shirt/-/A-92722597",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-zords-short-sleeve-graphic-t-shirt/-/A-1002029912",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-retro-rangers-comic-boy-s-short-sleeve-tee-short-sleeve-graphic-t-shirt/-/A-1002029986",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-morphin-time-yellow-short-sleeve-graphic-t-shirt/-/A-1001958886",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-morphin-time-pink-short-sleeve-graphic-t-shirt/-/A-1001959909",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-mighty-morphin-go-go-short-sleeve-graphic-t-shirt/-/A-93772026",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-morphin-time-green-short-sleeve-graphic-t-shirt/-/A-1001960391",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-morphin-time-black-short-sleeve-graphic-t-shirt/-/A-1001959868",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-bolt-logo-short-sleeve-graphic-t-shirt/-/A-93772036",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-character-heads-short-sleeve-graphic-t-shirt/-/A-1001958933",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-retro-logo-boy-s-short-sleeve-tee-short-sleeve-graphic-t-shirt/-/A-1002030041",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-go-go-group-short-sleeve-graphic-t-shirt/-/A-92722576",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-go-go-power-rangers-short-sleeve-graphic-t-shirt/-/A-1001960790",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-goldar-warrior-short-sleeve-graphic-t-shirt/-/A-93772032",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-morphin-time-blue-short-sleeve-graphic-t-shirt/-/A-1001960520",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boys-power-rangers-retro-comic-cover-boy-s-short-sleeve-tee-short-sleeve-graphic-t-shirt/-/A-1002030270",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-red-ranger-helmet-t-shirt/-/A-86926528",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-santa-rangers-t-shirt/-/A-82885860",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-geometric-ranger-helmet-t-shirt/-/A-82353862",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-diamond-team-t-shirt/-/A-84254761",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-beast-morpher-neon-panels-t-shirt/-/A-82354540",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-classic-lightning-bolt-logo-t-shirt/-/A-84254590",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-angel-grove-rangers-t-shirt/-/A-87692923",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-blue-ranger-helmet-t-shirt/-/A-87693053",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-rita-repulsa-epic-poster-t-shirt/-/A-87692649",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-team-collage-poster-t-shirt/-/A-84254958",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-morph-color-text-t-shirt/-/A-84254989",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-green-ranger-helmet-t-shirt/-/A-87691566",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-easter-power-peeps-t-shirt/-/A-1002735925",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-full-on-megazord-t-shirt/-/A-84255117",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-periodic-table-of-heroes-t-shirt/-/A-87692828",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-black-ranger-helmet-t-shirt/-/A-87693009",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-rainbow-poster-t-shirt/-/A-84254768",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-lightning-bolt-logo-t-shirt/-/A-84254435",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-shadow-text-t-shirt/-/A-84254737",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-morph-team-t-shirt/-/A-84255403",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-megazord-schematics-t-shirt/-/A-84254712",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-power-rangers-beast-morphers-flash-t-shirt/-/A-87691541",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Power Rangers, Tops",
        "filters": {
          "brand": "Power Rangers"
        }
      },
      {
        "url": "https://www.target.com/p/primary-kids-rainbow-bolt-tee/-/A-1002106366",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Primary, Tops",
        "filters": {
          "brand": "Primary"
        }
      },
      {
        "url": "https://www.target.com/p/primary-kids-rainbow-tulips-tee/-/A-1002106433",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Primary, Tops",
        "filters": {
          "brand": "Primary"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-puss-in-boots-the-last-wish-the-cat-the-boots-the-legend-t-shirt/-/A-88355080",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Puss in Boots, Tops",
        "filters": {
          "brand": "Puss in Boots"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-puss-in-boots-the-last-wish-space-poster-t-shirt/-/A-88355466",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Puss in Boots, Tops",
        "filters": {
          "brand": "Puss in Boots"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-puss-in-boots-the-last-wish-el-macho-gato-t-shirt/-/A-88356061",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Puss in Boots, Tops",
        "filters": {
          "brand": "Puss in Boots"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-puss-in-boots-the-last-wish-adventure-is-calling-t-shirt/-/A-88355576",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Puss in Boots, Tops",
        "filters": {
          "brand": "Puss in Boots"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-puss-in-boots-the-last-wish-character-poster-t-shirt/-/A-88355591",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Puss in Boots, Tops",
        "filters": {
          "brand": "Puss in Boots"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-puss-in-boots-the-last-wish-animated-cards-t-shirt/-/A-88355902",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Puss in Boots, Tops",
        "filters": {
          "brand": "Puss in Boots"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-puss-in-boots-the-last-wish-adventure-gatos-t-shirt/-/A-88356067",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Puss in Boots, Tops",
        "filters": {
          "brand": "Puss in Boots"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-puss-in-boots-the-last-wish-the-leche-whisperer-t-shirt/-/A-88355324",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Puss in Boots, Tops",
        "filters": {
          "brand": "Puss in Boots"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-puss-in-boots-the-last-wish-yellow-silhouette-t-shirt/-/A-88355696",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Puss in Boots, Tops",
        "filters": {
          "brand": "Puss in Boots"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-puss-in-boots-the-last-wish-distressed-purple-puss-in-boots-t-shirt/-/A-88355263",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Puss in Boots, Tops",
        "filters": {
          "brand": "Puss in Boots"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-puss-in-boots-the-last-wish-movie-logo-t-shirt/-/A-88355174",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Puss in Boots, Tops",
        "filters": {
          "brand": "Puss in Boots"
        }
      },
      {
        "url": "https://www.target.com/p/rabbids-bwaaah-youth-red-graphic-tee/-/A-85729709",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Rabbids, Tops",
        "filters": {
          "brand": "Rabbids"
        }
      },
      {
        "url": "https://www.target.com/p/rabbids-bwaah-boy-s-navy-t-shirt/-/A-85731216",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Rabbids, Tops",
        "filters": {
          "brand": "Rabbids"
        }
      },
      {
        "url": "https://www.target.com/p/rabbids-remote-control-boy-s-red-t-shirt/-/A-86102387",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Rabbids, Tops",
        "filters": {
          "brand": "Rabbids"
        }
      },
      {
        "url": "https://www.target.com/p/rabbids-bwaaaah-frame-boy-s-black-t-shirt/-/A-85729038",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Rabbids, Tops",
        "filters": {
          "brand": "Rabbids"
        }
      },
      {
        "url": "https://www.target.com/p/rabbids-free-your-inner-rabbid-boy-s-royal-blue-t-shirt/-/A-85731039",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Rabbids, Tops",
        "filters": {
          "brand": "Rabbids"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-rainbow-brite-lucky-t-shirt/-/A-1002302847",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Rainbow Brite, Tops",
        "filters": {
          "brand": "Rainbow Brite"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-raya-and-the-last-dragon-tuk-tuk-built-for-speed-t-shirt/-/A-82524348",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Raya and the Last Dragon, Tops",
        "filters": {
          "brand": "Raya and the Last Dragon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-raya-and-the-last-dragon-colorful-characters-in-action-t-shirt/-/A-82525221",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Raya and the Last Dragon, Tops",
        "filters": {
          "brand": "Raya and the Last Dragon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-raya-and-the-last-dragon-desert-raya-t-shirt/-/A-82525115",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Raya and the Last Dragon, Tops",
        "filters": {
          "brand": "Raya and the Last Dragon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-raya-and-the-last-dragon-be-brave-be-strong-never-waver-t-shirt/-/A-82525483",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Raya and the Last Dragon, Tops",
        "filters": {
          "brand": "Raya and the Last Dragon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-raya-and-the-last-dragon-classic-logo-t-shirt/-/A-82524768",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Raya and the Last Dragon, Tops",
        "filters": {
          "brand": "Raya and the Last Dragon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-raya-and-the-last-dragon-boun-team-work-t-shirt/-/A-82524291",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Raya and the Last Dragon, Tops",
        "filters": {
          "brand": "Raya and the Last Dragon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-raya-and-the-last-dragon-tuk-tuk-hard-outside-inside-color-changing-t-shirt/-/A-82523782",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Raya and the Last Dragon, Tops",
        "filters": {
          "brand": "Raya and the Last Dragon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-raya-and-the-last-dragon-seek-the-light-t-shirt/-/A-82524330",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Raya and the Last Dragon, Tops",
        "filters": {
          "brand": "Raya and the Last Dragon"
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
