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
      url: "https://www.target.com/p/batman-the-caped-crusader-youth-heather-gray-crew-neck-sweatshirt/-/A-89208345",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-varsity-love-vibes-youth-ultra-soft-graphic-sweatshirt/-/A-1001743264",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/blockbuster-logos-on-left-chest-junior-s-gray-sweatshirt/-/A-90663849",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-football-season-star-youth-ultra-soft-graphic-sweatshirt/-/A-1001823579",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-here-comes-the-fun-puff-print-youth-ultra-soft-graphic-sweatshirt/-/A-1000157638",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-cutest-reindeer-at-the-pole-youth-ultra-soft-graphic-sweatshirt/-/A-93544699",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-i-am-just-here-for-the-snacks-youth-ultra-soft-graphic-sweatshirt/-/A-1001806626",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/batman-bruce-wayne-silhouette-youth-heather-gray-crew-neck-sweatshirt/-/A-89208314",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-happy-st-pat-rex-day-youth-ultra-soft-graphic-sweatshirt/-/A-1001890537",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/stevie-raglan-sweatshirt-hunter-green-navy-color-block/-/A-1004890694",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-heart-throb-youth-ultra-soft-graphic-sweatshirt/-/A-1000551723",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-smiley-face-outline-youth-ultra-soft-graphic-sweatshirt/-/A-1002349781",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-merry-puff-print-youth-ultra-soft-graphic-sweatshirt/-/A-93279481",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-in-my-football-era-blue-youth-ultra-soft-graphic-sweatshirt/-/A-1001806180",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/flash-multiverse-chronobowl-youth-royal-blue-sweatshirt/-/A-86104121",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-shamrock-truck-youth-ultra-soft-graphic-sweatshirt/-/A-1002225644",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/gremlins-multicolored-gizmos-youth-black-crew-neck-sweatshirt/-/A-90274691",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-tis-the-season-football-youth-ultra-soft-graphic-sweatshirt/-/A-1001823543",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-cool-kid-star-youth-ultra-soft-graphic-sweatshirt/-/A-93792877",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-kind-turning-smiles-youth-ultra-soft-graphic-sweatshirt/-/A-1002350279",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-team-halftime-distressed-blue-youth-ultra-soft-graphic-sweatshirt/-/A-1001806537",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-i-love-you-words-youth-ultra-soft-graphic-sweatshirt/-/A-1001710054",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-tic-tac-heart-youth-ultra-soft-graphic-sweatshirt/-/A-1000945291",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-game-day-stars-youth-ultra-soft-graphic-sweatshirt/-/A-1001823578",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-lucky-typewriter-youth-ultra-soft-graphic-sweatshirt/-/A-1002225752",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-football-game-day-checkered-toddler-graphic-sweatshirt/-/A-90213709",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/love-all-tennis-youth-relax-crew/-/A-1004539697",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-youth-ultra-soft-graphic-sweatshirt/-/A-1001710077",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-talk-football-to-me-ball-youth-ultra-soft-graphic-sweatshirt/-/A-1001834931",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-big-sis-square-toddler-graphic-sweatshirt/-/A-91869427",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-in-checkered-circle-crew-neck-long-sleeve-youth-black-sweatshirt/-/A-92987951",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-holly-jolly-christmas-tree-youth-ultra-soft-graphic-sweatshirt/-/A-93544670",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-heart-throb-small-heart-youth-ultra-soft-graphic-sweatshirt/-/A-1000551735",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-vibes-distressed-youth-ultra-soft-graphic-sweatshirt/-/A-1002225757",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-youth-ultra-soft-graphic-sweatshirt/-/A-1001709978",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-naruto-uzumaki-name-text-and-character-youth-heather-gray-crew-neck-sweatshirt/-/A-89097443",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/gender-neutral-boys-st-ives-gauze-hooded-top-me-henry/-/A-1001177374",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-a-wee-bit-irish-youth-ultra-soft-graphic-sweatshirt/-/A-1001346979",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/gremlins-gizmo-in-squares-with-icons-youth-heather-gray-crew-neck-sweatshirt/-/A-90275243",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-in-my-game-day-era-green-youth-ultra-soft-graphic-sweatshirt/-/A-1001806304",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-i-love-you-words-youth-ultra-soft-graphic-sweatshirt/-/A-1001710052",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-single-color-leaping-naruto-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-90274576",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-i-m-just-here-for-the-snacks-disco-youth-ultra-soft-graphic-sweatshirt/-/A-1001805926",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-happy-go-lucky-pot-of-gold-youth-ultra-soft-graphic-sweatshirt/-/A-1001890462",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-deer-snowman-scene-youth-ultra-soft-graphic-sweatshirt/-/A-1001646972",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-since-1969-boxed-character-art-crew-neck-long-sleeve-youth-black-sweatshirt/-/A-93148363",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-cutie-pie-university-youth-ultra-soft-graphic-sweatshirt/-/A-1000082853",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/stevie-raglan-sweatshirt-navy-rose-color-block/-/A-1004890687",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mega-man-gradient-line-art-youth-black-crew-neck-sweatshirt/-/A-90274734",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-embroidered-sweatshirt/-/A-1001974611",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-team-halftime-distressed-green-youth-ultra-soft-graphic-sweatshirt/-/A-1001806470",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-charm-friends-youth-ultra-soft-graphic-sweatshirt/-/A-1002532873",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-care-bears-crewneck-sweatshirt-girls-classic-care-bears-clothing-cheer-friend-funshine-good-luck-crewneck-sweatshirt-x-small/-/A-1004640051",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-wild-child-peace-youth-ultra-soft-graphic-sweatshirt/-/A-93792889",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-team-halftime-distressed-youth-ultra-soft-graphic-sweatshirt/-/A-1001806202",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/gremlins-gizmo-there-are-three-rules-character-art-youth-black-crew-neck-sweatshirt/-/A-90274667",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/nerf-for-the-win-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-91014746",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-lilo-and-stitch-fashion-sweatshirt-disney-collegiate-athletic-crewneck-sweatshirt-lilo-and-stitch-sweatshirt/-/A-1004522255",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-smiley-face-outline-youth-ultra-soft-graphic-sweatshirt/-/A-1002349959",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-big-bird-face-twirl-text-crew-neck-long-sleeve-youth-black-sweatshirt/-/A-93148334",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-lucky-clover-youth-ultra-soft-graphic-sweatshirt/-/A-1001890836",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dc-league-of-super-pets-pet-profiles-youth-black-sweatshirt/-/A-86104179",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-heart-breaker-sunglasses-youth-ultra-soft-graphic-sweatshirt/-/A-1001647107",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-i-dig-you-youth-ultra-soft-graphic-sweatshirt/-/A-1001209427",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-shenanigans-squad-youth-ultra-soft-graphic-sweatshirt/-/A-1001346958",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-care-bears-crewneck-sweatshirt-girls-classic-care-bears-clothing-cheer-friend-funshine-good-luck-crewneck-sweatshirt-medium/-/A-1004640048",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-lucky-clover-youth-ultra-soft-graphic-sweatshirt/-/A-1001890828",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-cursive-lucky-clover-youth-ultra-soft-graphic-sweatshirt/-/A-1002225626",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-in-my-football-era-maroon-youth-ultra-soft-graphic-sweatshirt/-/A-1001806111",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-in-my-game-day-era-blue-youth-ultra-soft-graphic-sweatshirt/-/A-1001806519",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-in-my-game-day-era-red-youth-ultra-soft-graphic-sweatshirt/-/A-1001806248",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-alphabet-i-love-you-youth-ultra-soft-graphic-sweatshirt/-/A-1000042985",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-i-just-hope-both-teams-have-fun-youth-ultra-soft-graphic-sweatshirt/-/A-1001806117",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-in-my-football-era-green-youth-ultra-soft-graphic-sweatshirt/-/A-1001806028",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-touchdown-helmet-youth-ultra-soft-graphic-sweatshirt/-/A-1001834926",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-smiley-disco-youth-ultra-soft-graphic-sweatshirt/-/A-1002532886",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-chase-your-dreams-retro-youth-ultra-soft-graphic-sweatshirt/-/A-1000082867",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-taz-being-happy-youth-black-crew-neck-sweatshirt/-/A-89002158",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-kind-turning-smiles-youth-ultra-soft-graphic-sweatshirt/-/A-1002350251",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-christmas-spirits-red-words-youth-ultra-soft-graphic-sweatshirt/-/A-93627566",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-youth-ultra-soft-graphic-sweatshirt/-/A-1001709896",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-loads-of-luck-retro-truck-youth-ultra-soft-graphic-sweatshirt/-/A-1001890486",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-game-day-football-youth-ultra-soft-graphic-sweatshirt/-/A-1001823797",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-flash-monochrome-red-with-bolt-youth-athletic-heather-gray-long-sleeve-shirt/-/A-89097390",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-retro-stars-youth-ultra-soft-graphic-sweatshirt/-/A-1002277103",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-tiny-teenager-typewriter-youth-ultra-soft-graphic-sweatshirt/-/A-93792918",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-hugs-and-kisses-youth-ultra-soft-graphic-sweatshirt/-/A-1001209384",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-love-typewriter-youth-ultra-soft-graphic-sweatshirt/-/A-1001709846",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-christmas-snowflake-bow-youth-ultra-soft-graphic-sweatshirt/-/A-93457465",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-all-you-need-is-love-coquette-youth-ultra-soft-graphic-sweatshirt/-/A-1001259091",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smiley-clover-daisy-youth-ultra-soft-graphic-sweatshirt/-/A-1002532831",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-cool-kids-club-youth-ultra-soft-graphic-sweatshirt/-/A-93792891",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sonic-prime-group-character-art-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-89838775",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-shamrock-and-roll-youth-ultra-soft-graphic-sweatshirt/-/A-1001346961",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-team-halftime-distressed-red-youth-ultra-soft-graphic-sweatshirt/-/A-1001806475",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/flash-superspeed-run-and-logo-youth-black-sweatshirt/-/A-86104259",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-rocket-around-the-christmas-tree-youth-ultra-soft-graphic-sweatshirt/-/A-93627459",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/journey-logo-crew-neck-long-sleeve-youth-black-sweatshirt/-/A-93653619",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-choose-happy-smiley-face-youth-ultra-soft-graphic-sweatshirt/-/A-1002350227",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-hexagon-thunderbolt-logo-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89097398",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-reflective-title-art-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89097395",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-zipper-cotton-solid-color-hoodie/-/A-89572023",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hanes-ecosmart-girls-full-zip-hoodie/-/A-1003235077",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-softest-fleece-jacket/-/A-87254947",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-minnie-mouse-lion-king-simba-fleece-zip-up-hoodie/-/A-89243071",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-zipper-neutral-solid-color-sweat-hoodie/-/A-89567984",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/red-bull-racing-f1-kid-s-2024-team-full-zip-hoodie/-/A-92352292",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-100-cotton-kids-unisex-soft-fleece-zip-hoodie-with-inner-pockets-usa-made/-/A-1001830183",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/castore-red-bull-racing-f1-kid-s-2025-team-full-zip-hoodie/-/A-1002208382",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/castore-alpine-racing-f1-2025-kids-team-full-zip-hoodie/-/A-1002315505",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-adaptive-fleece-zip-up-hooded-sweatshirt-cat-jack-black/-/A-94581064",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-yth-power-warm-up/-/A-90150730",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts, Athletic Shorts",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-girl-s-victory-short/-/A-90043768",
      tags: "Athletic Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/fairtex-kids-muay-thai-boxing-shorts-bsk2108-silent-warrior/-/A-1001549735",
      tags: "Athletic Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/fairtex-kids-muay-thai-boxing-shorts-bsk2102-summer/-/A-1001549749",
      tags: "Athletic Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/fairtex-kids-muay-thai-boxing-shorts-bsk2104-midnight-red/-/A-1001549741",
      tags: "Athletic Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/fairtex-kids-muay-thai-boxing-shorts-bsk2106-siam/-/A-1001703885",
      tags: "Athletic Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/fairtex-kids-muay-thai-boxing-shorts-bsk2107-turquoise/-/A-1001549733",
      tags: "Athletic Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-ribbed-bike-shorts-cat-38-jack-8482/-/A-93278913",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/-/A-94811075",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-long-bike-shorts-art-class/-/A-93460932",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-tough-cotton-bike-shorts/-/A-87254598",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-bike-shorts-blue/-/A-94431062",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-squishmallows-bike-shorts-pastel/-/A-94431057",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-bike-shorts-black/-/A-94431041",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack/-/A-1004369077",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack/-/A-1004369067",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack-navy-stripe-combo-large/-/A-1004369070",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-biker-short-legging-black/-/A-1003486286",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-shorts-skirt-danz-n-motion-21412a-sheer-for-ballet-or-modern/-/A-1003121809",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-convention-wear-lily-shorts-2-tone-danznmotion-25401c/-/A-1003191522",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-biker-short-with-flower-mesh-skirt-lilac-with-white-flowers/-/A-1002802529",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-ava-v-waist-compression-shorts/-/A-1001547080",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts, Jogger Shorts, Pull-on Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack/-/A-1004369073",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack-rainbow-stripe-combo-medium/-/A-1004369066",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack-navy-stripe-combo-x-small/-/A-1004369081",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-biker-short-with-flower-mesh-skirt-light-old-pink-12-years/-/A-1002802602",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack-navy-stripe-combo-x-large/-/A-1004369076",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack-navy-stripe-combo-xx-large/-/A-1004369064",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack-navy-stripe-combo-small/-/A-1004369079",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/eg-pro-enduro-flex-girl-s-compression-short-graded-inseam/-/A-1001398303",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-athletic-biker-short-black-pink-and-multicolored-butterflies/-/A-1003635993",
      tags: "Bike Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/disney-princess-ariel-belle-rapunzel-moana-girls-4-pack-bike-shorts-toddler-to-big-kid/-/A-88398096",
      tags: "Bottom Sets, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts, Short Sets",
      filters: {
        type: "Bottom Sets",
      },
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girls-4-pack-cotton-activewear-biker-shorts-set/-/A-1003791044",
      tags: "Bottom Sets, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts, Short Sets",
      filters: {
        type: "Bottom Sets",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-sweater-shorts-cat-38-jack-8482/-/A-93964116",
      tags: "Bottoms, Cargo Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Cargo Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-utility-cargo-shorts/-/A-1001828886",
      tags: "Bottoms, Cargo Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Cargo Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-utility-shorts/-/A-1002177438",
      tags: "Bottoms, Cargo Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Cargo Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-stretch-chino-bermuda-shorts/-/A-87148230",
      tags: "Bottoms, Chino Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-patch-pocket-twill-bermuda-shorts-cat-38-jack-8482-white/-/A-94408556",
      tags: "Bottoms, Chino Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-plain-front-blend-chino-shorts/-/A-86739538",
      tags: "Bottoms, Chino Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-little-kids-slim-plain-front-blend-chino-shorts/-/A-86739549",
      tags: "Bottoms, Chino Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-active-chino-shorts/-/A-87673647",
      tags: "Bottoms, Chino Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-garment-dyed-stretch-chino-short/-/A-1003331677",
      tags: "Bottoms, Chino Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-pull-on-shorts/-/A-88500959",
      tags: "Bottoms, Chino Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-above-the-knee-shorts/-/A-1004010257",
      tags: "Bottoms, Chino Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Jogger Shorts",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-striped-fashion-boxer-shorts-cat-38-jack-8482/-/A-94408558",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-front-pocket-shorts-light-green/-/A-93018548",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-front-pocket-shorts-navy-blue/-/A-94405041",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-and-angel-printed-wrap-skort-pink/-/A-94431070",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-printed-wrap-skort-blue/-/A-94431066",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-active-butterfly-shorts/-/A-1001544385",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-twill-shorts/-/A-1002512168",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-ian-mesh-color-block-basketball-shorts-olive-scout/-/A-1003241012",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-kids-lavender-seersucker-girls-ruffle-trim-woven-shorts/-/A-91648532",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-short-light-old-pink/-/A-1003487219",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-knit-ruffle-trim-shorts/-/A-1003240312",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-short-pale-yellow-and-white/-/A-1003636038",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-athletic-short-pink-blue-and-butterflies/-/A-1003635979",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-linen-short-with-pockets-medium-green-and-cream-striped/-/A-1003484759",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-linen-short-with-pockets-old-orange-pink/-/A-1003484770",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-short-white-checkered-lilac/-/A-1003636821",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-print-pattern-bow-decoration-short-pants-in-summer-outfit-wearing/-/A-1004801377",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girl-patterned-skirt-mayoral/-/A-1001295485",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-smocked-waist-short-with-knots-pink-and-white-checks/-/A-1003484818",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girl-rayon-rib-skort-tenly/-/A-1004473734",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/gender-neutral-s-bluepeter-short-me-henry/-/A-1001177576",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girl-rayon-rib-skort-tenly/-/A-1004473694",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girl-rayon-rib-skort-tenly/-/A-1004473707",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/gender-neutral-kid-s-bluepeter-short-me-henry/-/A-1001177697",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-chambray-short-navy-blue-and-white-hearts/-/A-1003487249",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-chambray-short-blue-and-white-cherries/-/A-1003487202",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girl-bamboo-bloomer-shorts-copenhagen-delights/-/A-1001355043",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/daydream-cutout-compression-shorts/-/A-1001744825",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-cuffed-jean-shorts-cat-jack/-/A-92922247",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-cutoff-denim-shorts-cat-38-jack-8482/-/A-94492213",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-pleated-front-cuffed-jean-shorts-cat-38-jack-8482/-/A-94492234",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-cutoff-jean-shorts-cat-jack/-/A-92922248",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-cutoff-mid-rise-jean-shorts-cat-jack/-/A-92956779",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-high-rise-paper-bag-cuffed-jean-shorts-cat-jack/-/A-92922249",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-star-embroidered-denim-shorts-cat-38-jack-8482-red/-/A-94131249",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-star-embroidered-cutoff-denim-shorts-cat-38-jack-8482-light-wash/-/A-94131169",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-bermuda-jean-shorts-cat-jack/-/A-92922254",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-patch-pocket-cuffed-jean-shorts-cat-jack/-/A-92922253",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-denim-shorts-art-class-blue/-/A-92955224",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-shortie-denim-shorts-art-class/-/A-94473847",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-high-rise-jean-shorts-art-class/-/A-92955222",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-baggy-bermuda-denim-shorts-art-class/-/A-92955223",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-cut-off-denim-shorts-art-class-blue/-/A-94190219",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-button-paneled-denim-shorts-art-class/-/A-94204367",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-high-rise-a-line-studded-denim-shorts-art-class/-/A-94204368",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-high-rise-a-line-leopard-printed-washed-denim-shorts-art-class-beige/-/A-94190217",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-slouchy-bermuda-shorts-art-class/-/A-94439250",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-high-rise-a-line-colorblock-denim-shorts-art-class/-/A-94204357",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-girlfriend-jean-shorts-evie-medium-wash/-/A-81942002",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/levi-39-s-girls-39-39-patch-39-jean-shorts-medium-wash/-/A-89853452",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-girlfriend-jean-shorts-distressed-medium-wash/-/A-85453323",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-floral-mom-denim-shorts-light-wash/-/A-93018551",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/levi-39-s-174-girls-39-destructed-denim-shorts-white/-/A-93018552",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-denim-shorts-light-blue/-/A-94365219",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-denim-shorts-blue/-/A-94365191",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-gene-denim-shorts-olive-scout/-/A-1002734632",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-jean-short-with-embroidery-pink-and-multicolored-gummies/-/A-1003486270",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-jay-distressed-denim-shorts-olive-scout/-/A-1002476512",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-jegging-shorts-dark-denim-blue/-/A-1003460924",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-denim-paperbag-shorts/-/A-1002512481",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-jean-short-with-embroidery-black-jeans/-/A-1003486304",
      tags: "Bottoms, Girls’ Clothing, Jean Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-matchback-shorts-green-white/-/A-94431043",
      tags: "Bottoms, Girls’ Clothing, Jogger Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jogger Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-matchback-shorts-pink-white/-/A-94431045",
      tags: "Bottoms, Girls’ Clothing, Jogger Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jogger Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-cinnamoroll-matchback-shorts-white-blue/-/A-94431039",
      tags: "Bottoms, Girls’ Clothing, Jogger Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jogger Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-leo-athletic-shorts-olive-scout/-/A-1002476537",
      tags: "Bottoms, Girls’ Clothing, Jogger Shorts, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Jogger Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-icon-3-training-short/-/A-89010427",
      tags: "Bottoms, Girls’ Clothing, Jogger Shorts, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Jogger Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-pocket-track-short/-/A-1005161926",
      tags: "Bottoms, Girls’ Clothing, Jogger Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jogger Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-toddler-fair-trade-organic-cotton-pocket-fleece-shorts/-/A-1004010339",
      tags: "Bottoms, Girls’ Clothing, Jogger Shorts, Kids’ Clothing, Shorts",
      filters: {
        type: "Jogger Shorts",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-track-short/-/A-1002749178",
      tags: "Bottoms, Girls’ Clothing, Jogger Shorts, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Jogger Shorts",
      },
    },
    {
      url: "https://www.target.com/p/vizari-kids-campo-soccer-shorts/-/A-92288891",
      tags: "Bottoms, Girls’ Clothing, Jogger Shorts, Kids’ Clothing, Shorts, Trouser Shorts",
      filters: {
        type: "Jogger Shorts",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-level-up-compression-shorts/-/A-1001702899",
      tags: "Bottoms, Girls’ Clothing, Jogger Shorts, Kids’ Clothing, Shorts, Pull-on Shorts",
      filters: {
        type: "Jogger Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-ribbed-short-small-flowers-on-white-background/-/A-1003487183",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts, Pull-on Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/disney-youth-minnie-mouse-lounge-shorts/-/A-93996657",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts, Pull-on Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-terry-cloth-short-turquoise-and-beige/-/A-1003715312",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts, Pull-on Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-short-multicolored-tie-dye/-/A-1003484785",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts, Pull-on Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-seersucker-short-navy-blue-and-white/-/A-1003461897",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts, Pull-on Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-short-black-and-multicolored-gummies/-/A-1003484796",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-seersucker-short-blue-and-white-striped/-/A-1003460923",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts, Pull-on Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-short-with-frills-black-and-butterflies/-/A-1003486371",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts, Pull-on Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-short-lilac-tropical-and-pink-flamingos/-/A-1003461894",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts, Pull-on Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-short-fruits-on-yellow-background/-/A-1003461918",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-short-off-white-and-koala/-/A-1003461935",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts, Pull-on Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-short-old-pink-and-flowers/-/A-1003461959",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts, Pull-on Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-short-pink-flowers-on-white-background/-/A-1003484795",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts, Pull-on Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-short-pink-multicolored-gummies/-/A-1003486281",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Shorts, Shorts",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-camp-shorts/-/A-1002512004",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-pull-on-knit-shorts-cat-jack/-/A-93434673",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-high-rise-pull-on-denim-utility-shorts-cat-38-jack-8482/-/A-92956780",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-knitted-pull-on-shorts-cat-jack/-/A-89601401",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-pull-on-woven-shorts-cat-jack/-/A-94474068",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-active-butterfly-shorts/-/A-1001544390",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-woven-embroidered-shorts-cat-38-jack-8482-white/-/A-93964117",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-woven-shorts-cat-jack/-/A-94636433",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-fleece-shorts-cat-jack/-/A-94492249",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-pull-on-woven-shorts-cat-jack/-/A-93205330",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-2pk-adaptive-knit-shorts-cat-jack-black-pink/-/A-79760523",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-french-terry-shorts-cat-38-jack-8482/-/A-94624495",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-french-terry-dolphin-shorts-art-class/-/A-94600761",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-fleece-shorts-art-class/-/A-94435221",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-double-waistband-pull-on-boxer-shorts-art-class/-/A-94133340",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-nylon-track-shorts-art-class/-/A-94340879",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-fleece-pull-on-shorts-art-class/-/A-94151920",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-ruffle-shorts-art-class/-/A-94350722",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-foldover-bike-shorts-art-class/-/A-94268742",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-ribbed-sweater-knit-shorts-art-class/-/A-94203991",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-pull-on-chambray-elastic-waist-shorts/-/A-86508219",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-tough-cotton-cartwheel-shorts/-/A-87254817",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-pull-on-solid-shorts/-/A-88499985",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-french-terry-shorts/-/A-88500029",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-active-woven-shorts/-/A-87254552",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-pull-on-cinched-waist-linen-short-kids/-/A-91302843",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-cabana-shorts-blue/-/A-94431036",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-minnie-mouse-gauze-cabana-shorts-pink/-/A-94431048",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-terry-shorts-pink/-/A-94431068",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-graphic-terry-shorts-blue/-/A-94431064",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-tropical-floral-printed-gauze-shorts-pink/-/A-94653596",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-french-terry-ruched-side-shorts/-/A-93421495",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/converse-girls-pull-on-shorts/-/A-94687312",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-french-terry-shorts/-/A-93421498",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-stretch-french-terry-shorts-pink/-/A-93421500",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-olivia-rodrigo-fleece-shorts-art-class-gray/-/A-93069446",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/converse-girls-french-terry-ruched-side-shorts-violet/-/A-94405038",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-def-leppard-fleece-shorts-light-purple/-/A-93069445",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-cabana-striped-shorts-olive-scout-x-julie-sousa/-/A-1004218980",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-crochet-knit-shorts-olive-scout-x-julie-sousa/-/A-1004219019",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/sol-angeles-kids-circle-waves-short/-/A-1003686953",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-grayson-shorts-olive-scout/-/A-1002731470",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/sol-angeles-kids-black-white-stripe-short/-/A-1003707673",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/sol-angeles-kids-circle-waves-short/-/A-1003707657",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-swim-shorts-butterflies-on-multicolored-and-black-background/-/A-1004084089",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-moana-gauze-cabana-shorts-orange/-/A-94431056",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-mesh-athletic-gym-shorts/-/A-86739856",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-mason-corduroy-shorts-olive-scout/-/A-1002255224",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-staycool-stretch-gym-short/-/A-1002734697",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-park-short/-/A-1003048804",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/sol-angeles-kids-coastal-waves-short/-/A-1003707665",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-under-short-5-pack/-/A-1002936767",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girls-jersey-shorts-3-pack/-/A-1003254551",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-athletic-shorts-ochre/-/A-1002580201",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-kash-sweat-shorts-olive-scout/-/A-1002560672",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-husky-pull-on-elastic-waist-shorts/-/A-1003620050",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/sol-angeles-kids-circle-waves-short/-/A-1003707689",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-french-terry-pull-on-short-kids/-/A-1001269905",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-girls-soft-upf-50-jersey-pocket-shorts/-/A-91533870",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-flexknit-gym-short/-/A-1002936527",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-pull-on-shorts-orange-chambray-jackalo/-/A-1000008481",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-high-waisted-compression-shorts/-/A-1002526752",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-stretch-chino-pull-on-short-kids/-/A-1001269938",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-athletic-shorts-parakeet/-/A-1002580209",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-swim-shorts-multicolored-13-years/-/A-1004084084",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-short-pink-and-coral-houses/-/A-1003450039",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack/-/A-1004010372",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/sol-angeles-kids-beckett-swim-shorts/-/A-1003707680",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/champion-girls-fleece-shorts-with-taping/-/A-94603328",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-gingham-short-lilac-and-pink/-/A-1003715284",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/eg-pro-basic-training-youth-graded-short-with-pockets/-/A-1001402909",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/gender-neutral-bluepeter-short-me-henry/-/A-1001177608",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts, Fashion Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-gym-short/-/A-1002590138",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/sol-angeles-kids-terry-short/-/A-1003707641",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-staycool-stretch-running-short/-/A-1002748367",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts, Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/vizari-kids-napa-soccer-shorts-for-for-boys-and-girls/-/A-90738049",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts, Trouser Shorts",
      filters: {
        type: "Trouser Shorts",
      },
    },
    {
      url: "https://www.target.com/p/vizari-kids-trento-soccer-shorts-for-for-boys-and-girls/-/A-90738012",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts, Trouser Shorts",
      filters: {
        type: "Trouser Shorts",
      },
    },
    {
      url: "https://www.target.com/p/vizari-kids-dynamo-soccer-shorts-for-boys-and-girls/-/A-90737987",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts, Trouser Shorts",
      filters: {
        type: "Trouser Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-solid-box-pleat-skirt-above-knee/-/A-87673532",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-plaid-box-pleat-skirt-top-of-the-knee/-/A-87148504",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-tiered-midi-skirt-cat-38-jack-8482-cream/-/A-94492241",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-tiered-gingham-skirt-cat-jack/-/A-94486617",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-midi-skirt-cat-38-jack-8482-indigo/-/A-94624498",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-39-rainbow-39-tulle-skirt-cat-38-jack-8482/-/A-93143387",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-solid-box-pleat-skirt-top-of-knee/-/A-88529244",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-smocked-39-floral-39-ruffle-skirt-cat-38-jack-8482-white/-/A-94472334",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-tulle-skirt-cat-38-jack-8482/-/A-93171131",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-smocked-ruffle-skirt-cat-38-jack-8482-white/-/A-94408557",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-tiered-eyelet-skort-cat-38-jack-8482/-/A-93143376",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-floral-chiffon-skort-cat-38-jack-8482/-/A-94492225",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-maxi-skirt-cat-jack-black/-/A-50873239",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-tennis-skort-art-class/-/A-94610878",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-smocked-tiered-mini-skirt-art-class/-/A-94600766",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-smocked-drop-waist-tiered-floral-skirt-art-class/-/A-94133381",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-lace-trim-a-line-mini-skort-art-class/-/A-94340527",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-ponte-pleat-skirt/-/A-87669954",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-soft-girls-jersey-tiered-skirt/-/A-91855162",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-solid-pleated-skirt-below-the-knee/-/A-88529113",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-solid-box-pleat-skirt-below-the-knee/-/A-91378904",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/miamore-gigi-peasant-skirt-and-hat-with-hair-accessory/-/A-93976751",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Full Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-plaid-a-line-skirt-below-the-knee/-/A-87148006",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-summer-high-waisted-maxi-skirt-ruffle-hem-cute-long-skirts-with-elastic-waistband-for-kid-girl-5-14y/-/A-1002527820",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-peasant-skirt-flower-hair-accessory/-/A-93962695",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Full Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-active-tulle-skort/-/A-1003240000",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Tutus",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-button-midi-skirts-casual-high-elastic-waist-a-line-pleated-midi-chiffon-pink-skirts-with-pockets/-/A-1003989488",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-plaid-pleated-skirt-below-the-knee/-/A-87671869",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-denim-skirts-high-waist-pleated-a-line-skirts-midi-skirts-side-button-skirts-girls-bottoms/-/A-93726800",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Full Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-slim-plaid-a-line-skirt-below-the-knee/-/A-87148955",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-pleated-skirt-with-buckle-detail-kids/-/A-92959164",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/maxi-skorts-skirt-for-girls-button-front-ruffle-high-waisted-long-skirts-with-belt-and-pocket-3-12-years/-/A-91842342",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-ruffled-maxi-skirts-high-waisted-long-skirt-with-belt-button-front-skirts-with-pocket-grey-5-14y/-/A-1002515399",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-long-skirt-high-waist-drawstring-swing-maxi-skirt-with-pockets/-/A-1002551297",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-classic-athletic-skirt/-/A-1001547110",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Asymmetrical Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/sol-angeles-kids-rib-tier-skirt/-/A-1004107855",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Full Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-ruffled-skirts-summer-highwaist-maxi-skirts-for-girls-a-line-adjustable-drawstring-skirts-with-irregular-hem/-/A-1003250553",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Full Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-chambray-skort-navy-blue-and-white-hearts/-/A-1004053122",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-dotted-tulle-skirt/-/A-1003240083",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Tutus",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-pique-knit-skirt/-/A-1002457976",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Jean Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-organic-twill-pinafore-skirt-jackalo/-/A-93962680",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-solid-pleated-skirt-below-the-knee-girls-satin-skirts/-/A-91883769",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-novelty-circle-skirt/-/A-1003417822",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Circle Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-active-skort/-/A-1001827142",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Full Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-skirts-with-ruffle-sleeve-tops-tie-detail-skirts-ruffled-trim-girls-tops-with-pleated-flutter-skirts/-/A-93313016",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Pencil Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-linen-pull-on-pleated-bow-skort-kids/-/A-1000873134",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-chambray-skort-blue-and-white-cherries/-/A-1004053100",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-flowy-shorts-with-pockets-athletic-running-skirt-high-waist/-/A-1002808557",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-eiffel-tower-eyelet-skirt-petit-confection/-/A-1001050649",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-2pcs-cute-color-printed-short-sleeve-shirt-and-elastic-high-waist-bow-a-line-skirt-sets/-/A-1002568947",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-pleated-elastic-high-waist-a-line-swing-maxi-long-metallic-shiny-shimmer-skirt/-/A-1002761977",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-vitality-skirt/-/A-1002427200",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Asymmetrical Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-tiered-elastic-waist-skirt-green-with-white-and-pink-bird/-/A-1003009436",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bow-top-and-ruffled-skirt-set-white-and-black-striped/-/A-1003009419",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Full Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-a-line-denim-midi-skirt-casual-pleated-buttons-over-knee-skirts-with-pocket-3-12y/-/A-1002529738",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-harmony-skirt/-/A-1001647400",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Circle Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/champion-girls-a-line-skort/-/A-94603342",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/a-leading-role-pink-mermaid-premium-child-transformation-skirt/-/A-1005085567",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Full Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/a-leading-role-yellow-mermaid-premium-child-transformation-skirt/-/A-1005084425",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Full Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/a-leading-role-aqua-mermaid-premium-child-transformation-skirt/-/A-1005085589",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Full Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/a-leading-role-purple-mermaid-premium-child-transformation-skirt/-/A-1005085518",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Full Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-mesh-skirt-lilac-tropical-and-pink-flamingos/-/A-1003009024",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-mesh-skirt-pink-and-green/-/A-1003009159",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girl-selma-floral-pinafore-skirt-early-sunday/-/A-1003530749",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girl-boho-floral-skirt-cozmo/-/A-1003530637",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-ruffle-skirt-black-and-pink-butterflies/-/A-1003009201",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-tulle-glitter-skirt-petit-confection/-/A-1000916599",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-ruched-waist-skirt-red/-/A-94365246",
      tags: "Bell Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Bell Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-stitch-ruched-waist-skirt-cream/-/A-94365265",
      tags: "Bell Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Bell Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-smocked-waist-tiered-skort-art-class/-/A-94340877",
      tags: "Bottoms, Circle Skirts, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Circle Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-smocked-waist-tiered-circle-skirt-art-class/-/A-94151935",
      tags: "Bottoms, Circle Skirts, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Circle Skirts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-soft-girls-jersey-twirly-skirt/-/A-91855820",
      tags: "Bottoms, Circle Skirts, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Circle Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-stitch-tiered-skirt-the-disney-collection-by-cat-jack-cream/-/A-94439683",
      tags: "Bottoms, Circle Skirts, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Circle Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-drop-waist-pleated-denim-skirt-art-class/-/A-94203973",
      tags: "Bottoms, Full Skirts, Girls’ Clothing, Kids’ Clothing, Skirts, Jean Skirts",
      filters: {
        type: "Full Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-tiered-maxi-skirt-art-class/-/A-94340526",
      tags: "Bottoms, Full Skirts, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Full Skirts",
      },
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-poplin-skirt-pink/-/A-93529415",
      tags: "Bottoms, Full Skirts, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Full Skirts",
      },
    },
    {
      url: "https://www.target.com/p/converse-girls-french-terry-skort/-/A-94687316",
      tags: "Bottoms, Full Skirts, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Full Skirts",
      },
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-poplin-skirt-tan/-/A-93529416",
      tags: "Bottoms, Full Skirts, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Full Skirts",
      },
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-jersey-skirt-white/-/A-93529414",
      tags: "Bottoms, Full Skirts, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Full Skirts",
      },
    },
    {
      url: "https://www.target.com/p/a-leading-role-orange-mermaid-premium-child-transformation-skirt/-/A-1005084517",
      tags: "Bottoms, Full Skirts, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Full Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-denim-skirt-cat-38-jack-8482-white/-/A-92780643",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing, Skirts",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-denim-ruffle-flare-skirt-cat-38-jack-8482/-/A-94492215",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing, Skirts",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-paperbag-waist-cargo-skirt-cat-38-jack-8482-pink/-/A-94492231",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing, Skirts",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-button-front-denim-skirt-cat-38-jack-8482/-/A-94492212",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing, Skirts",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-denim-skirtall-cat-38-jack-8482-gray-wash/-/A-92922259",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing, Skirts",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-paperbag-waist-embroidered-cargo-skirt-cat-38-jack-8482-cream/-/A-94492232",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing, Skirts",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-pleated-denim-mini-skirt-art-class/-/A-94473849",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing, Skirts",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-rodeo-cargo-skort-medium-wash/-/A-94708626",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing, Skirts",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/levi-39-s-174-girls-39-floral-embroidered-mash-up-denim-skirt-light-wash/-/A-93018589",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing, Skirts",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/levi-39-s-174-girls-39-high-rise-denim-cargo-skort-medium-wash/-/A-93018590",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing, Skirts",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-ruffled-skort/-/A-91604109",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing, Skirts",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-denim-skirts-with-side-pockets-pleated-hem-skirts-casual-mini-denim-skirts/-/A-93726795",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing, Skirts",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-chambray-skort-navy-blue/-/A-1004053053",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing, Skirts",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-athletic-active-skort/-/A-88570998",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-knit-skort/-/A-86738553",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-knit-patch-pocket-skort-cat-jack/-/A-90866795",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-floral-woven-skort-cat-38-jack-8482/-/A-94624494",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-blend-chino-skort-top-of-knee/-/A-87148749",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-pull-on-knit-skort-cat-38-jack/-/A-94624499",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-tiered-knit-skort-cat-38-jack-8482/-/A-92929060",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-gauze-woven-skort-cat-38-jack-8482/-/A-94624500",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-tiered-skort-cat-jack/-/A-93205332",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-knit-skort-art-class/-/A-93460935",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-fleece-skort-art-class/-/A-94435217",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-smocked-skorts/-/A-91379442",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-ponte-button-front-skort/-/A-87671114",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-blend-chino-skort-above-knee/-/A-87148851",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-solid-a-line-skirt-below-the-knee/-/A-87148983",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-slim-solid-a-line-skirt-below-the-knee/-/A-87149576",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-friends-pleated-woven-skort-blue/-/A-94431149",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-friends-pleated-woven-skort-off-white/-/A-94431150",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-slim-blend-chino-skort-above-knee/-/A-87149380",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-slim-side-pleat-plaid-skort-above-knee/-/A-86739308",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-slim-blend-chino-skort-top-of-knee/-/A-87149573",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-plaid-pleated-skort-top-of-knee/-/A-87672154",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-solid-pleated-skort-top-of-knee/-/A-88829568",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-side-pleat-plaid-skort-above-knee/-/A-86739440",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-pink-tutu-hairband-set-osfm-pink/-/A-94177878",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Tutus",
      filters: {
        type: "Tutus",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-ballet-skirt-sl61-pull-on-skirt-florence-by-so-danca-many-colors/-/A-1004644079",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Tutus",
      filters: {
        type: "Tutus",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-leopard-tutu-bow-set-osfm-brown/-/A-94177879",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Tutus",
      filters: {
        type: "Tutus",
      },
    },
    {
      url: "https://www.target.com/p/a-leading-role-strawberry-shortcake-premium-child-berry-blue-tulle-skirt/-/A-93001201",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts, Tutus",
      filters: {
        type: "Tutus",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-gingham-skirt-cat-jack-blue/-/A-94339785",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-2-pack-skorts-toddler-to-big-kid/-/A-92190028",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-baby-toddler-girls-dotted-tulle-skirt/-/A-1003240087",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Tutus",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-tutu-set-of-4-osfm-multicolored/-/A-1000042480",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Tutus",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-cakey-cat-baby-box-girls-2-pack-skorts-little-kid-to-big/-/A-92749773",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-active-tulle-skort/-/A-1002889788",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing, Tutus",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-skirts-with-white-blouse-ruffle-long-sleeve-button-down-shirt-and-pleated-skirt-school-uniform-2-piece-outfit/-/A-93725749",
      tags: "A-line Skirts, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Skirts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-yth-recover-jogger/-/A-1002768610",
      tags: "Athletic Jogger Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-yth-mizuno-power-warm-up-pants/-/A-90151249",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-prospect-softball-pant/-/A-84808521",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/rip-it-play-ball-softball-pant-black-l/-/A-94610754",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-belted-softball-pant/-/A-76144129",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/rip-it-play-ball-softball-pant-white-l/-/A-94610757",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-girl-s-belted-stretch-softball-pant/-/A-79260612",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/minus33-merino-wool-midweight-kid-s-base-layer-bottom-100-merino-wool/-/A-89832570",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-padded-unbelted-softball-pants/-/A-76021663",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/rip-it-play-ball-softball-pant-black-s/-/A-94610756",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/rip-it-play-ball-softball-pant-charcoal-l/-/A-94610800",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/rip-it-play-ball-softball-pant-white-xl/-/A-94610750",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/rip-it-play-ball-softball-pant-charcoal-xl/-/A-94610768",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/rip-it-play-ball-softball-pant-charcoal-m/-/A-94610764",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/rip-it-play-ball-softball-pant-charcoal-s/-/A-94610729",
      tags: "Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girl-s-3-pack-velour-jogger-sweatpants-sets/-/A-1000020854",
      tags: "Bottom Sets, Bottoms, Girls’ Clothing, Kids’ Clothing, Pant Sets",
      filters: {
        type: "Bottom Sets",
      },
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girls-4-pack-active-fleece-jogger-sweatpants/-/A-1000170415",
      tags: "Bottom Sets, Bottoms, Girls’ Clothing, Kids’ Clothing, Pant Sets",
      filters: {
        type: "Bottom Sets",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-pull-on-wide-leg-cargo-pants-cat-38-jack-8482/-/A-94492235",
      tags: "Bottoms, Cargo Pants, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Cargo Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-woven-cargo-pull-on-pants-cat-38-jack-8482-sage-green/-/A-94600613",
      tags: "Bottoms, Cargo Pants, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Cargo Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-wide-leg-cargo-jeans-art-class/-/A-92955225",
      tags: "Bottoms, Cargo Pants, Girls’ Clothing, Kids’ Clothing, Jeans",
      filters: {
        type: "Cargo Pants",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-wide-leg-cargo-pants-olive-green/-/A-94708627",
      tags: "Bottoms, Cargo Pants, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Cargo Pants",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-denim-parachute-cargo-pants-light-wash/-/A-93018543",
      tags: "Bottoms, Cargo Pants, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Cargo Pants",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-parachute-cargo-pants-olive-green/-/A-94405043",
      tags: "Bottoms, Cargo Pants, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Cargo Pants",
      },
    },
    {
      url: "https://www.target.com/p/kids-corbin-corduroy-pants-olive-scout/-/A-1001820970",
      tags: "Bottoms, Cargo Pants, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Cargo Pants",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-active-performance-chino-pants/-/A-92889680",
      tags: "Bottoms, Chino Pants, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Chino Pants",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-stretch-pencil-pants/-/A-91378884",
      tags: "Bottoms, Chino Pants, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Chino Pants",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-pull-on-utility-cargo-pants/-/A-93027682",
      tags: "Bottoms, Chino Pants, Girls’ Clothing, Kids’ Clothing, Pull-on Pants, Utility Pants",
      filters: {
        type: "Chino Pants",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-ruffle-flare-pants/-/A-1000715360",
      tags: "Bottoms, Fashion Pants, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/flare-leggings/-/A-94177881",
      tags: "Bottoms, Fashion Pants, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-black-velvet-bell-bottom-pants/-/A-1000043088",
      tags: "Bottoms, Fashion Pants, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-royal-blue-bell-bottom-pants/-/A-94177883",
      tags: "Bottoms, Fashion Pants, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-ruffle-flare-pants/-/A-1000715333",
      tags: "Bottoms, Fashion Pants, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-rust-velvet-bell-bottom-pants/-/A-94175340",
      tags: "Bottoms, Fashion Pants, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-ruffle-my-feathers-flare-pants-with-ruffle-southern-grace/-/A-1000916379",
      tags: "Bottoms, Fashion Pants, Girls’ Clothing, Kids’ Clothing, Lounge Pants",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-wide-leg-pants-high-elastic-smocked-waist-casual-cute-long-trousers/-/A-1002762989",
      tags: "Bottoms, Fashion Pants, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-floral-legging-set/-/A-94183889",
      tags: "Bottoms, Fashion Pants, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-high-waist-paperbag-pants-casual-fit-tapered-trousers-with-pockets/-/A-1002474498",
      tags: "Bottoms, Fashion Pants, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/champion-girls-wide-leg-pleated-fleece-pants/-/A-94603324",
      tags: "Bottoms, Fashion Pants, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/champion-girls-scuba-track-pants/-/A-94603325",
      tags: "Bottoms, Fashion Pants, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-solid-color-mesh-patched-design-fleece-thickened-pants/-/A-1004608789",
      tags: "Bottoms, Fashion Pants, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/girl-rayon-rib-skort-tenly/-/A-1004473732",
      tags: "Bottoms, Fashion Shorts, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-wide-leg-jeans-cat-38-jack-8482/-/A-94492244",
      tags: "Bottoms, Five Pocket Pants, Girls’ Clothing, Kids’ Clothing, Jeans",
      filters: {
        type: "Five Pocket Pants",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-ruffled-skort/-/A-91546926",
      tags: "Bottoms, Girls’ Clothing, Jean Skirts, Kids’ Clothing",
      filters: {
        type: "Jean Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-floral-embroidery-wide-leg-jeans-cat-38-jack-8482-light-wash/-/A-92956782",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-pull-on-wide-leg-denim-pants-cat-38-jack-8482/-/A-92992739",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-flare-jeans-cat-jack/-/A-88182199",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-wide-leg-jeans-cat-38-jack-8482-light-wash/-/A-94492247",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-soft-knit-jeggings-cat-jack/-/A-50695212",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-bootcut-jeans-cat-jack/-/A-50722989",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-high-rise-flare-jeans-cat-38-jack-8482-dark-wash/-/A-94492227",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-floral-embroidered-cuff-wide-leg-jeans-cat-38-jack-8482-dark-wash/-/A-94492230",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-pull-on-flare-jeans-cat-jack/-/A-88116637",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-denim-straight-jeans-cat-38-jack-8482/-/A-90992865",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-patch-pocket-wide-leg-jeans-cat-38-jack-8482-light-wash/-/A-92922260",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-knit-waist-pull-on-skinny-jeans-cat-jack/-/A-54454335",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-wide-leg-jeans-cat-38-jack-8482-medium-wash/-/A-94600612",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-flare-leg-jeans-cat-38-jack-8482-dark-wash/-/A-94600607",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-high-rise-ultimate-stretch-skinny-jeans-cat-jack/-/A-85428400",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-adaptive-jeans-cat-jack-dark-wash/-/A-85404391",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-adaptive-jeans-cat-jack-light-wash/-/A-85404534",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-wide-leg-carpenter-jeans-art-class-tan/-/A-93113728",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-high-rise-baggy-jeans-art-class-8482/-/A-91212374",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-slouchy-wide-leg-jeans-art-class/-/A-94451988",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-barrel-leg-jeans-art-class/-/A-94451976",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-iron-knee-denim-jeggings/-/A-87672521",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing, Leggings",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-baggy-barrel-fit-jeans-medium-wash/-/A-94708630",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-baggy-fit-flare-jeans-light-wash/-/A-94708632",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-726-cargo-flare-pants-pink/-/A-94708628",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-bootcut-jeans/-/A-89230714",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-pull-on-mid-rise-jeggings/-/A-81942008",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/just-love-girls-woven-denim-jegging/-/A-1002609836",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing, Leggings",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/just-love-jeggings-for-girls-comfortable-seamless-printed-leggings/-/A-1002609900",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing, Leggings",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/kids-hudson-denim-jeans-olive-scout/-/A-1001821212",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-mid-rise-bootcut-jeans-lucky-blessed/-/A-1000527205",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/just-love-girls-woven-denim-jegging-29693-mdden-8/-/A-1002609799",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing, Leggings",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-cotton-reinforced-straight-leg-pants-jackalo-denim/-/A-93874161",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/lucky-blessed-girl-s-bootcut-jeans/-/A-1000527283",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-in-the-dark-of-night-flare-pants-southern-grace/-/A-1001165312",
      tags: "Bottoms, Girls’ Clothing, Jeans, Kids’ Clothing, Lounge Pants",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-fleece-jogger-pants-cat-38-jack-8482/-/A-94576197",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-fleece-jogger-pants-cat-38-jack-8482-heather-gray/-/A-94486504",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-fleece-jogger-pants-cat-38-jack-8482/-/A-94492219",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-drawstring-jogger-pants/-/A-89317745",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-bugs-bunny-character-youth-athletic-gray-jogger-pants/-/A-86218736",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-active-jogger-with-pockets/-/A-1004938727",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-iron-knee-fleece-jogger-sweatpants/-/A-88860411",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-active-track-pants/-/A-87869803",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-moana-bike-shorts-green/-/A-94431054",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-def-leppard-fleece-joggers-light-purple/-/A-93069442",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-olivia-rodrigo-fleece-jogger-pants-gray/-/A-93069443",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-flexknit-jogger/-/A-1002931625",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-fleece-2-pack-jogger-pants-little-kid-to-big-kid/-/A-87449356",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-modern-character-and-title-logo-youth-black-sweat-pants/-/A-86121539",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-create-explore-survive-youth-black-graphic-jogger-pants/-/A-86483737",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/disney-princess-moana-belle-rapunzel-jasmine-ariel-cinderella-girls-2-pack-pants-little-kid-to-big-kid/-/A-88398304",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-jogger-sweatpant/-/A-1004010364",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/batman-mask-as-logo-drip-icon-athletic-heather-youth-sweatpants/-/A-89840245",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/adventure-is-an-attitude-on-youth-black-sweatpants/-/A-89840268",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-batman-line-art-dc-comic-heather-grey-sweatpants/-/A-89840278",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/disney-princess-cinderella-belle-jasmine-moana-rapunzel-ariel-girls-fleece-3-pack-pants-toddler-to-big-kid/-/A-87956696",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-diva-bon-bon-girls-fleece-2-pack-pants-little-kid-to-big-kid/-/A-88148031",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-classic-logo-youth-athletic-gray-graphic-jogger-pants/-/A-86483731",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-scooby-snack-youth-black-graphic-sweats/-/A-89840273",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/perfect-spirals-flaming-football-youth-jogger-pants/-/A-93130766",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/mightly-kids-organic-cotton-lightweight-jogger-sweatpant/-/A-1004010282",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/the-justice-league-batman-superman-wonder-woman-youth-black-graphic-jogger-pants/-/A-86218844",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/disney-encanto-mirabel-girls-fleece-2-pack-leggings-little-kid-to-big-kid/-/A-87721997",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing, Leggings",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-girls-fleece-2-pack-leggings-little-kid-to-big-kid/-/A-88147935",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing, Leggings",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/ola-otter-unisex-joggers-white/-/A-1004191251",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-staycool-stretch-jogger/-/A-1002957310",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/perfect-spirals-flaming-football-youth-jogger-pants/-/A-93130739",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-ruh-roh-youth-black-graphic-jogger-pants/-/A-86383361",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-c-3po-princess-leia-chewbacca-3-pack-leggings/-/A-87685671",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-league-of-super-pets-youth-black-graphic-jogger-pants/-/A-86416722",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/ola-otter-unisex-joggers-blue/-/A-1004191242",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/ola-otter-unisex-joggers-black/-/A-1004191246",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/in-tailgating-we-trust-american-flag-and-spatula-youth-jogger-pants/-/A-93130757",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/parking-lot-pioneer-old-west-wagon-football-cowboy-youth-jogger-pants/-/A-93115785",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/parking-lot-pioneer-old-west-wagon-football-cowboy-youth-jogger-pants/-/A-93130748",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-cotton-reinforced-jogger-sweatpants-jackalo-butterscotch/-/A-93874182",
      tags: "Bottoms, Girls’ Clothing, Jogger Pants, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-ruched-bow-leggings/-/A-93068544",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-ruched-bow-leggings/-/A-93068541",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-leggings-cat-jack/-/A-53438228",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-solid-ribbed-leggings-cat-38-jack-8482/-/A-90927665",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-heart-leggings-cat-jack-black/-/A-82496262",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-leopard-printed-leggings-cat-38-jack-8482-beige/-/A-94492228",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-sparkle-leggings-cat-jack/-/A-83723614",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-capri-leggings-cat-jack/-/A-78469344",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-flare-leggings-cat-jack/-/A-89906092",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-halloween-leggings-cat-38-jack-8482-purple/-/A-94636431",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-2pk-flare-leggings-cat-38-jack-8482-black-faux-denim/-/A-90997624",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-ribbed-flare-leggings-cat-38-jack-8482/-/A-93278901",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-heart-leggings-cat-jack/-/A-94492253",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-39-floral-39-leggings-cat-38-jack-8482-light-olive/-/A-94492209",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-adaptive-flare-ribbed-leggings-cat-38-jack-8482-red-purple/-/A-94579576",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-adaptive-2pk-capri-leggings-cat-jack/-/A-85630544",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-2pk-capri-leggings-cat-38-jack-8482-light-pink/-/A-94600604",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-adaptive-leggings-cat-38-jack-8482-brown-light-pink/-/A-94579583",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-halloween-leggings-cat-38-jack-8482-cream/-/A-94636429",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-2pk-adaptive-leggings-cat-jack/-/A-79802767",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-2pk-halloween-legging-39-s-cat-38-jack-8482-lavender-cream/-/A-94579581",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-2pk-halloween-capri-39-s-cat-38-jack-8482-lavender-cream/-/A-94579582",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-flare-leggings-art-class/-/A-89610128",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-leggings-with-side-pocket-art-class/-/A-89609849",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-foldover-waist-flare-leggings-art-class-8482/-/A-94435225",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-capri-leggings-art-class/-/A-93460927",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-tough-cotton-novelty-leggings/-/A-86508279",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings, Pull-on Pants",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-fleece-lined-leggings/-/A-88480700",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-tough-cotton-capri-leggings/-/A-87254673",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-active-leggings/-/A-87678122",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-tough-cotton-novelty-leggings/-/A-91637854",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings, Pull-on Pants",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-active-flare-ribbed-leggings/-/A-1004938653",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-ribbed-flare-leggings/-/A-1005140015",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/just-love-girls-woven-denim-jegging-29692-mdden-8/-/A-1002609841",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/29650-10459-5-6-just-love-girls-jeggings-leggings-pack-of-2/-/A-1002609831",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/just-love-girls-woven-denim-jegging/-/A-1002609801",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004167921",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194034",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/ad-rescue-wear-ultra-soft-non-itch-eczema-pants-for-kids-eco-friendly-tencel-eczema-clothing-no-zinc-or-dyes-8-9-years/-/A-1000034406",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/ad-rescue-wear-ad-rescuewear-ultra-soft-non-itch-eczema-pants-for-kids-eco-friendly-tencel-eczema-clothing-no-zinc-or-dyes-5-years/-/A-1000034413",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/just-love-girls-woven-denim-jegging/-/A-1002609991",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/just-love-girls-jeggings-leggings-pack-of-2/-/A-1002609807",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-baby-ruffle-butt-soft-cotton-leggings/-/A-90735767",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/29614-10466-7-8-just-love-girls-jeggings-leggings-pack-of-2/-/A-1002609818",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/gender-neutral-women-textured-capri-high-rise-leggings-phat-buddha/-/A-1000560716",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-faux-jean-skinny-leggings-for-girls-set-of-2/-/A-1003431136",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/leveret-girls-classic-solid-color-legging/-/A-89313119",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/posh-peanut-solid-ribbed-black-cha-cha-leggings/-/A-1001790760",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/leveret-girls-boho-solid-color-legging/-/A-89311996",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-jada-girls-leggings-3-pack-multi-size-multiple-colors/-/A-94082489",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/rebel-girls-x-mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings-rebel-girls-leopard-x-large/-/A-1004167331",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-3pk-fair-trade-organic-cotton-leggings-navy-x-large/-/A-1004238734",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004167962",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194033",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194035",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004167927",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings-black-and-jewel-stripe-x-large/-/A-1004194025",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/ad-rescue-wear-wrap-e-soothe-ultra-soft-non-itch-eczema-pants-for-kids-eco-friendly-tencel-eczema-clothing-6-7-years/-/A-94165507",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194029",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings-jewel-stripe-large/-/A-1004167964",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings-jewel-stripe-x-large/-/A-1004167955",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194021",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194041",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/leveret-girls-neutral-solid-color-legging/-/A-89313774",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings-black-and-jewel-stripe-large/-/A-1004194028",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194038",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194036",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/ola-otter-girl-leggings-blue/-/A-1004191172",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194039",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-solid-color-soft-cotton-elastic-warm-quality-leggings/-/A-1004641866",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-ignite-high-waisted-leggings/-/A-1002469890",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-ruffle-leggings/-/A-1004497985",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-baby-toddler-girls-ruffle-leggings-with-signature-rear-ruffles/-/A-1004497980",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/the-pink-picket-fence-suzie-dino-leggings-for-girls-soft-stretchy-play-leggings-hand-painted-dinosaur-print/-/A-1004847625",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-capri-legging-black-and-small-flower/-/A-1004053078",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-style-girls-fungus-leggings-spring-and-autumn-new-children-s-solid-color-leggings-girl-s-kindergarten-trousers/-/A-1003201105",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-capri-leggings-ice-lollipops/-/A-1003846085",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-microfiber-legging-tights-for-girls-set-of-3/-/A-1003430826",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/ola-otter-girl-leggings-pinwheel-parade/-/A-1003030085",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/the-pink-picket-fence-girls-3-pack-cotton-leggings-dinosaur-print-sensory-friendly-pants-pack-of-3-super-soft-leggings/-/A-1005133335",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/ola-otter-girl-leggings-flamingo-forest/-/A-1003029824",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/colorblock-athletic-leggings-black-and-multicolored-butterflies/-/A-1002803239",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/ola-otter-girl-leggings-happy-camping/-/A-1003030086",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/ribbed-leggings-black/-/A-1002802494",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings, Pull-on Pants",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-capri-legging-small-flowers-on-cream-background/-/A-1003868275",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-solid-color-lace-design-tight-pants-leggings/-/A-1004801036",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-capri-legging-black-and-multicolored-gummies/-/A-1003868264",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-olive-leggings-vignette/-/A-1001251478",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-legging-candy-pink/-/A-1003868340",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-jersey-capri-legging-dark-old-pink/-/A-1003846317",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-organic-cotton-capri-legging-palm-trees-pink-flamingo-and-turquoise/-/A-1003846108",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Leggings",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/gender-neutral-boys-antony-pants-me-henry/-/A-1001177664",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Pants",
      filters: {
        type: "Lounge Pants",
      },
    },
    {
      url: "https://www.target.com/p/gender-neutral-kid-s-teal-cord-pant-me-henry/-/A-1001177616",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Pants",
      filters: {
        type: "Lounge Pants",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-solid-color-loose-casual-pants/-/A-1004708347",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Lounge Pants, Pull-on Pants",
      filters: {
        type: "Lounge Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-overalls-cat-jack/-/A-85428619",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Overalls",
      filters: {
        type: "Overalls",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-wide-leg-baggy-denim-overalls-cat-38-jack-8482-dark-wash/-/A-94492242",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Overalls",
      filters: {
        type: "Overalls",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-overalls-west-lake-medium-wash/-/A-82890149",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Overalls",
      filters: {
        type: "Overalls",
      },
    },
    {
      url: "https://www.target.com/p/girls-wide-leg-pants-elastic-waistband-pleated-pants-for-kids-girls-palazzo-pants-with-pockets-girls-casual-trousers/-/A-92364699",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Palazzo Pants",
      filters: {
        type: "Palazzo Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-pull-on-embroidered-cargo-flare-jeans-cat-38-jack-8482-light-wash/-/A-91080917",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-french-terry-wide-leg-pants-cat-38-jack-8482/-/A-94624496",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-french-terry-lounge-pants-art-class/-/A-94600762",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-nylon-track-pants-art-class/-/A-94600764",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-pull-on-knit-gauze-wide-leg-pants/-/A-91679081",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-moana-gauze-cabana-pants-cream/-/A-94431055",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-tropical-floral-printed-gauze-pants-pink/-/A-94653595",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/converse-girls-track-pants/-/A-94687317",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/authentic-apparel-big-girls-classic-stretch-skinny-leg-school-uniform-pants/-/A-1003286741",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/posh-peanut-solid-ribbed-black-bell-bottoms/-/A-1001790569",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-upf-50-jersey-pocket-pants/-/A-90736032",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-cotton-reinforced-tapered-leg-pants-jackalo-lilac-linen/-/A-93874175",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-cotton-reinforced-straight-leg-pants-jackalo-orange-chambray/-/A-93874144",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/wide-leg-capri-linen-pant-white-and-sage-striped/-/A-1002803722",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/jackalo-reinforced-lined-tapered-leg-pants-navy/-/A-93874188",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/kids-james-classic-relaxed-sweatpant-hunter-green/-/A-1004964189",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants, Sweatpants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-reinforced-tapered-leg-pants-olive-jackalo/-/A-1004883837",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-reinforced-straight-leg-pants-plum-jackalo/-/A-1004890425",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-reinforced-tapered-leg-pants-navy-jackalo/-/A-1002374284",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Pants",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-twill-shorts/-/A-1002511934",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-fleece-sweat-shorts/-/A-88829653",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-pull-on-cinched-waist-linen-short-toddler/-/A-91302854",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-pull-on-shorts-navy-loopknit-jackalo/-/A-1004883945",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-athletic-shorts-jackalo/-/A-93994091",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-chambray-beach-short/-/A-1002936869",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Pull-on Shorts",
      filters: {
        type: "Pull-on Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-indigo-skort/-/A-86508138",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-active-chino-skort-top-of-the-knee/-/A-88529069",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Skorts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-high-waist-paper-bag-pants-belted-waist-tapered-pants-bow-deco-pants-with-pocket-pink-140/-/A-93555396",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Suit Pants",
      filters: {
        type: "Suit Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-fleece-wide-leg-sweatpants-art-class/-/A-94435223",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Sweatpants",
      },
    },
    {
      url: "https://www.target.com/p/girls-fleece-flare-sweatpants-art-class/-/A-93441994",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Sweatpants",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-sweatpants/-/A-89317956",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Sweatpants",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-jogger-sweatpants/-/A-87254816",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Sweatpants",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-sweatpants/-/A-86739525",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Sweatpants",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-high-pile-fleece-lined-jogger-sweatpants/-/A-88876530",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Sweatpants",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-wide-leg-knit-pants/-/A-1002271482",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Sweatpants",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-husky-high-pile-fleece-lined-jogger-sweatpants/-/A-1004939062",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Sweatpants",
      },
    },
    {
      url: "https://www.target.com/p/converse-girls-french-terry-wide-leg-pants/-/A-94687310",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Sweatpants",
      },
    },
    {
      url: "https://www.target.com/p/eg-pro-girl-fleece-jogger-essential-super-soft-moisture-wicking/-/A-1002668434",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Sweatpants",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-isabella-gauze-pants-vignette/-/A-1001251586",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Sweatpants",
      },
    },
    {
      url: "https://www.target.com/p/girl-ribbed-hacci-layering-set-danskin/-/A-1001893719",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Sweatpants",
      },
    },
    {
      url: "https://www.target.com/p/girl-peached-layering-set-danskin/-/A-1001893740",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Sweatpants",
      filters: {
        type: "Sweatpants",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-parachute-cargo-pants-cat-38-jack-8482/-/A-94492233",
      tags: "Bottoms, Girls’ Clothing, Kids’ Clothing, Utility Pants",
      filters: {
        type: "Utility Pants",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-big-girls-heavyweight-4-in-1-system-jackets/-/A-93713811",
      tags: "3-In-1 Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "3-In-1 Jackets",
      },
    },
    {
      url: "https://www.target.com/p/kids-water-resistant-insulated-3-in-1-jacket/-/A-1005092504",
      tags: "3-In-1 Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets, Rain Coats",
      filters: {
        type: "3-In-1 Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-baby-girls-fleece-lined-parka-jacket-kids-coat/-/A-92699321",
      tags: "Anorak Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas, Puffer Jackets",
      filters: {
        type: "Anorak Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-hooded-parka-jacket-fleece-linded-winter-coat/-/A-92701680",
      tags: "Anorak Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Fleece Jackets, Parkas",
      filters: {
        type: "Anorak Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-winter-coat-with-faux-fur-hood-parka-jacket/-/A-90227397",
      tags: "Anorak Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas",
      filters: {
        type: "Anorak Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-big-girls-midweight-fleece-lined-anorak-jackets/-/A-93802521",
      tags: "Anorak Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Anorak Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-astrid-school-blazer-charcoal-gray/-/A-91487278",
      tags: "Blazers, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Blazers",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-hopsack-blazer/-/A-89299996",
      tags: "Blazers, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Blazers",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-jane-velvet-coat-vignette/-/A-1001251673",
      tags: "Blazers, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Blazers",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-plaid-pattern-solid-color-lapel-design-cute-style-quilted-coat/-/A-1004604002",
      tags: "Blazers, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Blazers",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-french-terry-contrast-trim-cardigan-kids/-/A-1000901494",
      tags: "Blazers, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Blazers",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-french-terry-varsity-bomber-jacket-little-kid-to-big/-/A-89709664",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-magic-ombre-sequin-bomber-jacket/-/A-93788529",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-frozen-lilo-stitch-girls-varsity-bomber-jacket-toddler-to-big-kid/-/A-91798974",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-french-terry-varsity-bomber-jacket/-/A-1003876949",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-varsity-bomber-jacket-little-kid-to-big-kid/-/A-93002344",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-fiesta-glow-ombre-sparkle-sequin-bomber-jacket/-/A-1001835956",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-mystic-mermaid-sequin-bomber-jacket/-/A-1002280575",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/bluey-girls-varsity-bomber-jacket-little-kid-to-big/-/A-91798936",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/pokemon-girls-french-terry-varsity-bomber-jacket-little-kid-to-big-kid/-/A-1000762918",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-amethyst-dream-sequin-bomber-jacket/-/A-1001636320",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-aurora-gradient-sequin-bomber-jacket/-/A-1001835921",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-spider-gwen-girls-varsity-bomber-jacket-little-kid-to-big/-/A-91798948",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-ombre-sequin-bomber-jacket/-/A-93281300",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-cosmic-radiance-sequin-bomber-jacket/-/A-1001647478",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-neon-stripe-sequin-bomber-jacket/-/A-1002280628",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-candy-shimmer-sequin-bomber-jacket/-/A-93788550",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-spectrum-sparkle-sequin-bomber-jacket/-/A-1001647460",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-seashell-glow-sequin-bomber-jacket/-/A-1001835918",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/champion-girls-varsity-jacket-tan/-/A-94603323",
      tags: "Bomber Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-cape-cat-38-jack-8482-yellow/-/A-90968792",
      tags: "Capes, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Capes",
      },
    },
    {
      url: "https://www.target.com/p/a-leading-role-strawberry-shortcake-child-chef-jacket-dress-up/-/A-92751004",
      tags: "Chef Coats, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Chef Coats",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-ultra-light-packable-down-jacket/-/A-90227524",
      tags: "Coats & Jackets, Duck Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Duck Jackets",
      },
    },
    {
      url: "https://www.target.com/p/clique-summit-youth-full-zip-microfleece/-/A-84593733",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/clique-trail-youth-jacket/-/A-84593797",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-solid-fashion-jacket-art-class-8482-garnish-green/-/A-92927323",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-super-mario-kart-varsity-jacket-red/-/A-91363909",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-zip-up-athletic-hoodie-top-lightweight-jacket-fishing-hiking-sun-protection-outwear/-/A-1002516121",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/clique-view-youth-jacket/-/A-84593736",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-ford-bronco-varsity-jacket-blue/-/A-91363936",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/a-leading-role-premium-child-fuzzy-bunny-zip-up-jacket/-/A-92671932",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-medium-8-olive/-/A-89743410",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/a-leading-role-premium-child-fuzzy-bear-zip-up-jacket/-/A-92671936",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-lightweight-jacket-long-sleeve-zip-up-athletic-hoodie-top-fishing-hiking-sun-protection-outerwear/-/A-1003847320",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing, Track Jackets",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-casual-coat-long-sleeve-open-front-sweatshirts-jackets-with-pockets/-/A-1002761924",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing, Track Jackets",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-x-large-12-new-school-colorblock/-/A-89743419",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing, Fleece Jackets",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-small-6-7-olive/-/A-89743409",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-xx-large-14-new-school-colorblock/-/A-89743426",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing, Fleece Jackets",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/members-only-girl-s-iconic-racer-jacket/-/A-92430995",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing, Track Jackets",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-x-small-4-5-purple-color-pop/-/A-89743414",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-xx-large-14-purple-color-pop/-/A-89743418",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/mykis-usa-baby-girl-all-over-floral-pattern-knitted-cardigan-in-autumn-outfits/-/A-1003695347",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/teletubbies-premium-child-dipsy-pullover-hoodie/-/A-93001267",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/a-leading-role-teletubbies-premium-child-tinky-winky-pullover-hoodie/-/A-93001194",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/a-leading-role-teletubbies-premium-laa-laa-pullover-child-hoodie/-/A-92660917",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/strawberry-shortcake-premium-child-berry-cuddly-zip-up-jacket/-/A-92998906",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/strawberry-shortcake-berry-denim-jacket/-/A-92989332",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing, Jean Jackets",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-pink-quilted-heart-hooded-jacket/-/A-1005055401",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-reversible-water-resistant-high-pile-insulated-jacket/-/A-1005092465",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-dressy-ponte-collared-jacket-kids/-/A-92969868",
      tags: "Coats & Jackets, Fashion Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-cosplay-faux-sherling-jacket-little-kid-to-big-kid/-/A-93306809",
      tags: "Coats & Jackets, Faux Fur Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Faux Fur Jackets",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-varsity-faux-fur-faux-sherling-jacket-little-kid-to-big-kid/-/A-93306843",
      tags: "Coats & Jackets, Faux Fur Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Faux Fur Jackets",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-cosplay-faux-sherling-jacket-toddler/-/A-93306805",
      tags: "Coats & Jackets, Faux Fur Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Faux Fur Jackets",
      },
    },
    {
      url: "https://www.target.com/p/members-only-girl-midweight-with-fur-lining-jacket/-/A-85607881",
      tags: "Coats & Jackets, Faux Fur Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Faux Fur Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-high-pile-lined-zip-hoodie/-/A-87568978",
      tags: "Coats & Jackets, Fleece Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-mid-weight-fleece-jacket/-/A-86740028",
      tags: "Coats & Jackets, Fleece Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-lightweight-fleece-quarter-zip-pullover/-/A-86739342",
      tags: "Coats & Jackets, Fleece Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-fleece-full-zip-jacket-with-hood/-/A-87719299",
      tags: "Coats & Jackets, Fleece Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/kids-everest-flannel-long-sleeve-hooded-jacket-olive-scout/-/A-1001300333",
      tags: "Coats & Jackets, Fleece Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-fleece-quarter-zip/-/A-87678711",
      tags: "Coats & Jackets, Fleece Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/mightly-kids-organic-cotton-print-lightweight-zip-up-pocket-hoodie-x-small-4-5-navy-tie-dye/-/A-90242842",
      tags: "Coats & Jackets, Fleece Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-large-10-navy/-/A-93360168",
      tags: "Coats & Jackets, Fleece Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-fleece-full-zip-jacket/-/A-89696456",
      tags: "Coats & Jackets, Fleece Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-jean-jacket-cat-jack/-/A-53980890",
      tags: "Coats & Jackets, Girls’ Clothing, Jean Jackets, Kids’ Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-jean-jacket-cat-38-jack-8482-washed-black/-/A-90894652",
      tags: "Coats & Jackets, Girls’ Clothing, Jean Jackets, Kids’ Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-denim-jacket-cat-38-jack-8482-white/-/A-92956783",
      tags: "Coats & Jackets, Girls’ Clothing, Jean Jackets, Kids’ Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-denim-jacket-cat-38-jack-8482-light-wash/-/A-92929062",
      tags: "Coats & Jackets, Girls’ Clothing, Jean Jackets, Kids’ Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-denim-jacket-art-class-light-wash/-/A-92955215",
      tags: "Coats & Jackets, Girls’ Clothing, Jean Jackets, Kids’ Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-pink-denim-jacket-little-kid-to-big-kid/-/A-1002770426",
      tags: "Coats & Jackets, Girls’ Clothing, Jean Jackets, Kids’ Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/bluey-girls-denim-jacket-little-kid-to-big-kid/-/A-1002770425",
      tags: "Coats & Jackets, Girls’ Clothing, Jean Jackets, Kids’ Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-denim-jacket-little-kid-to-big/-/A-92251690",
      tags: "Coats & Jackets, Girls’ Clothing, Jean Jackets, Kids’ Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-denim-jacket/-/A-1002714863",
      tags: "Coats & Jackets, Girls’ Clothing, Jean Jackets, Kids’ Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/kids-reed-checkered-denim-jacket-olive-scout/-/A-1001163615",
      tags: "Coats & Jackets, Girls’ Clothing, Jean Jackets, Kids’ Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-frayed-denim-jacket-with-embroidery-jeans/-/A-1002905463",
      tags: "Coats & Jackets, Girls’ Clothing, Jean Jackets, Kids’ Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-denim-jacket-with-embroidery-floral-jeans/-/A-1002907917",
      tags: "Coats & Jackets, Girls’ Clothing, Jean Jackets, Kids’ Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-jean-jacket-with-embroidery-pink-and-multicolored-gummies/-/A-1002905641",
      tags: "Coats & Jackets, Girls’ Clothing, Jean Jackets, Kids’ Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-solid-moto-jacket-art-class-8482-black/-/A-90968590",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Moto Jackets",
      filters: {
        type: "Moto Jackets",
      },
    },
    {
      url: "https://www.target.com/p/yoki-little-big-girls-moto-style-pu-faux-leather-jackets/-/A-1002894725",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Moto Jackets",
      filters: {
        type: "Moto Jackets",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-faux-leather-jacket/-/A-1004937395",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Moto Jackets",
      filters: {
        type: "Moto Jackets",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-pink-faux-leather-jacket-little-kid-to-big-kid/-/A-1004937388",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Moto Jackets",
      filters: {
        type: "Moto Jackets",
      },
    },
    {
      url: "https://www.target.com/p/yoki-big-girls-floral-embroidered-design-pu-faux-leather-jackets/-/A-1003526710",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Moto Jackets",
      filters: {
        type: "Moto Jackets",
      },
    },
    {
      url: "https://www.target.com/p/yoki-little-girls-floral-embroidered-design-pu-faux-leather-jackets/-/A-1003666255",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Moto Jackets",
      filters: {
        type: "Moto Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rothschild-big-girls-faux-wool-bandmaster-military-dress-coats/-/A-1000395571",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Overcoats",
      filters: {
        type: "Overcoats",
      },
    },
    {
      url: "https://www.target.com/p/rothschild-little-girls-faux-wool-bow-detail-dress-coats/-/A-1000402772",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Overcoats",
      filters: {
        type: "Overcoats",
      },
    },
    {
      url: "https://www.target.com/p/rothschild-big-girls-faux-wool-sparkle-bow-dress-coats/-/A-1000402770",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Overcoats",
      filters: {
        type: "Overcoats",
      },
    },
    {
      url: "https://www.target.com/p/rothschild-little-girls-faux-wool-bandmaster-military-dress-coat-with-hat/-/A-1000395575",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Overcoats",
      filters: {
        type: "Overcoats",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-solid-color-or-plaid-pattern-cartoon-bear-decoration-quilted-warm-coat/-/A-1004588478",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Overcoats",
      filters: {
        type: "Overcoats",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-squall-waterproof-insulated-winter-parka/-/A-89935651",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas",
      filters: {
        type: "Parkas",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-expedition-waterproof-winter-down-parka/-/A-87569357",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas",
      filters: {
        type: "Parkas",
      },
    },
    {
      url: "https://www.target.com/p/london-fog-little-big-girls-heavyweight-faux-fur-trim-fleece-lined-jackets/-/A-1002187164",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas",
      filters: {
        type: "Parkas",
      },
    },
    {
      url: "https://www.target.com/p/catalonia-kids-waterproof-windproof-swim-parka-jacket-fleece-lined-warm-hooded-coat-for-boys-girls-lightweight-swim-robe/-/A-1002543961",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas",
      filters: {
        type: "Parkas",
      },
    },
    {
      url: "https://www.target.com/p/canada-weather-gear-girls-winter-coat-quilted-heavyweight-puffer-parka-coat-warm-winter-jacket-for-girls-7-16/-/A-1002048243",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas, Puffer Jackets, Quilted Jackets",
      filters: {
        type: "Parkas",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-husky-squall-waterproof-insulated-winter-parka/-/A-1005092978",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas",
      filters: {
        type: "Parkas",
      },
    },
    {
      url: "https://www.target.com/p/catalonia-swim-parka-for-kids-teens-lightweight-waterproof-windproof-swim-jacket-fleece-lined-warm-changing-coat-for-swim-lessons-beach/-/A-1002543960",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas",
      filters: {
        type: "Parkas",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-parka-puffer-coat/-/A-1001268305",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas, Puffer Jackets",
      filters: {
        type: "Parkas",
      },
    },
    {
      url: "https://www.target.com/p/sporti-kid-s-safari-splash-swim-parka/-/A-1001344260",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas",
      filters: {
        type: "Parkas",
      },
    },
    {
      url: "https://www.target.com/p/sporti-kids-underwater-jubilee-swim-parka/-/A-1001529453",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas",
      filters: {
        type: "Parkas",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-squall-waterproof-insulated-3-in-1-parka/-/A-87678076",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas, Softshell Jackets",
      filters: {
        type: "Parkas",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-fleece-lined-coat/-/A-93568798",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Parkas, Puffer Jackets",
      filters: {
        type: "Parkas",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-heavy-winter-puffer-jacket-bubble-coat/-/A-90227533",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-thermoplume-packable-hooded-jacket/-/A-87569396",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-long-coat-puffer-jacket/-/A-92822158",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-reversible-light-puffer-jacket-coat/-/A-90227403",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-baby-girls-mini-fur-lined-puffer-coat-kids-jacket/-/A-92699303",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-quilted-coat-puffer-jacket/-/A-1005022039",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets, Quilted Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-knee-length-coat-long-puffer-jacket/-/A-1004783821",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-little-girls-light-puffer-jacket-winter-coat/-/A-90190394",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-faux-shearling-lined-heavy-coat-puffer-jacket/-/A-90227464",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-heavyweight-color-block-winter-coats/-/A-94041124",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-princess-anna-elsa-girls-zip-up-puffer-jacket-little-kid/-/A-87604440",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-insulated-down-alternative-thermoplume-jacket/-/A-87672713",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-lilo-stitch-girls-zip-up-puffer-jacket-little-kid-to-big-kid/-/A-93031168",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/london-fog-big-girls-heavyweight-fleece-lined-puffer-jacket-with-beanie-hat/-/A-94045784",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/jessica-simpson-big-girl-s-iridescent-quilted-midweight-winter-puffer-coats/-/A-93568940",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-husky-insulated-hooded-jacket/-/A-1004914488",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/london-fog-girls-heavyweight-warm-winter-coat-with-beanie-hat/-/A-90251847",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-husky-insulated-jacket/-/A-1004939163",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/london-fog-little-big-girls-heavyweight-fleece-lined-puffer-jacket-with-headband/-/A-94072062",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/london-fog-girls-heavyweight-warm-winter-coat-with-faux-fur-trim/-/A-90251397",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-big-girls-perfect-heavyweight-color-block-winter-coat/-/A-94041117",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-girls-zip-up-puffer-jacket-little-kid-to-big-kid/-/A-87616544",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-thermoplume-jacket/-/A-87790790",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-insulated-down-alternative-thermoplume-jacket/-/A-93256929",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/london-fog-little-big-girls-heavyweight-faux-fur-lined-hooded-winter-jackets/-/A-94092319",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-lightweight-puffer-jacket/-/A-1001613299",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-miss-snow-figure-8-prezzie-girls-zip-up-puffer-jacket-little-kid-to-big-kid/-/A-87545035",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-big-kids-reversible-jacket/-/A-87717880",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets, Softshell Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/canada-weather-gear-girls-puffer-jacket-lightweight-packable-bubble-coat-water-resistant-outerwear-jackets-for-girls-7-16/-/A-1001919223",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/members-only-girl-cire-puffer-with-mash-print-lining-jacket/-/A-85607899",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/bluey-bingo-girls-zip-up-winter-coat-puffer-jacket-toddler-to-little-kid/-/A-89629378",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-girls-zip-up-puffer-jacket-toddler/-/A-87616550",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-girls-starlight-winter-coat-mini-fur-lined-kids-jacket/-/A-1004791523",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girl-kid-s-floral-puffer-jacket-mayoral/-/A-1003863155",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-pink-heart-printed-reversible-puffer-jacket/-/A-1005055360",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-pink-aqua-smiley-printed-reversible-puffer-jacket/-/A-1005055357",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Puffer Jackets",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-adaptive-quilted-jacket-cat-jack/-/A-88077274",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Quilted Jackets",
      filters: {
        type: "Quilted Jackets",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-solid-blouson-jacket-art-class-8482/-/A-92954460",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Quilted Jackets",
      filters: {
        type: "Quilted Jackets",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-quilted-mid-season-jacket-multicolored-butterflies-on-black-background/-/A-1002931159",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Quilted Jackets",
      filters: {
        type: "Quilted Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-waterproof-rain-jacket/-/A-87670708",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-waterproof-rain-coats-rubberized-jackets/-/A-90511810",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/kids-rain-coat-cat-jack/-/A-94427240",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/unicorn-girls-umbrella-rain-jacket-set-kids-ages-3t-9-years/-/A-90449345",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/frozen-elsa-and-anna-girl-s-umbrella-and-raincoat-set-kids-ages-4-7-blue-purple/-/A-90411055",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-woven-jacket-all-in-motion-8482/-/A-94579755",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-rain-jacket/-/A-92925626",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/minnie-mouse-girl-s-umbrella-and-raincoat-set-kids-ages-2-5-pink/-/A-90411077",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-zip-up-jacket-little-kid-to-big-kid/-/A-94071489",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/minnie-mouse-girl-s-umbrella-and-raincoat-set-kids-ages-2-5-red/-/A-90411094",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/barbie-zip-up-waterproof-hooded-rain-jacket-coat/-/A-1003005808",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-zip-up-waterproof-hooded-rain-jacket-coat-sizes-2t-7-8/-/A-1000558454",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/jojo-siwa-kids-umbrella-and-raincoat-set-rain-wear-for-girls-ages-4-7/-/A-89892500",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/disney-junior-zip-up-waterproof-hooded-rain-jacket-coat/-/A-1003487813",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-water-resistant-hooded-slicker-rain-jacket/-/A-1001887369",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/rainbows-stars-girls-umbrella-rain-jacket-set-little-girls-ages-3t-9-years/-/A-90449554",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/trolls-girls-raincoat-and-umbrella-and-raincoat-set-kids-ages-4-7/-/A-89919268",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/dinosaur-boys-umbrella-rain-jacket-set-kids-ages-3t-9-years/-/A-90449636",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-girl-s-raincoat-and-umbrella-set-kids-ages-2-7-light-pink/-/A-90411318",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-girl-s-raincoat-and-umbrella-set-kids-ages-2-7-dark-pink/-/A-90411317",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/addie-tate-girls-and-boys-rain-coats-and-umbrella-set-kids-ages-3t-7-years-shark/-/A-90449759",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-raincoat/-/A-1001968521",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/peppa-pig-little-girl-s-rain-jacket-windbreaker-shell-raincoat-slicker-2t-5/-/A-90214587",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girl-s-lightweight-rainslicker-coat/-/A-93364222",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-diva-neon-q-t-m-c-swag-girls-button-down-waterproof-rain-jacket-little-kid-to-big-kid/-/A-88578943",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/addie-tate-girls-and-boys-rain-coats-and-umbrella-set-kids-ages-3t-7-years-panda-bear/-/A-90449689",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/addie-tate-girls-and-boys-rain-coats-and-umbrella-set-kids-ages-3t-7-years-monster/-/A-90449877",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-waterproof-hooded-rain-jacket-little-kid/-/A-88578464",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/kids-boys-girls-lightweight-packable-rain-jacket-waterproof-hooded-raincoats-windproof-for-spring-fall-winter/-/A-91693184",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats, Track Jackets",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/addie-tate-girls-and-boys-rain-coats-and-umbrella-set-kids-ages-3t-7-years-space-celestial/-/A-90196865",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/dino-girls-umbrella-rain-jacket-set-kids-ages-3t-7-years/-/A-90449481",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/c-c-girl-s-shiny-rain-bucket-hat/-/A-93995962",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats, Track Jackets",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/kids-lightweight-packable-rain-jacket-waterproof-hooded-raincoats-windproof-for-boys-and-girls/-/A-1002746392",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-coconut-q-t-dawn-surfer-babe-waterproof-rain-jacket/-/A-87449935",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/carter-s-girls-her-favorite-rainslicker-rain-jacket-raincoat/-/A-1005178042",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/girl-ladybug-raincoat-kidorable/-/A-1003070641",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/girl-lucky-cat-raincoat-kidorable/-/A-1002669036",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/stephen-joseph-gifts-kids-raincoats/-/A-1004984533",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/stephen-joseph-girls-and-boys-raincoats/-/A-1004984504",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Rain Coats",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-husky-winter-jacket/-/A-87721268",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Softshell Jackets",
      filters: {
        type: "Softshell Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-squall-fleece-lined-waterproof-insulated-jacket/-/A-89887420",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Softshell Jackets",
      filters: {
        type: "Softshell Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-light-windbreaker-rain-jacket/-/A-90511788",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Track Jackets, Windbreakers",
      filters: {
        type: "Track Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-light-rain-jacket-trench-coat/-/A-90511813",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Trench Coats",
      filters: {
        type: "Trench Coats",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-solid-trench-coat-art-class-8482-macadamia-tan/-/A-92927325",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Trench Coats",
      filters: {
        type: "Trench Coats",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-little-girls-ruffled-hooded-trench-jacket/-/A-1003273401",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Trench Coats",
      filters: {
        type: "Trench Coats",
      },
    },
    {
      url: "https://www.target.com/p/london-fog-big-girls-lightweight-hooded-trench-dress-jackets/-/A-1002927787",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Trench Coats",
      filters: {
        type: "Trench Coats",
      },
    },
    {
      url: "https://www.target.com/p/london-fog-girls-lightweight-hooded-trench-dress-jacket/-/A-89861285",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Trench Coats",
      filters: {
        type: "Trench Coats",
      },
    },
    {
      url: "https://www.target.com/p/yoki-big-girls-lightweight-hidden-zipper-hood-trench-jackets/-/A-1003651656",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Trench Coats",
      filters: {
        type: "Trench Coats",
      },
    },
    {
      url: "https://www.target.com/p/london-fog-toddler-little-girls-snap-front-hooded-skirt-trench-jackets/-/A-1002265916",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Trench Coats",
      filters: {
        type: "Trench Coats",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-trucker-jeans-jacket-dark-wash/-/A-86734157",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Trucker Jackets",
      filters: {
        type: "Trucker Jackets",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-trucker-jeans-jacket-light-wash/-/A-86734150",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Trucker Jackets",
      filters: {
        type: "Trucker Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-ripstop-windbkreaker-deluxe-jacket/-/A-1003220607",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Windbreakers",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/kids-rain-jacket-cat-jack/-/A-93904415",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Windbreakers",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-popover-packable-windbreaker-jacket/-/A-93364213",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Windbreakers",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-packable-windbreaker/-/A-1001971181",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Windbreakers",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/kids-ramsey-rain-jacket-olive-scout/-/A-1002255256",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Windbreakers",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-colorblock-mid-season-jacket/-/A-1002906155",
      tags: "Coats & Jackets, Girls’ Clothing, Kids’ Clothing, Windbreakers",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/toddler-ruby-bow-sandals-cat-jack/-/A-92310245",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/toddler-everleigh-sandals-cat-jack/-/A-92605912",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-kinsley-raffia-nautical-sandals-cat-jack-beige/-/A-93654855",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/toddler-ella-sandals-cat-jack-white/-/A-94336435",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/toddler-beck-footbed-sandals-cat-jack/-/A-92680245",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes, Footbed Sandals, Toddler Boys’ Shoes, Toddler Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/toddler-selene-pearl-sandals-cat-jack/-/A-92318004",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/toddler-lillie-gingham-sandals-cat-jack-red/-/A-93652241",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/kids-eve-pearl-sandals-cat-jack/-/A-92317624",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/kids-aria-bow-sandals-cat-jack/-/A-92317635",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/toddler-lucy-strawberry-sandals-cat-jack-red/-/A-93654863",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/kids-arden-camp-sandals-cat-jack/-/A-93632473",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/kids-ellis-nautical-sandals-art-class-ivory/-/A-93655162",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girl-s-shoes-infant-flats-with-glitter-and-rhinestone-flats-for-infants/-/A-1002206105",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-girls-lovely-k-sandal/-/A-1001633189",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-youth-girl-s-goya-k-sandal/-/A-1004517282",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-girls-journey-k-sandal/-/A-1001632967",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-girls-sunflower-k-sandal/-/A-1001633743",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-kid-s-billa-k-sandal/-/A-93468352",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-girls-laughter-k-sandal/-/A-1001633068",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-girls-gaia-k-sandal/-/A-1001632456",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-kid-s-loverli-k-strappy-wedge-sandal/-/A-93469039",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girls-sandals-kids-open-toe-summer-shoes-perfect-flat-sandals-for-girls-little-girl-big-girl/-/A-1002504859",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girls-sandals-kids-open-toe-summer-shoes-perfect-flat-sandals-for-girls-with-rhinestone-little-girl-big-girl/-/A-1002504914",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-kid-s-liddie-k-strappy-wedge-sandal/-/A-93469020",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-kid-s-blumoon-k-sandal/-/A-93468446",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girls-sandals-kids-open-toe-summer-shoes-with-mesh-upper-perfect-flat-sandals-for-girls-little-girl-big-girl/-/A-1002504847",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-toddler-girls-sunflower-t-sandal/-/A-1001633791",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-toddler-girls-gaia-t-sandal/-/A-1001632485",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-toddler-girls-miffy-t-sandal/-/A-1001633392",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girls-sandals-cute-and-sparkly-toddler-girls-summer-shoes-perfect-beach-sandals-for-toddlers/-/A-1002504872",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girls-sandals-cute-toddler-girls-summer-shoes-perfect-beach-sandals-for-toddlers/-/A-1002504807",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girls-sandals-cute-and-comfy-toddler-girls-summer-shoes-perfect-beach-sandals-for-toddlers-with-charms-and-flowers/-/A-1002504714",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girls-sandals-cute-and-comfy-toddler-girls-summer-shoes-perfect-beach-sandals-for-toddlers/-/A-1002504834",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-kid-s-balla-d-k-sandal/-/A-1004517274",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/dr-scholl-s-youth-girls-island-original-kids-sandals/-/A-1001661179",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girl-s-flat-sandals-with-rhinestone-bow-detail-and-fruit-glitter-detail-sandals-for-little-kid-big-kid/-/A-1000551245",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/dr-scholl-s-youth-girls-island-glow-kids-sandals-brown-13-m/-/A-1001661130",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/dr-scholl-s-youth-girls-island-glow-kids-strappy-sandals-white-smooth-13-m/-/A-1004060503",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girls-sandals-comfy-open-toe-dress-sandals-fancy-and-sparkly-sandals-for-little-girls-and-big-girls/-/A-1002224737",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/foamwalk-toddler-girl-s-eva-sandals-with-charm-detail-comfy-sandals-for-toddler/-/A-92074129",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girls-sandals-open-toe-flat-sandals-for-girls-stylish-and-comfy-sandals-toddler-little-girl-big-girl/-/A-1002257473",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girl-s-sandals-cute-and-charming-sandals-open-toe-summer-sandals-for-toddlers/-/A-1002206103",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/dr-scholl-s-infant-girls-islander-toddler-sandals/-/A-1001660938",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/olivia-miller-girl-s-issabella-slide-sandals/-/A-1002187049",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/olivia-miller-girl-s-ivanna-ankle-strap-sandals/-/A-1002187041",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/olivia-miller-girl-s-galinda-ankle-strap-sandals/-/A-1002187089",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/bebe-toddler-girls-sandals-open-toe-flat-sandals-comfy-summer-flats-for-toddler-and-little-kids/-/A-1002276193",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/olivia-miller-girl-s-kacie-ankle-strap-sandals/-/A-1002187096",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/little-love-bug-ella-sandal/-/A-1001925522",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/little-love-bug-closed-toe-sandal/-/A-1001953325",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/little-love-bug-t-bar-dress-shoe/-/A-1001929157",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes, T-Strap Sandals",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/joybees-toddler-harper-slip-on-clog/-/A-89699007",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/see-kai-run-basics-toddler-jaylen-sandals/-/A-83922112",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes, Footbed Sandals, Toddler Boys’ Shoes, Toddler Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/little-love-bug-olivia-dress-shoe/-/A-1003152282",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/beverly-hills-polo-club-toddler-sport-sandals-outdoor-hook-and-loop-closure/-/A-87261336",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-toddlers-easy-on-scalloped-sandals/-/A-1003120186",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/joybees-kids-dylan-slip-on-clogs/-/A-92603466",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/joybees-kids-vista-slides/-/A-92318470",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/little-love-bug-sebby-sandal/-/A-1002898495",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/little-love-bug-charley-sandal/-/A-1003057659",
      tags: "Ankle Strap Sandals, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      filters: {
        type: "Ankle Strap Sandals",
      },
    },
    {
      url: "https://www.target.com/p/kids-diana-slip-on-ballet-flats-cat-jack/-/A-92604667",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/toddler-elle-ballet-flats-cat-jack-blush/-/A-92704695",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kids-marla-charm-ballet-flats-cat-jack-ivory/-/A-94270645",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/toddler-lisa-ballet-flats-cat-38-jack-8482-blush/-/A-92758713",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-juni-bow-ballet-flats-cat-jack-black/-/A-94264190",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kids-brooke-ballet-flats-cat-jack/-/A-94267011",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/toddler-addy-ballet-flats-cat-38-jack-8482-tan/-/A-94293452",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kids-nora-slip-on-ballet-flats-cat-jack/-/A-92604898",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/toddler-addy-ballet-flats-cat-38-jack-8482-vibrant-silver/-/A-94253692",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/toddler-bridget-bow-mary-jane-flats-cat-jack-black/-/A-94268906",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/toddler-rue-ballet-flats-cat-jack/-/A-92604904",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/toddler-heather-stud-ballet-flats-cat-jack-blush/-/A-94268905",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kids-bronwyn-ballet-flats-art-class-brown/-/A-94268903",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kids-nell-rhinestone-mary-jane-flats-art-class-off-white/-/A-92658706",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kids-stud-ballet-flats-art-class-black/-/A-94268908",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kids-quilla-mesh-ballet-flats-art-class/-/A-94336720",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kids-kaira-buckle-ballet-flats-art-class-red/-/A-94268902",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kids-faye-mesh-ballet-flats-art-class-beige/-/A-92958911",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kids-fleur-mesh-slip-on-ballet-flats-art-class-blush/-/A-92605546",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kids-toree-rhinestone-ballet-flats-art-class/-/A-94336719",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girls-sandals-sparkly-shoes-for-kids-ballet-flats-for-girls-little-kid-big-kid/-/A-1002518850",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/blowfish-malibu-kid-s-pixi-k-slip-on-flat/-/A-93469393",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/toddler-disney-minnie-mouse-ballet-flats-pink/-/A-92605589",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/bebe-girls-sandals-cute-sparkly-shoes-for-kids-ballet-flats-for-girls-little-kid-big-kid/-/A-1002504943",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/dr-scholl-s-youth-girls-wexley-kids-ballet-flat/-/A-92657343",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kensie-girl-little-kids-girls-ballerinas-flats/-/A-86418122",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kensie-girl-toddler-ballerina-flats/-/A-88218879",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/kensie-girl-toddler-ballerina-dress-shoes-with-straps-for-better-fit-mary-jane-ballet-flats/-/A-88218902",
      tags: "Ballet Flats, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Flats",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-ballet-shoes-by-danz-n-motion-112-full-sole-leather/-/A-1003057620",
      tags: "Ballet Slippers, Girls’ Shoes, Kids’ Shoes, Shoes, Dance Shoes",
      filters: {
        type: "Ballet Slippers",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-ballet-shoes-danz-n-motion-397-leather-stretch-cross-straps-split-sole/-/A-1003521235",
      tags: "Ballet Slippers, Girls’ Shoes, Kids’ Shoes, Shoes, Dance Shoes",
      filters: {
        type: "Ballet Slippers",
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
