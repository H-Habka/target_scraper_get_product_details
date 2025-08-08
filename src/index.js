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
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-square-neck-smocked-maxi-dress-sizes-4-14-16/-/A-1002436008",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/24seven-comfort-apparel-girls-pleated-cold-shoulder-girls-summer-dress/-/A-91675669",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/the-smurfs-smurfette-girls-tutu-tulle-dress-little-kid-to-big-kid/-/A-1003546579",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-little-girls-cosplay-tulle-tutu-dress-kid-to-big/-/A-92251700",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-vestito-pom-pom-dress/-/A-93825584",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-square-neck-smocked-maxi-dress/-/A-1002811039",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-gingham-check-dress-infant-to-big-kid/-/A-92182861",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-little-girls-square-neck-smocked-cami-maxi-dress-off-white-4/-/A-1003418142",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-square-neck-smocked-cami-maxi-dress-sizes-4-14-16/-/A-1003418136",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/cocomelon-little-girls-square-neck-cami-dress-coral-pink-5/-/A-1003633249",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-little-girls-mesh-tulle-dress-blue-7-8/-/A-90267249",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ola-otter-strap-dress-flamingo-forest/-/A-1003030008",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-flutter-sleeve-gauze-dress-cat-38-jack-8482-white/-/A-94472329",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-hooded-cosplay-short-sleeve-tutu-dress-red-white/-/A-91363801",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-strawberry-shortcake-dress-pink/-/A-88038742",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-smocked-dress-cat-38-jack-8482/-/A-94472324",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-cosplay-dress-navy-blue/-/A-89811185",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-disney-princess-roses-trio-dress/-/A-92381015",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-pok-mon-pikachu-cosplay-short-sleeve-tutu-dress-gold-black-yellow/-/A-91363501",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-stitch-hooded-character-dress-blue/-/A-93599961",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-sanrio-cinnamaroll-hooded-tulle-character-dress-with-ears-white/-/A-93599687",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/springtime-fairy-lace-and-stars-tiered-tutu-dress-mia-belle-girls/-/A-1003844486",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-toddler-little-and-big-girl-s-short-sleeve-casual-tulle-dresses/-/A-92170654",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/homeroom-ballerina-layered-tutu-dress-mia-belle-girls/-/A-1004909625",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/p-s-from-aeropostale-little-girl-s-2-piece-tulle-dresses-with-keychain/-/A-92752380",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-toddler-little-girl-s-princess-short-sleeve-casual-tulle-dresses/-/A-92395181",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "Tutu Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-tiered-wrap-dress-kids/-/A-85577862",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Wrap Dresses",
      filters: {
        type: "Wrap Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-tumble-shorts-all-in-motion-8482/-/A-93297590",
      tags: "Activewear, Athletic Bike Shorts, Girls’ Activewear, Athletic Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-soft-100-cotton-girls-long-bike-shorts/-/A-92746144",
      tags: "Activewear, Athletic Bike Shorts, Girls’ Activewear, Athletic Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-organic-cotton-soft-girls-bike-shorts/-/A-92357487",
      tags: "Activewear, Athletic Bike Shorts, Girls’ Activewear, Athletic Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/destira-compression-biker-short/-/A-92084924",
      tags: "Activewear, Athletic Bike Shorts, Girls’ Activewear, Athletic Shorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Bike Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-soft-stretch-jogger-pants-all-in-motion/-/A-94739703",
      tags: "Activewear, Athletic Jogger Pants, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-bluey-dreamy-fleece-sweatpants-aqua-blue/-/A-93447103",
      tags: "Activewear, Athletic Jogger Pants, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-moana-2-dreamy-fleece-athletic-jogger-pants-ivory/-/A-92237499",
      tags: "Activewear, Athletic Jogger Pants, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Jogger Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-flare-leggings-all-in-motion/-/A-91496582",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-pocket-leggings-all-in-motion/-/A-94471816",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-crossover-waistband-leggings-all-in-motion/-/A-94502461",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-jogger-leggings-all-in-motion/-/A-94739697",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-everyday-soft-leggings-all-in-motion/-/A-91349102",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-piped-leggings-all-in-motion/-/A-94739704",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-100-cotton-soft-girls-capri-leggings/-/A-91227917",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-100-cotton-solid-colored-leggings/-/A-90529881",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-organic-cotton-leggings/-/A-90842162",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-fleece-stretch-leggings/-/A-90790246",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-novelty-stretch-leggings/-/A-90567962",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-ruffle-leggings/-/A-90842436",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-girls-100-cotton-leggings-usa-made-soft-breathable-sensory-friendly-for-kids-toddlers-heather-grey/-/A-1001847747",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-stripe-leggings/-/A-91267609",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/reebok-girls-adventure-compression-athletic-pants/-/A-1004767006",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/reebok-girls-adventure-compression-athletic-pants/-/A-1004732941",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/reebok-girls-adventure-compression-athletic-pants/-/A-1004766516",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/reebok-girls-adventure-compression-athletic-pants/-/A-1004766870",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/reebok-girls-fleece-yoga-pants/-/A-1004737729",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Athletic Pants, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/reebok-girls-geo-reflective-athletic-leggings/-/A-1004737982",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-high-waisted-active-flare-leggings/-/A-88872406",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/destira-high-waisted-performance-leggings/-/A-1001540621",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/reebok-girls-core-compression-athletic-pants/-/A-1004737699",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Athletic Pants",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/reebok-girls-active-athletic-leggings/-/A-1004737705",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-active-legging-girls/-/A-84318447",
      tags: "Activewear, Athletic Leggings, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-active-comfort-jogger-pants-all-in-motion/-/A-94741236",
      tags: "Activewear, Athletic Pants, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-active-light-wide-leg-pants-all-in-motion/-/A-94741288",
      tags: "Activewear, Athletic Pants, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-modal-french-terry-flare-pants-all-in-motion/-/A-94471774",
      tags: "Activewear, Athletic Pants, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-woven-cargo-jogger-pants-all-in-motion/-/A-91184117",
      tags: "Activewear, Athletic Pants, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-cozy-lightweight-flare-pants-all-in-motion/-/A-93297432",
      tags: "Activewear, Athletic Pants, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-minnie-mouse-ditsy-floral-dreamy-fleece-sweatpants-ivory/-/A-93599962",
      tags: "Activewear, Athletic Pants, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/90-degree-by-reflex-girls-vintage-faux-cracked-leather-high-waist-legging/-/A-93560996",
      tags: "Activewear, Athletic Pants, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-pant-girls/-/A-84318432",
      tags: "Activewear, Athletic Pants, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-run-shorts-all-in-motion/-/A-89627332",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-woven-shorts-all-in-motion/-/A-85772101",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-gym-shorts-all-in-motion/-/A-81459139",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-bike-shorts-all-in-motion/-/A-94501346",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-crossover-waistband-shorts-all-in-motion-8482/-/A-94253687",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-flowy-shorts-all-in-motion-8482/-/A-93297434",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-woven-piped-shorts-all-in-motion/-/A-94729833",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-active-light-2-in-1-run-shorts-all-in-motion/-/A-93297149",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-soft-stretch-shorts-all-in-motion-8482/-/A-93297585",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-active-light-side-pleated-woven-shorts-all-in-motion/-/A-94501349",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-gymnastics-shorts-cat-jack-black/-/A-82391055",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-100-cotton-girls-soft-bike-shorts/-/A-91228083",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-printed-girls-novelty-bike-shorts/-/A-92159233",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-athletic-tennis-skirts-shorts-elastic-high-waisted-mesh-golf-sport-skorts-with-2-pockets-for-kids-4-13y/-/A-1003878692",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Athletic Skirts, Athletic Skorts, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts, Skirts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-messi-athletic-shorts-black/-/A-91616717",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/destira-compression-sport-short/-/A-92090054",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-aero-vent-padded-sliding-short/-/A-82226194",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/90-degree-by-reflex-girls-2pk-lightstreme-start-line-running-short/-/A-1002432898",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/destira-mystique-sport-short/-/A-92089203",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-vortex-v2-volleyball-short/-/A-90043782",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-mesh-gym-shorts/-/A-86739863",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/destira-girls-high-waisted-performance-short/-/A-93874694",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-boys-cut-low-rise-short-girls/-/A-83927632",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-fold-over-boyshort-girls/-/A-84644851",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-gusset-short-girls/-/A-84318205",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-high-waisted-short-girls/-/A-84318303",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-knit-boyshort-girls/-/A-87696565",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classics-boy-short-girls/-/A-84318151",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-girl-s-cloud-nine-sunburst-short-child/-/A-1003315611",
      tags: "Activewear, Athletic Shorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Shorts",
      filters: {
        type: "Athletic Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-dance-activewear-skirt-cat-jack-black/-/A-82390730",
      tags: "Activewear, Athletic Skirts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Athletic Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-dance-activewear-skirt-cat-jack-pink/-/A-82390729",
      tags: "Activewear, Athletic Skirts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Athletic Skirts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-women-s-future-star-pull-on-skirt/-/A-1003315387",
      tags: "Activewear, Athletic Skirts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Skirts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-girls-pull-on-skirt-girls/-/A-83927553",
      tags: "Activewear, Athletic Skirts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Skirts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-glitter-tutu-girls/-/A-84644795",
      tags: "Activewear, Athletic Skirts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Skirts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-skirt-with-built-in-short-girls/-/A-84644835",
      tags: "Activewear, Athletic Skirts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Athletic Skirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-piped-skort-all-in-motion/-/A-93297148",
      tags: "Activewear, Athletic Skorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Athletic Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-knit-skort-all-in-motion/-/A-94501348",
      tags: "Activewear, Athletic Skorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Athletic Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-active-light-pleated-skort-all-in-motion/-/A-94501355",
      tags: "Activewear, Athletic Skorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Athletic Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-flowy-woven-skort-all-in-motion-8482/-/A-94253690",
      tags: "Activewear, Athletic Skorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Athletic Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-airy-sleek-skort-all-in-motion/-/A-94756512",
      tags: "Activewear, Athletic Skorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Athletic Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-ruffle-skort-all-in-motion/-/A-94471817",
      tags: "Activewear, Athletic Skorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Athletic Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-airy-sleek-skort-all-in-motion/-/A-93297569",
      tags: "Activewear, Athletic Skorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Athletic Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-piped-skort-all-in-motion/-/A-94471815",
      tags: "Activewear, Athletic Skorts, Girls’ Activewear, Bottoms, Girls’ Clothing, Kids’ Clothing, Skirts",
      filters: {
        type: "Athletic Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-sandwash-1-2-zip-pullover-sweatshirt-all-in-motion/-/A-91270756",
      tags: "Activewear, Athletic Sweatshirts, Girls’ Activewear, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-active-comfort-full-zip-hooded-sweatshirt-all-in-motion/-/A-94739705",
      tags: "Activewear, Athletic Sweatshirts, Girls’ Activewear, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-cozy-knit-jacket-all-in-motion-8482/-/A-94579748",
      tags: "Activewear, Athletic Sweatshirts, Girls’ Activewear, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-modal-french-terry-crewneck-sweatshirt-all-in-motion/-/A-94741248",
      tags: "Activewear, Athletic Sweatshirts, Girls’ Activewear, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-challenger-hoodie/-/A-84755524",
      tags: "Activewear, Athletic Sweatshirts, Girls’ Activewear, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/vapor-apparel-youth-upf-50-uv-sun-protection-solar-hoodie/-/A-94216434",
      tags: "Activewear, Athletic Sweatshirts, Girls’ Activewear, Athletic T-Shirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-girl-s-c-est-la-vie-joyeux-mesh-cover-up-child/-/A-1003315333",
      tags: "Activewear, Athletic Sweatshirts, Girls’ Activewear, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Athletic Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-gym-t-shirt-all-in-motion/-/A-93071004",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-t-shirt-all-in-motion-8482-lilac-purple/-/A-94253688",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-you-got-this-graphic-t-shirt-all-in-motion-light-teal-green/-/A-93071012",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-t-shirt-all-in-motion/-/A-94369616",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-boxy-t-shirt-all-in-motion/-/A-93071009",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-seamless-crop-t-shirt-all-in-motion-8482/-/A-93070250",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-beyond-ease-crop-boxy-t-shirt-all-in-motion-8482/-/A-94621425",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-messi-silhouette-short-sleeve-graphic-t-shirt-pink/-/A-91616741",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-striped-jersey-pink/-/A-94431046",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-cinnamoroll-striped-jersey-blue-off-white/-/A-94431038",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-coordinating-jersey-green-off-white/-/A-94431042",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-messi-logo-short-sleeve-graphic-t-shirt-black/-/A-91616740",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-short-sleeve-attack-tee-3-0/-/A-92084988",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-long-sleeve-attack-tee/-/A-90043777",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-mizuno-nxt-long-sleeve-tee/-/A-87893079",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-mizuno-tee/-/A-79131609",
      tags: "Activewear, Athletic T-Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic T-Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-strappy-crop-tank-160-top-all-in-motion-8482/-/A-93297429",
      tags: "Activewear, Athletic Tank Tops, Girls’ Activewear",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-everyday-soft-bra-all-in-motion/-/A-91338686",
      tags: "Activewear, Athletic Tank Tops, Girls’ Activewear",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-twist-front-ribbed-t-shirt-all-in-motion/-/A-93297584",
      tags: "Activewear, Athletic Tank Tops, Girls’ Activewear",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-tank-top-all-in-motion/-/A-94471782",
      tags: "Activewear, Athletic Tank Tops, Girls’ Activewear",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-seamless-crop-tank-top-all-in-motion-8482/-/A-93070775",
      tags: "Activewear, Athletic Tank Tops, Girls’ Activewear",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-racerback-160-tank-top-all-in-motion-8482/-/A-94334698",
      tags: "Activewear, Athletic Tank Tops, Girls’ Activewear",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-muscle-tank-top-all-in-motion-8482/-/A-94369613",
      tags: "Activewear, Athletic Tank Tops, Girls’ Activewear",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-crop-tank-top-all-in-motion/-/A-93297151",
      tags: "Activewear, Athletic Tank Tops, Girls’ Activewear",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/destira-sport-tank/-/A-92088857",
      tags: "Activewear, Athletic Tank Tops, Girls’ Activewear",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-tank-top-with-racerback-girls/-/A-84642697",
      tags: "Activewear, Athletic Tank Tops, Girls’ Activewear",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classics-wrap-top-girls/-/A-83927906",
      tags: "Activewear, Athletic Tank Tops, Girls’ Activewear, Athletic Wrap Shirts",
      filters: {
        type: "Athletic Tank Tops",
      },
    },
    {
      url: "https://www.target.com/p/eg-pro-core-mesh-girl-s-reversible-lacrosse-practice-jersey/-/A-1002668120",
      tags: "Activewear, Athletic Vests, Girls’ Activewear",
      filters: {
        type: "Athletic Vests",
      },
    },
    {
      url: "https://www.target.com/p/girls-corduroy-tracksuit-sets-hoodie-tracksuits-girls-athletic-sets-2-piece-sport-outfits-hoodie-sweatshirts-with-bootcut-pants/-/A-1003854003",
      tags: "Activewear, Athletic Wear Sets, Girls’ Activewear, Track Suit Sets",
      filters: {
        type: "Athletic Wear Sets",
      },
    },
    {
      url: "https://www.target.com/p/capezio-women-s-wrap-sweater-girls/-/A-87696578",
      tags: "Activewear, Athletic Wrap Shirts, Girls’ Activewear",
      filters: {
        type: "Athletic Wrap Shirts",
      },
    },
    {
      url: "https://www.target.com/p/danskin-kids-ballet-dance-shoes/-/A-81490950",
      tags: "Activewear, Ballet Slippers, Girls’ Activewear, Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Slippers",
      },
    },
    {
      url: "https://www.target.com/p/capezio-daisy-ballet-shoe-child/-/A-84045557",
      tags: "Activewear, Ballet Slippers, Girls’ Activewear, Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Slippers",
      },
    },
    {
      url: "https://www.target.com/p/capezio-hanami-ballet-shoe-child/-/A-84045362",
      tags: "Activewear, Ballet Slippers, Girls’ Activewear, Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Slippers",
      },
    },
    {
      url: "https://www.target.com/p/capezio-women-s-future-star-ballet-shoe/-/A-1003315231",
      tags: "Activewear, Ballet Slippers, Girls’ Activewear, Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Slippers",
      },
    },
    {
      url: "https://www.target.com/p/capezio-future-star-ballet-shoe/-/A-93536976",
      tags: "Activewear, Ballet Slippers, Girls’ Activewear, Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Ballet Slippers",
      },
    },
    {
      url: "https://www.target.com/p/destira-catlandia-unitard/-/A-1001388020",
      tags: "Activewear, Biketards, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Biketards",
      },
    },
    {
      url: "https://www.target.com/p/just-love-girls-bras-pack-of-4-comfortable-and-stylish-training-bras-for-girls/-/A-1002778594",
      tags: "Activewear, Bralettes, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/just-love-girls-bras-pack-of-6/-/A-1002779097",
      tags: "Activewear, Bralettes, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Bralettes",
      },
    },
    {
      url: "https://www.target.com/p/capezio-foundations-brief-girls/-/A-84644752",
      tags: "Activewear, Briefs, Girls’ Activewear",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-brief-girls/-/A-83927917",
      tags: "Activewear, Briefs, Girls’ Activewear",
      filters: {
        type: "Briefs",
      },
    },
    {
      url: "https://www.target.com/p/girls-leotard-by-danz-n-motion-2465c-kennedy-ribbed-high-neck-classic/-/A-1002825437",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-cabriole-tank-leotard-wear-moi/-/A-1001401376",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-garcia-mesh-bodice-leotard-bloch/-/A-1001401303",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-sarabande-leotard-wear-moi/-/A-1001401196",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-concerto-camisole-leotard-wear-moi/-/A-1001401334",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-concerto-camisole-leotard-wear-moi/-/A-1001401337",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-pirouette-leotard-wear-moi/-/A-1001401371",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-pirouette-leotard-wear-moi/-/A-1001401311",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-concerto-camisole-leotard-wear-moi/-/A-1001401349",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-ladies-high-neck-halter-leotard-bodysuit-bloch/-/A-1002669068",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-ladies-maya-lace-print-tank-leotard-bodysuit-bloch/-/A-1002669060",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-ladies-adalia-camo-boat-neck-cap-sleeve-leotard-bloch/-/A-1002669045",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-ladies-boat-neck-mesh-back-leotard-bodysuit-bloch/-/A-1002669059",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-ladies-halter-leotard-bodysuit-bloch/-/A-1002669032",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-ladies-zip-tank-camo-leotard-bodysuit-bloch/-/A-1002669098",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/girl-ladies-mock-neck-halter-leotard-bodysuit-bloch/-/A-1002669067",
      tags: "Activewear, Child Bodysuits, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Child Bodysuits",
      },
    },
    {
      url: "https://www.target.com/p/danskin-girls-tap-dance-shoes-black/-/A-81490944",
      tags: "Activewear, Dance Shoes, Girls’ Activewear, Tap Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Dance Shoes",
      },
    },
    {
      url: "https://www.target.com/p/capezio-future-star-child-jazz-shoe/-/A-93537038",
      tags: "Activewear, Dance Shoes, Girls’ Activewear, Jazz Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Dance Shoes",
      },
    },
    {
      url: "https://www.target.com/p/capezio-shuffle-tap-shoe-child/-/A-84068261",
      tags: "Activewear, Dance Shoes, Girls’ Activewear, Tap Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Dance Shoes",
      },
    },
    {
      url: "https://www.target.com/p/capezio-future-star-tap-shoe/-/A-93536968",
      tags: "Activewear, Dance Shoes, Girls’ Activewear, Tap Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Dance Shoes",
      },
    },
    {
      url: "https://www.target.com/p/capezio-jr-tyette-tap-shoe-child/-/A-85145844",
      tags: "Activewear, Dance Shoes, Girls’ Activewear, Tap Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Dance Shoes",
      },
    },
    {
      url: "https://www.target.com/p/capezio-mary-jane-tap-shoe-child/-/A-88039677",
      tags: "Activewear, Dance Shoes, Girls’ Activewear, Tap Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Dance Shoes",
      },
    },
    {
      url: "https://www.target.com/p/capezio-jazz-glove-jazz-shoe-child/-/A-1003315133",
      tags: "Activewear, Dance Shoes, Girls’ Activewear, Jazz Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Dance Shoes",
      },
    },
    {
      url: "https://www.target.com/p/capezio-valentina-ballroom-shoe-girls/-/A-93437568",
      tags: "Activewear, Dance Shoes, Girls’ Activewear, Lyrical Dance Shoes, Girls’ Shoes, Kids’ Shoes, Shoes",
      filters: {
        type: "Dance Shoes",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-little-girls-fleece-faux-fur-jacket/-/A-92612793",
      tags: "Activewear, Faux Fur Jackets, Girls’ Activewear, Fleece Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Faux Fur Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girl-s-faux-shearling-jacket-fleece-warm-coat/-/A-90227505",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-midweight-fleece-transitional-jackets/-/A-93364215",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-reversible-fleece-jacket-puffer-coat/-/A-90227480",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Puffer Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-fleece-coat-faux-fur-puffer-jacket/-/A-90227384",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Puffer Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-little-girls-midweight-fleece-transitional-jackets/-/A-93364209",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-little-girls-midweight-ruffle-fleece-lined-jackets/-/A-93364212",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-midweight-fleece-lined-jackets/-/A-93802528",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-midweight-high-pile-fleece-lined-jackets/-/A-93420959",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Windbreakers, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-little-girls-midweight-fleece-lined-jackets/-/A-1003247118",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/london-fog-girls-lightweight-fleece-lined-hooded-spring-jacket/-/A-91243569",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-midweight-floral-fleece-lined-jacket-chambray-4/-/A-93127283",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-midweight-floral-fleece-lined-jacket-chambray-5-6/-/A-93127284",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-reversible-fleece-puffer-jacket/-/A-93877914",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Puffer Jackets, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-jacket-two-piece-mid-season-outerwear-set-butterflies-on-multicolored-and-vibrant-pink-background/-/A-1002931122",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-3-in-1-mid-season-outerwear-set-with-printed-jacket-mauve-and-blue-pink-mountain/-/A-1002930673",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-baby-girls-midweight-reversible-fleece-jackets/-/A-93676558",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-3-in-1-mid-season-outerwear-set-with-printed-jacket-lilac-and-multicolored-butterfly/-/A-1002908248",
      tags: "Activewear, Fleece Jackets, Girls’ Activewear, Rain Coats",
      filters: {
        type: "Fleece Jackets",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-pink-checker-faux-fleece-vest/-/A-93525413",
      tags: "Activewear, Fleece Vests, Girls’ Activewear",
      filters: {
        type: "Fleece Vests",
      },
    },
    {
      url: "https://www.target.com/p/capezio-pink-stripe-harmonie-12-striped-pamper-legwarmer-child-one-size/-/A-87479178",
      tags: "Activewear, Girls’ Activewear, Leg Warmers, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Leg Warmers",
      },
    },
    {
      url: "https://www.target.com/p/capezio-harmonie-12-pamper-legwarmer-child/-/A-87479181",
      tags: "Activewear, Girls’ Activewear, Leg Warmers, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Leg Warmers",
      },
    },
    {
      url: "https://www.target.com/p/capezio-18-legwarmer-girls/-/A-87519900",
      tags: "Activewear, Girls’ Activewear, Leg Warmers, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Leg Warmers",
      },
    },
    {
      url: "https://www.target.com/p/capezio-pink-toddler-legwarmer-one-size/-/A-93628232",
      tags: "Activewear, Girls’ Activewear, Leg Warmers, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Leg Warmers",
      },
    },
    {
      url: "https://www.target.com/p/girls-seamless-bike-leotard-all-in-motion/-/A-94501354",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girls-dancewear-tank-leotard-with-skirt-cat-jack-black/-/A-82384473",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girls-cami-dance-leotard-cat-jack-black/-/A-82391750",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girls-dancewear-cami-flutter-sleeve-leotard-with-skirt-cat-jack-pink/-/A-82391774",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girls-dance-tank-mesh-leotard-cat-jack-black/-/A-82390250",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/leveret-girls-short-sleeve-leotard/-/A-89453738",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girls-cami-dance-leotard-cat-jack-pink/-/A-82391252",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/leveret-girls-elbow-sleeve-skirt-leotard/-/A-89453935",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/leveret-girls-long-sleeve-leotard/-/A-89453529",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girls-dance-butterfly-leotard-cat-jack-purple/-/A-93574122",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girls-dance-brushstrokes-leotard-cat-jack/-/A-93574121",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-brigitte-21105c-corset-midriff/-/A-1003688170",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-alexis-21100c-mesh-inserts-camisole-low-back/-/A-1003321240",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-imagination-leotard/-/A-92078120",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-24129c-scout-mesh-inserts-many-colors/-/A-1004644011",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-malibu-leotard/-/A-92078179",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-glitter-and-glitz-lavender-leotard/-/A-92077834",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-in-the-clouds-leotard/-/A-92078335",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-dreamworld-leotard/-/A-92078222",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-tidal-wave-leotard/-/A-92078088",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-kinsley-22117a-zip-up-mesh-back-ribbed-accents/-/A-1004140683",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-catlandia-leotard/-/A-92035687",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-interstellar-leotard/-/A-92077817",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-friend-chip-goals-leotard/-/A-92078406",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-denim-daze-leotard/-/A-92077864",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-glimmer-of-gold-leotard/-/A-92084411",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-ever-after-leotard/-/A-92077122",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-nicolette-23107c-lace-cap-sleeve-and-v-back/-/A-1003763236",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-riley-22115c-rib-accents-and-keyhole-back/-/A-1003215038",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-clementine-23108c-tank-lace-inserts-and-v-back/-/A-1003128063",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girls-leotard-dress-danz-n-motion-293-madeline-sparkle-skirt-short-sleeve/-/A-1003526473",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-yasmin-23113c-cap-sleeve-lace-and-cross-back/-/A-1003127998",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-21110c-angelina-camisole-floral-mesh-inserts/-/A-1003698603",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-so-danca-tilly-sl17-lace-cap-sleeve/-/A-1003125324",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-209c-tank-cotton/-/A-1003057753",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-brooklyn-22123c-scuba-zip-with-mesh-back/-/A-1003624284",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-danz-n-motion-25119c-jessie-leotard-rib-tank-with-square-neckline/-/A-1004993634",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-by-danznmotion-25100c-micaela-leotard-glimmer-finish/-/A-1005179375",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-danz-n-motion-25117c-fallon-leotard-wide-neck-with-open-strapped-back/-/A-1004473418",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-by-so-danca-livy-sl09-lycra-tank/-/A-1003125377",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-danz-n-motion-25101c-bella-front-detailed-leotard-with-keyhole-back/-/A-1005179821",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-rainbow-blaze-leotard/-/A-1001731061",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-pinky-promise-leotard/-/A-1001718615",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-prismatic-leotard/-/A-92086769",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-hollywood-leotard/-/A-92033282",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-american-elite-leotard/-/A-92085236",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-boba-par-tea-leotard/-/A-1001718152",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-strawberry-fields-leotard/-/A-1001718197",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-decadence-leotard/-/A-1001738872",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-paw-risian-passport-leotard/-/A-92087108",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-fur-ever-french-leotard/-/A-92086808",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/dance-leotard-danz-n-motion-adelle-23112c-high-neck-empire-waist-open-back/-/A-1003238661",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-pixie-dust-leotard/-/A-1001739220",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-24132c-piper-keyhole-back-mesh-accents-ballet-jazz/-/A-1004444062",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-classic-dance-leotard/-/A-1001686889",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-fry-yay-leotard/-/A-92086755",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-lotl-fun-leotard/-/A-92089013",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-outside-the-box-leotard/-/A-1001402851",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/destira-sky-s-the-limit-leotard/-/A-92076885",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classics-short-sleeve-leotard-girls/-/A-83784816",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-tank-leotard-girls/-/A-83848701",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classics-double-strap-camisole-leotard-girls/-/A-83915673",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classics-high-neck-tank-leotard-girls/-/A-83825120",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-short-sleeve-leotard-girls/-/A-83848140",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-long-sleeve-unitard-girls/-/A-84318308",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classics-princess-tank-leotard-girls/-/A-83915854",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classics-v-neck-camisole-leotard-girls/-/A-83915657",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-long-sleeve-leotard-girls/-/A-83825123",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classics-princess-camisole-leotard-girls/-/A-83915660",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classics-camisole-leotard-w-adjustable-straps-girls/-/A-83770409",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classics-long-sleeve-leotard-girls/-/A-83848129",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-women-s-future-star-tank-leotard/-/A-1003319607",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-women-s-future-star-short-sleeve-leotard/-/A-1003319628",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-camisole-leotard-w-adjustable-straps-girls/-/A-84318198",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-puff-sleeve-keyhole-back-leotard-girls/-/A-83915667",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-plunge-neck-mesh-midriff-leotard-girls/-/A-84642563",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-girl-s-c-est-la-vie-j-adore-leotard-child/-/A-1003315455",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-girl-s-c-est-la-vie-la-belle-leotard-child/-/A-1003315377",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-camisole-leotard-w-clear-transition-straps-girls/-/A-84636974",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-long-sleeve-turtleneck-leotard-w-snaps-girls/-/A-84318356",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-girl-s-c-est-la-vie-jolie-leotard-child/-/A-1003315643",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-girl-s-c-est-la-vie-fleur-leotard-child/-/A-1003315633",
      tags: "Activewear, Girls’ Activewear, Leotards, Leotards and Bodysuits",
      filters: {
        type: "Leotards",
      },
    },
    {
      url: "https://www.target.com/p/capezio-deep-neck-clear-back-bra-girls/-/A-84637030",
      tags: "Activewear, Girls’ Activewear, Plunge Bras",
      filters: {
        type: "Plunge Bras",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-cozy-lightweight-crewneck-sweatshirt-all-in-motion-8482/-/A-93070922",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-oversized-fleece-hoodie-sweatshirt-art-class/-/A-94430428",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-relaxed-fit-french-terry-pullover-shirt-cat-38-jack-8482/-/A-94802021",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-fleece-hoodie-art-class/-/A-93441893",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-fleece-crew-neck-pullover-sweatshirt-art-class/-/A-94350684",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-french-terry-oversized-pullover-sweatshirt-art-class/-/A-94599976",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-4th-of-july-fleece-crew-neck-pullover-sweatshirt-art-class/-/A-94819686",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-halloween-pullover-sweatshirt-cat-38-jack-8482-black/-/A-94600610",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-pullover-crew-fleece-sweatshirt-cat-38-jack-8482-heather-gray/-/A-94486505",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-squishmallows-dreamy-fleece-pullover-sweatshirt-pink/-/A-91363897",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-the-nightmare-before-christmas-jack-38-sally-dreamy-fleece-pullover-sweatshirt-gray/-/A-91363885",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-cherry-oversized-hooded-fleece-sweatshirt-red/-/A-94653594",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-smileyworld-adventure-oversized-hooded-fleece-sweatshirt/-/A-94653598",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-rolling-stones-graphic-sweatshirt-navy-blue/-/A-94269019",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-lilo-stitch-oversized-sweatshirt-oatmeal/-/A-94431065",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/converse-girls-pullover-sweatshirt-french-terry-hoodie/-/A-94687301",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/converse-girls-pullover-sweatshirt-hoodie/-/A-94687305",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/converse-girls-french-terry-quarter-zip-sweatshirt/-/A-94687318",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-colorblock-dreamy-fleece-sweatshirt-aqua-blue/-/A-93529417",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-bows-dreamy-fleece-crewneck-sweatshirt-green/-/A-93599699",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-moana-2-dreamy-fleece-sweatshirt-ivory/-/A-92237494",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-def-leppard-oversized-fleece-crewneck-sweatshirt-light-purple/-/A-93069449",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-pokemon-floral-eevee-elevated-1-4-zip-sweatshirt-white-lime-green/-/A-93599960",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-olivia-rodrigo-oversized-fleece-crew-neck-sweatshirt-gray/-/A-93069450",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-minnie-mouse-ditsy-floral-dreamy-fleece-sweatshirt-ivory/-/A-93599964",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-faux-shearling-pullover-sweatshirt-coral-pink-light-blue-ivory/-/A-92253715",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-french-terry-crossover-hoodie-toddler-to-big-kid/-/A-88301140",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-l-o-l-surprise-faux-shearling-sweatshirt-yellow/-/A-86900639",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-french-terry-pullover-crossover-hoodie/-/A-1004629236",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-half-zip-woobie-sweatshirt-little-kid-to-big-kid/-/A-1000177526",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-fleece-pullover-fur-sweatshirt-little-kid-to-big-kid/-/A-94124599",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-90042351",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/universal-studios-wicked-fleece-drop-shoulder-pullover-hoodie-sizes-2t-14-16/-/A-1001731876",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-and-friends-fleece-hoodie-sizes-2t-14-16/-/A-1001012097",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-minnie-mouse-princess-moana-nightmare-before-christmas-toy-story-lion-king-lilo-stitch-girls-pullover-sweatshirt-little-kid-to-big/-/A-87483678",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-fleece-cosplay-pullover-hoodie-sizes-2t-14-16/-/A-1000402971",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-90042648",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-mercat-cakey-cat-girls-french-terry-sweatshirt-toddler-to-big-kid/-/A-91109237",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bluey-bingo-sweatshirt-infant-to-big-kid/-/A-89790021",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-girls-fleece-half-zip-hoodie-little-kid-to-big-kid/-/A-88196088",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-cat-noir-girls-fleece-hoodie-little-kid-to-big-kid/-/A-87244269",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/care-bears-girls-half-zip-drop-shoulder-woobie-sweatshirt-little-kid-to-big-kid/-/A-93859692",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bluey-bingo-girls-fleece-fur-sweatshirt-toddler-to-big-kid/-/A-90042450",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-fleece-pullover-hoodie-little-kid-to-big/-/A-1004296075",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-goofy-donald-duck-daisy-girls-pullover-hoodie-little-kid-to-big/-/A-85075290",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hasbro-furby-cosplay-pullover-hoodie-cozy-faux-shearling/-/A-1002541411",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/tasty-peach-studios-peachy-cafe-youth-girl-tofu-hoodie-with-ears/-/A-1002894406",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/tirrinia-kids-blanket-hoodie-sweatshirt-oversized-wearable-blanket-hooded-faux-shearling-lined-blanket-gift-for-kids-teens-youth/-/A-1000028623",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-girls-fleece-pullover-hoodie-little-kid/-/A-85039601",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-french-terry-oversized-drop-shoulder-sweatshirt-little-kid-to-big/-/A-92749512",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/unicorn-girl-s-cradle-pink-long-sleeve-cosplay-zip-up-hoodie/-/A-94162496",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-abby-cadabby-girls-sweatshirt-toddler/-/A-87483781",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/reebok-girls-cowl-neck-yoga-sweatshirt/-/A-1004736239",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-cakey-cat-mercat-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-90116554",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-mickey-mouse-fashion-crewneck-sweatshirt-collegiate-athletic-crewneck-sweatshirt-mickey-minnie-sweatshirt/-/A-1004522267",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/coraline-girls-black-long-sleeve-hooded-sweatshirt/-/A-1004432757",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lanky-box-boxy-foxy-front-back-graphics-girl-s-cradle-pink-long-sleeve-hooded-sweatshirt/-/A-94199507",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-that-girl-lay-lay-princess-slaya-hoodie-gray/-/A-86963405",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-encanto-mirabel-girls-hoodie-toddler-to-big-kid/-/A-87289635",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-encanto-minnie-mouse-stitch-isabela-mirabel-girls-fleece-fur-sweatshirt-little-kid-to-big-kid/-/A-88223178",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-girls-french-terry-oversized-matching-family-sweatshirt-little-kid-to-adult/-/A-1000320519",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-doc-mcstuffins-girls-sweatshirt-little-kid/-/A-88225749",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-abby-cadabby-girls-sweatshirt-little-kid/-/A-87483790",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-mickey-mouse-fashion-crewneck-sweatshirt-collegiate-athletic-crewneck-sweatshirt-mickey-minnie-sweatshirt/-/A-1004522261",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-girls-minnie-mouse-chasing-sunshine-cropped-crewneck-sweatshirt/-/A-92276495",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-birthday-girl-checkered-youth-ultra-soft-graphic-sweatshirt/-/A-93879160",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-girls-fleece-oversized-drop-shoulder-sweatshirt-little-kid-to-big-kid/-/A-93743475",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/eg-pro-youth-girls-sweatshirt-ecosmart-crewneck/-/A-1005052937",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-queen-bee-diva-girls-fleece-pullover-hoodie-little-kid-to-big-kid/-/A-87079638",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-shrek-french-terry-zip-up-cosplay-hoodie/-/A-1004611408",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-lion-king-nala-simba-fleece-hoodie-pink/-/A-87526868",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-girls-french-terry-sweatshirt-little-kid-to-big-kid/-/A-89160642",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-chase-skye-everest-girls-pullover-sweatshirt/-/A-87483765",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-girls-french-terry-pullover-sweatshirt-little-kid-to-big-kid/-/A-88164913",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-encanto-mirabel-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-88178327",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girl-toddlers-cow-smiley-face-crewneck-sweatshirt-oat-collective/-/A-1001355091",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-jumping-youth-girl-s-athletic-heather-long-sleeve-hooded-sweatshirt/-/A-1002655675",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-queen-elsa-big-girls-fleece-pullover-sweatshirt-tie-dye-14-16/-/A-87246454",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/cry-babies-magic-tears-girls-child-pocket-sweatshirt-hoodie-pullover-pink/-/A-1000487795",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-rainbow-dash-girls-french-terry-pullover-crossover-hoodie-toddler-to-big-kid/-/A-88296673",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-fleece-cosplay-pullover-hoodie-toddler-sizes-2t-14-16/-/A-1000402973",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/peppa-pig-girls-french-terry-sweatshirt-toddler-to-little-kid/-/A-89844265",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ufc-girls-script-pullover-hoodie-sweatshirt-red-m/-/A-1004765946",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/tasty-peach-witch-frog-brewing-potion-youth-girl-s-black-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-1001810596",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/champion-girls-1-4-zip-fleece-pullover-sweatshirt/-/A-94609783",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-sweatshirt-old-pink-and-flowers/-/A-1003010777",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ufc-girls-roaring-glory-sweatshirt/-/A-1004764791",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/touch-girls-miami-dolphins-ruffled-hoodie-sweatshirt/-/A-1004302920",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/g-iii-sports-girls-cleveland-cavaliers-hoodie-sweatshirt/-/A-1004146001",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/g-iii-sports-girls-michigan-state-spartans-hoodie-sweatshirt/-/A-1004142906",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-cartoon-unicorn-patches-pattern-cotton-shirt/-/A-1003768536",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-unicorn-floral-pattern-mesh-patchwork-design-hoodie/-/A-1003709158",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/spellbound-elian-oracles-magic-is-everywhere-youth-girl-s-royal-blue-long-sleeve-hooded-sweatshirt/-/A-1004162260",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-sequin-patch-style-long-sleeve-top-southern-grace/-/A-1000916451",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-cheerful-on-sparkly-glitter-sweatshirt-southern-grace/-/A-1000916025",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-sweatshirt-off-white-and-koala/-/A-1003010786",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girl-kids-winter-animals-sweatshirt-happy-prince/-/A-1001401465",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/montauk-pullover-sweatshirt-art-class-blue/-/A-94257250",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-long-sleeve-boho-solid-color-sweatshirt/-/A-89567038",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-long-sleeve-classic-solid-color-sweatshirt/-/A-89567170",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-target-matching-family-sweatshirt-wondershop-red/-/A-92295978",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-smiley-face-outline-youth-ultra-soft-graphic-sweatshirt-l-black/-/A-1002349832",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-christmas-collage-youth-ultra-soft-graphic-sweatshirt/-/A-93349830",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-valentine-rainbow-youth-ultra-soft-graphic-sweatshirt/-/A-1000945283",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-crew-sweatshirt/-/A-86908833",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-candy-cane-cutie-stars-youth-ultra-soft-graphic-sweatshirt/-/A-93302610",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-thin-bow-youth-ultra-soft-graphic-sweatshirt/-/A-1002350205",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-knit-crewneck-sweatshirt/-/A-1001905412",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-christmas-girly-youth-ultra-soft-graphic-sweatshirt/-/A-93349834",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-little-miss-valentine-skateboard-youth-ultra-soft-graphic-sweatshirt/-/A-1000551699",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-active-zip-up-hoodie/-/A-1002931365",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-hooded-pullover-sweatshirt/-/A-86908862",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-valentine-kittens-youth-graphic-hoodie/-/A-1001647253",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-thin-bow-youth-graphic-hoodie/-/A-1002349978",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-pickleball-love-youth-ultra-soft-graphic-sweatshirt/-/A-1002604403",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-fleece-pullover-hoodie/-/A-87678275",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-youth-hoodie-xl-black/-/A-1003380822",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-youth-hoodie-s-black/-/A-1003380817",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-youth-hoodie-m-black/-/A-1003380819",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-youth-hoodie-l-black/-/A-1003380821",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-youth-hoodie-xs-black/-/A-1003380811",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-hippy-flower-valentine-youth-ultra-soft-graphic-sweatshirt/-/A-1001026688",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smiley-flowers-with-sunglasses-youth-ultra-soft-graphic-sweatshirt/-/A-1002532982",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-holly-leaves-coquette-youth-ultra-soft-graphic-sweatshirt/-/A-93717314",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-santa-chart-youth-ultra-soft-graphic-sweatshirt/-/A-93349857",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-sweetheart-puff-print-youth-ultra-soft-graphic-sweatshirt/-/A-1001026829",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-14th-feb-stars-puff-print-youth-graphic-hoodie/-/A-1001552029",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-be-mine-bubble-youth-ultra-soft-graphic-sweatshirt/-/A-1001026729",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-st-nick-s-tree-farm-youth-ultra-soft-graphic-sweatshirt/-/A-93349882",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-butterfly-pattern-soft-cotton-autumn-hoodie/-/A-1003355023",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-fall-pumpkin-chart-youth-ultra-soft-graphic-sweatshirt/-/A-93302578",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-love-gnomes-youth-graphic-hoodie/-/A-1001743223",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-14th-feb-stars-puff-print-youth-ultra-soft-graphic-sweatshirt/-/A-1000042986",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-husky-fleece-hooded-sweatshirt/-/A-1003408699",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-candy-monster-horns-glitter-youth-ultra-soft-graphic-sweatshirt/-/A-93404609",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-peace-love-cupid-youth-graphic-hoodie/-/A-1001743200",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-so-franken-cute-glitter-youth-ultra-soft-graphic-sweatshirt/-/A-93404311",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mizuno-youth-recover-hoodie/-/A-1002768625",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-ship-anchor-youth-graphic-hoodie/-/A-1002313549",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-valentine-s-gnomes-youth-graphic-hoodie/-/A-1001743183",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-little-miss-valentine-youth-graphic-hoodie/-/A-1001552090",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-fries-before-guys-bold-youth-graphic-hoodie/-/A-1001743317",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-hearts-youth-graphic-hoodie/-/A-1001552041",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-little-miss-lucky-charm-youth-ultra-soft-graphic-sweatshirt/-/A-1001890582",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-hearts-youth-ultra-soft-graphic-sweatshirt/-/A-1001259216",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-nautical-collage-youth-ultra-soft-graphic-sweatshirt/-/A-1002313501",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-tis-the-season-scarecrow-youth-ultra-soft-graphic-sweatshirt/-/A-93302580",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-love-flower-youth-graphic-hoodie/-/A-1001743159",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-hippy-flower-valentine-youth-graphic-hoodie/-/A-1001551937",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-candy-heart-smile-solid-youth-graphic-hoodie/-/A-1001552172",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-clover-checkered-youth-ultra-soft-graphic-sweatshirt/-/A-1002532863",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-little-miss-valentine-skateboard-youth-graphic-hoodie/-/A-1001551934",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-americana-summer-crewneck-sweatshirt-cat-jack-blue/-/A-94406151",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-french-terry-sweatshirt-cat-jack/-/A-92994156",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-fleece-pullover-sweatshirt-cat-jack/-/A-94486326",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-39-adaptive-halloween-pullover-sweatshirt-cat-38-jack-8482-black/-/A-94600629",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/baby-american-summer-fleece-sweatshirt-cat-38-jack-8482-blue/-/A-94472231",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/baby-usa-fleece-sweatshirt-cat-38-jack-8482-white/-/A-94472245",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/toddlers-39-adaptive-pullover-crew-neck-fleece-sweatshirt-cat-38-jack-8482-heather-gray/-/A-94486502",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/grayson-mini-toddler-girls-leopard-printed-french-terry-crew-sweatshirt/-/A-94473939",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-disney-minnie-mouse-daisy-duck-fleece-sweatshirt-heather-gray/-/A-94609713",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-disney-minnie-mouse-bow-pullover-heather-gray/-/A-94618298",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/grayson-mini-toddler-girls-paris-french-terry-crew-sweatshirt-red/-/A-94473940",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-hello-kitty-bow-fleece-sweatshirt-cream/-/A-94618290",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/grayson-mini-toddler-girls-amour-french-terry-sweatshirt-red/-/A-92986937",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/grayson-mini-toddler-girls-ciao-french-terry-sweatshirt-yellow/-/A-92986928",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/grayson-mini-toddler-girls-french-terry-sweatshirt-cream/-/A-94651505",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-girls-fleece-half-zip-hoodie-toddler/-/A-88196087",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-half-zip-woobie-sweatshirt-toddler/-/A-1000177529",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/grayson-mini-toddler-girls-french-terry-sweatshirt-brown/-/A-94651498",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-chase-skye-everest-girls-pullover-sweatshirt/-/A-87483764",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-90042643",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-90042356",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bluey-bingo-girls-fleece-fur-sweatshirt-toddler-to-big-kid/-/A-90042458",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-french-terry-pullover-crossover-hoodie-toddler/-/A-1004629233",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-girls-french-terry-oversized-matching-family-sweatshirt-toddler/-/A-1000320402",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-girls-fleece-pullover-hoodie-toddler/-/A-85039595",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-doc-mcstuffins-girls-sweatshirt-toddler/-/A-88225752",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-and-friends-girls-fleece-hoodie-toddler-sizes-2t-14-16/-/A-1001012106",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-mercat-cakey-cat-girls-french-terry-sweatshirt-toddler-to-big-kid/-/A-91109233",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/peppa-pig-girls-french-terry-sweatshirt-toddler-to-little-kid/-/A-89844270",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-goofy-donald-duck-daisy-baby-girls-pullover-hoodie-infant/-/A-85075289",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bluey-girls-fleece-hoodie-toddler/-/A-90498659",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/levi-s-toddler-girls-ruffle-crewneck-sweatshirt-heather-gray/-/A-83350151",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bluey-bingo-sweatshirt-infant-to-big-kid/-/A-87266311",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-goofy-donald-duck-daisy-girls-pullover-hoodie-toddler/-/A-85075291",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-cakey-cat-mercat-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-90116568",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-encanto-mirabel-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-88178325",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-minnie-mouse-princess-moana-nightmare-before-christmas-toy-story-lion-king-mickey-lilo-stitch-girls-pullover-sweatshirt-toddler/-/A-87483705",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-encanto-minnie-mouse-stitch-isabela-mirabel-girls-fleece-fur-sweatshirt-toddler/-/A-88223189",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-birthday-girl-checkered-toddler-graphic-sweatshirt/-/A-93879173",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girl-liberty-sweatshirt-set-petit-confection/-/A-1001376650",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-girl-halloween-bow-charts-toddler-graphic-sweatshirt/-/A-92629617",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-minnie-mouse-princess-moana-nightmare-before-christmas-toy-story-lion-king-mickey-lilo-stitch-r-baby-girls-pullover-sweatshirt-infant/-/A-87483662",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-shrek-girls-french-terry-zip-up-cosplay-hoodie-toddler/-/A-1004611403",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hasbro-furby-girls-cosplay-pullover-hoodie-cozy-faux-shearling-toddler/-/A-1002541409",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-christmas-collage-toddler-graphic-sweatshirt/-/A-93349970",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smiley-clover-daisy-toddler-graphic-hoodie/-/A-1002532814",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-candy-cane-cutie-stars-toddler-graphic-sweatshirt/-/A-93207482",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-big-sis-distressed-toddler-graphic-sweatshirt/-/A-91813126",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-christmas-girly-toddler-graphic-sweatshirt/-/A-93349949",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-thin-bow-toddler-graphic-hoodie/-/A-1002350027",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-nautical-collage-toddler-graphic-hoodie/-/A-1002313387",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-thin-bow-toddler-graphic-sweatshirt/-/A-1002350264",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-one-groovy-chick-toddler-graphic-sweatshirt/-/A-91395736",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smiley-flowers-with-sunglasses-toddler-graphic-sweatshirt/-/A-1002532987",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-wicked-cute-pumpkin-toddler-graphic-sweatshirt/-/A-93019700",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-big-sis-club-toddler-graphic-sweatshirt/-/A-91813212",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-fall-darlin-toddler-graphic-sweatshirt/-/A-92725952",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-valentine-kittens-toddler-graphic-sweatshirt/-/A-1001646934",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-juniper-hooded-sweatshirt-juniper-0-3-months/-/A-87969770",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hippity-hoppity-stacked-toddler-hoodie-2t-pink/-/A-1003380113",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hippity-hoppity-stacked-toddler-hoodie-4t-pink/-/A-1003380116",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hippity-hoppity-stacked-toddler-hoodie-2t-natural/-/A-1003380090",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hippity-hoppity-stacked-toddler-hoodie-2t-white/-/A-1003380103",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-clover-checkered-toddler-graphic-hoodie/-/A-1002542228",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hippity-hoppity-stacked-toddler-hoodie-4t-white/-/A-1003380106",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hippity-hoppity-stacked-toddler-hoodie-4t-natural/-/A-1003380096",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-valentine-kittens-toddler-graphic-hoodie/-/A-1001646976",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-let-s-par-tee-coquette-toddler-graphic-hoodie/-/A-1002444234",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-let-s-par-tee-coquette-toddler-graphic-sweatshirt/-/A-1002444276",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-embroidered-be-kind-turning-smiles-toddler-hoodie/-/A-1004526738",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-embroidered-be-kind-turning-smiles-toddler-hoodie/-/A-1004526743",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-smiley-face-outline-toddler-hoodie/-/A-1004526731",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-candy-monster-horns-glitter-toddler-graphic-sweatshirt/-/A-93404303",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-little-miss-lucky-charm-toddler-graphic-sweatshirt/-/A-1001890491",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-holly-leaves-coquette-toddler-graphic-sweatshirt/-/A-93717249",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-tis-the-season-scarecrow-toddler-graphic-sweatshirt/-/A-93174298",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-nautical-collage-toddler-graphic-sweatshirt/-/A-1002313609",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-howdy-chick-toddler-graphic-sweatshirt/-/A-91333369",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-hey-ghoul-hey-colorful-toddler-graphic-sweatshirt/-/A-93019595",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-vibes-cartoon-rainbow-toddler-graphic-sweatshirt/-/A-1002533021",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-cutest-pumpkin-leopard-print-toddler-graphic-sweatshirt/-/A-92604540",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-smiley-disco-toddler-graphic-sweatshirt/-/A-1002532936",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-witch-farm-truck-toddler-graphic-sweatshirt/-/A-93032693",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-fall-pumpkin-chart-toddler-graphic-sweatshirt/-/A-93174272",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-little-miss-lucky-charm-toddler-graphic-hoodie/-/A-1001890776",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-clover-checkered-toddler-graphic-sweatshirt/-/A-1002532857",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-hedwig-owl-slytherin-hufflepuff-ravenclaw-girls-french-terry-pullover-hoodie-toddler-to-big-kid/-/A-88222115",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-baby-yoda-sweatshirt-pink/-/A-87482870",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-ghost-spider-girls-pullover-hoodie-little-kid/-/A-85036701",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-girls-hoodie-toddler-to-big-kid/-/A-89032073",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-little-girls-stronger-than-you-think-baby-grogu-sweatshirt/-/A-92911551",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-girls-hoodie-toddler-to-big-kid/-/A-89032070",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-baby-yoda-sweatshirt-pink/-/A-87482866",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-baby-yoda-sweatshirt-pink/-/A-87482862",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-ghost-spider-girls-pullover-hoodie-toddler/-/A-85036704",
      tags: "Activewear, Girls’ Activewear, Pullover Sweatshirts",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-racerback-bra-top-girls/-/A-84318456",
      tags: "Activewear, Girls’ Activewear, Racerback Bras, Sports Bras",
      filters: {
        type: "Racerback Bras",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-camisole-bra-top-girls/-/A-83775199",
      tags: "Activewear, Girls’ Activewear, Scoop Neck Bras",
      filters: {
        type: "Scoop Neck Bras",
      },
    },
    {
      url: "https://www.target.com/p/girls-racerback-sports-bra-all-in-motion/-/A-94088528",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-seamless-t-back-sports-bra-art-class-8482/-/A-90781600",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/girls-2pk-sports-bra-cat-jack-white-black/-/A-92878056",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-sports-bra-cat-38-jack-8482/-/A-91235192",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-39-hearts-39-printed-sports-bra-cat-38-jack-8482-peach-orange/-/A-93278211",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-sports-bra-cat-38-jack-8482-denim-blue-wash/-/A-94328446",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/maidenform-girls-39-ribbed-sports-bra/-/A-89690531",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-cotton-sports-bra-6-pack/-/A-85561148",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/maidenform-girls-39-spacer-sports-bra/-/A-93666789",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-stay-dry-racerback-sports-bra-2-pack/-/A-89032517",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-spaghetti-strap-sports-bra-3-pack-bittersweet-pink-heather-grey-white-32/-/A-88049749",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-seamless-racerback-sports-bra-2-pack/-/A-89550890",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-criss-cross-crop-top/-/A-1002526598",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-fearless-seamless-crop-top/-/A-1001541856",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-harmony-sports-bra/-/A-1001647465",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-vitality-bandeau-top/-/A-1001664919",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-ignite-crop-top/-/A-1002512635",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-ava-sports-bra/-/A-1001540613",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-v-neck-crop-top/-/A-1002515611",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-level-up-sports-bra/-/A-1001687546",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-daydream-crop-top/-/A-1001623560",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/dragonwing-vitality-strappy-crop-top/-/A-1001687161",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-ladder-back-bratop-girls/-/A-84318270",
      tags: "Activewear, Girls’ Activewear, Sports Bras",
      filters: {
        type: "Sports Bras",
      },
    },
    {
      url: "https://www.target.com/p/leveret-girls-boho-solid-color-cable-knit-tights/-/A-89602869",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/leveret-girls-classic-solid-color-cable-knit-tights/-/A-89603054",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/leveret-girls-tights/-/A-89598792",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/leveret-girls-neutral-solid-color-cable-knit-tights/-/A-89603135",
      tags: "Activewear, Girls’ Activewear, Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/memoi-girls-lace-up-bow-opaque-tights/-/A-93668029",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classic-footed-tight-child/-/A-84003735",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-ultra-soft-transition-tight-with-back-seam-girls/-/A-86530896",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-ultra-hold-stirrup-tight-child/-/A-87219834",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-professional-fishnet-seamless-tight-girls/-/A-86530923",
      tags: "Activewear, Girls’ Activewear, Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-ultra-shimmery-footed-tight-child/-/A-92422301",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-ultra-hold-footless-tight-child/-/A-87219866",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-ultra-hold-footed-tight-child/-/A-87219857",
      tags: "Activewear, Girls’ Activewear, Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-classic-fishnet-tight-with-seam-child/-/A-86530953",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-ultra-soft-convertible-body-tight-girls/-/A-86530861",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-ultra-soft-hip-rider-capri-tight-girls/-/A-86530900",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-women-s-classic-fishnet-seamless-tight-child/-/A-86530945",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-ultra-soft-stirrup-body-tight-girls/-/A-86530888",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-girl-s-professional-glitter-tight-child/-/A-1003315790",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-professional-mesh-transition-tight-w-seams-girls/-/A-87219791",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-girl-s-all-over-rhinestone-tight-child/-/A-1003315842",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-professional-rhinestone-fishnet-tight-child/-/A-1000523897",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-ballet-pink-mesh-transition-tight-with-mock-seam-girls-one-size/-/A-86530815",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-ultra-soft-self-knit-waistband-transition-tight-girls-toddler/-/A-84003822",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-ultra-soft-footed-tight-girls-toddler/-/A-84003746",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-footless-tight-w-self-knit-waist-band-girls-toddler/-/A-84003992",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Hosiery Leggings, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/capezio-ultra-soft-transition-tight-girls-toddler/-/A-84003641",
      tags: "Activewear, Girls’ Activewear, Tights, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      filters: {
        type: "Tights",
      },
    },
    {
      url: "https://www.target.com/p/girls-solid-windbreaker-jacket-all-in-motion/-/A-94457648",
      tags: "Activewear, Girls’ Activewear, Windbreakers, Coats & Jackets, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-zip-up-fleece-hooded-sweatshirt-cat-38-jack-8482/-/A-94482984",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-relaxed-fit-french-terry-zip-up-hooded-sweatshirt-cat-38-jack-8482/-/A-94576209",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-french-terry-quarter-zip-pullover-sweatshirt-cat-38-jack-8482/-/A-94576212",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hearts-french-terry-zip-up-hoodie-cat-38-jack-8482/-/A-93300713",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-zip-up-halloween-cat-fleece-hoodie-sweatshirt-cat-38-jack-8482-cream/-/A-94482967",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-zip-up-halloween-spider-fleece-hoodie-sweatshirt-cat-38-jack-8482-light-olive-green/-/A-94482969",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-zip-up-fleece-hoodie-sweatshirt-cat-38-jack-8482-pink-rose/-/A-94486506",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-38-friends-cream-zip-up-hooded-sweatshirt-0ff-white/-/A-94431040",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-zip-up-hooded-sweatshirt-green/-/A-94431044",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-waves-for-days-graphic-terry-hooded-sweatshirt-yellow/-/A-94431069",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-stitch-hawaii-elevated-1-4-zip-sweatshirt-blue/-/A-93758581",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-38-friends-elevated-1-4-zip-sweatshirt-heather-gray/-/A-93599689",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-french-terry-zip-up-cosplay-hoodie-little-kid-to-big-kid/-/A-90042344",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-cozy-faux-sherling-zip-up-cosplay-hoodie-little-kid-to-big-kid/-/A-1000866280",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-girls-zip-up-hoodie-little-kid-to-big-kid/-/A-85562331",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-velour-matching-family-zip-up-hoodie-little-kid-to-adult/-/A-93183873",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-princess-moana-cindrella-ariel-belle-zip-up-hoodie-little-kid-to-big-kid/-/A-87217525",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/peppa-pig-girls-fleece-zip-up-hoodie-toddler-to-little-kid/-/A-90276050",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-nightmare-before-christmas-sally-jack-skellington-girls-french-terry-hoodie-little-kid-to-big-kid/-/A-87049130",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-fleece-zip-up-hoodie-little-kid-to-big-kid/-/A-93825912",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-wonder-woman-girls-zip-up-costume-hoodie-little-kid-to-big-kid/-/A-88398070",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-snow-angel-french-terry-zip-up-hoodie-toddler-to-big-kid/-/A-88227571",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hanes-girl-hooded-sweatshirt-full-zip-1-pack-super-soft-breathable/-/A-1002809960",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-pink-picket-fence-suzie-dino-hoodie-for-girls-lightweight-zip-up-jacket-hand-painted-dinosaur-print/-/A-1004883980",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-zipper-classic-solid-color-sweat-hoodie/-/A-89567658",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-zipper-boho-solid-color-sweat-hoodie/-/A-89567550",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops, Toddler Boys’ Clothing, Toddler Clothing",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-zip-front-sweatshirt/-/A-86908804",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-quarter-zip-pullover/-/A-88835523",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-zip-up-french-terry-hoodie-cat-jack/-/A-94504344",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-zip-up-fleece-hoodie-cat-jack/-/A-94566500",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/toddlers-39-adaptive-zip-up-fleece-hoodie-sweatshirt-cat-38-jack-8482-pink-rose/-/A-94486507",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-cozy-faux-sherling-zip-up-cosplay-hoodie-toddler/-/A-1000866290",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/cocomelon-jj-fleece-zip-up-hoodie-toddler/-/A-86901015",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-fleece-zip-up-hoodie-toddler/-/A-93825907",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-winnie-the-pooh-girls-cozy-faux-sherling-zip-up-cosplay-hoodie-toddler/-/A-93968895",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-nightmare-before-christmas-jack-skellington-sally-girls-french-terry-hoodie-toddler/-/A-87049135",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-wonder-woman-girls-french-terry-zip-up-costume-hoodie-toddler/-/A-85458372",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-girls-zip-up-hoodie-toddler/-/A-85562328",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/peppa-pig-girls-fleece-zip-up-hoodie-toddler-to-little-kid/-/A-90276053",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/cocomelon-jj-baby-fleece-zip-up-hoodie-infant/-/A-86901012",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-classics-girls-fleece-zip-up-cosplay-hoodie-toddler-sizes-2t-14-16/-/A-1001544062",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-winnie-the-pooh-baby-girls-cozy-faux-sherling-zip-up-cosplay-hoodie-newborn-to-infant/-/A-93968896",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-princess-moana-cindrella-ariel-belle-zip-up-hoodie-toddler/-/A-87217520",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-french-terry-zip-up-hoodie-toddler/-/A-87276214",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-princess-moana-cindrella-ariel-belle-zip-up-hoodie-infant/-/A-87217521",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-wonder-woman-girls-zip-up-costume-hoodie-toddler/-/A-88398069",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-velour-matching-family-zip-up-hoodie-toddler/-/A-93183870",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-spider-gwen-ghost-spider-girls-fleece-zip-up-hoodie-little-kid-to-big-kid/-/A-88397434",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-slytherin-ravenclaw-hufflepuff-girls-french-terry-zip-up-hoodie-little-kid-to-big-kid/-/A-89291810",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts, Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-spider-gwen-ghost-spider-girls-fleece-zip-up-hoodie-toddler/-/A-88397433",
      tags: "Activewear, Girls’ Activewear, Zip-Up Sweatshirts",
      filters: {
        type: "Zip-Up Sweatshirts",
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
      url: "https://www.target.com/p/leveret-kids-long-sleeve-neutral-solid-color-sweatshirt/-/A-89567290",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops, Toddler Boys’ Clothing, Toddler Clothing",
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
      url: "https://www.target.com/p/catalonia-oversized-blanket-hoodie-sweatshirt-for-kids-wearable-fleece-pullover-with-large-front-pocket-teen-boys-girls-gift/-/A-1000523833",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-hooded-sweatshirt-kids-hoodie-pullover-sweatshirt-with-kangaroo-pocket-classic-solid-color/-/A-1000400479",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-hooded-sweatshirt-kids-hoodie-pullover-sweatshirt-with-kangaroo-pocket-boho-solid-color/-/A-1000400424",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/solaris-hoodie-sweatshirt-for-kids-warm-soft-gift-oversized-cozy-fleece-sweatshirt-pullover-for-teens-girls-boys-large-pocket/-/A-93639691",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/leveret-kids-hooded-sweatshirt-kids-hoodie-pullover-sweatshirt-with-kangaroo-pocket-neutral-solid-color/-/A-1000400553",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dinosaur-oversized-blanket-hoodie-sweatshirt-for-kids-7-15yr-cozy-fuzzy-flannel-wearable-blanket-for-boys-girls-christmas-gift-for-kids-solaris/-/A-1001267115",
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
      url: "https://www.target.com/p/sol-angeles-kids-black-white-stripe-pullover-hoodie/-/A-1003706375",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/beary-sweet-youth-girl-s-long-sleeve-cosplay-hoodie-with-3d-ears/-/A-1000024753",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/peppa-pig-kids-snugible-blanket-hoodie-pillow/-/A-1000384764",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lankybox-all-over-character-print-long-sleeve-youth-blue-hooded-sweatshirt/-/A-1000525231",
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
      url: "https://www.target.com/p/mightly-kids-fair-trade-organic-cotton-pullover-hoodie/-/A-1004010357",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-block-kitten-with-block-heart-youth-black-graphic-hoodie/-/A-89050952",
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
      url: "https://www.target.com/p/looney-tunes-angry-daffy-duck-youth-black-graphic-hoodie/-/A-89001893",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/christmas-ginger-bread-candy-cane-green-gamer-oversized-wearable-hoodie-blanket/-/A-1000525246",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-mystery-gang-doodle-youth-black-graphic-hoodie/-/A-89386799",
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
      url: "https://www.target.com/p/yu-gi-oh-joey-character-with-spiral-background-and-logo-youth-black-graphic-hoodie/-/A-88919720",
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
      url: "https://www.target.com/p/dc-x-sonic-the-hedgehog-from-the-shadows-shadow-x-batman-yellow-outline-youth-long-sleeve-hoodie/-/A-93802599",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lanky-box-boxy-long-sleeve-boy-s-yellow-cosplay-hoodie/-/A-93713959",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-fleece-drop-shoulder-pullover-hoodie/-/A-1003050227",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/blockbuster-be-kind-rewind-comfort-food-adult-royal-blue-hoodie/-/A-90275394",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mclaren-f1-kids-core-essentials-hoodie/-/A-92466188",
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
      url: "https://www.target.com/p/naruto-classic-character-varsity-style-graphic-with-collegiate-text-youth-athletic-heather-hoodie/-/A-89097459",
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
      url: "https://www.target.com/p/minecraft-block-butterfly-flying-youth-royal-blue-graphic-hoodie/-/A-89051394",
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
      url: "https://www.target.com/p/the-juniper-shop-hugs-and-kisses-youth-graphic-hoodie/-/A-1001551995",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/unicorns-rainbows-youth-pink-oversized-wearable-hoodie-blanket/-/A-1000514540",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/chibi-cat-youth-girl-s-black-long-sleeve-cosplay-hoodie-with-3d-ears/-/A-1000024768",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bear-hug-youth-girl-s-tofu-long-sleeve-cosplay-hoodie-with-3d-ears/-/A-1000024615",
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
      url: "https://www.target.com/p/just-fall-things-pumpkin-spice-latte-youth-long-sleeve-hoodie/-/A-1000883597",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-i-dig-you-youth-graphic-hoodie/-/A-1001552067",
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
      url: "https://www.target.com/p/pawsitive-brown-bear-youth-girl-s-long-sleeve-cosplay-hoodie-with-3d-ears/-/A-94153762",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-snack-time-youth-heather-gray-graphic-hoodie/-/A-89002137",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-gaaro-versus-naruto-youth-black-hoodie/-/A-89764602",
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
      url: "https://www.target.com/p/ac-dc-74-jailbreak-album-cover-youth-heather-gray-graphic-hoodie/-/A-88861508",
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
      url: "https://www.target.com/p/plushible-sesame-street-elmo-kids-snugible-blanket-hoodie-pillow/-/A-90961195",
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
      url: "https://www.target.com/p/bioworld-team-sesame-street-1969-count-von-count-youth-black-hoodie/-/A-89765101",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-you-re-despicable-daffy-duck-youth-royal-blue-graphic-hoodie/-/A-89002290",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-red-logo-youth-boys-black-hoodie/-/A-89097549",
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
      url: "https://www.target.com/p/bioworld-team-sesame-street-1969-cookie-monster-mvp-youth-heather-gray-hoodie/-/A-89765328",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/castore-red-bull-racing-f1-kid-s-2025-team-pullover-hoodie/-/A-1002208323",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/plushible-sesame-street-oscar-the-grouch-kids-snugible-blanket-hoodie-pillow/-/A-90961194",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/plushible-sesame-street-cookie-monster-kids-snugible-blanket-hoodie-pillow/-/A-90961191",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-kind-turning-smiles-youth-hoodie/-/A-1003380755",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-here-he-comes-our-ultraman-youth-black-hoodie/-/A-89244239",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-love-smiley-face-youth-graphic-hoodie/-/A-1001743404",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dc-x-sonic-chaos-controller-youth-long-sleeve-hoodie/-/A-93802483",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/family-is-a-gift-youth-long-sleeve-hoodie/-/A-1000883547",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/a-leading-role-teletubbies-premium-po-pullover-child-hoodie/-/A-93001272",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-vibes-clover-youth-graphic-hoodie/-/A-1002225522",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-sesame-street-c-is-for-champions-youth-royal-blue-hoodie/-/A-89765367",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-smiley-face-outline-youth-graphic-hoodie/-/A-1002349946",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-love-typewriter-youth-graphic-hoodie/-/A-1001709705",
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
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-youth-graphic-hoodie/-/A-1001709845",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-gulf-of-mexico-surfer-youth-long-sleee-hoodie/-/A-1002590753",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/where-s-the-pie-youth-long-sleeve-hoodie/-/A-1000883548",
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
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-youth-graphic-hoodie/-/A-1001709660",
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
      url: "https://www.target.com/p/go-sports-but-where-s-the-food-youth-long-sleeve-hoodie/-/A-93696405",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-mystery-gang-doodles-youth-athletic-gray-hoodie/-/A-89387535",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-kind-turning-smiles-youth-hoodie/-/A-1003380808",
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
      url: "https://www.target.com/p/castore-alpine-racing-f1-2025-kids-team-hoodie/-/A-1002315511",
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
      url: "https://www.target.com/p/so-unbearable-youth-long-sleeve-hoodie/-/A-1000883436",
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
      url: "https://www.target.com/p/mykids-usa-baby-solid-color-thickened-autumn-basic-hoodies/-/A-1003660754",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/tasty-peach-halloween-characters-youth-girl-black-hoodie-with-cat-ears/-/A-1001810586",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-cursive-lucky-clover-youth-graphic-hoodie/-/A-1002225562",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-smiley-face-outline-youth-hoodie/-/A-1003380714",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-choose-happy-smiley-face-youth-graphic-hoodie/-/A-1002350174",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-lucky-typewriter-youth-graphic-hoodie/-/A-1002225697",
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
      url: "https://www.target.com/p/the-juniper-shop-embroidered-lucky-clover-youth-graphic-hoodie/-/A-1001890688",
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
      url: "https://www.target.com/p/the-juniper-shop-embroidered-easter-eggs-youth-hoodie/-/A-1003380593",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-all-you-need-is-love-coquette-youth-graphic-hoodie/-/A-1001552064",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/pawsitive-bear-youth-long-sleeve-hoodie/-/A-1000883437",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/castore-red-bull-racing-f1-heritage-kids-team-hoodie/-/A-1005158654",
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
      url: "https://www.target.com/p/looney-tunes-sufferin-succotash-sylvester-youth-black-graphic-hoodie/-/A-89001892",
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
      url: "https://www.target.com/p/the-juniper-shop-babe-smile-youth-graphic-hoodie/-/A-1001552213",
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
      url: "https://www.target.com/p/the-juniper-shop-happy-go-lucky-shamrock-youth-graphic-hoodie/-/A-1002519718",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-retro-love-stripes-youth-graphic-hoodie/-/A-1001743161",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-heart-throb-small-heart-puff-print-youth-graphic-hoodie/-/A-1001552086",
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
      url: "https://www.target.com/p/the-juniper-shop-football-game-day-youth-graphic-hoodie/-/A-1001823536",
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
      url: "https://www.target.com/p/gulf-of-mexico-always-forever-youth-long-sleee-hoodie/-/A-1002590874",
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
      url: "https://www.target.com/p/the-juniper-shop-game-day-football-youth-graphic-hoodie/-/A-1001823722",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/touchdown-football-sports-youth-long-sleeve-hoodie/-/A-1002524577",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-love-smile-youth-graphic-hoodie/-/A-1001743107",
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
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-youth-graphic-hoodie/-/A-1001709806",
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
      url: "https://www.target.com/p/gulf-of-mexico-palm-tree-youth-long-sleee-hoodie/-/A-1002590700",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/liverpool-fc-character-world-official-hugzee-oversized-wearable-hoodie/-/A-1003753188",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-cuter-than-cupid-youth-graphic-hoodie/-/A-1001743129",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-happy-go-lucky-shamrock-youth-hoodie/-/A-1003380745",
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
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-pool-floats-youth-hoodie/-/A-1003380123",
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
      url: "https://www.target.com/p/manchester-city-fc-hugzee-oversized-wearable-hoodie/-/A-1003753178",
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
      url: "https://www.target.com/p/cool-as-a-cucumber-humor-youth-long-sleeve-hoodie/-/A-93695862",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-but-first-tacos-outline-youth-hoodie/-/A-1003380736",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-pickleball-front-and-back-youth-graphic-hoodie/-/A-1002604186",
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
      url: "https://www.target.com/p/the-juniper-shop-football-game-day-stripes-youth-graphic-hoodie/-/A-1001831836",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-waving-half-tone-style-youth-boys-athletic-gray-hoodie/-/A-92947031",
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
      url: "https://www.target.com/p/labbing-touch-grass-gamer-nerd-youth-long-sleeve-hoodie/-/A-1002522926",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-talk-football-to-me-ball-youth-graphic-hoodie/-/A-1001831833",
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
      url: "https://www.target.com/p/the-juniper-shop-embroidered-lucky-clover-youth-graphic-hoodie/-/A-1001890623",
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
      url: "https://www.target.com/p/rabble-gender-neutral-hoodie-and-valentines-day-dabblz-bundle/-/A-1001756661",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-be-mine-block-youth-graphic-hoodie/-/A-1001743110",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-typewriter-youth-graphic-hoodie/-/A-1002519865",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-love-clover-youth-hoodie/-/A-1003380769",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hippity-hoppity-stacked-youth-hoodie/-/A-1003380109",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/eat-sleep-game-repeat-youth-long-sleeve-hoodie/-/A-93695794",
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
      url: "https://www.target.com/p/fish-out-of-water-youth-long-sleeve-hoodie/-/A-93695950",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/gulf-of-mexico-forever-sunset-wave-youth-long-sleee-hoodie/-/A-1002590746",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-bubba-solid-youth-hoodie/-/A-1003380136",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-love-clover-youth-graphic-hoodie/-/A-1002225795",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/in-tailgating-we-trust-american-flag-and-spatula-youth-long-sleeve-hoodie/-/A-93696214",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/rip-gulf-of-mexico-1607-2025-youth-long-sleee-hoodie/-/A-1002590853",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-be-mine-cursive-heart-youth-graphic-hoodie/-/A-1001743130",
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
      url: "https://www.target.com/p/blockbuster-white-logo-adult-royal-blue-hoodie/-/A-90275417",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/give-thanks-turkey-pumpkin-youth-long-sleeve-hoodie/-/A-1000883539",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/go-sports-but-where-s-the-food-kids-long-sleeve-hoodie/-/A-93696419",
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
      url: "https://www.target.com/p/the-juniper-shop-embroidered-varsity-love-vibes-youth-graphic-hoodie/-/A-1001709828",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-mystery-gang-doodle-youth-black-graphic-hoodie/-/A-89386819",
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
      url: "https://www.target.com/p/blockbuster-be-kind-rewind-circular-logo-adult-black-hoodie/-/A-90274240",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/eg-pro-tech-fleece-youth-sleeveless-hoodie/-/A-1001393265",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-vibes-distressed-youth-hoodie/-/A-1003380631",
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
      url: "https://www.target.com/p/cutest-turkey-in-town-youth-long-sleeve-hoodie/-/A-1000883590",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/batman-logo-in-bat-signal-youth-heather-gray-hoodie/-/A-89244223",
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
      url: "https://www.target.com/p/the-juniper-shop-pickleball-paddles-crossed-youth-graphic-hoodie/-/A-1002604193",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/grillin-and-chillin-like-a-football-villain-youth-long-sleeve-hoodie/-/A-93696289",
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
      url: "https://www.target.com/p/in-tailgating-we-trust-american-flag-and-spatula-youth-long-sleeve-hoodie/-/A-93230799",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-retro-lucky-stripes-youth-graphic-hoodie/-/A-1002277075",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-just-happy-to-be-here-youth-hoodie/-/A-1003380342",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/perfect-spirals-flaming-football-youth-long-sleeve-hoodie/-/A-93115655",
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
      url: "https://www.target.com/p/butterfly-youth-long-sleeve-hoodie/-/A-1000883544",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/rabble-gender-neutral-hoodie-bundle-with-magic-wonders-dabblz/-/A-1002277918",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/eat-sleep-game-repeat-youth-long-sleeve-hoodie/-/A-93695812",
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
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-arched-varsity-youth-hoodie/-/A-1003380568",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-need-space-youth-hoodie/-/A-1003380255",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/perfect-spirals-flaming-football-youth-long-sleeve-hoodie/-/A-93696231",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-smiley-face-outline-youth-graphic-hoodie/-/A-1002350050",
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
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-kind-turning-smiles-youth-graphic-hoodie/-/A-1002349961",
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
      url: "https://www.target.com/p/kids-39-adaptive-fleece-crew-sweatshirt-cat-38-jack-8482-navy-blue/-/A-94576201",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-rising-emi-ultraman-youth-athletic-heather-long-sleeve-hooded-sweatshirt/-/A-94157331",
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
      url: "https://www.target.com/p/led-zeppelin-red-icarus-logo-long-sleeve-black-youth-hooded-sweatshirt/-/A-90274249",
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
      url: "https://www.target.com/p/kawaii-cat-youth-black-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93859970",
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
      url: "https://www.target.com/p/led-zeppelin-black-and-white-band-photo-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-90273798",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-bonnie-head-long-sleeve-black-youth-hooded-sweatshirt/-/A-90274281",
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
      url: "https://www.target.com/p/teddy-bear-youth-black-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93860012",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-all-might-collegiate-text-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-88756623",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/tasty-peach-adzuki-the-redbean-red-panda-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-91498647",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-modern-sonic-pop-dimension-color-art-long-sleeve-black-youth-hooded-sweatshirt/-/A-91217493",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lanky-box-foxy-long-sleeve-royal-blue-youth-hooded-sweatshirt/-/A-91714204",
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
      url: "https://www.target.com/p/cobra-kai-strike-first-strike-hard-black-seal-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-92985720",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-red-freddy-crew-neck-long-sleeve-black-youth-hooded-sweatshirt/-/A-89765400",
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
      url: "https://www.target.com/p/dog-man-running-across-cityscape-youth-black-long-sleeve-hooded-sweatshirt/-/A-93890636",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/journey-infinity-scarab-logo-long-sleeve-youth-black-hooded-sweatshirt/-/A-93653730",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-adventure-is-an-attitude-long-sleeve-royal-blue-youth-hooded-sweatshirt/-/A-89387724",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-vintage-2022-character-group-shot-long-sleeve-youth-black-hooded-sweatshirt/-/A-93333103",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-kakashi-action-pose-long-sleeve-black-youth-hooded-sweatshirt/-/A-89765431",
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
      url: "https://www.target.com/p/yu-gi-oh-dark-magician-puff-print-long-sleeve-black-youth-hooded-sweatshirt/-/A-88756559",
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
      url: "https://www.target.com/p/minecraft-steve-creeper-long-sleeve-black-youth-hooded-sweatshirt/-/A-89765416",
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
      url: "https://www.target.com/p/naruto-classic-team-seven-long-sleeve-athletic-gray-youth-hooded-sweatshirt/-/A-88756668",
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
      url: "https://www.target.com/p/naruto-tonal-character-graphic-long-sleeve-black-youth-hooded-sweatshirt/-/A-90274291",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lanky-box-boxy-long-sleeve-black-youth-hooded-sweatshirt/-/A-91898275",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-never-dies-neon-logo-long-sleeve-black-youth-hooded-sweatshirt/-/A-92985715",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/mclaren-f1-kids-2023-team-hooded-sweatshirt/-/A-92467692",
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
      url: "https://www.target.com/p/lanky-box-plush-characters-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-91217247",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lanky-box-foxy-long-sleeve-boy-s-colorblock-hooded-sweatshirt/-/A-93877582",
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
      url: "https://www.target.com/p/sonic-the-hedgehog-modern-dr-eggman-long-sleeve-black-youth-hooded-sweatshirt/-/A-89721331",
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
      url: "https://www.target.com/p/my-hero-academia-group-art-checkered-frame-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-88756612",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-compass-explore-badge-long-sleeve-royal-blue-youth-hooded-sweatshirt/-/A-85886194",
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
      url: "https://www.target.com/p/led-zeppelin-blimp-falling-icarus-logo-long-sleeve-black-youth-hooded-sweatshirt/-/A-90274226",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/led-zeppelin-blimp-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-89765437",
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
      url: "https://www.target.com/p/batman-the-caped-crusader-guardian-of-gotham-city-long-sleeve-black-youth-hooded-sweatshirt/-/A-91217379",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/superman-my-hero-since-forever-long-sleeve-black-youth-hooded-sweatshirt/-/A-89386811",
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
      url: "https://www.target.com/p/dragon-ball-z-smiling-chibi-goku-long-sleeve-royal-blue-youth-hooded-sweatshirt/-/A-90275439",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/led-zeppelin-earl-s-court-youth-athletic-heather-long-sleeve-hooded-sweatshirt/-/A-1002264388",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/shining-star-kawaii-cat-youth-black-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93859965",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/acdc-world-tour-08-09-long-sleeve-black-youth-hooded-sweatshirt/-/A-89765445",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/superman-man-of-steel-chrome-logo-long-sleeve-black-youth-hooded-sweatshirt/-/A-89386864",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/love-all-tennis-kids-hooded-sweatshirt/-/A-1004035280",
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
      url: "https://www.target.com/p/naruto-classic-pakkun-adult-black-hooded-sweatshirt/-/A-90274248",
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
      url: "https://www.target.com/p/lands-end-kids-athletic-lightweight-sweatshirt/-/A-87678788",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/superman-hero-in-text-art-long-sleeve-black-youth-hooded-sweatshirt/-/A-89386872",
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
      url: "https://www.target.com/p/superman-courage-strength-passion-distressed-logo-long-sleeve-black-youth-hooded-sweatshirt/-/A-89386822",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/batman-bruce-wayne-alter-ego-long-sleeve-black-youth-hooded-sweatshirt/-/A-89208332",
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
      url: "https://www.target.com/p/kawaii-cat-shooting-star-youth-black-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93860117",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/superman-last-son-of-krypton-long-sleeve-black-youth-hooded-sweatshirt/-/A-89386852",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-modern-tails-hexagon-graphic-long-sleeve-black-youth-hooded-sweatshirt/-/A-90274232",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-kanji-emblem-long-sleeve-youth-black-hooded-sweatshirt/-/A-89838816",
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
      url: "https://www.target.com/p/kawaii-cat-shooting-star-youth-off-white-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93860128",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/shining-star-kawaii-cat-youth-off-white-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-93860026",
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
      url: "https://www.target.com/p/dragon-ball-z-goku-attack-with-bursting-name-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-89522845",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/spellbound-flink-love-your-self-youth-black-hooded-sweatshirt/-/A-94246214",
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
      url: "https://www.target.com/p/dragon-ball-super-zeno-long-sleeve-athletic-heather-youth-hooded-sweatshirt/-/A-93148362",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-go-taylor-s-boyfriend-sparkle-youth-ultra-soft-graphic-sweatshirt/-/A-1001806673",
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
      url: "https://www.target.com/p/sonic-the-hedgehog-rainbow-sonic-youth-black-sweatshirt/-/A-86104161",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-cozy-worn-varsity-youth-ultra-soft-graphic-sweatshirt/-/A-1000148425",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-rudolph-puff-print-youth-graphic-sweatshirt/-/A-93516561",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/nasa-space-shuttle-patch-youth-royal-blue-sweatshirt/-/A-86104290",
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
      url: "https://www.target.com/p/five-nights-at-freddy-s-split-springtrap-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-91543847",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazber-s-pizza-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-92987937",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-christmas-cutie-checkered-youth-ultra-soft-graphic-sweatshirt/-/A-93717200",
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
      url: "https://www.target.com/p/nerf-twisted-logo-crew-neck-long-sleeve-black-boy-s-sweatshirt/-/A-90274653",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-sonic-the-hedgehog-knuckles-unleash-the-ultimate-power-youth-black-crew-neck-sweatshirt/-/A-89244213",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-katsuki-bakugo-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89522935",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-thumbs-up-sonic-shadow-youth-royal-blue-sweatshirt/-/A-86074772",
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
      url: "https://www.target.com/p/scooby-doo-paw-print-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89387576",
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
      url: "https://www.target.com/p/gremlins-gizmo-character-with-logo-youth-heather-gray-crew-neck-sweatshirt/-/A-90275246",
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
      url: "https://www.target.com/p/the-juniper-shop-santa-s-little-helper-words-youth-ultra-soft-graphic-sweatshirt/-/A-93544731",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-leaping-out-of-line-art-youth-black-crew-neck-sweatshirt/-/A-90274723",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-joy-snowflake-youth-ultra-soft-graphic-sweatshirt/-/A-1000148389",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/a-christmas-story-oh-fudge-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-90274602",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-doodle-logo-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89764961",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/nerf-push-the-limits-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-90274773",
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
      url: "https://www.target.com/p/nerf-twisted-background-crew-neck-long-sleeve-black-boy-s-sweatshirt/-/A-90274657",
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
      url: "https://www.target.com/p/the-juniper-shop-believe-puff-print-youth-ultra-soft-graphic-sweatshirt/-/A-93516569",
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
      url: "https://www.target.com/p/a-christmas-story-i-can-t-put-my-arms-down-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-90274570",
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
      url: "https://www.target.com/p/scooby-doo-random-badges-youth-black-crew-neck-sweatshirt/-/A-89387647",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/my-hero-academia-deku-character-youth-black-crew-neck-sweatshirt/-/A-88861475",
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
      url: "https://www.target.com/p/my-hero-academia-season-6-heroes-group-art-crew-neck-long-sleeve-youth-black-sweatshirt/-/A-93148242",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/scooby-doo-for-president-youth-athletic-gray-crew-neck-sweatshirt/-/A-89387516",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-sonic-the-hedgehog-street-art-portrait-youth-black-crew-neck-sweatshirt/-/A-89244145",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-varsity-love-vibes-youth-ultra-soft-graphic-sweatshirt/-/A-1001743373",
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
      url: "https://www.target.com/p/bioworld-sonic-the-hedgehog-let-s-roll-modern-street-art-youth-black-crew-neck-sweatshirt/-/A-89244182",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/batman-pop-art-inspired-youth-black-crew-neck-sweatshirt/-/A-89177256",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-sonic-the-hedgehog-knuckles-ultimate-power-youth-black-crew-neck-sweatshirt/-/A-89244128",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-little-miss-valentine-youth-ultra-soft-graphic-sweatshirt/-/A-1001209488",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-shippuden-pixel-art-naruto-youth-black-sweatshirt/-/A-86104342",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-goku-charging-youth-athletic-heather-sweatshirt/-/A-86104395",
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
      url: "https://www.target.com/p/minecraft-mob-heads-youth-royal-blue-sweatshirt/-/A-86074850",
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
      url: "https://www.target.com/p/bioworld-sonic-the-hedgehog-dr-eggman-back-to-the-checkpoint-youth-black-crew-neck-sweatshirt/-/A-89244171",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-abby-cadabby-baby-girls-sweatshirt-infant/-/A-87483786",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/sonic-prime-new-yoke-city-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89258867",
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
      url: "https://www.target.com/p/five-nights-at-freddy-s-foxy-in-a-red-box-youth-black-crew-neck-sweatshirt/-/A-89522926",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/naruto-kakashi-crew-neck-long-sleeve-youth-athletic-heather-sweatshirt/-/A-93651369",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-marvin-the-martian-hello-earthlings-youth-black-crew-neck-sweatshirt/-/A-89002139",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-group-character-art-crew-neck-long-sleeve-youth-black-sweatshirt/-/A-92987931",
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
      url: "https://www.target.com/p/disney-minnie-mouse-big-girls-fleece-sweatshirt-tie-dye-14-16/-/A-87280845",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-steve-and-mobs-with-doodle-background-youth-black-crew-neck-sweatshirt/-/A-89258848",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-yellow-circle-logo-crew-neck-long-sleeve-youth-black-sweatshirt/-/A-92987949",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-cozy-ruffle-sweatshirt-top-small-black-stars-print/-/A-93536564",
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
      url: "https://www.target.com/p/the-juniper-shop-game-day-youth-ultra-soft-graphic-sweatshirt/-/A-1001834974",
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
      url: "https://www.target.com/p/the-juniper-shop-embroidered-hand-drawn-heart-youth-ultra-soft-graphic-sweatshirt/-/A-1001709913",
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
      url: "https://www.target.com/p/ultraman-white-line-art-on-repeat-text-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89244201",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-son-goku-crew-neck-long-sleeve-athletic-heather-youth-sweatshirt/-/A-89721314",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/growing-up-creepie-have-you-hugged-a-bug-today-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89008533",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/growing-up-creepie-big-image-creepie-long-sleeve-crew-neck-black-youth-sweatshirt/-/A-89008542",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-foxy-in-front-of-foxy-words-youth-black-crew-neck-sweatshirt/-/A-89522923",
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
      url: "https://www.target.com/p/batman-repeat-text-with-logo-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89721313",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-sonic-the-hedgehog-modern-team-up-gear-up-youth-black-crew-neck-sweatshirt/-/A-89244157",
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
      url: "https://www.target.com/p/pink-floyd-triangle-earth-with-airplanes-logo-youth-black-crew-neck-sweatshirt/-/A-88861439",
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
      url: "https://www.target.com/p/looney-tunes-bugs-bunny-and-daffy-duck-youth-black-crew-neck-sweatshirt/-/A-89002096",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-sonic-the-hedgehog-let-s-roll-monochrome-street-art-youth-black-crew-neck-sweatshirt/-/A-89244168",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-running-hero-boy-s-athletic-heather-sweatshirt/-/A-87057232",
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
      url: "https://www.target.com/p/scooby-doo-mystery-solvers-club-youth-black-crew-neck-sweatshirt/-/A-89387589",
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
      url: "https://www.target.com/p/batman-vintage-inspired-superhero-youth-heather-gray-crew-neck-sweatshirt/-/A-89177190",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/batman-what-is-your-superpower-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-89208347",
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
      url: "https://www.target.com/p/gremlins-gizmo-with-multicolor-names-youth-black-crew-neck-sweatshirt/-/A-90274699",
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
      url: "https://www.target.com/p/the-juniper-shop-believe-bold-puff-print-youth-ultra-soft-graphic-sweatshirt/-/A-93457461",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-time-to-celebrate-youth-ultra-soft-graphic-sweatshirt/-/A-1000157646",
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
      url: "https://www.target.com/p/the-juniper-shop-you-re-my-lucky-charm-clovers-youth-ultra-soft-graphic-sweatshirt/-/A-1002532967",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/eg-pro-kids-baseball-t-shirt/-/A-1003336954",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/looney-tunes-sleepy-one-taz-youth-heather-gray-crew-neck-sweatshirt/-/A-89002188",
      tags: "Girls’ Clothing, Hoodies & Sweatshirts, Kids’ Clothing, Pullover Sweatshirts, Tops",
      filters: {
        type: "Pullover Sweatshirts",
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
