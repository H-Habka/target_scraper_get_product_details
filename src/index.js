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
      url: "https://www.target.com/p/peanuts/-/A-1000810240",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-computer-design-graphic-sleeveless-aline-dress/-/A-1001997358",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-knit-double-layer-dress-all-in-motion-8482/-/A-94369612",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-knit-piping-trim-160-dress-all-in-motion-8482/-/A-94334866",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-contrast-trim-active-dress-all-in-motion/-/A-94501352",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classics-double-layer-skirt-tank-dress-girls/-/A-83927532",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/capezio-ruffle-yoke-tutu-dress-girls/-/A-84642559",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/capezio-pinch-front-tank-dress-girls/-/A-84642597",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-outdoor-sports-sleeveless-dress-with-pockets-tennis-golf-outfit-athletic-sets/-/A-1003869470",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-tennis-golf-dress-outfit-sleeveless-a-line-pleated-athletic-skirt-dress-with-pockets-safety-inner-shorts/-/A-1002515302",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-tennis-dress-with-built-in-shorts-girls-athletic-dress-sleeveless-a-line-tennis-dress-pleated-girls-golf-dress/-/A-93555583",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-round-neck-tennis-golf-sport-dress-sleeveless-athletic-pleated-skirt-sets-with-built-in-shorts-pockets-purple-3-12y/-/A-1002515178",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-silt-tennis-dress-with-built-in-shorts-girls-athletic-dress-sleeveless-a-line-tennis-dress-pleated-girls-golf-dress/-/A-93599991",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-tennis-dress-sleeveless-workout-dress-with-separate-shorts-asymmetric-color-block-glof-dress-a-line-athletic-dress-for-girls/-/A-91908754",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-airy-sleek-dress-all-in-motion/-/A-94471794",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/capezio-women-s-future-star-tank-dress/-/A-1003319649",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/capezio-tutu-dress-girls/-/A-84642582",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/capezio-flutter-sleeve-dress-girls/-/A-84642543",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/capezio-keyhole-back-tutu-dress-girls/-/A-84642715",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-tennis-golf-dress-outfit-sleeveless-tank-top-and-skorts-sets-sport-skirt-with-shorts/-/A-1002473902",
      tags: "Athletic Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/zenzi-girls-39-dress-blush-pink/-/A-94493159",
      tags: "Babydoll Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Babydoll Dresses",
      },
    },
    {
      url: "https://www.target.com/p/zenzi-girls-short-puff-sleeve-a-line-dress-cream/-/A-93067232",
      tags: "Babydoll Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Babydoll Dresses",
      },
    },
    {
      url: "https://www.target.com/p/levi-39-s-174-girls-39-sleeveless-smocked-floral-dress-light-wash/-/A-93018546",
      tags: "Babydoll Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Babydoll Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-smocked-flutter-sleeve-tank-dress/-/A-91762557",
      tags: "Babydoll Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Babydoll Dresses",
      },
    },
    {
      url: "https://www.target.com/p/jackalo-long-sleeved-button-down-woven-dress-acorn/-/A-93603358",
      tags: "Babydoll Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Babydoll Dresses",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-sleeveless-beetle-print-jersey-dress-jackalo/-/A-1002304509",
      tags: "Babydoll Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Babydoll Dresses",
      },
    },
    {
      url: "https://www.target.com/p/jackalo-sleeveless-button-down-woven-dress-dark-olive/-/A-93603368",
      tags: "Babydoll Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Babydoll Dresses",
      },
    },
    {
      url: "https://www.target.com/p/kids-organic-sleeveless-dress-engineer-stripe-jackalo/-/A-1004964220",
      tags: "Babydoll Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Babydoll Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-rosette-ruffle-dress-art-class-8482-purple/-/A-94486495",
      tags: "Bodycon Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bodycon Dresses",
      },
    },
    {
      url: "https://www.target.com/p/patpat-girl-s-sleeveless-bodycon-dress-halter-neck-pencil-cami-midi-basi-dresses-4-12-year/-/A-1003324029",
      tags: "Bodycon Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bodycon Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-tennis-dress-golf-outfit-sets-sleeveless-tank-top-skirt-with-shorts-pockets/-/A-1002551653",
      tags: "Bodycon Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Bodycon Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-astrid-long-sleeve-empire-waist-dress-sky-blue/-/A-91487287",
      tags: "Dresses, Empire Waist Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Empire Waist Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-red-plaid-satin-bow-holiday-dress/-/A-93502341",
      tags: "Dresses, Empire Waist Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Empire Waist Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-crochet-detail-empire-waist-seersucker-dress-kids/-/A-1002929817",
      tags: "Dresses, Empire Waist Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Empire Waist Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paradise-dreams-sleeveless-hi-lo-dress-mia-belle-girls/-/A-1004617705",
      tags: "Dresses, Girls’ Clothing, High-low Dresses, Kids’ Clothing",
      filters: {
        type: "High-low Dresses",
      },
    },
    {
      url: "https://www.target.com/p/sunny-breeze-sleeveless-hi-lo-dress-mia-belle-girls/-/A-1004617718",
      tags: "Dresses, Girls’ Clothing, High-low Dresses, Kids’ Clothing",
      filters: {
        type: "High-low Dresses",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-soft-jersey-girls-short-sleeve-hi-lo-maxi-dress/-/A-92701361",
      tags: "Dresses, Girls’ Clothing, High-low Dresses, Kids’ Clothing",
      filters: {
        type: "High-low Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-square-neck-basque-waist-dress-art-class/-/A-94340525",
      tags: "Dresses, Girls’ Clothing, Jumpers, Kids’ Clothing",
      filters: {
        type: "Jumpers",
      },
    },
    {
      url: "https://www.target.com/p/zenzi-girls-39-short-sleeve-floral-chiffon-jumper-dress-ivory/-/A-93300541",
      tags: "Dresses, Girls’ Clothing, Jumpers, Kids’ Clothing",
      filters: {
        type: "Jumpers",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-woven-bow-jumper-dress/-/A-1004842018",
      tags: "Dresses, Girls’ Clothing, Jumpers, Kids’ Clothing",
      filters: {
        type: "Jumpers",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-uniform-plaid-jumper/-/A-1005140005",
      tags: "Dresses, Girls’ Clothing, Jumpers, Kids’ Clothing",
      filters: {
        type: "Jumpers",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-showcase-dress/-/A-1001541848",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sheath Dresses",
      filters: {
        type: "Sheath Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-sleeveless-woven-floral-dress-cat-38-jack-8482-turquoise-green/-/A-94310274",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses",
      filters: {
        type: "Shift Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-bluey-square-neck-all-over-print-dress-blue/-/A-93447112",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses",
      filters: {
        type: "Shift Dresses",
      },
    },
    {
      url: "https://www.target.com/p/sparkle-hop-sequined-fur-easter-dress-mia-belle-girls/-/A-1002839650",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses",
      filters: {
        type: "Shift Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-shimmering-sequin-spaghetti-strap-mini-dress/-/A-1004667872",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses",
      filters: {
        type: "Shift Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-short-sleeve-t-dress/-/A-1004010272",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses, T-Shirt Dresses",
      filters: {
        type: "Shift Dresses",
      },
    },
    {
      url: "https://www.target.com/p/reebok-girls-la-kings-drop-waist-dress/-/A-1004746122",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses",
      filters: {
        type: "Shift Dresses",
      },
    },
    {
      url: "https://www.target.com/p/sol-angeles-kids-one-shoulder-mini-ruffle-dress/-/A-1003665978",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses",
      filters: {
        type: "Shift Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mary-engelbreit-kayla-dress-dusty-blue-sailor/-/A-1003554814",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses",
      filters: {
        type: "Shift Dresses",
      },
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-short-sleeve-polo-dress/-/A-93421496",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bluey-girls-dress-little-kid-to-big-kid/-/A-88417244",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, Skater Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-princess-lion-king-jasmine-elsa-simba-girls-tulle-dress-little-kid-to-big-kid/-/A-87894051",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-denim-dress-cat-38-jack-8482-medium-wash/-/A-94492239",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-moana-girls-2-pack-dress-multicolor-10/-/A-1003488315",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-chambray-dress-little-kid-to-big/-/A-92302318",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, Tunic Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bluey-character-print-girls-dress-infants-to-big-kids/-/A-91123918",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, Skater Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-square-neck-pleated-dress/-/A-1003209265",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, Tunic Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-junior-square-neck-pleated-dress/-/A-1003209288",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, Tunic Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-dress-for-girls-elsa-snowflake-princess-dress-white-pink-lilac/-/A-1003488203",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, T-Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-monster-high-dress-sizes-4-14-16/-/A-1002435990",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-minnie-mouse-girls-mesh-cosplay-dress-little-kid-to-big-kid/-/A-88155878",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-dress-little-kid/-/A-87184999",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-tie-shoulder-twirl-dress/-/A-1003407904",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-princess-ariel-snow-white-rapunzel-belle-cinderella-little-girls-2-pack-dresses-disney-princesses/-/A-86005748",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-ruffle-dress-sizes-2t-10-12/-/A-1003633324",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-french-terry-short-sleeve-dress-scrunchy-set-red/-/A-87237364",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, Skater Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-girls-casual-summer-dress-with-sequins/-/A-1002844340",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-save-ferris-graphic-short-sleeve-fleece-dress/-/A-1002118433",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, Sweater Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-ferris-my-hero-graphic-short-sleeve-fleece-dress/-/A-1002032866",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, Sweater Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/charmed-the-power-of-three-will-set-you-free-graphic-short-sleeve-fleece-dress/-/A-1001994398",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, Sweater Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-do-you-know-anything-graphic-short-sleeve-fleece-dress/-/A-1002030585",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, Sweater Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-bueller-bueller-bueller-graphic-short-sleeve-fleece-dress/-/A-1002031453",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-how-could-i-possibly-graphic-short-sleeve-fleece-dress/-/A-1002031722",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-this-is-my-camping-shirt-graphic-short-sleeve-fleece-dress/-/A-1001738933",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, Sweater Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-adventure-citys-heroes/-/A-1000807407",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, Sweater Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bellabu-bear-kids-milk-cookies-white-bamboo-girls-sleeveless-dress/-/A-1004813480",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-3-4-sleeve-corduroy-shirt-dress/-/A-1005094058",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-rib-tank-dress-cat-38-jack-8482-hot-pink/-/A-94219171",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-tank-dress-cat-38-jack-8482/-/A-94147428",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-tiered-ribbed-dress-cat-38-jack-8482/-/A-92901438",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-knit-dress-cat-jack/-/A-89487285",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-mouse-daisy-lilo-stitch-princess-belle-ariel-girls-chambray-skater-dress-toddler-to-big-kid/-/A-91112581",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, Tunic Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-2-pack-skater-dresses-little-kid-to-big/-/A-91318240",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-short-bubble-sleeve-smocked-dress-kids/-/A-90598282",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-jersey-long-sleeve-twirly-skater-dress/-/A-90461636",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-princess-anna-olaf-christmas-girls-skater-dress-little-kid/-/A-85239228",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-ribbed-dress-cat-38-jack/-/A-94486514",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-barbie-land-athletics-fit-flair-cap-sleeve-dress/-/A-1002051454",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-moana-2-cosplay-dress-coral-red-ivory/-/A-92185954",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-astrid-skater-dress-white/-/A-91487285",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/just-love-girls-twirl-dress-girls-short-sleeve-twirly-skater-dress/-/A-1002806899",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/squishmallows-2-pack-skater-dresses/-/A-1003364007",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/wicked-little-girls-2-pack-skater-dresses-logo-pink-green-5/-/A-1003394660",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-evolution-stickers-fit-flair-cap-sleeve-dress/-/A-1002396657",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bluey-mom-dad-bingo-girls-2-pack-skater-dresses-toddler-to-big-kid/-/A-88256298",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-2-pack-skater-dresses/-/A-1002897100",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-french-terry-skater-dress/-/A-1002436011",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-recess-dress-in-rainbow-confetti-dots/-/A-1002751980",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-ballerina-this-girl-can-dance-fit-flair-cap-sleeve-dress/-/A-93305049",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-soft-cotton-jersey-s-s-peter-pan-polo-twirly-dress/-/A-92901118",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-backyard-dress-in-double-rainbow-stripe/-/A-1002751937",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-soft-girls-jersey-short-sleeve-twirly-skater-dress/-/A-91487571",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-queen-bee-kitty-queen-girls-skater-sequin-dresses-scrunchie-toddler-to-big-kid/-/A-88257632",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-tennis-sweater-dress-kids/-/A-1000871924",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, Sweater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-solid-3-4-sleeve-twirl-dress/-/A-1005186864",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-flutter-sleeve-eyelet-dress-kids/-/A-1002929989",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, Sundresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peppa-pig-little-girls-2-pack-skater-dresses-blue-yellow-6/-/A-1002897161",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-fit-flair-cap-sleeve-dress/-/A-1002396678",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-sleeveless-knit-pinafore-dress-kids/-/A-90586123",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-solid-sleeveless-twirl-dress/-/A-1004010308",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-print-3-4-sleeve-twirl-dress/-/A-1005185887",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-evolutions-graphic-sleeveless-aline-dress/-/A-1002404806",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-spider-gwen-ghost-spider-girls-2-pack-skater-dresses-little-kid-to-big/-/A-91318366",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-starry-mew-fit-flair-cap-sleeve-dress/-/A-1002396536",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunglasses-and-sun-fit-flair-cap-sleeve-dress/-/A-1002058597",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-short-sleeve-puff-sleeve-party-dress-kids/-/A-90598312",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-tie-dye-and-butterflies-flutter-around-barbie-fit-flair-cap-sleeve-dress/-/A-1002058409",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-short-sleeve-drop-waist-dress/-/A-89617311",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-soccer-team-1959-fit-flair-cap-sleeve-dress/-/A-93305022",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-i-m-so-sweet-fit-flair-cap-sleeve-dress/-/A-1002396126",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-little-girls-chambray-dress-dark-blue-angel-7/-/A-1003640864",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-peter-pan-collar-seersucker-dress-kids/-/A-90585910",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-christie-retro-1987-fit-flair-cap-sleeve-dress/-/A-93304971",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-this-girl-is-changing-the-world-fit-flair-cap-sleeve-dress/-/A-93305011",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-organza-long-sleeve-tiered-babydoll-skater-dress/-/A-1001115958",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/twirl-dress-in-the-very-hungry-caterpillar-and-friends/-/A-1003295088",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-schoolgirl-cable-sweater-dress-kids/-/A-92214479",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, Sweater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-cap-sleeve-party-dress-with-bow-sash-kids/-/A-89804775",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-pleated-flutter-sleeve-apron-dress-with-embroidery-kids/-/A-1002929847",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-girls-organic-sleeveless-pleated-sweater-dress-with-bow-kids/-/A-1001113679",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, Sweater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-2-girls-elsa-and-anna-lavender-kids-sleeveless-dress/-/A-92711251",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-all-together-fit-flair-cap-sleeve-dress/-/A-1002069856",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-pool-water-reflection-fit-flair-cap-sleeve-dress/-/A-1002063776",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-sleeveless-twirl-dress/-/A-1004010269",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-girl-strong-kind-brave-bold-and-fearless-fit-flair-cap-sleeve-dress/-/A-1002071746",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-monster-high-lagoona-blue-bubbles-fit-flair-cap-sleeve-dress/-/A-1002010115",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-welcome-to-the-barbie-dream-house-fit-flair-cap-sleeve-dress/-/A-1002109459",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-butterflies-flutter-fit-flair-cap-sleeve-dress/-/A-1002076642",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-psyduck-spiral-fit-flair-cap-sleeve-dress/-/A-1002395649",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-jiggypuff-sing-along-fit-flair-cap-sleeve-dress/-/A-1002395866",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-leaves-swirling-fit-flair-cap-sleeve-dress/-/A-1002065480",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-eevee-retro-stripe-graphic-sleeveless-aline-dress/-/A-1002404978",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-charmander-see-the-evolution-fit-flair-cap-sleeve-dress/-/A-1002396995",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-monster-high-character-image-fit-flair-cap-sleeve-dress/-/A-1001976513",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-sleeveless-twirl-dress-sidewalk-chalk/-/A-1004010419",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-summer-dreams-trio-fit-flair-cap-sleeve-dress/-/A-93305000",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-short-sleeve-dresses-2-pack/-/A-1004010293",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-heart-grid-fit-flair-cap-sleeve-dress/-/A-1002082900",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-original-barbie-fit-flair-cap-sleeve-dress/-/A-1002061861",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-sk8er-grl-fit-flair-cap-sleeve-dress/-/A-1001998188",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-skater-chick-w-flowers-graphic-sleeveless-aline-dress/-/A-1001996638",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-run-the-world-graphic-sleeveless-aline-dress/-/A-1002072780",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002107572",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-bff-hearts-fit-flair-cap-sleeve-dress/-/A-1002109294",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-squirtle-charmander-and-bulbasaur-youth-girls-fit-and-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002396625",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-fly-on-the-4th-of-july/-/A-1000770888",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-cable-knit-peter-pan-collar-sweater-dress-kids/-/A-92929491",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, Sweater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-long-sleeve-tiered-button-front-peter-pan-collar-dress-kids/-/A-89379345",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-sleeveless-special-occasion-party-dress-with-cross-back-detail-kids/-/A-90586267",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, Sundresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-will-save-the-world-fit-flair-cap-sleeve-dress/-/A-1002073251",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunny-days-ahead-fit-flair-cap-sleeve-dress/-/A-1000412951",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mattel-monster-high-2-girl-crew-fit-flair-cap-sleeve-dress/-/A-1002008114",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mattel-frankie-draculaura-clawdeen-m-f-f-fit-flair-cap-sleeve-dress/-/A-1002008144",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-happy-eevee-graphic-sleeveless-aline-dress/-/A-1002405031",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-retro-graphic-sleeveless-aline-dress/-/A-1002405521",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-snorlax-fit-flair-cap-sleeve-dress/-/A-1002396883",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/twirl-dress-in-construction/-/A-1003295109",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-scary-fast-fit-flair-cap-sleeve-dress/-/A-1002093118",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-race-crew-4-yrs-fit-flair-cap-sleeve-dress/-/A-1002086076",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-sleeveless-maxi-embroidered-tulle-dress/-/A-1001847610",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-group-graphic-sleeveless-aline-dress/-/A-1002404446",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-strong-girls-make-waves-fit-flair-cap-sleeve-dress/-/A-1002109510",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-fun-in-the-sun-fit-flair-cap-sleeve-dress/-/A-93305043",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-classic-logo-fit-flair-cap-sleeve-dress/-/A-1002112526",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-hypnotic-pikachu-art-fit-flair-cap-sleeve-dress/-/A-1002396693",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-monster-high-blue-ink-frankie-fit-flair-cap-sleeve-dress/-/A-1001976524",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-sleeveless-twirl-dress-rainbow-stripe/-/A-1004010300",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-i-m-so-sweet-graphic-sleeveless-aline-dress/-/A-1002405385",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-my-little-pony-friendship-is-magic-girl-s-rainbow-dash-tank-top-dress-for-kids-grey/-/A-1000138305",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-summer-pool-floaties-fit-flair-cap-sleeve-dress/-/A-1002060689",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-squirtle-bulbasaur-charmander-group-fit-flair-cap-sleeve-dress/-/A-1002348144",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-little-girls-dress-pink-blue-spiderman-5/-/A-1005039704",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-print-3-4-sleeve-twirl-dress-x-large-12-botanical-floral/-/A-89617329",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-middle-school-dolls-fit-flair-cap-sleeve-dress/-/A-1002047901",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-deuce-gorgon-graphic-sleeveless-aline-dress/-/A-1002008499",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-believe-in-yourself-graphic-sleeveless-aline-dress/-/A-1002082781",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-birthday-kid-graphic-sleeveless-aline-dress/-/A-1002118078",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-5-yrs-graphic-sleeveless-aline-dress/-/A-1002085359",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-ready-to-smash-cake-graphic-sleeveless-aline-dress/-/A-1002086342",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-i-am-powerful-graphic-sleeveless-aline-dress/-/A-1002070090",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-sleeveless-aline-dress/-/A-1002069573",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-sk8er-grl-graphic-sleeveless-aline-dress/-/A-1002118226",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-4-yrs-graphic-sleeveless-aline-dress/-/A-1002085785",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-happy-spring-graphic-sleeveless-aline-dress/-/A-1002069955",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-out-of-office-graphic-sleeveless-aline-dress/-/A-1002060106",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-run-the-world-graphic-sleeveless-aline-dress/-/A-1002074815",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-happy-heart-day-graphic-sleeveless-aline-dress/-/A-1002081644",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-how-could-i-possibly-graphic-sleeveless-aline-dress/-/A-1002031881",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-fitness-barbie-graphic-sleeveless-aline-dress/-/A-1002117985",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-i-wheelie-love-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1002104985",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, Sweater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-frankiestein-voltageous-graphic-sleeveless-aline-dress/-/A-1002008486",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-this-is-how-i-roll-holiday-fit-flair-cap-sleeve-dress/-/A-1002048754",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-believe-in-miracles-holiday-fit-flair-cap-sleeve-dress/-/A-1002049844",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-holiday-friends-fit-flair-cap-sleeve-dress/-/A-1002049278",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-electric-type-graphic-sleeveless-aline-dress/-/A-1002405591",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-catch-em-all-design-graphic-sleeveless-aline-dress/-/A-1002405285",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-bff-of-the-sea/-/A-1000772867",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pumpkin-party-graphic-sleeveless-aline-dress/-/A-1002404328",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-sea-ya-later/-/A-1000781661",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-ferris-my-hero-graphic-sleeveless-aline-dress/-/A-1002032805",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-adventures-of-jimmy-neutron/-/A-1000857475",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-skater-graphic-sleeveless-aline-dress/-/A-1001984043",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-so-eggcited/-/A-1000849838",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-squidward-luck/-/A-1000827610",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-winter-fun-graphic-sleeveless-aline-dress/-/A-1002404014",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-tis-the-season/-/A-1000840126",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-friends-retro-checkered-graphic-sleeveless-aline-dress/-/A-1002404883",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-splashtastic/-/A-1000771478",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-character-grid/-/A-1000782139",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-patrick-it-s-lit/-/A-1000851037",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-sandy-boo-y-all/-/A-1000850794",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-happy-eevee-cute-graphic-sleeveless-aline-dress/-/A-1002404849",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-koraidon-collegiate-graphic-sleeveless-aline-dress/-/A-1002404557",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-witch-pikachu-with-candy-graphic-sleeveless-aline-dress/-/A-1002404367",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-stay-weird/-/A-1000781659",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-elements-graphic-sleeveless-aline-dress/-/A-1002404540",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-gotta-blast/-/A-1000856381",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-shine-like-fireworks/-/A-1000817131",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-woman-kind-kind-woman-graphic-sleeveless-aline-dress/-/A-1002118010",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-slowpoke-relax-repeat-graphic-sleeveless-aline-dress/-/A-1002404869",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-gengar-neon-graphic-sleeveless-aline-dress/-/A-1002405058",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002107488",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-bonnie-bones-swabs/-/A-1000772782",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-boo-tiful/-/A-1000850911",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-koraidon-elements-graphic-sleeveless-aline-dress/-/A-1002404460",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-nope-not-today/-/A-1000781694",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-let-it-snow/-/A-1000851078",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-ready-for-baseball/-/A-1000770758",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-3-yrs-graphic-sleeveless-aline-dress/-/A-1002086613",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002073050",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-hypnotic-pikachu-art-graphic-sleeveless-aline-dress/-/A-1002405497",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-enrique-palacios/-/A-1000772923",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-scardey-pants/-/A-1000810342",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-charmed-i-m-sure/-/A-1000827601",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-snowflakes-graphic-sleeveless-aline-dress/-/A-1002404098",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-squidward-bah-humbug/-/A-1000840181",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-pattern-graphic-sleeveless-aline-dress/-/A-1002405345",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-gary-the-snail/-/A-1000784931",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-its-my-birthday-graphic-sleeveless-aline-dress/-/A-1002085868",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-bulba-pattern-graphic-sleeveless-aline-dress/-/A-1002404077",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-stay-silly/-/A-1000781651",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-i-m-ready/-/A-1000781109",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-magikarp-graphic-sleeveless-aline-dress/-/A-1002405406",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-it-s-lit/-/A-1000770845",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-afro-and-hoops-graphic-sleeveless-aline-dress/-/A-1002117849",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-eat-em-all-graphic-sleeveless-aline-dress/-/A-1002404827",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-scaredy-pants/-/A-1000850678",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-we-re-so-ambitous-fit-flair-cap-sleeve-dress/-/A-1003970564",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-race-crew-3-yrs-fit-flair-cap-sleeve-dress/-/A-1002086760",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-brave-bold-and-fearless-fit-flair-cap-sleeve-dress/-/A-1002081380",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-flakes-fit-flair-cap-sleeve-dress/-/A-1002353905",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-ho-ho-no-fit-flair-cap-sleeve-dress/-/A-1000876051",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-slowpoke-taking-it-slow-fit-flair-cap-sleeve-dress/-/A-1002397035",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-bonnie-bones-queen-fit-flair-cap-sleeve-dress/-/A-1000871804",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-st-patricks-day-fit-flair-cap-sleeve-dress/-/A-1000850021",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-valentine-s-squad-fit-flair-cap-sleeve-dress/-/A-1002053881",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunset-and-palm-trees-fit-flair-cap-sleeve-dress/-/A-1002055524",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-best-witches-fit-flair-cap-sleeve-dress/-/A-1000876536",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-lucky-to-have-great-friends-fit-flair-cap-sleeve-dress/-/A-1002108062",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-girl-power-in-illusion-wave-fit-flair-cap-sleeve-dress/-/A-1002072390",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mattel-mattel-original-logo-fit-flair-cap-sleeve-dress/-/A-1001978519",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-happy-valentine-s-day-fit-flair-cap-sleeve-dress/-/A-1002084371",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-battle-tycoon-achievement-unlocked-fit-flair-cap-sleeve-dress/-/A-1004936423",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-weird-fit-flair-cap-sleeve-dress/-/A-1000451855",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-electric-type-fit-flair-cap-sleeve-dress/-/A-1002396473",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-game-on-don-fit-flair-cap-sleeve-dress/-/A-1000838935",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-property-of-barbie-land-beach-volleyball-team-fit-flair-cap-sleeve-dress/-/A-1002048115",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-race-crew-5-yrs-fit-flair-cap-sleeve-dress/-/A-1002085415",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-run-the-world-fit-flair-cap-sleeve-dress/-/A-1002072240",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pumpkin-party-fit-flair-cap-sleeve-dress/-/A-1002355144",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-inspired-by-barbie-fit-flair-cap-sleeve-dress/-/A-1002081040",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-xoxo-barbie-fit-flair-cap-sleeve-dress/-/A-1002058354",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-run-the-world-fit-flair-cap-sleeve-dress/-/A-1002073858",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-fit-flair-cap-sleeve-dress/-/A-1002067394",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-boo-barbie-girls-fit-flair-cap-sleeve-dress/-/A-1002090671",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-valentine-s-day-fit-flair-cap-sleeve-dress/-/A-1002047103",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rocket-power-skate-life-fit-flair-cap-sleeve-dress/-/A-1000826801",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-st-patricks-day-fit-flair-cap-sleeve-dress/-/A-1000827548",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-valentine-s-epic-fit-flair-cap-sleeve-dress/-/A-1002026019",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-best-witches-fit-flair-cap-sleeve-dress/-/A-1000877240",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-he-ken-can-do-it-all-fit-flair-cap-sleeve-dress/-/A-1002051858",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-miraidon-collegiate-fit-flair-cap-sleeve-dress/-/A-1002357312",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002072723",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002074737",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-believe-in-yourself-fit-flair-cap-sleeve-dress/-/A-1002084578",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-charizard-flash-fire-fit-flair-cap-sleeve-dress/-/A-1002350088",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-better-together-fit-flair-cap-sleeve-dress/-/A-1002109475",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-my-friends-greatest-treasure-fit-flair-cap-sleeve-dress/-/A-1000871728",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-valentine-s-you-make-my-heart-race-fit-flair-cap-sleeve-dress/-/A-1002026348",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-st-paddys-collage-fit-flair-cap-sleeve-dress/-/A-1002108126",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-ferris-my-hero-fit-flair-cap-sleeve-dress/-/A-1002032610",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mattel-draculaura-aka-fangtastic-fit-flair-cap-sleeve-dress/-/A-1001973298",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rugrats-reptar-bar-fit-flair-cap-sleeve-dress/-/A-1000449805",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-do-what-makes-you-awesome-fit-flair-cap-sleeve-dress/-/A-1002075926",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-lightning-bolts-fit-flair-cap-sleeve-dress/-/A-1002396480",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-stick-together-fit-flair-cap-sleeve-dress/-/A-1002065645",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-winter-holidays-fit-flair-cap-sleeve-dress/-/A-1002046130",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-love-makes-the-world-go-around-fit-flair-cap-sleeve-dress/-/A-1002064505",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-iconic-like-barbie-fit-flair-cap-sleeve-dress/-/A-1002109360",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-retrogamer-fit-flair-cap-sleeve-dress/-/A-1002395283",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-patrick-it-s-lit-fit-flair-cap-sleeve-dress/-/A-1000877289",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-multi-color-choose-kindness-fit-flair-cap-sleeve-dress/-/A-1002062634",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-plankton-naughty-list-fit-flair-cap-sleeve-dress/-/A-1000877190",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-valentine-s-made-to-race-fit-flair-cap-sleeve-dress/-/A-1002025473",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-righteous-dude-fit-flair-cap-sleeve-dress/-/A-1002030022",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-charmed-i-m-sure-fit-flair-cap-sleeve-dress/-/A-1000827470",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-living-the-dream-fit-flair-cap-sleeve-dress/-/A-1002066961",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-i-am-powerful-fit-flair-cap-sleeve-dress/-/A-1002070987",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-choose-kindness-fit-flair-cap-sleeve-dress/-/A-1002076612",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-friendship-goals-fit-flair-cap-sleeve-dress/-/A-1002082273",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-live-play-outside-the-box-fit-flair-cap-sleeve-dress/-/A-1002058006",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-fit-flair-cap-sleeve-dress/-/A-1002069253",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-hoppy-easter-icons-fit-flair-cap-sleeve-dress/-/A-1000501443",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-be-you-fit-flair-cap-sleeve-dress/-/A-1002082790",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002074934",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-so-cute-it-s-scary-fit-flair-cap-sleeve-dress/-/A-1002112494",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-they-call-me-ken-fit-flair-cap-sleeve-dress/-/A-1002059770",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-do-you-know-anything-fit-flair-cap-sleeve-dress/-/A-1002030439",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-valentine-s-day-fit-flair-cap-sleeve-dress/-/A-1002042839",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-happy-spring-fit-flair-cap-sleeve-dress/-/A-1002069809",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-monster-high-frankiestein-voltageous-fit-flair-cap-sleeve-dress/-/A-1001976833",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-neon-pikachu-fit-flair-cap-sleeve-dress/-/A-1002395643",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-clover-power-fit-flair-cap-sleeve-dress/-/A-1002108143",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-bonnie-bones-swabs-fit-flair-cap-sleeve-dress/-/A-1000871812",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-did-i-scare-ya-fit-flair-cap-sleeve-dress/-/A-1000480386",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-dashing-through-the-snow-fit-flair-cap-sleeve-dress/-/A-1000876071",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002107736",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-support-girls-fit-flair-cap-sleeve-dress/-/A-1002063787",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002068999",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-open-your-mind-open-your-heart-fit-flair-cap-sleeve-dress/-/A-1003970570",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-out-of-office-fit-flair-cap-sleeve-dress/-/A-1002065638",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-magikarp-fit-flair-cap-sleeve-dress/-/A-1002395711",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mattel-mattel-original-logo-fit-flair-cap-sleeve-dress/-/A-1001978619",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-psyduck-spiral-fit-flair-cap-sleeve-dress/-/A-1002395353",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-st-patricks-day-fit-flair-cap-sleeve-dress/-/A-1000849954",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-bueller-bueller-bueller-fit-flair-cap-sleeve-dress/-/A-1002031297",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-gotta-eat-em-all-fit-flair-cap-sleeve-dress/-/A-1002376980",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-squidward-luck-fit-flair-cap-sleeve-dress/-/A-1000827535",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-squirtle-evolution-fit-flair-cap-sleeve-dress/-/A-1002396781",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-greetings-from-barbie-land-fit-flair-cap-sleeve-dress/-/A-1002050193",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-will-save-the-world-fit-flair-cap-sleeve-dress/-/A-1002109440",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-palm-trees-fit-flair-cap-sleeve-dress/-/A-1002063448",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunburst-logo-fit-flair-cap-sleeve-dress/-/A-1002112655",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mattel-monster-skull-bow-fit-flair-cap-sleeve-dress/-/A-1002008164",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-incredibly-fabulous-fit-flair-cap-sleeve-dress/-/A-1002048880",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-not-today-fit-flair-cap-sleeve-dress/-/A-1000451830",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-hearts-barbie-fit-flair-cap-sleeve-dress/-/A-1002066022",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-jimmy-neutron-boy-genius-fit-flair-cap-sleeve-dress/-/A-1000856378",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-how-could-i-possibly-fit-flair-cap-sleeve-dress/-/A-1002031324",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-living-the-dream-fit-flair-cap-sleeve-dress/-/A-1002051889",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-original-icons-in-circle-grid-fit-flair-cap-sleeve-dress/-/A-1002060508",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-bikini-bottom-university-fit-flair-cap-sleeve-dress/-/A-1000463148",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-sun-s-out-fit-flair-cap-sleeve-dress/-/A-1002056846",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-birthday-kid-fit-flair-cap-sleeve-dress/-/A-1002086100",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-jiggypuff-sing-along-fit-flair-cap-sleeve-dress/-/A-1002395999",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-chasing-dreams-fit-flair-cap-sleeve-dress/-/A-1002050540",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-friends-rock-fit-flair-cap-sleeve-dress/-/A-1002083160",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-game-on-mike-fit-flair-cap-sleeve-dress/-/A-1000838448",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-friends-brightest-rainbow-fit-flair-cap-sleeve-dress/-/A-1002109353",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mattel-cleo-mermaid-besties-fit-flair-cap-sleeve-dress/-/A-1002008156",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002074915",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-individual-classic-icons-create-silhouette-fit-flair-cap-sleeve-dress/-/A-1002066430",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-witch-sihloutte-fit-flair-cap-sleeve-dress/-/A-1002090806",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-let-it-snow-fit-flair-cap-sleeve-dress/-/A-1000877308",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-so-eggcited-fit-flair-cap-sleeve-dress/-/A-1000849814",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-winter-holidays-fit-flair-cap-sleeve-dress/-/A-1002046727",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-zuko-fire-nation-fit-flair-cap-sleeve-dress/-/A-1000870850",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-jimmy-neutron-genius-fit-flair-cap-sleeve-dress/-/A-1000856273",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-royal-rebel-fit-flair-cap-sleeve-dress/-/A-1001993126",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/p-s-from-aeropostale-toddler-little-girls-2-piece-skater-dresses/-/A-1002589046",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-dc-comics-wonder-woman-dress-girls-cosplay-skater-dress/-/A-1004478522",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-lagoona-blue-bubbles-graphic-sleeveless-aline-dress/-/A-1002010271",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-no-pants/-/A-1000782195",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/if-movie-anything-s-possible-graphic-sleeveless-aline-dress/-/A-1001970382",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-xmas-sweater/-/A-1000790886",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-royal-rebel-graphic-sleeveless-aline-dress/-/A-1001990061",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-stick-together-graphic-sleeveless-aline-dress/-/A-1002065920",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-another-awesome-pirate-adventure/-/A-1000781436",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-feelin-fineapple/-/A-1000785166",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-absorb-the-love/-/A-1000784899",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-genius/-/A-1000856371",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/worthy-threads-little-big-girls-ruffle-cap-sleeve-racer-back-dresses/-/A-1004020865",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-sleeveless-twirl-dress-navy-poppy/-/A-1004010317",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/long-sleeve-twirl-dress-in-icon/-/A-1004884000",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/long-sleeve-twirl-dress-in-slytherin/-/A-1004884011",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/long-sleeve-twirl-dress-in-ravenclaw/-/A-1004884027",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-chambray-sundress-with-embroidery-kids/-/A-1002929800",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, Sundresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-button-front-ruffle-sundress-kids/-/A-1002929811",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, Sundresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-sleeveless-bow-shoulder-simple-sundress-kids/-/A-88766137",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "Skater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-tiered-dress-art-class/-/A-94340880",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Slip Dresses",
      filters: {
        type: "Slip Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-button-front-drop-waist-dress-art-class/-/A-94340523",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-minnie-mouse-gauze-gauze-dress-pink/-/A-94431053",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-gauze-dress-blue/-/A-94431037",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-sleeveless-special-occasion-sun-dress-with-bow-back-detail-and-embroidery-kids/-/A-90586200",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-jersey-long-sleeve-tiered-dress/-/A-90735838",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-woven-floral-midi-dress-cat-38-jack-8482/-/A-94576189",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-printed-halter-slip-dress-art-class/-/A-94340524",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-ruched-fit-flare-empire-waist-mini-dress-art-class/-/A-94152122",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-strappy-babydoll-bubble-dress-art-class/-/A-94152124",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-tropical-floral-ruffle-strap-dress-pink/-/A-94653597",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-sweater-dress-art-class/-/A-93146685",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-drop-waist-strappy-tiered-dress-art-class/-/A-94021778",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/pretty-petal-blues-tiered-dress-mia-belle-girls/-/A-1004365067",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/daisy-delight-smocked-tiered-dress-mia-belle-girls/-/A-1004617534",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/brainy-ballerina-layered-tutu-dress-mia-belle-girls/-/A-1004233775",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses, Tutu Dresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/pretty-petal-pink-tiered-dress-mia-belle-girls/-/A-1004605875",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/dressed-with-love-sequin-heart-skater-dress-mia-belle-girls/-/A-1003919621",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/sanrio-hello-kitty-girls-2-pack-dress-multicolor-2t/-/A-1003488275",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/patpat-family-matching-outfits-boho-floral-print-square-neck-puff-sleeve-smocked-dress-and-short-sleeve-t-shirts-matching-set/-/A-1003646956",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/sanrio-hello-kitty-girls-2-pack-dress-multicolor-2t/-/A-1003488283",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-knit-short-sleeve-twirl-dress/-/A-93068581",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses, T-Shirt Dresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-overall-jumper-dress/-/A-91496877",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/a-attire-apple-sparkle-tutu-dress-mia-belle-girls/-/A-1004908403",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/tropical-botanicals-sleeveless-hi-lo-dress-mia-belle-girls/-/A-1004617711",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-splash-queen-mermaid-dress-mia-belle-girls/-/A-1004605899",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/radiant-heart-twirly-long-sleeve-skater-dress-mia-belle-girls/-/A-1003919627",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/bunny-dreams-ruffle-denim-dress-mia-belle-girls/-/A-1003867427",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses, Tunic Dresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-bunnies-in-floral-garden-dress/-/A-1001254284",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/spring-chic-lace-maxi-dress-mia-belle-girls/-/A-1004365065",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/paisley-print-mid-length-dress/-/A-93490915",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/sunbathing-sweetie-cold-shoulder-dress-mia-belle-girls/-/A-1002439299",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-twirl-dress/-/A-1002539247",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/spring-butterflies-smocked-tiered-dress-mia-belle-girls/-/A-1004617695",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-girls-tsum-tsum-stormtrooper-youth-kids-skater-dress/-/A-91866653",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/berry-bliss-hi-lo-ruffle-dress-mia-belle-girls/-/A-1002840469",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-paisley-print-bohemian-dress/-/A-93490897",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/boho-blossom-tank-tiered-dress-mia-belle-girls-blush-7-8/-/A-1003839787",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/sweet-cherry-embroidered-pinstripe-tank-dress-mia-belle-girls/-/A-1004457470",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/boho-mint-floral-tiered-dress-mia-belle-girls/-/A-1004365311",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/tropical-floral-bloom-ruffle-hi-lo-dress-mia-belle-girls/-/A-1002316878",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/boho-blossom-floral-print-tank-tiered-dress-mia-belle-girls/-/A-1003839794",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/seaside-petals-ruffle-midi-dress-mia-belle-girls/-/A-1003803895",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/mary-engelbreit-roxy-dress-antique-wallpaper/-/A-1004727797",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/golden-sands-ruffle-shoulder-sundress-mia-belle-girls/-/A-1003839777",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/riviera-sun-girls-flag-sundress-tie-dye-american-flag-beach-cover-up/-/A-92296692",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-astrid-floral-long-sleeve-sundress/-/A-91487282",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-soft-organic-cotton-empire-camisole-sundress-usa-made/-/A-1004692462",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-bow-strap-border-hem-sundress-kids/-/A-1002929834",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-sleeveless-smocked-sundress-kids/-/A-1002929845",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "Sundresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-sleeping-athletics/-/A-1000784634",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-sleeveless-sweater-dress-cat-jack/-/A-94147306",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-athletics-graphic-short-sleeve-fleece-dress/-/A-1002051467",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-athletic-logo-graphic-short-sleeve-fleece-dress/-/A-1002396348",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817830",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-athletic-dept/-/A-1000784473",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817728",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-collared-henley-sweater-dress-kids/-/A-92929545",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-bow-detail-intarsia-sweater-dress-kids/-/A-93392081",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-evolution-stickers-graphic-short-sleeve-fleece-dress/-/A-1002396629",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-hanukkah-doll/-/A-1000856771",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-happy-eevee-youth-girls-fleece-dress-graphic-short-sleeve-fleece-dress/-/A-1002385898",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-short-sleeve-fleece-dress/-/A-1002095349",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/invader-zim-gir-loves-tacos-in-space-graphic-short-sleeve-fleece-dress/-/A-1003971400",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-frankie-stein-voltageous-graphic-short-sleeve-fleece-dress/-/A-1002008737",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-tie-dye-and-butterflies-flutter-around-barbie-graphic-short-sleeve-fleece-dress/-/A-1002058235",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-boo-snoopy-graphic-short-sleeve-fleece-dress/-/A-1001728321",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-the-grinch-max-is-my-boo/-/A-1000781585",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791854",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-valentine-s-heartbreaker/-/A-1000833046",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803300",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000850470",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bubble-guppies-molly-and-zooli-heart-bubble-heart-graphic-short-sleeve-fleece-dress/-/A-1000758457",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-grinch-face/-/A-1000781628",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-poppy-stacked-name/-/A-1000798185",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bubble-guppies-time-for-lunch-graphic-short-sleeve-fleece-dress/-/A-1000758365",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-the-many-moods-of-grinch/-/A-1000780438",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-and-woodstock-vermont-ski-resort/-/A-1000840413",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skys-the-limit/-/A-1000807538",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-team-paw-skye/-/A-1000809501",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-team-paw-chase/-/A-1000809622",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-leo-and-brothers-there-are-no-rules/-/A-1000809130",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790778",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-short-sleeve-ruffle-edge-sweater-dress-kids/-/A-92929482",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-dear-santa/-/A-1000848642",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-radical-group/-/A-1000786778",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000810312",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-the-grinch-stink-stank-stunk/-/A-1000781564",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-summer-time-dream-graphic-short-sleeve-fleece-dress/-/A-1002059197",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-turtles-character-grid/-/A-1000838803",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-let-me-hear-you-shout-poppy-and-branch/-/A-1000798289",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-chill-snoopy-graphic-short-sleeve-fleece-dress/-/A-1001727225",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-rubble-beach/-/A-1000786424",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-mr-salty-graphic-short-sleeve-fleece-dress/-/A-1001734973",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bubble-guppies-oona-graphic-short-sleeve-fleece-dress/-/A-1000758466",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-short-sleeve-fleece-dress/-/A-1002095269",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-summer-is-for-camping-graphic-short-sleeve-fleece-dress/-/A-1001734665",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820772",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-sunglasses-and-sun-graphic-short-sleeve-fleece-dress/-/A-1002062080",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-rainbow-high-character-group-graphic-short-sleeve-fleece-dress/-/A-1001996122",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-sketch/-/A-1000787334",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-original-i-am-green-eggs-and-ham/-/A-1000773640",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-show-up-glow-up-poppy/-/A-1000798449",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-livin-that-poppy-life/-/A-1000751215",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-pixel-gaming-group/-/A-1000838877",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-i-regret-nothing/-/A-1000841592",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-grow-grrrl-hearts-the-earth-graphic-short-sleeve-fleece-dress/-/A-1001999443",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-plankton-naughty-list/-/A-1000850996",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-i-loaf-you-bread-graphic-short-sleeve-fleece-dress/-/A-1001599181",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-the-grinch-sweet-as-cindy-lou-who/-/A-1000780474",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-conversation-hearts/-/A-1000832939",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-love-you-like-pizza-graphic-short-sleeve-fleece-dress/-/A-1001599151",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-eat-em-all-graphic-short-sleeve-fleece-dress/-/A-1002376976",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-birthday-girl-graphic-short-sleeve-fleece-dress/-/A-1002089719",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-short-sleeve-fleece-dress/-/A-1001977654",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-i-love-pop-poppy/-/A-1000798279",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-violet-skyler-jade-graphic-short-sleeve-fleece-dress/-/A-1001996051",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bubble-guppies-deema/-/A-1000758436",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/little-tikes-imagination-is-all-it-takes-graphic-short-sleeve-fleece-dress/-/A-1001986943",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-feel-the-vibes-poppy/-/A-1000798392",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-easter-weaster/-/A-1000850149",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-leopard-heart-graphic-short-sleeve-fleece-dress/-/A-1002064367",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-run-the-world-graphic-short-sleeve-fleece-dress/-/A-1002070018",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-space-rock-girls-graphic-short-sleeve-fleece-dress/-/A-1002005040",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-computer-design-graphic-short-sleeve-fleece-dress/-/A-1001992409",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-snorlax-graphic-short-sleeve-fleece-dress/-/A-1002396996",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000826156",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-to-have-my-cousins-graphic-short-sleeve-fleece-dress/-/A-1001728794",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-mini-mini-mini-graphic-short-sleeve-fleece-dress/-/A-1002065505",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-sandy-cheeks/-/A-1000785073",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-fly-on-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1001736222",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-irish-i-was-a-unicorn-graphic-short-sleeve-fleece-dress/-/A-1001729000",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-peanuts-snoopy-woodstock-graphic-short-sleeve-fleece-dress/-/A-1001724411",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-lightning-bolt-art-graphic-short-sleeve-fleece-dress/-/A-1002396706",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-hug-heart-flower-graphic-short-sleeve-fleece-dress/-/A-1001724402",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rocket-power-finish-line/-/A-1000826644",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-glow-grrrl-neon-qt-beats-babe-graphic-short-sleeve-fleece-dress/-/A-1001985730",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-americana/-/A-1000816931",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-grinch-it-s-fine/-/A-1000748084",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-birthday-graphic-short-sleeve-fleece-dress/-/A-1002090597",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-clues-crew-graphic-short-sleeve-fleece-dress/-/A-1001735037",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-happy-st-patricks-day/-/A-1000827713",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-happy-st-patricks-day/-/A-1000849738",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818183",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002075002",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-turn-it-up-poppy/-/A-1000798414",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-drip-drop-painting-girls-graphic-short-sleeve-fleece-dress/-/A-1002004282",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-luck-of-the-square-pants/-/A-1000849900",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-so-eggcited/-/A-1000849797",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-hugs-kisses-pup-treats/-/A-1000832996",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-rainbow-sparkle-box-graphic-short-sleeve-fleece-dress/-/A-1001996123",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-sheep-holding-a-shamrock-graphic-short-sleeve-fleece-dress/-/A-1001728860",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-manga-art-graphic-short-sleeve-fleece-dress/-/A-1002396058",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-american-thing-two/-/A-1000773775",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791781",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-suns-out-funs-out/-/A-1000786471",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-best-friends-forever/-/A-1000790019",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-be-my-meowentine/-/A-1001598431",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-toy-doll-lineup-graphic-short-sleeve-fleece-dress/-/A-1001996211",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-bow-detail-intarsia-sweater-dress-kids/-/A-92929372",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-fangtastic-graphic-short-sleeve-fleece-dress/-/A-1002008415",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-squirtle-bulbasaur-charmander-group-graphic-short-sleeve-fleece-dress/-/A-1002348164",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-campus-club-graphic-short-sleeve-fleece-dress/-/A-1002050787",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-i-m-a-mighty-pup/-/A-1000807425",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803252",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-birthdays-are-sweet-graphic-short-sleeve-fleece-dress/-/A-1002090709",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-scandinavian-bunny-with-flowers-graphic-short-sleeve-fleece-dress/-/A-1002611327",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-drawn-floral-logo-graphic-short-sleeve-fleece-dress/-/A-1001984411",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-sunny-days-ahead-graphic-short-sleeve-fleece-dress/-/A-1001731916",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818195",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-it-s-my-birthday-graphic-short-sleeve-fleece-dress/-/A-1002090901",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-woodstock-with-flower-and-pattern-graphic-short-sleeve-fleece-dress/-/A-1001724520",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1001985249",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-nope-not-today-snorlax-graphic-short-sleeve-fleece-dress/-/A-1002395452",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-classic-logo-pink-graphic-short-sleeve-fleece-dress/-/A-1002083132",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002075094",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-love-yourself-graphic-short-sleeve-fleece-dress/-/A-1002082256",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-all-american-kid-graphic-short-sleeve-fleece-dress/-/A-1002104963",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-friends-rock-graphic-short-sleeve-fleece-dress/-/A-1002083146",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-rainbow-vibes-poppy/-/A-1000798236",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-life-liberty-pursuit-of-pizza/-/A-1000847989",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-garfield-sunglasses/-/A-1000786060",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-dress-to-impress-yourself/-/A-1000798926",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/polly-pocket-totally-tiny-vibes-graphic-short-sleeve-fleece-dress/-/A-1002012898",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-camp-chill-graphic-short-sleeve-fleece-dress/-/A-1001727139",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-skater-chick-w-flowers-graphic-short-sleeve-fleece-dress/-/A-1001996781",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803313",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-bon-bon-doll-graphic-short-sleeve-fleece-dress/-/A-1001992680",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-leo-and-brothers-turtle-power/-/A-1000809068",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-catch-em-all-design-graphic-short-sleeve-fleece-dress/-/A-1002396214",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-vertical/-/A-1000809567",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-alaska-last-frontier-graphic-short-sleeve-fleece-dress/-/A-1001726361",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-zuma-sketch/-/A-1000787143",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-sparkle-and-bright-barbie-graphic-short-sleeve-fleece-dress/-/A-1002112459",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-animal-print-splatter-graphic-short-sleeve-fleece-dress/-/A-1001984418",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-bff-vibes-with-queen-bee-deva-neon-qt-graphic-short-sleeve-fleece-dress/-/A-1001985569",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-ski-ya-later-graphic-short-sleeve-fleece-dress/-/A-1001726455",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-cottontail-candy-co-graphic-short-sleeve-fleece-dress/-/A-1002632241",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-ruff-ruff-rescue-graphic-short-sleeve-fleece-dress/-/A-1001734721",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-poppy-singing/-/A-1000798313",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-sprigatito-stats-graphic-short-sleeve-fleece-dress/-/A-1002357584",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-the-snuggle-is-real-pikachu-and-sylveon-graphic-short-sleeve-fleece-dress/-/A-1002350385",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-girls-club-graphic-short-sleeve-fleece-dress/-/A-1001993828",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-candylicious-butterflies-hearts-graphic-short-sleeve-fleece-dress/-/A-1001993875",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-disco-made-me-do-it-graphic-short-sleeve-fleece-dress/-/A-1000798991",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-love-makes-the-world-go-around-graphic-short-sleeve-fleece-dress/-/A-1002064321",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-cell-phone-chat-girls-graphic-short-sleeve-fleece-dress/-/A-1001993950",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-festively-fabulous-graphic-short-sleeve-fleece-dress/-/A-1002112516",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-woodstock-rose-graphic-short-sleeve-fleece-dress/-/A-1001724482",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-easter-scene-graphic-short-sleeve-fleece-dress/-/A-1002632253",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-all-together-graphic-short-sleeve-fleece-dress/-/A-1002118594",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-it-s-always-a-great-time-for-smores-graphic-short-sleeve-fleece-dress/-/A-1001739001",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-they-call-me-ken-graphic-short-sleeve-fleece-dress/-/A-1002118597",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-squad-graphic-short-sleeve-fleece-dress/-/A-1002053698",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-butterflies-flutter-graphic-short-sleeve-fleece-dress/-/A-1002118625",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-stick-together-graphic-short-sleeve-fleece-dress/-/A-1002065602",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-witch-logo-graphic-short-sleeve-fleece-dress/-/A-1002118613",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-short-sleeve-fleece-dress/-/A-1002118601",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-afro-hoops-graphic-short-sleeve-fleece-dress/-/A-1002118660",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-u-glow-girl-graphic-short-sleeve-fleece-dress/-/A-1002004551",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-clawsome-graphic-short-sleeve-fleece-dress/-/A-1002008109",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-don-t-worry-go-along-graphic-short-sleeve-fleece-dress/-/A-1001739153",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-group-lucky-graphic-short-sleeve-fleece-dress/-/A-1002108205",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/polly-pocket-polly-pocket-ombre-logo-graphic-short-sleeve-fleece-dress/-/A-1002018233",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-choose-kindness-graphic-short-sleeve-fleece-dress/-/A-1002078015",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-school-crest-graphic-short-sleeve-fleece-dress/-/A-1002118416",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-girl-group-crest-graphic-short-sleeve-fleece-dress/-/A-1001977012",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-inspired-by-barbie-graphic-short-sleeve-fleece-dress/-/A-1002081262",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002075621",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-rainbow-checkered-frame-graphic-short-sleeve-fleece-dress/-/A-1002118379",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-day-graphic-short-sleeve-fleece-dress/-/A-1002047815",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-oh-zaps-graphic-short-sleeve-fleece-dress/-/A-1002008192",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/little-tikes-summer-fun-graphic-short-sleeve-fleece-dress/-/A-1001986936",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-character-group-graphic-short-sleeve-fleece-dress/-/A-1002008293",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-short-sleeve-fleece-dress/-/A-1002067289",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-draculaura-spider-webs-graphic-short-sleeve-fleece-dress/-/A-1002118473",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-queen-bee-neon-qt-deva-sugar-graphic-short-sleeve-fleece-dress/-/A-1001985756",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-collage-graphic-short-sleeve-fleece-dress/-/A-1002054674",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-rainbow-alt-girl-graphic-short-sleeve-fleece-dress/-/A-1001997006",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-clawdeen-wolf-moon-phases-graphic-short-sleeve-fleece-dress/-/A-1002118454",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002072619",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-original-barbie-graphic-short-sleeve-fleece-dress/-/A-1002062070",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-all-dolls-together-graphic-short-sleeve-fleece-dress/-/A-1001992940",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-day-graphic-short-sleeve-fleece-dress/-/A-1002043466",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/little-tikes-i-dream-of-ice-cream-graphic-short-sleeve-fleece-dress/-/A-1001987018",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-classic-dolls-graphic-short-sleeve-fleece-dress/-/A-1002118583",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-chasing-dreams-graphic-short-sleeve-fleece-dress/-/A-1002050516",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-always-extra-graphic-short-sleeve-fleece-dress/-/A-1002118421",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-tis-the-season-graphic-short-sleeve-fleece-dress/-/A-1002112646",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-turn-it-up-graphic-short-sleeve-fleece-dress/-/A-1001996168",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-logo-santa-hat-graphic-short-sleeve-fleece-dress/-/A-1002118704",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-birthday-kid-graphic-short-sleeve-fleece-dress/-/A-1002118679",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-dancing-dolls-dance-graphic-short-sleeve-fleece-dress/-/A-1002005076",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-greetings-from-barbie-land-graphic-short-sleeve-fleece-dress/-/A-1002050105",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002118647",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-character-group-graphic-short-sleeve-fleece-dress/-/A-1002008363",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-red-white-and-blue-fish-graphic-short-sleeve-fleece-dress/-/A-1001739124",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-pastel-cut-out-character-spots-graphic-short-sleeve-fleece-dress/-/A-1002008641",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-argyle-graphic-short-sleeve-fleece-dress/-/A-1002046781",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-holiday-cheer-squad-graphic-short-sleeve-fleece-dress/-/A-1002112555",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girl-power-in-illusion-wave-graphic-short-sleeve-fleece-dress/-/A-1002072323",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-individual-classic-icons-create-silhouette-graphic-short-sleeve-fleece-dress/-/A-1002067098",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-property-of-barbie-land-beach-volleyball-team-graphic-short-sleeve-fleece-dress/-/A-1002048111",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-postal-service-california-graphic-short-sleeve-fleece-dress/-/A-1002050991",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-woman-kind-kind-woman-graphic-short-sleeve-fleece-dress/-/A-1002118580",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-time-to-shine-graphic-short-sleeve-fleece-dress/-/A-1002004878",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-its-my-birthday-graphic-short-sleeve-fleece-dress/-/A-1002086033",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002073228",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-fierce-strong-girl-graphic-short-sleeve-fleece-dress/-/A-1002068952",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-afro-and-hoops-graphic-short-sleeve-fleece-dress/-/A-1002118696",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-class-crew-in-attendance-graphic-short-sleeve-fleece-dress/-/A-1002008774",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-sketch-original-graphic-short-sleeve-fleece-dress/-/A-1002060467",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-m-c-swag-vibe-graphic-short-sleeve-fleece-dress/-/A-1001992773",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-original-icons-in-circle-grid-graphic-short-sleeve-fleece-dress/-/A-1002060923",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-sister-of-birthday-boy-graphic-short-sleeve-fleece-dress/-/A-1002085649",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-red-white-and-blue-muscle-car-graphic-short-sleeve-fleece-dress/-/A-1002104566",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-short-sleeve-fleece-dress/-/A-1002069156",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-summer-pool-floaties-graphic-short-sleeve-fleece-dress/-/A-1002060147",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-sun-and-beaches-graphic-short-sleeve-fleece-dress/-/A-1002118559",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/the-brady-bunch-classic-hollywood-squares-graphic-short-sleeve-fleece-dress/-/A-1002118343",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-ken-hearts-barbie-graphic-short-sleeve-fleece-dress/-/A-1002066369",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-proud-to-be-me-graphic-short-sleeve-fleece-dress/-/A-1002091135",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-support-girls-graphic-short-sleeve-fleece-dress/-/A-1002118539",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-hanukkah-doll-duo/-/A-1000856837",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-yearbook-photos-graphic-short-sleeve-fleece-dress/-/A-1002008613",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-winter-holidays-graphic-short-sleeve-fleece-dress/-/A-1002046148",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-palm-trees-graphic-short-sleeve-fleece-dress/-/A-1002063143",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-3-yrs-graphic-short-sleeve-fleece-dress/-/A-1002086574",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-live-play-outside-the-box-graphic-short-sleeve-fleece-dress/-/A-1002118526",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-witch-silhouette-graphic-short-sleeve-fleece-dress/-/A-1002118622",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-monster-friends-forever-graphic-short-sleeve-fleece-dress/-/A-1002008256",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-short-sleeve-fleece-dress/-/A-1002069405",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-logo-santa-hat-graphic-short-sleeve-fleece-dress/-/A-1002112584",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-all-things-red-white-and-blue-graphic-short-sleeve-fleece-dress/-/A-1001736273",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-racing-usa-graphic-short-sleeve-fleece-dress/-/A-1002104703",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-bff-hearts-graphic-short-sleeve-fleece-dress/-/A-1002083936",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-malibu-vibes-graphic-short-sleeve-fleece-dress/-/A-1002118550",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-drive-fast-live-free-graphic-short-sleeve-fleece-dress/-/A-1002104722",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-extra-w-a-side-of-swag-graphic-short-sleeve-fleece-dress/-/A-1001997080",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-believe-in-yourself-graphic-short-sleeve-fleece-dress/-/A-1002082468",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-retro-style-graphic-short-sleeve-fleece-dress/-/A-1002118334",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-chica-chica-tropical-graphic-short-sleeve-fleece-dress/-/A-1001985236",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-easter-vibes-graphic-short-sleeve-fleece-dress/-/A-1002072296",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-palm-trees-graphic-short-sleeve-fleece-dress/-/A-1002051200",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-peace-love-barbie-graphic-short-sleeve-fleece-dress/-/A-1002073833",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-brave-bold-and-fearless-graphic-short-sleeve-fleece-dress/-/A-1002118682",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-karaoke-queen-graphic-short-sleeve-fleece-dress/-/A-1001985445",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-cleo-and-mermaid-graphic-short-sleeve-fleece-dress/-/A-1002008082",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-witch-graphic-short-sleeve-fleece-dress/-/A-1002118675",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-short-sleeve-fleece-dress/-/A-1002067368",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-patterned-love-graphic-short-sleeve-fleece-dress/-/A-1002075845",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-xoxo-barbie-graphic-short-sleeve-fleece-dress/-/A-1002057891",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-hanukkah-believe-in-miracles/-/A-1000856778",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-mountain-retro-graphic-short-sleeve-fleece-dress/-/A-1001739110",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-out-of-box-graphic-short-sleeve-fleece-dress/-/A-1002079457",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-glam-series-graphic-short-sleeve-fleece-dress/-/A-1002003960",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-happy-holidays-graphic-short-sleeve-fleece-dress/-/A-1002112623",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-holidays-christmas-graphic-short-sleeve-fleece-dress/-/A-1002049162",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-you-re-the-sweetest-barbie-graphic-short-sleeve-fleece-dress/-/A-1002118555",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-sk8er-grl-graphic-short-sleeve-fleece-dress/-/A-1002118369",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-boogie-babe-graphic-short-sleeve-fleece-dress/-/A-1002004452",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-red-white-and-racing-graphic-short-sleeve-fleece-dress/-/A-1002104336",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-creeperific-graphic-short-sleeve-fleece-dress/-/A-1002008411",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-dolls-lead-together-graphic-short-sleeve-fleece-dress/-/A-1002118399",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-nick-logo-graphic-short-sleeve-fleece-dress/-/A-1002008265",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-queen-bee-is-born-to-roam-graphic-short-sleeve-fleece-dress/-/A-1002004777",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-1950-s-camper-snoopy-graphic-short-sleeve-fleece-dress/-/A-1001739027",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-earth-day-heart-graphic-short-sleeve-fleece-dress/-/A-1001739144",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-small-fry-caf-graphic-short-sleeve-fleece-dress/-/A-1002003879",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-lagoona-blue-graphic-short-sleeve-fleece-dress/-/A-1002118507",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girl-strong-kind-brave-bold-and-fearless-graphic-short-sleeve-fleece-dress/-/A-1002071555",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-homeworks-got-me-like-graphic-short-sleeve-fleece-dress/-/A-1001739187",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-groovy-babe-graphic-short-sleeve-fleece-dress/-/A-1001993981",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-royal-realness-graphic-short-sleeve-fleece-dress/-/A-1001993800",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/if-movie-anything-s-possible-graphic-short-sleeve-fleece-dress/-/A-1002118279",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-this-kid-s-gotta-fly-graphic-short-sleeve-fleece-dress/-/A-1001739158",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-retro-style-dolls-graphic-short-sleeve-fleece-dress/-/A-1001985451",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-get-ur-party-on-graphic-short-sleeve-fleece-dress/-/A-1001985440",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-friendship-goals-graphic-short-sleeve-fleece-dress/-/A-1002118448",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-true-monster-at-heart-graphic-short-sleeve-fleece-dress/-/A-1001972970",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-gradient-logo-graphic-short-sleeve-fleece-dress/-/A-1001996059",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/if-movie-lewis-poster-graphic-short-sleeve-fleece-dress/-/A-1002118268",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-catch-my-vibe-graphic-short-sleeve-fleece-dress/-/A-1001997122",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-high-school-dolls-graphic-short-sleeve-fleece-dress/-/A-1002049438",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-candy-hearts-graphic-short-sleeve-fleece-dress/-/A-1002082921",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-be-original-squares-graphic-short-sleeve-fleece-dress/-/A-1002083015",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-glow-grrrl-retro-styled-graphic-short-sleeve-fleece-dress/-/A-1001992756",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-catch-some-rays-graphic-short-sleeve-fleece-dress/-/A-1002004379",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-sunset-and-palm-trees-graphic-short-sleeve-fleece-dress/-/A-1002055252",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/if-movie-imagination-blossom-graphic-short-sleeve-fleece-dress/-/A-1002118273",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-girl-crew-graphic-short-sleeve-fleece-dress/-/A-1001739061",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-soar-graphic-short-sleeve-fleece-dress/-/A-1001739165",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-hand-painted-heart-graphic-short-sleeve-fleece-dress/-/A-1002072921",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-out-of-office-graphic-short-sleeve-fleece-dress/-/A-1002065579",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-b-day-bbs-graphic-short-sleeve-fleece-dress/-/A-1001985495",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-middle-school-dolls-graphic-short-sleeve-fleece-dress/-/A-1002048060",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-ghouls-night-out-graphic-short-sleeve-fleece-dress/-/A-1001972746",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-mattel-original-logo-graphic-short-sleeve-fleece-dress/-/A-1002118337",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-bffs-4-eva-graphic-short-sleeve-fleece-dress/-/A-1001999148",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-always-extra-graphic-short-sleeve-fleece-dress/-/A-1001997089",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-brave-pup-graphic-short-sleeve-fleece-dress/-/A-1001739175",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-hello-lovely-barbie-graphic-short-sleeve-fleece-dress/-/A-1002082443",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-fourth-of-july-graphic-short-sleeve-fleece-dress/-/A-1002118407",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-short-sleeve-fleece-dress/-/A-1002094954",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-boo-barbie-girls-graphic-short-sleeve-fleece-dress/-/A-1002118619",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-free-spirit-doll-graphic-short-sleeve-fleece-dress/-/A-1002004225",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-made-in-the-90-s-graphic-short-sleeve-fleece-dress/-/A-1002063608",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-sun-s-out-graphic-short-sleeve-fleece-dress/-/A-1002056511",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-earthy-bb-graphic-short-sleeve-fleece-dress/-/A-1002004929",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-dance-queens-graphic-short-sleeve-fleece-dress/-/A-1001985214",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-red-rocker-blue-bomber-graphic-short-sleeve-fleece-dress/-/A-1002011357",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-candylicious-original-graphic-short-sleeve-fleece-dress/-/A-1001997098",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-bravo-babes-graphic-short-sleeve-fleece-dress/-/A-1001999407",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-palm-trees-graphic-short-sleeve-fleece-dress/-/A-1002063502",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-happy-spring-graphic-short-sleeve-fleece-dress/-/A-1002069803",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-rock-em-sock-em-robots-logo-graphic-short-sleeve-fleece-dress/-/A-1002011043",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-bestie-big-hug-graphic-short-sleeve-fleece-dress/-/A-1002118331",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-happy-hanukkah-graphic-short-sleeve-fleece-dress/-/A-1000780770",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-righteous-dude-graphic-short-sleeve-fleece-dress/-/A-1002030268",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-dance-party-graphic-short-sleeve-fleece-dress/-/A-1001985462",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-grow-grrrl-graphic-short-sleeve-fleece-dress/-/A-1002004752",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-america-cars-graphic-short-sleeve-fleece-dress/-/A-1002105088",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-palm-springs-graphic-short-sleeve-fleece-dress/-/A-1001974414",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-queens-support-each-other-graphic-short-sleeve-fleece-dress/-/A-1001974428",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-kitty-stars-graphic-short-sleeve-fleece-dress/-/A-1001974451",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-we-re-all-queens-graphic-short-sleeve-fleece-dress/-/A-1001993695",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-nashville-and-bluegrass-queen-graphic-short-sleeve-fleece-dress/-/A-1001974314",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-pink-draculaura-graphic-short-sleeve-fleece-dress/-/A-1002008627",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/polly-pocket-90s-doll-graphic-short-sleeve-fleece-dress/-/A-1002021757",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-4-yrs-graphic-short-sleeve-fleece-dress/-/A-1002085959",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-fierce-queens-graphic-short-sleeve-fleece-dress/-/A-1001993622",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-road-trippin-graphic-short-sleeve-fleece-dress/-/A-1002004524",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-howdy-cowgirls-graphic-short-sleeve-fleece-dress/-/A-1002004073",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-winter-breeze-graphic-short-sleeve-fleece-dress/-/A-1002055912",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-woodstock-turkey-graphic-short-sleeve-fleece-dress/-/A-1001739080",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-witch-way-to-the-candy-graphic-short-sleeve-fleece-dress/-/A-1001739138",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-camping-graphic-short-sleeve-fleece-dress/-/A-1001739005",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-the-great-pumpkin-believer-graphic-short-sleeve-fleece-dress/-/A-1001739085",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-charmer-graphic-short-sleeve-fleece-dress/-/A-1001739035",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-happiness-is-a-pile-of-leaves-graphic-short-sleeve-fleece-dress/-/A-1001739139",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-thanksful-grateful-blessed-graphic-short-sleeve-fleece-dress/-/A-1001739125",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-2fly-4-wrdz-graphic-short-sleeve-fleece-dress/-/A-1001993772",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-ski-pro-graphic-short-sleeve-fleece-dress/-/A-1001739082",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-and-linus-cozy-and-cuddly-graphic-short-sleeve-fleece-dress/-/A-1001739140",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-ride-green-graphic-short-sleeve-fleece-dress/-/A-1001739028",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-just-a-kid-who-loves-fall-graphic-short-sleeve-fleece-dress/-/A-1001739095",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1002118387",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-fanime-kawaii-graphic-short-sleeve-fleece-dress/-/A-1002004233",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-roadie-graphic-short-sleeve-fleece-dress/-/A-1002118374",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-speak-through-art-graphic-short-sleeve-fleece-dress/-/A-1003929004",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-monsters-group-graphic-short-sleeve-fleece-dress/-/A-1002008199",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-grrrls-run-the-world-graphic-short-sleeve-fleece-dress/-/A-1002118424",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-linus-skateboarding-graphic-short-sleeve-fleece-dress/-/A-1001739023",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-and-friends-thrilled-to-be-chilled-graphic-short-sleeve-fleece-dress/-/A-1001739011",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-lets-unbox-graphic-short-sleeve-fleece-dress/-/A-1001978279",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-let-s-roll-graphic-short-sleeve-fleece-dress/-/A-1001739057",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-malibu-sunset-with-palm-trees-graphic-short-sleeve-fleece-dress/-/A-1002118541",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-happy-birthday-to-me-graphic-short-sleeve-fleece-dress/-/A-1002118718",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-m-f-f-monster-friends-forever-graphic-short-sleeve-fleece-dress/-/A-1002118324",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-ghouls-squad-graphic-short-sleeve-fleece-dress/-/A-1002118328",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-usa-turtles/-/A-1000848116",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-happy-howl/-/A-1000845515",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-time-to-shine-graphic-short-sleeve-fleece-dress/-/A-1002004834",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-fierce-doll-graphic-short-sleeve-fleece-dress/-/A-1002003923",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-bff-4lyfe-graphic-short-sleeve-fleece-dress/-/A-1002118366",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-never-have-tomb-many-friends-graphic-short-sleeve-fleece-dress/-/A-1002118289",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-winter-holidays-graphic-short-sleeve-fleece-dress/-/A-1002044060",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-retro-flower-rainbow-graphic-short-sleeve-fleece-dress/-/A-1001739045",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-slay-all-day-graphic-short-sleeve-fleece-dress/-/A-1001978272",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820728",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819133",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-coolest-clover-in-the-patch-graphic-short-sleeve-fleece-dress/-/A-1001728850",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-minion-banana-stickers-graphic-short-sleeve-fleece-dress/-/A-1000799088",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-candy-squad-graphic-short-sleeve-fleece-dress/-/A-1001727083",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-cat-scratches/-/A-1000789716",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-leprechaun-truck-delivering-luck-graphic-short-sleeve-fleece-dress/-/A-1001728941",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000768936",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-neon-boxes-graphic-short-sleeve-fleece-dress/-/A-1002395723",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-team-awesome-graphic-short-sleeve-fleece-dress/-/A-1001739119",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-going-big-for-my-birthday-graphic-short-sleeve-fleece-dress/-/A-1002086777",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-garfield-odie-game-on/-/A-1000786121",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fishing-lures-graphic-short-sleeve-fleece-dress/-/A-1004185911",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-branch-stacked/-/A-1000798499",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-property-of-bikini-bottom/-/A-1000785155",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-snowflake-wreath-graphic-short-sleeve-fleece-dress/-/A-1001978302",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795627",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-abc-book-characters-graphic-short-sleeve-fleece-dress/-/A-1003971791",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-s-thinking-chair-graphic-short-sleeve-fleece-dress/-/A-1001734931",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-game-on-kindergarten-graphic-short-sleeve-fleece-dress/-/A-1001735493",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-spray-paint-96-graphic-short-sleeve-fleece-dress/-/A-1001729437",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/karma-s-world-love-what-you-love-graphic-short-sleeve-fleece-dress/-/A-1003972126",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-checkered-graphic-short-sleeve-fleece-dress/-/A-1002386097",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-kamp-koral-krabby-kamper/-/A-1000787482",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-legend-graphic-short-sleeve-fleece-dress/-/A-1002357481",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1001985290",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-turkey-squad-graphic-short-sleeve-fleece-dress/-/A-1001726993",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795666",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-moon-witch-graphic-short-sleeve-fleece-dress/-/A-1002355260",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-scaredy-pants/-/A-1000850660",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-heart-grid-graphic-short-sleeve-fleece-dress/-/A-1002082949",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-team-pok-mon-graphic-short-sleeve-fleece-dress/-/A-1002395845",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rocket-power-skate-life/-/A-1000826648",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-jiggypuff-music-notes-graphic-short-sleeve-fleece-dress/-/A-1002396097",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtles-happy-holidays/-/A-1000843284",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-toph-graphic-short-sleeve-fleece-dress/-/A-1001732503",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790698",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-explore-more-art-graphic-short-sleeve-fleece-dress/-/A-1001739067",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-lets-hang-out-branch/-/A-1000796936",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-i-train-my-brain-graphic-short-sleeve-fleece-dress/-/A-1003971318",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/curious-george-classic-cartoons-graphic-short-sleeve-fleece-dress/-/A-1003971414",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-learn-alotl-in-2nd-grade-graphic-short-sleeve-fleece-dress/-/A-1003972090",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000826004",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-i-live-for-weekends/-/A-1000763281",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-gimme-a-beat-branch-and-poppy/-/A-1000798243",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-and-friends-graphic-short-sleeve-fleece-dress/-/A-1002386923",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-not-always-right/-/A-1000857673",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-hawaii-graphic-short-sleeve-fleece-dress/-/A-1001739056",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791715",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-skateboards/-/A-1000786821",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-hug-it-out/-/A-1000789723",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtles-have-a-turtley-awesome-holiday/-/A-1000843201",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-trio-graphic-short-sleeve-fleece-dress/-/A-1001733056",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-problem-solver-graphic-short-sleeve-fleece-dress/-/A-1003971387",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795682",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-friends-grow-together-graphic-short-sleeve-fleece-dress/-/A-1002004739",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-paint-logo/-/A-1000786825",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-next-level-graphic-short-sleeve-fleece-dress/-/A-1001985363",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-easter-eggs-come-from-where-graphic-short-sleeve-fleece-dress/-/A-1002611542",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fall-graphic-short-sleeve-fleece-dress/-/A-1004529139",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000782112",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-waves-hello-graphic-short-sleeve-fleece-dress/-/A-1000753907",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-retro-trailblazers-graphic-short-sleeve-fleece-dress/-/A-1001727125",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-don-t-know-don-t-care/-/A-1000857603",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-go-go-gurl-graphic-short-sleeve-fleece-dress/-/A-1002004240",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820828",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-rubble-graphic/-/A-1000809492",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-jade-hunter-rainbow-graffiti-graphic-short-sleeve-fleece-dress/-/A-1001996181",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-pink-core-graphic-short-sleeve-fleece-dress/-/A-1002083698",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000794696",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-hello-go-home-now/-/A-1000763503",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-royal-bee-graphic-short-sleeve-fleece-dress/-/A-1001993786",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-what-rules-leo-and-brothers/-/A-1000809018",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-the-grinch-naughty-or-nice/-/A-1000781603",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-aang-arrows-graphic-short-sleeve-fleece-dress/-/A-1001733084",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-pup-pup-lights-up/-/A-1000780739",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-grid-graphic-short-sleeve-fleece-dress/-/A-1002386137",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-icon-collage-logo-graphic-short-sleeve-fleece-dress/-/A-1001984401",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-sunny-days-ahead-graphic-short-sleeve-fleece-dress/-/A-1001731930",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-clue-into-kindness/-/A-1000753488",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-chase-the-rainbow/-/A-1000828585",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803233",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-slugger-pants-graphic-short-sleeve-fleece-dress/-/A-1001738960",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788636",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-colors-of-the-rainbow-graphic-short-sleeve-fleece-dress/-/A-1001738925",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-presents-graphic-short-sleeve-fleece-dress/-/A-1002352316",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-happy-holidays-wreath/-/A-1000841673",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-adventure-awaits-graphic-short-sleeve-fleece-dress/-/A-1001739133",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/captain-underpants-c-underpants-george-harold/-/A-1001646599",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-cupid-crew-graphic-short-sleeve-fleece-dress/-/A-1001598345",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815413",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-vibes/-/A-1001598524",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-psyduck-spiral-graphic-short-sleeve-fleece-dress/-/A-1002395584",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-chase-sky-hearts/-/A-1000833021",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-movie-logo/-/A-1000827164",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-kindergarten-out-of-this-world-graphic-short-sleeve-fleece-dress/-/A-1003971835",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pick-of-the-patch-graphic-short-sleeve-fleece-dress/-/A-1002376882",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-pawfect-pals/-/A-1000809332",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000794822",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-happy-trolloween-branch-and-cloud-guy/-/A-1000796958",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-believe-in-yourself-graphic-short-sleeve-fleece-dress/-/A-1002084564",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-trick-or-treat/-/A-1000761945",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791842",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1001985103",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790693",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781136",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-trainer-graphic-short-sleeve-fleece-dress/-/A-1002395811",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818149",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-mommy-is-my-sunshine-graphic-short-sleeve-fleece-dress/-/A-1001734983",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-postcard-graphic-short-sleeve-fleece-dress/-/A-1001974438",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-witch-pikachu-with-candy-graphic-short-sleeve-fleece-dress/-/A-1002355256",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791960",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820689",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-airbrush-arnold-graphic-short-sleeve-fleece-dress/-/A-1001730096",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-logo-retro-collage-graphic-short-sleeve-fleece-dress/-/A-1001984284",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-four-nations-graphic-short-sleeve-fleece-dress/-/A-1001733013",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-winter-fun-graphic-short-sleeve-fleece-dress/-/A-1002352283",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-hello-kindergarten-graphic-short-sleeve-fleece-dress/-/A-1003971343",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781140",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-patrick-candy-canes/-/A-1000790985",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-retro-rainbow-skater-graphic-short-sleeve-fleece-dress/-/A-1000796497",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-franken-sponge/-/A-1000850876",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-learn-alotl-in-1st-grade-graphic-short-sleeve-fleece-dress/-/A-1003972078",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-dinosaur-eatting-rainbow-graphic-short-sleeve-fleece-dress/-/A-1001728779",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-garfield-repeated/-/A-1000786068",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-dashing-through-the-snow/-/A-1000839966",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-only-here-for-the-eats-graphic-short-sleeve-fleece-dress/-/A-1000799017",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-wink-face-graphic-short-sleeve-fleece-dress/-/A-1002396823",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-lucky-dog-graphic-short-sleeve-fleece-dress/-/A-1001725454",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-girl-group-graphic-short-sleeve-fleece-dress/-/A-1003929039",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-i-don-t-do-perky/-/A-1000763457",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-toph-melon-lord/-/A-1000764224",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-present-patrol/-/A-1000781596",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-mine-mine-mine-graphic-short-sleeve-fleece-dress/-/A-1000796518",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-california-graphic-short-sleeve-fleece-dress/-/A-1001984983",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-faces-grid/-/A-1000857711",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-ask-me-if-i-care/-/A-1000764120",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795455",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-no-clue-why-i-m-out-of-bed-graphic-short-sleeve-fleece-dress/-/A-1001734945",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-feliz-navi-dog/-/A-1000841687",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-groovy-since-forever-graphic-short-sleeve-fleece-dress/-/A-1000796489",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803171",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-jasmine-dragon-tea-graphic-short-sleeve-fleece-dress/-/A-1001733237",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-vampire-snoopy-stars-graphic-short-sleeve-fleece-dress/-/A-1001726848",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-let-it-shine-graphic-short-sleeve-fleece-dress/-/A-1001735056",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-pups-at-play/-/A-1000809180",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-tacosaurus-graphic-short-sleeve-fleece-dress/-/A-1003972068",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-witch-way-to-the-candy/-/A-1000761810",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/karma-s-world-graffiti-art-graphic-short-sleeve-fleece-dress/-/A-1003971900",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790766",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-four-elements-square-graphic-short-sleeve-fleece-dress/-/A-1001733017",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-1st-grade-squad/-/A-1000785053",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-raphael-breaking-through-shirt/-/A-1000786798",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/karma-s-world-karma-art-graphic-short-sleeve-fleece-dress/-/A-1003971884",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-magical-gamer-girl-graphic-short-sleeve-fleece-dress/-/A-1003238271",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790646",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-four-elements-inverse-graphic-short-sleeve-fleece-dress/-/A-1001733025",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-not-today-graphic-short-sleeve-fleece-dress/-/A-1000796574",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-retro-gamer-graphic-short-sleeve-fleece-dress/-/A-1002396891",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795410",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-witch-way-to-the-costume-party-graphic-short-sleeve-fleece-dress/-/A-1000760537",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-feelin-fineapple/-/A-1000785060",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819024",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-preschool-graphic-short-sleeve-fleece-dress/-/A-1003971991",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-rad-little-lad-graphic-short-sleeve-fleece-dress/-/A-1001728927",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-meowth-mischevious-laugh-graphic-short-sleeve-fleece-dress/-/A-1002387153",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-select-your-turtle-video-game/-/A-1000838898",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791788",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-bulba-pattern-graphic-short-sleeve-fleece-dress/-/A-1002352234",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-kamp-koral-kamp-koral-badge/-/A-1000787485",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-graphic-short-sleeve-fleece-dress/-/A-1001735092",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
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
