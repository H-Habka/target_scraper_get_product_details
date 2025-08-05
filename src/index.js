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
      url: "https://www.target.com/p/girls-39-strapless-bra-art-class-8482-beige-black/-/A-94328444",
      tags: "Bandeau Bras, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bandeau Bras",
      },
    },
    {
      url: "https://www.target.com/p/women-s-dance-bra-by-silky-dance-convertible-bra-clear-straps/-/A-1003237186",
      tags: "Bandeau Bras, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bandeau Bras",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-soft-100-cotton-training-bra-2-pack-usa-made/-/A-1004692562",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/girls-3pk-cotton-cami-bra-cat-jack-gray-white-black/-/A-51042296",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/girls-seamless-bra-2pk-cat-jack-153-gray-black/-/A-51109810",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/maidenform-girls-2pk-seamfree-lace-back-padded-crop-bra-white/-/A-53059847",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/girls-2pk-seamless-bra-cat-jack/-/A-79386151",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/girls-3pk-cotton-cami-bra-cat-jack-pink-white-beige/-/A-51042298",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/girls-seamless-bra-2pk-cat-jack-white-tan/-/A-51109802",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/girls-microfiber-bonded-bra-art-class-beige/-/A-84011420",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/girls-microfiber-bonded-bra-art-class-pink/-/A-84011367",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-soft-and-smooth-training-bra-3-pack/-/A-89032334",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-seamless-bra-cat-38-jack-8482-pink-white/-/A-90781604",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-soft-cup-bralette-cat-38-jack-8482/-/A-94328445",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-wire-free-molded-back-closure-bra-art-class-8482/-/A-94328449",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-fits-all-triangle-bra-art-class-8482-sand-beige-rose-red/-/A-94328447",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-fits-all-triangle-bra-art-class-8482-white-tan/-/A-94328448",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/just-love-girls-bras-pack-of-4-comfortable-and-stylish-training-bras-for-girls/-/A-1002778594",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/just-love-girls-bras-pack-of-6/-/A-1002779097",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/champion-girls-39-authentic-originals-bralette/-/A-94618849",
      tags: "Bralettes, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/girls-solid-2pk-seamless-bra-art-class-beige/-/A-84306156",
      tags: "Bramis, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bramis",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-39-floral-39-seamless-ruched-bra-art-class-8482-white/-/A-89872520",
      tags: "Bramis, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bramis",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-seamless-ruched-bra-art-class-8482/-/A-90781603",
      tags: "Bramis, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bramis",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-cotton-shelf-bra-cami-cat-38-jack-8482/-/A-90781599",
      tags: "Bramis, Bras, Girls’ Clothing, Kids’ Clothing, Underwear & Bras",
      filters: {
        type: "Bramis",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-5pk-cami-colors-may-vary/-/A-87446270",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Underwear & Bras",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girls-5pk-camisole-white-gray-pink/-/A-50302682",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Underwear & Bras",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-cami-top-cat-38-jack-8482/-/A-93300728",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Underwear & Bras",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-peplum-gauze-tank-top-cat-38-jack-8482-blue/-/A-94472209",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Underwear & Bras",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/girls-graphic-cami-art-class/-/A-94600922",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Underwear & Bras",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/girls-babydoll-woven-cami-art-class/-/A-94600945",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Underwear & Bras",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/girls-pointelle-strappy-cami-art-class/-/A-94775222",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Underwear & Bras",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-emma-girls-camisoles-multiple-colors-and-sizes-3-pack/-/A-1002425452",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Underwear & Bras",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-girls-sparkly-lined-camisole/-/A-1004493859",
      tags: "Camisoles, Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Underwear & Bras",
      filters: {
        type: "Camisoles",
      },
    },
    {
      url: "https://www.target.com/p/kids-adaptive-2pk-short-sleeve-undershirt-with-abdominal-access-cat-jack-gray-white/-/A-85722384",
      tags: "Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, T-shirts, Underwear & Bras",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girl-t-shirt-essential-t-tees-super-cool-7-pack/-/A-1003127898",
      tags: "Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, T-shirts, Underwear & Bras",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-graphic-cami-art-class/-/A-94600922",
      tags: "Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Tank Tops, Underwear & Bras",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-toddler-girl-s-eversoft-layering-tanks-pack-of-6/-/A-92045558",
      tags: "Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Tank Tops, Underwear & Bras",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-emma-girls-camisoles-multiple-colors-and-sizes-3-pack/-/A-1002425452",
      tags: "Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Tank Tops, Underwear & Bras",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-girls-sparkly-lined-camisole/-/A-1004493859",
      tags: "Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Tank Tops, Underwear & Bras",
      filters: {
        type: "Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-toddler-girl-s-eversoft-layering-tanks-pack-of-6/-/A-92045558",
      tags: "Girls’ Clothing, Kids’ Clothing, Slips & Undershirts, Tee Undershirts, Underwear & Bras",
      filters: {
        type: "Tee Undershirts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-girls-usa-made-soft-cozy-thermal-2-piece-long-johns/-/A-90509865",
      tags: "Coordinate Sets, Girls’ Clothing, Kids’ Clothing, Thermals, Underwear & Bras",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/rocky-thermal-underwear-for-girls-long-johns-fleece-lined-set-shirt-pants-base-layer/-/A-93253190",
      tags: "Coordinate Sets, Girls’ Clothing, Kids’ Clothing, Thermals, Underwear & Bras",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/kickoff-thermal-underwear-for-kids-thermals-top-bottom-set-girls-thermal-underwear-set-kids-long-underwear-base-layer-kids-pajamas/-/A-1001263594",
      tags: "Coordinate Sets, Girls’ Clothing, Kids’ Clothing, Thermals, Underwear & Bras",
      filters: {
        type: "Coordinate Sets",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-girls-usa-made-soft-cozy-thermal-2-piece-long-johns/-/A-90509865",
      tags: "Girls’ Clothing, Kids’ Clothing, Thermal Underwear Sets, Thermals, Underwear & Bras",
      filters: {
        type: "Thermal Underwear Sets",
      },
    },
    {
      url: "https://www.target.com/p/rocky-thermal-underwear-for-girls-long-johns-fleece-lined-set-shirt-pants-base-layer/-/A-93253190",
      tags: "Girls’ Clothing, Kids’ Clothing, Thermal Underwear Sets, Thermals, Underwear & Bras",
      filters: {
        type: "Thermal Underwear Sets",
      },
    },
    {
      url: "https://www.target.com/p/kickoff-thermal-underwear-for-kids-thermals-top-bottom-set-girls-thermal-underwear-set-kids-long-underwear-base-layer-kids-pajamas/-/A-1001263594",
      tags: "Girls’ Clothing, Kids’ Clothing, Thermal Underwear Sets, Thermals, Underwear & Bras",
      filters: {
        type: "Thermal Underwear Sets",
      },
    },
    {
      url: "https://www.target.com/p/minus33-merino-wool-midweight-kid-s-base-layer-crew-100-merino-wool/-/A-89832579",
      tags: "Girls’ Clothing, Kids’ Clothing, Thermal Underwear Shirts, Thermals, Underwear & Bras",
      filters: {
        type: "Thermal Underwear Shirts",
      },
    },
    {
      url: "https://www.target.com/p/hanes-originals-girls-5pk-supersoft-bikini-underwear/-/A-89957810",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-ryleigh-girls-organic-cotton-bikini-underwear-multiple-colors-and-sizes-7-pack/-/A-1002279633",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-girls-soft-100-organic-cotton-briefs-3-pack-usa-made/-/A-1004692408",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girls-10pk-cotton-bikini-underwear-cat-jack/-/A-85347862",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-14pk-39-floral-39-cotton-bikini-cat-38-jack-8482/-/A-89872521",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-14pk-cotton-bikini-underwear/-/A-90860140",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-hazel-girls-micromodal-bikini-underwear-multiple-colors-and-sizes-6-pack/-/A-1002422251",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girls-4pk-tween-seamless-bikini-underwear-blue-pink/-/A-93666770",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/hanes-originals-girls-5pk-tween-bikini-underwear-colors-may-vary/-/A-93666773",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-6pk-breathable-bikini/-/A-94482970",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-assorted-cotton-bikini-underwear-10-pack/-/A-90915449",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-moana-2-7pk-bikini-underwear/-/A-92199305",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-5pk-bikini-underwear-art-class-8482-pink/-/A-93277904",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-girls-eight-pack-bikini-brief/-/A-91386423",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-erica-girls-organic-cotton-bikini-underwear-multi-color-multiple-sizes-6-pack/-/A-94063975",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-ava-girls-bikini-underwear-multi-color-multiple-sizes-6-pack/-/A-93797108",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/posh-peanut-posh-peanut-vintage-pink-rose-3-pack-brief-set/-/A-1001574566",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-organic-cotton-brief/-/A-90990123",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-bikini-7-pack/-/A-1002930660",
      tags: "Bikini Underwear, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Bikini Underwear",
      },
    },
    {
      url: "https://www.target.com/p/kids-batman-night-psd-boxer-briefs/-/A-1005073632",
      tags: "Boxer Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Briefs",
      },
    },
    {
      url: "https://www.target.com/p/stretchy-boxer-briefs-gone-fishin-charlie-lou-baby/-/A-1003754708",
      tags: "Boxer Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-squishmallows-4pk-boxer-briefs/-/A-89283961",
      tags: "Boxer Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-38-friends-4pk-underwear/-/A-92199306",
      tags: "Boxer Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-disney-princess-boxer-briefs/-/A-94580981",
      tags: "Boxer Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-4pk-bluey-boxer-briefs/-/A-94580976",
      tags: "Boxer Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Briefs",
      },
    },
    {
      url: "https://www.target.com/p/kids-batman-dynamic-space-2-pack-boxer-briefs/-/A-1004435383",
      tags: "Boxer Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Briefs",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-boxer-brief-3-pack/-/A-1002930192",
      tags: "Boxer Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Briefs",
      },
    },
    {
      url: "https://www.target.com/p/mightly-boys-fair-trade-organic-cotton-trunks-3-pack/-/A-1004010355",
      tags: "Boxer Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Briefs",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-layla-girls-dance-shorts-3-pack-size-6y-color-rainforest/-/A-1000401115",
      tags: "Boxer Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Briefs",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-boxer-7-pack/-/A-1002930507",
      tags: "Boxer Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Briefs",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-boxer-brief-7-pack-in-primary-mix/-/A-1001254568",
      tags: "Boxer Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Briefs",
      },
    },
    {
      url: "https://www.target.com/p/kids-sonic-the-hedgehog-let-s-go-psd-boxer-briefs/-/A-1004436211",
      tags: "Boxer Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Briefs",
      },
    },
    {
      url: "https://www.target.com/p/kids-3pk-seamless-boxer-shorts-art-class-blue-pink-blush-pink/-/A-87557447",
      tags: "Boxer Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-3pk-seamless-boxer-shorts-art-class-black-gray-white/-/A-87557448",
      tags: "Boxer Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boxer Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-sophie-girls-shorties-underwear-multiple-colors-and-sizes-3-pack/-/A-1001324035",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-annika-girls-boyshorts-underwear-ebony-blush-size-7-8y/-/A-93796073",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-10pk-heart-striped-cotton-boy-shorts-cat-jack/-/A-89872519",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-barbie-4pk-underwear/-/A-90021730",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girls-4pk-boyshort-period-underwear-moderate-protection-colors-may-vary/-/A-93666769",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-heather-boy-short-underwear-assorted-14-pack/-/A-90988914",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-stitch-4pk-athletic-shorts-underwear/-/A-93717500",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/champion-girls-39-5pk-authentic-originals-boyshort-underwear/-/A-94618847",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/just-love-seamless-panties-for-girls-underwear-pack-of-6/-/A-92168972",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/ctm-girl-s-colorful-boy-short-underwear-5-pack/-/A-1004620786",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-annika-girls-boyshorts-underwear-pastel-size-7-8/-/A-9999999303",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-girls-soft-cotton-boyshort-underwear-usa-made-comfortable-kids-toddlers-undies/-/A-1001031367",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-jada-girls-bike-shorts-multi-color-multiple-sizes-3-pack/-/A-93947632",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-layla-girls-dance-shorts-3-pack-size-6y-color-rainforest/-/A-1000401115",
      tags: "Boy Shorts, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Boy Shorts",
      },
    },
    {
      url: "https://www.target.com/p/hanes-moves-girls-4pk-breathable-stretch-brief-underwear-colors-may-vary/-/A-93666774",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-sophie-girls-shorties-underwear-multiple-colors-and-sizes-3-pack/-/A-1001324035",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-girls-soft-100-organic-cotton-briefs-3-pack-usa-made/-/A-1004692408",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-boy-and-girl-cartoon-print-pattern-cotton-triangle-underwear/-/A-1004783836",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-10pk-cotton-briefs-cat-jack/-/A-88019645",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girls-6pk-pure-microfiber-briefs-colors-may-vary/-/A-87446335",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-14pk-classic-briefs-colors-may-vary/-/A-81316370",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-6pk-comfort-stretch-briefs-colors-may-vary/-/A-84062960",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-jamie-girls-performance-briefs-underwear-multiple-sizes-and-colors-7-pack/-/A-1001736890",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-6pk-seamless-briefs-colors-may-vary/-/A-84003223",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-disney-the-little-mermaid-ariel-7pk-underwear/-/A-88505156",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-disney-princess-7pk-underwear/-/A-79753030",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-7pk-underwear/-/A-87694978",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-disney-frozen-7pk-underwear/-/A-79753044",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-7pk-underwear/-/A-84855594",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-7pk-underwear/-/A-83699542",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-pokemon-7pk-underwear/-/A-82082784",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-trolls-poppy-7pk-boxer-briefs/-/A-89251636",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-mario-7pk-underwear/-/A-82082782",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-girls-eight-pack-bikini-brief/-/A-91386447",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-7pk-briefs/-/A-90021737",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-my-little-pony-7pk-underwear/-/A-82426277",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-brief/-/A-90831967",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-brief-girls/-/A-83927917",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-6pk-micro-mesh-briefs-colors-may-vary/-/A-90860163",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-14pk-39-bows-39-cotton-briefs-underwear-cat-38-jack-8482-purple/-/A-93278089",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girls-12pk-butterfly-and-dot-cotton-briefs/-/A-94482975",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-6pk-micro-mesh-briefs-colors-may-vary/-/A-90860163",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-bella-girls-briefs-underwear-multiple-colors-and-sizes-comfyseam-3-pack/-/A-1001783579",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girls-10pk-cotton-stretch-brief-underwear-colors-may-vary/-/A-93666775",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/hanes-moves-girls-4pk-breathable-stretch-brief-underwear-colors-may-vary/-/A-93666774",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-adaptive-2pk-heart-briefs-cat-jack-salmon-pink/-/A-84796725",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-adaptive-2pk-star-briefs-cat-jack-pink/-/A-84796727",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-eversoft-brief-underwear-6-pack/-/A-90988970",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-low-rise-briefs-underwear-10-pack/-/A-90508097",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-hipster-style-underwear-10-pack/-/A-90508085",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-eversoft-hipster-underwear-10-pack/-/A-1002611986",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-squishmallows-7pk-briefs/-/A-91270936",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-disney-inside-out-7pk-underwear/-/A-91254473",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-lilo-38-stitch-7pk-100-cotton-underwear/-/A-94436252",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-gabby-39-s-dollhouse-briefs/-/A-94580983",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/care-bears-7pk-100-cotton-underwear/-/A-94472229",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-smurfs-7pk-underwear/-/A-93717499",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/champion-girls-39-5pk-authentic-originals-briefs/-/A-94618844",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-toddler-girl-s-briefs-underwear-10-pack/-/A-90508303",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-girls-eight-pack-bikini-brief/-/A-91386432",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/capezio-foundations-brief-girls/-/A-84644752",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-sophie-girls-shorties-underwear-multiple-colors-and-sizes-3-pack/-/A-1001324035",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-girls-eight-pack-bikini-brief/-/A-91386423",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-gracie-girls-organic-cotton-briefs-multiple-colors-multiple-sizes-7-pack/-/A-93859476",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-sophie-girls-brief-underwear-multiple-colors-and-sizes-6-pack/-/A-1002280438",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/textiel-trade-toddler-girl-s-winnie-the-pooh-assorted-briefs-3-pack/-/A-1001655134",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-jamie-girls-performance-briefs-underwear-multiple-sizes-and-colors-7-pack/-/A-1001736890",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/textiel-trade-girl-s-winnie-the-pooh-assorted-briefs-3-pack/-/A-1001655137",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-brief-7-pack-in-fruit-mix/-/A-1002931557",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-toddler-girls-eversoft-brief-underwear-10-pack/-/A-1002611769",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-brief-3-pack/-/A-1002245867",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-watercolor-butterfly-girls-3-piece-brief-set-posh-peanut/-/A-1002890410",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-6-pack-underwears-ultra-smooth-and-soft-cotton/-/A-1003467717",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-organic-cotton-brief/-/A-90990123",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-boys-and-girls-soft-cotton-simple-brief/-/A-91043686",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-bella-girls-briefs-underwear-multiple-colors-and-sizes-comfyseam-3-pack/-/A-1001783579",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-brief-7-pack-in-primary-mix/-/A-1001910138",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-brief-7-pack/-/A-1002893458",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-brief-7-pack/-/A-1002893289",
      tags: "Briefs, Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/hanes-originals-girls-5pk-supersoft-hipster-underwear/-/A-89957811",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-14pk-39-hearts-and-stripes-39-hipster/-/A-89831017",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girls-tween-underwear-seamless-hipster-pack-multicolor-4-pack/-/A-88382262",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girls-12pk-hipster-colors-may-vary/-/A-88553030",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-6pk-seamless-hipster-underwear/-/A-93666778",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-10pk-39-dogs-39-cotton-hipster-underwear-cat-38-jack-8482-violet/-/A-90860164",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-14pk-39-leopard-39-hipster-underwear-cat-38-jack-8482-cream/-/A-90860165",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girls-39-6pk-microfiber-hipster-underwear/-/A-94482974",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girls-4pk-hipster-period-underwear-moderate-protection-colors-may-vary/-/A-93666771",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/hanes-originals-girls-5pk-tween-hipster-underwear-colors-may-vary/-/A-93666772",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-5pk-underwear-briefs-dealworthy-8482/-/A-90781608",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-5pk-hipster-briefs-dealworthy-8482/-/A-90781609",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-hipster-style-underwear-10-pack/-/A-90508085",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-eversoft-hipster-underwear-10-pack/-/A-1002611986",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-5pk-seamless-hipster-underwear-art-class-8482-blue/-/A-90781602",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girls-3pk-bonded-microfiber-underwear-art-class/-/A-94492971",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-5pk-hipster-underwear-art-class-8482-black/-/A-93277903",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girls-5pk-animal-and-dot-printed-brushed-microfiber-hipster-underwear-art-class/-/A-94492972",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-5pk-39-cherries-39-brushed-microfiber-hipster-underwear-art-class-8482/-/A-93082860",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/maidenform-girls-39-3pk-bonded-underwear/-/A-94482977",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/lucky-me-jamie-girls-performance-hipster-underwear-multiple-colors-and-sizes-7-pack/-/A-1002087146",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-underwear-3-pack/-/A-1004010346",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/rebel-girls-x-mightly-fair-trade-organic-cotton-underwear-3-pack/-/A-1004010253",
      tags: "Girls’ Clothing, Hipster Underwear, Kids’ Clothing, Underwear, Underwear & Bras",
      filters: {
        type: "Hipster Underwear",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-boy-and-girl-cartoon-print-pattern-cotton-triangle-underwear/-/A-1004783836",
      tags: "Girls’ Clothing, Kids’ Clothing, Packing Underwear, Underwear, Underwear & Bras",
      filters: {
        type: "Packing Underwear",
      },
    },
    {
      url: "https://www.target.com/p/girl-3-pack-seamless-bandeau-danskin-m/-/A-1001774708",
      tags: "Girls’ Clothing, Kids’ Clothing, Training Underwear, Underwear, Underwear & Bras",
      filters: {
        type: "Training Underwear",
      },
    },
    {
      url: "https://www.target.com/p/rene-rofe-girl-s-waffle-thermal-long-underwear-2-piece-set/-/A-1000008718",
      tags: "Girls’ Clothing, Kids’ Clothing, Trunks, Underwear, Underwear & Bras",
      filters: {
        type: "Trunks",
      },
    },
    {
      url: "https://www.target.com/p/mightly-boys-fair-trade-organic-cotton-trunks-3-pack/-/A-1004010355",
      tags: "Girls’ Clothing, Kids’ Clothing, Trunks, Underwear, Underwear & Bras",
      filters: {
        type: "Trunks",
      },
    },
    {
      url: "https://www.target.com/p/rene-rofe-toddler-girl-s-waffle-thermal-long-underwear-2-piece-set/-/A-93996644",
      tags: "Girls’ Clothing, Kids’ Clothing, Trunks, Underwear, Underwear & Bras",
      filters: {
        type: "Trunks",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-big-girls-polyester-seamless-boyshorts-pack-of-2/-/A-1003868551",
      tags: "Girls’ Clothing, Kids’ Clothing, Undergarment Sets, Underwear, Underwear & Bras",
      filters: {
        type: "Undergarment Sets",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-big-girls-polyester-seamless-boyshorts-pack-of-2/-/A-1003868551",
      tags: "Girls’ Clothing, Kids’ Clothing, Underwear, Underwear & Bras, Underwear Sets",
      filters: {
        type: "Underwear Sets",
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
