import { launchBrowser } from "./helpers/browser.js";
import { extractTargetProductData } from "./helpers/extractors.js";
import { saveToCSVAndExcel } from "./helpers/fileIO.js";
import "dotenv/config";

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
      url: "https://www.target.com/p/kids-fanny-pack-art-class/-/A-89441916",
      tags: "Fanny Packs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-fashion-jacket-art-class-8482-garnish-green/-/A-92927323",
      tags: "Fashion Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-super-mario-kart-varsity-jacket-red/-/A-91363909",
      tags: "Fashion Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-zip-up-athletic-hoodie-top-lightweight-jacket-fishing-hiking-sun-protection-outwear/-/A-1002516121",
      tags: "Fashion Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-ford-bronco-varsity-jacket-blue/-/A-91363936",
      tags: "Fashion Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-dressy-ponte-collared-jacket-kids/-/A-92969868",
      tags: "Fashion Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-lightweight-jacket-long-sleeve-zip-up-athletic-hoodie-top-fishing-hiking-sun-protection-outerwear/-/A-1003847320",
      tags: "Fashion Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-casual-coat-long-sleeve-open-front-sweatshirts-jackets-with-pockets/-/A-1002761924",
      tags: "Fashion Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/members-only-girl-s-iconic-racer-jacket/-/A-92430995",
      tags: "Fashion Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/mykis-usa-baby-girl-all-over-floral-pattern-knitted-cardigan-in-autumn-outfits/-/A-1003695347",
      tags: "Fashion Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/girl-kids-quilted-pearl-jacket-doe-a-dear/-/A-1000916674",
      tags: "Fashion Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-black-velvet-bell-bottom-pants/-/A-1000043088",
      tags: "Fashion Pants, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-flare-leggings-yoga-pant/-/A-1004010256",
      tags: "Fashion Pants, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-ruffle-flare-pants/-/A-1000715360",
      tags: "Fashion Pants, Girl",
    },
    {
      url: "https://www.target.com/p/flare-leggings/-/A-94177881",
      tags: "Fashion Pants, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-floral-legging-set/-/A-94183889",
      tags: "Fashion Pants, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-ruffle-flare-pants/-/A-1000715333",
      tags: "Fashion Pants, Girl",
    },
    {
      url: "https://www.target.com/p/posh-peanut-solid-ribbed-black-bell-bottoms/-/A-1001790569",
      tags: "Fashion Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-ruffle-my-feathers-flare-pants-with-ruffle-southern-grace/-/A-1000916379",
      tags: "Fashion Pants, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-rust-velvet-bell-bottom-pants/-/A-94175340",
      tags: "Fashion Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-high-waist-paperbag-pants-casual-fit-tapered-trousers-with-pockets/-/A-1002474498",
      tags: "Fashion Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-wide-leg-pants-high-elastic-smocked-waist-casual-cute-long-trousers/-/A-1002762989",
      tags: "Fashion Pants, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-royal-blue-bell-bottom-pants/-/A-94177883",
      tags: "Fashion Pants, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-solid-color-mesh-patched-design-fleece-thickened-pants/-/A-1004608789",
      tags: "Fashion Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-and-angel-printed-wrap-skort-pink/-/A-94431070",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-printed-wrap-skort-blue/-/A-94431066",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-striped-fashion-boxer-shorts-cat-38-jack-8482/-/A-94408558",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-front-pocket-shorts-light-green/-/A-93018548",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-front-pocket-shorts-navy-blue/-/A-94405041",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-twill-shorts/-/A-1002512168",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-short-white-checkered-lilac/-/A-1003636821",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-short-pale-yellow-and-white/-/A-1003636038",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-active-butterfly-shorts/-/A-1001544385",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-kids-lavender-seersucker-girls-ruffle-trim-woven-shorts/-/A-91648532",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-linen-short-with-pockets-old-orange-pink/-/A-1003484770",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-linen-short-with-pockets-medium-green-and-cream-striped/-/A-1003484759",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-short-light-old-pink/-/A-1003487219",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-athletic-short-pink-blue-and-butterflies/-/A-1003635979",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-print-pattern-bow-decoration-short-pants-in-summer-outfit-wearing/-/A-1004801377",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-chambray-short-navy-blue-and-white-hearts/-/A-1003487249",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-chambray-short-blue-and-white-cherries/-/A-1003487202",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-smocked-waist-short-with-knots-pink-and-white-checks/-/A-1003484818",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-knit-ruffle-trim-shorts/-/A-1003240312",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/daydream-cutout-compression-shorts/-/A-1001744825",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girl-bamboo-bloomer-shorts-copenhagen-delights/-/A-1001355043",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girl-patterned-skirt-mayoral/-/A-1001295485",
      tags: "Fashion Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-vest-set/-/A-1000043094",
      tags: "Fashion Vests, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-vest-set/-/A-94176051",
      tags: "Fashion Vests, Girl",
    },
    {
      url: "https://www.target.com/p/girl-carmel-fur-vest-mayoral/-/A-1003530690",
      tags: "Fashion Vests, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-cosplay-faux-sherling-jacket-little-kid-to-big-kid/-/A-93306809",
      tags: "Faux Fur Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/members-only-girl-midweight-with-fur-lining-jacket/-/A-85607881",
      tags: "Faux Fur Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-varsity-faux-fur-faux-sherling-jacket-little-kid-to-big-kid/-/A-93306843",
      tags: "Faux Fur Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-cosplay-faux-sherling-jacket-toddler/-/A-93306805",
      tags: "Faux Fur Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-little-girls-fleece-faux-fur-jacket/-/A-92612793",
      tags: "Faux Fur Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-wide-leg-jeans-cat-38-jack-8482/-/A-94492244",
      tags: "Five Pocket Pants, Girl",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-midweight-fleece-transitional-jackets/-/A-93364215",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-midweight-high-pile-fleece-lined-jackets/-/A-93420959",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-midweight-fleece-lined-jackets/-/A-93802528",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-midweight-floral-fleece-lined-jacket-chambray-4/-/A-93127283",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-reversible-fleece-jacket-puffer-coat/-/A-90227480",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girl-s-faux-shearling-jacket-fleece-warm-coat/-/A-90227505",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-little-girls-midweight-fleece-transitional-jackets/-/A-93364209",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/london-fog-girls-lightweight-fleece-lined-hooded-spring-jacket/-/A-91243569",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-x-large-12-lilac/-/A-90242835",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-hooded-parka-jacket-fleece-linded-winter-coat/-/A-92701680",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-reversible-fleece-puffer-jacket/-/A-93877914",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-little-girls-midweight-fleece-lined-jackets/-/A-1003247118",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-little-girls-midweight-ruffle-fleece-lined-jackets/-/A-93364212",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-fleece-coat-faux-fur-puffer-jacket/-/A-90227384",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-midweight-floral-fleece-lined-jacket-purple-5-6/-/A-93127289",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-midweight-floral-fleece-lined-jacket-purple-6x/-/A-93127290",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-midweight-floral-fleece-lined-jacket-chambray-5-6/-/A-93127284",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-large-10-lilac/-/A-90242873",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-x-small-4-5-lilac/-/A-90242821",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-jacket-two-piece-mid-season-outerwear-set-butterflies-on-multicolored-and-vibrant-pink-background/-/A-1002931122",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-3-in-1-mid-season-outerwear-set-with-printed-jacket-mauve-and-blue-pink-mountain/-/A-1002930673",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-zip-up-pocket-hoodie-xx-large-14-magenta/-/A-1001036128",
      tags: "Fleece Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-pink-checker-faux-fleece-vest/-/A-93525413",
      tags: "Fleece Vests, Girl",
    },
    {
      url: "https://www.target.com/p/kids-39-verity-platform-hardware-sandals-art-class-8482-light-brown/-/A-94293406",
      tags: "Footbed Sandals, Girl",
    },
    {
      url: "https://www.target.com/p/leveret-kids-footed-girls-striped-cotton-pajamas/-/A-89604300",
      tags: "Footed Pajamas, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-footed-fleece-sleeper/-/A-88480620",
      tags: "Footed Pajamas, Girl",
    },
    {
      url: "https://www.target.com/p/girl-baby-s-bamboo-sleeper-footies-little-one-shop/-/A-1001116516",
      tags: "Footed Pajamas, Girl",
    },
    {
      url: "https://www.target.com/p/infant-girls-zipper-footie-kickee/-/A-1001116528",
      tags: "Footed Pajamas, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-2pk-seamless-bra/-/A-18773670",
      tags: "Full Coverage Bras, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-2pk-bonded-comfort-bra/-/A-81397492",
      tags: "Full Coverage Bras, Girl",
    },
    {
      url: "https://www.target.com/p/maidenform-self-expressions-girls-molded-triangle-pullover-comfort-bra/-/A-54403007",
      tags: "Full Coverage Bras, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-soft-100-cotton-training-bra-2-pack-usa-made/-/A-1004692562",
      tags: "Full Coverage Bras, Girl",
    },
    {
      url: "https://www.target.com/p/girls-drop-waist-pleated-denim-skirt-art-class/-/A-94203973",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tiered-maxi-skirt-art-class/-/A-94340526",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-poplin-skirt-pink/-/A-93529415",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-jersey-skirt-white/-/A-93529414",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-poplin-skirt-tan/-/A-93529416",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/converse-girls-french-terry-skort/-/A-94687316",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-peasant-skirt-flower-hair-accessory/-/A-93962695",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-active-skort/-/A-1001827132",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/sol-angeles-kids-rib-tier-skirt/-/A-1004107855",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-ruffled-skirts-summer-highwaist-maxi-skirts-for-girls-a-line-adjustable-drawstring-skirts-with-irregular-hem/-/A-1003250553",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/miamore-gigi-peasant-skirt-and-hat-with-hair-accessory/-/A-93976751",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-active-skort/-/A-1001827142",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-denim-skirts-high-waist-pleated-a-line-skirts-midi-skirts-side-button-skirts-girls-bottoms-denim-blue-120/-/A-1003242508",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bow-top-and-ruffled-skirt-set-white-and-black-striped/-/A-1003009419",
      tags: "Full Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-smocked-floral-woven-halter-top-art-class/-/A-94340878",
      tags: "Girl, Halter Tops",
    },
    {
      url: "https://www.target.com/p/girls-39-puff-cherries-bag-charm-art-class-8482-red/-/A-94459238",
      tags: "Girl, Handbag Organizers",
    },
    {
      url: "https://www.target.com/p/kids-39-glitter-39-happy-birthday-39-headband-with-tulle-cat-38-jack-8482/-/A-87942210",
      tags: "Girl, Headbands",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-soft-jersey-girls-short-sleeve-hi-lo-maxi-dress/-/A-92701361",
      tags: "Girl, High-low Dresses",
    },
    {
      url: "https://www.target.com/p/sunny-breeze-sleeveless-hi-lo-dress-mia-belle-girls/-/A-1004617718",
      tags: "Girl, High-low Dresses",
    },
    {
      url: "https://www.target.com/p/paradise-dreams-sleeveless-hi-lo-dress-mia-belle-girls/-/A-1004617705",
      tags: "Girl, High-low Dresses",
    },
    {
      url: "https://www.target.com/p/lev-baby-girls-viscose-from-bamboo-short-sleeve-dress-pink-marble-print/-/A-1003267723",
      tags: "Girl, High-low Dresses",
    },
    {
      url: "https://www.target.com/p/tropical-florals-casual-hi-lo-dress-mia-belle-girls/-/A-1002293241",
      tags: "Girl, High-low Dresses",
    },
    {
      url: "https://www.target.com/p/girls-39-10pk-39-dogs-39-cotton-hipster-underwear-cat-38-jack-8482-violet/-/A-90860164",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/girls-39-14pk-39-leopard-39-hipster-underwear-cat-38-jack-8482-cream/-/A-90860165",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/girls-39-5pk-hipster-underwear-art-class-8482-black/-/A-93277903",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/girls-3pk-bonded-microfiber-underwear-art-class/-/A-94492971",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/hanes-girls-tween-underwear-seamless-hipster-pack-multicolor-4-pack/-/A-88382262",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/hanes-girls-39-6pk-microfiber-hipster-underwear/-/A-94482974",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/hanes-girls-4pk-hipster-period-underwear-moderate-protection-colors-may-vary/-/A-93666771",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/hanes-girls-12pk-hipster-colors-may-vary/-/A-88553030",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/girls-39-5pk-hipster-briefs-dealworthy-8482/-/A-90781609",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/girls-39-5pk-underwear-briefs-dealworthy-8482/-/A-90781608",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-14pk-39-hearts-and-stripes-39-hipster/-/A-89831017",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/hanes-originals-girls-5pk-supersoft-hipster-underwear/-/A-89957811",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/girls-5pk-animal-and-dot-printed-brushed-microfiber-hipster-underwear-art-class/-/A-94492972",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/girls-39-5pk-39-cherries-39-brushed-microfiber-hipster-underwear-art-class-8482/-/A-93082860",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-6pk-seamless-hipster-underwear/-/A-93666778",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/hanes-originals-girls-5pk-tween-hipster-underwear-colors-may-vary/-/A-93666772",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/girls-39-5pk-seamless-hipster-underwear-art-class-8482-blue/-/A-90781602",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-5pk-hipster-underwear/-/A-93666781",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/maidenform-girls-39-3pk-bonded-underwear/-/A-94482977",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/lucky-me-jamie-girls-performance-hipster-underwear-multiple-colors-and-sizes-7-pack/-/A-1002087146",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-hipster-style-underwear-10-pack/-/A-90508085",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-eversoft-hipster-underwear-10-pack/-/A-1002611986",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-underwear-3-pack/-/A-1004010346",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/rebel-girls-x-mightly-fair-trade-organic-cotton-underwear-3-pack/-/A-1004010253",
      tags: "Girl, Hipster Underwear",
    },
    {
      url: "https://www.target.com/p/capezio-footless-tight-w-self-knit-waist-band-girls-toddler/-/A-84003992",
      tags: "Girl, Hosiery Leggings",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-3-pack-footless-ruffle-tights/-/A-1001066491",
      tags: "Girl, Hosiery Leggings",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-rib-knit-footless-ruffled-tights/-/A-93144494",
      tags: "Girl, Hosiery Leggings",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-footless-ruffle-tights/-/A-93969686",
      tags: "Girl, Hosiery Leggings",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-3-pack-footless-ruffle-tights/-/A-1004823532",
      tags: "Girl, Hosiery Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-jean-jacket-cat-38-jack-8482-washed-black/-/A-90894652",
      tags: "Girl, Jean Jackets",
    },
    {
      url: "https://www.target.com/p/girls-jean-jacket-cat-jack/-/A-53980890",
      tags: "Girl, Jean Jackets",
    },
    {
      url: "https://www.target.com/p/girls-39-denim-jacket-cat-38-jack-8482-white/-/A-92956783",
      tags: "Girl, Jean Jackets",
    },
    {
      url: "https://www.target.com/p/girls-39-denim-jacket-cat-38-jack-8482-light-wash/-/A-92929062",
      tags: "Girl, Jean Jackets",
    },
    {
      url: "https://www.target.com/p/girls-denim-jacket-art-class-light-wash/-/A-92955215",
      tags: "Girl, Jean Jackets",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-denim-jacket/-/A-1002714863",
      tags: "Girl, Jean Jackets",
    },
    {
      url: "https://www.target.com/p/barbie-girls-pink-denim-jacket-little-kid-to-big-kid/-/A-1002770426",
      tags: "Girl, Jean Jackets",
    },
    {
      url: "https://www.target.com/p/bluey-girls-denim-jacket-little-kid-to-big-kid/-/A-1002770425",
      tags: "Girl, Jean Jackets",
    },
    {
      url: "https://www.target.com/p/barbie-girls-denim-jacket-little-kid-to-big/-/A-92251690",
      tags: "Girl, Jean Jackets",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-frayed-denim-jacket-with-embroidery-jeans/-/A-1002905463",
      tags: "Girl, Jean Jackets",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-denim-jacket-with-embroidery-floral-jeans/-/A-1002907917",
      tags: "Girl, Jean Jackets",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-jean-jacket-with-embroidery-pink-and-multicolored-gummies/-/A-1002905641",
      tags: "Girl, Jean Jackets",
    },
    {
      url: "https://www.target.com/p/girls-39-pleated-front-cuffed-jean-shorts-cat-38-jack-8482/-/A-94492234",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-cutoff-jean-shorts-cat-jack/-/A-92922248",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-cutoff-mid-rise-jean-shorts-cat-jack/-/A-92956779",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-denim-shorts-art-class-blue/-/A-92955224",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-high-rise-jean-shorts-art-class/-/A-92955222",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-cuffed-jean-shorts-cat-jack/-/A-92922247",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-high-rise-paper-bag-cuffed-jean-shorts-cat-jack/-/A-92922249",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-star-embroidered-cutoff-denim-shorts-cat-38-jack-8482-light-wash/-/A-94131169",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-cut-off-denim-shorts-art-class-blue/-/A-94190219",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-shortie-denim-shorts-art-class/-/A-94473847",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-baggy-bermuda-denim-shorts-art-class/-/A-92955223",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-star-embroidered-denim-shorts-cat-38-jack-8482-red/-/A-94131249",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-high-rise-a-line-leopard-printed-washed-denim-shorts-art-class-beige/-/A-94190217",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-cutoff-denim-shorts-cat-38-jack-8482/-/A-94492213",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-high-rise-a-line-studded-denim-shorts-art-class/-/A-94204368",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-slouchy-bermuda-shorts-art-class/-/A-94439250",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-button-paneled-denim-shorts-art-class/-/A-94204367",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-bermuda-jean-shorts-cat-jack/-/A-92922254",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-high-rise-a-line-colorblock-denim-shorts-art-class/-/A-94204357",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-denim-shorts-light-blue/-/A-94365219",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-denim-shorts-blue/-/A-94365191",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-patch-pocket-cuffed-jean-shorts-cat-jack/-/A-92922253",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-girlfriend-jean-shorts-evie-medium-wash/-/A-81942002",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/levi-39-s-174-girls-39-destructed-denim-shorts-white/-/A-93018552",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-floral-mom-denim-shorts-light-wash/-/A-93018551",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/levi-39-s-girls-39-39-patch-39-jean-shorts-medium-wash/-/A-89853452",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-denim-paperbag-shorts/-/A-1002512481",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-comfort-waist-denim-jean-shorts/-/A-88499825",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-girlfriend-jean-shorts-distressed-medium-wash/-/A-85453323",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-jean-short-with-embroidery-black-jeans/-/A-1003486304",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-jean-short-with-embroidery-pink-and-multicolored-gummies/-/A-1003486270",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-jegging-shorts-dark-denim-blue/-/A-1003460924",
      tags: "Girl, Jean Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-denim-ruffle-flare-skirt-cat-38-jack-8482/-/A-94492215",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/girls-39-denim-skirt-cat-38-jack-8482-white/-/A-92780643",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/girls-pleated-denim-mini-skirt-art-class/-/A-94473849",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/girls-39-denim-skirtall-cat-38-jack-8482-gray-wash/-/A-92922259",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/girls-39-paperbag-waist-cargo-skirt-cat-38-jack-8482-pink/-/A-94492231",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/girls-39-button-front-denim-skirt-cat-38-jack-8482/-/A-94492212",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/girls-39-paperbag-waist-embroidered-cargo-skirt-cat-38-jack-8482-cream/-/A-94492232",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-rodeo-cargo-skort-medium-wash/-/A-94708626",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/levi-39-s-174-girls-39-floral-embroidered-mash-up-denim-skirt-light-wash/-/A-93018589",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-paperbag-denim-skirt/-/A-87672097",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/levi-39-s-174-girls-39-high-rise-denim-cargo-skort-medium-wash/-/A-93018590",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-ruffled-skort/-/A-91546926",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-pique-knit-skirt/-/A-1002457976",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/jean-skirt-for-girls-toddler-mini-flared-pleated-toddler-short-jean-skirts-with-pocket-3-12t/-/A-1002528523",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/girls-denim-skirts-with-side-pockets-pleated-hem-skirts-casual-mini-denim-skirts/-/A-93726795",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-chambray-skort-navy-blue/-/A-1004053053",
      tags: "Girl, Jean Skirts",
    },
    {
      url: "https://www.target.com/p/girls-39-wide-leg-jeans-cat-38-jack-8482-light-wash/-/A-94492247",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-pull-on-wide-leg-denim-pants-cat-38-jack-8482/-/A-92992739",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-floral-embroidery-wide-leg-jeans-cat-38-jack-8482-light-wash/-/A-92956782",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-39-high-rise-baggy-jeans-art-class-8482/-/A-91212374",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-flare-jeans-cat-jack/-/A-88182199",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-pull-on-woven-jeggings-cat-jack/-/A-88116148",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-wide-leg-carpenter-jeans-art-class-tan/-/A-93113728",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-wide-leg-cargo-jeans-art-class/-/A-92955225",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-soft-knit-jeggings-cat-jack/-/A-50695212",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-denim-straight-jeans-cat-38-jack-8482/-/A-90992865",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-slouchy-wide-leg-jeans-art-class/-/A-94451988",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-pull-on-flare-jeans-cat-jack/-/A-88116637",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-wide-leg-carpenter-jeans-art-class-medium-blue/-/A-91007507",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-bootcut-jeans-cat-jack/-/A-50722989",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-relaxed-paperbag-high-rise-waist-jeans-cat-jack/-/A-85773754",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-patch-pocket-wide-leg-jeans-cat-38-jack-8482-light-wash/-/A-92922260",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-39-high-rise-flare-jeans-cat-38-jack-8482-dark-wash/-/A-94492227",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-barrel-leg-jeans-art-class/-/A-94451976",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-barrel-leg-jeans-art-class/-/A-92955216",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-floral-embroidered-cuff-wide-leg-jeans-cat-38-jack-8482-dark-wash/-/A-94492230",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-high-rise-ultimate-stretch-skinny-jeans-cat-jack/-/A-85428400",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/levi-39-s-174-girls-39-high-rise-super-skinny-distressed-jeans-medium-wash/-/A-92030026",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/levi-39-s-174-girls-39-wide-leg-jeans/-/A-92030024",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-low-rise-flare-jeans-art-class-medium-wash/-/A-93113725",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-baggy-high-rise-jeans/-/A-92030025",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-low-rise-flare-jeans-art-class/-/A-88063432",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-mid-rise-knit-waist-pull-on-skinny-jeans-cat-jack/-/A-54454335",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-baggy-barrel-fit-jeans-medium-wash/-/A-94708630",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/levi-39-s-174-girls-39-high-rise-flare-jeans/-/A-91938740",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/just-love-jeggings-for-girls-comfortable-seamless-printed-leggings/-/A-1002609900",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/just-love-girls-woven-denim-jegging-29693-mdden-8/-/A-1002609799",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/just-love-girls-woven-denim-jegging/-/A-1002609836",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/just-love-girls-woven-denim-jegging/-/A-1002609801",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-baggy-fit-flare-jeans-light-wash/-/A-94708632",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/just-love-girls-woven-denim-jegging-29692-mdden-8/-/A-1002609841",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-wide-leg-jeans-cat-38-jack-8482-medium-wash/-/A-94600612",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-adaptive-jeans-cat-jack-light-wash/-/A-85404534",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/just-love-girls-woven-denim-jegging/-/A-1002609991",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-adaptive-jeans-cat-jack-dark-wash/-/A-85404391",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-pull-on-mid-rise-jeggings/-/A-81942008",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-flare-leg-jeans-cat-38-jack-8482-dark-wash/-/A-94600607",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-726-cargo-flare-pants-pink/-/A-94708628",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-bootcut-jeans/-/A-89230714",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-coed-active-performance-track-pants/-/A-1004095275",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-iron-knee-denim-jeggings/-/A-87672521",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-wide-leg-jeans-denim-blue/-/A-1003868386",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girl-s-mid-rise-bootcut-jeans-lucky-blessed/-/A-1000527205",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/lucky-blessed-girl-s-bootcut-jeans/-/A-1000527283",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girl-skinny-jean-ceros/-/A-1001893567",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girl-friend-jean-ceros/-/A-1001893553",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girl-s-in-the-dark-of-night-flare-pants-southern-grace/-/A-1001165312",
      tags: "Girl, Jeans",
    },
    {
      url: "https://www.target.com/p/girls-nickelodeon-that-girl-lay-lay-tie-front-tank-top-lime-green/-/A-87414879",
      tags: "Girl, Jersey Tank Tops",
    },
    {
      url: "https://www.target.com/p/barbie-girls-mesh-hockey-jersey-long-sleeve-t-shirt-little-kid-to-big/-/A-1000746062",
      tags: "Girl, Jerseys",
    },
    {
      url: "https://www.target.com/p/barbie-girls-mesh-hockey-jersey-long-sleeve-t-shirt-toddler/-/A-1000746139",
      tags: "Girl, Jerseys",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-mesh-soccer-jersey-t-shirt-little-kid-to-big/-/A-1000752091",
      tags: "Girl, Jerseys",
    },
    {
      url: "https://www.target.com/p/girls-39-the-nightmare-before-christmas-jack-skellington-long-sleeve-graphic-t-shirt-black/-/A-91317354",
      tags: "Girl, Jerseys",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-pique-knit-top/-/A-1003017107",
      tags: "Girl, Jerseys",
    },
    {
      url: "https://www.target.com/p/girls-39-moana-bike-shorts-green/-/A-94431054",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/girls-39-woven-cargo-jogger-pants-cat-38-jack-8482/-/A-92929049",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/girls-39-fleece-jogger-pants-cat-38-jack-8482/-/A-94492219",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/girls-def-leppard-fleece-joggers-light-purple/-/A-93069442",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/girls-olivia-rodrigo-fleece-jogger-pants-gray/-/A-93069443",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/girls-adaptive-uniform-ponte-pants-cat-jack-khaki/-/A-94482988",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-fleece-jogger-pants-cat-38-jack-8482-heather-gray/-/A-94486504",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/leveret-kids-drawstring-jogger-pants/-/A-89317745",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/star-wars-c-3po-princess-leia-chewbacca-3-pack-leggings/-/A-87685670",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-iron-knee-fleece-jogger-sweatpants/-/A-88860411",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/disney-princess-moana-belle-rapunzel-jasmine-ariel-cinderella-girls-2-pack-pants-little-kid-to-big-kid/-/A-88398304",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-fleece-2-pack-jogger-pants-little-kid-to-big-kid/-/A-87449356",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/x-ray-boy-s-commuter-chino-jogger-elastic-waist/-/A-1001533809",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-active-track-pants/-/A-87869803",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/disney-princess-cinderella-belle-jasmine-moana-rapunzel-ariel-girls-fleece-3-pack-pants-toddler-to-big-kid/-/A-87956696",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/disney-encanto-mirabel-girls-fleece-2-pack-leggings-little-kid-to-big-kid/-/A-87721997",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-diva-bon-bon-girls-fleece-2-pack-pants-little-kid-to-big-kid/-/A-88148031",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/star-wars-c-3po-princess-leia-chewbacca-3-pack-leggings/-/A-87685671",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-girls-fleece-2-pack-leggings-little-kid-to-big-kid/-/A-88147935",
      tags: "Girl, Jogger Pants",
    },
    {
      url: "https://www.target.com/p/girls-39-cinnamoroll-matchback-shorts-white-blue/-/A-94431039",
      tags: "Girl, Jogger Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-matchback-shorts-pink-white/-/A-94431045",
      tags: "Girl, Jogger Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-matchback-shorts-green-white/-/A-94431043",
      tags: "Girl, Jogger Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-playstation-dreamy-fleece-jogger-shorts-light-blue/-/A-87461054",
      tags: "Girl, Jogger Shorts",
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-icon-3-training-short/-/A-89010427",
      tags: "Girl, Jogger Shorts",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-pocket-track-short/-/A-1004010412",
      tags: "Girl, Jogger Shorts",
    },
    {
      url: "https://www.target.com/p/dragonwing-ava-v-waist-compression-shorts/-/A-1001547080",
      tags: "Girl, Jogger Shorts",
    },
    {
      url: "https://www.target.com/p/dragonwing-level-up-compression-shorts/-/A-1001702899",
      tags: "Girl, Jogger Shorts",
    },
    {
      url: "https://www.target.com/p/zenzi-girls-39-short-sleeve-floral-chiffon-jumper-dress-ivory/-/A-93300541",
      tags: "Girl, Jumpers",
    },
    {
      url: "https://www.target.com/p/girls-square-neck-basque-waist-dress-art-class/-/A-94340525",
      tags: "Girl, Jumpers",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-uniform-plaid-jumper/-/A-86739903",
      tags: "Girl, Jumpers",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-uniform-solid-jumper/-/A-86739966",
      tags: "Girl, Jumpers",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-ponte-pleat-jumper/-/A-87721350",
      tags: "Girl, Jumpers",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-woven-bow-jumper-dress/-/A-1004842018",
      tags: "Girl, Jumpers",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-woven-bow-jumper-dress/-/A-1004842014",
      tags: "Girl, Jumpers",
    },
    {
      url: "https://www.target.com/p/girls-39-flutter-sleeve-smocked-jumpsuit-cat-38-jack/-/A-94486511",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-jumpsuit-cat-jack-blue-denim/-/A-94486510",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-jumpsuit-cat-jack-dark-olive-green/-/A-94486512",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-and-angel-embroidered-terry-tank-dress-pink/-/A-94431063",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-box-pleat-jumper/-/A-92604336",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-plaid-box-pleat-jumper/-/A-92604205",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/patpat-rompers-for-toddler-kid-girls-2-pack-sleeveless-floral-print-summer-tropical-jumpsuits-4-9-years/-/A-1003293389",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/girls-adaptive-short-sleeve-jumpsuit-cat-38-jack-8482-medium-wash/-/A-94600603",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-linen-puff-sleeve-smocked-waist-jumpsuit-kids/-/A-1000873098",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/little-girls-one-piece-ruffle-cold-one-shoulder-sleeveless-elastic-waist-with-bow-strap-jumpsuit-rompers/-/A-1002519019",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-plaid-v-neck-pleated-jumper/-/A-92604332",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/patpat-toddler-girls-jumpsuit-3-pk-rompers-little-girl-elastic-waist-sleeveless-butterfly-leopard-rompers/-/A-1003293395",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/girls-floral-playsuit-petit-confection/-/A-1000915608",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/organic-cotton-stretch-kids-jumpsuit-whimsy/-/A-1003351887",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-v-neck-pleated-jumper/-/A-92604399",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/girl-corduroy-bubble-jumper-petit-confection/-/A-1001354863",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/stretchy-wide-leg-jumpsuit-cotton-candy-stripes-charlie-lou-baby/-/A-1002731586",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-flutter-sleeve-pintuck-jumpsuit-kids/-/A-1000873055",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-sleeveless-ruffle-neck-jumpsuit-kids/-/A-90586141",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/patpat-toddler-girls-jumpsuit-3-pk-floral-rompers-little-girl-elastic-waist-sleeveless-one-piece-jumpsuits/-/A-1003293383",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/ola-otter-smocked-jumpsuit-indian-flora-white-white-4-5-years/-/A-1004191120",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-1-piece-jumpsuit-romper/-/A-1004166872",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-1-piece-jumpsuit-romper/-/A-1004166869",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-1-piece-jumpsuit-romper-flower-child-small/-/A-1004166873",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-1-piece-jumpsuit-romper/-/A-1004166871",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-1-piece-jumpsuit-romper/-/A-1004166867",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/ola-otter-smocked-jumpsuit-free-float/-/A-1003030040",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/ola-otter-smocked-jumpsuit-flamingo-forest/-/A-1003030032",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bi-material-pleated-wide-leg-jumpsuit-candy-pink/-/A-1002991678",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-seersucker-jumpsuit-with-cut-outs-pink-flowers-on-cream-background/-/A-1002991667",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-chambray-jumpsuit-navy-blue/-/A-1002991612",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-smocked-crinkle-jersey-jumpsuit-olive-green/-/A-1002975725",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-chambray-jumpsuit-with-embroidery-light-blue/-/A-1002974753",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/girl-floral-ribbed-bodysuit-petit-confection/-/A-1001354765",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/girl-kids-organic-cotton-zip-pajamas-makemake-organics/-/A-1001165224",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/girls-bohemian-playsuit-petit-confection/-/A-1000915634",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/girls-floral-bib-jersey-romper-petit-confection/-/A-1000915767",
      tags: "Girl, Jumpsuits",
    },
    {
      url: "https://www.target.com/p/girls-knee-high-socks-2pk-cat-jack-153-white/-/A-51338568",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/girls-2pk-knee-high-socks-navy-cat-jack-153/-/A-51338565",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-knee-high-socks-cat-38-jack-8482-navy-blue-white/-/A-90850040",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/girls-knee-high-socks-2pk-cat-jack-153-black/-/A-51338573",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-39-smiley-39-fashion-knee-high-cat-38-jack-8482-heather-blue/-/A-90850038",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-leopard-knee-socks-cat-38-jack-8482-mauve/-/A-94472236",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-solid-cable-knee-socks-3-pack/-/A-89402531",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-3-pack-knee-high-socks/-/A-93173590",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-wide-ribbed-cotton-blend-uniform-knee-socks/-/A-1003304232",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-cotton-blend-knee-high-girls-uniform-socks/-/A-1003336591",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-chunky-ribbed-knit-knee-high-socks/-/A-1003304124",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-cuffed-opaque-knee-high-socks/-/A-1003300106",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-over-the-knee-flat-knit-cotton-blend-uniform-socks/-/A-93664499",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/ctm-girl-s-solid-colored-soft-uniform-knee-high-socks-1-pair/-/A-90098914",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-all-over-bow-knee-high-socks/-/A-1003334796",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girl-s-athletic-ribbed-cotton-blend-knee-high-sock/-/A-1003336655",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-polka-point-girls-cotton-blend-knee-socks/-/A-1003363959",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-cotton-blend-heart-and-stripes-knee-sock/-/A-1003334358",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-dazzling-hearts-girls-cotton-blend-knee-high-socks/-/A-1003400299",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-sweet-bow-cotton-blend-knee-high-socks/-/A-1003365775",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-fuzzy-heart-knee-high-socks/-/A-1003329330",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-velvet-bow-cotton-blend-knee-high-sock/-/A-1003336438",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-glitter-unicorn-knee-high-socks/-/A-1003365852",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-thin-ribbed-girls-cotton-blend-knee-high-sock/-/A-1003311261",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-cotton-blend-beach-more-worry-less-knee-sock/-/A-1003334642",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-pointelle-cotton-blend-knee-high-sock/-/A-1003451559",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-gingham-heart-girls-cotton-blend-knee-high-sock/-/A-1003336488",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-tie-dye-popsicle-knee-high-socks/-/A-1003366744",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-hello-summer-knee-high-socks/-/A-1003366222",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-sweetheart-studded-knee-high-socks/-/A-1003336832",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-star-shine-knee-high-socks/-/A-1003400342",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-athletic-smiley-cotton-blend-knee-high-socks/-/A-1003336362",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-fly-sky-high-butterfly-girls-cotton-blend-knee-socks/-/A-1003336899",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-fuzzy-bow-knee-high-socks/-/A-1003329139",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-crochet-bow-cotton-blend-knee-high-sock/-/A-1003304382",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/little-love-bug-crochet-knee-high-socks-2-pack/-/A-1001830739",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-chain-stitch-knee-high-socks/-/A-1003451694",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-bow-knee-high-socks/-/A-1003452087",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-cotton-blend-multi-graffiti-hearts-knee-sock/-/A-1003329491",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-ribbed-cotton-blend-knee-high-sock/-/A-1003336616",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-v-stripe-lurex-cotton-blend-knee-high-socks/-/A-1003336410",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-be-happy-bear-knee-high-socks/-/A-1003336354",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-rockin-robots-girls-knee-socks/-/A-1003364114",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-distressed-wash-denim-look-girls-knee-high-socks/-/A-1003336289",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-distressed-wash-denim-cherries-girls-knee-high-sock/-/A-1003336283",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-tennis-star-knee-high-socks/-/A-1003329164",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-color-block-stripe-stretch-cotton-knee-sock/-/A-1003334324",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-write-on-camp-kids-cotton-blend-knee-high-socks-3-pack/-/A-1003336549",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-busy-bee-glitter-cotton-knee-high-socks/-/A-1003365650",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-glitzy-sunglasses-knee-high-socks/-/A-1003366165",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-crochet-ruffle-design-knee-high-socks/-/A-1003329346",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-multi-stone-knee-high-socks/-/A-1003401588",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girl-s-3-pair-pack-soft-stripe-knee-high-socks/-/A-1003336586",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-twotone-varsity-stripe-knee-high-socks/-/A-1003334385",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/wrapables-lace-ruffles-and-bow-knee-high-girl-socks-set-of-3/-/A-1000900457",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-varsity-stripe-checkered-heart-cotton-rich-knee-sock/-/A-1003334370",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-multi-stripe-smiley-cotton-blend-knee-high-sock/-/A-1003336375",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/wrapables-lace-ruffles-and-bow-knee-high-girl-socks-set-of-2/-/A-1000549869",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-neon-stitched-heart-cotton-blend-knee-high-sock/-/A-1003402908",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-pastel-butterfly-girls-knee-high-sock/-/A-1003402574",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-stretch-cotton-tennis-smiley-face-knee-sock-white-4/-/A-1003460683",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-retro-tie-dye-girls-cotton-blend-knee-high-socks/-/A-1003400392",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-2-pair-pack-i-woke-up-like-this-knee-high-socks-assorted/-/A-1003430559",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-metallic-sport-stripe-knee-high-socks/-/A-1003402704",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-graffiti-star-knee-high-socks/-/A-1003402616",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-pointelle-soft-stretch-cotton-knee-socks/-/A-1003334773",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/wrapables-lace-ruffles-and-bow-knee-high-girl-socks-set-of-5/-/A-93998526",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-acid-wash-cotton-blend-knee-high-socks/-/A-1003336297",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-triple-stripe-knee-high-socks-white-black-4/-/A-1003460613",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-glitter-butterfly-cotton-knee-high-socks/-/A-1003364472",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-air-brush-winking-smiley-cotton-blend-knee-high-sock/-/A-1003402951",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-varsity-knee-high-socks/-/A-1003366098",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-thin-ribbed-athletic-stripe-cotton-blend-knee-high-socks/-/A-1003402898",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-rubber-smiley-face-cotton-rich-knee-sock/-/A-1003334377",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-pointelle-dot-knee-high-socks/-/A-1003452466",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-basic-sheer-knee-highs/-/A-1003409458",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-tie-dye-graffiti-shapes-knee-high-socks/-/A-1003460815",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-stretch-cotton-graffiti-play-knee-sock/-/A-1003460671",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-distressed-wash-denim-stars-girls-knee-high-sock-black-4/-/A-1003460519",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-vintage-stripe-cotton-blend-knee-high-socks/-/A-1003403015",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/wrapables-knee-high-diamond-pattern-girl-socks-set-of-4/-/A-94136162",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-jazzy-jeweled-girls-cotton-blend-knee-socks/-/A-1003336873",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-stretch-cotton-splatter-paint-knee-sock-white-12/-/A-1003460634",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-camp-love-knee-high-socks-blue-14/-/A-1003460598",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-hello-knee-high-socks-black-14/-/A-1003460825",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-whatever-girls-knee-high-cotton-blend-sock/-/A-1003402114",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-2-pair-pack-essentials-cotton-tights/-/A-1004593957",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-2-pair-pack-sheer-heather-basic-tights/-/A-1004593495",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-fancy-floral-girls-sheer-tights-black-2-4/-/A-1004592973",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-zoe-zigzag-sheer-tights-black/-/A-1004592392",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-liquid-metal-girl-s-shimmer-tights-black-multi-2-4/-/A-1004590033",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/little-love-bug-company-lace-top-knee-high-socks/-/A-1003631835",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/little-love-bug-company-standard-knee-high-socks/-/A-1003631822",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/little-love-bug-company-eyelet-knee-high-socks/-/A-1003630652",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-side-pearls-cotton-blend-knee-high-socks/-/A-1003460869",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-cotton-blend-swiss-dot-knee-high-socks/-/A-1003451744",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-diamond-zag-knee-high-sock-with-scalloped-cuff/-/A-1003451664",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-double-diamond-cotton-blend-knee-high-socks/-/A-1003451626",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-wavy-line-dress-socks/-/A-1003451602",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-beawesome-knee-high-socks/-/A-1003451592",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-bebrave-knee-high-socks/-/A-1003451552",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-omg-girls-cotton-blend-knee-high-sock/-/A-1003402237",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-camp-rules-girls-knee-high-sock/-/A-1003402083",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-open-work-shimmer-cotton-blend-knee-high-socks/-/A-1003400154",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-gemstone-knee-high-socks/-/A-1003400059",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-rhinestone-heart-girls-knee-high-cotton-blend-socks/-/A-1003399968",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-shimmer-knee-high-socks/-/A-1003399854",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-embroidered-bicycle-knee-high-socks/-/A-1003368172",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-fruity-fun-watermelon-girls-cotton-blend-knee-high-socks/-/A-1003364045",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-sky-s-the-limit-girls-pom-pom-knee-socks/-/A-1003363907",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-floral-pearl-girls-cotton-blend-knee-high-socks/-/A-1003336923",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-gold-and-gilded-butterfly-knee-high-cotton-blend-girls-socks/-/A-1003336917",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-fuzzy-and-fun-girls-pom-pom-cotton-blend-knee-socks/-/A-1003336905",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-tidy-little-bow-girls-cotton-blend-knee-socks/-/A-1003336888",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-she-shimmers-girls-cotton-blend-knee-socks/-/A-1003336880",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-foil-and-foliage-cotton-blend-girls-knee-socks/-/A-1003336867",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-fun-fuzzy-girls-polka-dot-cotton-blend-knee-socks/-/A-1003336849",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-a-speck-of-spots-polka-dot-knee-high-socks/-/A-1003336842",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-jewel-mosaic-girls-combed-cotton-knee-high-socks/-/A-1003336768",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-cotton-blend-ruler-knee-high-socks/-/A-1003336477",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-lurex-recess-knee-high-socks/-/A-1003336467",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-crystal-bear-knee-high-socks/-/A-1003336455",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-retro-stripe-cotton-blend-thin-ribbed-knee-high-socks/-/A-1003336431",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-marled-ribbed-stripe-girls-cotton-blend-knee-high-socks/-/A-1003336421",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-fuzzy-stripe-cotton-blend-knee-high-socks/-/A-1003336398",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-herringbone-thin-ribbed-knee-high/-/A-1003336382",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-striped-bee-cotton-blend-knee-high-sock/-/A-1003336341",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-jeweled-smiley-face-cotton-blend-knee-high-socks/-/A-1003336327",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-thin-ribbed-sport-stripe-cotton-blend-knee-high-socks/-/A-1003336303",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-pearls-and-stripes-jeweled-girls-knee-high-socks/-/A-1003335274",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-high-climbers-embroidered-floral-knee-high-socks/-/A-1003335258",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-starry-night-jeweled-girls-combed-cotton-crew-socks/-/A-1003335223",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-stretch-cotton-bow-trim-knee-sock/-/A-1003334667",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-soft-stretch-cotton-ribbed-more-summer-knee-socks/-/A-1003334449",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-cotton-blend-graffiti-camp-knee-sock/-/A-1003334446",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-stretch-cotton-multi-heart-design-knee-sock/-/A-1003334433",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-opaque-stretch-cotton-blissful-bloom-knee-high-sock/-/A-1003334254",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-stretch-cotton-multi-stripe-m-graphic-knee-sock/-/A-1003329553",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-single-heart-logo-knee-high-socks/-/A-1003329512",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-open-work-heart-knee-high-socks/-/A-1003329373",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-fuzzy-smiley-face-knee-high-socks/-/A-1003329273",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-tennis-m-knee-high-socks/-/A-1003329151",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-embroidered-crest-cotton-knee-high-socks/-/A-1003329119",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-tassel-cotton-knee-high-socks/-/A-1003329087",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/embossed-summer-knee-high/-/A-1003329075",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/iridescent-balloon-dog-knee-high/-/A-1003329068",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/100-cool-knee-high/-/A-1003329055",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-pelerine-cotton-blend-knee-high-socks/-/A-1003304306",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/memoi-cable-knit-girls-cotton-blend-knee-high-socks/-/A-1003304035",
      tags: "Girl, Knee High Socks",
    },
    {
      url: "https://www.target.com/p/capezio-18-legwarmer-girls/-/A-87519900",
      tags: "Girl, Leg Warmers",
    },
    {
      url: "https://www.target.com/p/memoi-girls-oversized-tutu-ballerina-anklet-socks/-/A-1003454504",
      tags: "Girl, Leg Warmers",
    },
    {
      url: "https://www.target.com/p/girls-flare-leggings-cat-jack/-/A-89906092",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-ribbed-leggings-cat-38-jack-8482/-/A-90927665",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-leggings-cat-jack/-/A-53438228",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-uniform-ponte-jeggings-cat-jack/-/A-89690533",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-heart-leggings-cat-jack-black/-/A-82496262",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-ribbed-flare-leggings-cat-38-jack-8482/-/A-93278901",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-capri-leggings-art-class/-/A-93460927",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-sparkle-leggings-cat-jack/-/A-83723614",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-tie-dye-leggings-cat-38-jack-8482/-/A-93278899",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-heart-leggings-cat-jack/-/A-94492253",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-flare-leggings-art-class/-/A-89610128",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-foldover-waist-flare-leggings-art-class-8482/-/A-94435225",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-39-floral-39-leggings-cat-38-jack-8482-light-olive/-/A-94492209",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-leggings-with-side-pocket-art-class/-/A-89609849",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-leopard-printed-leggings-cat-38-jack-8482-beige/-/A-94492228",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-capri-leggings-cat-jack/-/A-78469344",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-halloween-leggings-cat-38-jack-8482-purple/-/A-94636431",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-2pk-tie-dye-leggings-cat-38-jack-8482-blue/-/A-93317014",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-halloween-leggings-cat-38-jack-8482-cream/-/A-94636429",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-adaptive-2pk-capri-leggings-cat-jack/-/A-85630544",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-2pk-adaptive-leggings-cat-jack/-/A-79802767",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-2pk-flare-leggings-cat-38-jack-8482-black-faux-denim/-/A-90997624",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-adaptive-flare-ribbed-leggings-cat-38-jack-8482-red-purple/-/A-94579576",
      tags: "Girl, Leggings",
    },
  ];

  let allShopifyRows = [];
  let failedUrls = [];
  let currentIndex = 0;
  const total = urls.length;

  for (const urlEntry of urls) {
    let url, extraTags;
    if (typeof urlEntry === "string") {
      url = urlEntry;
      extraTags = "";
    } else if (typeof urlEntry === "object" && urlEntry.url) {
      url = urlEntry.url;
      extraTags = urlEntry.tags || "";
    } else {
      console.warn("❌ Invalid urlEntry:", urlEntry);
      failedUrls.push(urlEntry);
      continue;
    }

    try {
      const shopifyRows = await extractTargetProductData(page, url, extraTags);
      allShopifyRows.push(...shopifyRows);
      currentIndex++;
      console.log(
        `✅ One Success - Progress: ${currentIndex}/${total} (${(
          (currentIndex / total) *
          100
        ).toFixed(1)}%)`
      );
    } catch (err) {
      console.error("❌ Failed:", url, err.message);
      currentIndex++;
      console.log(
        `❌ One Failed - Progress: ${currentIndex}/${total} (${(
          (currentIndex / total) *
          100
        ).toFixed(1)}%)`
      );
      failedUrls.push({ url, tags: extraTags });
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
