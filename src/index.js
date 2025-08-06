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
      url: "https://www.target.com/p/girls-39-uniform-polo-t-shirt-all-in-motion-8482/-/A-94579754",
      tags: "Athletic Polo Shirts, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Athletic Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-high-low-ruffle-tunic/-/A-93173628",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-knit-long-sleeve-ruffle-layering-tee/-/A-94069398",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, T-shirts, Tee Undershirts",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-embroidered-button-down-shirt-cat-jack-white/-/A-94131171",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-eyelet-top-cat-38-jack-8482/-/A-92974692",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-pointelle-t-shirt-cat-jack/-/A-94661693",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-scoop-neck-super-soft-t-shirt-art-class/-/A-93487782",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-short-sleeve-knit-top-with-tulip-sleeves-kids/-/A-90586013",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girls-ruffle-puff-sleeve-blouse-short-hollow-out-sleeve-t-shirt-round-neck-solid-casual-top/-/A-1002565407",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girls-cute-tops-peter-pan-collar-with-cute-bow-puff-short-sleeve-kids-fashion-shirts-summer-top-keyhole-tops-girls-blouse/-/A-92364672",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, T-shirts",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-jersey-tunic-with-embroidery-dark-old-pink/-/A-1004040329",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, Peasant Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-floral-long-full-sleeve-dress-cozmo/-/A-1002669242",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, T-shirts",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-organic-cotton-tunic-top-small-turquoise-flowers/-/A-1003325145",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, T-shirts",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-puff-sleeve-top-pink-and-white-checks/-/A-1003246903",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, T-shirts",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-seersucker-blouse-with-frills-pink-flowers-on-cream-background/-/A-1004049857",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-santa-mesh-top-sterling-kreek/-/A-1001537484",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-tunic-top-multicolored/-/A-1003326927",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, Peasant Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-sleeveless-top-with-front-tie-black-and-sparkling-pink/-/A-1003330426",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-flutter-sleeve-top-mia-s/-/A-1004223448",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girls-circle-printed-ruffle-tunic-copenhagen-delights/-/A-1000916164",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girls-floral-long-sleeve-blouse-petit-confection/-/A-1000916045",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-floral-long-sleeve-top-petit-confection/-/A-1001401254",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-cecilia-ruffle-collar-blouse-early-sunday/-/A-1002771398",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-magnolia-top-set-proper/-/A-1004473770",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, T-shirts",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-magnolia-top-set-proper/-/A-1004473755",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, T-shirts",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girls-cap-sleeve-top-petit-confection/-/A-1000916020",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-toddler-s-star-printed-chiffon-blouse-petit-confection/-/A-1001376767",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-toddler-s-eyelet-tunic-petit-confection/-/A-1001376715",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-flutter-sleeve-top-mia/-/A-1003278120",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, T-shirts",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paisley-print-tunic-petit-confection/-/A-1000916038",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-plus-short-sleeve-eyelet-ruffle-sleeve-top/-/A-88835184",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-smock-flutter-top/-/A-1002458737",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-eyelet-top/-/A-1002458567",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, Button Down Shirts",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-flutter-sleeve-tiered-peasant-top/-/A-91658601",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-smocked-woven-top/-/A-1002458584",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-high-low-ruffle-tunic/-/A-93173598",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girls-tie-front-knot-tops-with-ruffle-sleeve-plaid-tops-tie-front-blouse-short-sleeve-button-down-shirts-for-toddler-girls/-/A-92446753",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, Button Down Shirts",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-knit-ruffle-tiered-tunic/-/A-1004497872",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girl-waffle-knit-long-sleeve-bow-back-top/-/A-89954543",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, T-shirts",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-knit-ruffle-tiered-tunic/-/A-1004497862",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girls-puff-sleeve-blouse-round-neck-ruffle-sleeve-shirts-girls-shirts/-/A-93726314",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/strawberry-shortcake-berry-knit-top/-/A-92998450",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-short-sleeve-top-white/-/A-1003330448",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-smocked-long-sleeve-knit-shirt/-/A-1004939322",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-peyton-ribbed-velour-ruffle-top-vignette/-/A-1001251691",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-balloon-sleeve-top-good-girl/-/A-1001931307",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-ruffled-cotton-blouse-mayoral/-/A-1001251591",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/gender-neutral-fleur-chiffon-ruffle-blouse-grade-gather/-/A-1001050609",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-plaid-flannel-top-southern-grace/-/A-1000916408",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-tangled-v-neck-basics-shirt-southern-grace/-/A-1001354869",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-just-like-mama-lace-sleeve-top-southern-grace/-/A-1001355096",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bi-material-organic-cotton-top-with-puff-sleeve-pink-flowers-on-cream-background/-/A-1003328857",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-tunic-with-frill-and-print-yellow-and-flamingo/-/A-1004049822",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, Peasant Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-polly-ruffle-collar-blouse-set-proper/-/A-1004473721",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-ruffled-peter-pan-collar-knit-shirt/-/A-87825215",
      tags: "Button Down Shirts, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, Polo Shirts",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-peter-pan-blouse-puff-sleeve-button-down-shirt-school-uniform-blouse-3-12-years/-/A-1003249034",
      tags: "Button Down Shirts, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, Polo Shirts",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/ola-otter-relaxed-fit-shirt-tiger-tale-blue/-/A-1004191061",
      tags: "Button Down Shirts, Girls’ Clothing, Kids’ Clothing, Shirts & Polos, Tops, Polo Shirts",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/mafoose-youth-casual-short-sleeve-core-blend-jersey-knit-collar-polo-t-shirt/-/A-1003149895",
      tags: "Girls’ Clothing, Jerseys, Kids’ Clothing, Shirts & Polos, Tops, Polo Shirts",
      filters: {
        type: "Jerseys",
      },
    },
    {
      url: "https://www.target.com/p/clique-addison-youth-polo/-/A-86053930",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-interlock-polo-shirt/-/A-86739688",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-jersey-uniform-polo-shirt-cat-38-jack-8482-white/-/A-90221751",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-pique-uniform-polo-shirt-cat-jack/-/A-85251186",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-uniform-performance-polo-shirt-cat-38-jack-8482/-/A-94436197",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-interlock-uniform-polo-shirt-cat-jack/-/A-87922544",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-feminine-fit-interlock-polo-shirt/-/A-86739279",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops, T-shirts",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-co-ed-short-sleeve-pique-polo/-/A-92365141",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-feminine-fit-interlock-polo-shirt/-/A-86738601",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-interlock-uniform-polo-shirt-cat-jack/-/A-88923983",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-rapid-dry-polo-shirt/-/A-86739690",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-mesh-polo-shirt/-/A-86738997",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops, T-shirts",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-mesh-polo-shirt/-/A-86739181",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-girls-short-sleeve-polo-shirt/-/A-94708618",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-peter-pan-collar-polo-shirt/-/A-86739142",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-big-kids-short-sleeve-banded-bottom-polo-shirt/-/A-87885328",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-feminine-fit-rapid-dry-polo-shirt/-/A-1003951355",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-rapid-dry-polo-shirt/-/A-93009863",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-feminine-fit-rapid-dry-polo-shirt/-/A-1003944875",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-polo-shirts-5-pack-short-sleeve-cotton-uniform-shirts-for-school-casual-daily-wear/-/A-1004866492",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-husky-short-sleeve-interlock-polo-shirt/-/A-1004219808",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-frankie-long-sleeve-polo-shirt-6y-olive-scout/-/A-1001300191",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-rodney-long-sleeve-polo-shirt-6y-olive-scout/-/A-1001300143",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/castore-mclaren-f1-kids-2025-lando-norris-drivers-polo-shirt/-/A-1002258783",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/red-bull-racing-f1-kid-s-2024-sergio-checo-perez-team-polo-shirt/-/A-92157662",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/automobili-lamborghini-squadra-corse-kids-team-polo-shirt/-/A-1003649645",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/castore-alpine-racing-f1-2025-kids-team-polo-shirt/-/A-1002618128",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/castore-mclaren-f1-kids-2025-oscar-piastri-team-drivers-polo-shirt/-/A-1002258585",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops, T-shirts",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/castore-red-bull-racing-f1-kid-s-2025-max-verstappen-team-polo-shirt/-/A-1002208397",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops, T-shirts",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girl-s-4-pack-short-sleeve-soft-jersey-polo-uniform-shirts/-/A-92942211",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girl-s-4-pack-long-sleeve-soft-jersey-polo-uniform-shirts/-/A-93003130",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/castore-red-bull-racing-f1-kid-s-2025-team-polo/-/A-1002208352",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-single-pack-long-sleeve-pique-polo/-/A-1002508585",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-peter-pan-collar-polo-shirt/-/A-86739170",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-interlock-polo-shirt/-/A-86738598",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/red-bull-racing-f1-kids-2024-special-edition-america-race-team-polo-shirt/-/A-92043563",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/gender-neutral-s-starboard-polo-shirt-me-henry/-/A-1001177765",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/gender-neutral-flagstaff-polo-shirt-me-henry/-/A-1001177679",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/red-bull-racing-f1-kid-s-2024-max-verstappen-team-polo-shirt/-/A-93226700",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-polo-soft-jersey-peter-pan-collar-girls-puff-short-sleeve-tee/-/A-92899738",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-co-ed-long-sleeve-pique-polo/-/A-92338823",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-puff-sleeve-jersey-knit-polo-kids/-/A-1001299013",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-co-ed-short-sleeve-interlock-polo/-/A-92365977",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girl-ecosmart-jersey-polo-stylish-and-unique-style-2-pack/-/A-1003112094",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/red-bull-racing-f1-kid-s-2024-team-polo/-/A-92427574",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-jersey-peter-pan-collar-short-sleeve-puff-tee/-/A-92899742",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops, T-shirts",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/ola-otter-relaxed-fit-shirt-mixed-fruit-multicoloured/-/A-1004191067",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-stripe-rugby-shirt/-/A-1004890887",
      tags: "Girls’ Clothing, Kids’ Clothing, Polo Shirts, Shirts & Polos, Tops",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-cardigan-sweater/-/A-86738581",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-long-uniform-cardigan-cat-jack/-/A-84938046",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-long-sleeve-ribbed-cardigan-sweater-cat-38-jack-8482/-/A-94472219",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-button-front-sweater-vest-cat-38-jack-8482/-/A-94472220",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-crew-neck-cable-uniform-cardigan-sweater-cat-jack/-/A-84938066",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-pointelle-cardigan-cat-38-jack-8482/-/A-94472253",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-long-sleeve-pointelle-cardigan-cat-38-jack-8482/-/A-92596121",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-button-front-cardigan-sweater-cat-38-jack-8482/-/A-90532627",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-long-sleeve-halloween-cardigan-sweater-cat-38-jack-8482-black/-/A-94472215",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-co-ed-v-neck-sweater-cardigan/-/A-92657805",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-bottom-down-sweater/-/A-94072144",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops, Pullover Sweaters",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-pink-bottom-down-sweater/-/A-94041144",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-girls-ombre-stripe-cardigan/-/A-93590642",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-co-ed-mock-neck-zip-front-sweater/-/A-92657866",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-button-front-cable-cardigan/-/A-87686433",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-scallop-detail-cardigan-sweater-kids/-/A-1000872830",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-cardigan-sweaters-open-front-cable-knit-chunky-cardigans-kids-oversized-cute-outerwear-coat/-/A-1002723693",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-cable-knit-sweater-cardigan-front-button-cardigan-with-side-pockets-above-knee-cardigan-for-girls-winter-knitwear/-/A-1001378403",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-open-front-cardigan-long-sleeve-knit-sweaters-kids-lightweight-cute-casual-loose-outerwear-coats-with-pockets/-/A-1002725053",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-sweater-cardigan-open-front-longline-sweater-cable-knit-sweater-long-sleeve-color-block-sweater/-/A-1000669718",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-cropped-special-detail-sweater-cardigan-kids/-/A-1000872797",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/cardigan-for-girls-open-front-sweater-long-sleeve-loose-fit-sweater-jacket/-/A-1000555999",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-knee-length-cardigan-long-sleeve-open-front-sweater-with-side-pockets/-/A-93726782",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-open-front-cardigan-sweater-kids-causal-long-sleeve-crewneck-knit-outerwear-coat/-/A-1004193777",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-solid-color-hollow-carved-design-cherry-patched-cardigan/-/A-1004644389",
      tags: "Cardigans, Girls’ Clothing, Kids’ Clothing, Sweaters, Tops, Pullover Sweaters",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-girl-s-pizza-tree-sweater-holiday-festive-sweater/-/A-1000136994",
      tags: "Girls’ Clothing, Kids’ Clothing, Poncho Sweaters, Sweaters, Tops, Pullover Sweaters",
      filters: {
        type: "Poncho Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-tank-sweater-cat-38-jack-8482/-/A-94131172",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-pullover-sweater-cat-38-jack-8482/-/A-94472241",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-striped-tank-sweater-cat-jack/-/A-94131167",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-cable-stitch-varsity-sweater-vest-cat-38-jack-8482/-/A-94472261",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-high-neck-sweater-tank-top-art-class/-/A-92955214",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-knit-sweater-art-class/-/A-91466609",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-off-the-shoulder-short-sleeve-pullover-sweater-art-class/-/A-92955217",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-striped-halter-sweater-tank-art-class/-/A-94203860",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-cable-knit-pullover-sweater-art-class/-/A-94473845",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/xoxo-embroidered-chunky-knit-sweater-mia-belle-girls/-/A-1003893332",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-solid-color-long-sleeve-pullover-crewneck-hoodies/-/A-1004606784",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-print-pattern-thin-style-autumn-new-style-shirt/-/A-1004679840",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-rabbit-print-pattern-crewneck-long-sleeve-comfy-shirt/-/A-1004682844",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-boy-and-girl-solid-color-pullover-design-long-sleeved-tops/-/A-1004815285",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/clearlove-girls-christmas-turtleneck-sweaters-kids-long-sleeve-chunky-knit-pullover-winter-xmas-warm-cute-funny-jumper-tops/-/A-1005185873",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-floral-embroidered-pattern-single-breasted-design-knit-cardigan/-/A-1004606856",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girl-fringed-sweater-mayoral/-/A-94253999",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-kenzie-cardigan-sweater-vignette/-/A-1001251550",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-cartoon-print-pattern-loose-pullover-round-neck-hoodies/-/A-1004684592",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-flower-print-pattern-solid-color-beautiful-hoodies/-/A-1004677490",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/gender-neutral-unisex-chunky-sweater-kids-oat-children/-/A-1003070163",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-sweater-with-fringe-multicolor-stripes/-/A-1003013457",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-christmas-turtleneck-sweaters-kids-long-sleeve-chunky-knit-pullover-tops-for-winter/-/A-1003263061",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/family-christmas-sweater-crew-neck-reindeer-snowflakes-knitted-pullover-for-women-men-kids/-/A-1000174309",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-short-sleeve-ruffle-edge-sweater-knit-top-kids/-/A-1001299001",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-meet-and-greet-bow-knit-sweater/-/A-1004848525",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-christmas-pullover-sweater-holiday-knitwear-crew-neck-long-sleeve-sweater-with-festive-pattern/-/A-1001378490",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-girls-cable-knit-v-neck-sweater/-/A-93590673",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-summer-polo-shirt-v-neck-button-down-knit-school-crop-tops/-/A-1003146001",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-mock-neck-sweater-with-gold-buttons-kids/-/A-92214557",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-puff-sleeve-ruffle-edge-sweater-kids/-/A-92936798",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-bow-sweater-tank-kids/-/A-86524542",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-french-collared-keyhole-long-sleeve-sweater-kids/-/A-92936814",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-long-balloon-sleeve-pointelle-pullover-sweater-kids-xx-small/-/A-89359466",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-christmas-knit-pullover-sweaters-turtleneck-kids-long-sleeve-chunky-winter-warm-cute-funny-tops/-/A-1003265692",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/christmas-sweater-long-sleeve-crew-neck-knitted-pullover-reindeer-for-kids/-/A-1002830649",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-solid-color-striped-hem-design-o-neck-knit-sweater/-/A-1004603814",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-rabbit-graphic-long-sleeve-cotton-hoodies/-/A-1004336379",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-solid-color-animal-ear-patch-design-autumn-korean-style-hoodie/-/A-1004602485",
      tags: "Girls’ Clothing, Kids’ Clothing, Pullover Sweaters, Sweaters, Tops",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-berber-fleece-design-button-front-warm-coat-vest/-/A-1004801993",
      tags: "Girls’ Clothing, Kids’ Clothing, Sweater Tank Tops, Sweaters, Tops",
      filters: {
        type: "Sweater Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-fine-gauge-sweater-vest/-/A-89281454",
      tags: "Girls’ Clothing, Kids’ Clothing, Sweater Vests, Sweaters, Tops",
      filters: {
        type: "Sweater Vests",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-sweater-vest/-/A-89281470",
      tags: "Girls’ Clothing, Kids’ Clothing, Sweater Vests, Sweaters, Tops",
      filters: {
        type: "Sweater Vests",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-girls-cable-knit-sweater-vest/-/A-93590664",
      tags: "Girls’ Clothing, Kids’ Clothing, Sweater Vests, Sweaters, Tops",
      filters: {
        type: "Sweater Vests",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-v-neck-sweater/-/A-86738947",
      tags: "Girls’ Clothing, Kids’ Clothing, Sweater Vests, Sweaters, Tops",
      filters: {
        type: "Sweater Vests",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-strappy-crop-tank-160-top-all-in-motion-8482/-/A-93297429",
      tags: "Athletic Tank Tops, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-racerback-160-tank-top-all-in-motion-8482/-/A-94334698",
      tags: "Athletic Tank Tops, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-tank-top-all-in-motion/-/A-94471782",
      tags: "Athletic Tank Tops, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-everyday-soft-bra-all-in-motion/-/A-91338686",
      tags: "Athletic Tank Tops, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-seamless-crop-tank-top-all-in-motion-8482/-/A-93070775",
      tags: "Athletic Tank Tops, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-muscle-tank-top-all-in-motion-8482/-/A-94369613",
      tags: "Athletic Tank Tops, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-crop-tank-top-all-in-motion/-/A-93297151",
      tags: "Athletic Tank Tops, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/destira-sport-tank/-/A-92088857",
      tags: "Athletic Tank Tops, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classics-wrap-top-girls/-/A-83927906",
      tags: "Athletic Wrap Shirts, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Athletic Wrap Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-pattern-smocked-tank-top/-/A-87826485",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops, Tank Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/girl-floral-top-saltwater-luxe/-/A-1003070668",
      tags: "Blouses, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Blouses",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-5pk-cami-colors-may-vary/-/A-87446270",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girls-5pk-camisole-white-gray-pink/-/A-50302682",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-cami-top-cat-38-jack-8482/-/A-93300728",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/girls-graphic-cami-art-class/-/A-94600922",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/girls-babydoll-woven-cami-art-class/-/A-94600945",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/girls-pointelle-strappy-cami-art-class/-/A-94775222",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-emma-girls-camisoles-multiple-colors-and-sizes-3-pack/-/A-1002425452",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops, Tank Tops",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-girls-sparkly-lined-camisole/-/A-1004493859",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/memoi-3-pack-cotton-blend-lightweight-girl-s-camisoles/-/A-1005220791",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Tanks & Camis, Tops",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-tunic-with-frill-and-print-light-orange-and-ice-cream-cone/-/A-1004049849",
      tags: "Girls’ Clothing, Kids’ Clothing, Peasant Tops, Tanks & Camis, Tops",
      filters: {
        type: "Peasant Tops",
      },
    },
    {
      url: "https://www.target.com/p/disney-girl-s-finding-dory-keep-on-swimming-kids-sleeveless-tank-top/-/A-93074158",
      tags: "Girls’ Clothing, Kids’ Clothing, T-shirts, Tanks & Camis, Tops, Tank Tops",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-patriotic-eagle-sunglasses-youth-tank-top/-/A-1003379811",
      tags: "Girls’ Clothing, Kids’ Clothing, T-shirts, Tanks & Camis, Tops, Tank Tops",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-gathered-waist-tunic-top/-/A-1004609088",
      tags: "Girls’ Clothing, Kids’ Clothing, T-shirts, Tanks & Camis, Tops",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/rabble-gender-neutral-kids-tshirt-with-emojis-expressway-dabblz-bundle/-/A-1002187841",
      tags: "Girls’ Clothing, Kids’ Clothing, T-shirts, Tanks & Camis, Tops",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-born-to-game-forced-to-school-youth-tank-top/-/A-1004645761",
      tags: "Girls’ Clothing, Kids’ Clothing, T-shirts, Tanks & Camis, Tops",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-princess-ariel-cinderella-toddler-girl-character-print-with-ruffled-sleeve-top-t-shirts-tee/-/A-1005106610",
      tags: "Girls’ Clothing, Kids’ Clothing, T-shirts, Tanks & Camis, Tops",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-princess-ariel-cinderella-toddler-girl-character-print-with-ruffled-sleeve-top-t-shirts-tee/-/A-1005106547",
      tags: "Girls’ Clothing, Kids’ Clothing, T-shirts, Tanks & Camis, Tops",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-princess-ariel-cinderella-toddler-girl-character-print-with-ruffled-sleeve-top-t-shirts-tee/-/A-1005155985",
      tags: "Girls’ Clothing, Kids’ Clothing, T-shirts, Tanks & Camis, Tops",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-printed-tank-top-cat-38-jack-8482/-/A-90117845",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-ribbed-tank-top-cat-38-jack-8482/-/A-93300526",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-pointelle-fitted-lace-trim-tank-top-cat-jack/-/A-94781846",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-fitted-ribbed-tank-top-cat-jack/-/A-94576219",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-pointelle-fitted-lace-trim-tank-top-cat-38-jack-8482/-/A-94486581",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-ice-cream-tank-top-cat-38-jack-8482-light-pink/-/A-93574806",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-flip-sequin-tank-top-cat-jack/-/A-94231174",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-ribbed-tank-top-cat-jack/-/A-94688548",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-ribbed-sunglasses-tank-top-cat-jack/-/A-94688544",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-toddler-girl-s-eversoft-layering-tanks-pack-of-6/-/A-92045558",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-high-neck-ribbed-tank-top-art-class/-/A-94268740",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-smocked-swing-tank-top-with-tie-straps-blue/-/A-94442301",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-american-flag-striped-graphic-tank-top-art-class-red-off-white/-/A-94340268",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girls-5-pack-everyday-wear-rib-knit-tank-tops/-/A-92545852",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-staycool-tank/-/A-1002103597",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-active-crop-tank/-/A-1002041416",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-tank-top-dance-a-latte-danz-n-motion-23300-child-sizes/-/A-1003688337",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-camisole/-/A-92159243",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-bruh-paint-drip-distressed-youth-tank-top/-/A-1003378320",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-tie-back-active-tank/-/A-87826960",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-party-in-the-usa-youth-tank-top/-/A-1003377285",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-american-babe-youth-tank-top/-/A-1003377077",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-checkered-floral-smile-youth-tank-top/-/A-1003376842",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-pickleball-queen-youth-tank/-/A-1002604242",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-pickleball-love-youth-tank/-/A-1002604225",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-just-happy-to-be-here-youth-tank-top/-/A-1003377915",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-watermelon-bow-summer-chart-youth-tank-top/-/A-1004646675",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-boho-sunshine-state-of-mind-flowers-youth-tank-top/-/A-1004646647",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-need-space-youth-tank-top/-/A-1003376850",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-melting-outline-youth-tank-top/-/A-1003377580",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-america-wave-stacked-coquette-youth-tank-top/-/A-1004524856",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-cool-summer-ice-cream-blue-youth-tank-top/-/A-1003376366",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-pickleball-champs-youth-tank/-/A-1002604269",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-bee-the-change-youth-tank-top/-/A-1003378377",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-be-kind-to-our-planet-retro-youth-tank-top/-/A-1003377759",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/sol-angeles-kids-sun-surf-tank/-/A-1004108637",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-it-s-a-good-day-to-have-a-good-day-circle-youth-tank-top/-/A-1003377727",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-have-the-day-you-deserve-circle-youth-tank-top/-/A-1003376962",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-arched-varsity-youth-tank-top/-/A-1003378625",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-little-miss-firecracker-checkered-youth-tank-top/-/A-1003379834",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-america-cherries-stripe-youth-tank-top/-/A-1004524765",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-active-ruffle-tank-top/-/A-1001544517",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-wink-rainbow-swirl-youth-tank-top/-/A-1003376575",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-organic-cotton-tank-top/-/A-1003030282",
      tags: "Girls’ Clothing, Kids’ Clothing, Tank Tops, Tanks & Camis, Tops",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-sandwash-1-2-zip-pullover-sweatshirt-all-in-motion/-/A-91270756",
      tags: "Athletic Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-challenger-hoodie/-/A-84755524",
      tags: "Athletic Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-active-comfort-full-zip-hooded-sweatshirt-all-in-motion/-/A-94739705",
      tags: "Athletic Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-modal-french-terry-crewneck-sweatshirt-all-in-motion/-/A-94741248",
      tags: "Athletic Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-cozy-knit-jacket-all-in-motion-8482/-/A-94579748",
      tags: "Athletic Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/vapor-apparel-youth-upf-50-uv-sun-protection-solar-hoodie/-/A-94216434",
      tags: "Athletic Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Athletic T-Shirts",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-girl-s-c-est-la-vie-joyeux-mesh-cover-up-child/-/A-1003315333",
      tags: "Athletic Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-fleece-pullover-fur-sweatshirt-little-kid-to-big-kid/-/A-94124599",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-long-sleeve-classic-solid-color-sweatshirt/-/A-89567170",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-french-terry-crossover-hoodie-toddler-to-big-kid/-/A-88301140",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bluey-girls-fleece-hoodie-little-kid-to-big-kid/-/A-90498654",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-fleece-pullover-hoodie/-/A-87678275",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bluey-bingo-sweatshirt-infant-to-big-kid/-/A-89790021",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-long-sleeve-neutral-solid-color-sweatshirt/-/A-89567290",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/acdc-dirty-deeds-done-dirt-cheap-youth-black-crew-neck-sweatshirt/-/A-89177260",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-panda-feeding-time-crew-neck-long-sleeve-athletic-heather-boy-s-sweatshirt/-/A-89002045",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-mercat-cakey-cat-girls-french-terry-sweatshirt-toddler-to-big-kid/-/A-91109237",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-encanto-minnie-mouse-stitch-isabela-mirabel-girls-fleece-fur-sweatshirt-little-kid-to-big-kid/-/A-88223178",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-long-sleeve-boho-solid-color-sweatshirt/-/A-89567038",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/touch-girls-miami-dolphins-ruffled-hoodie-sweatshirt/-/A-1004302920",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/g-iii-sports-girls-cleveland-cavaliers-hoodie-sweatshirt/-/A-1004146001",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/g-iii-sports-girls-michigan-state-spartans-hoodie-sweatshirt/-/A-1004142906",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/catalonia-banana-cat-wearable-blanket-hoodie-for-kids-fleece-snuggy-sweatshirt-pullover-4-12-years-kids-gift-for-boys-girls/-/A-91339606",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-and-friends-kid-girl-character-print-pop-up-ears-hat-with-sequin-covered-pocket-hoodie-sweatshirt/-/A-1005212097",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/converse-girls-pullover-sweatshirt-hoodie/-/A-94687305",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/cry-babies-magic-tears-girls-child-pocket-sweatshirt-hoodie-pullover-pink/-/A-1000487795",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/converse-girls-pullover-sweatshirt-french-terry-hoodie/-/A-94687301",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-fleece-hoodie-art-class/-/A-93441893",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-fleece-cosplay-pullover-hoodie-sizes-2t-14-16/-/A-1000402971",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-and-friends-fleece-hoodie-sizes-2t-14-16/-/A-1001012097",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-90042351",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-90042648",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creepers-tnt-long-sleeve-boy-s-reversible-hooded-sweatshirt/-/A-1001387148",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ac-dc-monochrome-logo-and-cannon-youth-heather-gray-graphic-hoodie/-/A-88861502",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-youth-black-graphic-hoodie/-/A-89522822",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-chilling-youth-royal-blue-graphic-hoodie/-/A-89387701",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-bugs-bunny-speech-bubble-what-s-up-doc-youth-heather-gray-graphic-hoodie/-/A-89002183",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/space-jam-squad-youth-royal-blue-hoodie/-/A-86196174",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-collegiate-letters-youth-black-graphic-hoodie/-/A-89386804",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-that-girl-lay-lay-princess-slaya-hoodie-gray/-/A-86963405",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-angry-daffy-duck-youth-black-graphic-hoodie/-/A-89001893",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/only-w-s-american-football-youth-long-sleeve-hoodie/-/A-93696492",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-alex-versus-creeper-youth-black-graphic-hoodie/-/A-89258936",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-void-big-cat-face-youth-girl-s-black-long-sleeve-cosplay-hoodie-with-3d-hoodie/-/A-94153589",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-ghost-spider-girls-pullover-hoodie-little-kid/-/A-85036701",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-encanto-mirabel-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-88178327",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-abby-cadabby-kids-snugible-blanket-hoodie-pillow/-/A-1000384759",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-arched-distressed-youth-graphic-hoodie/-/A-1002277047",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-lucky-clover-youth-graphic-hoodie/-/A-1001890623",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-valentines-vibes-youth-graphic-hoodie/-/A-1001743399",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-youth-graphic-hoodie/-/A-1001709749",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-love-flower-youth-graphic-hoodie/-/A-1001743159",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bear-inspired-cosplay-youth-off-white-oversized-hoodie-with-3d-bear-ears/-/A-93860096",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-valentine-s-whale-youth-graphic-hoodie/-/A-1001552178",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/red-bull-racing-f1-kid-s-2024-team-pullover-hoodie/-/A-93226136",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/tasty-peach-studios-peachy-cafe-youth-girl-tofu-hoodie-with-ears/-/A-1002894406",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/chibi-cat-meow-youth-girl-s-black-long-sleeve-cosplay-hoodie-with-3d-ears/-/A-94153564",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-lucky-typewriter-youth-graphic-hoodie/-/A-1002225815",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-girls-fleece-half-zip-hoodie-little-kid-to-big-kid/-/A-88196088",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-youth-graphic-hoodie/-/A-1001709845",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-game-day-youth-graphic-hoodie/-/A-1001831880",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-valentine-rainbow-youth-graphic-hoodie/-/A-1001551931",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-block-kitten-with-block-heart-and-logo-youth-black-graphic-hoodie/-/A-89050955",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-the-mystery-machine-youth-black-graphic-hoodie/-/A-89386835",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-clipping-image-youth-boys-royal-blue-hoodie/-/A-89097378",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/red-bull-racing-f1-kids-sergio-checo-perez-special-edition-mexico-gp-hoodie/-/A-1001221395",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/pink-floyd-division-bell-adult-black-hoodie/-/A-90274297",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ac-dc-74-jailbreak-album-cover-youth-heather-gray-graphic-hoodie/-/A-88861508",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-character-varsity-style-graphic-with-collegiate-text-youth-athletic-heather-hoodie/-/A-89097459",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-character-pointing-with-ombre-text-youth-black-graphic-hoodie/-/A-89386898",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-gaara-character-in-action-pose-youth-athletic-heather-hoodie/-/A-89097434",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-choose-happy-smiley-face-youth-hoodie/-/A-1003380720",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/gulf-of-mexico-black-and-white-wave-youth-long-sleee-hoodie/-/A-1002590637",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-retro-stars-youth-graphic-hoodie/-/A-1002277098",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-hey-sugar-pie-stars-youth-graphic-hoodie/-/A-1001551915",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/so-unbearable-youth-long-sleeve-hoodie/-/A-1000883436",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-lion-king-nala-simba-fleece-hoodie-pink/-/A-87526868",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-game-day-stars-youth-graphic-hoodie/-/A-1001823568",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/made-with-love-youth-long-sleeve-hoodie/-/A-1002524568",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/coolest-turkey-in-town-youth-long-sleeve-hoodie/-/A-1000883576",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-solid-color-thickened-autumn-basic-hoodies/-/A-1003660754",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-sonic-the-hedgehog-knuckles-no-time-for-games-youth-black-hoodie/-/A-89244251",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-babe-smile-youth-graphic-hoodie/-/A-1001552213",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-i-love-you-words-youth-graphic-hoodie/-/A-1001709785",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-shamrock-truck-youth-graphic-hoodie/-/A-1002225582",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-hippy-flower-valentine-youth-graphic-hoodie/-/A-1001551937",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-golf-par-tee-varsity-youth-hoodie/-/A-1003380646",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/blockbuster-white-logo-adult-royal-blue-hoodie/-/A-90275417",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/gulf-of-mexico-wave-text-youth-long-sleee-hoodie/-/A-1002590834",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-pushin-my-luck-youth-graphic-hoodie/-/A-1001890587",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/rip-gulf-of-mexico-1607-2025-youth-long-sleee-hoodie/-/A-1002590792",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-game-day-football-youth-graphic-hoodie/-/A-1001823722",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/castore-mclaren-f1-kids-lando-norris-hoodie/-/A-1005138168",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-hugs-and-kisses-youth-graphic-hoodie/-/A-1001551995",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-bee-the-change-youth-hoodie/-/A-1003380471",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/go-sports-but-where-s-the-food-youth-long-sleeve-hoodie/-/A-93696405",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-lucky-clover-youth-graphic-hoodie/-/A-1001890688",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-foxy-and-foxy-silhouette-youth-black-graphic-hoodie/-/A-89522825",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/nerdlucks-youth-royal-blue-hoodie/-/A-85295541",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-with-red-filter-and-kanji-logo-youth-black-hoodie/-/A-89244289",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-hearts-youth-graphic-hoodie/-/A-1001552041",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-alphabet-i-love-you-youth-graphic-hoodie/-/A-1001552114",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/padel-paladin-youth-long-sleeve-hoodie/-/A-93696095",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-kind-turning-smiles-youth-graphic-hoodie/-/A-1002349961",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-be-mine-bubble-youth-graphic-hoodie/-/A-1001552205",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/batman-collegiate-style-logo-youth-black-graphic-hoodie/-/A-89244243",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/blockbuster-be-kind-rewind-circular-logo-adult-black-hoodie/-/A-90274240",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/gamer-get-a-life-youth-long-sleeve-hoodie/-/A-1002523005",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/parking-lot-pioneer-old-west-wagon-football-cowboy-youth-long-sleeve-hoodie/-/A-93115680",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/grill-eat-repeat-football-youth-long-sleeve-hoodie/-/A-93696262",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/labbing-touch-grass-gamer-nerd-youth-long-sleeve-hoodie/-/A-1002523017",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/rabble-gender-neutral-hoodie-and-valentines-day-dabblz-bundle/-/A-1001756661",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/blockbuster-a-good-movie-is-like-comfort-food-for-your-other-senses-logo-grid-adult-black-hoodie/-/A-90274270",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-love-typewriter-youth-graphic-hoodie/-/A-1001709720",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/castore-mclaren-f1-oscar-piastri-kids-driver-hoodie/-/A-1005175510",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-golf-par-tee-varsity-youth-graphic-hoodie/-/A-1002444188",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/castore-mclaren-f1-kids-2025-team-hoodie/-/A-1002258566",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/in-tailgating-we-trust-american-flag-and-spatula-youth-long-sleeve-hoodie/-/A-93230799",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/american-football-tailgating-society-youth-long-sleeve-hoodie/-/A-93696365",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-varsity-love-vibes-youth-graphic-hoodie/-/A-1001709812",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/padel-tennis-racket-rhapsody-youth-long-sleeve-hoodie/-/A-93696125",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-tic-tac-heart-youth-graphic-hoodie/-/A-1001551914",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sweet-strawberries-youth-long-sleeve-hoodie/-/A-1000883578",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/be-sweet-candy-cane-youth-long-sleeve-hoodie/-/A-1000883523",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hold-your-horses-humor-youth-long-sleeve-hoodie/-/A-93695844",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/gulf-of-mexico-forever-vintage-skeleton-youth-long-sleee-hoodie/-/A-1002590660",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-youth-graphic-hoodie/-/A-1002350012",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/teddy-hugs-youth-long-sleeve-hoodie/-/A-1001313597",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-valentine-vibes-youth-graphic-hoodie/-/A-1001551926",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-choose-happy-smiley-face-youth-hoodie/-/A-1003380662",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-be-mine-bold-youth-graphic-hoodie/-/A-1001743166",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-sweetheart-puff-print-youth-graphic-hoodie/-/A-1001551997",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-love-vibes-checkered-youth-graphic-hoodie/-/A-1001743198",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-pickleball-youth-hoodie/-/A-1003380677",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-deer-snowman-scene-youth-graphic-hoodie/-/A-1001551910",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-blue-character-silhouette-with-collegiate-style-title-youth-heather-gray-hoodie/-/A-89244296",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/so-unbearable-youth-girl-s-tofu-long-sleeve-cosplay-hoodie-with-3d-ears/-/A-1000024648",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-pickleball-paddles-crossed-youth-hoodie/-/A-1003380702",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/thinking-cat-youth-girl-s-black-long-sleeve-cosplay-hoodie-with-3d-ears/-/A-1000024774",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lanky-box-cute-characters-long-sleeve-black-youth-hooded-sweatshirt/-/A-91714172",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-character-face-long-sleeve-boy-s-blue-hooded-sweatshirt-detachable-fanny-pack/-/A-1000134556",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-character-posing-youth-royal-blue-long-sleeve-hooded-sweatshirt/-/A-93890671",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lanky-box-boxy-foxy-front-back-graphics-girl-s-cradle-pink-long-sleeve-hooded-sweatshirt/-/A-94199507",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/where-the-wild-things-are-max-i-ll-eat-you-up-youth-navy-long-sleeve-hooded-sweatshirt/-/A-94236736",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-tonal-character-graphic-long-sleeve-black-youth-hooded-sweatshirt/-/A-90274291",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-chibi-fighters-long-sleeve-royal-blue-youth-hooded-sweatshirt/-/A-89522930",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/led-zeppelin-black-and-white-band-photo-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-90273798",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-steve-creeper-long-sleeve-black-youth-hooded-sweatshirt/-/A-89765416",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/kawaii-cat-shooting-star-youth-black-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93860117",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-all-valley-karate-champion-long-sleeve-black-youth-hooded-sweatshirt/-/A-91217270",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/coraline-girls-black-long-sleeve-hooded-sweatshirt/-/A-1004432757",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-team-seven-long-sleeve-athletic-gray-youth-hooded-sweatshirt/-/A-88756668",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-monochrome-creeper-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-89765277",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-metal-sonic-long-sleeve-black-youth-hooded-sweatshirt/-/A-89765322",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-kanji-dragon-ball-all-over-print-long-sleeve-boy-s-black-hooded-sweatshirt/-/A-1000513547",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/polly-pocket-pocket-sized-since-1989-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-92628643",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-strike-first-strike-hard-black-seal-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-92985720",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-face-long-sleeve-black-youth-hooded-sweatshirt/-/A-90468726",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/led-zeppelin-falling-icarus-logo-long-sleeve-black-boy-s-hooded-sweatshirt/-/A-90663893",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-goku-orange-swirl-background-long-sleeve-black-youth-hooded-sweatshirt/-/A-89522821",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lanky-box-plush-characters-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-91217247",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/nerf-logo-long-sleeve-royal-blue-boy-s-hooded-sweatshirt/-/A-90275378",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-goku-kamehameha-blast-youth-black-long-sleeve-hooded-sweatshirt/-/A-93890434",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-modern-emerald-club-graphic-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-89723218",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/tasty-peach-witch-frog-brewing-potion-youth-girl-s-black-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-1001810596",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-star-frame-long-sleeve-royal-adult-blue-hooded-sweatshirt/-/A-93147696",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/spellbound-elian-oracles-magic-is-everywhere-youth-girl-s-royal-blue-long-sleeve-hooded-sweatshirt/-/A-1004162260",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/kawaii-cat-youth-off-white-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93859984",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/strawberry-bear-youth-black-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93859974",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/superman-the-original-man-of-steel-long-sleeve-black-youth-hooded-sweatshirt/-/A-89386904",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/strawberry-bear-youth-off-white-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93859973",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-trunks-cell-saga-long-sleeve-black-youth-hooded-sweatshirt/-/A-89522818",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/teddy-bear-youth-black-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93860012",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-goku-attack-with-bursting-name-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-89522845",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-frieza-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-89765296",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/no-fear-classic-logo-long-sleeve-youth-black-hooded-sweatshirt/-/A-93653725",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-dark-magician-puff-print-long-sleeve-black-youth-hooded-sweatshirt/-/A-88756559",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/polly-pocket-repeat-text-icons-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-92985670",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/kawaii-cat-shooting-star-youth-off-white-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93860128",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-cookie-monster-enjoy-life-long-sleeve-black-youth-hooded-sweatshirt/-/A-92985729",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/led-zeppelin-searchlight-poster-long-sleeve-black-youth-hooded-sweatshirt/-/A-92985796",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bear-heart-rainbow-youth-off-white-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93859993",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/teddy-bear-youth-off-white-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93859967",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-group-character-art-long-sleeve-royal-blue-youth-hooded-sweatshirt/-/A-89840739",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/tasty-peach-cute-yellow-face-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-91498866",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/batman-line-art-long-sleeve-black-youth-hooded-sweatshirt/-/A-89208454",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-classic-pakkun-adult-black-hooded-sweatshirt/-/A-90274248",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/kawaii-cat-youth-black-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93859970",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/batman-hero-in-collegiate-text-long-sleeve-black-youth-hooded-sweatshirt/-/A-89208362",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-rolling-stones-graphic-sweatshirt-navy-blue/-/A-94269019",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-colorblock-dreamy-fleece-sweatshirt-aqua-blue/-/A-93529417",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-lilo-stitch-oversized-sweatshirt-oatmeal/-/A-94431065",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bluey-bingo-girls-fleece-fur-sweatshirt-toddler-to-big-kid/-/A-90042450",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-french-terry-oversized-drop-shoulder-sweatshirt-little-kid-to-big/-/A-92749512",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/reebok-girls-cowl-neck-yoga-sweatshirt/-/A-1004736239",
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
      url: "https://www.target.com/p/the-juniper-shop-christmas-spirits-red-words-youth-ultra-soft-graphic-sweatshirt/-/A-93627566",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-knit-crewneck-sweatshirt/-/A-1001905412",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-abby-cadabby-girls-sweatshirt-little-kid/-/A-87483790",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-doc-mcstuffins-girls-sweatshirt-little-kid/-/A-88225749",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-st-nick-s-tree-farm-youth-ultra-soft-graphic-sweatshirt/-/A-93349882",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-block-kitten-with-heart-youth-black-crew-neck-sweatshirt/-/A-89050783",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mega-man-dr-wily-dr-light-line-art-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-90274838",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-split-springtrap-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-91543847",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-paw-print-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89387576",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/where-the-wild-things-are-max-monsters-youth-black-crew-neck-long-sleeve-sweatshirt/-/A-93890444",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-character-paddling-with-doodle-art-youth-black-crew-neck-sweatshirt/-/A-89258856",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-chilling-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-89387597",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-school-logo-youth-athletic-heather-sweatshirt/-/A-86104246",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-l-o-l-surprise-faux-shearling-sweatshirt-yellow/-/A-86900639",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-chibi-characters-youth-black-crew-neck-sweatshirt/-/A-89244208",
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
      url: "https://www.target.com/p/acdc-logo-and-angus-young-youth-black-crew-neck-sweatshirt/-/A-89177280",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-izuku-midoriya-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-92548131",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/pink-floyd-triangle-earth-with-airplanes-logo-youth-black-crew-neck-sweatshirt/-/A-88861439",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/blockbuster-be-kind-rewind-distressed-junior-s-gray-sweatshirt/-/A-90274830",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-sonic-the-hedgehog-let-s-roll-modern-street-art-youth-black-crew-neck-sweatshirt/-/A-89244182",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-kakashi-sasuke-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-91898177",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-flying-character-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-89522708",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-candy-cane-cutie-stars-youth-ultra-soft-graphic-sweatshirt/-/A-93302610",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-checkered-santa-youth-ultra-soft-graphic-sweatshirt/-/A-93544705",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-christmas-girly-youth-ultra-soft-graphic-sweatshirt/-/A-93349834",
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
      url: "https://www.target.com/p/nasa-space-flight-seal-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-89051138",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-franchise-colorful-kitten-with-block-heart-youth-heather-gray-crew-neck-sweatshirt/-/A-89097438",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-valentine-kittens-youth-ultra-soft-graphic-sweatshirt/-/A-1001646887",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-deku-fighting-stance-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-88860995",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-cozy-ruffle-sweatshirt-top-x-small-black-stars-print/-/A-1000170470",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-characters-checkered-circle-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-93148012",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/blockbuster-black-logo-junior-s-gray-sweatshirt/-/A-90274809",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-foxy-in-a-red-box-youth-black-crew-neck-sweatshirt/-/A-89522926",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-faux-shearling-pullover-sweatshirt-coral-pink-light-blue-ivory/-/A-92253715",
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
      url: "https://www.target.com/p/bioworld-sonic-the-hedgehog-graffiti-portrait-youth-black-crew-neck-sweatshirt/-/A-89244163",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/peppa-pig-girls-french-terry-sweatshirt-toddler-to-little-kid/-/A-89844265",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-mickey-mouse-striped-pullover-crewneck-sweatshirt-blue/-/A-93219416",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-girls-fleece-oversized-drop-shoulder-sweatshirt-little-kid-to-big-kid/-/A-93743475",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-chase-skye-everest-girls-pullover-sweatshirt/-/A-87483765",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-face-with-orange-border-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89764917",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-distressed-smiley-face-youth-graphic-sweatshirt/-/A-90568417",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-pickleball-love-youth-ultra-soft-graphic-sweatshirt/-/A-1002604403",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-collegiate-text-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89244234",
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
      url: "https://www.target.com/p/sesame-street-outdoor-character-group-art-crew-neck-long-sleeve-youth-black-sweatshirt/-/A-93148346",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/acdc-red-rectangle-logo-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-89245498",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-youth-ultra-soft-graphic-sweatshirt/-/A-1001709913",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-baby-yoda-sweatshirt-pink/-/A-87482870",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-game-doodles-youth-black-crew-neck-sweatshirt/-/A-89258874",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/batman-bruce-wayne-silhouette-on-a-red-background-youth-black-crew-neck-sweatshirt/-/A-89208340",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-mystery-gang-youth-black-crew-neck-sweatshirt/-/A-89387637",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-team-dojo-graphic-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-89245497",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-bugs-bunny-and-daffy-duck-youth-black-crew-neck-sweatshirt/-/A-89002096",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-saiyan-goku-youth-black-sweatshirt/-/A-86104327",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-bugs-bunny-what-s-up-doc-youth-heather-gray-crew-neck-sweatshirt/-/A-89002110",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/growing-up-creepie-have-you-hugged-a-bug-today-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-89008576",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-son-goku-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89008555",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-we-ve-got-spirit-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89387656",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-izuku-midoriya-with-title-logo-youth-heather-gray-crew-neck-sweatshirt/-/A-88860974",
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
      url: "https://www.target.com/p/the-juniper-shop-team-halftime-distressed-red-youth-ultra-soft-graphic-sweatshirt/-/A-1001806475",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-sonic-the-hedgehog-street-art-youth-black-crew-neck-sweatshirt/-/A-89244195",
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
      url: "https://www.target.com/p/the-juniper-shop-embroidered-lucky-typewriter-youth-ultra-soft-graphic-sweatshirt/-/A-1002225752",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-in-my-game-day-era-maroon-youth-ultra-soft-graphic-sweatshirt/-/A-1001806402",
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
      url: "https://www.target.com/p/naruto-single-color-leaping-naruto-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-90274576",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-christmas-spirits-green-words-youth-ultra-soft-graphic-sweatshirt/-/A-93627536",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-vibes-clover-youth-ultra-soft-graphic-sweatshirt/-/A-1002225614",
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
      url: "https://www.target.com/p/the-juniper-shop-i-am-just-here-for-the-snacks-youth-ultra-soft-graphic-sweatshirt/-/A-1001806626",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-charmer-clover-youth-ultra-soft-graphic-sweatshirt/-/A-1001890504",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/where-the-wild-things-are-max-and-monsters-dancing-youth-athletic-heather-crew-neck-long-sleeve-sweatshirt/-/A-1000119148",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/gremlins-gizmo-with-multicolor-names-youth-black-crew-neck-sweatshirt/-/A-90274699",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-cozy-fleece-ruffle-eyelet-sweatshirt/-/A-1005094042",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-eagle-fang-karate-graphic-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89244193",
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
      url: "https://www.target.com/p/the-juniper-shop-lucky-clover-checkered-youth-ultra-soft-graphic-sweatshirt/-/A-1002532863",
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
      url: "https://www.target.com/p/lands-end-kids-puff-shoulder-crew-neck-sweatshirt/-/A-1005092766",
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
      url: "https://www.target.com/p/champion-girls-1-4-zip-fleece-pullover-sweatshirt/-/A-94609783",
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
      url: "https://www.target.com/p/the-juniper-shop-football-game-day-checkered-toddler-graphic-sweatshirt/-/A-90213709",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-mystery-solvers-club-youth-black-crew-neck-sweatshirt/-/A-89387589",
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
      url: "https://www.target.com/p/the-juniper-shop-embroidered-i-love-you-words-youth-ultra-soft-graphic-sweatshirt/-/A-1001710052",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-candy-heart-smile-solid-youth-ultra-soft-graphic-sweatshirt/-/A-1001209368",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-cheerful-on-sparkly-glitter-sweatshirt-southern-grace/-/A-1000916025",
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
      url: "https://www.target.com/p/the-juniper-shop-embroidered-smiley-face-outline-youth-ultra-soft-graphic-sweatshirt/-/A-1002349959",
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
      url: "https://www.target.com/p/the-juniper-shop-smiley-flowers-with-sunglasses-youth-ultra-soft-graphic-sweatshirt/-/A-1002532982",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-mickey-mouse-fashion-crewneck-sweatshirt-collegiate-athletic-crewneck-sweatshirt-mickey-minnie-sweatshirt/-/A-1004522261",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-crew-sweatshirt/-/A-86908833",
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
      url: "https://www.target.com/p/the-juniper-shop-tis-the-season-scarecrow-youth-ultra-soft-graphic-sweatshirt/-/A-93302580",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/batman-the-caped-crusader-youth-heather-gray-crew-neck-sweatshirt/-/A-89208345",
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
      url: "https://www.target.com/p/the-juniper-shop-happy-go-lucky-smiley-face-youth-ultra-soft-graphic-sweatshirt/-/A-1001890517",
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
      url: "https://www.target.com/p/the-juniper-shop-lucky-vibes-distressed-youth-ultra-soft-graphic-sweatshirt/-/A-1002225757",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ufc-girls-roaring-glory-sweatshirt/-/A-1004764791",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-cozy-fleece-ruffle-sweatshirt/-/A-1005092686",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-so-franken-cute-glitter-youth-ultra-soft-graphic-sweatshirt/-/A-93404311",
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
      url: "https://www.target.com/p/the-juniper-shop-in-my-football-era-red-youth-ultra-soft-graphic-sweatshirt/-/A-1001805913",
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
      url: "https://www.target.com/p/the-juniper-shop-cutest-clover-youth-ultra-soft-graphic-sweatshirt/-/A-1001347000",
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
      url: "https://www.target.com/p/the-juniper-shop-game-day-stars-youth-ultra-soft-graphic-sweatshirt/-/A-1001823578",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-team-halftime-distressed-maroon-youth-ultra-soft-graphic-sweatshirt/-/A-1001806550",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/blockbuster-a-good-movie-is-like-comfort-food-for-your-other-senses-junior-s-black-sweatshirt/-/A-90274674",
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
      url: "https://www.target.com/p/the-juniper-shop-cousin-crew-santa-hat-youth-ultra-soft-graphic-sweatshirt/-/A-93302659",
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
      url: "https://www.target.com/p/scooby-doo-scooby-s-crystal-cove-high-school-id-youth-black-crew-neck-sweatshirt/-/A-89387547",
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
      url: "https://www.target.com/p/sesame-street-big-bird-face-twirl-text-crew-neck-long-sleeve-youth-black-sweatshirt/-/A-93148334",
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
      url: "https://www.target.com/p/the-juniper-shop-be-mine-bubble-youth-ultra-soft-graphic-sweatshirt/-/A-1001026729",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-holly-leaves-coquette-youth-ultra-soft-graphic-sweatshirt/-/A-93717314",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-white-line-art-on-repeat-text-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89244201",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girl-kids-winter-animals-sweatshirt-happy-prince/-/A-1001401465",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-youth-ultra-soft-graphic-sweatshirt/-/A-1002349754",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-princess-moana-cindrella-ariel-belle-zip-up-hoodie-little-kid-to-big-kid/-/A-87217525",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-zip-front-sweatshirt/-/A-86908804",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-spider-gwen-ghost-spider-girls-fleece-zip-up-hoodie-little-kid-to-big-kid/-/A-88397434",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-zipper-classic-solid-color-sweat-hoodie/-/A-89567658",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-zipper-cotton-solid-color-hoodie/-/A-89572023",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-french-terry-zip-up-cosplay-hoodie-little-kid-to-big-kid/-/A-90042344",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-zip-up-fleece-hoodie-sweatshirt-cat-38-jack-8482-pink-rose/-/A-94486506",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-zip-up-halloween-cat-fleece-hoodie-sweatshirt-cat-38-jack-8482-cream/-/A-94482967",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-zip-up-halloween-spider-fleece-hoodie-sweatshirt-cat-38-jack-8482-light-olive-green/-/A-94482969",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-zip-up-fleece-hooded-sweatshirt-cat-38-jack-8482/-/A-94482984",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-french-terry-zip-up-hoodie-uniform-sweatshirt-cat-jack-blue/-/A-94493152",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hearts-french-terry-zip-up-hoodie-cat-38-jack-8482/-/A-93300713",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-fleece-zip-up-hoodie-little-kid-to-big-kid/-/A-93825912",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-wonder-woman-girls-zip-up-costume-hoodie-little-kid-to-big-kid/-/A-88398070",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-100-cotton-kids-unisex-soft-fleece-zip-hoodie-with-inner-pockets-usa-made/-/A-1001830183",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-slytherin-ravenclaw-hufflepuff-girls-french-terry-zip-up-hoodie-little-kid-to-big-kid/-/A-89291810",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-snow-angel-french-terry-zip-up-hoodie-toddler-to-big-kid/-/A-88227571",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
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
      url: "https://www.target.com/p/the-pink-picket-fence-suzie-dino-hoodie-for-girls-lightweight-zip-up-jacket-hand-painted-dinosaur-print/-/A-1004883980",
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
      url: "https://www.target.com/p/girls-39-relaxed-fit-french-terry-zip-up-hooded-sweatshirt-cat-38-jack-8482/-/A-94576209",
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
      url: "https://www.target.com/p/girls-39-french-terry-quarter-zip-pullover-sweatshirt-cat-38-jack-8482/-/A-94576212",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-zip-up-hooded-sweatshirt-green/-/A-94431044",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-boys-cotton-upf-50-soft-3-pocket-jersey-shorts/-/A-92149866",
      tags: "Athletic Shorts, Bottoms, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pk-pull-on-straight-fit-jeans-cat-jack-blue-denim-brown/-/A-89513517",
      tags: "Bottom Sets, Bottoms, Toddler Boys’ Clothing, Toddler Clothing, Pant Sets",
      filters: {
        type: "Bottom Sets",
      },
    },
    {
      url: "https://www.target.com/p/studio-3-toddler-little-and-big-boy-s-3-pack-french-terry-knit-shorts/-/A-92489960",
      tags: "Bottom Sets, Bottoms, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Bottom Sets",
      },
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-boys-4-pack-active-fleece-jogger-sweatpants/-/A-1000170412",
      tags: "Bottom Sets, Bottoms, Toddler Boys’ Clothing, Toddler Clothing, Pant Sets",
      filters: {
        type: "Bottom Sets",
      },
    },
    {
      url: "https://www.target.com/p/studio-3-toddler-boys-4-pack-french-terry-jogger-sweatpants-black-charcoal-heather-gray-navy-3t/-/A-1003438459",
      tags: "Bottom Sets, Bottoms, Toddler Boys’ Clothing, Toddler Clothing, Pant Sets",
      filters: {
        type: "Bottom Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-cargo-pants-cat-38-jack-8482/-/A-94505025",
      tags: "Bottoms, Cargo Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Cargo Pants",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-cargo-denim-pants-cat-38-jack-8482/-/A-94569675",
      tags: "Bottoms, Cargo Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Cargo Pants",
      },
    },
    {
      url: "https://www.target.com/p/parachute-cargo-pocket-jogger-pants-dark-teal/-/A-1002803211",
      tags: "Bottoms, Cargo Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Cargo Pants",
      },
    },
    {
      url: "https://www.target.com/p/gerber-baby-boys-twill-shorts/-/A-1003386649",
      tags: "Bottoms, Cargo Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Cargo Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-pull-on-denim-cargo-shorts-cat-jack-light-wash/-/A-93016698",
      tags: "Bottoms, Cargo Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Cargo Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-button-front-denim-shorts-cat-38-jack-8482-orange/-/A-90115331",
      tags: "Bottoms, Cargo Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Cargo Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-french-terry-short-pale-blue/-/A-1003635336",
      tags: "Bottoms, Cargo Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Cargo Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-parachute-cargo-pocket-shorts-dark-gray/-/A-1003635976",
      tags: "Bottoms, Cargo Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Cargo Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-parachute-cargo-pocket-shorts-royal-blue/-/A-1003636010",
      tags: "Bottoms, Cargo Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Cargo Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-parachute-cargo-pocket-shorts-light-beige/-/A-1003636000",
      tags: "Bottoms, Cargo Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Cargo Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-parachute-cargo-pocket-shorts-dark-teal/-/A-1003636029",
      tags: "Bottoms, Cargo Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Cargo Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-uniform-straight-pants-with-rib-waistband-cat-jack-khaki/-/A-87043171",
      tags: "Bottoms, Chino Pants, Toddler Boys’ Clothing, Toddler Clothing, Dresswear",
      filters: {
        type: "Chino Pants",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-knit-pants-cat-38-jack-8482-khaki/-/A-90781611",
      tags: "Bottoms, Chino Pants, Toddler Boys’ Clothing, Toddler Clothing, Dresswear",
      filters: {
        type: "Chino Pants",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-boys-chambray-suit-pant-toddler/-/A-85566476",
      tags: "Bottoms, Chino Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Pants",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-boys-organic-cotton-skinny-stretch-twill-chino-toddler/-/A-83462426",
      tags: "Bottoms, Chino Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Pants",
      },
    },
    {
      url: "https://www.target.com/p/gerber-infant-and-toddler-boys-canvas-pants-gray-5t/-/A-89651397",
      tags: "Bottoms, Chino Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Pants",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-khaki-4t/-/A-92698507",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-khaki-3t/-/A-92698506",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-stretch-flat-front-uniform-chino-shorts-cat-jack/-/A-87050930",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-gray-3t/-/A-92698500",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-khaki-2t/-/A-92698505",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-gray-4t/-/A-92698501",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-khaki-5t/-/A-92698508",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-gray-2t/-/A-92698499",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-gray-5t/-/A-92698502",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-khaki-18m/-/A-92698504",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-gray-18m/-/A-92698498",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-quick-dry-chino-shorts-cat-38-jack-8482-khaki-12m/-/A-92698503",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-slant-pocket-bermuda-shorts-navy-blue-striped/-/A-1003635251",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing, Dresswear",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-slant-pocket-bermuda-shorts-light-taupe/-/A-1003607654",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-slant-pocket-bermuda-shorts-navy-blue/-/A-1003635287",
      tags: "Bottoms, Chino Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-relaxed-fit-snap-denim-pants-cat-38-jack-8482/-/A-94576087",
      tags: "Bottoms, Fashion Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fashion Pants",
      },
    },
    {
      url: "https://www.target.com/p/kids-ian-mesh-color-block-basketball-shorts-olive-scout/-/A-1003241012",
      tags: "Bottoms, Fashion Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/ruggedbutts-toddler-boys-hybrid-shorts/-/A-1002893230",
      tags: "Bottoms, Fashion Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-printed-french-terry-short-beige-with-palm-trees/-/A-1003635356",
      tags: "Bottoms, Fashion Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-french-terry-short-gradient-beige-and-teal/-/A-1003636810",
      tags: "Bottoms, Fashion Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-printed-chambray-short-pale-blue-and-navy/-/A-1003635375",
      tags: "Bottoms, Fashion Shorts, Toddler Boys’ Clothing, Toddler Clothing, Dresswear",
      filters: {
        type: "Fashion Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-button-front-slim-leg-denim-pants-cat-38-jack-8482-light-wash/-/A-93276574",
      tags: "Bottoms, Five Pocket Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Five Pocket Pants",
      },
    },
    {
      url: "https://www.target.com/p/gerber-baby-and-toddler-gender-neutral-cuffed-denim-shorts/-/A-1003216438",
      tags: "Bottoms, Jean Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/gerber-baby-and-toddler-gender-neutral-denim-shorts/-/A-1003216454",
      tags: "Bottoms, Jean Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-boys-organic-cotton-chambray-short-toddler/-/A-91302777",
      tags: "Bottoms, Jean Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-denim-shortalls-medium-wash/-/A-93780393",
      tags: "Bottoms, Jean Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-railroad-striped-shortalls-red/-/A-93780372",
      tags: "Bottoms, Jean Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-boys-stretch-denim-shorts/-/A-91546913",
      tags: "Bottoms, Jean Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/gerber-baby-and-toddler-neutral-denim-shorts/-/A-1003277442",
      tags: "Bottoms, Jean Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jean Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-pull-on-straight-fit-jeans-cat-jack/-/A-89539602",
      tags: "Bottoms, Jeans, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-button-front-straight-leg-denim-pants-cat-jack-medium-wash/-/A-93276630",
      tags: "Bottoms, Jeans, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-straight-leg-denim-pants-cat-38-jack-8482-black/-/A-90629736",
      tags: "Bottoms, Jeans, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-straight-fit-jeans-cat-jack/-/A-89539603",
      tags: "Bottoms, Jeans, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-slim-fit-jeans-cat-jack/-/A-89528517",
      tags: "Bottoms, Jeans, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/toddler-solid-jeggings-cat-jack/-/A-90748195",
      tags: "Bottoms, Jeans, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-pull-on-straight-fit-jeans-cat-jack-khaki/-/A-89930208",
      tags: "Bottoms, Jeans, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-straight-fit-denim-pants-cat-jack-khaki/-/A-94474469",
      tags: "Bottoms, Jeans, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-straight-fit-button-front-denim-pants-cat-38-jack-8482-dark-wash/-/A-94582867",
      tags: "Bottoms, Jeans, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-adaptive-jeans-cat-38-jack-8482/-/A-94600602",
      tags: "Bottoms, Jeans, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-adaptive-jeans-cat-jack-medium-wash/-/A-85404388",
      tags: "Bottoms, Jeans, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-adaptive-jeans-cat-jack-light-wash/-/A-85404502",
      tags: "Bottoms, Jeans, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-woven-jogger-pants-cat-jack/-/A-88005607",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-5pk-jersey-jogger-pants-cat-jack/-/A-89665617",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-washed-french-terry-jogger-pants-cat-jack/-/A-94465148",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-halloween-dino-pants-cat-38-jack-8482-black/-/A-94582868",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/gerber-baby-and-toddler-boys-3-pack-jogger-pants/-/A-1004045135",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/mightly-toddler-fair-trade-organic-cotton-jogger-sweatpant/-/A-1004010320",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-100-cotton-fleece-soft-lightweight-pocket-jogger-for-boys-and-girls/-/A-91282153",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-little-boys-2-pack-pants-blue-grey-6/-/A-87235389",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/ruggedbutts-boys-chino-jogger-pants-from-ruggedbutts/-/A-87888556",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/mightly-toddler-organic-cotton-lightweight-jogger-sweatpant/-/A-1004010259",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-fleece-cotton-soft-pocket-jogger-for-boys-and-girls/-/A-91227792",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/parachute-cargo-pocket-jogger-pants-dark-gray/-/A-1002790928",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/cocomelon-jj-fleece-2-pack-jogger-pants-toddler/-/A-85043317",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-infant-thank-you-jogger/-/A-94053619",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-black-pique-jogger/-/A-93590469",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/french-terry-denim-jogger-pant-denim-blue/-/A-1002790891",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/french-terry-denim-jogger-pant-dark-denim-blue/-/A-1002790830",
      tags: "Bottoms, Jogger Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-boys-sweatshorts-jacquard-stripe/-/A-93209666",
      tags: "Bottoms, Jogger Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-leo-athletic-shorts-olive-scout/-/A-1002476537",
      tags: "Bottoms, Jogger Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-boys-solid-color-green-soft-casual-style-shorts/-/A-1003286350",
      tags: "Bottoms, Jogger Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jogger Shorts",
      },
    },
    {
      url: "https://www.target.com/p/the-peanutshell-earthy-neutral-pants-for-baby-boys-and-girls-5-pack-set/-/A-93566682",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing, Pull-on Pants",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/leveret-baby-navy-crawling-pant-and-colored-legging/-/A-89962991",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/the-peanutshell-baby-boy-pants-5-pack-boy-basics/-/A-93566695",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-and-toddler-animal-leggings-set-of-3-12-to-24-months-gray-and-brown/-/A-93713795",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-little-pink-birdie/-/A-1002270513",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/the-peanutshell-soft-heather-neutral-pants-for-baby-boy-and-girl-5-pack-set/-/A-93566707",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-heartful-hare/-/A-1002270452",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/ad-rescue-wear-wrap-e-soothe-ultra-soft-non-itch-eczema-pants-for-kids-eco-friendly-tencel-eczema-clothing-no-zinc-or-dyes/-/A-94165508",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/doodle-pants-blue-winter-moose-leggings/-/A-1002650723",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-lovely-billy-goat/-/A-1002270477",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/doodle-pants-dolphin-leggings/-/A-1002719091",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-bunny-and-teddy-bear/-/A-1002270507",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-and-toddler-animal-leggings-set-of-3-24-to-36-months-cars-and-animals/-/A-93713479",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-and-toddler-animal-leggings-set-of-3-24-to-36-months-adventure-time/-/A-93713564",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-piano-lion/-/A-1002270481",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-panda-likes-milk/-/A-1002270519",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-cuty-baby/-/A-1002270475",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-bunny-and-stripes/-/A-1002270490",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-accordion-frog/-/A-1002270468",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-123-elephant/-/A-1002270501",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-chipper-bell-bunny/-/A-1002270471",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-owl-and-stripes/-/A-1002270449",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-donkey-and-drum/-/A-1002270484",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-baby-toddler-leggings-squirrel-and-polka-dots/-/A-1002270523",
      tags: "Bottoms, Leggings, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-french-terry-short-teal/-/A-1003635409",
      tags: "Bottoms, Lounge Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-french-terry-short-vibrant-orange/-/A-1003635279",
      tags: "Bottoms, Lounge Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-french-terry-short-black/-/A-1003635453",
      tags: "Bottoms, Lounge Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-french-terry-zip-pocket-shorts-pale-mauve-blue/-/A-1003635432",
      tags: "Bottoms, Lounge Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-french-terry-zip-pocket-shorts-navy-blue/-/A-1003635466",
      tags: "Bottoms, Lounge Shorts, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Lounge Shorts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-jersey-jogger-pants-cat-jack/-/A-91551161",
      tags: "Bottoms, Pull-on Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-fleece-jogger-pants-cat-jack/-/A-94465238",
      tags: "Bottoms, Pull-on Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-wide-leg-pants-cat-38-jack-8482/-/A-94502374",
      tags: "Bottoms, Pull-on Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-fleece-pull-on-jogger-pants-cat-jack/-/A-90940492",
      tags: "Bottoms, Pull-on Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-jersey-jogger-pants-cat-jack/-/A-94632238",
      tags: "Bottoms, Pull-on Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-adaptive-straight-fit-pull-on-woven-pants-cat-jack-gray/-/A-88347422",
      tags: "Bottoms, Pull-on Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-boys-soft-cotton-athletic-pants-upf-50/-/A-91117141",
      tags: "Bottoms, Pull-on Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-thermal-baby-pant-for-boys-and-girls-soft-cozy/-/A-91281937",
      tags: "Bottoms, Pull-on Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/honest-baby-2-pack-organic-cotton-honest-pants/-/A-1001305913",
      tags: "Bottoms, Pull-on Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/gerber-baby-and-toddler-boys-active-pants-4-pack/-/A-89537371",
      tags: "Bottoms, Pull-on Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/gerber-baby-boys-microfleece-pants-4-pack/-/A-90150560",
      tags: "Bottoms, Pull-on Pants, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pull-on Pants",
      },
    },
    {
      url: "https://www.target.com/p/modern-moments-by-gerber-baby-boys-2-piece-henley-shirt-and-pant-set/-/A-1001646156",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-long-sleeve-button-down-shirt-and-suspender-pants-set-cat-38-jack-8482-white/-/A-90825470",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Dresswear, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-blazer-38-pants-suit-set-cat-38-jack-8482/-/A-90840562",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-americana-pocket-4th-of-july-party-in-the-usa-set-cat-38-jack-8482-red/-/A-93907364",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-americana-pocket-4th-of-july-party-in-the-usa-set-cat-jack-navy-blue/-/A-94711684",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-3pk-jersey-and-french-terry-shorts-set-cat-38-jack-8482/-/A-94280112",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-short-sleeve-french-terry-t-shirt-and-shorts-set-cat-jack/-/A-92686321",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-short-sleeve-4th-of-july-t-shirt-and-shorts-set-cat-jack/-/A-94282841",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-4th-of-july-short-sleeve-stars-and-striped-button-up-and-shorts-set-cat-38-jack-8482-red/-/A-94004666",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Dresswear, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-long-sleeve-pumpkin-spice-french-terry-shirt-and-pants-set-cat-jack-khaki/-/A-94872135",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-seersucker-short-sleeve-button-up-and-pull-on-shorts-set-cat-38-jack-8482-coral-orange/-/A-94603283",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Dresswear, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-long-sleeve-halloween-french-terry-shirt-and-pants-set-cat-38-jack-8482/-/A-94600597",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-toy-story-woody-buzz-lightyear-bo-peep-rex-athletic-t-shirt-mesh-shorts-outfit-set-infant-to-little-kid/-/A-85258156",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-winnie-the-pooh-lion-king-pixar-monsters-inc-toy-story-tigger-t-shirt-and-mesh-shorts-outfit-set-toddler-to-big-kid/-/A-89237118",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-lion-king-pixar-toy-story-rex-slinky-dog-buzz-lightyear-t-shirt-and-shorts-outfit-toddler-to-little-kid/-/A-88414935",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-chase-marshall-rubble-mesh-jersey-tank-top-and-basketball-shorts-athletic-outfit-set-toddler/-/A-91427281",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-donald-duck-goofy-pluto-french-terry-pullover-hoodie-and-set-infant-to-big-kid/-/A-87290826",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-nightmare-before-christmas-jack-skellington-t-shirt-shorts-black-gray/-/A-87232819",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-graphic-t-shirt-and-shorts-outfit-set-toddler-to-big-kid/-/A-85122051",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-toy-story-buzz-lightyear-t-shirt-and-french-terry-shorts-outfit-set-toddler/-/A-87538517",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-fleece-sweatshirt-and-pants-set-toddler/-/A-85315911",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-cars-lion-king-lightning-mcqueen-t-shirt-and-mesh-shorts-outfit-set-toddler/-/A-88406152",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-lion-king-toy-story-mickey-mouse-cars-t-shirt-tank-top-and-french-terry-shorts-3-piece-outfit-set-toddler/-/A-87247193",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-hawaiian-button-down-shirt-and-shorts-toddler-to-big-kid/-/A-89453816",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Dresswear, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-lion-king-donald-duck-simba-pluto-waffle-knit-t-shirt-shorts-outfit-set-toddler/-/A-90888332",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/jurassic-park-athletic-graphic-t-shirt-mesh-shorts-outfit-set-logo-black-red/-/A-87295578",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/bluey-chilli-mom-bandit-dad-bingo-coco-honey-winton-t-shirt-and-shorts-outfit-set-toddler-to-big-kid/-/A-89807003",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-lion-king-simba-t-shirt-and-shorts-outfit-set-toddler/-/A-88319681",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-oscar-the-grouch-elmo-bert-and-ernie-graphic-t-shirt-and-shorts-outfit-set-infant-to-little-kid/-/A-88949051",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-t-shirt-and-shorts-outfit-set-toddler/-/A-85258511",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-donatello-leonardo-michelangelo-raphael-t-shirt-and-shorts-outfit-set-toddler-to-big-kid/-/A-85122407",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/blaze-and-the-monster-machines-stripes-zeg-blaze-t-shirt-tank-top-and-bike-shorts-french-terry-3-piece-outfit-set-toddler/-/A-88394103",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-baby-chambray-hawaiian-button-down-shirt-and-shorts-outfit-set-infant-to-little-kid/-/A-91241164",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Dresswear, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-miles-morales-t-shirt-and-mesh-shorts-outfit-set-toddler-to-little-kid/-/A-87291119",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-rocky-zuma-rubble-t-shirt-and-french-terry-shorts-outfit-set-toddler/-/A-88335666",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-t-shirt-and-shorts-outfit-set-infant-to-big-kid/-/A-88320092",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-donald-duck-goofy-pluto-t-shirt-and-mesh-shorts-outfit-set-toddler/-/A-87960358",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-french-terry-sweatshirt-shorts-grey/-/A-87289078",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-t-shirt-and-shorts-outfit-set-toddler/-/A-1003826976",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-lion-king-winnie-the-pooh-waffle-knit-drop-shoulder-sweatshirt-and-jogger-pants-set-toddler/-/A-92302256",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-pixar-toy-story-rex-forky-buzz-lightyear-fleece-pullover-hoodie-and-pants-outfit-set-toddler/-/A-88290903",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-christmas-fleece-pullover-hoodie-and-pants-outfit-set-infant-to-little-kid/-/A-89300117",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-nightmare-before-christmas-jack-fleece-hoodie-pants/-/A-87557184",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-t-shirt-and-jogger-french-terry-pants-toddler/-/A-90796315",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-toddler-boys-long-sleeve-t-shirt-fleece-pant-set-yellow/-/A-85167597",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-winnie-the-pooh-mickey-mouse-fleece-sweatshirt-and-denim-pants-outfit-set-toddler/-/A-1000179152",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-hooded-t-shirt-and-french-terry-shorts-outfit-set-toddler-sizes-2t-10-12/-/A-92825643",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-t-shirt-and-mesh-shorts-outfit-set-toddler/-/A-87956535",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-donatello-raphael-leonardo-t-shirt-and-french-terry-shorts-outfit-set-toddler/-/A-91080219",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-tank-top-and-shorts-outfit-set-toddler/-/A-1002541678",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-athletic-pullover-t-shirt-shorts-outfit-set-toddler-to-big-kid/-/A-85258266",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-miles-morales-mesh-jersey-tank-top-shirt-and-basketball-shorts-toddler-to-big-kid/-/A-90116550",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-t-shirt-and-plaid-shorts-outfit-set-toddler-sizes-2t-10-12/-/A-1002274443",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-cotton-gauze-matching-family-button-down-shirt-and-shorts-outfit-set-toddler/-/A-92997036",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/bluey-coco-honey-winton-bingo-t-shirt-tank-top-and-french-terry-shorts-3-piece-outfit-set-toddler-to-big-kid/-/A-87232724",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-fleece-pullover-hoodie-and-pants-outfit-set-toddler/-/A-85044399",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-fleece-sweatshirt-and-twill-jogger-pants-outfit-set-toddler/-/A-1002541660",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-grave-digger-el-toro-loco-megalodon-t-shirt-tank-top-and-french-terry-shorts-3-piece-set-toddler-to-big-kid/-/A-87294271",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-hooded-t-shirt-and-fleece-jogger-pants-outfit-set-toddler/-/A-1003020445",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-grave-digger-fleece-sweatshirt-and-jogger-pants-outfit-set-toddler/-/A-1001847939",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/bluey-bingo-chloe-halloween-toddler-boys-fleece-sweatshirt-and-jogger-pants-outfit-set-white-black-2t/-/A-1000163232",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-french-terry-pullover-hoodie-and-shorts-outfit-set-toddler/-/A-1003005815",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/bluey-henley-t-shirt-and-french-terry-pants-toddler/-/A-90567414",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-avengers-spider-man-venom-thor-captain-america-athletic-t-shirt-meshshorts-outfit-set-toddler/-/A-88327815",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/jurassic-world-jurassic-world-dinosaur-jurassic-park-fleece-pullover-hoodie-and-pants-outfit-set-toddler/-/A-88398407",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-donatello-raphael-leonardo-henley-t-shirt-and-french-terry-pants-outfit-set-toddler-to-big-kid/-/A-90567417",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-batwheels-bam-the-batmobile-batwing-redbird-t-shirt-and-french-terry-cargo-shorts-outfit-toddler-to-little-kid/-/A-91859070",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/bluey-fleece-pullover-hoodie-and-pants-outfit-set-toddler-to-little-kid/-/A-87232876",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/bluey-polo-shirt-and-fleece-jogger-pants-outfit-set-toddler/-/A-1003546771",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/pj-masks-gekko-owlette-catboy-t-shirt-and-mesh-shorts-outfit-set-toddler-to-little-kid/-/A-87909278",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-button-down-shirt-twill-pants-suspenders-and-bow-tie-4-piece-outfit-set-infant-to-little-kid/-/A-91427258",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-tank-top-and-shorts-outfit-set-toddler/-/A-1003006547",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-spider-man-fleece-sweatshirt-and-jogger-and-pants-outfit-set-toddler/-/A-1001856639",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/bluey-hooded-t-shirt-and-fleece-jogger-pants-outfit-set-toddler/-/A-1003394813",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-avengers-spider-man-little-boys-zip-up-fleece-hoodie-graphic-t-shirt-and-jogger-3-piece-outfit-set-toddler-to-big-kid/-/A-88247864",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/transformers-bumblebee-optimus-prime-graphic-t-shirt-mesh-shorts-outfit-set-toddler-to-big-kid/-/A-89253009",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/cocomelon-jj-breathable-graphic-t-shirt-mesh-shorts-gray-red/-/A-87289072",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/blaze-and-the-monster-machines-t-shirt-and-mesh-shorts-outfit-set-toddler/-/A-1000883988",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/jurassic-world-dinosaur-athletic-graphic-t-shirt-mesh-shorts-outfit-set-toddler/-/A-87559655",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-scooby-doo-fleece-hoodie-and-pants-outfit-set-toddler/-/A-87249105",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-t-shirt-and-shorts-outfit-set-toddler-to-big-kid/-/A-88993910",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-donatello-raphael-leonardo-fleece-sweatshirt-and-pants-set-toddler-to-big-kid/-/A-89430028",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/pj-masks-catboy-gekko-owlette-graphic-t-shirt-tank-top-french-terry-shorts-3-piece-outfit-set/-/A-87170024",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-ringer-t-shirt-french-terry-shorts-and-hat-3-piece-outfit-set-toddler/-/A-1003418707",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-disney-mickey-mouse-tank-and-shorts-set-red-blue/-/A-94064513",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-disney-pixar-cars-lightning-mcqueen-t-shirt-shorts-set-gray/-/A-93726557",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-fleece-pullover-hoodie-and-pants-outfit-set-toddler/-/A-85015716",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-winnie-the-pooh-pullover-hoodie-and-french-terry-shorts-toddler/-/A-92205929",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-infant-toddler-boy-s-2-piece-hooded-top-and-jogger-set/-/A-92511132",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-lion-king-mickey-mouse-goofy-donald-duck-simba-waffle-knit-pullover-hoodie-and-shorts-toddler/-/A-92302234",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-junior-french-terry-pullover-hoodie-and-shorts-toddler/-/A-1003006328",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-toddler-little-boys-2-piece-tee-and-jogger-sets/-/A-1003841007",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-disney-cars-fleece-pullover-and-bottom-set-oatmeal/-/A-94609694",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-americana-usa-short-sleeve-t-shirt-and-shorts-set-blue/-/A-93976552",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/grayson-mini-toddler-boys-textured-woven-shirt-and-shorts-set-brown/-/A-94339713",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-spidey-friends-miles-morales-polo-top-shorts-set-dark-blue/-/A-93726766",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-bluey-hooded-tank-and-shorts-set-teal/-/A-94065319",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/baby-boys-2pc-bluey-chambray-short-overalls-t-shirt-set-blue-green/-/A-93726541",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-disney-cars-lightning-mcqueen-racing-fleece-pullover-and-bottom-set-black/-/A-94619914",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-bluey-woven-gauze-button-up-top-shorts-set-ivory/-/A-93726533",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Dresswear, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-nintendo-mario-kart-fleece-pullover-and-bottom-set-blue-ivory/-/A-94609697",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-button-down-top-and-woven-shorts-set-navy-blue-red/-/A-93780387",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Dresswear, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pk-ms-rachel-bus-pullover-sweatshirt-and-shorts-set-heather-gray/-/A-94505133",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-marvel-spidey-friends-t-shirt-shorts-set-green/-/A-93726601",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-bluey-halloween-fleece-pullover-and-bottom-set-white-black/-/A-94619922",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-bluey-pocket-t-shirt-shorts-set-blue/-/A-94272664",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-hot-wheels-t-shirt-checkered-shorts-set-off-white/-/A-93726599",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-2pc-jurassic-park-dinosaur-short-sleeve-t-shirt-and-shorts-set-gray/-/A-94065318",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/grayson-mini-toddler-boys-french-terry-shirt-and-shorts-set/-/A-94652560",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/modern-moments-by-gerber-toddler-boys-2-piece-top-and-cargo-shorts-set/-/A-1001943144",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/modern-moments-by-gerber-toddler-boys-2-piece-henley-shirt-and-shorts-set/-/A-1001974052",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/grayson-mini-toddler-boys-pull-on-wavy-striped-shorts-set-blue/-/A-90429363",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-toddler-boys-2pc-knit-short-sleeve-t-shirt-and-woven-pull-on-short-set-white/-/A-82181035",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/gerber-baby-and-toddler-boys-2-piece-sweatshirt-pant-set/-/A-91311831",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-boys-2-piece-short-sleeve-t-shirt-and-shorts-set-for-toddler-and-big-kids/-/A-1003316776",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/thomas-friends-pullover-hoodie-and-french-terry-shorts-toddler/-/A-1002594944",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/peppa-pig-graphic-t-shirt-mesh-shorts-blue-grey/-/A-87294280",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-and-friends-boys-2-piece-short-sleeve-t-shirt-and-shorts-set-for-toddlers/-/A-1003316718",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/gerber-baby-and-toddler-boys-2-piece-t-shirt-and-shorts-set-heather-skateboard/-/A-1002565500",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/modern-moments-by-gerber-toddler-boys-2-piece-long-sleeve-top-and-shorts-set/-/A-1001974114",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/kids-maddox-color-block-short-sleeve-pocket-tee-set-olive-scout/-/A-1002731474",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-the-child-t-shirt-and-french-terry-shorts-outfit-set-toddler/-/A-87276596",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-red-holiday-polo-pants-set/-/A-93590844",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-toddler-boys-2-piece-t-shirt-and-jogger-set/-/A-1003868562",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/organic-peplum-top-shorts-set-bohemia/-/A-1004050015",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-four-piece-tuxedo-suit-set/-/A-86759084",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-cardigan-w-red-plaid-bowtie-pants-set/-/A-93590819",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-navy-chunky-waffle-lounge-set/-/A-1005055397",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/gerber-toddler-boys-henley-shirt-and-joggers-2-piece-set/-/A-92867826",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-teal-faux-suspender-shirt-w-pique-pant-set/-/A-93280893",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-toddler-boys-sweatsuit-set/-/A-86700113",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/nickelodeon-toddler-boys-3-piece-tmnt-vest-shirt-pant-set-green-2t/-/A-1000033565",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-rand-hoodie-jogger-set/-/A-1001314540",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-toddler-boys-spider-man-3-piece-vest-shirt-pant-set/-/A-1000023718",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-white-plaid-buttondown-w-charcoal-sweater-vest-bowtie/-/A-93591002",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/organic-shirt-shorts-set-green-stripes/-/A-1004049274",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-batman-t-shirt-and-shorts-outfit-set-toddler/-/A-88338587",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/cocomelon-cody-jj-fleece-pullover-sweatshirt-and-jogger-pants-set-infant-to-toddler/-/A-87290877",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-pink-striped-oxford-and-bowtie-shorts-set/-/A-1002581488",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Dresswear, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-plaid-suspender-set/-/A-1002581373",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Dresswear, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/space-jam-looney-tunes-space-jam-athletic-t-shirt-and-shorts-toddler/-/A-87530261",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/blippi-boys-short-sleeve-t-shirt-and-french-terry-shorts-set-for-toddler-and-big-kids/-/A-1004025251",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-cars-lightning-mcqueen-boys-short-sleeve-t-shirt-tank-top-and-shorts-3-piece-set-for-toddlers-to-big-kids/-/A-1003316863",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/warner-bros-where-the-wild-things-are-max-cozy-faux-sherling-sweatshirt-and-felt-faux-fur-crown-toddler/-/A-1001188612",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/blaze-and-the-monster-machines-toddler-boys-fleece-pullover-hoodie-pant-set-gray-red/-/A-85069767",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/modern-moments-by-gerber-toddler-boys-2-piece-johnny-collar-and-shorts-set/-/A-1001974005",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-navy-stretch-suit/-/A-84946351",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/kids-raven-waffle-knit-short-set-olive-scout/-/A-1002255275",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/makemake-organics-organic-spaghetti-top-short-set-checkered/-/A-1004035153",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-orange-printed-check-terry-set/-/A-1002581419",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-boys-v-neck-sweater-and-pants-set-for-toddler-and-big-kids-size-2t/-/A-1004891703",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-textured-terry-smiley-patch-set/-/A-1002581366",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-boys-2-piece-sweatshirt-and-pant-sets-for-toddlers-and-kids-size-2t/-/A-1004891653",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-grey-stretch-suit/-/A-84946410",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/makemake-organics-organic-shirt-shorts-set-brown-chequered-2-3-years/-/A-1004049283",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-grey-stretch-suit/-/A-84946372",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/makemake-organics-organic-shirt-shorts-set-blue-petunia-4-5-years/-/A-1004049299",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-coral-blue-striped-buttondown-set/-/A-1002581465",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Dresswear, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/organic-tee-shorts-set-waves/-/A-1004078897",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-toddler-little-boys-3-piece-superman-shirt-pant-vest-set/-/A-1003028594",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-varsity-print-hooded-lounge-set/-/A-1005055380",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/makemake-organics-organic-shirt-shorts-set-palm-4-5-years/-/A-1004049308",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/organic-tee-shorts-set-surf/-/A-1004079789",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/organic-peplum-top-shorts-set-mandarin/-/A-1004049941",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/organic-raglan-shirt-shorts-set-croissant/-/A-1004053948",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-and-friends-boys-short-sleeve-t-shirt-and-shorts-set-for-toddler-and-big-kids/-/A-85913105",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-coral-blue-striped-buttondown-set/-/A-1002581497",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Dresswear, Top and Bottom Sets",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-checkered-bomb-pop-buttondown-set/-/A-1003884684",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/organic-3-piece-boys-summer-bundle/-/A-1003742941",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-top-and-pant-set-yellow-bananas-and-brown/-/A-1003032509",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/kids-clay-camp-shirt-linen-short-set-olive-scout/-/A-1002534424",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/organic-cotton-top-and-muslin-pant-set-striped-navy/-/A-1002803710",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/organic-relaxed-tee-shorts-set-dog/-/A-1004078598",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/organic-tank-tee-shorts-set-sage-stripes/-/A-1004079794",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-plaid-buttondown-set/-/A-1000744444",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/organic-tee-shorts-set-toucan/-/A-1004169062",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-top-and-short-set-brown-yellow-and-bananas/-/A-1003106944",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-onesie-and-muslin-shortall-set-navy-blue-paper-boats/-/A-1003104288",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-navy-chunky-waffle-lounge-set/-/A-1005055377",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/organic-graphic-tee-skort-set-poppy/-/A-1004078590",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-palm-stripe-print-linen-buttondown-set/-/A-1002581391",
      tags: "Coordinate Sets, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/disney-nightmare-before-christmas-jack-skellington-zip-up-coverall-newborn-to-little-kid/-/A-89893294",
      tags: "Coveralls, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coveralls",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-monsters-inc-mike-zip-up-cosplay-coverall-toddler/-/A-89489613",
      tags: "Coveralls, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coveralls",
      },
    },
    {
      url: "https://www.target.com/p/disney-lion-king-simba-zip-up-cosplay-coverall-newborn-to-infant/-/A-88417221",
      tags: "Coveralls, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coveralls",
      },
    },
    {
      url: "https://www.target.com/p/disney-incredibles-mr-incredible-zip-up-cosplay-coverall-newborn-to-toddler/-/A-89489602",
      tags: "Coveralls, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Rompers",
      filters: {
        type: "Coveralls",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-grave-digger-truck-zip-up-coverall-toddler/-/A-1004290938",
      tags: "Coveralls, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Overalls",
      filters: {
        type: "Coveralls",
      },
    },
    {
      url: "https://www.target.com/p/cocomelon-girls-fleece-coverall-toddler/-/A-90018346",
      tags: "Coveralls, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coveralls",
      },
    },
    {
      url: "https://www.target.com/p/minime-2-piece-kids-cotton-rich-full-zip-jacket-and-pants-set/-/A-1002343096",
      tags: "Coveralls, Outfits, Toddler Boys’ Clothing, Toddler Clothing, Jumpsuits",
      filters: {
        type: "Coveralls",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-one-piece-fleece-romper-beige-mammoth-print/-/A-1005226956",
      tags: "Coveralls, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Coveralls",
      },
    },
    {
      url: "https://www.target.com/p/minime-rocking-pony-footie/-/A-1002283746",
      tags: "Jumpsuits, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jumpsuits",
      },
    },
    {
      url: "https://www.target.com/p/minimoi-solid-crossover-footie/-/A-1002358316",
      tags: "Jumpsuits, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jumpsuits",
      },
    },
    {
      url: "https://www.target.com/p/minimoi-waffle-footie-with-embroidered-hot-air-balloon-winter/-/A-1002292635",
      tags: "Jumpsuits, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jumpsuits",
      },
    },
    {
      url: "https://www.target.com/p/minimoi-waffle-footie-with-embroidered-flower-bud/-/A-1002292620",
      tags: "Jumpsuits, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jumpsuits",
      },
    },
    {
      url: "https://www.target.com/p/minimoi-solid-ribbed-cross-over-tie-footie/-/A-1002358653",
      tags: "Jumpsuits, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jumpsuits",
      },
    },
    {
      url: "https://www.target.com/p/minime-striped-shoulder-flap-footie/-/A-1002283715",
      tags: "Jumpsuits, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jumpsuits",
      },
    },
    {
      url: "https://www.target.com/p/minimoi-ribbed-solid-cotton-side-snap-footie/-/A-1002339230",
      tags: "Jumpsuits, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jumpsuits",
      },
    },
    {
      url: "https://www.target.com/p/minime-ribbed-star-footie/-/A-1002358711",
      tags: "Jumpsuits, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jumpsuits",
      },
    },
    {
      url: "https://www.target.com/p/minime-toddler-boys-little-dots-pointelle-rayon-from-bamboo-blend/-/A-1002358705",
      tags: "Jumpsuits, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jumpsuits",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-printed-muslin-one-piece-jumpsuit-navy-blue-paper-boats/-/A-1002975708",
      tags: "Jumpsuits, Outfits, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jumpsuits",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-solid-denim-overalls-blue/-/A-84797964",
      tags: "Outfits, Overalls, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Overalls",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-39-gosh-toddler-boys-39-corduroy-overalls-brown/-/A-94474443",
      tags: "Outfits, Overalls, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Overalls",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-39-gosh-toddler-boys-39-corduroy-overalls-olive-green/-/A-94474444",
      tags: "Outfits, Overalls, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Overalls",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-39-gosh-toddler-boys-39-denim-overalls-blue/-/A-94474449",
      tags: "Outfits, Overalls, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Overalls",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-plaid-lined-overalls-olive-green/-/A-91896873",
      tags: "Outfits, Overalls, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Overalls",
      },
    },
    {
      url: "https://www.target.com/p/kids-checkered-overall-shorts-olive-scout-x-joulie-sousa/-/A-1004218999",
      tags: "Outfits, Overalls, Toddler Boys’ Clothing, Toddler Clothing, Rompers",
      filters: {
        type: "Overalls",
      },
    },
    {
      url: "https://www.target.com/p/john-deere-denim-square-neck-short-overalls-toddler/-/A-1003528708",
      tags: "Outfits, Overalls, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Overalls",
      },
    },
    {
      url: "https://www.target.com/p/john-deere-denim-square-neck-bib-overalls-toddler/-/A-1002811103",
      tags: "Outfits, Overalls, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Overalls",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-train-printed-denim-overalls-blue/-/A-91042514",
      tags: "Outfits, Overalls, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Overalls",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-colorblock-overalls-green-navy-blue/-/A-91188199",
      tags: "Outfits, Overalls, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Overalls",
      },
    },
    {
      url: "https://www.target.com/p/marvel-avengers-spider-man-captain-america-hulk-cosplay-romper-toddler/-/A-87233649",
      tags: "Outfits, Rompers, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rompers",
      },
    },
    {
      url: "https://www.target.com/p/disney-winnie-the-pooh-mickey-mouse-lion-king-simba-romper-newborn-to-infant/-/A-87244884",
      tags: "Outfits, Rompers, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rompers",
      },
    },
    {
      url: "https://www.target.com/p/monster-jam-grave-digger-el-toro-loco-megalodon-romper-and-bucket-sun-hat-outfit-set-toddler/-/A-1002882323",
      tags: "Outfits, Rompers, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rompers",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-romper-and-bucket-sun-hat-outfit-set-toddler/-/A-1002882326",
      tags: "Outfits, Rompers, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rompers",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-romper-and-bucket-sun-hat-outfit-set-toddler/-/A-1002882422",
      tags: "Outfits, Rompers, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rompers",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-cookie-monster-big-bird-romper-and-sunhat-newborn-to-toddler/-/A-89387814",
      tags: "Outfits, Rompers, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rompers",
      },
    },
    {
      url: "https://www.target.com/p/onesies-brand-boys-3-pack-short-sleeve-and-sleeveless-rompers/-/A-89417554",
      tags: "Outfits, Rompers, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rompers",
      },
    },
    {
      url: "https://www.target.com/p/joggies-pitch-black-toddler-footless-hoodie-onesie/-/A-90083066",
      tags: "Outfits, Rompers, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rompers",
      },
    },
    {
      url: "https://www.target.com/p/joggies-tiedye-black-toddler-footless-hoodie-onesie/-/A-90201632",
      tags: "Outfits, Rompers, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rompers",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-infant-halloween-striped-romper-with-ghost-patch/-/A-1005055317",
      tags: "Outfits, Rompers, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rompers",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-boys-organic-seersucker-suit-jacket-toddler/-/A-83942891",
      tags: "Blazers, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Blazers",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-knit-blazer-cat-38-jack-8482-khaki/-/A-90781635",
      tags: "Blazers, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing, Dresswear",
      filters: {
        type: "Blazers",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-boys-corduroy-blazer-with-elbow-patches-toddler/-/A-83943534",
      tags: "Blazers, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Blazers",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-boys-fleece-suit-blazer-toddler/-/A-89802934",
      tags: "Blazers, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Blazers",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-boys-linen-suit-jacket-toddler/-/A-1000901504",
      tags: "Blazers, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Blazers",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-boys-fleece-suit-blazer-toddler-2t/-/A-90312461",
      tags: "Blazers, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Blazers",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-39-denim-hooded-jacket-cat-38-jack-8482-medium-wash/-/A-94569677",
      tags: "Bomber Jackets, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-bomber-jacket-olive-green/-/A-91042563",
      tags: "Bomber Jackets, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/disney-toy-story-cars-zip-up-varsity-bomber-jacket-toddler/-/A-92929981",
      tags: "Bomber Jackets, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing, Fleece Jackets",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-avengers-spider-man-varsity-bomber-jacket-toddler-to-big-kid/-/A-89709784",
      tags: "Bomber Jackets, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-little-big-boys-snap-button-varsity-bomber-jackets/-/A-1001121450",
      tags: "Bomber Jackets, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-little-big-boys-button-up-varsity-bomber-jacket/-/A-1001796293",
      tags: "Bomber Jackets, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-striped-french-terry-sleeve-bomber/-/A-1005055335",
      tags: "Bomber Jackets, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-blue-checker-french-terry-sleeve-bomber/-/A-1005055312",
      tags: "Bomber Jackets, Coats & Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Bomber Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-color-block-vest-olive-navy/-/A-94474442",
      tags: "Coats & Jackets, Fashion Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-39-gosh-toddler-boys-39-corduroy-jacket-brown/-/A-94474441",
      tags: "Coats & Jackets, Fashion Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-cord-jacket-brown/-/A-91042520",
      tags: "Coats & Jackets, Fashion Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fashion Jackets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-fleece-zip-up-jacket-toddler-to-big-kid/-/A-89807317",
      tags: "Coats & Jackets, Fleece Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/gerber-toddler-boys-and-girls-long-sleeve-fleece-active-jacket/-/A-93141687",
      tags: "Coats & Jackets, Fleece Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-midweight-fleece-lined-jackets/-/A-93364216",
      tags: "Coats & Jackets, Fleece Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-full-zip-fleece-jacket-cat-38-jack-8482/-/A-94467851",
      tags: "Coats & Jackets, Fleece Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/mightly-toddler-fair-trade-organic-cotton-zip-up-pocket-hoodie/-/A-1004010368",
      tags: "Coats & Jackets, Fleece Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-full-zip-fleece-jacket-cat-38-jack-8482/-/A-94467852",
      tags: "Coats & Jackets, Fleece Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/london-fog-little-big-boys-reversible-high-pile-fleece-jackets/-/A-1002182775",
      tags: "Coats & Jackets, Fleece Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-little-boys-reversible-fleece-jackets/-/A-93406496",
      tags: "Coats & Jackets, Fleece Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-little-boys-midweight-fleece-transitional-jackets/-/A-93364214",
      tags: "Coats & Jackets, Fleece Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/mightly-toddler-fair-trade-organic-cotton-zip-up-pocket-hoodie-magenta-3t/-/A-1004486152",
      tags: "Coats & Jackets, Fleece Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/mightly-toddler-organic-cotton-print-lightweight-zip-up-pocket-hoodie/-/A-1004010370",
      tags: "Coats & Jackets, Fleece Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-denim-jacket-blue/-/A-91042507",
      tags: "Coats & Jackets, Jean Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-marvel-spider-man-knit-denim-button-up-hoodie-jacket-blue/-/A-94618306",
      tags: "Coats & Jackets, Jean Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-boys-bluey-knit-denim-button-up-hoodie-jacket-blue/-/A-94618307",
      tags: "Coats & Jackets, Jean Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-denim-jacket-overalls-shortalls-pants-infant-to-big-kid/-/A-90933435",
      tags: "Coats & Jackets, Jean Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-denim-jacket-toddler/-/A-92182811",
      tags: "Coats & Jackets, Jean Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Jean Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rothschild-little-big-boys-hooded-faux-wool-toggle-coat-with-scarf/-/A-1000159752",
      tags: "Coats & Jackets, Overcoats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Overcoats",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-boys-high-pile-fleece-lined-insulated-parka-jackets/-/A-93634898",
      tags: "Coats & Jackets, Parkas, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Parkas",
      },
    },
    {
      url: "https://www.target.com/p/rothschild-little-big-boys-double-breasted-faux-wool-peacoats/-/A-1000163515",
      tags: "Coats & Jackets, Pea Coats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pea Coats",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-baby-boys-borg-lined-puffer-coat-infant-jacket/-/A-92701679",
      tags: "Coats & Jackets, Puffer Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-infant-toddler-boys-warm-winter-coat-baby-fleece-puffer-jacket/-/A-90175588",
      tags: "Coats & Jackets, Puffer Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-boys-ripstop-winter-coat-kids-fleece-lined-jacket/-/A-1005041540",
      tags: "Coats & Jackets, Puffer Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-infant-toddler-boys-puffer-coat-baby-hooded-winter-jacket/-/A-90190399",
      tags: "Coats & Jackets, Puffer Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-zip-up-winter-coat-puffer-jacket-toddler/-/A-1004482071",
      tags: "Coats & Jackets, Puffer Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-boys-heavyweight-fleece-lined-winter-jackets/-/A-93830816",
      tags: "Coats & Jackets, Puffer Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-baby-toddler-boys-fleece-lined-puffer-coat/-/A-93446351",
      tags: "Coats & Jackets, Puffer Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-boys-heavyweight-faux-shearling-winter-jackets/-/A-93830831",
      tags: "Coats & Jackets, Puffer Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-boys-heavyweight-hooded-puffer-winter-coat/-/A-90928138",
      tags: "Coats & Jackets, Puffer Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/london-fog-little-big-boys-heavyweight-stylish-winter-puffer-jackets/-/A-93788248",
      tags: "Coats & Jackets, Puffer Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-cars-lightning-mcqueen-winter-coat-puffer-jacket-toddler/-/A-87548273",
      tags: "Coats & Jackets, Puffer Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/marvel-avengers-spider-man-hulk-black-panther-captain-america-zip-up-winter-coat-puffer-jacket-toddler-to-big-kid/-/A-89223352",
      tags: "Coats & Jackets, Puffer Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Jackets",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-infant-toddler-boys-2-piece-batman-puffer-vest-shirt-set/-/A-94201827",
      tags: "Coats & Jackets, Puffer Vests, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Vests",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-toddler-boys-2-piece-superman-puffer-vest-shirt-set/-/A-1000057860",
      tags: "Coats & Jackets, Puffer Vests, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Puffer Vests",
      },
    },
    {
      url: "https://www.target.com/p/toddler-adaptive-quilted-jacket-cat-jack/-/A-88077276",
      tags: "Coats & Jackets, Quilted Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Quilted Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-boys-long-sleeve-plaid-quilted-button-up-jacket-cream-blue/-/A-91896874",
      tags: "Coats & Jackets, Quilted Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Quilted Jackets",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-colorblock-quilted-mid-season-jacket-brown-and-black/-/A-1002931049",
      tags: "Coats & Jackets, Quilted Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Quilted Jackets",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-printed-quilted-mid-season-jacket-blue-and-gray/-/A-1002949063",
      tags: "Coats & Jackets, Quilted Jackets, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Quilted Jackets",
      },
    },
    {
      url: "https://www.target.com/p/toddler-cloud-printed-clear-rain-coat-cat-jack-blue/-/A-92877918",
      tags: "Coats & Jackets, Rain Coats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/toddler-solid-rubber-rain-coat-cat-jack-blue/-/A-92877917",
      tags: "Coats & Jackets, Rain Coats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-zip-up-waterproof-hooded-rain-jacket-coat-toddler/-/A-1003487779",
      tags: "Coats & Jackets, Rain Coats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/disney-zip-up-waterproof-hooded-rain-jacket-coat-toddler/-/A-1003550536",
      tags: "Coats & Jackets, Rain Coats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/disney-zip-up-waterproof-hooded-rain-jacket-coat-toddler/-/A-1004218638",
      tags: "Coats & Jackets, Rain Coats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rain Coats",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-little-big-boys-lightweight-jersey-lined-hooded-rain-jacket/-/A-1001904431",
      tags: "Coats & Jackets, Rain Coats, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Rain Coats",
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
