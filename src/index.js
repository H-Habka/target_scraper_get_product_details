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
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-pineapple-silhouette-t-shirt/-/A-85438327",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-28-kanji-t-shirt/-/A-85438298",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-happy-jump-t-shirt/-/A-89406104",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-sunshine-and-good-vibes-mickey-t-shirt/-/A-89405562",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-starry-silhouette-t-shirt/-/A-85761515",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-daisy-and-minnie-already-fabulous-t-shirt/-/A-90551403",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-extra-sprinkles-donut-silhouette-t-shirt/-/A-85435307",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-pizza-silhouette-t-shirt/-/A-85436755",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-mickey-friends-pumpkin-halloween-face/-/A-87574098",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-tie-dye-silhouette-t-shirt/-/A-85435967",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-gardener-t-shirt/-/A-85436390",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-classic-circle-t-shirt/-/A-85436553",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-polygonal-portrait-t-shirt/-/A-90551406",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-star-sunglasses-t-shirt/-/A-90551335",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-oh-boy-underwater-t-shirt/-/A-90925015",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-home-iconic-ears-t-shirt/-/A-85436127",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-mickey-friends-vintage-large-pose/-/A-87574220",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-plaid-silhouette-t-shirt/-/A-85436305",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-have-a-goofy-christmas-t-shirt/-/A-85763895",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-retro-group-t-shirt/-/A-89405968",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-radical-t-shirt/-/A-85437037",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-gardener-t-shirt/-/A-85436390",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-sunshine-and-good-vibes-mickey-t-shirt/-/A-89405562",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-classic-circle-t-shirt/-/A-85436553",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-polygonal-portrait-t-shirt/-/A-90551406",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-star-sunglasses-t-shirt/-/A-90551335",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-ugly-christmas-sweater-t-shirt/-/A-87433654",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-oh-boy-underwater-t-shirt/-/A-90925015",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-home-iconic-ears-t-shirt/-/A-85436127",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-plaid-silhouette-t-shirt/-/A-85436305",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-have-a-goofy-christmas-t-shirt/-/A-85763895",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-best-friend-panels-distressed-t-shirt/-/A-86926666",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-halloween-let-s-get-creepy-t-shirt/-/A-89929679",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-holographic-tie-dye-t-shirt/-/A-85438203",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-distressed-cool-brother-t-shirt/-/A-92215070",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-logo-filled-with-hearts-t-shirt/-/A-85760759",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-team-mickey-badge-mexico-t-shirt/-/A-85438774",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-walking-pose-t-shirt/-/A-89405634",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-retro-mickey-and-minnie-happy-holidays-t-shirt/-/A-89406302",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-cool-summer-brother-t-shirt/-/A-92215753",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minnie-mouse-happy-christmas-headband-t-shirt/-/A-90167408",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-mickey-friends-mickey-mouse-expressions-boxes/-/A-87574222",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-christmas-tree-ears-t-shirt/-/A-90164902",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-donald-duck-bah-humbug-distressed-t-shirt/-/A-89406468",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-pluto-smiles-t-shirt/-/A-85435921",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-pluto-smiles-t-shirt/-/A-85435921",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-donald-duck-grayscale-wave-t-shirt/-/A-89406187",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-holiday-cheers-wreath-t-shirt/-/A-89405814",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-print-t-shirt/-/A-89405741",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-goofy-ornament-print-t-shirt/-/A-89405939",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-be-kind-to-our-planet-mickey-mouse-logo-t-shirt/-/A-87894900",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-all-american-festival-tour-t-shirt/-/A-85760592",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-donald-duck-colorful-text-t-shirt/-/A-87894892",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-mouse-camo-bow-t-shirt/-/A-85436246",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-colorful-name-t-shirt/-/A-85437265",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-tropical-flower-silhouette-t-shirt/-/A-85436539",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-halloween-huey-dewy-and-louie-t-shirt/-/A-89929729",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-team-mickey-badge-spain-t-shirt/-/A-85438733",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-one-man-band-t-shirt/-/A-85439091",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-hello-fall-t-shirt/-/A-85763777",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-unlucky-donald-t-shirt/-/A-85438804",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-master-kung-fu-poses-t-shirt/-/A-89406076",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-minnie-heart-silhouette-t-shirt/-/A-85761472",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-mickey-friends-black-and-white-mickey-mouse/-/A-87574290",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-mickey-friends-best-friend-panels/-/A-87574271",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-hello-spring-t-shirt/-/A-85760937",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-donald-and-daisy-in-love-t-shirt/-/A-85763774",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-mickey-friends-mickey-mouse-astronaut/-/A-87574281",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-neon-line-year-of-mouse-t-shirt/-/A-89406462",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-neon-line-year-of-mouse-t-shirt/-/A-89406462",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-foliage-silhouette-t-shirt/-/A-85437434",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-minnie-totally-epic-t-shirt/-/A-85437867",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-hello-spring-t-shirt/-/A-85760937",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-periodic-table-of-element-friends-t-shirt/-/A-89406403",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-letter-for-santa-t-shirt/-/A-90165260",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-donald-duck-clover-luck-dance-t-shirt/-/A-85760844",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-daisy-duck-t-shirt/-/A-89406064",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-patriotic-dancing-goofy-t-shirt/-/A-85760656",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-goofy-ho-ho-ho-t-shirt/-/A-89405849",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-egg-silhouette-t-shirt/-/A-85760863",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-minnie-mouse-frightened-t-shirt/-/A-85753590",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-panels-t-shirt/-/A-85435683",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-family-squad-t-shirt/-/A-92215094",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-tie-dye-daisy-t-shirt/-/A-85435355",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-paisley-silhouette-t-shirt/-/A-85760691",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-friends-cropped-portraits-t-shirt/-/A-85438714",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-distressed-vacay-mode-t-shirt/-/A-92215687",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-racecar-driver-mickey-t-shirt/-/A-1004922141",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-birthday-kid-t-shirt/-/A-91642939",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-original-pals-t-shirt/-/A-1004563624",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-modern-year-of-mouse-t-shirt/-/A-89406116",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-stay-cool-snowboarding-t-shirt/-/A-85760598",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-8th-birthday-let-s-party-t-shirt/-/A-91643227",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-halloween-group-faces-t-shirt/-/A-90924817",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-steampunk-style-mickey-t-shirt/-/A-1004922437",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-firefighter-in-training-t-shirt/-/A-90925636",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-halloween-boo-yah-logo-t-shirt/-/A-90925114",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-original-pals-t-shirt/-/A-1004563624",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-modern-year-of-mouse-t-shirt/-/A-89406116",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-it-s-my-2nd-birthday-t-shirt/-/A-91643596",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-peace-sign-gloves-t-shirt/-/A-1004546382",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-kung-fu-mickey-t-shirt/-/A-1004922152",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-hooray-it-s-my-4th-birthday-t-shirt/-/A-91643723",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-photo-grid-t-shirt/-/A-90551012",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-bow-tie-with-clovers-t-shirt/-/A-85761217",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-colorful-retro-sunset-2024-t-shirt/-/A-92215730",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-americana-head-icon-t-shirt/-/A-90924680",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-suit-up-mickey-t-shirt/-/A-1004922118",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-stay-cool-snowboarding-t-shirt/-/A-85760598",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-birthday-boy-t-shirt/-/A-91642960",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-jet-pilot-mickey-t-shirt/-/A-1004922146",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-happy-pals-t-shirt/-/A-1004564470",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-donald-duck-paint-swirl-t-shirt/-/A-89406221",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-birthday-kid-t-shirt/-/A-91642939",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minnie-mouse-distressed-cool-brother-t-shirt/-/A-92215541",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-happy-clover-friends-t-shirt/-/A-85761301",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-santa-suit-t-shirt/-/A-90924388",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-donald-duck-paint-swirl-t-shirt/-/A-89406221",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-best-day-ever-heart-sign-t-shirt/-/A-89918357",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-watercolor-mickey-t-shirt/-/A-1004922066",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-7th-birthday-let-s-party-t-shirt/-/A-91643186",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-suit-up-mickey-t-shirt/-/A-1004922118",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-egg-silhouette-t-shirt/-/A-85760863",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-distressed-group-circle-t-shirt/-/A-89405657",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-cozy-vibes-cabin-t-shirt/-/A-1004563619",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-astronaut-t-shirt/-/A-85439233",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-the-one-and-only-t-shirt/-/A-90551077",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-neon-silhouette-t-shirt/-/A-1005083407",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-the-birthday-boy-is-3-t-shirt/-/A-91643960",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-old-school-pose-t-shirt/-/A-1004922318",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-feeling-lucky-t-shirt/-/A-1002301161",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-distressed-icon-pose-t-shirt/-/A-1004546604",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-buffalo-check-pattern-silhouette-t-shirt/-/A-89406446",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-mickey-friends-mickey-mouse-gamer/-/A-87574138",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-the-birthday-boy-is-7-t-shirt/-/A-89143214",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-steampunk-style-mickey-t-shirt/-/A-1004922437",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-birthday-boy-t-shirt/-/A-91642960",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-it-s-my-2nd-birthday-t-shirt/-/A-91643596",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-hooray-it-s-my-8th-birthday-t-shirt/-/A-91643589",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-sporty-side-profile-t-shirt/-/A-90550912",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-firefighter-in-training-t-shirt/-/A-90925636",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-since-1918-retro-t-shirt/-/A-1004563538",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-steampunk-style-mickey-t-shirt/-/A-1004922437",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-retro-lumberjack-t-shirt/-/A-1004922190",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-original-retro-logo-t-shirt/-/A-1004401660",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-neon-silhouette-t-shirt/-/A-1005083407",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-pastel-minnie-t-shirt/-/A-90924472",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-country-club-mickey-t-shirt/-/A-1004546498",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-3rd-birthday-oh-boy-let-s-party-mickey-t-shirt/-/A-89405720",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-distressed-icon-pose-t-shirt/-/A-1004546604",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-egg-silhouette-t-shirt/-/A-85760863",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-kung-fu-mickey-t-shirt/-/A-1004922152",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-hooray-it-s-my-2nd-birthday-t-shirt/-/A-91643790",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-distressed-vacay-mode-t-shirt/-/A-92215687",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-birthday-boy-t-shirt/-/A-91642960",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-forward-together-t-shirt/-/A-90925004",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minnie-mouse-distressed-cool-brother-t-shirt/-/A-92215541",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-racecar-driver-mickey-t-shirt/-/A-1004922141",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-retro-check-sketch-t-shirt/-/A-1002992961",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-suit-up-mickey-t-shirt/-/A-1004922118",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-power-pose-mickey-t-shirt/-/A-1004922451",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-couple-hug-t-shirt/-/A-90551115",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-hoodie-mickey-t-shirt/-/A-89406052",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-distressed-sun-icon-t-shirt/-/A-1003878427",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-family-colorful-t-shirt/-/A-92215795",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-classic-glove-pose-t-shirt/-/A-1004546444",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-since-1918-retro-t-shirt/-/A-1004563538",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-family-colorful-t-shirt/-/A-92215795",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-this-family-is-in-vacation-mode-t-shirt/-/A-85753400",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-it-s-my-8th-birthday-t-shirt/-/A-91643377",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-neon-silhouette-t-shirt/-/A-1005083407",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-the-birthday-boy-is-5-t-shirt/-/A-91643900",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-it-s-my-4th-birthday-t-shirt/-/A-91643483",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-retro-lumberjack-t-shirt/-/A-1004922190",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-hooray-it-s-my-2nd-birthday-t-shirt/-/A-91643790",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-donald-duck-angry-jump-t-shirt/-/A-1004563658",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-halloween-boo-yah-logo-t-shirt/-/A-90925114",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-7th-birthday-let-s-party-t-shirt/-/A-91643186",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creepers-value-4-pack-of-youth-boy-s-short-sleeve-tees/-/A-1002538591",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/a-minecraft-movie-chicken-jockey-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1004011346",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-chrome-logo-boy-s-black-t-shirt/-/A-85450933",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-survival-mode-2-pack-boy-s-crew-neck-short-sleeve-athletic-performance-swim-tee-combo-set/-/A-92703069",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-4-pack-boy-s-crew-neck-short-sleeve-t-shirt-combo-set/-/A-91803872",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-mine-build-nap-boy-s-black-t-shirt/-/A-85352089",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-boom-survival-mode-3-pack-boy-s-crew-neck-short-sleeve-t-shirt-combo-set/-/A-92356428",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/a-minecraft-movie-chicken-jockey-youth-navy-crew-neck-long-sleeve-tee/-/A-1004012381",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-boys-3-pack-set-includes-two-tees-and-mesh-shorts/-/A-90125996",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-block-character-and-title-logo-oversized-graphic-youth-sweatshirt-and-joggers-2-piece-set/-/A-89766048",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creepers-with-logo-crew-neck-long-sleeve-youth-black-tee/-/A-89838390",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-minecraft-3-pc-hoodie-jogger-t-shirt-combo/-/A-90021863",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-trip-boy-s-athletic-heather-long-sleeve-shirt/-/A-86104578",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-robot-diagram-crew-neck-long-sleeve-athletic-heather-youth-tee/-/A-89838435",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-7th-b-day-boy-s-black-crew-neck-short-sleeve-t-shirt/-/A-1003429562",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-icon-repeated-boy-s-black-long-sleeve-shirt/-/A-85783025",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-6th-b-day-boy-s-black-crew-neck-short-sleeve-t-shirt/-/A-1003429570",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-time-to-mine-boy-s-3-pack-crew-neck-short-sleeve-t-shirt-set/-/A-1001039598",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-crafting-since-alpha-youth-black-long-sleeve-shirt/-/A-86219139",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-5th-b-day-boy-s-black-crew-neck-short-sleeve-t-shirt/-/A-1003429586",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-a-minecraft-movie-creeper-movie-logo-performance-tee/-/A-1004552575",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-minecraft-mineral-wash-tank-top-green/-/A-94408552",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-character-boxes-t-shirt/-/A-83875062",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-boys-black-t-shirt/-/A-85354809",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-neon-violet-and-green-graphic-youth-boys-black-t-shirt/-/A-87057087",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-camo-characters-boy-s-black-t-shirt/-/A-88303854",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-heroes-and-mobs-t-shirt/-/A-87102369",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-king-t-shirt/-/A-87102921",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-item-collection-t-shirt/-/A-85311903",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-wolf-t-shirt/-/A-83875626",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creepers-game-on-t-shirt/-/A-87101628",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-group-shot-t-shirt/-/A-83875807",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-boom-t-shirt/-/A-83875838",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-never-dig-straight-down-youth-black-graphic-tee/-/A-85354178",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-video-game-youth-boys-grey-short-sleeve-graphic-tee/-/A-84251897",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-video-game-youth-boys-black-graphic-tee-shirt/-/A-84005114",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-return-to-sender-youth-athletic-heather-graphic-tee/-/A-84941937",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-block-farm-animals-youth-dark-heather-graphic-tee/-/A-86219042",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-video-game-youth-boys-short-sleeve-grey-graphic-tee/-/A-84251946",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-title-logo-youth-black-graphic-tee/-/A-85353433",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-faux-pocket-creeper-performance-tee/-/A-83875190",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-face-performance-tee/-/A-85311734",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-graffiti-creeper-performance-tee/-/A-83875298",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-warden-distortion-clash-trend-graphic-youth-boys-navy-t-shirt/-/A-87057035",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-wolf-performance-tee/-/A-83875555",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-collage-performance-tee/-/A-83875484",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-character-boxes-performance-tee/-/A-83875950",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-survival-mode-sketch-performance-tee/-/A-83875139",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-diamond-miner-performance-tee/-/A-83875716",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-enderman-performance-tee/-/A-83875913",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-group-shot-performance-tee/-/A-83875874",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-create-explore-survive-distortion-clash-trend-graphic-youth-boys-athletic-heather-gray-t-shirt/-/A-87057006",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-having-a-blast-performance-tee/-/A-83875732",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-minecraft-woven-button-up-shirt-mint-green/-/A-93600071",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-minecraft-alex-fox-pig-adventure-mode-youth-navy-blue-short-sleeve-crew-neck-tee/-/A-89001904",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-periodic-table-of-materials-t-shirt/-/A-1003175179",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-adorable-adventure-mode-t-shirt/-/A-1003167930",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/a-minecraft-movie-chicken-jockey-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1004011346",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-animated-icon-faces-t-shirt/-/A-1003168219",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-happy-6th-birthday-t-shirt/-/A-1000140658",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-graffiti-creeper-t-shirt/-/A-1001937126",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-rainbow-characters-lines-t-shirt/-/A-1000140682",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-movie-boys-black-crew-neck-short-sleeve-t-shirt/-/A-1004429833",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-happy-5th-birthday-t-shirt/-/A-1000140690",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-boy-s-charcoal-heather-t-shirt/-/A-84941846",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-steve-create-explore-survive-performance-tee/-/A-83875468",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-alex-steve-portal-party-t-shirt/-/A-1003168773",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-happy-birthday-steve-and-alex-t-shirt/-/A-87406385",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-a-minecraft-movie-classic-gang-t-shirt/-/A-1002883765",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-minecraft-miner-s-society-short-sleeve-black-graphic-t-shirt/-/A-88303817",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-collage-t-shirt/-/A-85312554",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-enderman-tarot-t-shirt/-/A-1003175184",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-a-minecraft-movie-garrett-and-steve-squad-t-shirt/-/A-1002884157",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-dungeons-creeper-graphic-boy-s-royal-blue-t-shirt/-/A-87450686",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-animals-stack-pose-t-shirt/-/A-1003168135",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-jolly-mobs-collection-t-shirt/-/A-1001937277",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-warden-distortion-clash-trend-graphic-youth-boys-athletic-heather-gray-t-shirt/-/A-87056989",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-two-block-kittens-in-a-pocket-youth-royal-blue-short-sleeve-crew-neck-tee/-/A-89050943",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creepers-tnt-all-over-print-youth-athletic-heather-crew-neck-short-sleeve-t-shirt/-/A-1004470762",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-a-minecraft-movie-piglins-army-t-shirt/-/A-1002884234",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-youth-short-sleeve-crew-neck-tee/-/A-91485781",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-red-white-and-boom-t-shirt/-/A-1004395526",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-steve-with-pitchfork-boy-s-black-t-shirt/-/A-87481806",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-ssssssss-youth-boy-s-charcoal-t-shirt/-/A-88303807",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-sunny-days-t-shirt/-/A-1002735303",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-adventure-club-best-buddies-boy-s-white-t-shirt/-/A-87367710",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-wild-frogs-t-shirt/-/A-1001936996",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-character-panels-boy-s-charcoal-t-shirt/-/A-86102604",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-flat-panels-boy-s-white-tshirt/-/A-86383593",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-nap-and-repeat-t-shirt/-/A-1001937038",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-mob-performance-tee/-/A-83875880",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-spring-animals-t-shirt/-/A-1002735376",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-a-minecraft-movie-garrett-trash-your-old-life-t-shirt/-/A-1002884011",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-a-minecraft-movie-creatures-in-action-t-shirt/-/A-1002884058",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-a-minecraft-movie-creepers-scene-t-shirt/-/A-1002883719",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-firework-stars-t-shirt/-/A-1003168814",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-pocket-crew-neck-short-sleeve-boy-s-green-colorblock-t-shirt/-/A-1001378478",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-create-explore-survive-map-t-shirt/-/A-1003167741",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-spring-has-spawned-t-shirt/-/A-1002735394",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-overworld-explorer-badge-t-shirt/-/A-1003153000",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-fear-the-wither-performance-tee/-/A-83875332",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-the-summer-crew-t-shirt/-/A-1003167790",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-faux-pocket-creeper-t-shirt/-/A-83875425",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-dungeons-sword-unite-fight-survive-boy-s-navy-t-shirt/-/A-87215889",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-create-explore-survive-underwater-mining-boy-s-royal-blue-tshirt/-/A-86383127",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-alex-survival-mode-crew-neck-short-sleeve-boys-black-t-shirt/-/A-88920515",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-dungeons-boxed-in-characters-boy-s-navy-t-shirt/-/A-87215588",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-summer-school-graphic-youth-boy-s-navy-t-shirt/-/A-87450596",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-alex-and-creeper-boom-t-shirt/-/A-1003167940",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-mountain-keep-on-climbing-t-shirt/-/A-1003152990",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-snow-season-t-shirt/-/A-1000140663",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-in-a-box-t-shirt/-/A-87102498",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-holographic-grid-floor-t-shirt/-/A-1001092306",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-just-hoppin-around-t-shirt/-/A-88718823",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-steve-activities-t-shirt/-/A-1003168208",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-steve-watch-your-back-t-shirt/-/A-1003167935",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-distortion-clash-trend-boy-s-navy-blue-t-shirt/-/A-87367739",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-skeleton-distortion-clash-trend-graphic-youth-boys-royal-blue-t-shirt/-/A-87057171",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-survive-hearts-t-shirt/-/A-87102605",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-spread-joy-christmas-tree-t-shirt/-/A-90164573",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-zombie-moods-t-shirt/-/A-1003168230",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-campfire-survival-mode-t-shirt/-/A-1003165468",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-legends-logo-characters-crew-neck-short-sleeve-boy-s-white-t-shirt/-/A-89047659",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-adventurer-s-guild-boy-s-heather-grey-t-shirt/-/A-85355003",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-face-collage-t-shirt/-/A-87101831",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-holiday-theme-boy-s-red-t-shirt/-/A-87482079",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-warden-entity-t-shirt/-/A-1001937239",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creepers-short-fuse-boy-s-royal-blue-t-shirt/-/A-86316311",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-boom-performance-tee/-/A-83875261",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-dragon-youth-boys-white-t-shirt/-/A-86467389",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-sunny-days-t-shirt/-/A-1002735260",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-ssssssss-youth-boy-s-red-t-shirt/-/A-88303806",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-ssss-creeper-performance-tee/-/A-83875235",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-breeze-classic-logo-t-shirt/-/A-1003168142",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-character-panels-boy-s-royal-blue-t-shirt/-/A-86103030",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-boom-performance-tee/-/A-83875083",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-sleep-repeat-boy-s-charcoal-t-shirt/-/A-86102720",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-steve-and-skeleton-t-shirt/-/A-87101418",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-ender-buddies-t-shirt/-/A-87102258",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-fear-the-wither-t-shirt/-/A-1001092379",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-sun-s-down-zombies-around-youth-black-t-shirt/-/A-86103142",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creepers-rails-youth-charcoal-crew-neck-short-sleeve-shirt/-/A-1003245548",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-dungeons-hex-and-creeper-boy-s-heather-gray-t-shirt/-/A-87337816",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-overworld-explorer-est-2009-t-shirt/-/A-1003168199",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-halloween-creeper-haunted-house-t-shirt/-/A-89578338",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-welcome-to-my-lilypad-t-shirt/-/A-1003168223",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-welcome-to-my-lilypad-t-shirt/-/A-1003168223",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-ask-me-about-my-axolotl-adventures-t-shirt/-/A-1001092351",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-stay-gold-t-shirt/-/A-1003168909",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-zombie-youth-white-crew-neck-short-sleeve-shirt/-/A-1003245566",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-violet-warden-youth-boys-white-t-shirt/-/A-87057131",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-minecraft-short-sleeve-t-shirt/-/A-84706773",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-ssss-creeper-t-shirt/-/A-83875436",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-steve-and-alex-with-sword-and-bow-youth-white-t-shirt/-/A-86104600",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-short-fuse-creeper-t-shirt/-/A-1003175169",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-dungeons-character-group-and-logo-youth-white-t-shirt/-/A-87215847",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-christmas-tree-endermans-t-shirt/-/A-90164758",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-steve-create-explore-survive-t-shirt/-/A-83875462",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-create-explore-survive-performance-tee/-/A-83875660",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-dungeons-bone-icon-boy-s-heather-gray-t-shirt/-/A-87614755",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-sssseasons-greetings-creeper-t-shirt/-/A-87102015",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-graph-charged-t-shirt/-/A-87101098",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-sleep-repeat-boy-s-athletic-heather-t-shirt/-/A-86103897",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-let-s-explore-together-crew-neck-short-sleeve-boy-s-white-t-shirt/-/A-92984089",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-neon-pink-skeleton-youth-boys-black-t-shirt/-/A-87057082",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-minecraft-character-boxes/-/A-87574181",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-stand-out-creeper-white-t-shirt/-/A-87406361",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-legends-poster-t-shirt/-/A-89187254",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-valentine-s-day-creeper-heart-t-shirt/-/A-88323891",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-adventure-club-t-shirt/-/A-1003168207",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/mojang-studios-boys-minecraft-flaming-game-over-pixel-design-t-shirt/-/A-92506891",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-cry-woof-t-shirt/-/A-1003146609",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-a-minecraft-movie-creatures-attack-t-shirt/-/A-1002884251",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-ssssssss-youth-boy-s-royal-blue-t-shirt/-/A-88303769",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creepers-need-hugs-boy-s-athletic-heather-t-shirt/-/A-86103119",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-fish-and-mobs-t-shirt/-/A-87101793",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-mine-build-nap-boy-s-black-t-shirt/-/A-85352089",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-tnt-sound-background-boy-s-navy-blue-t-shirt/-/A-87450610",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-enderman-and-the-trees-t-shirt/-/A-1003168204",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-farm-youth-white-crew-neck-short-sleeve-shirt/-/A-1003245618",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-alex-and-creepers-t-shirt/-/A-87102675",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-best-buddies-youth-boy-s-white-t-shirt/-/A-87143733",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-ssssssss-youth-boys-navy-blue-t-shirt/-/A-88303790",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-ssssssss-youth-boy-s-white-t-shirt/-/A-88303799",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-video-game-youth-boys-black-short-sleeve-shirt/-/A-83709826",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-character-panels-boy-s-navy-blue-t-shirt/-/A-86103926",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-road-youth-black-t-shirt/-/A-86103242",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-fear-the-wither-t-shirt/-/A-83875314",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-spring-animals-t-shirt/-/A-1002735352",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-alex-t-shirt/-/A-83875624",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-explore-team-t-shirt/-/A-87101867",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-graph-t-shirt/-/A-87102526",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-human-on-fire-t-shirt/-/A-1003168788",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-face-grid-boy-s-black-t-shirt/-/A-86102921",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-summer-icon-t-shirt/-/A-1003168796",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-sun-s-down-zombies-around-t-shirt/-/A-85311819",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-adventure-mode-bears-t-shirt/-/A-87102413",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-boom-colorful-t-shirt/-/A-87101116",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-legends-heroes-and-villains-t-shirt/-/A-89187283",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-diamond-miner-t-shirt/-/A-83875473",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-holiday-wreath-t-shirt/-/A-90164608",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-nap-attack-t-shirt/-/A-1003168763",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-keep-on-climbing-t-shirt/-/A-1003152985",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-boom-t-shirt/-/A-83875741",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-having-a-blast-t-shirt/-/A-83875090",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-survival-mode-art-crew-neck-short-sleeve-black-youth-t-shirt/-/A-89721996",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-adventure-club-time-to-mine-youth-boy-s-royal-blue-t-shirt/-/A-87143655",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-a-minecraft-movie-we-humbly-seek-gold-sheep-poster-t-shirt/-/A-1003557292",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-good-riddance-t-shirt/-/A-1003168768",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-spring-has-sprung-t-shirt/-/A-1002735271",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-beware-of-the-dark-t-shirt/-/A-1003175155",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-alex-and-wolf-best-buddies-t-shirt/-/A-1003168778",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-blaze-badge-t-shirt/-/A-1003175189",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-parrot-with-summer-icon-3d-text-youth-boy-s-royal-blue-t-shirt/-/A-87450643",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-hostile-mob-creeper-t-shirt/-/A-87101632",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-valentine-s-day-hearts-logo-t-shirt/-/A-88323927",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-a-minecraft-movie-piglin-general-pose-t-shirt/-/A-1002884203",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-dolphin-and-fishes-summer-crew-youth-boy-s-royal-blue-t-shirt/-/A-87450681",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-legends-friends-and-allies-banner-t-shirt/-/A-89187083",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-pixelated-build-create-t-shirt/-/A-87102421",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-steve-and-alex-love-pets-t-shirt/-/A-1001936955",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-short-fuse-crew-neck-short-sleeve-black-youth-t-shirt/-/A-89721977",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-boom-sssss-boy-s-black-crew-neck-short-sleeve-t-shirt/-/A-1003554684",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-pixel-item-grid-t-shirt/-/A-1003168793",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-legends-friends-and-allies-mobs-t-shirt/-/A-89187042",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-a-minecraft-movie-piglins-attack-t-shirt/-/A-1002884141",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-jolly-mobs-collection-t-shirt/-/A-1000140653",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-just-hoppin-around-t-shirt/-/A-1002735154",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-minecraft-creeper-collage/-/A-87574120",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-a-minecraft-movie-garrett-winners-never-die-scene-t-shirt/-/A-1003557313",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-creepers-need-hugs-t-shirt/-/A-1003168222",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-vector-spacer-t-shirt/-/A-1003175174",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-taiga-spruce-up-your-life-t-shirt/-/A-1003152995",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-spring-has-sprung-t-shirt/-/A-1002735221",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-creeper-adventure-club-t-shirt/-/A-1003168191",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-holographic-grid-floor-t-shirt/-/A-87406355",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-enderman-crew-neck-short-sleeve-boys-black-t-shirt/-/A-88492713",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-alex-boy-s-black-t-shirt/-/A-87614777",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-create-explore-survive-animals-t-shirt/-/A-87101232",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-legends-piglin-destruction-t-shirt/-/A-89187165",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-beware-of-the-dark-zombies-t-shirt/-/A-87101537",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-steve-and-alex-vs-mobs-t-shirt/-/A-85311989",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-mob-gang-t-shirt/-/A-87102644",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-creeper-face-build-explore-create-t-shirt/-/A-87101900",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-adventure-club-boy-s-black-t-shirt/-/A-87337777",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-legends-creeper-logo-t-shirt/-/A-89187286",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-dodge-lava-t-shirt/-/A-1003168897",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-splash-your-problems-away-t-shirt/-/A-1003168904",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-drowned-but-not-out-t-shirt/-/A-1003175153",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-steve-torch-escape-t-shirt/-/A-1003175164",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-wide-wild-world-t-shirt/-/A-1003168184",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-summer-school-t-shirt/-/A-1003168783",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-critical-hit-t-shirt/-/A-1003153018",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-minecraft-alex-pixel-icons-t-shirt/-/A-1003168800",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minecraft-legends-defend-the-overworld-t-shirt/-/A-89187242",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/street-fighter-create-explore-survive-crew-neck-short-sleeve-black-boy-s-t-shirt/-/A-93145877",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-minecraft-checkered-soccer-jersey-green/-/A-94365179",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-ringer-t-shirt/-/A-1002541680",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minecraft, Tops",
      filters: {
        brand: "Minecraft",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minions-the-rise-of-gru-rainbow-panels-t-shirt/-/A-87406570",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minions, Tops",
      filters: {
        brand: "Minions",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-minions-the-rise-of-gru-meditating-bob-t-shirt/-/A-87406606",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Minions, Tops",
      filters: {
        brand: "Minions",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-kids-suave-graphic-short-sleeve-t-shirt/-/A-93160896",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mixed Up Clothing, Tops",
      filters: {
        brand: "Mixed Up Clothing",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-kids-suave-graphic-short-sleeve-t-shirt/-/A-93160317",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mixed Up Clothing, Tops",
      filters: {
        brand: "Mixed Up Clothing",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-pua-hei-hei-friends-t-shirt/-/A-82374113",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Moana, Tops",
      filters: {
        brand: "Moana",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-tropical-friends-t-shirt/-/A-91641763",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Moana, Tops",
      filters: {
        brand: "Moana",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-pua-heihei-flowers-t-shirt/-/A-82352712",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Moana, Tops",
      filters: {
        brand: "Moana",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-2-together-again-t-shirt/-/A-93990108",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Moana 2, Tops",
      filters: {
        brand: "Moana 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-2-ocean-sisters-t-shirt/-/A-93990265",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Moana 2, Tops",
      filters: {
        brand: "Moana 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-2-fearless-adventurer-t-shirt/-/A-93990628",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Moana 2, Tops",
      filters: {
        brand: "Moana 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-2-wayfinder-portrait-t-shirt/-/A-1000008245",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Moana 2, Tops",
      filters: {
        brand: "Moana 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-2-group-portrait-t-shirt/-/A-1000008240",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Moana 2, Tops",
      filters: {
        brand: "Moana 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-2-simea-portrait-t-shirt/-/A-93990179",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Moana 2, Tops",
      filters: {
        brand: "Moana 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-2-crew-portrait-t-shirt/-/A-1000008234",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Moana 2, Tops",
      filters: {
        brand: "Moana 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-2-heihei-top-chicken-t-shirt/-/A-93990073",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Moana 2, Tops",
      filters: {
        brand: "Moana 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-2-bold-adventurer-t-shirt/-/A-93990829",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Moana 2, Tops",
      filters: {
        brand: "Moana 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-moana-2-matangi-and-moana-t-shirt/-/A-93990482",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Moana 2, Tops",
      filters: {
        brand: "Moana 2",
      },
    },
    {
      url: "https://www.target.com/p/boys-hybrid-apparel-hat-token-short-sleeve-graphic-t-shirt/-/A-1002502424",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monopoly, Tops",
      filters: {
        brand: "Monopoly",
      },
    },
    {
      url: "https://www.target.com/p/boys-hybrid-apparel-go-to-jail-square-short-sleeve-graphic-t-shirt/-/A-1002502274",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monopoly, Tops",
      filters: {
        brand: "Monopoly",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monopoly-uncle-pennybags-portrait-t-shirt/-/A-87692664",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monopoly, Tops",
      filters: {
        brand: "Monopoly",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monopoly-pennybags-make-it-rain-t-shirt/-/A-87693020",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monopoly, Tops",
      filters: {
        brand: "Monopoly",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-grave-digger-el-toro-loco-megalodon-truck-3-pack-t-shirts-little-kid-to-big/-/A-87140999",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monster Jam, Tops",
      filters: {
        brand: "Monster Jam",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-el-toro-loco-grave-digger-megalodon-4-pack-graphic-t-shirts-navy-gray-charcoal-red/-/A-87358970",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monster Jam, Tops",
      filters: {
        brand: "Monster Jam",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-maximum-destruction-monster-mutt-el-toro-loco-3-pack-t-shirts-little-kid-to-big-kid/-/A-90043515",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monster Jam, Tops",
      filters: {
        brand: "Monster Jam",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-2-pack-graphic-t-shirts-little-kid-to-big-kid/-/A-87049077",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monster Jam, Tops",
      filters: {
        brand: "Monster Jam",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-grave-digger-el-toro-loco-mohawk-warrior-maximum-destruction-monster-truck-t-shirt-toddler-to-big-kid/-/A-87288391",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monster Jam, Tops",
      filters: {
        brand: "Monster Jam",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-grave-digger-el-toro-loco-megalodon-truck-t-shirt/-/A-1002541591",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monster Jam, Tops",
      filters: {
        brand: "Monster Jam",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-grave-digger-july-4th-matching-family-t-shirt/-/A-1002541699",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monster Jam, Tops",
      filters: {
        brand: "Monster Jam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monsters-inc-cartoon-mike-t-shirt/-/A-84233848",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monsters, Inc., Tops",
      filters: {
        brand: "Monsters, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monsters-inc-mike-wazowski-eye-smile-t-shirt/-/A-84638533",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monsters, Inc., Tops",
      filters: {
        brand: "Monsters, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monsters-inc-sulley-mike-buds-t-shirt/-/A-1001410435",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monsters, Inc., Tops",
      filters: {
        brand: "Monsters, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monsters-inc-mike-wazowski-eye-t-shirt/-/A-82351716",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monsters, Inc., Tops",
      filters: {
        brand: "Monsters, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monsters-inc-mike-back-in-action-performance-tee/-/A-87574471",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monsters, Inc., Tops",
      filters: {
        brand: "Monsters, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monsters-inc-sulley-face-t-shirt/-/A-1001410386",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monsters, Inc., Tops",
      filters: {
        brand: "Monsters, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monsters-inc-christmas-scary-monsters-t-shirt/-/A-84869026",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monsters, Inc., Tops",
      filters: {
        brand: "Monsters, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monsters-inc-best-college-logo-t-shirt/-/A-87574410",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monsters, Inc., Tops",
      filters: {
        brand: "Monsters, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monsters-inc-mike-we-care-t-shirt/-/A-79712670",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monsters, Inc., Tops",
      filters: {
        brand: "Monsters, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monsters-inc-mike-back-in-action-t-shirt/-/A-87574415",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monsters, Inc., Tops",
      filters: {
        brand: "Monsters, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monsters-inc-mummy-mike-t-shirt/-/A-1001410375",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monsters, Inc., Tops",
      filters: {
        brand: "Monsters, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-monsters-inc-pumpkin-mike-t-shirt/-/A-1001410220",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Monsters, Inc., Tops",
      filters: {
        brand: "Monsters, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-this-is-my-fishing-shirt-aqua-logo-t-shirt/-/A-91644258",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-this-is-my-hunting-shirt-orange-logo-t-shirt/-/A-91644253",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-daddy-s-little-hunting-buddy-t-shirt/-/A-91643893",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-natured-filled-logo-t-shirt/-/A-91647090",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-just-a-kid-who-loves-hunting-t-shirt/-/A-91643975",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-grass-blades-filled-logo-t-shirt/-/A-91644738",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-daddy-s-little-fishing-buddy-t-shirt/-/A-91644058",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-fish-text-stack-t-shirt/-/A-91644036",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-future-angler-t-shirt/-/A-91644164",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-water-fishing-logo-t-shirt/-/A-91645724",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-in-the-woods-flag-t-shirt/-/A-1000140580",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-mallard-green-badge-t-shirt/-/A-91647300",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-connection-concealment-conservation-t-shirt/-/A-91643239",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-black-water-bold-logo-t-shirt/-/A-91645506",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-fishing-bold-logo-t-shirt/-/A-91644888",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-patriotic-forest-logo-t-shirt/-/A-91643930",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-humble-roots-hard-work-and-a-ton-of-heart-t-shirt/-/A-91647610",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-an-off-season-doesn-t-exist-t-shirt/-/A-91647511",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mossy-oak-mommy-s-little-hunting-buddy-t-shirt/-/A-91644088",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mossy Oak, Tops",
      filters: {
        brand: "Mossy Oak",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mulan-mushu-large-tattoo-t-shirt/-/A-91642273",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mulan, Tops",
      filters: {
        brand: "Mulan",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mulan-mushu-madness-poster-t-shirt/-/A-91642071",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mulan, Tops",
      filters: {
        brand: "Mulan",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mulan-black-and-white-poster-t-shirt/-/A-91641996",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mulan, Tops",
      filters: {
        brand: "Mulan",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mulan-floral-smell-t-shirt/-/A-91642190",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mulan, Tops",
      filters: {
        brand: "Mulan",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mulan-the-tale-t-shirt/-/A-91642270",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mulan, Tops",
      filters: {
        brand: "Mulan",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mulan-floral-doodles-t-shirt/-/A-91641880",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mulan, Tops",
      filters: {
        brand: "Mulan",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-anime-cartoon-shirt-youth-boys-cosplay-graphic-tee/-/A-87711926",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-deku-bakugo-battle-boy-s-red-t-shirt/-/A-86801544",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-black-my-hero-academia-all-might-character-graphic-tee/-/A-84251979",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-anime-pro-heroes-youth-boys-white-graphic-tee-shirt/-/A-84941045",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-anime-cartoon-youth-boys-blue-graphic-tee/-/A-84251924",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-my-hero-academia-character-white-graphic-tee/-/A-88310748",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-youth-boys-anime-cartoon-black-graphic-tee/-/A-84251985",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-my-hero-academia-anime-cartoon-characters-blue-tee/-/A-84940397",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-characters-youth-black-short-sleeve-crew-neck-tee/-/A-90060817",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-deku-punch-boy-s-charcoal-t-shirt/-/A-86316285",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-deku-smash-one-for-all-boy-s-royal-blue-t-shirt/-/A-86316392",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-deku-victory-stance-boy-s-athletic-heather-t-shirt/-/A-87614824",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-my-hero-academia-izuku-midoriya-boy-s-navy-blue-t-shirt/-/A-87217746",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-izuku-midoriya-lightning-background-boy-s-royal-blue-t-shirt/-/A-86801667",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-katsuki-bakugou-boy-s-navy-t-shirt/-/A-86394158",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-deku-key-art-boy-s-black-t-shirt/-/A-87481842",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-ua-school-uniform-characters-crew-neck-short-sleeve-boys-black-t-shirt/-/A-88920541",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-all-might-grunge-youth-athletic-heather-t-shirt/-/A-87036232",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-uraraka-deku-bakugo-crew-neck-short-sleeve-boys-white-t-shirt/-/A-87974274",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-izuku-midoriya-in-circle-crew-neck-short-sleeve-athletic-heather-boy-s-t-shirt/-/A-88256024",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-boy-s-izuku-deku-midoriya-panel-youth-t-shirt/-/A-91272430",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Hero Academia, Tops",
      filters: {
        brand: "My Hero Academia",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-my-little-pony-friendship-is-magic-generations-love-everypony-generation-t-shirt/-/A-89601599",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Little Pony, Tops",
      filters: {
        brand: "My Little Pony",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-my-little-pony-friendship-is-magic-generations-better-together-portraits-t-shirt/-/A-89601591",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Little Pony, Tops",
      filters: {
        brand: "My Little Pony",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-my-little-pony-st-patrick-s-day-i-don-t-need-luck-i-m-magical-t-shirt/-/A-85872355",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Little Pony, Tops",
      filters: {
        brand: "My Little Pony",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-my-little-pony-friendship-is-magic-applejack-feast-mode-t-shirt/-/A-89581695",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Little Pony, Tops",
      filters: {
        brand: "My Little Pony",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-my-little-pony-always-thankful-t-shirt/-/A-89581434",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, My Little Pony, Tops",
      filters: {
        brand: "My Little Pony",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-boy-cartoon-bear-graphic-cool-style-quality-tee/-/A-1003785332",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, MyKids-USA, Tops",
      filters: {
        brand: "MyKids-USA",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-boy-cartoon-graphic-red-fashion-cotton-t-shirt-red-110-3-5y/-/A-1004660922",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, MyKids-USA, Tops",
      filters: {
        brand: "MyKids-USA",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-boys-s-cartoon-dinosaur-print-color-patchwork-short-sleeves-t-shirt-in-european-and-american-style/-/A-1004917344",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, MyKids-USA, Tops",
      filters: {
        brand: "MyKids-USA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-logo-patches-boy-s-black-long-sleeve-shirt/-/A-86316400",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-space-shuttle-1958-youth-black-long-sleeve-shirt/-/A-86219056",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-rocket-rainbow-flight-youth-black-long-sleeve-shirt/-/A-86219071",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-retro-rocket-launch-t-shirt/-/A-82370655",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-retro-rocket-journey-t-shirt/-/A-85194893",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-space-is-the-place-youth-royal-blue-graphic-tee/-/A-88886949",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-multicolor-space-shuttle-youth-navy-blue-graphic-tee/-/A-88886516",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-sunset-retro-launch-performance-tee/-/A-84232948",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-logo-space-emoji-performance-tee/-/A-89597874",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-it-is-rocket-science-performance-tee/-/A-89598037",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-rocket-logo-performance-tee/-/A-84233037",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-retro-rocket-launch-performance-tee/-/A-89598154",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-explore-helmet-performance-tee/-/A-84233649",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-mars-logo-performance-tee/-/A-84233039",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-space-shuttle-launch-youth-boys-navy-blue-graphic-t-shirt/-/A-86316566",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-retro-rocket-journey-performance-tee/-/A-84233533",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-green-astronaut-in-space-youth-athletic-heather-gray-tee/-/A-86218980",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-shuttle-journey-performance-tee/-/A-84233012",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-schematic-logo-t-shirt/-/A-1001092073",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-rocket-science-logo-performance-tee/-/A-84233194",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-emoji-space-logo-equation-performance-tee/-/A-89598196",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-logo-boy-s-athletic-heather-t-shirt/-/A-86102237",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-drums-astro-t-shirt/-/A-1001092009",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-space-bowling-youth-boys-t-shirt/-/A-86012974",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-out-of-this-world-astronaut-youth-boys-navy-blue-graphic-t-shirt/-/A-86316779",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-astronaut-space-swirl-t-shirt/-/A-84233803",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-bold-lift-off-performance-tee/-/A-89598191",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-space-explorer-performance-tee/-/A-89598141",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-cartoon-scrawl-logo-t-shirt/-/A-85195738",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-rainbow-repeat-logo-t-shirt/-/A-85194848",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-mix-galaxy-style-logo-performance-tee/-/A-84234432",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-space-program-founded-1958-youth-boys-blue-graphic-t-shirt/-/A-86316791",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-circle-rainbow-shuttle-logo-t-shirt/-/A-84234364",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-emoji-space-equation-performance-tee/-/A-89597879",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-minimal-rocket-launch-t-shirt/-/A-85195047",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-astronaut-s-dream-t-shirt/-/A-85195504",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-logo-boy-s-heather-gray-t-shirt/-/A-85352208",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-ugly-christmas-astronaut-print-t-shirt/-/A-81950487",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-astronaut-t-shirt/-/A-82370649",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-astronaut-moon-reflection-vintage-retro-t-shirt/-/A-85025681",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-distressed-retro-rocket-poster-style-t-shirt/-/A-84233742",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-da-vinci-astronaut-t-shirt/-/A-84232849",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-emoji-space-logo-equation-t-shirt/-/A-85195477",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-space-shuttle-schematic-details-t-shirt/-/A-82373052",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-cape-canaveral-launch-t-shirt/-/A-85195381",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-space-explorer-shuttle-sketch-boy-s-royal-blue-t-shirt/-/A-85729963",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-mars-needs-you-t-shirt/-/A-85194813",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-explore-crew-neck-short-sleeve-athletic-heather-youth-t-shirt/-/A-89762954",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-space-rocket-t-shirt/-/A-84234151",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-floral-astronaut-in-space-t-shirt/-/A-1002735017",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-ombre-sunset-shuttle-program-t-shirt/-/A-84233119",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-planetary-swirl-logo-t-shirt/-/A-85089115",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-hole-logo-t-shirt/-/A-84234131",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-challenger-youth-boys-blue-t-shirt/-/A-86467347",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-shuttle-journey-t-shirt/-/A-84233165",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-milky-way-logo-t-shirt/-/A-85195601",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-galactic-swirl-logo-t-shirt/-/A-84234163",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-astronaut-space-nebula-launch-silhouette-t-shirt/-/A-85088922",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-logo-space-emoji-t-shirt/-/A-82360103",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-space-explorer-t-shirt/-/A-82360589",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-american-flag-boy-s-heather-gray-t-shirt/-/A-85351638",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-launching-logo-t-shirt/-/A-1001092004",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-sound-vibration-logo-t-shirt/-/A-85195692",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-sts-53-space-shuttle-mission-youth-charcoal-t-shirt/-/A-86103463",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-logo-t-shirt/-/A-82371795",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-rocket-launch-repeat-t-shirt/-/A-84233751",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-neon-sign-classic-logo-t-shirt/-/A-85195136",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-half-moon-t-shirt/-/A-84233312",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-bold-lift-off-t-shirt/-/A-85194785",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/nasa-national-aeronautics-and-space-administration-youth-navy-t-shirt/-/A-86103752",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-initial-descent-canaveral-old-school-t-shirt/-/A-84233177",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-ugly-christmas-planet-print-t-shirt/-/A-81950641",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nasa-get-with-the-program-logo-t-shirt/-/A-85194874",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NASA, Tops",
      filters: {
        brand: "NASA",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-nerf-football-short-sleeve-graphic-t-shirt/-/A-93858403",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-nerf-sports-soccer-football-short-sleeve-graphic-t-shirt/-/A-1001959220",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-nerf-grid-map-short-sleeve-graphic-t-shirt/-/A-1001955170",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-basketball-unstoppable-ready-to-win-short-sleeve-graphic-t-shirt/-/A-93858284",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-blast-your-limits-logo-short-sleeve-graphic-t-shirt/-/A-93858140",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-soccer-game-on-unstoppable-ready-to-win-short-sleeve-graphic-t-shirt/-/A-92724236",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nerf-classic-logo-performance-tee/-/A-87693033",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-nerf-baseball-short-sleeve-graphic-t-shirt/-/A-1001962062",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-just-be-ready-stats-short-sleeve-graphic-t-shirt/-/A-93858279",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-or-nothing-soccer-badge-short-sleeve-graphic-t-shirt/-/A-92724226",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-unstoppable-short-sleeve-graphic-t-shirt/-/A-1001958194",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-nerf-gradient-logo-short-sleeve-graphic-t-shirt/-/A-1001962419",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-nerf-90s-sprinkle-logo-short-sleeve-graphic-t-shirt/-/A-1001960973",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-new-wave-logo-short-sleeve-graphic-t-shirt/-/A-93858361",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-retro-stacked-logo-established-1969-short-sleeve-graphic-t-shirt/-/A-93858396",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-live-to-play-sport-balls-short-sleeve-graphic-t-shirt/-/A-92724266",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-try-to-keep-up-nerf-short-sleeve-graphic-t-shirt/-/A-1001957664",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-nerf-neon-grid-logo-short-sleeve-graphic-t-shirt/-/A-1001955496",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-nerf-green-stats-short-sleeve-graphic-t-shirt/-/A-1001962995",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-nerf-logo-short-sleeve-graphic-t-shirt/-/A-1001956983",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-beyond-the-limit-short-sleeve-graphic-t-shirt/-/A-1001956492",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-logo-and-elements-short-sleeve-graphic-t-shirt/-/A-1001956751",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-sports-grid-short-sleeve-graphic-t-shirt/-/A-1001959346",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-team-nerf-soccer-short-sleeve-graphic-t-shirt/-/A-1001959412",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-nerf-grid-gradient-short-sleeve-graphic-t-shirt/-/A-1001954891",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-90s-nerf-short-sleeve-graphic-t-shirt/-/A-1001962236",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-unstoppable-football-short-sleeve-graphic-t-shirt/-/A-1001959823",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-nerf-sports-game-on-short-sleeve-graphic-t-shirt/-/A-1001958804",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-play-non-stop-short-sleeve-graphic-t-shirt/-/A-1001957257",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-play-anywhere-warm-logo-short-sleeve-graphic-t-shirt/-/A-1001957120",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-change-the-game-football-short-sleeve-graphic-t-shirt/-/A-1001958304",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-nerf-or-nothin-soccer-short-sleeve-graphic-t-shirt/-/A-1001958929",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-3d-rainbow-logo-short-sleeve-graphic-t-shirt/-/A-93858379",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-nerf-go-beyond-the-game-short-sleeve-graphic-t-shirt/-/A-1001961381",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-play-without-limits-basketball-boy-s-short-sleeve-t-shirt-short-sleeve-graphic-t-shirt/-/A-1001959455",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-worldwide-compass-designed-for-fun-short-sleeve-graphic-t-shirt/-/A-92724231",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boys-nerf-triangle-logo-short-sleeve-graphic-t-shirt/-/A-1001957687",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nerf-gradient-glitch-t-shirt/-/A-1001542619",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/nerf-push-the-limits-crew-neck-short-sleeve-navy-blue-boy-s-t-shirt/-/A-91014868",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nerf-it-s-nerf-or-nothin-t-shirt/-/A-86926547",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nerf-classic-logo-t-shirt/-/A-87692978",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nerf-never-give-up-bullseye-t-shirt/-/A-87693004",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/nerf-athlete-silhouette-crew-neck-short-sleeve-athletic-heather-boy-s-t-shirt/-/A-91014885",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nerf-team-blaster-distressed-badge-t-shirt/-/A-87692827",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NERF, Tops",
      filters: {
        brand: "NERF",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nsync-band-pose-t-shirt/-/A-88540138",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NSYNC, Tops",
      filters: {
        brand: "NSYNC",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nsync-retro-fade-t-shirt/-/A-88540121",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NSYNC, Tops",
      filters: {
        brand: "NSYNC",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-nsync-world-tour-poster-t-shirt/-/A-88540085",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, NSYNC, Tops",
      filters: {
        brand: "NSYNC",
      },
    },
    {
      url: "https://www.target.com/p/naruto-uzumaki-crew-neck-short-sleeve-4pk-boy-s-tees/-/A-87877297",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-boys-3-pack-set-includes-two-tees-and-mesh-shorts/-/A-90125989",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-character-shadow-clone-squad-art-youth-boys-red-graphic-tee/-/A-84941923",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-anime-cartoon-cosplay-youth-boys/-/A-88297504",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-orange-monochrome-graphic-youth-boys-black-long-sleeve-shirt/-/A-87216039",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shadow-effect-crew-neck-short-sleeve-athletic-heather-boy-s-t-shirt/-/A-91025474",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-kanji-palm-boy-s-white-t-shirt/-/A-87215574",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-multi-character-youth-3-pack-crew-neck-short-sleeve-t-shirts/-/A-89546746",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-team-7-boy-s-red-t-shirt/-/A-84706626",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-naruto-uzumaki-art-boy-s-royal-blue-t-shirt/-/A-85730697",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-pixel-character-youth-black-graphic-tee/-/A-84941899",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-naruto-kakashi-sakura-sasuke-boy-s-black-t-shirt/-/A-87614832",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-anime-characters-youth-boys-red-graphic-tee/-/A-84941735",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-squad-art-youth-white-graphic-tee/-/A-84941851",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-pixel-character-youth-red-graphic-tee/-/A-84940292",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-squad-art-youth-heather-gray-graphic-tee/-/A-84942147",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-pixel-character-youth-royal-blue-graphic-tee/-/A-84940301",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-character-squad-youth-royal-blue-graphic-tee/-/A-84940335",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-pixel-character-youth-heather-gray-graphic-tee/-/A-84941989",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-big-letters-title-logo-youth-white-graphic-tee/-/A-88346584",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-pixel-character-youth-white-graphic-tee/-/A-84942184",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-character-squad-youth-charcoal-gray-graphic-tee/-/A-84941942",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-anime-cartoon-youth-boys-navy-blue-graphic-tee/-/A-84942019",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-pixel-character-youth-navy-blue-graphic-tee/-/A-84941890",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-chibi-character-pixel-art-boy-s-red-graphic-tees-t-shirt/-/A-88297324",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-character-with-kanji-youth-black-graphic-tee/-/A-86801406",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-character-squad-youth-black-graphic-tee/-/A-84942284",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-pixel-character-youth-charcoal-graphic-tee/-/A-84941874",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-character-squad-youth-navy-blue-graphic-tee/-/A-84941960",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-kiba-character-with-kanji-youth-boys-royal-blue-tee/-/A-86710994",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-uzumaki-naruto-in-jump-pose-with-collegiate-text-on-royal-boys-tee/-/A-87367846",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-naruto-shadow-clone-squad-art-boys-black-tee/-/A-83709828",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-naruto-with-cloud-and-symbol-youth-boys-black-tee/-/A-86711036",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-uzumaki-grayscale-graphic-youth-athletic-heather-t-shirt/-/A-87215797",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-gaara-youth-white-tee-with-short-sleeves-and-crew-neck/-/A-89764254",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-chibi-naruto-and-sasuke-fight-stance-youth-royal-blue-tee-with-short-sleeves-and-crew-neck/-/A-89764309",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-classic-kakashi-youth-boys-navy-tee/-/A-86711166",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-group-character-art-with-logo-youth-boys-royal-blue-tee/-/A-86710942",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-gaara-with-kanji-and-sand-village-symbol-youth-boys-navy-tee/-/A-86711092",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-sasuke-frame-crew-neck-short-sleeve-navy-boy-s-t-shirt/-/A-89764270",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-ninjutsu-stance-crew-neck-short-sleeve-navy-blue-boy-s-t-shirt/-/A-88868031",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-classic-group-character-art-with-circles-youth-boys-black-tee/-/A-86710960",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-full-cast-of-characters-boy-s-red-t-shirt/-/A-88346974",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-inuzuka-kiba-and-naruto-uzumaki-boy-s-white-t-shirt/-/A-87252547",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-one-color-headshots-crew-neck-short-sleeve-black-youth-t-shirt/-/A-89721728",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-anime-character-logo-crew-neck-short-sleeve-boy-s-white-t-shirt/-/A-89764340",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-main-character-shurikens-crew-neck-short-sleeve-black-boy-s-t-shirt/-/A-90060791",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-lee-and-konohagakure-symbol-boy-s-white-t-shirt/-/A-87215633",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-sasuke-sharingan-symbol-boy-s-red-t-shirt/-/A-87215835",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-excited-naruto-youth-boy-s-charcoal-t-shirt/-/A-87450621",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-sasuke-cursed-seal-boy-s-red-t-shirt/-/A-87215824",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-sasuke-side-view-boy-s-white-t-shirt/-/A-87215600",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-frog-summoning-jutsu-youth-boys-red-short-sleeve-shirt/-/A-84941717",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-rescue-team-for-sasuke-crew-neck-short-sleeve-navy-blue-boy-s-t-shirt/-/A-88756349",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-boys-black-crew-neck-short-sleeve-t-shirt/-/A-1004429919",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-monochrome-naruto-nine-tails-crew-neck-short-sleeve-black-men-s-t-shirt/-/A-89762786",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-chibi-team-7-crew-neck-short-sleeve-black-men-s-t-shirt/-/A-90060778",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-characters-konoha-emblem-boy-s-black-t-shirt/-/A-87481852",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-gold-character-squares-boy-s-black-t-shirt/-/A-87481862",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Naruto, Tops",
      filters: {
        brand: "Naruto",
      },
    },
    {
      url: "https://www.target.com/p/national-hot-rod-association-nhra-car-black-and-white-winternationals-logos-pomona-1970-on-royal-youth-t-shirt/-/A-1005196903",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, National Hot Rod Association, Tops",
      filters: {
        brand: "National Hot Rod Association",
      },
    },
    {
      url: "https://www.target.com/p/national-hot-rod-association-nhra-car-disturbing-the-peace-if-it-s-too-loud-you-re-too-old-on-athletic-heather-youth-t-shirt/-/A-1005196964",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, National Hot Rod Association, Tops",
      filters: {
        brand: "National Hot Rod Association",
      },
    },
    {
      url: "https://www.target.com/p/national-hot-rod-association-boys-white-crew-neck-short-sleeve-t-shirt/-/A-1004429869",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, National Hot Rod Association, Tops",
      filters: {
        brand: "National Hot Rod Association",
      },
    },
    {
      url: "https://www.target.com/p/national-lampoon-s-christmas-vacation-squirrel-in-a-wreath-nuts-about-christmas-youth-navy-blue-graphic-tee/-/A-87884918",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, National Lampoon, Tops",
      filters: {
        brand: "National Lampoon",
      },
    },
    {
      url: "https://www.target.com/p/national-lampoon-s-christmas-vacation-griswold-family-vacation-burn-some-rubber-verbiage-youth-navy-blue-graphic-tee/-/A-87944553",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, National Lampoon, Tops",
      filters: {
        brand: "National Lampoon",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-national-lampoon-s-christmas-vacation-griswold-christmas-tree-t-shirt/-/A-1001936513",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, National Lampoon, Tops",
      filters: {
        brand: "National Lampoon",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-electric-state-herman-construction-bot-t-shirt/-/A-1002994811",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Tops",
      filters: {
        brand: "Netflix",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-electric-state-peace-herman-t-shirt/-/A-1002997118",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Tops",
      filters: {
        brand: "Netflix",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-electric-state-keep-runnin-herman-t-shirt/-/A-1002996784",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Tops",
      filters: {
        brand: "Netflix",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-electric-state-herman-glitch-t-shirt/-/A-1002994922",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Tops",
      filters: {
        brand: "Netflix",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-electric-state-checkered-cosmo-t-shirt/-/A-1002995251",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Tops",
      filters: {
        brand: "Netflix",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-electric-state-neon-kid-cosmo-graffiti-t-shirt/-/A-1002995141",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Tops",
      filters: {
        brand: "Netflix",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-electric-state-you-can-poster-t-shirt/-/A-1002997522",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Tops",
      filters: {
        brand: "Netflix",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-electric-state-neon-classic-logo-t-shirt/-/A-1002993907",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Tops",
      filters: {
        brand: "Netflix",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-electric-state-cyber-herman-t-shirt/-/A-1002994754",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Tops",
      filters: {
        brand: "Netflix",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-electric-state-spiral-cosmo-t-shirt/-/A-1002997356",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Tops",
      filters: {
        brand: "Netflix",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-electric-state-original-logo-t-shirt/-/A-1002997303",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Tops",
      filters: {
        brand: "Netflix",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-julie-and-the-phantoms-my-heart-beats-for-you-t-shirt/-/A-85565523",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Tops",
      filters: {
        brand: "Netflix",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-electric-state-remember-cosmo-t-shirt/-/A-1002994456",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Tops",
      filters: {
        brand: "Netflix",
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
