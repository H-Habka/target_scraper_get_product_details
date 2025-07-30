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
      url: "https://www.target.com/p/maidenform-girls-strapless-convertible-bra-beige/-/A-85067972",
      tags: "Girl, Strapless Bras",
    },
    {
      url: "https://www.target.com/p/maidenform-girls-39-convertible-strapless-bra-black/-/A-93666787",
      tags: "Girl, Strapless Bras",
    },
    {
      url: "https://www.target.com/p/girls-strappy-sports-bra-all-in-motion/-/A-94088531",
      tags: "Girl, Strappy Bras",
    },
    {
      url: "https://www.target.com/p/girls-high-waist-paper-bag-pants-belted-waist-tapered-pants-bow-deco-pants-with-pocket-khaki-160/-/A-93555393",
      tags: "Girl, Suit Pants",
    },
    {
      url: "https://www.target.com/p/patpat-l-o-l-surprise-toddler-kid-girls-2pcs-character-print-top-with-mesh-tutu-skirt-outfit-set/-/A-1002839479",
      tags: "Girl, Suit Sets",
    },
    {
      url: "https://www.target.com/p/kids-girls-tennis-golf-dress-outfit-sleeveless-dress-with-pockets-athletic-skorts-and-polo-tank-top-sets/-/A-1002515889",
      tags: "Girl, Suit Sets",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-jumpsuit-and-fleece-shrug-outfit-set-little-kid-to-big-kid/-/A-92954439",
      tags: "Girl, Suit Sets",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-queen-bee-girls-jumpsuit-and-fleece-shrug-outfit-set-little-kid-to-big-kid/-/A-92954438",
      tags: "Girl, Suit Sets",
    },
    {
      url: "https://www.target.com/p/girls-color-blocking-round-neck-ribbed-waist-sport-shorts-dress-set/-/A-1002807697",
      tags: "Girl, Suit Sets",
    },
    {
      url: "https://www.target.com/p/girls-tennis-dress-golf-outfit-sets-sleeveless-tank-top-skirt-with-shorts-pockets/-/A-1002761779",
      tags: "Girl, Suit Sets",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-large-brim-straw-hat-osfm-beige/-/A-93976742",
      tags: "Girl, Sun Hats",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-black-bow-hat-osfm-black/-/A-93976746",
      tags: "Girl, Sun Hats",
    },
    {
      url: "https://www.target.com/p/girls-printed-halter-slip-dress-art-class/-/A-94340524",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/girls-39-minnie-mouse-gauze-gauze-dress-pink/-/A-94431053",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/girls-button-front-drop-waist-dress-art-class/-/A-94340523",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/girls-strappy-babydoll-bubble-dress-art-class/-/A-94152124",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-gauze-dress-blue/-/A-94431037",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/girls-ruched-fit-flare-empire-waist-mini-dress-art-class/-/A-94152122",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-woven-floral-midi-dress-cat-38-jack-8482/-/A-94576189",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/girls-sweater-dress-art-class/-/A-93146685",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/girls-drop-waist-strappy-tiered-dress-art-class/-/A-94021778",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-tropical-floral-ruffle-strap-dress-pink/-/A-94653597",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/sanrio-hello-kitty-girls-2-pack-dress-multicolor-2t/-/A-1003488275",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/patpat-disney-princess-frozen-elsa-anna-toddler-girl-dresses-kids-girl-sleeveless-and-ruffle-sleeve-dress-set-2-6-years/-/A-1003946914",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/patpat-disney-princess-toddler-girl-dress-kids-girls-1pc-tiana-cinderella-beller-ariel-rapunzel-ruffled-dress/-/A-1003947733",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-sleeveless-dress-for-big-kids-purple-size-12/-/A-1003463443",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/patpat-disney-lilo-stitch-toddler-girl-tank-dress-hawaiian-tropical-floral-print-summer-beach-holiday-sleeveless-a-line-sundress-3-10y/-/A-1003947565",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/patpat-family-matching-outfits-boho-floral-print-square-neck-puff-sleeve-smocked-dress-and-short-sleeve-t-shirts-matching-set/-/A-1003646956",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/brainy-ballerina-layered-tutu-dress-mia-belle-girls/-/A-1004233775",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/patpat-family-matching-outfits-mommy-and-me-dress-floral-print-sleeveless-crewneck-dress-for-toddler-girl-2-years/-/A-1003356095",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/sanrio-hello-kitty-girls-2-pack-dress-multicolor-2t/-/A-1003488283",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-twirl-dress/-/A-1002539247",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-tiered-dress/-/A-1002539056",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/boho-blossom-tank-tiered-dress-mia-belle-girls-blush-10-12/-/A-1003839788",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-flutter-bow-woven-dress/-/A-91604111",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/girls-3d-sunflower-sleeveless-dress-mia-belle-girls/-/A-1002437609",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/dressed-with-love-sequin-heart-skater-dress-mia-belle-girls/-/A-1003919621",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-button-front-ruffle-sundress-kids/-/A-1002929811",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-chambray-sundress-with-embroidery-kids/-/A-1002929800",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/girls-sleeveless-mesh-baby-doll-dress-art-class/-/A-92103257",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/family-matching-outfits-women-girls-sleeveless-splicing-floral-leaf-print-midi-dresses-and-colorblock-short-sleeve-shirts/-/A-1003457014",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-long-sleeve-baby-rib-dress/-/A-90568041",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-bow-strap-border-hem-sundress-kids/-/A-1002929834",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-flutter-sleeve-eyelet-dress-kids/-/A-1002929989",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-sleeveless-special-occasion-sun-dress-with-bow-back-detail-and-embroidery-kids/-/A-90586200",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/berry-bliss-hi-lo-ruffle-dress-mia-belle-girls/-/A-1002840469",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/golden-sands-ruffle-shoulder-sundress-mia-belle-girls/-/A-1003839777",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/pretty-petal-pink-tiered-dress-mia-belle-girls/-/A-1004605875",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-splash-queen-mermaid-dress-mia-belle-girls/-/A-1004605899",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/tropical-botanicals-sleeveless-hi-lo-dress-mia-belle-girls/-/A-1004617711",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/sweet-cherry-embroidered-pinstripe-tank-dress-mia-belle-girls/-/A-1004457470",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/spring-butterflies-smocked-tiered-dress-mia-belle-girls/-/A-1004617695",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/pink-candy-stripe-button-up-linen-ruffle-dress-mia-belle-girls/-/A-1004617544",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-velvet-dress/-/A-91191080",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/daisy-delight-smocked-tiered-dress-mia-belle-girls/-/A-1004617534",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/multi-print-flower-and-ruffle-dress/-/A-93490904",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-jersey-long-sleeve-tiered-dress/-/A-90735838",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-knit-short-sleeve-twirl-dress/-/A-93068581",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/paisley-print-mid-length-dress/-/A-93490915",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-sleeveless-special-occasion-party-dress-with-cross-back-detail-kids/-/A-90586267",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-overall-jumper-dress/-/A-91496877",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/firecracker-fairy-tulle-dress-mia-belle-girls/-/A-1003939188",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/wrapables-meow-meow-doodling-cat-dress/-/A-1001254369",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/radiant-heart-twirly-long-sleeve-skater-dress-mia-belle-girls/-/A-1003919627",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/star-wars-girls-tsum-tsum-stormtrooper-youth-kids-skater-dress/-/A-91866653",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/wrapables-bunnies-in-floral-garden-dress/-/A-1001254284",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-peter-pan-collar-seersucker-dress-kids/-/A-90585910",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/whizmax-girls-nightgown-dress-princess-lace-sleeveless-pajamas-cute-nightwear-size-10-12-years-youth-teen-girls/-/A-91712240",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-paisley-print-bohemian-dress/-/A-93490897",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/secret-garden-rose-hi-lo-ruffle-dress-mia-belle-girls/-/A-1002508116",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-smocked-sundress-soft-red-solid-10/-/A-1002929855",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/girls-39-astrid-floral-long-sleeve-sundress/-/A-91487282",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-knit-short-sleeve-twirl-dress/-/A-93068577",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-striped-pattern-lace-design-sleeveless-dress/-/A-1004811290",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/mary-engelbreit-roxy-dress-antique-wallpaper/-/A-1004727797",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/stars-stripes-sweetheart-twirl-dress-mia-belle-girls/-/A-1004233793",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/pink-lace-sleeveless-casual-dress-mia-belle-girls/-/A-1003867437",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/bunny-dreams-ruffle-denim-dress-mia-belle-girls/-/A-1003867427",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/boho-blossom-floral-print-tank-tiered-dress-mia-belle-girls/-/A-1003839794",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-sleeveless-linen-dress-white-and-sage-striped/-/A-1002806317",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-terry-beach-dress-pink-and-white/-/A-1002805513",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/printed-beach-dress-yellow-pink-flowers-on-navy-blue-background/-/A-1002805477",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bi-material-belted-dress-beiges/-/A-1002805387",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/printed-eyelet-dress-beige-and-small-flowers/-/A-1002804501",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/sunbathing-sweetie-cold-shoulder-dress-mia-belle-girls/-/A-1002439299",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/tropical-floral-bloom-ruffle-hi-lo-dress-mia-belle-girls/-/A-1002316878",
      tags: "Girl, Sundresses",
    },
    {
      url: "https://www.target.com/p/girls-sleeveless-sweater-dress-cat-jack/-/A-94147306",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-ombre-sequin-sparkle-tulle-puff-sleeve-dress/-/A-1001695081",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-short-sleeve-fleece-dress/-/A-1002095349",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-bow-detail-intarsia-sweater-dress-kids/-/A-93392081",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-collared-henley-sweater-dress-kids/-/A-92929545",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-tennis-sweater-dress-kids/-/A-1000871924",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-hanukkah-doll/-/A-1000856771",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-schoolgirl-cable-sweater-dress-kids/-/A-92214479",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-white-fitted-scallop-dress/-/A-1002525140",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-girls-organic-sleeveless-pleated-sweater-dress-with-bow-kids/-/A-1001113679",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-eat-em-all-graphic-short-sleeve-fleece-dress/-/A-1002376976",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-the-grinch-max-is-my-boo/-/A-1000781585",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-grow-grrrl-hearts-the-earth-graphic-short-sleeve-fleece-dress/-/A-1001999443",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791854",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-birthday-girl-graphic-short-sleeve-fleece-dress/-/A-1002089719",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-evolution-stickers-graphic-short-sleeve-fleece-dress/-/A-1002396629",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-valentine-s-heartbreaker/-/A-1000833046",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803300",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000850470",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/bubble-guppies-molly-and-zooli-heart-bubble-heart-graphic-short-sleeve-fleece-dress/-/A-1000758457",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-gary-the-snail/-/A-1000785132",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-pixel-gaming-group/-/A-1000838877",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-turtles-character-grid/-/A-1000838803",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-i-love-pop-poppy/-/A-1000798279",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-violet-skyler-jade-graphic-short-sleeve-fleece-dress/-/A-1001996051",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/bubble-guppies-oona-graphic-short-sleeve-fleece-dress/-/A-1000758466",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/bubble-guppies-deema/-/A-1000758436",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-grinch-face/-/A-1000781628",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-poppy-stacked-name/-/A-1000798185",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/bubble-guppies-time-for-lunch-graphic-short-sleeve-fleece-dress/-/A-1000758365",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-the-many-moods-of-grinch/-/A-1000780438",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-and-woodstock-vermont-ski-resort/-/A-1000840413",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-team-paw-chase/-/A-1000809622",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-team-paw-skye/-/A-1000809501",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-leo-and-brothers-there-are-no-rules/-/A-1000809130",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skys-the-limit/-/A-1000807538",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-dress-pink-and-coral-houses/-/A-1002806701",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rugrats-retro-rugrats/-/A-1000784668",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-cable-knit-peter-pan-collar-sweater-dress-kids/-/A-92929491",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790778",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820772",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-show-up-glow-up-poppy/-/A-1000798449",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-dear-santa/-/A-1000848642",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-radical-group/-/A-1000786778",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000810312",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-the-grinch-stink-stank-stunk/-/A-1000781564",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-sketch/-/A-1000787334",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-original-i-am-green-eggs-and-ham/-/A-1000773640",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-livin-that-poppy-life/-/A-1000751215",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-american-thing-two/-/A-1000773775",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-i-regret-nothing/-/A-1000841592",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girls-run-the-world-graphic-short-sleeve-fleece-dress/-/A-1002070018",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-plankton-naughty-list/-/A-1000850996",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-i-loaf-you-bread-graphic-short-sleeve-fleece-dress/-/A-1001599181",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-conversation-hearts/-/A-1000832939",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-the-grinch-sweet-as-cindy-lou-who/-/A-1000780474",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-love-you-like-pizza-graphic-short-sleeve-fleece-dress/-/A-1001599151",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-birthdays-are-sweet-graphic-short-sleeve-fleece-dress/-/A-1002090709",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-woodstock-with-flower-and-pattern-graphic-short-sleeve-fleece-dress/-/A-1001724520",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-happy-eevee-youth-girls-fleece-dress-graphic-short-sleeve-fleece-dress/-/A-1002385898",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1001985249",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000826156",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-short-sleeve-fleece-dress/-/A-1001977654",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-americana/-/A-1000816931",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-adventure-citys-heroes/-/A-1000807407",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/polly-pocket-i-love-polly-pocket-graphic-short-sleeve-fleece-dress/-/A-1002020245",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/little-tikes-imagination-is-all-it-takes-graphic-short-sleeve-fleece-dress/-/A-1001986943",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-feel-the-vibes-poppy/-/A-1000798392",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-easter-weaster/-/A-1000850149",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-leopard-heart-graphic-short-sleeve-fleece-dress/-/A-1002064367",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-space-rock-girls-graphic-short-sleeve-fleece-dress/-/A-1002005040",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-snorlax-graphic-short-sleeve-fleece-dress/-/A-1002396996",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-computer-design-graphic-short-sleeve-fleece-dress/-/A-1001992409",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-to-have-my-cousins-graphic-short-sleeve-fleece-dress/-/A-1001728794",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-mini-mini-mini-graphic-short-sleeve-fleece-dress/-/A-1002065505",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-sandy-cheeks/-/A-1000785073",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-sleeping-athletics/-/A-1000784634",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-irish-i-was-a-unicorn-graphic-short-sleeve-fleece-dress/-/A-1001729000",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-peanuts-snoopy-woodstock-graphic-short-sleeve-fleece-dress/-/A-1001724411",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-fly-on-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1001736222",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-lightning-bolt-art-graphic-short-sleeve-fleece-dress/-/A-1002396706",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-hug-heart-flower-graphic-short-sleeve-fleece-dress/-/A-1001724402",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rocket-power-finish-line/-/A-1000826644",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-mr-salty-graphic-short-sleeve-fleece-dress/-/A-1001734973",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-glow-grrrl-neon-qt-beats-babe-graphic-short-sleeve-fleece-dress/-/A-1001985730",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-short-sleeve-ruffle-edge-sweater-dress-kids/-/A-92929482",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-grinch-it-s-fine/-/A-1000748084",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-birthday-graphic-short-sleeve-fleece-dress/-/A-1002090597",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-clues-crew-graphic-short-sleeve-fleece-dress/-/A-1001735037",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-happy-st-patricks-day/-/A-1000849738",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-happy-st-patricks-day/-/A-1000827713",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002075002",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818183",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-turn-it-up-poppy/-/A-1000798414",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-drip-drop-painting-girls-graphic-short-sleeve-fleece-dress/-/A-1002004282",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-luck-of-the-square-pants/-/A-1000849900",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-so-eggcited/-/A-1000849797",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-hugs-kisses-pup-treats/-/A-1000832996",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-rainbow-sparkle-box-graphic-short-sleeve-fleece-dress/-/A-1001996123",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-sheep-holding-a-shamrock-graphic-short-sleeve-fleece-dress/-/A-1001728860",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-manga-art-graphic-short-sleeve-fleece-dress/-/A-1002396058",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791781",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-suns-out-funs-out/-/A-1000786471",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-best-friends-forever/-/A-1000790019",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-be-my-meowentine/-/A-1001598431",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-bow-detail-intarsia-sweater-dress-kids/-/A-92929372",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-toy-doll-lineup-graphic-short-sleeve-fleece-dress/-/A-1001996211",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-squirtle-bulbasaur-charmander-group-graphic-short-sleeve-fleece-dress/-/A-1002348164",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-fangtastic-graphic-short-sleeve-fleece-dress/-/A-1002008415",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-summer-is-for-camping-graphic-short-sleeve-fleece-dress/-/A-1001734665",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-campus-club-graphic-short-sleeve-fleece-dress/-/A-1002050787",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-i-m-a-mighty-pup/-/A-1000807425",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803252",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-logo-hearts-graphic-short-sleeve-fleece-dress/-/A-1002083988",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-scandinavian-bunny-with-flowers-graphic-short-sleeve-fleece-dress/-/A-1002611327",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mtv-drawn-floral-logo-graphic-short-sleeve-fleece-dress/-/A-1001984411",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-sunny-days-ahead-graphic-short-sleeve-fleece-dress/-/A-1001731916",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818195",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-it-s-my-birthday-graphic-short-sleeve-fleece-dress/-/A-1002090901",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-rubble-beach/-/A-1000786424",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-nope-not-today-snorlax-graphic-short-sleeve-fleece-dress/-/A-1002395452",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-classic-logo-pink-graphic-short-sleeve-fleece-dress/-/A-1002083132",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-love-yourself-graphic-short-sleeve-fleece-dress/-/A-1002082256",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002075094",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-all-american-kid-graphic-short-sleeve-fleece-dress/-/A-1002104963",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-friends-rock-graphic-short-sleeve-fleece-dress/-/A-1002083146",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-rainbow-vibes-poppy/-/A-1000798236",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-life-liberty-pursuit-of-pizza/-/A-1000847989",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-garfield-sunglasses/-/A-1000786060",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-dress-to-impress-yourself/-/A-1000798926",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/polly-pocket-totally-tiny-vibes-graphic-short-sleeve-fleece-dress/-/A-1002012898",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-skater-chick-w-flowers-graphic-short-sleeve-fleece-dress/-/A-1001996781",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-camp-chill-graphic-short-sleeve-fleece-dress/-/A-1001727139",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803313",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-bon-bon-doll-graphic-short-sleeve-fleece-dress/-/A-1001992680",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-ruffle-collar-sweater-dress-black-with-gold-7/-/A-93415883",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-leo-and-brothers-turtle-power/-/A-1000809068",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-catch-em-all-design-graphic-short-sleeve-fleece-dress/-/A-1002396214",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-vertical/-/A-1000809567",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-alaska-last-frontier-graphic-short-sleeve-fleece-dress/-/A-1001726361",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-zuma-sketch/-/A-1000787143",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-sparkle-and-bright-barbie-graphic-short-sleeve-fleece-dress/-/A-1002112459",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mtv-animal-print-splatter-graphic-short-sleeve-fleece-dress/-/A-1001984418",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-bff-vibes-with-queen-bee-deva-neon-qt-graphic-short-sleeve-fleece-dress/-/A-1001985569",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-ski-ya-later-graphic-short-sleeve-fleece-dress/-/A-1001726455",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-cottontail-candy-co-graphic-short-sleeve-fleece-dress/-/A-1002632241",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-ruff-ruff-rescue-graphic-short-sleeve-fleece-dress/-/A-1001734721",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-poppy-singing/-/A-1000798313",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-sprigatito-stats-graphic-short-sleeve-fleece-dress/-/A-1002357584",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-rainbow-high-character-group-graphic-short-sleeve-fleece-dress/-/A-1001996122",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-the-snuggle-is-real-pikachu-and-sylveon-graphic-short-sleeve-fleece-dress/-/A-1002350385",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-girls-club-graphic-short-sleeve-fleece-dress/-/A-1001993828",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-candylicious-butterflies-hearts-graphic-short-sleeve-fleece-dress/-/A-1001993875",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-love-makes-the-world-go-around-graphic-short-sleeve-fleece-dress/-/A-1002064321",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-disco-made-me-do-it-graphic-short-sleeve-fleece-dress/-/A-1000798991",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-cell-phone-chat-girls-graphic-short-sleeve-fleece-dress/-/A-1001993950",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-festively-fabulous-graphic-short-sleeve-fleece-dress/-/A-1002112516",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-easter-scene-graphic-short-sleeve-fleece-dress/-/A-1002632253",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-woodstock-rose-graphic-short-sleeve-fleece-dress/-/A-1001724482",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girls-all-together-graphic-short-sleeve-fleece-dress/-/A-1002118594",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-it-s-always-a-great-time-for-smores-graphic-short-sleeve-fleece-dress/-/A-1001739001",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-they-call-me-ken-graphic-short-sleeve-fleece-dress/-/A-1002118597",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-sister-of-the-birthday-girl-graphic-short-sleeve-fleece-dress/-/A-1002087273",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-squad-graphic-short-sleeve-fleece-dress/-/A-1002053698",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-butterflies-flutter-graphic-short-sleeve-fleece-dress/-/A-1002118625",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girls-stick-together-graphic-short-sleeve-fleece-dress/-/A-1002065602",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-witch-logo-graphic-short-sleeve-fleece-dress/-/A-1002118613",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-short-sleeve-fleece-dress/-/A-1002118601",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-butterfly-logo-graphic-short-sleeve-fleece-dress/-/A-1002075743",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-afro-hoops-graphic-short-sleeve-fleece-dress/-/A-1002118660",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-u-glow-girl-graphic-short-sleeve-fleece-dress/-/A-1002004551",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-clawsome-graphic-short-sleeve-fleece-dress/-/A-1002008109",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-don-t-worry-go-along-graphic-short-sleeve-fleece-dress/-/A-1001739153",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-arrow-heart-logo-graphic-short-sleeve-fleece-dress/-/A-1002083987",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-group-lucky-graphic-short-sleeve-fleece-dress/-/A-1002108205",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/polly-pocket-polly-pocket-ombre-logo-graphic-short-sleeve-fleece-dress/-/A-1002018233",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-choose-kindness-graphic-short-sleeve-fleece-dress/-/A-1002078015",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-school-crest-graphic-short-sleeve-fleece-dress/-/A-1002118416",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-girl-group-crest-graphic-short-sleeve-fleece-dress/-/A-1001977012",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-inspired-by-barbie-graphic-short-sleeve-fleece-dress/-/A-1002081262",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002075621",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-rainbow-checkered-frame-graphic-short-sleeve-fleece-dress/-/A-1002118379",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-day-graphic-short-sleeve-fleece-dress/-/A-1002047815",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-oh-zaps-graphic-short-sleeve-fleece-dress/-/A-1002008192",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/little-tikes-summer-fun-graphic-short-sleeve-fleece-dress/-/A-1001986936",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-character-group-graphic-short-sleeve-fleece-dress/-/A-1002008293",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-short-sleeve-fleece-dress/-/A-1002067289",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-draculaura-spider-webs-graphic-short-sleeve-fleece-dress/-/A-1002118473",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-queen-bee-neon-qt-deva-sugar-graphic-short-sleeve-fleece-dress/-/A-1001985756",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-collage-graphic-short-sleeve-fleece-dress/-/A-1002054674",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-rainbow-alt-girl-graphic-short-sleeve-fleece-dress/-/A-1001997006",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-clawdeen-wolf-moon-phases-graphic-short-sleeve-fleece-dress/-/A-1002118454",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002072619",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-original-barbie-graphic-short-sleeve-fleece-dress/-/A-1002062070",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-all-dolls-together-graphic-short-sleeve-fleece-dress/-/A-1001992940",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-day-graphic-short-sleeve-fleece-dress/-/A-1002043466",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/little-tikes-i-dream-of-ice-cream-graphic-short-sleeve-fleece-dress/-/A-1001987018",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-classic-dolls-graphic-short-sleeve-fleece-dress/-/A-1002118583",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-chasing-dreams-graphic-short-sleeve-fleece-dress/-/A-1002050516",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-always-extra-graphic-short-sleeve-fleece-dress/-/A-1002118421",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-tis-the-season-graphic-short-sleeve-fleece-dress/-/A-1002112646",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-turn-it-up-graphic-short-sleeve-fleece-dress/-/A-1001996168",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-logo-santa-hat-graphic-short-sleeve-fleece-dress/-/A-1002118704",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-birthday-kid-graphic-short-sleeve-fleece-dress/-/A-1002118679",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-dancing-dolls-dance-graphic-short-sleeve-fleece-dress/-/A-1002005076",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-greetings-from-barbie-land-graphic-short-sleeve-fleece-dress/-/A-1002050105",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/polly-pocket-polly-pocket-pink-logo-graphic-short-sleeve-fleece-dress/-/A-1002014555",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002118647",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-character-group-graphic-short-sleeve-fleece-dress/-/A-1002008363",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-red-white-and-blue-fish-graphic-short-sleeve-fleece-dress/-/A-1001739124",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-pastel-cut-out-character-spots-graphic-short-sleeve-fleece-dress/-/A-1002008641",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-argyle-graphic-short-sleeve-fleece-dress/-/A-1002046781",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-holiday-cheer-squad-graphic-short-sleeve-fleece-dress/-/A-1002112555",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girl-power-in-illusion-wave-graphic-short-sleeve-fleece-dress/-/A-1002072323",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-individual-classic-icons-create-silhouette-graphic-short-sleeve-fleece-dress/-/A-1002067098",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-property-of-barbie-land-beach-volleyball-team-graphic-short-sleeve-fleece-dress/-/A-1002048111",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-postal-service-california-graphic-short-sleeve-fleece-dress/-/A-1002050991",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-woman-kind-kind-woman-graphic-short-sleeve-fleece-dress/-/A-1002118580",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-time-to-shine-graphic-short-sleeve-fleece-dress/-/A-1002004878",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-its-my-birthday-graphic-short-sleeve-fleece-dress/-/A-1002086033",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002073228",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-fierce-strong-girl-graphic-short-sleeve-fleece-dress/-/A-1002068952",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-afro-and-hoops-graphic-short-sleeve-fleece-dress/-/A-1002118696",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-class-crew-in-attendance-graphic-short-sleeve-fleece-dress/-/A-1002008774",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-sketch-original-graphic-short-sleeve-fleece-dress/-/A-1002060467",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-m-c-swag-vibe-graphic-short-sleeve-fleece-dress/-/A-1001992773",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-original-icons-in-circle-grid-graphic-short-sleeve-fleece-dress/-/A-1002060923",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-sister-of-birthday-boy-graphic-short-sleeve-fleece-dress/-/A-1002085649",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-red-white-and-blue-muscle-car-graphic-short-sleeve-fleece-dress/-/A-1002104566",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-short-sleeve-fleece-dress/-/A-1002069156",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-summer-pool-floaties-graphic-short-sleeve-fleece-dress/-/A-1002060147",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-sun-and-beaches-graphic-short-sleeve-fleece-dress/-/A-1002118559",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/the-brady-bunch-classic-hollywood-squares-graphic-short-sleeve-fleece-dress/-/A-1002118343",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-ken-hearts-barbie-graphic-short-sleeve-fleece-dress/-/A-1002066369",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-proud-to-be-me-graphic-short-sleeve-fleece-dress/-/A-1002091135",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girls-support-girls-graphic-short-sleeve-fleece-dress/-/A-1002118539",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-hanukkah-doll-duo/-/A-1000856837",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-yearbook-photos-graphic-short-sleeve-fleece-dress/-/A-1002008613",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-winter-holidays-graphic-short-sleeve-fleece-dress/-/A-1002046148",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-palm-trees-graphic-short-sleeve-fleece-dress/-/A-1002063143",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-3-yrs-graphic-short-sleeve-fleece-dress/-/A-1002086574",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-live-play-outside-the-box-graphic-short-sleeve-fleece-dress/-/A-1002118526",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-witch-silhouette-graphic-short-sleeve-fleece-dress/-/A-1002118622",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-monster-friends-forever-graphic-short-sleeve-fleece-dress/-/A-1002008256",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-short-sleeve-fleece-dress/-/A-1002069405",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-logo-santa-hat-graphic-short-sleeve-fleece-dress/-/A-1002112584",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-all-things-red-white-and-blue-graphic-short-sleeve-fleece-dress/-/A-1001736273",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-racing-usa-graphic-short-sleeve-fleece-dress/-/A-1002104703",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-bff-hearts-graphic-short-sleeve-fleece-dress/-/A-1002083936",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-malibu-vibes-graphic-short-sleeve-fleece-dress/-/A-1002118550",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-frankie-stein-voltageous-graphic-short-sleeve-fleece-dress/-/A-1002008737",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-drive-fast-live-free-graphic-short-sleeve-fleece-dress/-/A-1002104722",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-extra-w-a-side-of-swag-graphic-short-sleeve-fleece-dress/-/A-1001997080",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-believe-in-yourself-graphic-short-sleeve-fleece-dress/-/A-1002082468",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-i-wheelie-love-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1002104985",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-retro-style-graphic-short-sleeve-fleece-dress/-/A-1002118334",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-chica-chica-tropical-graphic-short-sleeve-fleece-dress/-/A-1001985236",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-easter-vibes-graphic-short-sleeve-fleece-dress/-/A-1002072296",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-palm-trees-graphic-short-sleeve-fleece-dress/-/A-1002051200",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-tie-dye-and-butterflies-flutter-around-barbie-graphic-short-sleeve-fleece-dress/-/A-1002058235",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-peace-love-barbie-graphic-short-sleeve-fleece-dress/-/A-1002073833",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-brave-bold-and-fearless-graphic-short-sleeve-fleece-dress/-/A-1002118682",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-karaoke-queen-graphic-short-sleeve-fleece-dress/-/A-1001985445",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-cleo-and-mermaid-graphic-short-sleeve-fleece-dress/-/A-1002008082",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-witch-graphic-short-sleeve-fleece-dress/-/A-1002118675",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-short-sleeve-fleece-dress/-/A-1002067368",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-patterned-love-graphic-short-sleeve-fleece-dress/-/A-1002075845",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-xoxo-barbie-graphic-short-sleeve-fleece-dress/-/A-1002057891",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-hanukkah-believe-in-miracles/-/A-1000856778",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-mountain-retro-graphic-short-sleeve-fleece-dress/-/A-1001739110",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-out-of-box-graphic-short-sleeve-fleece-dress/-/A-1002079457",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-glam-series-graphic-short-sleeve-fleece-dress/-/A-1002003960",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-happy-holidays-graphic-short-sleeve-fleece-dress/-/A-1002112623",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-holidays-christmas-graphic-short-sleeve-fleece-dress/-/A-1002049162",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-you-re-the-sweetest-barbie-graphic-short-sleeve-fleece-dress/-/A-1002118555",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-sk8er-grl-graphic-short-sleeve-fleece-dress/-/A-1002118369",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-boogie-babe-graphic-short-sleeve-fleece-dress/-/A-1002004452",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-red-white-and-racing-graphic-short-sleeve-fleece-dress/-/A-1002104336",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-creeperific-graphic-short-sleeve-fleece-dress/-/A-1002008411",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-dolls-lead-together-graphic-short-sleeve-fleece-dress/-/A-1002118399",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-nick-logo-graphic-short-sleeve-fleece-dress/-/A-1002008265",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-ferris-my-hero-graphic-short-sleeve-fleece-dress/-/A-1002032866",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-queen-bee-is-born-to-roam-graphic-short-sleeve-fleece-dress/-/A-1002004777",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-earth-day-heart-graphic-short-sleeve-fleece-dress/-/A-1001739144",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-1950-s-camper-snoopy-graphic-short-sleeve-fleece-dress/-/A-1001739027",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-small-fry-caf-graphic-short-sleeve-fleece-dress/-/A-1002003879",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/the-brady-bunch-the-brady-kids-graphic-short-sleeve-fleece-dress/-/A-1001989251",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-lagoona-blue-graphic-short-sleeve-fleece-dress/-/A-1002118507",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girl-strong-kind-brave-bold-and-fearless-graphic-short-sleeve-fleece-dress/-/A-1002071555",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-athletics-graphic-short-sleeve-fleece-dress/-/A-1002051467",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-homeworks-got-me-like-graphic-short-sleeve-fleece-dress/-/A-1001739187",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-groovy-babe-graphic-short-sleeve-fleece-dress/-/A-1001993981",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-royal-realness-graphic-short-sleeve-fleece-dress/-/A-1001993800",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/if-movie-anything-s-possible-graphic-short-sleeve-fleece-dress/-/A-1002118279",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-this-kid-s-gotta-fly-graphic-short-sleeve-fleece-dress/-/A-1001739158",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-retro-style-dolls-graphic-short-sleeve-fleece-dress/-/A-1001985451",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-get-ur-party-on-graphic-short-sleeve-fleece-dress/-/A-1001985440",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-friendship-goals-graphic-short-sleeve-fleece-dress/-/A-1002118448",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-true-monster-at-heart-graphic-short-sleeve-fleece-dress/-/A-1001972970",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-gradient-logo-graphic-short-sleeve-fleece-dress/-/A-1001996059",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/if-movie-lewis-poster-graphic-short-sleeve-fleece-dress/-/A-1002118268",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-catch-my-vibe-graphic-short-sleeve-fleece-dress/-/A-1001997122",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-st-paddys-collage-graphic-short-sleeve-fleece-dress/-/A-1002108107",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-costume-party-graphic-short-sleeve-fleece-dress/-/A-1002090893",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-high-school-dolls-graphic-short-sleeve-fleece-dress/-/A-1002049438",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-candy-hearts-graphic-short-sleeve-fleece-dress/-/A-1002082921",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-be-original-squares-graphic-short-sleeve-fleece-dress/-/A-1002083015",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-glow-grrrl-retro-styled-graphic-short-sleeve-fleece-dress/-/A-1001992756",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-catch-some-rays-graphic-short-sleeve-fleece-dress/-/A-1002004379",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-sunset-and-palm-trees-graphic-short-sleeve-fleece-dress/-/A-1002055252",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/charmed-the-power-of-three-will-set-you-free-graphic-short-sleeve-fleece-dress/-/A-1001994398",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/if-movie-imagination-blossom-graphic-short-sleeve-fleece-dress/-/A-1002118273",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-hand-painted-heart-graphic-short-sleeve-fleece-dress/-/A-1002072921",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-soar-graphic-short-sleeve-fleece-dress/-/A-1001739165",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-girl-crew-graphic-short-sleeve-fleece-dress/-/A-1001739061",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-out-of-office-graphic-short-sleeve-fleece-dress/-/A-1002065579",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-sunglasses-and-sun-graphic-short-sleeve-fleece-dress/-/A-1002062080",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-b-day-bbs-graphic-short-sleeve-fleece-dress/-/A-1001985495",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-middle-school-dolls-graphic-short-sleeve-fleece-dress/-/A-1002048060",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-ghouls-night-out-graphic-short-sleeve-fleece-dress/-/A-1001972746",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-mattel-original-logo-graphic-short-sleeve-fleece-dress/-/A-1002118337",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-bffs-4-eva-graphic-short-sleeve-fleece-dress/-/A-1001999148",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-always-extra-graphic-short-sleeve-fleece-dress/-/A-1001997089",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-fourth-of-july-graphic-short-sleeve-fleece-dress/-/A-1002118407",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-short-sleeve-fleece-dress/-/A-1002094954",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-hello-lovely-barbie-graphic-short-sleeve-fleece-dress/-/A-1002082443",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-brave-pup-graphic-short-sleeve-fleece-dress/-/A-1001739175",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-boo-barbie-girls-graphic-short-sleeve-fleece-dress/-/A-1002118619",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-free-spirit-doll-graphic-short-sleeve-fleece-dress/-/A-1002004225",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-made-in-the-90-s-graphic-short-sleeve-fleece-dress/-/A-1002063608",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-sun-s-out-graphic-short-sleeve-fleece-dress/-/A-1002056511",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-earthy-bb-graphic-short-sleeve-fleece-dress/-/A-1002004929",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-dance-queens-graphic-short-sleeve-fleece-dress/-/A-1001985214",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-red-rocker-blue-bomber-graphic-short-sleeve-fleece-dress/-/A-1002011357",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-candylicious-original-graphic-short-sleeve-fleece-dress/-/A-1001997098",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-bravo-babes-graphic-short-sleeve-fleece-dress/-/A-1001999407",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-palm-trees-graphic-short-sleeve-fleece-dress/-/A-1002063502",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-happy-spring-graphic-short-sleeve-fleece-dress/-/A-1002069803",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-rock-em-sock-em-robots-logo-graphic-short-sleeve-fleece-dress/-/A-1002011043",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-bestie-big-hug-graphic-short-sleeve-fleece-dress/-/A-1002118331",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-happy-hanukkah-graphic-short-sleeve-fleece-dress/-/A-1000780770",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-righteous-dude-graphic-short-sleeve-fleece-dress/-/A-1002030268",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-dance-party-graphic-short-sleeve-fleece-dress/-/A-1001985462",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-grow-grrrl-graphic-short-sleeve-fleece-dress/-/A-1002004752",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-america-cars-graphic-short-sleeve-fleece-dress/-/A-1002105088",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-queens-support-each-other-graphic-short-sleeve-fleece-dress/-/A-1001974428",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-palm-springs-graphic-short-sleeve-fleece-dress/-/A-1001974414",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-kitty-stars-graphic-short-sleeve-fleece-dress/-/A-1001974451",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-we-re-all-queens-graphic-short-sleeve-fleece-dress/-/A-1001993695",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-ready-to-smash-cake-graphic-short-sleeve-fleece-dress/-/A-1002086201",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/polly-pocket-90s-doll-graphic-short-sleeve-fleece-dress/-/A-1002021757",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-rock-em-sock-em-logo-graphic-short-sleeve-fleece-dress/-/A-1002010514",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-pink-draculaura-graphic-short-sleeve-fleece-dress/-/A-1002008627",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-short-sleeve-fleece-dress/-/A-1001977707",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-nashville-and-bluegrass-queen-graphic-short-sleeve-fleece-dress/-/A-1001974314",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-4-yrs-graphic-short-sleeve-fleece-dress/-/A-1002085959",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-fierce-queens-graphic-short-sleeve-fleece-dress/-/A-1001993622",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-road-trippin-graphic-short-sleeve-fleece-dress/-/A-1002004524",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-howdy-cowgirls-graphic-short-sleeve-fleece-dress/-/A-1002004073",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-winter-breeze-graphic-short-sleeve-fleece-dress/-/A-1002055912",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-happiness-is-a-pile-of-leaves-graphic-short-sleeve-fleece-dress/-/A-1001739139",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-witch-way-to-the-candy-graphic-short-sleeve-fleece-dress/-/A-1001739138",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-thanksful-grateful-blessed-graphic-short-sleeve-fleece-dress/-/A-1001739125",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-the-great-pumpkin-believer-graphic-short-sleeve-fleece-dress/-/A-1001739085",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-woodstock-turkey-graphic-short-sleeve-fleece-dress/-/A-1001739080",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-charmer-graphic-short-sleeve-fleece-dress/-/A-1001739035",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-camping-graphic-short-sleeve-fleece-dress/-/A-1001739005",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-2fly-4-wrdz-graphic-short-sleeve-fleece-dress/-/A-1001993772",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-ski-pro-graphic-short-sleeve-fleece-dress/-/A-1001739082",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-and-linus-cozy-and-cuddly-graphic-short-sleeve-fleece-dress/-/A-1001739140",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-just-a-kid-who-loves-fall-graphic-short-sleeve-fleece-dress/-/A-1001739095",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-ride-green-graphic-short-sleeve-fleece-dress/-/A-1001739028",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-save-ferris-graphic-short-sleeve-fleece-dress/-/A-1002118433",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1002118387",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-fanime-kawaii-graphic-short-sleeve-fleece-dress/-/A-1002004233",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-roadie-graphic-short-sleeve-fleece-dress/-/A-1002118374",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-speak-through-art-graphic-short-sleeve-fleece-dress/-/A-1003929004",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-monsters-group-graphic-short-sleeve-fleece-dress/-/A-1002008199",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-grrrls-run-the-world-graphic-short-sleeve-fleece-dress/-/A-1002118424",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-linus-skateboarding-graphic-short-sleeve-fleece-dress/-/A-1001739023",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-and-friends-thrilled-to-be-chilled-graphic-short-sleeve-fleece-dress/-/A-1001739011",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-lets-unbox-graphic-short-sleeve-fleece-dress/-/A-1001978279",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-do-you-know-anything-graphic-short-sleeve-fleece-dress/-/A-1002030585",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-malibu-sunset-with-palm-trees-graphic-short-sleeve-fleece-dress/-/A-1002118541",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-let-s-roll-graphic-short-sleeve-fleece-dress/-/A-1001739057",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-happy-birthday-to-me-graphic-short-sleeve-fleece-dress/-/A-1002118718",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-ghouls-squad-graphic-short-sleeve-fleece-dress/-/A-1002118328",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-m-f-f-monster-friends-forever-graphic-short-sleeve-fleece-dress/-/A-1002118324",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-usa-turtles/-/A-1000848116",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-happy-howl/-/A-1000845515",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-time-to-shine-graphic-short-sleeve-fleece-dress/-/A-1002004834",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-rainbow-love-scribble-heather-navy-medium/-/A-1000820825",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-fierce-doll-graphic-short-sleeve-fleece-dress/-/A-1002003923",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-bff-4lyfe-graphic-short-sleeve-fleece-dress/-/A-1002118366",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-never-have-tomb-many-friends-graphic-short-sleeve-fleece-dress/-/A-1002118289",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-winter-holidays-graphic-short-sleeve-fleece-dress/-/A-1002044060",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-retro-flower-rainbow-graphic-short-sleeve-fleece-dress/-/A-1001739045",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-slay-all-day-graphic-short-sleeve-fleece-dress/-/A-1001978272",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mtv-slime-logo-graphic-short-sleeve-fleece-dress/-/A-1002118428",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fall-pumpkin-mania-graphic-short-sleeve-fleece-dress/-/A-1004529235",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fall-graphic-short-sleeve-fleece-dress/-/A-1004529201",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fall-graphic-short-sleeve-fleece-dress/-/A-1004529183",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fall-graphic-short-sleeve-fleece-dress/-/A-1004529144",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fall-graphic-short-sleeve-fleece-dress/-/A-1004529134",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fall-graphic-short-sleeve-fleece-dress/-/A-1004529139",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-celebrate-family-graphic-short-sleeve-fleece-dress/-/A-1004189172",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-jellyfish-ramune-graphic-short-sleeve-fleece-dress/-/A-1004189167",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-king-cake-beads-crawfish-jazz-graphic-short-sleeve-fleece-dress/-/A-1004189160",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fishing-lures-graphic-short-sleeve-fleece-dress/-/A-1004185911",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-karma-notebook-graphic-short-sleeve-fleece-dress/-/A-1003972147",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-crown-graphic-short-sleeve-fleece-dress/-/A-1003972144",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-better-together-graphic-short-sleeve-fleece-dress/-/A-1003972141",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-we-re-so-ambitious-graphic-short-sleeve-fleece-dress/-/A-1003972138",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-conquer-the-world-graphic-short-sleeve-fleece-dress/-/A-1003972135",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-number-one-on-the-block-graphic-short-sleeve-fleece-dress/-/A-1003972132",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-my-hair-s-unique-graphic-short-sleeve-fleece-dress/-/A-1003972129",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-love-what-you-love-graphic-short-sleeve-fleece-dress/-/A-1003972126",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-open-your-mind-open-your-heart-graphic-short-sleeve-fleece-dress/-/A-1003972123",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-our-super-power-graphic-short-sleeve-fleece-dress/-/A-1003972120",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-i-m-just-here-for-the-snacks-graphic-short-sleeve-fleece-dress/-/A-1003972111",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-winston-karma-alex-graphic-short-sleeve-fleece-dress/-/A-1003972107",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-step-into-the-spotlight-karma-graphic-short-sleeve-fleece-dress/-/A-1003972097",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-learn-alotl-in-2nd-grade-graphic-short-sleeve-fleece-dress/-/A-1003972090",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-learn-alotl-in-kindergarten-graphic-short-sleeve-fleece-dress/-/A-1003972083",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-learn-alotl-in-1st-grade-graphic-short-sleeve-fleece-dress/-/A-1003972078",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-tacosaurus-graphic-short-sleeve-fleece-dress/-/A-1003972068",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-pre-k-graphic-short-sleeve-fleece-dress/-/A-1003972019",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-kindergarten-graphic-short-sleeve-fleece-dress/-/A-1003972005",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-preschool-graphic-short-sleeve-fleece-dress/-/A-1003971991",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-third-grade-graphic-short-sleeve-fleece-dress/-/A-1003971976",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-first-grade-graphic-short-sleeve-fleece-dress/-/A-1003971960",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-second-grade-graphic-short-sleeve-fleece-dress/-/A-1003971948",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-pre-k-squad-thing-1-and-thing-2-graphic-short-sleeve-fleece-dress/-/A-1003971939",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-cat-in-the-hat-school-is-cool-graphic-short-sleeve-fleece-dress/-/A-1003971931",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-kindergarten-squad-thing-1-and-thing-2-graphic-short-sleeve-fleece-dress/-/A-1003971923",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-1st-grade-squad-thing-1-and-thing-2-graphic-short-sleeve-fleece-dress/-/A-1003971915",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-graffiti-art-graphic-short-sleeve-fleece-dress/-/A-1003971900",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-karma-art-graphic-short-sleeve-fleece-dress/-/A-1003971884",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/karma-s-world-swag-is-swag-graphic-short-sleeve-fleece-dress/-/A-1003971872",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-k-is-for-kindergarten-graphic-short-sleeve-fleece-dress/-/A-1003971863",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-third-grade-out-of-this-world-graphic-short-sleeve-fleece-dress/-/A-1003971850",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-2nd-grade-squad-thing-1-and-thing-2-graphic-short-sleeve-fleece-dress/-/A-1003971847",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-kindergarten-out-of-this-world-graphic-short-sleeve-fleece-dress/-/A-1003971835",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-first-grade-out-of-this-world-graphic-short-sleeve-fleece-dress/-/A-1003971829",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-pre-k-out-of-this-world-cat-in-the-hat-graphic-short-sleeve-fleece-dress/-/A-1003971823",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-oh-places-youll-go-when-you-read-graphic-short-sleeve-fleece-dress/-/A-1003971815",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-3rd-grade-squad-thing-1-and-thing-2-graphic-short-sleeve-fleece-dress/-/A-1003971807",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-i-know-a-thing-or-two-school-graphic-short-sleeve-fleece-dress/-/A-1003971799",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-abc-book-characters-graphic-short-sleeve-fleece-dress/-/A-1003971791",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/curious-george-classic-cartoons-graphic-short-sleeve-fleece-dress/-/A-1003971424",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/curious-george-classic-cartoons-graphic-short-sleeve-fleece-dress/-/A-1003971414",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/invader-zim-gir-loves-tacos-in-space-graphic-short-sleeve-fleece-dress/-/A-1003971400",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-hello-second-grade-graphic-short-sleeve-fleece-dress/-/A-1003971376",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-problem-solver-graphic-short-sleeve-fleece-dress/-/A-1003971387",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-hello-first-grade-graphic-short-sleeve-fleece-dress/-/A-1003971362",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-hello-kindergarten-graphic-short-sleeve-fleece-dress/-/A-1003971343",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-spectacolar-graphic-short-sleeve-fleece-dress/-/A-1003971330",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-i-train-my-brain-graphic-short-sleeve-fleece-dress/-/A-1003971318",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-math-problem-bee-graphic-short-sleeve-fleece-dress/-/A-1003971308",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-girl-group-graphic-short-sleeve-fleece-dress/-/A-1003929039",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-we-re-all-stars-graphic-short-sleeve-fleece-dress/-/A-1003929016",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-winston-graphic-short-sleeve-fleece-dress/-/A-1003928995",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-daddy-daughter-day-graphic-short-sleeve-fleece-dress/-/A-1003928981",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-lyrical-star-airbrush-style-graphic-short-sleeve-fleece-dress/-/A-1003928967",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-try-to-keep-up-graphic-short-sleeve-fleece-dress/-/A-1003238425",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-cozy-gaming-graphic-short-sleeve-fleece-dress/-/A-1003238373",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-rescue-myself-graphic-short-sleeve-fleece-dress/-/A-1003238325",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-magical-gamer-girl-graphic-short-sleeve-fleece-dress/-/A-1003238271",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-easter-egg-every-kid-graphic-short-sleeve-fleece-dress/-/A-1002632236",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-easter-eggs-come-from-where-graphic-short-sleeve-fleece-dress/-/A-1002611542",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-collegiate-fit-flair-cap-sleeve-dress/-/A-1000870787",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-grid-graphic-short-sleeve-fleece-dress/-/A-1002397022",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-slowpoke-taking-it-slow-graphic-short-sleeve-fleece-dress/-/A-1002397018",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-info-chart-graphic-short-sleeve-fleece-dress/-/A-1002396954",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-see-the-evolution-graphic-short-sleeve-fleece-dress/-/A-1002396906",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-retro-gamer-graphic-short-sleeve-fleece-dress/-/A-1002396891",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-wink-face-graphic-short-sleeve-fleece-dress/-/A-1002396823",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-hypnotic-pikachu-art-graphic-short-sleeve-fleece-dress/-/A-1002396663",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-squirtle-charmander-and-bulbasaur-graphic-short-sleeve-fleece-dress/-/A-1002396649",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-pattern-graphic-short-sleeve-fleece-dress/-/A-1002396617",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pokedex-pikachu-graphic-short-sleeve-fleece-dress/-/A-1002396533",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-catch-em-all-graphic-short-sleeve-fleece-dress/-/A-1002396495",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-gengar-graphic-short-sleeve-fleece-dress/-/A-1002396477",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-plaid-badge-graphic-short-sleeve-fleece-dress/-/A-1002396415",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-athletic-logo-graphic-short-sleeve-fleece-dress/-/A-1002396348",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-starter-pok-mon-logo-graphic-short-sleeve-fleece-dress/-/A-1002396287",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-logo-graphic-short-sleeve-fleece-dress/-/A-1002396177",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-jiggypuff-music-notes-graphic-short-sleeve-fleece-dress/-/A-1002396097",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-i-m-so-sweet-graphic-short-sleeve-fleece-dress/-/A-1002396069",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-panel-comic-manga-graphic-short-sleeve-fleece-dress/-/A-1002396048",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-team-pikachu-graphic-short-sleeve-fleece-dress/-/A-1002396027",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-manga-graphic-short-sleeve-fleece-dress/-/A-1002396025",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-team-player-graphic-short-sleeve-fleece-dress/-/A-1002396016",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-jiggypuff-sing-along-graphic-short-sleeve-fleece-dress/-/A-1002395981",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-squares-graphic-short-sleeve-fleece-dress/-/A-1002395852",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-team-pok-mon-graphic-short-sleeve-fleece-dress/-/A-1002395845",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-trainer-graphic-short-sleeve-fleece-dress/-/A-1002395811",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-the-journey-start-here-graphic-short-sleeve-fleece-dress/-/A-1002395786",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-psyduck-headache-graphic-short-sleeve-fleece-dress/-/A-1002395742",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-neon-boxes-graphic-short-sleeve-fleece-dress/-/A-1002395723",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-magikarp-graphic-short-sleeve-fleece-dress/-/A-1002395704",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-pattern-graphic-short-sleeve-fleece-dress/-/A-1002395596",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-psyduck-spiral-graphic-short-sleeve-fleece-dress/-/A-1002395584",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-neon-pikachu-graphic-short-sleeve-fleece-dress/-/A-1002395549",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-plaid-logo-graphic-short-sleeve-fleece-dress/-/A-1002395458",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-retro-pok-mon-graphic-short-sleeve-fleece-dress/-/A-1002395378",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-power-nap-graphic-short-sleeve-fleece-dress/-/A-1002395343",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-retrogamer-graphic-short-sleeve-fleece-dress/-/A-1002395294",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-pika-graphic-short-sleeve-fleece-dress/-/A-1002395205",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-thunderbolt-graphic-short-sleeve-fleece-dress/-/A-1002395125",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-meowth-mischevious-laugh-graphic-short-sleeve-fleece-dress/-/A-1002387153",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-and-friends-graphic-short-sleeve-fleece-dress/-/A-1002386923",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-eat-sleep-battle-repeat-graphic-short-sleeve-fleece-dress/-/A-1002386593",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pokeball-trainer-graphic-short-sleeve-fleece-dress/-/A-1002386368",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-japanese-graphic-short-sleeve-fleece-dress/-/A-1002386322",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-grid-graphic-short-sleeve-fleece-dress/-/A-1002386137",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-checkered-graphic-short-sleeve-fleece-dress/-/A-1002386097",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-neon-battle-mode-graphic-short-sleeve-fleece-dress/-/A-1002385335",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-electric-type-pikachu-graphic-short-sleeve-fleece-dress/-/A-1002385217",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-pokedex-diagram-graphic-short-sleeve-fleece-dress/-/A-1002385080",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-attack-graphic-short-sleeve-fleece-dress/-/A-1002384906",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-eevee-retro-stripe-graphic-short-sleeve-fleece-dress/-/A-1002384616",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-gengar-neon-graphic-short-sleeve-fleece-dress/-/A-1002382663",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-happy-pikachu-graphic-short-sleeve-fleece-dress/-/A-1002381762",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-logo-style-graphic-short-sleeve-fleece-dress/-/A-1002381085",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-133-graphic-short-sleeve-fleece-dress/-/A-1002380742",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-pikachu-grid-graphic-short-sleeve-fleece-dress/-/A-1002380509",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-pika-scared-graphic-short-sleeve-fleece-dress/-/A-1002377197",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pick-of-the-patch-graphic-short-sleeve-fleece-dress/-/A-1002376882",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-trick-or-treat-graphic-short-sleeve-fleece-dress/-/A-1002374868",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-lightning-graphic-short-sleeve-fleece-dress/-/A-1002357605",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-koraidon-collegiate-graphic-short-sleeve-fleece-dress/-/A-1002357594",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-koraidon-legend-graphic-short-sleeve-fleece-dress/-/A-1002357579",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-koraidon-elements-graphic-short-sleeve-fleece-dress/-/A-1002357543",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-collegiate-graphic-short-sleeve-fleece-dress/-/A-1002357512",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-group-graphic-short-sleeve-fleece-dress/-/A-1002357502",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-elements-graphic-short-sleeve-fleece-dress/-/A-1002357498",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-fuecoco-stats-graphic-short-sleeve-fleece-dress/-/A-1002357487",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-legend-graphic-short-sleeve-fleece-dress/-/A-1002357481",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-quaxly-stats-graphic-short-sleeve-fleece-dress/-/A-1002357447",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-moon-witch-graphic-short-sleeve-fleece-dress/-/A-1002355260",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-witch-pikachu-with-candy-graphic-short-sleeve-fleece-dress/-/A-1002355256",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pumpkin-party-graphic-short-sleeve-fleece-dress/-/A-1002355229",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-trick-or-treat-graphic-short-sleeve-fleece-dress/-/A-1002355223",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-happy-holidays-graphic-short-sleeve-fleece-dress/-/A-1002352355",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-lights-wreath-graphic-short-sleeve-fleece-dress/-/A-1002352334",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-official-cookie-taster-graphic-short-sleeve-fleece-dress/-/A-1002352328",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-presents-graphic-short-sleeve-fleece-dress/-/A-1002352316",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-squirtle-and-snowflakes-graphic-short-sleeve-fleece-dress/-/A-1002352295",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-flakes-graphic-short-sleeve-fleece-dress/-/A-1002352289",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-presents-graphic-short-sleeve-fleece-dress/-/A-1002352287",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-winter-fun-graphic-short-sleeve-fleece-dress/-/A-1002352283",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-santa-hat-graphic-short-sleeve-fleece-dress/-/A-1002352238",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-bulba-pattern-graphic-short-sleeve-fleece-dress/-/A-1002352234",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-snowflakes-graphic-short-sleeve-fleece-dress/-/A-1002352230",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-sled-graphic-short-sleeve-fleece-dress/-/A-1002352217",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-seasons-greetings-graphic-short-sleeve-fleece-dress/-/A-1002352146",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-battle-ready-graphic-short-sleeve-fleece-dress/-/A-1002348213",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-group-in-circle-graphic-short-sleeve-fleece-dress/-/A-1002348183",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-do-what-makes-you-awesome-graphic-short-sleeve-fleece-dress/-/A-1002118630",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-strong-girls-club-graphic-short-sleeve-fleece-dress/-/A-1002118554",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-cleo-de-nile-mummy-barb-graphic-short-sleeve-fleece-dress/-/A-1002118457",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-grrrl-squad-graphic-short-sleeve-fleece-dress/-/A-1002118436",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-friends-make-the-season-bright-graphic-short-sleeve-fleece-dress/-/A-1002112599",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-clover-power-graphic-short-sleeve-fleece-dress/-/A-1002108244",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-lucky-to-have-great-friends-graphic-short-sleeve-fleece-dress/-/A-1002108034",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-logo-shamrock-pattern-graphic-short-sleeve-fleece-dress/-/A-1002108006",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-usa-stripes-graphic-short-sleeve-fleece-dress/-/A-1002104492",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-short-sleeve-fleece-dress/-/A-1002095269",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-short-sleeve-fleece-dress/-/A-1002095113",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-faboolous-graphic-short-sleeve-fleece-dress/-/A-1002092048",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-let-s-party-graphic-short-sleeve-fleece-dress/-/A-1002090784",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-going-big-for-my-birthday-graphic-short-sleeve-fleece-dress/-/A-1002086777",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-5-yrs-graphic-short-sleeve-fleece-dress/-/A-1002085135",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-believe-in-yourself-graphic-short-sleeve-fleece-dress/-/A-1002084564",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-happy-valentine-s-day-graphic-short-sleeve-fleece-dress/-/A-1002084196",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-pink-core-graphic-short-sleeve-fleece-dress/-/A-1002083698",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-heart-grid-graphic-short-sleeve-fleece-dress/-/A-1002082949",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-beyoutiful-graphic-short-sleeve-fleece-dress/-/A-1002082013",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-happy-heart-day-graphic-short-sleeve-fleece-dress/-/A-1002081407",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-fitness-barbie-graphic-short-sleeve-fleece-dress/-/A-1002075078",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girls-run-the-world-graphic-short-sleeve-fleece-dress/-/A-1002073995",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girls-will-save-the-world-graphic-short-sleeve-fleece-dress/-/A-1002073540",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-i-am-powerful-graphic-short-sleeve-fleece-dress/-/A-1002070649",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002068740",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-living-the-dream-graphic-short-sleeve-fleece-dress/-/A-1002066118",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-leaves-swirling-graphic-short-sleeve-fleece-dress/-/A-1002065401",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girls-support-girls-graphic-short-sleeve-fleece-dress/-/A-1002063782",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-pool-water-reflection-graphic-short-sleeve-fleece-dress/-/A-1002063810",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-multi-color-choose-kindness-graphic-short-sleeve-fleece-dress/-/A-1002062934",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-pattern-colorful-graphic-short-sleeve-fleece-dress/-/A-1002060076",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-retro-swimsuit-graphic-short-sleeve-fleece-dress/-/A-1002059724",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-summer-time-dream-graphic-short-sleeve-fleece-dress/-/A-1002059197",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-the-dreamhouse-60th-anniversary-graphic-short-sleeve-fleece-dress/-/A-1002058432",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-stacked-barbie-vday-graphic-short-sleeve-fleece-dress/-/A-1002058289",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-how-could-i-possibly-graphic-short-sleeve-fleece-dress/-/A-1002031722",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-bueller-bueller-bueller-graphic-short-sleeve-fleece-dress/-/A-1002031453",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-rock-em-robot-graphic-short-sleeve-fleece-dress/-/A-1002010797",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-school-students-graphic-short-sleeve-fleece-dress/-/A-1002008694",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-creeperific-graphic-short-sleeve-fleece-dress/-/A-1002008083",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-groovy-beach-babe-graphic-short-sleeve-fleece-dress/-/A-1002004800",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-friends-grow-together-graphic-short-sleeve-fleece-dress/-/A-1002004739",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-let-s-be-kind-to-plants-graphic-short-sleeve-fleece-dress/-/A-1002004674",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-astro-alien-doll-graphic-short-sleeve-fleece-dress/-/A-1002004402",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-go-go-gurl-graphic-short-sleeve-fleece-dress/-/A-1002004240",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-electric-dreams-graphic-short-sleeve-fleece-dress/-/A-1001999393",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-lol-hi-bae-graphic-short-sleeve-fleece-dress/-/A-1001999229",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-fierce-graffiti-graphic-short-sleeve-fleece-dress/-/A-1001996937",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-jade-hunter-rainbow-graffiti-graphic-short-sleeve-fleece-dress/-/A-1001996181",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-pure-fire-graphic-short-sleeve-fleece-dress/-/A-1001996153",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-play-dazzle-music-graphic-short-sleeve-fleece-dress/-/A-1001993856",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-sways-spray-paint-graphic-short-sleeve-fleece-dress/-/A-1001993837",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-royal-rebel-graphic-short-sleeve-fleece-dress/-/A-1001993813",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-royal-bee-graphic-short-sleeve-fleece-dress/-/A-1001993786",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-neonlicious-graphic-short-sleeve-fleece-dress/-/A-1001993533",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-cotton-candy-graphic-short-sleeve-fleece-dress/-/A-1001992710",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-totally-rad-diva-graphic-short-sleeve-fleece-dress/-/A-1001992555",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-grunge-grrrl-graphic-short-sleeve-fleece-dress/-/A-1001992541",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-sweet-spicy-babes-graphic-short-sleeve-fleece-dress/-/A-1001989920",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-outrageous-millennial-girls-graphic-short-sleeve-fleece-dress/-/A-1001989865",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-splash-beauty-w-butterflies-hearts-graphic-short-sleeve-fleece-dress/-/A-1001989813",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-spicy-babe-graphic-short-sleeve-fleece-dress/-/A-1001989803",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/little-tikes-fast-food-towing-graphic-short-sleeve-fleece-dress/-/A-1001987149",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/little-tikes-go-green-graphic-short-sleeve-fleece-dress/-/A-1001987103",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/little-tikes-find-the-way-graphic-short-sleeve-fleece-dress/-/A-1001987085",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/little-tikes-ready-for-adventure-graphic-short-sleeve-fleece-dress/-/A-1001986999",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/little-tikes-teamwork-makes-the-dream-work-graphic-short-sleeve-fleece-dress/-/A-1001986887",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/little-tikes-try-your-best-graphic-short-sleeve-fleece-dress/-/A-1001986876",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-b-b-nation-graphic-short-sleeve-fleece-dress/-/A-1001985702",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-let-s-par-tea-graphic-short-sleeve-fleece-dress/-/A-1001985553",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-heart-mended-bffs-graphic-short-sleeve-fleece-dress/-/A-1001985536",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-birthday-qt-graphic-short-sleeve-fleece-dress/-/A-1001985519",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-partay-with-kitty-queen-graphic-short-sleeve-fleece-dress/-/A-1001985465",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-pool-party-vibes-graphic-short-sleeve-fleece-dress/-/A-1001985432",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-glam-series-graphic-short-sleeve-fleece-dress/-/A-1001985416",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-oh-so-fierce-graphic-short-sleeve-fleece-dress/-/A-1001985407",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-celebr8-graphic-short-sleeve-fleece-dress/-/A-1001985394",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-next-level-graphic-short-sleeve-fleece-dress/-/A-1001985363",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-b-day-b-b-besties-celebrate-birthdays-graphic-short-sleeve-fleece-dress/-/A-1001985342",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1001985290",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1001985259",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1001985103",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-blue-leaf-frame-graphic-short-sleeve-fleece-dress/-/A-1001984995",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-california-graphic-short-sleeve-fleece-dress/-/A-1001984983",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-sunglasses-graphic-short-sleeve-fleece-dress/-/A-1001984966",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rainbow-high-rainbow-paris-pearls-graphic-short-sleeve-fleece-dress/-/A-1001984856",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mtv-logo-jack-o-lantern-graphic-short-sleeve-fleece-dress/-/A-1001984623",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mtv-skater-graphic-short-sleeve-fleece-dress/-/A-1001984563",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mtv-explore-with-us-graphic-short-sleeve-fleece-dress/-/A-1001984552",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mtv-inhale-exhale-graphic-short-sleeve-fleece-dress/-/A-1001984537",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mtv-logo-liquid-metal-graphic-short-sleeve-fleece-dress/-/A-1001984409",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mtv-icon-collage-logo-graphic-short-sleeve-fleece-dress/-/A-1001984401",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mtv-take-me-to-the-moon-person-graphic-short-sleeve-fleece-dress/-/A-1001984403",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mtv-funky-flower-dude-graphic-short-sleeve-fleece-dress/-/A-1001984354",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mtv-logo-retro-collage-graphic-short-sleeve-fleece-dress/-/A-1001984284",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-mattel-original-logo-graphic-short-sleeve-fleece-dress/-/A-1001978668",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-snowflake-wreath-graphic-short-sleeve-fleece-dress/-/A-1001978302",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-fa-la-la-la-fierce-graphic-short-sleeve-fleece-dress/-/A-1001978301",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-sleigh-what-graphic-short-sleeve-fleece-dress/-/A-1001978204",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-short-sleeve-fleece-dress/-/A-1001977732",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-short-sleeve-fleece-dress/-/A-1001977704",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-short-sleeve-fleece-dress/-/A-1001977632",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-short-sleeve-fleece-dress/-/A-1001977601",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-girl-squad-pop-art-graphic-short-sleeve-fleece-dress/-/A-1001977079",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-circle-of-friends-graphic-short-sleeve-fleece-dress/-/A-1001977025",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-holographic-colors-graphic-short-sleeve-fleece-dress/-/A-1001976962",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-frankie-blue-bolt-graphic-short-sleeve-fleece-dress/-/A-1001976906",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-texas-graphic-short-sleeve-fleece-dress/-/A-1001974468",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-lol-hos-palm-trees-graphic-short-sleeve-fleece-dress/-/A-1001974447",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-individually-us-graphic-short-sleeve-fleece-dress/-/A-1001974404",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-coney-island-graphic-short-sleeve-fleece-dress/-/A-1001974377",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-snowbunny-and-snowflakes-graphic-short-sleeve-fleece-dress/-/A-1001974378",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-together-we-slay-graphic-short-sleeve-fleece-dress/-/A-1001974351",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-draculaura-is-fangtastic-graphic-short-sleeve-fleece-dress/-/A-1001973025",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-clawsome-fangtastic-creeperific-zapptacular-graphic-short-sleeve-fleece-dress/-/A-1001972895",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-under-the-water-lagoona-blue-graphic-short-sleeve-fleece-dress/-/A-1001972850",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-my-boo-crew-racecar-graphic-short-sleeve-fleece-dress/-/A-1001972818",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-creep-it-real-graphic-short-sleeve-fleece-dress/-/A-1001972688",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/if-movie-blossom-ballet-graphic-short-sleeve-fleece-dress/-/A-1001970446",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/if-movie-lewis-keyboard-graphic-short-sleeve-fleece-dress/-/A-1001970412",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-1st-grade-rocks-graphic-short-sleeve-fleece-dress/-/A-1001739202",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-is-it-recess-yet-graphic-short-sleeve-fleece-dress/-/A-1001739199",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-kindergarten-rocks-graphic-short-sleeve-fleece-dress/-/A-1001739196",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-first-grade-just-got-cooler-graphic-short-sleeve-fleece-dress/-/A-1001739193",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-kindergarten-just-got-cooler-graphic-short-sleeve-fleece-dress/-/A-1001739190",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-pre-k-just-got-cooler-graphic-short-sleeve-fleece-dress/-/A-1001739184",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-spiral-graphic-short-sleeve-fleece-dress/-/A-1001739181",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-we-re-on-it-graphic-short-sleeve-fleece-dress/-/A-1001739172",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-handy-dandy-notebook-graphic-short-sleeve-fleece-dress/-/A-1001739148",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-and-friends-to-adventure-city-graphic-short-sleeve-fleece-dress/-/A-1001739145",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-adventure-awaits-graphic-short-sleeve-fleece-dress/-/A-1001739133",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-brave-explorers-graphic-short-sleeve-fleece-dress/-/A-1001739130",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-team-awesome-graphic-short-sleeve-fleece-dress/-/A-1001739119",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-thanksgiving-scene-graphic-short-sleeve-fleece-dress/-/A-1001739115",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-life-is-better-under-the-star-graphic-short-sleeve-fleece-dress/-/A-1001739113",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-woodstock-graphic-short-sleeve-fleece-dress/-/A-1001739107",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-turkey-tasting-crew-graphic-short-sleeve-fleece-dress/-/A-1001739102",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-fall-is-my-favorite-graphic-short-sleeve-fleece-dress/-/A-1001739098",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-mountains-are-calling-graphic-short-sleeve-fleece-dress/-/A-1001739091",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-california-graphic-short-sleeve-fleece-dress/-/A-1001739090",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-colorado-charlie-brown-graphic-short-sleeve-fleece-dress/-/A-1001739077",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-utah-graphic-short-sleeve-fleece-dress/-/A-1001739073",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-woodstock-ski-stripes-graphic-short-sleeve-fleece-dress/-/A-1001739072",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-explore-more-art-graphic-short-sleeve-fleece-dress/-/A-1001739067",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-don-t-follow-me-art-graphic-short-sleeve-fleece-dress/-/A-1001739066",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-s-beach-day-graphic-short-sleeve-fleece-dress/-/A-1001739052",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-hawaii-graphic-short-sleeve-fleece-dress/-/A-1001739056",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-groovy-snoopy-graphic-short-sleeve-fleece-dress/-/A-1001739050",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-stoked-graphic-short-sleeve-fleece-dress/-/A-1001739046",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-collegiate-group-graphic-short-sleeve-fleece-dress/-/A-1001739040",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-beagle-scout-california-graphic-short-sleeve-fleece-dress/-/A-1001739038",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-s-wave-ride-graphic-short-sleeve-fleece-dress/-/A-1001739032",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-hard-work-graphic-short-sleeve-fleece-dress/-/A-1001739020",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-lucky-to-have-ya-graphic-short-sleeve-fleece-dress/-/A-1001739015",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-all-good-in-the-woods-graphic-short-sleeve-fleece-dress/-/A-1001739007",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-keep-on-graphic-short-sleeve-fleece-dress/-/A-1001738991",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-slugger-pants-graphic-short-sleeve-fleece-dress/-/A-1001738960",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-this-is-my-camping-shirt-graphic-short-sleeve-fleece-dress/-/A-1001738933",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-red-white-and-deep-blue-sea-graphic-short-sleeve-fleece-dress/-/A-1001738941",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-ready-to-explore-graphic-short-sleeve-fleece-dress/-/A-1001738930",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-colors-of-the-rainbow-graphic-short-sleeve-fleece-dress/-/A-1001738925",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-it-s-lit-graphic-short-sleeve-fleece-dress/-/A-1001738914",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-daddy-s-pawsome-camping-buddy-graphic-short-sleeve-fleece-dress/-/A-1001738911",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-ranger-snoopy-graphic-short-sleeve-fleece-dress/-/A-1001738901",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-s-hockey-camp-graphic-short-sleeve-fleece-dress/-/A-1001738897",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-usa-things-graphic-short-sleeve-fleece-dress/-/A-1001736286",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-i-got-it-graphic-short-sleeve-fleece-dress/-/A-1001736167",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-american-all-star-graphic-short-sleeve-fleece-dress/-/A-1001736162",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-mommy-s-little-firecracker-graphic-short-sleeve-fleece-dress/-/A-1001736140",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-ready-for-baseball-graphic-short-sleeve-fleece-dress/-/A-1001736055",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-game-on-1st-grade-graphic-short-sleeve-fleece-dress/-/A-1001735608",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-preschooler-by-day-graphic-short-sleeve-fleece-dress/-/A-1001735580",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-kindergarten-is-out-of-this-world-graphic-short-sleeve-fleece-dress/-/A-1001735531",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-1st-grade-is-out-of-this-world-graphic-short-sleeve-fleece-dress/-/A-1001735507",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-game-on-kindergarten-graphic-short-sleeve-fleece-dress/-/A-1001735493",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-game-on-pre-k-graphic-short-sleeve-fleece-dress/-/A-1001735437",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-pre-k-is-out-of-this-world-graphic-short-sleeve-fleece-dress/-/A-1001735423",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-pre-k-rocks-graphic-short-sleeve-fleece-dress/-/A-1001735326",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-daddy-is-my-sunshine-graphic-short-sleeve-fleece-dress/-/A-1001735152",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-outline-graphic-short-sleeve-fleece-dress/-/A-1001735132",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-all-the-colors-of-the-rainbow-are-beautiful-graphic-short-sleeve-fleece-dress/-/A-1001735118",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-graphic-short-sleeve-fleece-dress/-/A-1001735092",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-polaroid-graphic-short-sleeve-fleece-dress/-/A-1001735090",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-happy-blue-graphic-short-sleeve-fleece-dress/-/A-1001735076",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-let-it-shine-graphic-short-sleeve-fleece-dress/-/A-1001735056",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-sunshine-and-rainbows-graphic-short-sleeve-fleece-dress/-/A-1001735026",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-clues-paw-logo-graphic-short-sleeve-fleece-dress/-/A-1001735001",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-let-s-play-graphic-short-sleeve-fleece-dress/-/A-1001734997",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-mommy-is-my-sunshine-graphic-short-sleeve-fleece-dress/-/A-1001734983",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-s-friend-forever-graphic-short-sleeve-fleece-dress/-/A-1001734948",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-no-clue-why-i-m-out-of-bed-graphic-short-sleeve-fleece-dress/-/A-1001734945",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-s-thinking-chair-graphic-short-sleeve-fleece-dress/-/A-1001734931",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-can-t-have-rainbow-without-blue-graphic-short-sleeve-fleece-dress/-/A-1001734917",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-dream-explore-repeat-graphic-short-sleeve-fleece-dress/-/A-1001734864",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-life-is-an-adventure-graphic-short-sleeve-fleece-dress/-/A-1001734785",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-this-is-my-camping-sweatshirt-graphic-short-sleeve-fleece-dress/-/A-1001734711",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-nature-patrol-graphic-short-sleeve-fleece-dress/-/A-1001734696",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-pawsome-explorers-graphic-short-sleeve-fleece-dress/-/A-1001734683",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-ultimate-explorer-graphic-short-sleeve-fleece-dress/-/A-1001734630",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-outdoor-vibes-graphic-short-sleeve-fleece-dress/-/A-1001734619",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-aang-crest-graphic-short-sleeve-fleece-dress/-/A-1001733379",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-aang-group-graphic-short-sleeve-fleece-dress/-/A-1001733375",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-aang-wind-graphic-short-sleeve-fleece-dress/-/A-1001733276",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-boomerang-guy-graphic-short-sleeve-fleece-dress/-/A-1001733263",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-cute-appa-yip-yip-graphic-short-sleeve-fleece-dress/-/A-1001733259",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-jasmine-dragon-tea-graphic-short-sleeve-fleece-dress/-/A-1001733237",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-appa-flying-graphic-short-sleeve-fleece-dress/-/A-1001733224",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-aang-avatar-state-graphic-short-sleeve-fleece-dress/-/A-1001733094",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-aang-arrows-graphic-short-sleeve-fleece-dress/-/A-1001733084",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-trio-graphic-short-sleeve-fleece-dress/-/A-1001733056",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-trio-squad-graphic-short-sleeve-fleece-dress/-/A-1001733047",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-four-elements-inverse-graphic-short-sleeve-fleece-dress/-/A-1001733025",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-zuko-fire-nation-graphic-short-sleeve-fleece-dress/-/A-1001733021",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-four-elements-square-graphic-short-sleeve-fleece-dress/-/A-1001733017",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-four-nations-graphic-short-sleeve-fleece-dress/-/A-1001733013",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-zuko-calming-tea-graphic-short-sleeve-fleece-dress/-/A-1001733009",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-sokka-aang-katara-graphic-short-sleeve-fleece-dress/-/A-1001733005",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-katara-and-aang-grid-graphic-short-sleeve-fleece-dress/-/A-1001733001",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-sokka-nope-graphic-short-sleeve-fleece-dress/-/A-1001732997",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-toph-graphic-short-sleeve-fleece-dress/-/A-1001732503",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-sunny-days-ahead-graphic-short-sleeve-fleece-dress/-/A-1001731930",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-and-friends-graphic-short-sleeve-fleece-dress/-/A-1001731698",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-gerald-and-abner-graphic-short-sleeve-fleece-dress/-/A-1001731085",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-cool-arnold-graphic-short-sleeve-fleece-dress/-/A-1001731071",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-fresh-arnold-graphic-short-sleeve-fleece-dress/-/A-1001730795",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-and-gerald-skateboard-graphic-short-sleeve-fleece-dress/-/A-1001730727",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-group-shot-graphic-short-sleeve-fleece-dress/-/A-1001730689",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-and-gerold-bike-graphic-short-sleeve-fleece-dress/-/A-1001730692",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-holiday-homies-graphic-short-sleeve-fleece-dress/-/A-1001730679",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-distressed-arnold-graphic-short-sleeve-fleece-dress/-/A-1001730226",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-ho-ho-ho-stinkos-graphic-short-sleeve-fleece-dress/-/A-1001730164",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-airbrush-arnold-graphic-short-sleeve-fleece-dress/-/A-1001730096",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-cheat-day-graphic-short-sleeve-fleece-dress/-/A-1001730017",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-3d-arnold-graphic-short-sleeve-fleece-dress/-/A-1001730003",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-valentine-s-i-love-you-graphic-short-sleeve-fleece-dress/-/A-1001729979",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-ha-air-guitar-graphic-short-sleeve-fleece-dress/-/A-1001729975",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-valentine-s-my-love-graphic-short-sleeve-fleece-dress/-/A-1001729691",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-retro-arnold-and-gerald-graphic-short-sleeve-fleece-dress/-/A-1001729677",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-stoop-kid-graphic-short-sleeve-fleece-dress/-/A-1001729662",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-spray-paint-96-graphic-short-sleeve-fleece-dress/-/A-1001729587",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-1996-graphic-short-sleeve-fleece-dress/-/A-1001729576",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-since-96-graphic-short-sleeve-fleece-dress/-/A-1001729508",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-spray-paint-96-graphic-short-sleeve-fleece-dress/-/A-1001729437",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/hey-arnold-best-buds-graphic-short-sleeve-fleece-dress/-/A-1001729335",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-shamrock-cuties-graphic-short-sleeve-fleece-dress/-/A-1001729036",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-shamrocks-filled-graphic-short-sleeve-fleece-dress/-/A-1001729025",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-shenanigans-with-my-gnomies-graphic-short-sleeve-fleece-dress/-/A-1001729011",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-magically-unpinchable-unicorn-graphic-short-sleeve-fleece-dress/-/A-1001728984",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-mama-s-lucky-charm-graphic-short-sleeve-fleece-dress/-/A-1001728972",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-it-takes-alotl-luck-graphic-short-sleeve-fleece-dress/-/A-1001728956",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-leprechaun-truck-delivering-luck-graphic-short-sleeve-fleece-dress/-/A-1001728941",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-rad-little-lad-graphic-short-sleeve-fleece-dress/-/A-1001728927",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-outlined-shamrock-graphic-short-sleeve-fleece-dress/-/A-1001728908",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-i-woke-up-this-lucky-graphic-short-sleeve-fleece-dress/-/A-1001728889",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-to-not-be-in-trouble-graphic-short-sleeve-fleece-dress/-/A-1001728875",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-coolest-clover-in-the-patch-graphic-short-sleeve-fleece-dress/-/A-1001728850",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-tiny-hooligan-graphic-short-sleeve-fleece-dress/-/A-1001728808",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-dinosaur-eatting-rainbow-graphic-short-sleeve-fleece-dress/-/A-1001728779",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-boo-snoopy-graphic-short-sleeve-fleece-dress/-/A-1001728321",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-woodstock-vampire-graphic-short-sleeve-fleece-dress/-/A-1001728253",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-pumpkin-patch-graphic-short-sleeve-fleece-dress/-/A-1001728196",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-woodstock-ski-pro-graphic-short-sleeve-fleece-dress/-/A-1001727762",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-puffer-cozy-vibes-graphic-short-sleeve-fleece-dress/-/A-1001727668",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-and-woodstock-snow-much-fun-graphic-short-sleeve-fleece-dress/-/A-1001727646",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-love-earth-graphic-short-sleeve-fleece-dress/-/A-1001727438",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-earth-day-globe-graphic-short-sleeve-fleece-dress/-/A-1001727424",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-heart-earth-graphic-short-sleeve-fleece-dress/-/A-1001727410",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-earth-day-yay-graphic-short-sleeve-fleece-dress/-/A-1001727382",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-loves-earth-graphic-short-sleeve-fleece-dress/-/A-1001727388",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-chill-snoopy-graphic-short-sleeve-fleece-dress/-/A-1001727225",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-s-beach-ball-graphic-short-sleeve-fleece-dress/-/A-1001727181",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-retro-trailblazers-graphic-short-sleeve-fleece-dress/-/A-1001727125",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-campfire-mugs-graphic-short-sleeve-fleece-dress/-/A-1001727111",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-daddy-little-camper-graphic-short-sleeve-fleece-dress/-/A-1001727097",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-candy-squad-graphic-short-sleeve-fleece-dress/-/A-1001727083",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-boo-graphic-short-sleeve-fleece-dress/-/A-1001727031",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-happy-thanksgiving-icons-graphic-short-sleeve-fleece-dress/-/A-1001727017",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-varsity-squad-graphic-short-sleeve-fleece-dress/-/A-1001727003",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-turkey-squad-graphic-short-sleeve-fleece-dress/-/A-1001726993",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-boo-crew-graphic-short-sleeve-fleece-dress/-/A-1001726982",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-vampire-snoopy-stars-graphic-short-sleeve-fleece-dress/-/A-1001726848",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-glow-in-the-dark-snoopy-vampire-graphic-short-sleeve-fleece-dress/-/A-1001726845",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-and-friends-skiing-graphic-short-sleeve-fleece-dress/-/A-1001726371",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-and-woodstock-ski-shop-graphic-short-sleeve-fleece-dress/-/A-1001726328",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-woodstock-snowfall-graphic-short-sleeve-fleece-dress/-/A-1001726317",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-charlie-brown-and-linus-skiing-graphic-short-sleeve-fleece-dress/-/A-1001726307",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-woodstock-house-sleigh-graphic-short-sleeve-fleece-dress/-/A-1001726149",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-clover-dance-graphic-short-sleeve-fleece-dress/-/A-1001725478",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-lucky-snoopy-graphic-short-sleeve-fleece-dress/-/A-1001725468",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-lucky-dog-graphic-short-sleeve-fleece-dress/-/A-1001725454",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-woodstock-shamrock-graphic-short-sleeve-fleece-dress/-/A-1001725440",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-skating-pattern-graphic-short-sleeve-fleece-dress/-/A-1001724506",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-aaugh-pattern-charlie-brown-graphic-short-sleeve-fleece-dress/-/A-1001724492",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-silhouette-pattern-graphic-short-sleeve-fleece-dress/-/A-1001724468",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-ha-ha-graffiti-graphic-short-sleeve-fleece-dress/-/A-1001724458",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-rainbow-clouds-graphic-short-sleeve-fleece-dress/-/A-1001724443",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-patchwork-doghouse-graphic-short-sleeve-fleece-dress/-/A-1001724430",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-feelin-groovy-snoopy-and-woodstock-graphic-short-sleeve-fleece-dress/-/A-1001724392",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-groovy-heart-graphic-short-sleeve-fleece-dress/-/A-1001724375",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-graffiti-snoopy-graphic-short-sleeve-fleece-dress/-/A-1001724350",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-groovy-stacked-graphic-short-sleeve-fleece-dress/-/A-1001724359",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/captain-underpants-wedgie-power/-/A-1001646615",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/captain-underpants-action-thrills-laffs/-/A-1001646609",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/captain-underpants-original-logo-of-superhero/-/A-1001646608",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/captain-underpants-mighty-tighty-whities/-/A-1001646601",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/captain-underpants-c-underpants-george-harold/-/A-1001646599",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/captain-underpants-briefs-of-justice/-/A-1001646594",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/captain-underpants-prank-artists/-/A-1001646591",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/captain-underpants-the-hypno-ring-graphic-short-sleeve-fleece-dress/-/A-1001644691",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-here-for-the-shenanigans-graphic-short-sleeve-fleece-dress/-/A-1001599335",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-honk-if-lucky-graphic-short-sleeve-fleece-dress/-/A-1001599002",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-lil-ducky/-/A-1001598790",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-vibes/-/A-1001598524",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-icon-graphic-short-sleeve-fleece-dress/-/A-1001598371",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-cupid-crew-graphic-short-sleeve-fleece-dress/-/A-1001598345",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-here-to-sleigh-christmas-fit-flair-cap-sleeve-dress/-/A-1000877488",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-happy-holidays-wreath-fit-flair-cap-sleeve-dress/-/A-1000876367",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-have-an-ice-day-fit-flair-cap-sleeve-dress/-/A-1000876310",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-north-pole-or-bust-fit-flair-cap-sleeve-dress/-/A-1000876293",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-fangtastic/-/A-1000857727",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-boo-s-clues/-/A-1000857719",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-faces-grid/-/A-1000857711",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-have-a-nice-day/-/A-1000857694",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-have-a-nice-day/-/A-1000857640",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-not-always-right/-/A-1000857673",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-character-grid/-/A-1000857658",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-howl-eek/-/A-1000857657",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-boo-pumpkin/-/A-1000857643",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-mood/-/A-1000857636",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-more-bored-than-you/-/A-1000857630",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-let-me-be-frank/-/A-1000857614",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-smiling-on-the-inside/-/A-1000857621",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-don-t-know-don-t-care/-/A-1000857603",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-i-vant-candy/-/A-1000857610",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-whatever/-/A-1000857607",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-eek/-/A-1000857599",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-scary-cute/-/A-1000857589",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hoppy-easter/-/A-1000857548",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-red-white-turtle-power/-/A-1000857581",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-will-trade-dog-for-candy/-/A-1000857576",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-scary-cute/-/A-1000857558",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-boo/-/A-1000857534",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-turtle-power-americana/-/A-1000857537",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000857533",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-trick-or-treat/-/A-1000857503",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-summer-skidoo/-/A-1000856871",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-boy-genius/-/A-1000856393",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-genius/-/A-1000856315",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-gotta-blast/-/A-1000856179",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-adventures-of-jimmy-neutron/-/A-1000855941",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-tricks-and-pup-treats/-/A-1000852444",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-broom-hair-don-t-care/-/A-1000852462",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-patrick-it-s-lit/-/A-1000851148",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-let-it-snow/-/A-1000851075",
      tags: "Girl, Sweater Dresses",
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
