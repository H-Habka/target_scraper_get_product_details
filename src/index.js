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
      url: "https://www.target.com/p/deux-par-deux-boy-parachute-cargo-pocket-shorts-royal-blue/-/A-1003636010",
      tags: "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      filters: {},
    },
    {
      url: "https://www.target.com/p/star-wars-tie-fighter-darth-vader-french-terry-2-pack-shorts-black-grey/-/A-87358948",
      tags: "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      filters: {},
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-the-flash-superman-batman-french-terry-3-pack-shorts-little-kid-to-big-kid/-/A-87290649",
      tags: "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      filters: {},
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-venom-french-terry-3-pack-shorts-little-kid-to-big-kid/-/A-87361580",
      tags: "Bottoms, Boys’ Clothing, Kids’ Clothing, Shorts",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-stretch-skinny-fit-jeans-cat-jack/-/A-82271724",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-stretch-straight-fit-jeans-cat-38-jack-8482-medium-wash/-/A-94594897",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-straight-fit-stretch-jeans-cat-jack/-/A-86932592",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-stretch-straight-fit-jeans-cat-jack-khaki-wash/-/A-93885172",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-athletic-straight-pull-on-pants-cat-jack/-/A-87985363",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-super-stretch-slim-jeans-cat-jack/-/A-87842196",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-baggy-jeans-cat-jack/-/A-94412335",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-adaptive-jeans-cat-38-jack-8482/-/A-94600602",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-adaptive-jeans-cat-jack-light-wash/-/A-85404497",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-adaptive-jeans-cat-jack-medium-wash/-/A-85404393",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-super-skinny-pull-on-jeans-art-class/-/A-88279959",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-mid-rise-relaxed-fit-carpenter-jeans-art-class/-/A-94430357",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-mid-rise-baggy-jeans-art-class/-/A-94430359",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-skinny-jeans-art-class-8482/-/A-88255627",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/levi-s-boys-511-slim-fit-performance-jeans/-/A-81999963",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/levi-s-boys-514-straight-fit-performance-jeans/-/A-86483136",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/levi-39-s-174-boys-39-510-skinny-fit-everyday-performance-jeans/-/A-89081703",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/levi-s-boys-classic-fit-baggy-jeans/-/A-94300119",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/levi-39-s-174-boys-39-511-slim-fit-performance-jeans-black-wash/-/A-94417023",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/levi-s-boys-514-straight-fit-performance-jeans-tan/-/A-94502470",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/lands-end-kids-iron-knee-stretch-pull-on-jeans/-/A-87671151",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/ruggedbutts-medium-wash-denim-jeans/-/A-87828587",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boy-s-5-pockets-twill-slim-pants-mayoral/-/A-1003530577",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boy-s-twill-5pocket-slim-pants-mayoral/-/A-1003530662",
      tags: "Bottoms, Boys’ Clothing, Jeans, Kids’ Clothing",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-printed-athletic-t-shirt-all-in-motion/-/A-93111702",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-polo-shirt-all-in-motion/-/A-94471825",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-ventilated-pocket-t-shirt-all-in-motion/-/A-89570301",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-2pk-core-short-sleeve-t-shirt-all-in-motion/-/A-87460580",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/rokka-rolla-boy-s-faux-shearling-jacket-fleece-hooded-coat/-/A-90284116",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mizuno-youth-boy-s-diamond-long-sleeve-crew/-/A-75505244",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/lands-end-kids-high-pile-lined-zip-hoodie/-/A-87568978",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/lands-end-kids-mid-weight-fleece-jacket/-/A-86740028",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-raglan-tank-top-all-in-motion-8482/-/A-93297140",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-raglan-active-t-shirt-all-in-motion-8482/-/A-93297136",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-t-shirt-all-in-motion/-/A-93297130",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-wave-graphic-t-shirt-all-in-motion-8482/-/A-93111700",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-textured-golf-polo-shirt-all-in-motion/-/A-91274463",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-graphic-t-shirt-all-in-motion/-/A-94471835",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-4th-of-july-t-shirt-all-in-motion-8482/-/A-94371395",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-39-power-forward-39-graphic-t-shirt-all-in-motion-8482-black/-/A-93111701",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-adventure-160-shirt-all-in-motion-8482/-/A-93297142",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-adventure-shirt-all-in-motion/-/A-94471824",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-resort-shirt-all-in-motion-8482/-/A-94148403",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-4th-of-july-tank-top-all-in-motion-8482/-/A-94334869",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-4th-of-july-golf-polo-shirt-all-in-motion-8482/-/A-94334875",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-printed-striped-polo-shirt-all-in-motion/-/A-94749677",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-long-sleeve-upf-t-shirt-all-in-motion-8482/-/A-94369611",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-athletic-sleeveless-t-shirt-all-in-motion-white/-/A-90025123",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-minecraft-checkered-soccer-jersey-green/-/A-94365179",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-formula-1-soccer-jersey-white/-/A-94408551",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-bluey-baseball-jersey/-/A-93623637",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-super-man-soccer-jersey-white/-/A-94431035",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/converse-boys-short-sleeve-baseball-athletic-t-shirt-black/-/A-92289980",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-spider-man-baseball-jersey/-/A-93623628",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-sonic-the-hedgehog-baseball-jersey/-/A-93623627",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-messi-short-sleeve-graphic-t-shirt-black/-/A-91859821",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-messi-10-signature-short-sleeve-graphic-t-shirt-white/-/A-91616714",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-messi-goat-short-sleeve-graphic-t-shirt-pink/-/A-91859822",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-sponge-bob-baseball-jersey/-/A-93623629",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mizuno-youth-boy-s-mizuno-alpha-stretch-sleeve-crew/-/A-79131821",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/vapor-apparel-youth-upf-50-uv-sun-protection-solar-long-sleeve-rash-guard-swim-shirt/-/A-89017657",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/eg-pro-boys-3-pack-tank-tops-undershirts/-/A-1003642966",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mizuno-youth-mizuno-tee/-/A-79131609",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mizuno-youth-boy-s-1-4-zip-pullover/-/A-76141443",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mizuno-youth-boy-s-diamond-short-sleeve-crew/-/A-75514651",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mizuno-youth-long-sleeve-batting-jacket/-/A-79260660",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/amber-fight-gear-premium-durable-boxing-jersey-with-satin-finish-fabric-comfortable-stylish-training-gear-in-red-size-youth-medium/-/A-1001127030",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/amber-fight-gear-premium-durable-boxing-jersey-with-satin-finish-comfortable-stylish-training-gear-for-unmatched-performance-black-youth-large/-/A-1001126925",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/amber-fight-gear-premium-durable-boxing-jersey-with-satin-finish-fabric-stylish-training-gear-for-unmatched-performance-yellow-youth-large/-/A-1001127187",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/amber-fight-gear-premium-durable-boxing-jersey-with-satin-finish-fabric-comfortable-stylish-training-gear-for-unmatched-performance-pink-youth-large/-/A-1001127013",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/amber-fight-gear-premium-durable-boxing-jersey-with-satin-finish-comfortable-stylish-training-gear-for-unmatched-performance-black-youth-medium/-/A-1001126636",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mizuno-youth-mizuno-long-sleeve-baseball-hitting-jacket/-/A-93552499",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/eg-pro-boys-mesh-reversible-jersey-2-pack/-/A-1003337012",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mizuno-mizuno-youth-short-sleeve-hitting-jacket/-/A-93552505",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/converse-boys-logo-basketball-warm-up-jacket-blue/-/A-94300145",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-oversized-t-shirt-cat-jack/-/A-94445424",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-relaxed-fit-t-shirt-cat-38-jack-8482/-/A-94582922",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-mesh-baseball-jersey-button-down-shirt-little-kid-to-big/-/A-1000748799",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-mesh-soccer-jersey-t-shirt-little-kid-to-big/-/A-93968885",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/minecraft-mesh-hockey-jersey-long-sleeve-t-shirt-little-kid-to-big/-/A-1000866253",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-mesh-hockey-jersey-long-sleeve-t-shirt-little-kid-to-big/-/A-1000866247",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/starter-boys-arizona-hotshots-jersey/-/A-1004765346",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/g-iii-sports-boys-stallions-19-jersey/-/A-1004145208",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mafoose-youth-casual-short-sleeve-core-blend-jersey-knit-collar-polo-t-shirt/-/A-1003149895",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mafoose-youth-comfort-long-sleeve-stretch-moisture-wicking-rashguard-quick-dry-t-shirt/-/A-1002941029",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-marvel-spider-man-plaid-jacket-red-black/-/A-91464669",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-lightweight-fleece-quarter-zip-pullover/-/A-86739342",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-everest-flannel-long-sleeve-hooded-jacket-olive-scout/-/A-1001300333",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-fleece-zip-up-jacket-little-kid-to-big-kid/-/A-89807413",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/rokka-rolla-boys-high-pile-fleece-bomber-jacket/-/A-90284060",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/gioberti-boys-faux-shearling-lined-zip-up-fleece-hoodie-jacket/-/A-1000553250",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/gioberti-boys-full-zip-polar-fleece-jacket/-/A-93556320",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-fleece-zip-up-jacket-toddler-to-big-kid/-/A-89807320",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-little-boys-reversible-fleece-jackets/-/A-93406496",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mizuno-youth-boy-s-alpha-quest-jacket/-/A-80173725",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-x-large-12-new-school-colorblock/-/A-89743419",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mightly-kids-organic-cotton-print-lightweight-zip-up-pocket-hoodie-x-small-4-5-navy-tie-dye/-/A-90242842",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-large-10-navy/-/A-93360168",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-xx-large-14-new-school-colorblock/-/A-89743426",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/aeropostale-boys-1-4-zip-fleece-jacket/-/A-1004773461",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/london-fog-little-big-boys-reversible-high-pile-fleece-jackets/-/A-1002182775",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/gioberti-boys-zip-up-reversible-polar-fleece-heavy-jacket/-/A-93414762",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/lands-end-kids-reversible-fleece-puffer-jacket/-/A-93877954",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-boys-girls-lightweight-packable-rain-jacket-waterproof-hooded-raincoats-windproof-for-spring-fall-winter/-/A-91693184",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-fleece-quarter-zip/-/A-87678711",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/rokka-rolla-boys-high-pile-fleece-bomber-jacket/-/A-92698122",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/lands-end-kids-fleece-full-zip-jacket/-/A-89696456",
      tags: "Active Tops, Activewear, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-windbreaker-jacket-all-in-motion/-/A-94427243",
      tags: "Activewear, Athletic Jackets, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/rokka-rolla-boys-puffer-vest/-/A-1001814084",
      tags: "Activewear, Athletic Jackets, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-rain-jacket-all-in-motion/-/A-94501356",
      tags: "Activewear, Athletic Jackets, Boys’ Activewear",
      filters: {},
    },
    {
      url: "https://www.target.com/p/toddler-callan-performance-sneakers-all-in-motion/-/A-94268796",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/toddler-dannie-slip-on-performance-sneakers-all-in-motion/-/A-90430782",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/toddler-peyton-performance-sneakers-all-in-motion/-/A-90430786",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-ira-lace-up-performance-sneakers-all-in-motion/-/A-94268834",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-sutton-performance-sneakers-all-in-motion/-/A-94268839",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-dillon-slip-on-performance-sneakers-all-in-motion/-/A-90430712",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-39-6pk-liner-socks-all-in-motion-8482-white/-/A-93276915",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-39-6pk-no-show-socks-all-in-motion-8482-white/-/A-93276947",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-39-6pk-ankle-length-socks-all-in-motion-8482-white/-/A-93276928",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/toddler-toni-performance-sneakers-all-in-motion/-/A-90413944",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-tatum-comfort-slides-all-in-motion/-/A-92310281",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-avery-performance-sneakers-all-in-motion/-/A-90430749",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-6pk-ankle-socks-all-in-motion-8482-white-black/-/A-90898572",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/boys-39-6pk-crew-socks-all-in-motion-8482-black/-/A-90898571",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/girls-6pk-no-show-socks-all-in-motion-white/-/A-92878062",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/girls-39-6pk-no-show-socks-all-in-motion-8482/-/A-90898564",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-6pk-crew-socks-all-in-motion/-/A-89823447",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-6pk-ankle-socks-all-in-motion-black/-/A-84306125",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-6pk-super-no-show-socks-all-in-motion-colors-may-vary/-/A-81550821",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-6pk-no-show-athletic-socks-all-in-motion-black-white/-/A-79587653",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
    },
    {
      url: "https://www.target.com/p/kids-6pk-crew-socks-all-in-motion-black/-/A-79587655",
      tags: "All In Motion Boys’, Brand Experiences",
      filters: {},
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
