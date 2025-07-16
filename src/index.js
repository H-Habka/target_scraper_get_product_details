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
      url: "https://www.target.com/p/girls-39-everyday-soft-leggings-all-in-motion/-/A-91349102",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-crossover-waistband-leggings-all-in-motion/-/A-94502461",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-pocket-leggings-all-in-motion/-/A-94471816",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-flare-leggings-all-in-motion/-/A-91496582",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-piped-leggings-all-in-motion/-/A-94739704",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-jogger-leggings-all-in-motion/-/A-94739697",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-stripe-leggings/-/A-91267609",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-100-cotton-solid-colored-leggings/-/A-90529881",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-high-waisted-active-flare-leggings/-/A-88872406",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-novelty-stretch-leggings/-/A-90567962",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/destira-high-waisted-performance-leggings/-/A-1001540621",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-fleece-stretch-leggings/-/A-90790246",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-organic-cotton-leggings/-/A-90842162",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-ruffle-leggings/-/A-90842436",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-active-legging-girls/-/A-84318447",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-girls-100-cotton-leggings-usa-made-soft-breathable-sensory-friendly-for-kids-toddlers-heather-grey/-/A-1001847747",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/reebok-girls-urban-grid-athletic-leggings/-/A-1004768839",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/reebok-girls-adventure-compression-athletic-pants/-/A-1004767006",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/reebok-girls-adventure-compression-athletic-pants/-/A-1004766870",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/reebok-girls-adventure-compression-athletic-pants/-/A-1004766516",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/reebok-girls-geo-reflective-athletic-leggings/-/A-1004737982",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/reebok-girls-fleece-yoga-pants/-/A-1004737729",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/reebok-girls-adventure-compression-athletic-pants/-/A-1004732941",
      tags: "Athletic Leggings, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-woven-cargo-jogger-pants-all-in-motion/-/A-91184117",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-active-comfort-jogger-pants-all-in-motion/-/A-94741236",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-modal-french-terry-flare-pants-all-in-motion/-/A-94471774",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-cozy-lightweight-flare-pants-all-in-motion/-/A-93297432",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-active-light-wide-leg-pants-all-in-motion/-/A-94741288",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-minnie-mouse-ditsy-floral-dreamy-fleece-sweatpants-ivory/-/A-93599962",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-active-light-uniform-pants-all-in-motion/-/A-94739701",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-prospect-softball-pant/-/A-84808521",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-belted-softball-pant/-/A-76144129",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/mizuno-girl-s-belted-stretch-softball-pant/-/A-79260612",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-padded-unbelted-softball-pants/-/A-76021663",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-pant-girls/-/A-84318432",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/90-degree-by-reflex-girls-vintage-faux-cracked-leather-high-waist-legging/-/A-93560996",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/rip-it-play-ball-softball-pant-charcoal-l/-/A-94610800",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/rip-it-play-ball-softball-pant-charcoal-xl/-/A-94610768",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/rip-it-play-ball-softball-pant-white-xl/-/A-94610750",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/rip-it-play-ball-softball-pant-charcoal-m/-/A-94610764",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/rip-it-play-ball-softball-pant-charcoal-s/-/A-94610729",
      tags: "Athletic Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-uniform-polo-t-shirt-all-in-motion-8482/-/A-94579754",
      tags: "Athletic Polo Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-run-shorts-all-in-motion/-/A-89627332",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-tumble-shorts-all-in-motion-8482/-/A-93297590",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-crossover-waistband-shorts-all-in-motion-8482/-/A-94253687",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-bike-shorts-all-in-motion/-/A-94501346",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-flowy-shorts-all-in-motion-8482/-/A-93297434",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-active-light-2-in-1-run-shorts-all-in-motion/-/A-93297149",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-woven-piped-shorts-all-in-motion/-/A-94729833",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-airy-sleek-shorts-all-in-motion/-/A-92304990",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-gymnastics-shorts-cat-jack-black/-/A-82391055",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-active-light-side-pleated-woven-shorts-all-in-motion/-/A-94501349",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-soft-stretch-shorts-all-in-motion-8482/-/A-93297585",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-woven-shorts-all-in-motion/-/A-85772101",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-gym-shorts-all-in-motion/-/A-81459139",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-messi-athletic-shorts-black/-/A-91616717",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-100-cotton-girls-soft-bike-shorts/-/A-91228083",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-mesh-gym-shorts/-/A-86739863",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-high-waisted-short-girls/-/A-84318303",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-knit-boyshort-girls/-/A-87696565",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-foldover-boyshort-girls/-/A-87696545",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/mizuno-youth-vortex-v2-volleyball-short/-/A-90043782",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-gusset-short-girls/-/A-84318205",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-boys-cut-low-rise-short-girls/-/A-83927632",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-athletic-tennis-skirts-shorts-elastic-high-waisted-mesh-golf-sport-skorts-with-2-pockets-for-kids-4-13y/-/A-1003878692",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-classics-boy-short-girls/-/A-84318151",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/destira-mystique-sport-short/-/A-92089203",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/destira-compression-sport-short/-/A-92090054",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/destira-girls-high-waisted-performance-short/-/A-93874694",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-printed-girls-novelty-bike-shorts/-/A-92159233",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-fold-over-boyshort-girls/-/A-84644851",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-girl-s-cloud-nine-sunburst-short-child/-/A-1003315611",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/mizuno-girl-s-victory-short/-/A-90043768",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-aero-vent-padded-sliding-short/-/A-82226194",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-soft-100-cotton-girls-long-bike-shorts/-/A-92746144",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/destira-compression-biker-short/-/A-92084924",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/90-degree-by-reflex-girls-2pk-lightstreme-start-line-running-short/-/A-1002432898",
      tags: "Athletic Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-dance-activewear-skirt-cat-jack-pink/-/A-82390729",
      tags: "Athletic Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-dance-activewear-skirt-cat-jack-black/-/A-82390730",
      tags: "Athletic Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-women-s-future-star-pull-on-skirt/-/A-1003315387",
      tags: "Athletic Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-glitter-tutu-girls/-/A-84644795",
      tags: "Athletic Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-girls-pull-on-skirt-girls/-/A-83927553",
      tags: "Athletic Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-skirt-with-built-in-short-girls/-/A-84644835",
      tags: "Athletic Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-girl-s-c-est-la-vie-bijou-skirt-child/-/A-1003315366",
      tags: "Athletic Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-active-light-pleated-skort-all-in-motion/-/A-94501355",
      tags: "Athletic Skorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-active-light-woven-skort-all-in-motion/-/A-94501347",
      tags: "Athletic Skorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-flowy-woven-skort-all-in-motion-8482/-/A-94253690",
      tags: "Athletic Skorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-airy-sleek-skort-all-in-motion/-/A-93297569",
      tags: "Athletic Skorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-knit-skort-all-in-motion/-/A-94501348",
      tags: "Athletic Skorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-piped-skort-all-in-motion/-/A-93297148",
      tags: "Athletic Skorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-ruffle-skort-all-in-motion/-/A-94471817",
      tags: "Athletic Skorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-airy-sleek-skort-all-in-motion/-/A-94756512",
      tags: "Athletic Skorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-active-light-uniform-skort-all-in-motion/-/A-94739700",
      tags: "Athletic Skorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-piped-skort-all-in-motion/-/A-94471815",
      tags: "Athletic Skorts, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-12pk-ankle-socks-colors-may-vary/-/A-53414823",
      tags: "Athletic Socks, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-12pk-super-no-show-athletic-socks-colors-may-vary/-/A-54536508",
      tags: "Athletic Socks, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-20pk-no-show-socks-colors-may-vary/-/A-80583873",
      tags: "Athletic Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-10pk-turn-cuff-crew-socks-cat-and-jack/-/A-51257984",
      tags: "Athletic Socks, Girl",
    },
    {
      url: "https://www.target.com/p/kids-6pk-no-show-athletic-socks-all-in-motion-black-white/-/A-79587653",
      tags: "Athletic Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-3-pair-pack-no-show-sneaker-liner-socks/-/A-1003336494",
      tags: "Athletic Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girl-s-athletic-ribbed-cotton-blend-knee-high-sock/-/A-1003336655",
      tags: "Athletic Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-metallic-sport-stripe-knee-high-socks/-/A-1003402704",
      tags: "Athletic Socks, Girl",
    },
    {
      url: "https://www.target.com/p/st-patrick-s-day-born-lucky-youth-3-pack-crew-socks/-/A-91018118",
      tags: "Athletic Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-lurex-recess-knee-high-socks/-/A-1003336467",
      tags: "Athletic Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-active-comfort-full-zip-hooded-sweatshirt-all-in-motion/-/A-94739705",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-los-angeles-dodgers-girls-henley-jersey/-/A-94610246",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-cozy-knit-jacket-all-in-motion-8482/-/A-94579748",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-san-francisco-giants-girls-henley-jersey/-/A-94610293",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-chicago-cubs-girls-henley-jersey/-/A-94610235",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-colorado-rockies-girls-henley-jersey/-/A-94610240",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-minnesota-twins-girls-henley-jersey/-/A-94610288",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-houston-astros-girls-henley-jersey/-/A-94610243",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-detroit-tigers-girls-henley-jersey/-/A-94610239",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-modal-french-terry-crewneck-sweatshirt-all-in-motion/-/A-94741248",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-san-diego-padres-girls-henley-jersey/-/A-94610292",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-new-york-yankees-girls-henley-jersey/-/A-94610286",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-atlanta-braves-girls-henley-jersey/-/A-94610238",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-boston-red-sox-girls-henley-jersey/-/A-94610236",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-new-york-mets-girls-henley-jersey/-/A-94610287",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-baltimore-orioles-girls-henley-jersey/-/A-94610234",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-seattle-mariners-girls-henley-jersey/-/A-94610291",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-texas-rangers-girls-henley-jersey/-/A-94610301",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-philadelphia-phillies-girls-henley-jersey/-/A-94610289",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-arizona-diamondbacks-girls-henley-jersey/-/A-94610229",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-milwaukee-brewers-girls-henley-jersey/-/A-94610244",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-los-angeles-angels-girls-henley-jersey/-/A-94610247",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-chicago-white-sox-girls-henley-jersey/-/A-94610237",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-cleveland-guardians-girls-henley-jersey/-/A-94610242",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-kansas-city-royals-girls-henley-jersey/-/A-94610248",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-washington-nationals-girls-henley-jersey/-/A-94610302",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-st-louis-cardinals-girls-henley-jersey/-/A-94610299",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-pittsburgh-pirates-girls-henley-jersey/-/A-94610290",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-cincinnati-reds-girls-henley-jersey/-/A-94610241",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-tampa-bay-rays-girls-henley-jersey/-/A-94610300",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-miami-marlins-girls-henley-jersey/-/A-94610245",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/mlb-oakland-athletics-girls-henley-jersey/-/A-94610253",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-girl-s-c-est-la-vie-joyeux-mesh-cover-up-child/-/A-1003315333",
      tags: "Athletic Sweatshirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-t-shirt-all-in-motion/-/A-94369616",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-t-shirt-all-in-motion-8482-lilac-purple/-/A-94253688",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-gym-t-shirt-all-in-motion/-/A-93071004",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-striped-jersey-pink/-/A-94431046",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-cinnamoroll-striped-jersey-blue-off-white/-/A-94431038",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-seamless-crop-t-shirt-all-in-motion-8482/-/A-93070250",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-you-got-this-graphic-t-shirt-all-in-motion-light-teal-green/-/A-93071012",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-coordinating-jersey-green-off-white/-/A-94431042",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-boxy-t-shirt-all-in-motion/-/A-93071009",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-beyond-ease-crop-boxy-t-shirt-all-in-motion-8482/-/A-94621425",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-messi-logo-short-sleeve-graphic-t-shirt-black/-/A-91616740",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-messi-silhouette-short-sleeve-graphic-t-shirt-pink/-/A-91616741",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-long-sleeve-attack-tee/-/A-90043777",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/mizuno-youth-girl-s-short-sleeve-attack-tee-3-0/-/A-92084988",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/love-all-tennis-youth-long-sleeve-sport-tee/-/A-1003153111",
      tags: "Athletic T-Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-strappy-crop-tank-160-top-all-in-motion-8482/-/A-93297429",
      tags: "Athletic Tank Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-racerback-160-tank-top-all-in-motion-8482/-/A-94334698",
      tags: "Athletic Tank Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-seamless-crop-tank-top-all-in-motion-8482/-/A-93070775",
      tags: "Athletic Tank Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-twist-front-ribbed-t-shirt-all-in-motion/-/A-93297584",
      tags: "Athletic Tank Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-muscle-tank-top-all-in-motion-8482/-/A-94369613",
      tags: "Athletic Tank Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-everyday-soft-bra-all-in-motion/-/A-91338686",
      tags: "Athletic Tank Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-tank-top-all-in-motion/-/A-94471782",
      tags: "Athletic Tank Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-everyday-soft-crop-tank-top-all-in-motion/-/A-93297151",
      tags: "Athletic Tank Tops, Girl",
    },
    {
      url: "https://www.target.com/p/destira-sport-tank/-/A-92088857",
      tags: "Athletic Tank Tops, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-tank-top-with-racerback-girls/-/A-84642697",
      tags: "Athletic Tank Tops, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-classics-wrap-top-girls/-/A-83927906",
      tags: "Athletic Tank Tops, Girl",
    },
  ];

  let allShopifyRows = [];
  let failedUrls = [];

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
      console.log("✅ Processed:", url);
    } catch (err) {
      console.error("❌ Failed:", url, err.message);
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
