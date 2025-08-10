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
      "url": "https://www.target.com/p/girls-black-ballet-shoes-sodanca-child-sizes-stretch-canvas-pull-on-cross-straps-split-sole/-/A-1003196951",
      "tags": "Ballet Slippers, Girls’ Shoes, Kids’ Shoes, Shoes, Dance Shoes",
      "filters": {
        "type": "Ballet Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/girls-pink-ballet-shoes-sodanca-stretch-canvas-pull-on-cross-straps-split-sole/-/A-1002878579",
      "tags": "Ballet Slippers, Girls’ Shoes, Kids’ Shoes, Shoes, Dance Shoes",
      "filters": {
        "type": "Ballet Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/girl-s-nude-ballet-shoes-sodanca-stretch-canvas-pull-on-cross-straps-split-sole/-/A-1003197157",
      "tags": "Ballet Slippers, Girls’ Shoes, Kids’ Shoes, Shoes, Dance Shoes",
      "filters": {
        "type": "Ballet Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/girls-ballet-shoes-danz-n-motion-111-toddler-leather-full-sole/-/A-1003057579",
      "tags": "Ballet Slippers, Girls’ Shoes, Kids’ Shoes, Shoes, Dance Shoes",
      "filters": {
        "type": "Ballet Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/dance-class-olivia-leather-one-piece-sole-ballet/-/A-92100373",
      "tags": "Ballet Slippers, Girls’ Shoes, Kids’ Shoes, Shoes, Dance Shoes",
      "filters": {
        "type": "Ballet Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-bluey-cloud-slippers-blue/-/A-88830247",
      "tags": "Ballet Slippers, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Ballet Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-bobby-slip-on-sneakers-cat-38-jack-8482/-/A-94369623",
      "tags": "Boat Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Boat Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-canvas-easy-on-boat-shoes/-/A-1003189390",
      "tags": "Boat Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Boat Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/lands-end-toddlers-canvas-easy-on-boat-shoes/-/A-1003119769",
      "tags": "Boat Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Boat Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/plae-migi-tourmaline-quartz/-/A-94145118",
      "tags": "Boat Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Boat Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/plae-migi-black-3d-prism/-/A-94145136",
      "tags": "Boat Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Boat Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/bioworld-youth-plush-slippers/-/A-94114855",
      "tags": "Bootie Slippers, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Bootie Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/cloud-nine-sheepskin-kid-s-sheepskin-booties/-/A-93194489",
      "tags": "Bootie Slippers, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Bootie Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/rudolph-the-red-nosed-reindeer-3d-character-head-youth-brown-plush-slippers/-/A-90125244",
      "tags": "Bootie Slippers, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Bootie Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-asher-toddler-suede-slippers/-/A-92638995",
      "tags": "Bootie Slippers, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Bootie Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/mykids-usa-infant-baby-solid-color-plush-warm-shoes-in-winter/-/A-1004492974",
      "tags": "Bootie Slippers, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Bootie Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-flora-chelsea-boots-cat-38-jack-8482-silver/-/A-94369624",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-whitley-embroidered-western-boots-cat-jack-blush/-/A-94308613",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girls-rena-ki-lace-up-bootie-cloud-1-m/-/A-1000116970",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-infant-girls-rena-ti-lace-up-bootie/-/A-1000116975",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/olivia-miller-girl-s-cozy-darling-boot/-/A-1000409170",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/dr-scholl-s-infant-girl-s-headstart-toddler-fashion-boot/-/A-1004059623",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-kids-retro-shorty-youth-boots/-/A-89591533",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/lucinda-girls-tan-bootie-w-cream-faux-fur-trim/-/A-1001153882",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-kids-shorty-youth-boots/-/A-89666847",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-kids-snuggle-daphne-deco-youth-boots/-/A-93458840",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-kids-super-shorty-deco-youth-boots/-/A-93458269",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-infant-girl-s-starling-toddler-fashion-boot/-/A-1004056704",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/girl-mia-little-pratt-boots-mia/-/A-1003070186",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/girl-giuletta-glitter-sole-boot-mia/-/A-1003070220",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/dr-scholl-s-infant-girl-s-madison-play-chillin-toddler-fashion-boot/-/A-1004059748",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/girl-faux-fur-detail-booties-mayoral/-/A-1003070213",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-company-mila-boot/-/A-1005162307",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/kids-my-first-mucks-baby-bootie/-/A-1002977255",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/kids-infant-minnow-ankle-deck-boot/-/A-1002608787",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/miller-infant-red-soft-sole-cowboy-boots/-/A-1001741875",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-chore-classic-boot/-/A-1003163841",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/kids-georgia-boot-little-kids-romeo-superlyte-shoe/-/A-1003170036",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/kids-big-kids-outscape-pull-on-boot/-/A-1003169966",
      "tags": "Booties, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Booties"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-tanner-chelsea-ankle-boots-cat-jack/-/A-94308671",
      "tags": "Chelsea Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Chelsea Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-brandy-chelsea-ankle-boots-cat-jack/-/A-94308752",
      "tags": "Chelsea Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Chelsea Boots"
      }
    },
    {
      "url": "https://www.target.com/p/disney-frozen-girls-anna-and-elsa-western-cowgirl-boots-toddler-little-kids/-/A-92793136",
      "tags": "Chelsea Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Chelsea Boots"
      }
    },
    {
      "url": "https://www.target.com/p/eastside-girls-black-faux-suede-ankle-boot-w-sweater-top/-/A-1001360515",
      "tags": "Chelsea Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Chelsea Boots"
      }
    },
    {
      "url": "https://www.target.com/p/olivia-miller-girl-s-anne-ankle-boots/-/A-1002198482",
      "tags": "Chelsea Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Chelsea Boots"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-aidan-sneaker-boots-cat-jack/-/A-94308656",
      "tags": "Chukka Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Chukka Boots"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-timberland-classic-6-inch-waterproof-boot/-/A-92980528",
      "tags": "Chukka Boots, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Chukka Boots"
      }
    },
    {
      "url": "https://www.target.com/p/timberland-toddler-timber-tykes-mid-hook-loop-boot/-/A-92993398",
      "tags": "Chukka Boots, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Chukka Boots"
      }
    },
    {
      "url": "https://www.target.com/p/youth-timberland-classic-6-inch-waterproof-boot/-/A-82028895",
      "tags": "Chukka Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Chukka Boots"
      }
    },
    {
      "url": "https://www.target.com/p/timberland-toddler-pokey-pine-6-inch-side-zip-boots/-/A-87801075",
      "tags": "Chukka Boots, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Chukka Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-boga-kids-casual-slip-on/-/A-1002609094",
      "tags": "Clog Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clog Boots"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-baya-clog/-/A-93567219",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/kids-baya-clog/-/A-93567176",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-berlin-clogs-cat-jack/-/A-94266988",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-tate-clogs-cat-38-jack-8482/-/A-94293377",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-tate-clogs-cat-38-jack-8482-brown/-/A-94293389",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/bebe-girls-sandals-comfy-clogs-cute-summer-shoes-and-beach-sandals-for-girls-little-girl-big-girl/-/A-1002657540",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-encanto-bruno-disney-classic-clogs/-/A-1003120434",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-sonic-the-hedgehog-classic-clogs/-/A-1001674015",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/bebe-girls-sandals-comfy-clogs-cute-summer-shoes-and-beach-sandals-for-toddler-girls/-/A-1002504880",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/bluey-bingo-kids-eva-clog-molded-open-toe-eva-clog-for-boys-girls-featuring-bandit-chilli-bingo-shoes/-/A-1004520716",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/marvel-spiderman-kids-eva-clog-molded-open-toe-eva-clog-shoes-for-boys-girls-featuring-spiderman-captain-america-and-ironman/-/A-1004520696",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/foamwalk-toddler-unisex-novelty-house-clogs-with-faux-fur-lining-penguin-slippers-for-toddler-boys-girls/-/A-93760900",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/barbie-toddler-girls-faux-fur-lined-clogs-with-adjustable-strap/-/A-1005061497",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/jeffrico-breathable-clogs-for-kids-girls-garden-shoes-swim-beach-comfort-clog/-/A-1005175219",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-baya-glitter-clogs/-/A-1000524332",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-disney-mickey-and-friends-baya-clogs/-/A-1000403053",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-disney-frozen-baya-clogs/-/A-1000403044",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-realtree-edge-baya-camo-clogs/-/A-1000556332",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-encanto-mirabel-disney-classic-clogs/-/A-1003120425",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-classic-american-flag-clogs/-/A-1003821731",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-pok-mon-gengar-classic-clogs/-/A-1002656981",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-i-am-minnie-mouse-classic-clogs/-/A-92453485",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-harry-potter-baya-clogs/-/A-1000556376",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-disney-toy-story-woody-classic-clogs/-/A-93695540",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-pokemon-classic-clogs/-/A-1003057302",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-disney-toy-story-buzz-classic-clogs/-/A-93695438",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/lusso-cloud-kids-scenario-slip-on-coffee/-/A-91511317",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/fireside-by-dearfoams-kids-dempsey-genuine-shearling-clog-slipper/-/A-87713018",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-bluey-classic-clogs/-/A-1001292439",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-disney-mickey-mouse-friends-classic-clogs/-/A-1001574156",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-disney-minnie-mouse-friends-classic-clogs/-/A-1001574146",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/lusso-cloud-kids-scenario-slip-on-indigo/-/A-91511299",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/lusso-cloud-kids-scenario-slip-on-bone-white/-/A-91511422",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/lusso-cloud-kids-scenario-slip-on-volley-yellow/-/A-91511416",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/lusso-cloud-kids-scenario-slip-on-jet-black/-/A-91511384",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/lusso-cloud-kids-scenario-slip-on-dusty-rose/-/A-91511339",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-disney-moana-classic-clogs/-/A-1003541669",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-marvel-captain-america-echo-clogs/-/A-1003120467",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-disney-princesses-classic-clogs/-/A-1003057316",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-mattel-pink-barbie-classic-clogs/-/A-1005020341",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-disney-princess-snow-white-classic-clogs/-/A-1003821688",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/pokemon-pikachu-boys-clog-sandal-pikachu-charizard-squirtle-youth-molded-eva-clog-sandal-lightweight-for-all-day-comfort/-/A-1005157201",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-bayaband-clogs/-/A-94233454",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-disney-frozen-baya-clogs/-/A-1000403092",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-i-am-mickey-mouse-classic-clogs/-/A-92453493",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-disney-minnie-mouse-friends-classic-clogs/-/A-1001574174",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-bluey-classic-clogs/-/A-1001335977",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-pokemon-pikachu-classic-clogs/-/A-1002894101",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-disney-princesses-classic-clogs/-/A-1003057288",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-sonic-the-hedgehog-classic-clogs/-/A-1001674020",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-encanto-bruno-classic-clogs/-/A-1001674127",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-disney-mickey-mouse-friends-classic-clogs/-/A-1001574166",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-paw-patrol-off-court-clogs/-/A-91973124",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-batman-baya-clogs/-/A-1000403100",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-nightmare-before-christmas-classic-jack-skellington-disney-clogs/-/A-1003120440",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-swiftwater-splash-water-shoes/-/A-1003081544",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-classic-rocket-ship-clog-t/-/A-1004707832",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-classic-american-flag-clogs/-/A-1004643713",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-mattel-pink-barbie-classic-clogs/-/A-1005020324",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-baya-glitter-clogs/-/A-1000524354",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-pokemon-classic-clogs/-/A-1003057318",
      "tags": "Clogs, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Clogs"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-amaya-lace-up-combat-boots-cat-38-jack-8482-ivory/-/A-94369622",
      "tags": "Combat Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Combat Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-bronx-lace-up-combat-boots-art-class-black/-/A-94308754",
      "tags": "Combat Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Combat Boots"
      }
    },
    {
      "url": "https://www.target.com/p/rugged-bear-little-kids-lace-up-unisex-casual-boots-little-kids/-/A-86923607",
      "tags": "Combat Boots, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Combat Boots"
      }
    },
    {
      "url": "https://www.target.com/p/rugged-bear-toddler-lace-up-unisex-casual-boots/-/A-86923427",
      "tags": "Combat Boots, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Combat Boots"
      }
    },
    {
      "url": "https://www.target.com/p/beverly-hills-polo-club-unisex-girls-and-boys-fashion-classic-combat-high-top-chukka-boots-toddler-little-kids/-/A-86924164",
      "tags": "Combat Boots, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Combat Boots"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-unisex-kids-high-top-casual-combat-boots-little-kids/-/A-88218862",
      "tags": "Combat Boots, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Combat Boots"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-unisex-kids-combat-boots-lace-up-ankle-boots-for-boys-and-girls-classic-combat-style-casual-boots-for-toddlers/-/A-86923207",
      "tags": "Combat Boots, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Combat Boots"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-kids-lace-up-casual-boots-infant-toddler/-/A-94088965",
      "tags": "Combat Boots, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Combat Boots"
      }
    },
    {
      "url": "https://www.target.com/p/miller-toddler-pink-cowboy-boots-with-round-toe/-/A-1001741886",
      "tags": "Cowboy Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Cowboy Boots"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-cowboy-boot/-/A-1001919306",
      "tags": "Cowboy Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Cowboy Boots"
      }
    },
    {
      "url": "https://www.target.com/p/miller-toddler-red-cowboy-boots/-/A-1001741865",
      "tags": "Cowboy Boots, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Cowboy Boots"
      }
    },
    {
      "url": "https://www.target.com/p/mykids-usa-baby-cartoon-soft-antiskid-hook-and-loop-baby-toddler-shoes-low/-/A-1003356830",
      "tags": "Crib Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Crib Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/girl-s-tap-shoes-by-danz-n-motion-mary-jane-easy-strap-no-buckle/-/A-1003047871",
      "tags": "Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Tap Dance Shoes",
      "filters": {
        "type": "Dance Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/girl-s-tap-shoes-danz-n-motion-652-tyette-in-tan-ribbon-elastic/-/A-1003089607",
      "tags": "Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Tap Dance Shoes",
      "filters": {
        "type": "Dance Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/girl-s-tap-shoes-danz-n-motion-tyette-patent-leather-ribbon-elastic-tan/-/A-1003089549",
      "tags": "Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Tap Dance Shoes",
      "filters": {
        "type": "Dance Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/girl-s-canvas-jazz-shoes-by-so-danca-jz75s-jada-jazz-child/-/A-1004035080",
      "tags": "Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Jazz Dance Shoes",
      "filters": {
        "type": "Dance Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/capezio-e-series-jazz-slip-on-child/-/A-84068528",
      "tags": "Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Jazz Dance Shoes",
      "filters": {
        "type": "Dance Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/dance-class-patent-flexible-tap-shoe-with-ribbon-tie/-/A-93130427",
      "tags": "Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Tap Dance Shoes",
      "filters": {
        "type": "Dance Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/dance-class-gloria-youth-leather-slip-on-jazz-shoe/-/A-91869102",
      "tags": "Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Jazz Dance Shoes",
      "filters": {
        "type": "Dance Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/dance-class-beginner-molly-jane-tap-shoe/-/A-91957339",
      "tags": "Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Tap Dance Shoes",
      "filters": {
        "type": "Dance Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/child-oxford-tap-shoes-danz-n-motion-black-or-tan-unisex-student/-/A-1004687233",
      "tags": "Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Tap Dance Shoes",
      "filters": {
        "type": "Dance Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/kids-oxford-tap-shoes-danz-n-motion-unisex-unisex-black-or-tan/-/A-1004687222",
      "tags": "Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Tap Dance Shoes",
      "filters": {
        "type": "Dance Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-baby-unisex-wide-width-walking-shoes-first-walker-baby-first-walk-training-shoes/-/A-86679249",
      "tags": "Derby Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Derby Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-baby-unisex-medium-width-pebble-walking-shoes-first-walker-baby-first-walk-training-shoes/-/A-86679317",
      "tags": "Derby Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Derby Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-baby-unisex-medium-width-ostrich-walking-shoes-first-walker-baby-first-walk-training-shoes/-/A-86679559",
      "tags": "Derby Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Derby Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-baby-unisex-medium-width-woven-ostrich-walking-shoes-first-walker-baby-first-walk-training-shoes/-/A-86679327",
      "tags": "Derby Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Derby Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-baby-unisex-medium-width-walking-shoes-ostrich-first-walker-baby-first-walk-training-shoes/-/A-1001533674",
      "tags": "Derby Shoes, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Derby Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/cadence-girls-tall-scrunch-boot/-/A-1001153888",
      "tags": "Dress Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Dress Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-durango-toddler-boys-tan-black-western-boot/-/A-82078265",
      "tags": "Dress Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Dress Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-georgia-boot-toddlers-romeo/-/A-81967883",
      "tags": "Dress Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Dress Boots"
      }
    },
    {
      "url": "https://www.target.com/p/deer-stags-kids-nolan-jr-bungee-lace-dress-casual-boot/-/A-89542247",
      "tags": "Dress Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Dress Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-georgia-kids-little-georgia-giant-romeo/-/A-81953868",
      "tags": "Dress Boots, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Dress Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-noa-footbed-sandals-cat-jack/-/A-94369756",
      "tags": "Espadrille Sandals, Girls’ Shoes, Kids’ Shoes, Shoes, Footbed Sandals",
      "filters": {
        "type": "Espadrille Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-tinley-sandal/-/A-1002805795",
      "tags": "Espadrille Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Espadrille Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-sophia-sandal/-/A-1002825026",
      "tags": "Espadrille Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Espadrille Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-madeline-espadrille-sandals-art-class-white/-/A-92606368",
      "tags": "Espadrilles, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Espadrilles"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-toddler-girls-jellyfish-t-fisherman-sandal/-/A-1001632677",
      "tags": "Fisherman Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Fisherman Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/foamwalk-girl-s-eva-fisherman-sandals-comfy-sandals-for-little-kid/-/A-92074138",
      "tags": "Fisherman Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Fisherman Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/paw-patrol-everest-skye-light-up-summer-sandals-hook-loop-adjustable-strap-closed-toe-sandal-water-shoe-pink-sizes-6-12-toddler-little-kid/-/A-86925935",
      "tags": "Fisherman Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Fisherman Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-sam-americana-usa-flip-flops-cat-jack/-/A-93757908",
      "tags": "Flip Flops, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Flip Flops"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-adrian-americana-usa-flip-flops-cat-jack/-/A-93757907",
      "tags": "Flip Flops, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Flip Flops"
      }
    },
    {
      "url": "https://www.target.com/p/disney-minnie-mouse-girls-slides-summer-sandal-kids-water-pool-beach-shoes-with-backstrap-open-toe-pink-sizes-5-12-toddler-little-kid/-/A-86925927",
      "tags": "Flip Flops, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Flip Flops"
      }
    },
    {
      "url": "https://www.target.com/p/kids-batman-city-sunset-flip-flop-sandals/-/A-1004842585",
      "tags": "Flip Flops, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Flip Flops"
      }
    },
    {
      "url": "https://www.target.com/p/nickelodeon-girls-boys-character-flip-flop-sandals-kids-water-shoes-blue-s-clues-thong-beach-slides-slip-on-quick-dry-toddler-little-kid/-/A-89879353",
      "tags": "Flip Flops, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Flip Flops"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-snow-white-isabella-sandals/-/A-92400361",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-reagan-footbed-sandals-cat-38-jack-8482/-/A-92437502",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-shaelyn-sandals-cat-38-jack-8482/-/A-92437204",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kailan-ankle-strap-footbed-sandals-cat-jack-white/-/A-89259688",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-drew-footbed-sandals-cat-jack-taupe/-/A-94756491",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-brooklyn-crochet-footbed-sandals-cat-jack-blush/-/A-93654980",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-drew-footbed-sandals-cat-38-jack-8482/-/A-94472286",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-daphne-gingham-platform-espadrille-sandals-cat-jack-red/-/A-93655082",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kaia-mesh-footbed-sandals-cat-jack/-/A-93655660",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-shaelyn-footbed-sandals-cat-jack/-/A-83480964",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-abbie-daisy-sandals-cat-jack-white/-/A-93652056",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-mesh-footbed-sandals-cat-jack/-/A-93654975",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-ade-footbed-sandals-cat-jack/-/A-94369873",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-kody-sandals-cat-jack/-/A-92310252",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-baylor-character-slides-cat-jack/-/A-93631550",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-makayla-daisy-platform-sandals-art-class/-/A-93655092",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-verity-platform-hardware-sandals-art-class-8482-light-brown/-/A-94293406",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-lindsey-platform-espadrille-sandals-art-class-8482/-/A-92437489",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kensie-girl-kids-comfy-clog-slippers-little-kid-sizes/-/A-1004702302",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-dress-sandals-little-kids-big-kids/-/A-1001153935",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-dress-sandals-little-kids-big-kids/-/A-1001128716",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/disney-frozen-anna-elsa-clog-sandals-little-kids-sizes/-/A-88533810",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-dress-sandals-little-kids-big-kids/-/A-1004339946",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/carter-39-s-just-one-you-174-toddler-girls-39-olive-first-walker-sandals-gold/-/A-92802192",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/laura-ashley-girls-bowknot-open-toe-sandals-toddler-little-kids/-/A-1004103694",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/laura-ashley-girls-footbed-toddler-buckle-sandals/-/A-86925069",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-girls-cozy-footbed-clogs-little-kids-big-kids/-/A-1001644250",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-classic-fisherman-jelly-sandals/-/A-1004234662",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-beck-clog-sandal/-/A-1002806218",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-classic-fisherman-jelly-sandals/-/A-1004244591",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/rugged-bear-boy-closed-toe-sport-sandals-little-kids/-/A-90627873",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-women-s-kadee-ii-summer-sandals/-/A-1004913864",
      "tags": "Footbed Sandals, Girls’ Shoes, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Footbed Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/disney-moana-costume-shoes-for-kids/-/A-94426322",
      "tags": "Girls’ Shoes, Gladiator Sandals, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Gladiator Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/see-kai-run-basics-toddler-shayna-sandals/-/A-86875399",
      "tags": "Girls’ Shoes, Gladiator Sandals, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Gladiator Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/rocky-bearclaw-kids-waterproof-1000g-insulated-outdoor-boot/-/A-82098898",
      "tags": "Girls’ Shoes, Hiking Boots, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Hiking Boots"
      }
    },
    {
      "url": "https://www.target.com/p/rocky-kids-aztec-wellington-brown-boot/-/A-82292682",
      "tags": "Girls’ Shoes, Hiking Boots, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Hiking Boots"
      }
    },
    {
      "url": "https://www.target.com/p/timberland-youth-greenstride-motion-6-hiker/-/A-92254898",
      "tags": "Girls’ Shoes, Hiking Boots, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Hiking Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-outdoor-waterproof-800g-insulated-boot-fq0003710-camo/-/A-82292459",
      "tags": "Girls’ Shoes, Hiking Boots, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Hiking Boots"
      }
    },
    {
      "url": "https://www.target.com/p/timberland-toddler-mt-maddsen-waterproof-mid-hiker-boot/-/A-85731878",
      "tags": "Girls’ Shoes, Hiking Boots, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Hiking Boots"
      }
    },
    {
      "url": "https://www.target.com/p/timberland-youth-mt-maddsen-waterproof-hiking-boot/-/A-87403873",
      "tags": "Girls’ Shoes, Hiking Boots, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Hiking Boots"
      }
    },
    {
      "url": "https://www.target.com/p/avalanche-girls-boys-unisex-lace-up-combat-hiker-trailing-boots-kids-ankle-boots-low-heel-short-booties-outdoor-shoes-little-kids-big-kids/-/A-87669810",
      "tags": "Girls’ Shoes, Hiking Boots, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Hiking Boots"
      }
    },
    {
      "url": "https://www.target.com/p/timberland-toddler-greenstride-motion-6-hiker/-/A-92033827",
      "tags": "Girls’ Shoes, Hiking Boots, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Hiking Boots"
      }
    },
    {
      "url": "https://www.target.com/p/goumi-stay-on-baby-boots/-/A-82752081",
      "tags": "Girls’ Shoes, Infant Booties, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Infant Booties"
      }
    },
    {
      "url": "https://www.target.com/p/wrapables-fleece-baby-booties-with-anti-skid-bottoms/-/A-1000513660",
      "tags": "Girls’ Shoes, Infant Booties, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Infant Booties"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-snow-white-isabella-sandals/-/A-92400366",
      "tags": "Girls’ Shoes, Jelly Sandals, Kids’ Shoes, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Jelly Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-sunny-jelly-sandals-cat-jack/-/A-89465731",
      "tags": "Girls’ Shoes, Jelly Sandals, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Jelly Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-girls-tessa-jelly-glitter-sandals-cat-jack/-/A-93654527",
      "tags": "Girls’ Shoes, Jelly Sandals, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Jelly Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-kate-jelly-sandals-cat-jack/-/A-89259561",
      "tags": "Girls’ Shoes, Jelly Sandals, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Jelly Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-oaklyn-glitter-jelly-slides-cat-jack/-/A-93655079",
      "tags": "Girls’ Shoes, Jelly Sandals, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Jelly Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-lainey-jelly-sandals-cat-jack/-/A-92958420",
      "tags": "Girls’ Shoes, Jelly Sandals, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Jelly Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-delia-lemon-jelly-sandals-cat-jack-clear/-/A-93655140",
      "tags": "Girls’ Shoes, Jelly Sandals, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Jelly Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-capri-flower-jelly-flip-sandals-art-class/-/A-93655068",
      "tags": "Girls’ Shoes, Jelly Sandals, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Jelly Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/disney-minnie-mouse-girls-jelly-sandals-toddler-little-kids/-/A-1000966692",
      "tags": "Girls’ Shoes, Jelly Sandals, Kids’ Shoes, Shoes",
      "filters": {
        "type": "Jelly Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-jude-clog-slippers-cat-jack/-/A-90647130",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafer Slippers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Loafer Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-nola-faux-suede-clog-slippers-cat-jack/-/A-91362200",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafer Slippers, Shoes",
      "filters": {
        "type": "Loafer Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-whale-character-slippers-cat-jack-blue/-/A-92607309",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafer Slippers, Shoes",
      "filters": {
        "type": "Loafer Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/dearfoams-kid-s-buffalo-check-lil-bear-clog-slipper/-/A-86261711",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafer Slippers, Shoes",
      "filters": {
        "type": "Loafer Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/dearfoams-kid-s-peyton-animal-slip-on-clog-house-slipper/-/A-87716663",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafer Slippers, Shoes",
      "filters": {
        "type": "Loafer Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/dearfoams-kid-s-emery-critter-closed-back-animal-slipper/-/A-89634713",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafer Slippers, Shoes",
      "filters": {
        "type": "Loafer Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-slip-on-everyday-penny-loafer/-/A-1003189898",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafers, Shoes",
      "filters": {
        "type": "Loafers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-brody-slip-on-dress-shoes-cat-jack-black/-/A-94264263",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafers, Shoes",
      "filters": {
        "type": "Loafers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-chase-slip-on-loafers-cat-jack-navy-blue/-/A-92606353",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Loafers"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-logan-toddler-leather-unisex-kids-non-slip-first-walker-baby-shoes/-/A-86679993",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Loafers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-minnie-mouse-infant-walking-shoes/-/A-86922821",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafers, Shoes",
      "filters": {
        "type": "Loafers"
      }
    },
    {
      "url": "https://www.target.com/p/hey-dude-wendy-sparkle-kids-kid-s-comfortable-slip-on-shoes/-/A-1005040040",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafers, Shoes",
      "filters": {
        "type": "Loafers"
      }
    },
    {
      "url": "https://www.target.com/p/hey-dude-wendy-animal-kids-kid-s-comfortable-slip-on-shoes/-/A-1005039751",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafers, Shoes",
      "filters": {
        "type": "Loafers"
      }
    },
    {
      "url": "https://www.target.com/p/hey-dude-wendy-stretch-sox-kids-kid-s-comfortable-slip-on-shoes/-/A-1005039974",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafers, Shoes",
      "filters": {
        "type": "Loafers"
      }
    },
    {
      "url": "https://www.target.com/p/hey-dude-wendy-toddler-girls-comfortable-slip-on-shoe/-/A-1005177227",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafers, Shoes",
      "filters": {
        "type": "Loafers"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-boys-wingtip-oxford-lace-up-dress-shoes-little-kid-big-kid-sizes/-/A-89310287",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafers, Shoes",
      "filters": {
        "type": "Loafers"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-unisex-classic-lace-up-oxford-shoes-for-boys-and-girls-comfortable-dress-shoes-for-school-uniform-easter-toddler-and-little-kid-sizes/-/A-87888047",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Loafers"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-unisex-classic-lace-up-oxford-shoes-for-boys-and-girls-comfortable-dress-shoes-for-school-uniform-easter-toddler-and-little-kid-sizes/-/A-89937822",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Loafers"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-logan-toddler-woven-leather-unisex-kids-non-slip-first-walker-baby-shoes/-/A-86680078",
      "tags": "Girls’ Shoes, Kids’ Shoes, Loafers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Loafers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-marie-mary-jane-dress-shoes-cat-jack/-/A-94264201",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-eden-mary-jane-flats-art-class-8482-black/-/A-94293349",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/disney-minnie-mouse-frozen-anna-elsa-girls-flat-shoes-toddler-sizes/-/A-87513777",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-baby-girls-mary-jane-flats-with-bow-detail-non-slip-sole-wedding-flower-girls-shoes-infants-toddler-sizes/-/A-88509084",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/petalia-girls-tween-floral-faux-leather-construction-school-shoes-big-kids/-/A-86926047",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/french-toast-girls-school-shoes-little-girls-big-girls/-/A-1004339937",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-unisex-boys-girls-walking-shoes-hard-sole-t-strap-mary-janes-infant-toddler/-/A-86922826",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/french-toast-girl-s-school-shoes-with-flower-details-little-kids/-/A-86986059",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/french-toast-girls-strapped-heart-school-shoes-little-kids/-/A-86986150",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/laura-ashley-girls-dress-flat-shoes-little-kids-toddler/-/A-86922789",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/petalia-girls-tween-floral-faux-leather-school-shoes/-/A-86926187",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/petalia-girls-toddler-floral-faux-leather-construction-school-shoes/-/A-88508637",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/school-issue-girls-prodigy-mary-jane-shoe/-/A-89527975",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/olivia-miller-girl-s-amelia-maryjane-dress-shoe/-/A-1002187174",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/petalia-girls-flower-faux-leather-detail-tween-school-shoe/-/A-86926115",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/petalia-toddler-girls-t-strap-school-shoes/-/A-86926199",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-baby-girls-mary-jane-flats-with-flower-detail-non-slip-soft-sole-newborn-infant-toddler-first-walker-crib-dress-shoes/-/A-86276040",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/french-toast-girls-school-shoes-with-flower-details-little-kids/-/A-86985958",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/french-toast-girls-school-shoes-with-buckle-flower-details-little-kids/-/A-86985980",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-baby-girls-mary-jane-flats-with-flower-detail-non-slip-sole-wedding-flower-girls-shoes-infants-toddler-sizes/-/A-88073461",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/petalia-girls-double-strap-tween-school-shoes/-/A-86926103",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-easy-on-classic-mary-jane/-/A-1003189734",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/petalia-girls-school-shoes-little-kid-toddler-sizes/-/A-86926238",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-classic-mary-jane-clogs/-/A-1002656922",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/petalia-girls-tween-strapped-buckle-accent-school-shoes/-/A-86926240",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/plae-emme-black/-/A-1000031862",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/plae-chloe-star-dust-blue/-/A-94162349",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Flats, Shoes",
      "filters": {
        "type": "Mary Jane Flats"
      }
    },
    {
      "url": "https://www.target.com/p/kids-hazel-dress-heels-art-class/-/A-94264371",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Heels, Shoes",
      "filters": {
        "type": "Mary Jane Heels"
      }
    },
    {
      "url": "https://www.target.com/p/kids-avi-patent-dress-heels-cat-jack/-/A-94264374",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Heels, Shoes",
      "filters": {
        "type": "Mary Jane Heels"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-girls-disney-mary-jane-heels-silver/-/A-92605575",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Heels, Shoes",
      "filters": {
        "type": "Mary Jane Heels"
      }
    },
    {
      "url": "https://www.target.com/p/laura-ashley-girls-low-heeled-dress-shoes-little-kids-big-kids/-/A-86923964",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Heels, Shoes",
      "filters": {
        "type": "Mary Jane Heels"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-little-kids-girls-dress-shoes-white-flower-mary-jane-style-with-low-heel-for-wedding-party-princess-shoes/-/A-87939097",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Heels, Shoes",
      "filters": {
        "type": "Mary Jane Heels"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-girls-dress-shoes-toddler/-/A-87900768",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Heels, Shoes",
      "filters": {
        "type": "Mary Jane Heels"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-girls-patent-mary-jane-dress-shoes-with-adjustable-hook-and-loop-closure-perfect-for-weddings-parties-and-special-occasions-little-kid/-/A-87939172",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Heels, Shoes",
      "filters": {
        "type": "Mary Jane Heels"
      }
    },
    {
      "url": "https://www.target.com/p/nanette-lepore-girls-low-heeled-dress-pumps-little-kids-big-kids/-/A-94104574",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Heels, Shoes",
      "filters": {
        "type": "Mary Jane Heels"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-baby-girls-walking-shoes-first-step-walker-lightweight-synthetic-non-slip-high-top/-/A-1002474407",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Heels, Shoes",
      "filters": {
        "type": "Mary Jane Heels"
      }
    },
    {
      "url": "https://www.target.com/p/a-leading-role-premium-silver-sparkle-heels/-/A-92998890",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Heels, Shoes",
      "filters": {
        "type": "Mary Jane Heels"
      }
    },
    {
      "url": "https://www.target.com/p/a-leading-role-premium-pink-sparkle-heels/-/A-92610924",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Heels, Shoes",
      "filters": {
        "type": "Mary Jane Heels"
      }
    },
    {
      "url": "https://www.target.com/p/a-leading-role-premium-gold-sparkle-heels/-/A-93028329",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mary Jane Heels, Shoes",
      "filters": {
        "type": "Mary Jane Heels"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-baya-lined-clog-slippers/-/A-94228977",
      "tags": "Girls’ Shoes, Kids’ Shoes, Moccasin Slippers, Shoes",
      "filters": {
        "type": "Moccasin Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/fireside-by-dearfoams-kid-s-parke-genuine-shearling-moccasin/-/A-86052633",
      "tags": "Girls’ Shoes, Kids’ Shoes, Moccasin Slippers, Shoes",
      "filters": {
        "type": "Moccasin Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/cloud-nine-sheepskin-kid-s-sheepskin-moccasin/-/A-93194479",
      "tags": "Girls’ Shoes, Kids’ Shoes, Moccasin Slippers, Shoes",
      "filters": {
        "type": "Moccasin Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-baya-lined-clog-slippers/-/A-94228972",
      "tags": "Girls’ Shoes, Kids’ Shoes, Moccasin Slippers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Moccasin Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/pj-masks-kids-catboy-and-gekko-full-body-slip-on-slippers-size-5-6/-/A-1004218604",
      "tags": "Girls’ Shoes, Kids’ Shoes, Moccasin Slippers, Shoes",
      "filters": {
        "type": "Moccasin Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/dearfoams-kid-s-unisex-hunter-felted-microwool-and-plaid-moccasin-house-shoe-slipper/-/A-87716784",
      "tags": "Girls’ Shoes, Kids’ Shoes, Moccasin Slippers, Shoes",
      "filters": {
        "type": "Moccasin Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/dearfoams-kid-s-amari-moccasin-slipper/-/A-90484695",
      "tags": "Girls’ Shoes, Kids’ Shoes, Moccasins, Shoes",
      "filters": {
        "type": "Moccasins"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girl-s-monday-kids-mule/-/A-1004056179",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mules, Shoes",
      "filters": {
        "type": "Mules"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girl-s-weekend-kids-mule/-/A-1004057532",
      "tags": "Girls’ Shoes, Kids’ Shoes, Mules, Shoes",
      "filters": {
        "type": "Mules"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-miles-dress-shoes-cat-jack/-/A-94264187",
      "tags": "Girls’ Shoes, Kids’ Shoes, Oxfords, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Oxfords"
      }
    },
    {
      "url": "https://www.target.com/p/school-issue-girls-varsity-oxford-shoe/-/A-89527990",
      "tags": "Girls’ Shoes, Kids’ Shoes, Oxfords, Shoes",
      "filters": {
        "type": "Oxfords"
      }
    },
    {
      "url": "https://www.target.com/p/school-issue-girls-upper-class-dress-oxford-shoe/-/A-89743023",
      "tags": "Girls’ Shoes, Kids’ Shoes, Oxfords, Shoes",
      "filters": {
        "type": "Oxfords"
      }
    },
    {
      "url": "https://www.target.com/p/kids-avery-performance-sneakers-all-in-motion/-/A-90430749",
      "tags": "Girls’ Shoes, Kids’ Shoes, Performance Sneakers, Shoes",
      "filters": {
        "type": "Performance Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-callan-performance-sneakers-all-in-motion/-/A-94268796",
      "tags": "Girls’ Shoes, Kids’ Shoes, Performance Sneakers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Performance Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-dillon-slip-on-performance-sneakers-all-in-motion/-/A-90430712",
      "tags": "Girls’ Shoes, Kids’ Shoes, Performance Sneakers, Shoes",
      "filters": {
        "type": "Performance Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-peyton-performance-sneakers-all-in-motion/-/A-90430786",
      "tags": "Girls’ Shoes, Kids’ Shoes, Performance Sneakers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Performance Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-dannie-slip-on-performance-sneakers-all-in-motion/-/A-90430782",
      "tags": "Girls’ Shoes, Kids’ Shoes, Performance Sneakers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Performance Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-toni-performance-sneakers-all-in-motion/-/A-90413944",
      "tags": "Girls’ Shoes, Kids’ Shoes, Performance Sneakers, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Performance Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-ira-lace-up-performance-sneakers-all-in-motion/-/A-94268834",
      "tags": "Girls’ Shoes, Kids’ Shoes, Performance Sneakers, Shoes",
      "filters": {
        "type": "Performance Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-sutton-performance-sneakers-all-in-motion/-/A-94268839",
      "tags": "Girls’ Shoes, Kids’ Shoes, Performance Sneakers, Shoes",
      "filters": {
        "type": "Performance Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-play-perfect-low-top-sneaker/-/A-1001955772",
      "tags": "Girls’ Shoes, Kids’ Shoes, Performance Sneakers, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Performance Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/mizuno-cyclone-speed-5-junior-volleyball-shoe/-/A-1004329539",
      "tags": "Girls’ Shoes, Kids’ Shoes, Performance Sneakers, Shoes",
      "filters": {
        "type": "Performance Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/mizuno-cyclone-speed-3-junior-volleyball-shoe/-/A-90381219",
      "tags": "Girls’ Shoes, Kids’ Shoes, Performance Sneakers, Shoes",
      "filters": {
        "type": "Performance Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-frozen-girls-anna-and-elsa-dual-sizes-hook-and-loop-sandals-toddler-little-kids/-/A-87789863",
      "tags": "Girls’ Shoes, Kids’ Shoes, Platform Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Platform Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-georgia-boot-kids-insulated-waterproof-outdoor-boot/-/A-85838540",
      "tags": "Girls’ Shoes, Kids’ Shoes, Platform Boots, Shoes",
      "filters": {
        "type": "Platform Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-edie-slide-sandals-art-class/-/A-89704837",
      "tags": "Girls’ Shoes, Kids’ Shoes, Platform Sandals, Shoes",
      "filters": {
        "type": "Platform Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/olivia-miller-girl-s-sweetie-platform-sandal/-/A-91890465",
      "tags": "Girls’ Shoes, Kids’ Shoes, Platform Sandals, Shoes",
      "filters": {
        "type": "Platform Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/olivia-miller-girl-s-macie-platform-sandals/-/A-1002265814",
      "tags": "Girls’ Shoes, Kids’ Shoes, Platform Sandals, Shoes",
      "filters": {
        "type": "Platform Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-heel-dress-shoes-with-rhinestone-elegant-girls-pumps-low-heels-flower-party-wedding-princess-little-kids-big-kids/-/A-87985389",
      "tags": "Girls’ Shoes, Kids’ Shoes, Pumps, Shoes",
      "filters": {
        "type": "Pumps"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-low-heeled-dress-shoes-little-kids-big-kids/-/A-86922659",
      "tags": "Girls’ Shoes, Kids’ Shoes, Pumps, Shoes",
      "filters": {
        "type": "Pumps"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-heel-dress-shoes-big-kids/-/A-87892778",
      "tags": "Girls’ Shoes, Kids’ Shoes, Pumps, Shoes",
      "filters": {
        "type": "Pumps"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-heel-dress-shoes-with-bow-elegant-girls-pumps-low-heels-flower-party-wedding-princess-little-kids/-/A-88134409",
      "tags": "Girls’ Shoes, Kids’ Shoes, Pumps, Shoes",
      "filters": {
        "type": "Pumps"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-low-heeled-dress-shoes-little-kids-big-kids/-/A-93184397",
      "tags": "Girls’ Shoes, Kids’ Shoes, Pumps, Shoes",
      "filters": {
        "type": "Pumps"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-ankle-strap-dress-shoes-toddler-little-kids/-/A-1001173404",
      "tags": "Girls’ Shoes, Kids’ Shoes, Pumps, Shoes",
      "filters": {
        "type": "Pumps"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-little-kids-girls-heel-dress-shoes/-/A-1001533676",
      "tags": "Girls’ Shoes, Kids’ Shoes, Pumps, Shoes",
      "filters": {
        "type": "Pumps"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-low-heeled-dress-shoes-little-kids-big-kids-black-size-8/-/A-87537472",
      "tags": "Girls’ Shoes, Kids’ Shoes, Pumps, Shoes",
      "filters": {
        "type": "Pumps"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-heel-dress-shoes-elegant-girls-pumps-low-heels-flower-party-wedding-princess-little-kids/-/A-87739081",
      "tags": "Girls’ Shoes, Kids’ Shoes, Pumps, Shoes",
      "filters": {
        "type": "Pumps"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-low-heeled-dress-pumps-little-kids-big-kids-black-satin-size-8/-/A-87537502",
      "tags": "Girls’ Shoes, Kids’ Shoes, Pumps, Shoes",
      "filters": {
        "type": "Pumps"
      }
    },
    {
      "url": "https://www.target.com/p/rugged-bear-toddler-girls-snow-boots-toddler-sizes/-/A-87891681",
      "tags": "Girls’ Shoes, Kids’ Shoes, Pumps, Shoes",
      "filters": {
        "type": "Pumps"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-handle-it-rain-boots/-/A-1003944106",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-handle-it-rain-boots/-/A-1003996640",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-cece-rain-boots-cat-38-jack-8482/-/A-92758710",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-andy-rain-boots-cat-38-jack-8482/-/A-92758714",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-lennon-rain-boots-cat-jack/-/A-92605679",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-eli-rain-boots-cat-jack/-/A-92605678",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-chelsea-toddler-rain-boots/-/A-92229890",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-handle-it-rain-boots-glitter-mist/-/A-1003081536",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-handle-it-rain-boots-glitter-mist/-/A-1003088076",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-girl-rain-boots-cherry-sweet/-/A-1003847392",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-girl-rain-boots-heart-leopard/-/A-1003847363",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-girl-rain-boots-blue-butterflies/-/A-1003847393",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-girl-rain-boots-pastel-hearts/-/A-1002309281",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-girl-rain-boots-pink-roses/-/A-1002309346",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/addie-tate-boys-and-girls-rain-boots-with-sock-kids-rubber-boots-size-8t-to-12-years-unicorn-stars/-/A-90449308",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-girl-rain-boots-sunset-stripe/-/A-1002309340",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-girl-rain-boots-navy-ditsy-daisy/-/A-1002309284",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-girl-rain-boots-wildflower/-/A-1002309305",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-girl-rain-boots-paisley-punch/-/A-1002309376",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/addie-tate-boys-and-girls-rain-boots-with-sock-kids-rubber-boots-size-8t-12-years-dino-camo/-/A-90447837",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/addie-tate-boys-and-girls-rain-boots-with-sock-kids-rubber-boots-size-8t-12-monster/-/A-90448317",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/addie-tate-boys-and-girls-rain-boots-with-sock-kids-rubber-boots-size-8t-12-years-shark/-/A-90448942",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/addie-tate-boys-and-girls-rain-boots-with-sock-kids-rubber-boots-size-8t-to-12-years-space-celestial/-/A-90449158",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-girl-rain-boots-black-dot-pink/-/A-1002309343",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-girl-rain-boots-houndstooth/-/A-1002309253",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/addie-tate-boys-and-girls-rain-boots-with-sock-kids-rubber-boots-size-8t-12-years-panda-dots/-/A-90448590",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/addie-tate-boys-and-girls-rain-boots-with-sock-kids-rubber-boots-size-8t-12-rainbows-stars/-/A-90448778",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/wootie-toddler-girl-s-daisy-floral-waterproof-rain-boots/-/A-93352771",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-girl-rain-boots-butterfly-floral/-/A-1002309317",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-rain-boots-blue-daisy/-/A-91232916",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/addie-tate-boys-and-girls-rain-boots-with-sock-kids-rubber-boots-size-8t-12-years-dino-hearts/-/A-90447919",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-girls-rain-boots-peace-love-and-flowers/-/A-1002309243",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/girl-kid-s-teddy-snowflake-boots-tundra/-/A-1002668917",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/girl-kid-s-tundra-puffy-boots/-/A-1003070358",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/stephen-joseph-gifts-girls-rain-boots-rainbow-unicorn-pink-size-11/-/A-1004774265",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/stephen-joseph-gifts-girls-and-boys-rain-boots/-/A-1004774523",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/western-chief-toddler-abby-glitter-rain-boots/-/A-89542679",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/barbie-toddler-girls-chelsea-rain-boots/-/A-1005078701",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-rain-boots-leopard-pink/-/A-91234854",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-rain-boots-pink-rainbows/-/A-91234932",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-rain-boots-navy-bold-floral/-/A-91232936",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-rain-boots-fall-botanical/-/A-91235071",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-rain-boots-modern-botanical/-/A-91235082",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-rain-boots-navy-dots-pink/-/A-91235858",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/forever-young-kid-s-rubber-lace-up-heart-print-rainboots/-/A-93997135",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-rain-boots-navy-hearts/-/A-91235422",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/forever-young-kid-s-rubber-pull-up-zebra-print-rainboots/-/A-1000008818",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/western-chief-toddler-girls-dino-soar-rain-boots-navy-blue/-/A-92609448",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/western-chief-toddler-girls-heart-waves-rain-boots/-/A-92609449",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-bluey-rain-boots-blue/-/A-92680246",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/western-chief-toddler-girls-abby-glitter-boots/-/A-92680244",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/western-chief-toddler-girls-sharks-swim-rain-boots-blue/-/A-92609450",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-forager-boot/-/A-1003009309",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-rainboot-glitter/-/A-1001306637",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-rain-boots-buffalo-plaid/-/A-91146043",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/batman-kid-s-rain-boots-with-soft-removable-liner-ages-1-8-years/-/A-89793908",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-skipper-ii-overlap-flowers-kids-rainboots/-/A-1002441148",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-essential-rain-mid/-/A-1001306669",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-skipper-ii-tractor-kids-rainboots/-/A-1002441113",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-big-kids-8-in-legacy-boot/-/A-92148906",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-rain-boots-duck/-/A-1002309466",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-essential-rain-tall/-/A-1001306773",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-kids-rainboot-tractor/-/A-1002440840",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-kids-rainboot-overlap-flowers/-/A-1002441109",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-disney-mickey-mouse-friends-handle-it-rain-boots/-/A-1001620680",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-ranger-splash-series-kids-rubber-rain-boot/-/A-1002358532",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-tufs-little-kids-ankle-deck-boot/-/A-1001045105",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/batman-kid-s-rain-boots-with-soft-removable-liner-ages-1-8-years/-/A-89794320",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/wildkin-kids-waterproof-pull-on-rain-boots/-/A-87713563",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-rain-boots-yellow-navy-stripe/-/A-1002309327",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-kids-rainboot-dinosaur-jungle/-/A-1002440931",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-tufs-little-kids-ankle-deck-boot/-/A-1001044731",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-skipper-ii-dinosaur-jungle-kids-rainboots/-/A-1002441043",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-skipper-ii-pixel-shark-kids-rainboots/-/A-1002441059",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/xtratuf-kids-8-in-legacy-boot-22681g-brown/-/A-87463657",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-big-kids-ankle-deck-boot/-/A-1000995151",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-rainboot-plush/-/A-1001306786",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-ankle-deck-boot/-/A-1001044955",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-tufs-little-kids-ankle-deck-boot/-/A-1001023473",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-tufs-little-kids-ankle-deck-boot/-/A-1001044988",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-xtratuf-little-kids-ankle-deck-boot/-/A-1001044648",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-skipper-ii-solid-kids-rainboots/-/A-1002442687",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-kids-rainboot-pixel-shark/-/A-1002440999",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-kids-rainboot-rodeo-horses/-/A-1002440970",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-disney-mickey-mouse-friends-handle-it-rain-boots/-/A-1001620671",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-eva-toddler-rain-boots-with-easy-pull-on-handles/-/A-92234900",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-toddler-chelsea-rain-boots-with-faux-fur-lining/-/A-93176541",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/batman-boys-rain-boots-toddle-little-kids/-/A-1001369344",
      "tags": "Girls’ Shoes, Kids’ Shoes, Rain Boots, Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Rain Boots"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-company-riding-boot/-/A-1005155939",
      "tags": "Girls’ Shoes, Kids’ Shoes, Riding Boots, Shoes",
      "filters": {
        "type": "Riding Boots"
      }
    },
    {
      "url": "https://www.target.com/p/cloud-nine-sheepskin-kid-s-sheepskin-pom-pom-boot/-/A-93180047",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shearling Style Boots, Shoes",
      "filters": {
        "type": "Shearling Style Boots"
      }
    },
    {
      "url": "https://www.target.com/p/cloud-nine-sheepskin-kid-s-sheepskin-boot/-/A-93180262",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shearling Style Boots, Shoes",
      "filters": {
        "type": "Shearling Style Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-belle-satin-dress-heels-art-class-blush/-/A-92606343",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Heels",
      "filters": {
        "type": "Slide Heels"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-heel-dress-shoes-little-kids-big-kids/-/A-89190719",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Heels",
      "filters": {
        "type": "Slide Heels"
      }
    },
    {
      "url": "https://www.target.com/p/disney-s-lilo-and-stitch-girls-slippers-lilo-stitch-angel-ohana-slip-on-3d-slippers-for-kids-disney-stitch-slippers/-/A-1001830604",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/squishmallows-slippers-plush-lightweight-warm-comfort-soft-slipper-house-shoes-for-kids-girl-boy-sizes-11-1-little-kid-2-5-big-kid/-/A-89902763",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-kids-cozy-slippers-little-kids-big-kids/-/A-1000371295",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/dearfoams-kids-ava-pile-crisscross-furry-sparkle-slide-slippers/-/A-86483283",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/bluey-bingo-plush-kids-slippers-cozy-slip-on-aline-slippers-for-boys-girls-featuring-bluey-bandit-chilli-bingo/-/A-1001830593",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/bluey-bingo-plush-kids-slippers-cozy-slip-on-aline-slippers-for-boys-girls-featuring-bluey-bandit-chilli-bingo/-/A-1002990724",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-mickey-slippers-red/-/A-93758554",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-toy-story-slippers-white/-/A-93761139",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-buzz-lightyear-slippers-white/-/A-93758553",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-lilo-stitch-dual-sizes-slippers-toddler-little-kids/-/A-87673784",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/pokemon-extended-sizing-plush-slippers-yellow/-/A-91383422",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/bluey-bingo-3d-head-slippers-blue-orange/-/A-91383421",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-boys-girls-cozy-slippers/-/A-1004630819",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/floopi-kids-lil-bear-buffalo-plaid-two-tone-faux-fur-clog-slipper/-/A-92108592",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/dearfoams-kid-s-reindeer-holiday-scuff-slippers/-/A-88095463",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/dearfoams-kid-s-casey-lil-bear-family-scuff-slipper/-/A-91485005",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/dearfoams-kid-s-skye-pile-closed-back-house-slipper/-/A-88095500",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/star-wars-little-kids-mismatch-family-indoor-outdoor-slide-on-slippers/-/A-1004207086",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/dearfoams-kid-s-unisex-lennox-happy-camper-sweatshirt-slide-slipper/-/A-87713031",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/dearfoams-kids-lil-bear-plaid-scuff-slipper/-/A-89573966",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/floopi-kids-lil-fuzzy-faux-faux-shearling-clog-slipper-w-buffalo-plaid-lining/-/A-92108605",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-rebecca-toddler-suede-slippers-with-sheepskin/-/A-92639019",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/nickelodeon-blues-clues-unisex-slippers-toddler/-/A-86770817",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slide Slippers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Slide Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-classic-sandals-2-0/-/A-91117763",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-crocband-cruiser-adjustable-sandals/-/A-1003930278",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/kids-devon-slides-cat-jack/-/A-93655674",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/kids-nikko-sport-slide-sandals-cat-jack/-/A-92605948",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-wilder-slip-on-slide-sandals-cat-38-jack-8482/-/A-93034492",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/kids-mari-ankle-strap-sandals-art-class/-/A-92518540",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-heather-slide-sandals-art-class-8482/-/A-92758711",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-saniah-clear-jelly-sandals-art-class-8482-cherry-red/-/A-94088563",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/kids-tatum-comfort-slides-all-in-motion/-/A-92310281",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-minnie-mouse-slide-sandals-yellow/-/A-93666956",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/lilo-and-stitch-girls-clog-sandal-stitch-youth-molded-eva-clog-sandal-lightweight-adorable-for-all-day-comfort-blue-12/-/A-1004524102",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/lilo-and-stitch-girls-clog-sandal-stitch-youth-molded-eva-clog-sandal-lightweight-adorable-for-all-day-comfort-blue-13/-/A-1004524100",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/disney-stitch-girls-dual-sizes-slide-sandals-toddler-little-kids/-/A-1001036266",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/lilo-and-stitch-girls-clog-sandal-stitch-youth-molded-eva-clog-sandal-lightweight-adorable-for-all-day-comfort-blue-2/-/A-1004524099",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-bluey-comfort-slide-sandals-blue/-/A-89529614",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-toddler-girls-springtide-k-slide-sandal/-/A-1001633698",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/aeropostale-youth-cloud-slide-sandals-ultra-soft-eva-cushion-lightweight-slip-on-pool-shower-slides-for-boys-girls/-/A-1004197290",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/olivia-miller-girl-s-daisy-slide-sandal/-/A-91890238",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-girls-bluey-eva-sandals-pink/-/A-94293461",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/disney-stitch-and-angel-girls-dual-sizes-flip-flops-toddler-little-kids/-/A-1001036225",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-disney-princess-the-little-mermaid-slide-sandals-pink/-/A-93666955",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-disney-princess-moana-slide-sandals-pink-orange/-/A-93666954",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/vizari-kids-camo-ss-soccer-slide-sandals-for-boys-and-girls/-/A-90737986",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/disney-frozen-anna-elsa-girls-slides-summer-sandal-kids-water-pool-beach-shoes-with-backstrap-open-toe-lilac-sizes-6-12-toddler-little-kid/-/A-86925882",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-boys-and-girls-hook-and-loop-eva-sandals-toddler-little-kids/-/A-1001628599",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/vizari-kids-ss-soccer-slide-sandal-for-boys-and-girls/-/A-89647239",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/lilo-and-stitch-girls-clog-sandal-stitch-youth-molded-eva-clog-sandal-lightweight-adorable-for-all-day-comfort-blue-11/-/A-1004524098",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/lilo-and-stitch-girls-clog-sandal-stitch-youth-molded-eva-clog-sandal-lightweight-adorable-for-all-day-comfort-blue-3/-/A-1004524103",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/aeropostale-toddler-cloud-foam-slide-sandals-with-pivot-heel-strap-lightweight-eva-water-friendly-clogs-for-boys-girls/-/A-1004197297",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-boys-and-girls-buckle-eva-sandals-toddler-little-kids/-/A-1001628574",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/foamwalk-girl-s-eva-slide-sandals-slip-on-slides-for-big-kid-and-little-kid/-/A-92074050",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/disney-stitch-and-angel-girls-slip-on-slides-toddler-little-kids/-/A-1001008324",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/vizari-kids-usa-ss-soccer-slide-sandals-for-boys-and-girls-navy/-/A-90096195",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/disney-frozen-anna-and-elsa-girls-slides-toddler-little-kids/-/A-1000966724",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/barbie-toddler-girls-cloud-slide-sandals/-/A-1004961915",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/olivia-miller-girl-s-toddler-angel-flat-sandal/-/A-91893408",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/joe-boxer-kids-slides-black/-/A-92658703",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lol-surprise-dolls-fashonista-slide-sandals/-/A-1004842489",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lol-surprise-dolls-aqua-slide-sandals/-/A-1004842535",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/hello-kitty-dual-sizes-girls-slides-little-kids-big-kids/-/A-88508665",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-classic-slides-2-0/-/A-91117771",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-bayaband-adjustable-sandals/-/A-1003088095",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-kids-hello-kitty-and-friends-my-melody-and-kuromi-sandals/-/A-1001674169",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-bayaband-adjustable-sandals/-/A-1003088086",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/crocs-toddler-hello-kitty-and-friends-my-melody-and-kuromi-sandals/-/A-1001674203",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/spongebob-squarepants-little-kids-dual-sizes-slides/-/A-1001008305",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/sesame-street-elmo-abby-caddaby-dual-sizes-clogs-toddler-little-kids/-/A-1002191883",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Slides, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Slides"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-bluey-western-boots-pink/-/A-94268893",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneaker Boots",
      "filters": {
        "type": "Sneaker Boots"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-company-play-perfect-high-top-sneaker/-/A-1003470787",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneaker Boots, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneaker Boots"
      }
    },
    {
      "url": "https://www.target.com/p/converse-kids-street-ox-low-top-sneakers/-/A-94409681",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/converse-toddler-street-ox-low-top-sneakers/-/A-94409683",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/converse-kids-street-mid-top-sneakers/-/A-94409680",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-marina-mary-jane-sneakers-cat-jack/-/A-92606508",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-parker-sneakers-cat-jack/-/A-94888566",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-dakota-retro-court-sneakers-cat-jack/-/A-90430384",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/converse-toddler-street-mid-top-sneakers/-/A-94409682",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-easy-on-sneakers/-/A-1003189762",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-calvin-sneakers-cat-jack/-/A-94268800",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-parker-sneakers-cat-38-jack-8482-black-4t/-/A-90429128",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-charlotte-slip-on-sneakers-cat-jack/-/A-92606409",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-bobby-pull-on-sneakers-cat-38-jack-8482/-/A-92781768",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-yana-slip-on-glitter-sneakers-cat-jack/-/A-92607069",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-coco-platform-court-sneakers-cat-jack/-/A-92606407",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-marina-mary-jane-sneakers-cat-38-jack-8482-black/-/A-94293512",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-boston-court-sneakers-cat-38-jack-8482-beige/-/A-94293338",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-jaid-court-sneakers-cat-jack/-/A-89514204",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-jett-low-top-sneakers-cat-jack-navy-blue/-/A-92606408",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-morgan-slip-on-sneakers-cat-jack/-/A-94267058",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-yana-slip-on-glitter-sneakers-cat-38-jack-8482-black/-/A-94293533",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-hollis-slip-on-sneakers-cat-jack/-/A-94267049",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-sora-glitter-sneakers-cat-jack/-/A-92607068",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-wren-platform-charm-sneakers-cat-jack/-/A-94268805",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-hudson-skate-sneakers-cat-jack-blue/-/A-92606416",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-marlowe-retro-court-sneakers-art-class/-/A-94268901",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kaitlyn-court-sneakers-art-class/-/A-89514529",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-calantha-mary-jane-sneakers-art-class/-/A-94268811",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/reebok-royal-prime-step-n-flash-little-girl-s-shoes/-/A-1004619909",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/club-c-extra/-/A-1002426454",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/reebok-cl-nylon-big-girl-s-shoes/-/A-1004221565",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/reebok-royal-prime-2-0-two-strap-hoop-loop-little-girl-s-shoes/-/A-1005034803",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/reebok-zig-dynamica-5-big-girl-s-shoes/-/A-1004221595",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/nano-play-slip-on/-/A-1002756550",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/nano-play-shoes-little-kids/-/A-1002422856",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/s-sport-by-skechers-girls-vana-performance-sneakers/-/A-85285881",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/reebok-campio-xt-double-big-girl-s-shoes/-/A-1004221848",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/bebe-girls-shoes-sneakers-for-girls-low-top-metallic-flat-sneakers-for-little-kid-big-kid/-/A-1002504810",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/reebok-club-c-extra-shoes-grade-school/-/A-1004221748",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/s-sport-by-skechers-girls-bree-sneakers-silver/-/A-94072076",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-kid-s-marley-k-slip-on-sneaker/-/A-93469285",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girls-cambria-k-lace-up-sneakers-white-silver-1-m/-/A-1000116659",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-girls-playlist-k-sneaker/-/A-1001633568",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girl-s-craisy-k-sneaker/-/A-1004517279",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-kid-s-willa-k-metallic-sneaker/-/A-93470637",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-kid-s-play-k-slip-on-sneaker/-/A-93469936",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-girls-amaze-b-k-sneaker/-/A-1001631141",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/bebe-girls-shoes-jogger-sneakers-for-toddler-comfortable-and-breathable-shoes-for-toddler/-/A-1002504767",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girls-wanderland-k-lace-up-sneakers-cream-1-m/-/A-1000117226",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-girls-vivid-2-k-sneaker/-/A-1001634227",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girl-s-aly-kids-sneaker/-/A-1004055850",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girl-s-pebble-3-kids-sneaker/-/A-1004056369",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-girls-cameron-k-sneaker/-/A-1001632004",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girl-s-perfect-kids-sneaker/-/A-1004056357",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girls-leo-k-lace-up-sneakers/-/A-1000116759",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-minnie-mouse-girls-sneakers-little-kids-big-kids/-/A-92942303",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-girls-super-play-k-sneaker/-/A-1001633848",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-girls-vice-k-sneaker-white-pink-1-m/-/A-1000117142",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girls-wander-k-slip-on-sneakers-peach-cream-1-m/-/A-1000117247",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-s-lilo-and-stitch-girls-slip-on-sneakers-lilo-stitch-angel-ohana-slip-on-design-shoes-for-kids-disney-stitch-slip-on-sneakers-5/-/A-1004520789",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-girls-hi-forever-k-shoes-lunar-rock-1-m/-/A-1000116730",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girl-s-vibe-kids-sneaker/-/A-1004057476",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girl-s-vibin-kids-sneaker/-/A-1004057454",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/frozen-s-magical-high-top-shoes-for-girls-disney-s-elsa-anna-olaf-adventure-blue-lace-up-sneakers-light-blue-7/-/A-1004520782",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/frozen-s-magical-high-top-shoes-for-girls-disney-s-elsa-anna-olaf-adventure-blue-lace-up-sneakers-light-blue-6/-/A-1004520776",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-s-minnie-mouse-girls-sneakers-slip-on-elastic-lace-sneakers-minnie-mouse-polka-dot-and-bows-everyday-shoes-for-kids-red-8/-/A-1004520787",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-s-lilo-and-stitch-girls-slip-on-sneakers-lilo-stitch-angel-ohana-slip-on-design-shoes-for-kids-disney-stitch-slip-on-sneakers-10/-/A-1004520779",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-girls-party-k-sneaker/-/A-1001633550",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-girls-beachside-k-sneaker/-/A-1001631830",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-girls-amaze-k-sneaker/-/A-1001631165",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/frozen-s-magical-high-top-shoes-for-girls-disney-s-elsa-anna-olaf-adventure-blue-lace-up-sneakers-light-blue-8/-/A-1004520780",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/frozen-s-magical-high-top-shoes-for-girls-disney-s-elsa-anna-olaf-adventure-blue-lace-up-sneakers-light-blue-10/-/A-1004520783",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/frozen-s-magical-high-top-shoes-for-girls-disney-s-elsa-anna-olaf-adventure-blue-lace-up-sneakers-light-blue-5/-/A-1004520781",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/frozen-s-magical-high-top-shoes-for-girls-disney-s-elsa-anna-olaf-adventure-blue-lace-up-sneakers-light-blue-9/-/A-1004520778",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girl-s-martina-kids-sneaker/-/A-1004056100",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-s-lilo-and-stitch-girls-slip-on-sneakers-lilo-stitch-angel-ohana-slip-on-design-shoes-for-kids-disney-stitch-slip-on-sneakers-7/-/A-1004520792",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-s-lilo-and-stitch-girls-slip-on-sneakers-lilo-stitch-angel-ohana-slip-on-design-shoes-for-kids-disney-stitch-slip-on-sneakers-9/-/A-1004520790",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-s-lilo-and-stitch-girls-slip-on-sneakers-lilo-stitch-angel-ohana-slip-on-design-shoes-for-kids-disney-stitch-slip-on-sneakers-8/-/A-1004520791",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-s-lilo-and-stitch-girls-slip-on-sneakers-lilo-stitch-angel-ohana-slip-on-design-shoes-for-kids-disney-stitch-slip-on-sneakers-6/-/A-1004520788",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-kid-s-fruit-k-slip-on-sneaker-wolf-gray-13-m/-/A-93468763",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-s-minnie-mouse-girls-sneakers-slip-on-elastic-lace-sneakers-minnie-mouse-polka-dot-and-bows-everyday-shoes-for-kids-red-6/-/A-1004520784",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-s-minnie-mouse-girls-sneakers-slip-on-elastic-lace-sneakers-minnie-mouse-polka-dot-and-bows-everyday-shoes-for-kids-red-7/-/A-1004520777",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-s-minnie-mouse-girls-sneakers-slip-on-elastic-lace-sneakers-minnie-mouse-polka-dot-and-bows-everyday-shoes-for-kids-red-9/-/A-1004520786",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-s-minnie-mouse-girls-sneakers-slip-on-elastic-lace-sneakers-minnie-mouse-polka-dot-and-bows-everyday-shoes-for-kids-red-10/-/A-1004520785",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-s-minnie-mouse-girls-sneakers-slip-on-elastic-lace-sneakers-minnie-mouse-polka-dot-and-bows-everyday-shoes-for-kids-red-5/-/A-1004520793",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/gender-neutral-girls-scalloped-mary-janes-shoes-petit-confection/-/A-1001050647",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-disney-frozen-athletic-sneakers-blue/-/A-89523004",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/s-sport-by-skechers-toddler-girls-lexie-sneakers-light-pink/-/A-92622785",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/s-sport-by-skechers-toddler-girls-cora-sneakers-silver/-/A-92605559",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/s-sport-by-skechers-toddler-girls-ian-sneakers-yellow/-/A-94072075",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-minnie-mouse-girls-no-lace-shoes-kids-disney-character-loafer-low-top-slipon-casual-tennis-canvas-sneakers-size-5-12-toddler-little-kid/-/A-87537433",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-frozen-toddler-girls-sneakers-w-2-white-lights-toddler/-/A-87537408",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-minnie-mouse-girls-sneakers-toddler-little-kids/-/A-86770802",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-infant-girls-wanderland-t-lace-up-sneakers/-/A-1000117210",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-girls-high-top-sneakers-lightweight-canvas-breathable-with-sequins-toddler-little-kid-sizes/-/A-1000147431",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-moana-girls-vintage-sneakers-toddler-little-kids/-/A-1002397234",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-infant-girls-willa-t-slip-on-sneakers/-/A-1000117347",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-minnie-mouse-girls-light-up-sneakers-toddler-little-kids/-/A-87537404",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-infant-girls-wander-t-slip-on-sneakers/-/A-1000117215",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-the-little-mermaid-girls-hook-and-loop-sneakers-infant-toddler/-/A-93003503",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/frozen-elsa-anna-girls-no-lace-shoes-kids-disney-character-loafer-low-top-slipon-casual-tennis-canvas-sneakers-size-5-12-toddler-little-kid/-/A-87537476",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-toddler-girls-vivid-2-t-sneaker/-/A-1001634245",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-toddler-girls-aurora-t-sneaker/-/A-1001631468",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-toddler-girls-all-play-t-sneaker/-/A-1001631116",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-toddler-girls-party-t-sneaker/-/A-1001633559",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-toddler-s-wave-t-slip-on-sneaker-black-10-t/-/A-93470539",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-girl-frozen-ii-hook-and-loop-closure-sneaker-toddler/-/A-86276638",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-princess-girls-sneakers-toddler-little-kids/-/A-1001008313",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-toddler-girls-playlist-t-sneaker/-/A-1001633576",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/ninja-turtles-toddler-sneakers-toddler/-/A-86276476",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-princess-girls-no-lace-shoes-kids-disney-character-loafer-low-top-slipon-casual-tennis-canvas-sneakers-size-5-12-toddler-little-kid/-/A-87677791",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-infant-girl-s-aly-toddler-sneaker/-/A-1004055842",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-toddler-girls-vice-b-t-sneaker-blush-pixie-leopard-10-t/-/A-1000117137",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-toddler-s-play-t-slip-on-sneaker/-/A-93470068",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-toddler-girls-beachside-t-sneaker/-/A-1001631844",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-infant-girl-s-vibe-toddler-sneaker/-/A-1004057156",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-infant-girl-s-perfect-toddler-sneaker/-/A-1004056381",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-infant-girl-s-vibin-toddler-sneaker/-/A-1004057064",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/gender-neutral-girls-bow-heart-mary-janes-shoes-petit-confection/-/A-1001050658",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/hello-kitty-little-kids-girls-slip-on-canvas-sneakers/-/A-90540544",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/nickelodeon-paw-patrol-girls-w-two-red-lights-sneakers-toddler/-/A-86276229",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/s-sport-by-skechers-kids-jazmin-2-0-sneakers-black/-/A-90430392",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/s-sport-by-skechers-kids-vana-sneakers-black/-/A-92605562",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/s-sport-by-skechers-kids-karlie-sneakers-periwinkle-blue/-/A-92605561",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girls-vesa-k-oxford-sneakers-off-white-1-m/-/A-1000117151",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-girls-supersmile-k-sneaker/-/A-1001633832",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/dr-scholl-s-infant-girls-madison-mj-toddler-shoes/-/A-1001661620",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/dr-scholl-s-youth-girls-time-off-win-kids-sneaker-pink-lemonade-13-m/-/A-1003265982",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kensie-girls-white-casual-sneakers-with-lace-up-closure-and-glittery-accents-little-kid-big-kid/-/A-89833393",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-glitzy-sneakers-little-kids-big-kids/-/A-1001128720",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/dr-scholl-s-youth-girls-time-off-kids-sneakers/-/A-92657250",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/hello-kitty-girls-lace-up-vintage-fashion-sneakers-little-kids-big-kids/-/A-93100057",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/girl-stunt-lace-up-sneaker-danskin/-/A-1001893470",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-glitzy-sneakers-little-kids-big-kids/-/A-86924145",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/rugged-bear-girls-snow-boots-little-kids/-/A-87891649",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/hello-kitty-girls-sneakers-little-kids-big-kids/-/A-90535568",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/girl-energy-lace-up-sneaker-danskin/-/A-1001893530",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/girl-admire-slip-on-sneaker-danskin/-/A-1001893458",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/french-toast-boys-girls-sneakers/-/A-1004656164",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kensie-girl-high-top-sneakers-little-kids-big-kids/-/A-1001369354",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/olivia-miller-girl-s-bonnie-low-top-sneakers/-/A-1002187147",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-disney-frozen-athletic-sneakers-purple-blue/-/A-94266763",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/s-sport-by-skechers-toddler-clara-sneakers-pink/-/A-94072078",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/s-sport-by-skechers-toddler-leah-sneakers-purple/-/A-94072082",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/beverly-hills-kids-sneakers-with-easy-on-and-off-hook-and-loop-closure-a-great-choice-for-little-kids-little-kids/-/A-86276865",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/frozen-high-top-hook-and-loop-canvas-sneakers-toddler-little-kid/-/A-87664234",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/hello-kitty-high-top-sneaker-little-kids-sizes/-/A-94165792",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-lilo-and-stitch-kids-sneakers-toddler-little-kids/-/A-86922799",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/disney-minnie-mouse-high-top-platform-sneakers-toddler-little-kids/-/A-93572005",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/barbie-toddler-girls-high-top-sneakers/-/A-1004961896",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/carter-39-s-just-one-you-174-toddler-girls-39-butterfly-ash-first-walker-sneakers-pink/-/A-92802195",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-kids-casual-sneaker-for-girls-and-boys-lightweight-strap-closure-lace-up-shoes-tennis-running-athletic-sneakers-sizes-5-10-toddlers/-/A-1002849301",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/laura-ashley-girls-sneakers-toddler-little-kids/-/A-86922649",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/gabby-s-dollhouse-girls-light-up-fashion-sneakers-toddler-little-kids/-/A-90917871",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/beverly-hills-polo-club-girls-slip-on-canvas-sneakers-toddler-little-kids/-/A-1000176592",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/laura-ashley-girls-mj-style-sneakers-toddler-little-kids/-/A-1001128705",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/rugged-bear-girls-snow-boots-toddler/-/A-87891646",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/hello-kitty-girls-hook-and-loop-casual-sneakers-toddler-little-kids/-/A-1000034639",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/hello-kitty-girls-sneakers-toddler-sizes/-/A-86924149",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/dr-scholl-s-infant-girls-madison-toddler-slip-ons/-/A-92656782",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/dr-scholl-s-infant-girls-time-off-toddler-sneakers/-/A-92657288",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/dr-scholl-s-infant-girl-s-madison-play-toddler-sneaker/-/A-1004059854",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/dr-scholl-s-infant-girls-time-off-win-toddler-sneaker/-/A-1003265996",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/laura-ashley-girls-hook-and-loop-sneakers-toddler-little-girls/-/A-86276412",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/dr-scholl-s-infant-girl-s-be-true-toddler-sneaker/-/A-1004059235",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/billy-footwear-kids-haring-sneakers/-/A-92658308",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-stitch-court-sneakers-white/-/A-92605572",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-hello-kitty-sneakers-pink/-/A-94268898",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/unos-by-sz-kids-sneakers/-/A-90782931",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/billy-footwear-kids-39-haring-graphic-printed-sneakers-black/-/A-92826211",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/billy-footwear-kids-sneakers/-/A-91184453",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/plae-ty-lavender-indigo/-/A-94157166",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/dr-scholl-s-youth-boys-madison-kids-shoes-rainbow-13-m/-/A-1001659585",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-casual-low-top-sneaker/-/A-1001947105",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-henry-sneaker/-/A-1002806927",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-sneaker/-/A-1002936620",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/plae-miles-titanium-quartz/-/A-94161145",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/plae-ty-hematite/-/A-1000028176",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/plae-lucien-festival-fuchsia/-/A-94161175",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-bluey-mh-sneakers-purple/-/A-94268895",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/see-kai-run-basics-toddler-tenny-sneakers/-/A-90413844",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/see-kai-run-basics-toddler-belmont-sneakers/-/A-94293585",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-hello-kitty-athletic-sneakers/-/A-92606415",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-disney-tmnt-athletic-sneakers-black/-/A-94264162",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/laura-ashley-hook-and-loop-casual-sneakers-toddler-little-kids/-/A-93666848",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-baby-girl-first-walk-sock-shoes-crown-princess/-/A-89299570",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-nora-sneaker/-/A-1001924416",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-shoes-sneakers-pink-18-24m/-/A-89236157",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-girl-first-walk-sock-shoes-heartbreaker/-/A-89299517",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-girl-first-walk-sock-shoes-mary-jane-bow/-/A-89299608",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-girl-first-walk-sock-shoes-t-strap-heart/-/A-89299613",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-first-walk-sock-shoes-walker-black/-/A-89237073",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/paris-blues-toddler-girls-slip-on-sneaker/-/A-1005049196",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddlers-easy-on-sneakers/-/A-1003189844",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/reebok-cl-nylon-big-kid-s-shoes/-/A-1004221663",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-bluey-high-top-sneakers-blue/-/A-90430697",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/billy-footwear-toddler-harmon-sneakers-black/-/A-90920775",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/billy-footwear-toddler-haring-leopard-hearts-sneakers-pink/-/A-92826216",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/billy-footwear-toddler-haring-graphic-printed-sneakers-black/-/A-92826214",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-shoes-sneakers-pink-24-36m/-/A-89236158",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/billy-footwear-toddler-haring-colorblock-sneakers/-/A-92826213",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/cl-nylon-shoes-baby-toddler/-/A-1003238027",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/campio-xt-shoes/-/A-1002426328",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/gender-neutral-bloom-lace-up-sneaker-danskin/-/A-1001774423",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-quinn-slip-on-sneaker/-/A-1001931111",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/beverly-hills-polo-club-casual-lace-up-sneakers-little-kids-big-kids/-/A-86923200",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/gender-neutral-stunt-lace-up-sneaker-danskin/-/A-1001893314",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/deer-stags-boys-kane-dress-fashion-sneaker/-/A-87071608",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/deer-stags-boys-jose-jr-dress-fashion-sneaker/-/A-89542538",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/nickelodeon-spongebob-squarepants-spongebob-and-patrick-slip-on-low-top-canvas-sneakers-little-kids-big-kids/-/A-92904562",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/gender-neutral-energy-lace-up-sneaker-danskin/-/A-1001774465",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/plae-max-odyssea/-/A-1000031294",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/gender-neutral-stunt-lace-up-sneaker-danskin/-/A-1001774525",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/gender-neutral-insight-slip-on-sneaker-danskin/-/A-1001774374",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/deer-stags-kids-energy-jr-bungee-lace-dress-fashion-sneaker/-/A-1002358674",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/gender-neutral-kids-pump-canvas-ballet-shoes-bloch/-/A-1001401186",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/gender-neutral-leo-rhythm-tap-shoe-bloch/-/A-1001401206",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/timberland-youth-allston-mid-lace-up-sneaker/-/A-1003010212",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-bluey-athletic-sneakers-blue/-/A-89529619",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/sonic-the-hedgehog-boys-slip-on-canvas-sneakers-little-kids/-/A-90842640",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-beginner-kids-leather-walking-shoes-first-walker-medium-width-toddler/-/A-86680113",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/sesame-street-kids-energetic-elmo-casual-sneakers-toddler-little-kids/-/A-93705434",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/gerber-baby-and-toddler-neutral-hook-loop-sneaker/-/A-1002564277",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-baby-boy-first-walk-sock-shoes-twinkle-twinkle/-/A-89299550",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-boy-first-walk-sock-shoes-stars-stripes/-/A-89299603",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/sesame-street-kids-star-elmo-casual-sneakers-toddler-little-kids/-/A-93705422",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/sesame-street-kids-all-your-friends-canvas-sneakers-toddler-little-kids/-/A-91365354",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/sesame-street-kids-cookie-and-elmo-hook-and-loop-fashion-sneaker-toddler-little-kids/-/A-91365333",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/sesame-street-kids-elmo-and-cookie-monster-slip-on-canvas-sneakers-toddler-little-kids/-/A-93705418",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/josmo-kids-boys-hook-and-loop-casual-sneakers-toddler-little-kids/-/A-94089014",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/sesame-street-kids-all-your-friends-hi-top-sneakers-toddler-little-kids/-/A-91365396",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/sesame-street-kids-elmo-hook-and-loop-fashion-sneaker-toddler-little-kids/-/A-91365358",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/sesame-street-kids-cookie-monster-hook-and-loop-fashion-sneaker-toddler-little-kids/-/A-91365329",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/timberland-toddler-allston-mid-lace-up-sneaker/-/A-1003009530",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/unisex-toddler-lightweight-sneakers-sizes-7-10/-/A-1004339932",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/mizuno-mizuno-alpha-select-junior-soccer-cleat/-/A-1003953967",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Soccer Cleats",
      "filters": {
        "type": "Soccer Cleats"
      }
    },
    {
      "url": "https://www.target.com/p/rocky-little-kid-s-original-ride-flx-waterproof-brown-western-boot/-/A-82292589",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/rocky-ride-flx-toddler-boys-camo-waterproof-western-boot/-/A-82078446",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-kids-legacy-32-western-boot/-/A-1003170198",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/rocky-kid-s-original-ride-flx-waterproof-brown-western-boot/-/A-82292491",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-bergen-rubber-rain-boot/-/A-1003169639",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-little-kids-legacy-32-waterproof-western-boot/-/A-1003172492",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-big-kids-legacy-32-western-boot/-/A-1003170125",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-infant-minnow-ankle-deck-boot/-/A-1003170233",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/rocky-ride-flx-boys-camo-waterproof-western-boot/-/A-82078363",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-tufs-big-kids-ankle-deck-boot/-/A-1003164408",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-big-kids-shyloh-western-boot/-/A-1003144372",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-little-kids-apex-winter-boot/-/A-1003172140",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-hale-boot/-/A-1003170788",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-big-kids-apex-tall-winter-boot/-/A-1003170046",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-little-kids-legacy-32-western-boot/-/A-1003164557",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-kids-legacy-32-waterproof-western-boot/-/A-1003171708",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-big-kids-ankle-deck-boot/-/A-1003170065",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-big-kids-legacy-32-waterproof-western-boot/-/A-1003172467",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-big-kids-legacy-32-waterproof-western-boot/-/A-1003171825",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-tufs-big-kids-ankle-deck-boot/-/A-1003164465",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-rugged-ii-boot/-/A-1003171744",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-tufs-big-kids-ankle-deck-boot/-/A-1003170310",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-ankle-deck-boot/-/A-1003164338",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-tufs-big-kids-ankle-deck-boot/-/A-1003169021",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-spike-little-kid-waterproof-400g-insulated-rubber-boot/-/A-1003170904",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-little-kids-ankle-deck-boot/-/A-1003171291",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-tufs-little-kids-ankle-deck-boot/-/A-1003164400",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-mossy-oak-break-up-rover-ii-boot/-/A-1003169883",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-tufs-big-kids-ankle-deck-boot/-/A-1003171765",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-realtree-edge-rugged-ii-boot/-/A-1003163495",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-ankle-deck-boot/-/A-1003164352",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-little-kids-outscape-pull-on-boot/-/A-1003169916",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-chore-classic-boot/-/A-1003170529",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-big-kids-apex-tall-winter-boot/-/A-1003170054",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-red-line-kids-western-boot/-/A-1003170936",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-little-kids-apex-tall-winter-boot/-/A-1003170957",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-big-kids-ankle-deck-boot/-/A-1003169125",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-little-kids-ankle-deck-boot/-/A-1003172305",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-big-kids-ankle-deck-boot/-/A-1003163439",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-georgia-boot-little-kids-athens-superlyte-pull-on-boot/-/A-1003163916",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-georgia-boot-big-kids-romeo-superlyte-shoe/-/A-1003172178",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-georgia-boot-little-kids-superlyte-pull-on-boot/-/A-1003169793",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-little-kids-outscape-pull-on-boot/-/A-1003172477",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-little-kids-outscape-pull-on-boot/-/A-1003171875",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-big-kids-outscape-pull-on-boot/-/A-1003172746",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-hale-boot/-/A-1003171021",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-big-kids-outscape-pull-on-boot/-/A-1003172837",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-hale-boot/-/A-1003170090",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-kid-s-monocrepe-western-boot/-/A-1003172944",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-kid-s-monocrepe-western-boot/-/A-1003172331",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-georgia-boot-big-kids-romeo-superlyte-pull-on-boot/-/A-1003164151",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-georgia-boot-big-kids-athens-superlyte-pull-on-boot/-/A-1003170597",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-big-kid-s-monocrepe-western-boot/-/A-1003172367",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-big-kid-s-monocrepe-western-boot/-/A-1003172975",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-element-boot/-/A-1003170842",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-element-boot/-/A-1003163751",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-rugged-ii-boot/-/A-1003172112",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-rugged-ii-boot/-/A-1003172924",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-realtree-edge-element-boot/-/A-1003171026",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-kids-spike-waterproof-snake-boot/-/A-1003164925",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Boots",
      "filters": {
        "type": "Sock Boots"
      }
    },
    {
      "url": "https://www.target.com/p/disney-stitch-dual-sizes-slippers-toddler-little-kids/-/A-86922676",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Slippers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sock Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/pj-masks-little-kids-head-on-top-gekko-socktop-slippers/-/A-1004218596",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Slippers",
      "filters": {
        "type": "Sock Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/star-wars-kids-indoor-chewbacca-full-body-costume-cosplay-slippers/-/A-1004043634",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Slippers",
      "filters": {
        "type": "Sock Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/paw-patrol-toddler-slippers-blue/-/A-91341515",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Slippers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sock Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/star-wars-little-kids-indoor-character-full-body-costume-cosplay-slippers/-/A-1004207142",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Slippers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sock Slippers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-girl-sock-shoes-tulle-trim-beige/-/A-92158574",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-girl-first-walk-sock-shoes-lace-trim-off-white/-/A-89338947",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-girl-sock-shoes-snow-white/-/A-91241820",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-boy-girl-first-walk-sock-shoes-cable-knit-brandy-rose/-/A-1000901640",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-baby-girl-first-walk-sock-shoes-mermaid/-/A-89299558",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-baby-girl-first-walk-sock-shoes-pineapple/-/A-89299538",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-girl-first-walk-sock-shoes-flat-style-flat-pompom-white/-/A-89299283",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-boy-girl-first-walk-sock-shoes-flat-snow-lace/-/A-1000902242",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-girl-first-walk-sock-shoes-daisie-latte/-/A-89335087",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-sock-shoes-combo-set-first-walker-baby-shoes-flat-and-sneaker-pink/-/A-1004784715",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-girl-first-walk-sock-shoes-flat-sweet-latte-lace/-/A-1000902016",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-sock-shoes-combo-set-first-walker-baby-shoes-snow-white-t-strap-size/-/A-1004813250",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-first-walk-sock-shoes-runner-black/-/A-89338354",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-baby-boy-girl-first-walk-sock-shoes-little-lamb/-/A-89299542",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-sock-shoes-combo-set-first-walker-baby-shoes-flat-and-sneaker-navy/-/A-1004717968",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-baby-girl-first-walk-sock-shoes-flat-style-black-white-stripe/-/A-89228353",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-boy-girl-first-walk-sock-shoes-flat-style-solid-colors/-/A-89219597",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-baby-boy-girl-first-walk-sock-shoes-penguin/-/A-89299621",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-boy-girl-first-walk-sock-shoes-mini-bear/-/A-89299639",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-boy-girl-first-walk-sock-shoes-flat-style-color-block-olive/-/A-89335689",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-combo-flat-navy-sneakers-navy-size-5/-/A-1004717967",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-sock-shoes-combo-set-first-walker-baby-shoes-walker-simple-black/-/A-1004784749",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/komuello-toddler-sock-shoes-combo-set-first-walker-baby-shoes-flat-brown-stripe-runner-brown/-/A-1004812869",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Sock Sneakers",
      "filters": {
        "type": "Sock Sneakers"
      }
    },
    {
      "url": "https://www.target.com/p/laura-ashley-flower-design-flats-toddler/-/A-86925115",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, T-Strap Sandals",
      "filters": {
        "type": "T-Strap Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-girls-riptide-k-flip-flop/-/A-1001633628",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Thong Sandals",
      "filters": {
        "type": "Thong Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-adventurer-water-shoes/-/A-1003190026",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-espadrille-beach-and-water-shoes/-/A-1003196621",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-girls-teddy-slip-on-water-shoes-cat-38-jack-8482-coral-pink/-/A-94090777",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-teddy-slip-on-water-shoes-cat-jack/-/A-92680337",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-austen-water-shoes-cat-38-jack-8482-purple/-/A-92781767",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-micah-adventure-sandals-cat-jack/-/A-92605726",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/lands-end-toddlers-adventurer-water-shoes/-/A-1003190146",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-grover-slip-on-water-shoes-cat-38-jack-8482/-/A-92827485",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-atlas-closed-toe-sandals-cat-jack/-/A-92605808",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-rowan-slip-on-water-shoes-cat-38-jack-8482/-/A-92758712",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/big-kids-berkley-adventure-water-shoes-all-in-motion/-/A-92605919",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-toddler-and-kids-girl-sandal-and-water-shoe-polka-dot/-/A-86502816",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-toddler-and-kids-girl-sandal-and-water-shoe-hawaiian-print/-/A-86502796",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-toddler-and-kids-girl-sandal-and-water-shoe-pink-palm-leaf/-/A-86502772",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-toddler-and-kids-girl-sandal-and-water-shoe-pineapple/-/A-86502736",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-infant-toddler-and-kids-girl-sandal-and-water-shoe-daisy/-/A-86502710",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/jeffrico-girls-water-shoes-anti-slip-kids-water-shoes-outdoor-beach-swim/-/A-1004034431",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-corbin-water-shoes-sun-squad-8482/-/A-93639958",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-kids-and-adult-water-shoes-for-sports-yoga-beach-and-outdoors-solid-hot-pink/-/A-82832580",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-kids-and-adult-water-shoes-for-sports-yoga-beach-and-outdoors-flamingo/-/A-82832563",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-kids-and-adult-water-shoes-for-sports-yoga-beach-and-outdoors-leopard/-/A-82832603",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/disney-stitch-angel-girls-dual-sizes-watershoes-toddler-little-kids/-/A-1001036256",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-hartley-water-shoes-sun-squad-8482/-/A-93639960",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/native-shoes-kids-jefferson-slip-on-shoe-great-for-pools-beaches-water-parks-more/-/A-1003617090",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-kids-and-adult-water-shoes-for-sports-yoga-beach-and-outdoors-paisley-punch/-/A-82832527",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/speedo-kids-beach-bootie-blocky-burst-neon-violet/-/A-94492330",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/speedo-kids-beach-bootie-neon-shark/-/A-94492333",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/joybees-kids-dylan-slip-on-clog/-/A-89699006",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-kids-and-adult-water-shoes-for-sports-yoga-beach-and-outdoors-solid-black/-/A-82832525",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-kids-and-adult-water-shoes-for-sports-yoga-beach-and-outdoors-solid-navy/-/A-82832598",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-kids-and-adult-water-shoes-for-sports-yoga-beach-and-outdoors-dolphins/-/A-82832578",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-kids-and-adult-water-shoes-for-sports-yoga-beach-and-outdoors-heather-charcoal/-/A-82832565",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-kids-and-adult-water-shoes-for-sports-yoga-beach-and-outdoors-sandy-beach/-/A-82832541",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-kids-and-adult-water-shoes-for-sports-yoga-beach-and-outdoors-sunset/-/A-82832554",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-kids-and-adult-water-shoes-for-sports-yoga-beach-and-outdoors-sea-turtle/-/A-82832596",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-kids-and-adult-water-shoes-for-sports-yoga-beach-and-outdoors-coral-reef/-/A-82832576",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/hudson-baby-kids-and-adult-water-shoes-for-sports-yoga-beach-and-outdoors-heather-gray/-/A-82832589",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/speedo-kids-shore-explorer-water-shoes-blue/-/A-94567377",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/speedo-kids-printed-shore-explore-nelly-mermaid-scale-water-shoes-pink/-/A-94567379",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/green-sprouts-baby-toddler-water-socks/-/A-89371211",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/green-sprouts-baby-toddler-water-shoes/-/A-89371214",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Water Shoes, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Water Shoes"
      }
    },
    {
      "url": "https://www.target.com/p/kids-buckle-platform-footbed-sandals-art-class-beige/-/A-93654990",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Wedge Sandals",
      "filters": {
        "type": "Wedge Sandals"
      }
    },
    {
      "url": "https://www.target.com/p/kids-montana-western-boots-cat-jack/-/A-92605725",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-memphis-western-boots-cat-jack/-/A-92605680",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-dallas-glitter-western-boots-cat-jack-gold/-/A-94308616",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-emberly-embroidered-western-boots-art-class-ivory/-/A-94308755",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-elma-studded-western-boots-art-class-tan/-/A-94308753",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/durango-girls-kid-pink-rhinestone-western-boot/-/A-82292667",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-infant-girls-sabine-t-western-bootie/-/A-1000117081",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kensie-girl-zip-up-boot-with-a-heel-little-kids/-/A-86923647",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/badgley-mischka-girls-dressy-western-cowboy-boots-with-rhinestones-jeweled-little-kids-big-kids/-/A-87891615",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kensie-girl-zip-up-boot-with-heel-toddler/-/A-86923402",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kensie-girl-toddler-zip-up-boot-with-a-heel/-/A-86923679",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kensie-girl-cowgirl-boots-little-kids/-/A-87891575",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kensie-girl-little-kids-cowgirl-boots-with-stitched-details/-/A-86924518",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kensie-girl-zip-up-boot-with-a-heel-little-kids/-/A-86923367",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/a-leading-role-premium-blue-metallic-boots/-/A-92610044",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/a-leading-role-premium-gold-sparkle-boots-13-1/-/A-92609880",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/blowfish-malibu-youth-girl-s-starling-kids-western-boot/-/A-1004056984",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/toddler-toy-story-boots-brown/-/A-92605570",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-rebel-by-durango-kids-gator-emboss-red-western-boot-dbt0233-red/-/A-82292773",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/georgia-boot-carbo-tec-lt-boys-brown-pull-on-saddle-boot/-/A-82056430",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lil-durango-big-kids-rodeo-brown-western-boot/-/A-88694045",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lil-durango-big-kids-briar-red-western-boot/-/A-1002733604",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-durango-kid-s-patriotic-western-flag-boot/-/A-82078487",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-big-kids-ride-flx-western-boot/-/A-82078359",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/georgia-boot-carbo-tec-lt-toddler-boys-brown-pull-on-saddle-boot/-/A-81959295",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/rocky-kids-ride-flx-western-boot-rkw0257-brown/-/A-82078504",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-rebel-by-durango-kids-distressed-flag-western-boot/-/A-82292560",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-brown-rocky-ride-flx-western-boot/-/A-82078479",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-durango-boys-tan-black-western-boot/-/A-82078644",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/little-kid-durango-western-boot-bt568-pink-rhinestone/-/A-82292545",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-durango-toddler-boys-tan-black-western-boot/-/A-82078656",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/deer-stags-kids-ranch-cowboy-boot/-/A-87150606",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-durango-western-boot-bt386-purple/-/A-82292597",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-lil-rebel-pro-little-kid-s-acorn-black-onyx-western-boots/-/A-92866590",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-durango-western-boot-bt287-pink/-/A-82292617",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-lil-rebel-pro-little-kids-coffee-and-bone-western-boot/-/A-92866507",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-durango-kids-texas-flag-western-boot/-/A-82292684",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-lil-rebel-pro-little-kid-s-amethyst-western-boot/-/A-92866692",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lil-rebel-by-durango-big-kid-western-boot/-/A-92866510",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-rebel-by-durango-kids-western-boot-dbt0208y-desert-camo/-/A-87461602",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lil-rebel-by-durango-little-kid-western-boot/-/A-92866511",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-rebel-by-durango-kids-western-boot-dbt0159-patriotic/-/A-87461572",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-lil-rebel-pro-big-kids-acorn-black-onyx-western-boot/-/A-92866638",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-durango-kids-western-boot-dwbt052-blue/-/A-87363936",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lil-rebel-by-durango-big-kids-mexican-flag-western-boot/-/A-92867107",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-big-kids-shyloh-western-boot/-/A-1003272234",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lil-durango-little-kid-let-love-fly-western-boot/-/A-93486654",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-rocky-kids-ride-flx-western-boot/-/A-82078494",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lil-rebel-by-durango-little-kids-mexican-flag-western-boot/-/A-92867103",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-rebel-by-durango-kids-western-boot-dbt0160-patriotic/-/A-87461569",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-lil-rebel-pro-big-kid-s-red-western-boot/-/A-92345456",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/durango-lil-rebel-pro-kid-s-western-boots-dbt0218c-blue/-/A-1001949489",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-lil-jolene-kids-rainboots/-/A-1002441051",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-lil-rebel-pro-big-kids-coffee-and-bone-western-boot/-/A-92406706",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-lil-rebel-pro-big-kid-s-trail-brown-and-white-western-boot/-/A-92866723",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-little-kids-shyloh-western-boot/-/A-1003272389",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-lil-rebel-pro-little-kid-s-red-western-boot/-/A-92345856",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kid-s-durango-lil-rebel-pro-western-boot-dbt0219-brown/-/A-87361733",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-little-kids-shyloh-western-boot/-/A-1003272400",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-lil-rebel-pro-little-kid-s-trail-brown-and-white-western-boot/-/A-92866400",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-lil-rebel-pro-little-kids-dark-chestnut-bubble-gum-western-boot/-/A-92866616",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lil-rebel-by-durango-little-kids-brown-tan-western-boot/-/A-92866825",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lil-rebel-by-durango-big-kids-dark-chestnut-bubblegum-western-boot/-/A-92866597",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lil-durango-big-kid-let-love-fly-western-boot/-/A-93486671",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lil-rebel-by-durango-big-kids-brown-tan-western-boot/-/A-92866733",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-durango-lil-rebel-pro-big-kid-s-lime-western-boot/-/A-92866930",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lil-rebel-by-durango-big-kids-army-western-boot/-/A-1001951823",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-durango-kids-western-boot-dwbt053-blue/-/A-1003271417",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kid-s-durango-lil-rebel-pro-western-boot-dbt0219-brown/-/A-1001951487",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/durango-lil-rebel-pro-kid-s-western-boot-dbt0218y-blue/-/A-1001949526",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lil-rebel-by-durango-little-kids-distressed-flag-western-boot/-/A-82292551",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Western Boots",
      "filters": {
        "type": "Western Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bebe-girl-s-fashion-chelsea-boots-ankle-shoes-for-kids-with-back-quilted-collar/-/A-1000993281",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-fur-snow-boots-y13/-/A-1002519272",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-kids-katya-youth-boots/-/A-93458791",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-kids-elle-boots/-/A-80326999",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/laura-ashley-girls-cowgirl-boots-little-kids-toddler/-/A-87664283",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-kids-retro-larisa-youth-boots/-/A-93458778",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-kids-elle-tall-boots/-/A-80327029",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-toddler-katya-toddler-boots/-/A-93458575",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-toddler-jasmine-toddler-boots/-/A-93458296",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-frost-insulated-waterproof-snow-boots/-/A-1001206111",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-unicorn-print-with-rainbow-fur-snow-boots-y12/-/A-1002362285",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-toddler-isabelle-toddler-boots/-/A-93458354",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-rainbow-fur-snow-boots-y12/-/A-1002452083",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-rainbow-fur-snow-boots-y2/-/A-1002519273",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-unicorn-print-with-rainbow-fur-snow-boots-t9/-/A-1002399564",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-toddler-elle-zipper-boots/-/A-80326916",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-unicorn-print-with-rainbow-fur-snow-boots-y11/-/A-1002362280",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-unicorn-print-with-rainbow-fur-snow-boots-t7/-/A-1002399572",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-unicorn-print-with-rainbow-fur-snow-boots-t8/-/A-1002445849",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-unicorn-print-with-rainbow-fur-snow-boots-t10/-/A-1002519269",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-unicorn-print-with-rainbow-fur-snow-boots-t6/-/A-1002399574",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bearpaw-kids-jasmine-youth-boots/-/A-93458358",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-fur-snow-boots-j5/-/A-1002445959",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/lands-end-toddlers-frost-insulated-waterproof-snow-boots/-/A-1001206114",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-rainbow-fur-snow-boots-y11/-/A-1002519271",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-fur-snow-boots-j6/-/A-1002445958",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-fur-snow-boots-j4/-/A-1002452082",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-fur-snow-boots-y1/-/A-1002452076",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-metallic-hearts-and-stars-print-snow-boots-y12/-/A-1002283659",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-fur-snow-boots-y2/-/A-1002445850",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-fur-snow-boots-y11/-/A-1002452084",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-fur-snow-boots-y3/-/A-1002445853",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-rainbow-fur-snow-boots-j7/-/A-1002452080",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-metallic-hearts-and-stars-print-snow-boots-t9/-/A-1002283785",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-fur-snow-boots-j7/-/A-1002445855",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-metallic-hearts-and-stars-print-snow-boots-y13/-/A-1002283661",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-fur-snow-boots-y12/-/A-1002445854",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-toggle-snow-boot-t9/-/A-1002313270",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-metallic-hearts-and-stars-print-snow-boots-t8/-/A-1002348434",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-floral-print-snow-boots-y13/-/A-1002257985",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-toggle-snow-boot-y13/-/A-1002293116",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-toggle-snow-boot-y3/-/A-1002289501",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-floral-print-snow-boots-y3/-/A-1002256012",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-floral-print-snow-boots-t8/-/A-1002265930",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-floral-print-snow-boots-y1/-/A-1002257984",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-floral-print-snow-boots-y2/-/A-1002257982",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-floral-print-snow-boots-t9/-/A-1002257987",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-metallic-hearts-and-stars-print-snow-boots-t6/-/A-1002289489",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-floral-print-snow-boots-y11/-/A-1002257983",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-metallic-hearts-and-stars-print-snow-boots-y3/-/A-1002283657",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-rainbow-fur-snow-boots-j4/-/A-1002452085",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-metallic-hearts-and-stars-print-snow-boots-t5/-/A-1002348451",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-floral-print-snow-boots-y12/-/A-1002257986",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-floral-print-snow-boots-t7/-/A-1002362279",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-floral-print-snow-boots-t5/-/A-1002283660",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-metallic-hearts-and-stars-print-snow-boots-y11/-/A-1002348446",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-rainbow-fur-snow-boots-j6/-/A-1002452086",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-toggle-snow-boot-y11/-/A-1002309252",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-floral-print-snow-boots-t6/-/A-1002345120",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-metallic-hearts-and-stars-print-snow-boots-t10/-/A-1002289541",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-black-floral-print-snow-boots-t10/-/A-1002283658",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/aquakix-pink-metallic-hearts-and-stars-print-snow-boots-t7/-/A-1002286614",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-york-solid/-/A-1001306928",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/arctix-kids-powder-winter-boot-purple-9-toddler-in-purple/-/A-88200395",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-york-camo/-/A-1001306933",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-york-jurassic-dino/-/A-1001306821",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-york-groovy-rainbow/-/A-1001306658",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-hale-boot/-/A-1000950701",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/bogs-footwear-york-winter-mountain/-/A-1001306614",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-element-boot/-/A-1001044900",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-rugged-ii-boot/-/A-1001023454",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-element-boot/-/A-1001009631",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/kids-kids-element-boot/-/A-1001009663",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/beverly-hills-polo-club-toddler-boys-casual-boots/-/A-86923521",
      "tags": "Girls’ Shoes, Kids’ Shoes, Shoes, Winter Boots, Toddler Boys’ Shoes, Toddler Shoes",
      "filters": {
        "type": "Winter Boots"
      }
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-bright-red-kids-hoodie-fleece-onesie/-/A-90175812",
      "tags": "Footed Pajamas, Girls’ Clothing, Kids’ Clothing, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Footed Pajamas"
      }
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-cheetah-spots-kids-hoodie-chenille-onesie/-/A-90100657",
      "tags": "Footed Pajamas, Girls’ Clothing, Kids’ Clothing, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Footed Pajamas"
      }
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-navy-pink-polka-kids-hoodie-chenille-onesie/-/A-90100719",
      "tags": "Footed Pajamas, Girls’ Clothing, Kids’ Clothing, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Footed Pajamas"
      }
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-winter-wonderland-kids-fleece-onesie/-/A-90177316",
      "tags": "Footed Pajamas, Girls’ Clothing, Kids’ Clothing, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Footed Pajamas"
      }
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-tis-the-season-kids-hoodie-fleece-onesie/-/A-90549129",
      "tags": "Footed Pajamas, Girls’ Clothing, Kids’ Clothing, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Footed Pajamas"
      }
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-its-a-snow-day-kids-fleece-onesie/-/A-90177338",
      "tags": "Footed Pajamas, Girls’ Clothing, Kids’ Clothing, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Footed Pajamas"
      }
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-winter-wonderland-kids-hoodie-fleece-onesie/-/A-89963806",
      "tags": "Footed Pajamas, Girls’ Clothing, Kids’ Clothing, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Footed Pajamas"
      }
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-bright-red-kids-fleece-onesie/-/A-90177313",
      "tags": "Footed Pajamas, Girls’ Clothing, Kids’ Clothing, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Footed Pajamas"
      }
    },
    {
      "url": "https://www.target.com/p/footed-pajamas-howling-moon-kids-hoodie-chenille-onesie/-/A-90099962",
      "tags": "Footed Pajamas, Girls’ Clothing, Kids’ Clothing, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Footed Pajamas"
      }
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-footed-fleece-sleeper/-/A-88480620",
      "tags": "Footed Pajamas, Girls’ Clothing, Kids’ Clothing, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Footed Pajamas"
      }
    },
    {
      "url": "https://www.target.com/p/leveret-kids-footed-girls-striped-cotton-pajamas/-/A-89604300",
      "tags": "Footed Pajamas, Girls’ Clothing, Kids’ Clothing, Pajamas, One Piece Pajamas, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Footed Pajamas"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-disney-snow-white-dress-up-nightgown-blue-yellow/-/A-89385718",
      "tags": "Girls’ Clothing, Kids’ Clothing, Nightgowns, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Nightgowns"
      }
    },
    {
      "url": "https://www.target.com/p/big-girls-harry-potter-pajama-nightgown-sleep-shirt/-/A-84628555",
      "tags": "Girls’ Clothing, Kids’ Clothing, Nightgowns, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Nightgowns"
      }
    },
    {
      "url": "https://www.target.com/p/miraculous-tales-of-ladybug-cat-noir-girls-nightgown-sleep-pajama-shirt-multicolored/-/A-89131755",
      "tags": "Girls’ Clothing, Kids’ Clothing, Nightgowns, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Nightgowns"
      }
    },
    {
      "url": "https://www.target.com/p/dc-comics-little-girls-wonder-woman-costume-pajama-nightgown-multi/-/A-85071918",
      "tags": "Girls’ Clothing, Kids’ Clothing, Nightgowns, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Nightgowns"
      }
    },
    {
      "url": "https://www.target.com/p/girls-tangled-rapunzel-nightgown-purple/-/A-94222620",
      "tags": "Girls’ Clothing, Kids’ Clothing, Nightgowns, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Nightgowns"
      }
    },
    {
      "url": "https://www.target.com/p/barbie-girls-nightgown-pajamas/-/A-87572172",
      "tags": "Girls’ Clothing, Kids’ Clothing, Nightgowns, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Nightgowns"
      }
    },
    {
      "url": "https://www.target.com/p/harry-potter-girls-nightgown-pajamas-toddler-to-big-kid/-/A-88579410",
      "tags": "Girls’ Clothing, Kids’ Clothing, Nightgowns, Pajamas, One Piece Pajamas",
      "filters": {
        "type": "Nightgowns"
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
