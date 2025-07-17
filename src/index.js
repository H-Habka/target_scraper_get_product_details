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
      url: "https://www.target.com/p/girls-mid-rise-wide-leg-cargo-jeans-art-class/-/A-92955225",
      tags: "Cargo Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-straight-leg-cargo-pant-art-class/-/A-93342590",
      tags: "Cargo Pants, Girl",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-parachute-cargo-pants-olive-green/-/A-94405043",
      tags: "Cargo Pants, Girl",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-wide-leg-cargo-pants-olive-green/-/A-94708627",
      tags: "Cargo Pants, Girl",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-denim-parachute-cargo-pants-light-wash/-/A-93018543",
      tags: "Cargo Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-woven-cargo-pull-on-pants-cat-38-jack-8482-sage-green/-/A-94600613",
      tags: "Cargo Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-sweater-shorts-cat-38-jack-8482/-/A-93964116",
      tags: "Cargo Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-utility-cargo-shorts/-/A-1001828886",
      tags: "Cargo Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-utility-shorts/-/A-1002177438",
      tags: "Cargo Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-2pk-tank-bodysuit-with-abdominal-access-cat-38-jack-8482-white-gray/-/A-91192320",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-princess-leia-r2-d2-baby-girls-2-pack-zip-up-sleep-n-play-coveralls-newborn-to-infant/-/A-87049147",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/kids-adaptive-long-sleeve-bodysuit-with-abdominal-access-cat-jack/-/A-85722382",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/kids-adaptive-short-sleeve-bodysuit-with-abdominal-access-cat-jack/-/A-85722383",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girls-leotard-by-danz-n-motion-2465c-kennedy-ribbed-high-neck-classic/-/A-1002825437",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-sarabande-leotard-wear-moi/-/A-1001401196",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-baby-girls-3-pack-bodysuits-newborn-to-infant/-/A-93856542",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-pirouette-leotard-wear-moi/-/A-1001401371",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-cabriole-tank-leotard-wear-moi/-/A-1001401376",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-garcia-mesh-bodice-leotard-bloch-12/-/A-1003530655",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-kendra-mesh-back-leotard-bloch-6x-7/-/A-1003530692",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-primrose-cross-back-leotard-bloch/-/A-1003530788",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-laryisa-halterneck-leotard-bloch/-/A-1003530767",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-kendra-mesh-back-leotard-bloch/-/A-1003530672",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-mirella-paisley-camisole-leotard-bloch/-/A-1003530652",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-ladies-zip-tank-camo-leotard-bodysuit-bloch/-/A-1002669098",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-ladies-maya-lace-print-tank-leotard-bodysuit-bloch/-/A-1002669060",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-ladies-boat-neck-mesh-back-leotard-bodysuit-bloch/-/A-1002669059",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-ladies-high-neck-halter-leotard-bodysuit-bloch/-/A-1002669068",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-ladies-mock-neck-halter-leotard-bodysuit-bloch/-/A-1002669067",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-ladies-adalia-camo-boat-neck-cap-sleeve-leotard-bloch/-/A-1002669045",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-ladies-halter-leotard-bodysuit-bloch/-/A-1002669032",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-concerto-camisole-leotard-wear-moi/-/A-1001401349",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-concerto-camisole-leotard-wear-moi/-/A-1001401337",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-concerto-camisole-leotard-wear-moi/-/A-1001401334",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-pirouette-leotard-wear-moi/-/A-1001401311",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-garcia-mesh-bodice-leotard-bloch/-/A-1001401303",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-liberty-ribbed-bodysuit-petit-confection/-/A-1001376613",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-floral-embroidered-footies-petit-confection/-/A-1001354879",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-kids-love-love-love-long-sleeve-bodysuit-sweet-wink/-/A-1001116294",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girl-kids-my-first-valentine-s-day-long-sleeve-bodysuit-sweet-wink/-/A-1001116282",
      tags: "Child Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girls-straight-fit-uniform-pants-cat-jack/-/A-88012859",
      tags: "Chino Pants, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-skinny-slim-fit-uniform-chino-pants-cat-jack/-/A-87044862",
      tags: "Chino Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-quick-dry-straight-fit-uniform-pants-cat-38-jack-8482-navy-blue/-/A-90221753",
      tags: "Chino Pants, Girl",
    },
    {
      url: "https://www.target.com/p/galaxy-authentic-girl-s-super-stretch-pencil-skinny-uniform-pants/-/A-93320084",
      tags: "Chino Pants, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-active-performance-chino-pants/-/A-92889680",
      tags: "Chino Pants, Girl",
    },
    {
      url: "https://www.target.com/p/galaxy-authentic-3-pack-girl-s-super-stretch-pencil-skinny-uniform-pants/-/A-93370821",
      tags: "Chino Pants, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-skinny-fit-stretch-twill-pant/-/A-92384897",
      tags: "Chino Pants, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-stretch-pencil-pants/-/A-91378884",
      tags: "Chino Pants, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-straight-fit-stretch-twill-pant/-/A-92384555",
      tags: "Chino Pants, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-pull-on-utility-cargo-pants/-/A-93027682",
      tags: "Chino Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-uniform-chino-shorts-cat-jack/-/A-85402704",
      tags: "Chino Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-uniform-chino-shorts-cat-jack/-/A-87041973",
      tags: "Chino Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-patch-pocket-twill-bermuda-shorts-cat-38-jack-8482-white/-/A-94408556",
      tags: "Chino Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-pull-on-shorts/-/A-88500959",
      tags: "Chino Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-boys-flat-front-stretch-twill-short/-/A-92572853",
      tags: "Chino Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-stretch-chino-bermuda-shorts/-/A-87148230",
      tags: "Chino Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-boys-pull-on-twill-short/-/A-92384298",
      tags: "Chino Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-plain-front-blend-chino-shorts/-/A-86739538",
      tags: "Chino Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-active-chino-shorts/-/A-87673647",
      tags: "Chino Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-little-kids-slim-plain-front-blend-chino-shorts/-/A-86739549",
      tags: "Chino Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-boys-flat-front-stretch-performance-short/-/A-92384191",
      tags: "Chino Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-stretch-twill-bermuda-short/-/A-92572942",
      tags: "Chino Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-smocked-waist-tiered-circle-skirt-art-class/-/A-94151935",
      tags: "Circle Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-stitch-tiered-skirt-the-disney-collection-by-cat-jack-cream/-/A-94439683",
      tags: "Circle Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-smocked-waist-tiered-skort-art-class/-/A-94340877",
      tags: "Circle Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-soft-girls-jersey-twirly-skirt/-/A-91855820",
      tags: "Circle Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-novelty-circle-skirt/-/A-1003417822",
      tags: "Circle Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/dragonwing-harmony-skirt/-/A-1001647400",
      tags: "Circle Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/kids-39-tate-clogs-cat-38-jack-8482/-/A-94293377",
      tags: "Clogs, Girl",
    },
    {
      url: "https://www.target.com/p/kids-39-tate-clogs-cat-38-jack-8482-brown/-/A-94293389",
      tags: "Clogs, Girl",
    },
    {
      url: "https://www.target.com/p/women-s-dance-bra-by-silky-dance-convertible-bra-clear-straps-mocha-child-8-12/-/A-1003237179",
      tags: "Convertible Bras, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-top-and-slip-dress-cat-38-jack-8482/-/A-92974696",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-americana-star-knit-tank-shorts-set-cat-jack-red/-/A-94161290",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-2pc-bluey-americana-tank-top-and-skort-set-red-white-blue/-/A-94065288",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-2pc-bluey-strawberry-top-skort-set-ivory/-/A-93726539",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-palm-printed-top-skort-set-cat-jack/-/A-94161257",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-top-38-slip-dress-cat-38-jack-8482/-/A-94579584",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-2pc-bluey-lemon-gauze-tank-top-and-shorts-set-orange/-/A-94065372",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-2pc-hello-kitty-short-sleeve-t-shirt-and-shorts-set-pink/-/A-93871070",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-2pc-disney-minnie-mouse-americana-short-sleeve-t-shirt-and-shorts-set-red-white-blue/-/A-94065312",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-2pc-disney-minnie-mouse-top-skort-set-pink/-/A-93726616",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-2pc-disney-ariel-the-little-mermaid-top-skort-set-white/-/A-93726522",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-2pc-barbie-short-sleeve-t-shirt-and-shorts-set-purple/-/A-93871072",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-2pc-disney-princess-peplum-top-biker-shorts-set-green/-/A-94643152",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-2pc-disney-minnie-mouse-peplum-top-biker-shorts-set-pink/-/A-93726613",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-square-neck-t-shirt-and-skirt-outfit-set/-/A-1003497827",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/modern-moments-by-gerber-toddler-girls-2-piece-top-and-shorts-set/-/A-1001974161",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-girls-t-shirt-and-french-terry-shorts-outfit-set-toddler/-/A-87762864",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/gerber-toddler-girls-shirt-shorts-set-2-piece/-/A-91012765",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-t-shirt-and-french-terry-shorts-outfit-set-little-kid/-/A-87357309",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-t-shirt-and-french-terry-dolphin-shorts-outfit-set/-/A-1003146454",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-square-neck-t-shirt-and-skirt-outfit-set/-/A-1002902592",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/modern-moments-by-gerber-baby-girls-4-piece-flutter-sleeve-top-and-shorts-set/-/A-1001942637",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-t-shirt-and-french-terry-shorts-outfit-set-toddler/-/A-90888254",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/modern-moments-by-gerber-toddler-girls-2-piece-sweater-knit-hoodie-set/-/A-1001819081",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-minnie-mouse-t-shirt-and-shorts-outfit-set-toddler-to-big-kid/-/A-87280794",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-sanrio-girls-short-sleeve-shirt-and-skirt-2-piece-set-for-big-kids-size-10/-/A-1003488297",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-disney-mickey-mouse-friends-minnie-toddler-girl-outfit-ruffle-sleeve-t-shirt-and-striped-leggings-girls-clothing-sets/-/A-1003984819",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-ribbed-t-shirt-and-shorts-outfit-set/-/A-1001924551",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-t-shirt-and-french-terry-shorts-outfit-set-toddler/-/A-87357314",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-french-terry-t-shirt-and-shorts-outfit-set-sizes-2t-14-16/-/A-1002443548",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-short-sleeve-t-shirt-and-shorts-set-for-toddlers-and-big-kids/-/A-1003488272",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-french-terry-cropped-drop-shoulder-t-shirt-and-skirt-outfit-set/-/A-1002541270",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-velour-sweatshirt-and-jogger-pants-outfit-set-little-kid-to-big-kid/-/A-94111072",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mickey-mouse-friends-minnie-mouse-lilo-stitch-princess-winnie-the-pooh-girls-t-shirt-and-french-terry-shorts-outfit-set-toddler/-/A-89241907",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-ribbed-tank-top-and-french-terry-shorts-outfit-set/-/A-1002119632",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-girls-square-neck-t-shirt-and-smocked-skirt-outfit-set-toddler/-/A-1002902589",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-lilo-stitch-descendants-evie-uma-girls-t-shirt-and-french-terry-shorts-outfit-set-toddler-to-big-kid/-/A-87295682",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-ribbed-t-shirt-and-shorts-outfit-set/-/A-1001924562",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-baby-girls-t-shirt-and-french-terry-shorts-outfit-set-infant/-/A-87762857",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-t-shirt-and-leggings-outfit-set-infant-to-little-kid/-/A-87280677",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/modern-moments-by-gerber-toddler-girls-2-piece-ruffle-top-and-shorts-set-medium-rose-bouquet/-/A-1002425773",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/harry-potter-baby-girls-bodysuit-pants-and-headband-3-piece-outfit-set-newborn-to-infant/-/A-89647392",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-coco-floral-girls-t-shirt-and-tulle-mesh-skirt-little-kid-to-big-kid/-/A-90750100",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-t-shirt-and-twill-shorts-outfit-set-sizes-2t-10-12/-/A-1002119635",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-moana-princess-frozen-rapunzel-jasmine-belle-girls-t-shirt-tulle-skirt-and-scrunchie-3-piece-outfit-set-toddler/-/A-87274006",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-sanrio-girls-2-piece-short-sleeve-t-shirt-and-bike-shorts-set-for-big-kids/-/A-1003316768",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-hooded-cosplay-tank-top-and-french-terry-dolphin-shorts-outfit-set/-/A-1003528856",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mickey-mouse-friends-minnie-mouse-lilo-stitch-princess-winnie-the-pooh-baby-girls-t-shirt-and-french-terry-shorts-outfit-set-infant/-/A-89241906",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-disney-junior-french-terry-t-shirt-and-shorts-outfit-set-sizes-12-months-14-16/-/A-1002443505",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-lilo-stitch-descendants-evie-uma-girls-t-shirt-and-french-terry-shorts-outfit-set-toddler-to-big-kid/-/A-87295681",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-t-shirt-and-chambray-shorts-outfit-set-sizes-4-14-16/-/A-1002541152",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/modern-moments-by-gerber-toddler-girls-4-piece-drop-shoulder-top-and-shorts-set/-/A-1001974180",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-t-shirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-92721355",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/modern-moments-by-gerber-mommy-me-toddler-and-adult-2-piece-top-and-cropped-pants-set/-/A-1002428029",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-french-terry-cropped-drop-shoulder-t-shirt-and-skirt-outfit-set/-/A-1002542155",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-moana-princess-frozen-ariel-minnie-mouse-baby-girls-tank-top-and-french-terry-shorts-infant-to-little-kid/-/A-88283061",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-ghost-spider-girls-cosplay-tank-top-dolphin-active-and-french-terry-shorts-toddler-to-big-kid/-/A-89083412",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-scuba-cheerleader-tank-top-and-pleated-skirt/-/A-1003737917",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-girls-t-shirt-and-shorts-outfit-set-toddler-to-big-kid/-/A-89807044",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-ribbed-tank-top-and-french-terry-shorts-outfit-set/-/A-1002195079",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-moana-winnie-the-pooh-lion-king-pixar-toy-story-lilo-stitch-t-shirt-shorts-outfit-set-little-kid-to-big-kid/-/A-87289814",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-junior-cropped-boxy-t-shirt-and-bike-shorts-outfit-set/-/A-1002541431",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-coco-snickers-girls-t-shirt-and-chambray-shorts-outfit-set-little-kid/-/A-91080191",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/monster-jam-grave-digger-megalodon-sparkle-smash-drop-shoulder-t-shirt-and-bike-shorts-outfit-set/-/A-1002471260",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-t-shirt-and-short-set-for-toddler-little-and-big-kids-multicolor/-/A-1003316729",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rothschild-little-big-girls-ski-jacket-and-snowbib-snowsuit-sets/-/A-94133417",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/ms-rachel-girls-t-shirt-and-leggings-outfit-set-toddler/-/A-1004238768",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-sanrio-girls-short-sleeve-shirt-and-skirt-2-piece-set-for-big-kids-size-10/-/A-1003488289",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-baby-girls-ribbed-bodysuit-jogger-pants-and-headband-3-piece-outfit-set-newborn-to-infant/-/A-1003699163",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-french-terry-drop-shoulder-t-shirt-and-dolphin-shorts-outfit-set-sizes-2t-14-16/-/A-1001890905",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-disney-frozen-elsa-princess-toddler-girl-s-2-piece-outfits-sleeveless-tie-knot-tank-top-summer-short-coordinate-sets/-/A-1003952865",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-t-shirt-and-french-terry-shorts-outfit-set-little-kid/-/A-90888253",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/ms-rachel-girls-fleece-crossover-sweatshirt-and-jogger-pants-outfit-set-toddler/-/A-93847126",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-moana-princess-frozen-rapunzel-jasmine-belle-girls-t-shirt-tulle-skirt-and-scrunchie-3-piece-outfit-set-little-kid-to-big-kid/-/A-87274002",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-fleece-hoodie-and-leggings-outfit-set-little-kid-to-big-kid/-/A-87384308",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-french-terry-drop-shoulder-pullover-sweatshirt-t-shirt-and-shorts-3-piece-outfit-set-sizes-4t-10-12/-/A-1003418412",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-t-shirt-and-crop-top-shorts-outfit-set/-/A-1001887677",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-fleece-sweatshirt-and-jogger-pants-outfit-set-little-kid-to-big-kid/-/A-93161077",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-french-terry-drop-shoulder-pullover-sweatshirt-ribbed-t-shirt-and-shorts-3-piece-outfit-set-sizes-4t-10-12/-/A-1002879340",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-moana-frozen-girls-short-sleeve-shirt-and-tulle-skirt-with-headband-set-for-toddler-and-big-kids-size-3t/-/A-1003920590",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-tank-top-and-twill-shorts-outfit-set-infant-to-little-kid/-/A-87262661",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mickey-mouse-friends-minnie-mouse-lilo-stitch-princess-winnie-the-pooh-girls-t-shirt-and-french-terry-shorts-outfit-set-little-kid-to-big-kid/-/A-89241905",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-ribbed-peplum-t-shirt-and-shorts-outfit-set/-/A-1002541131",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-moana-girls-2-piece-shirt-and-shorts-set-for-toddler-and-big-kids/-/A-1003316878",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-fierce-bhaddie-flipside-unity-girls-crossover-fleece-sweatshirt-leggings-outfit-set-little-kid-to-big-kid/-/A-87276376",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-minnie-mouse-t-shirt-and-shorts-outfit-set-toddler-to-big-kid/-/A-87280787",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/harry-potter-baby-girls-ribbed-bodysuit-jogger-pants-and-headband-3-piece-outfit-set-newborn-to-infant/-/A-1003699185",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-girls-short-sleeve-t-shirt-and-legging-pants-set-for-toddlers-to-big-kids/-/A-1004381415",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-square-neck-tank-top-and-shorts-outfit-set/-/A-1003005609",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-baby-girls-t-shirt-and-shorts-outfit-set-infant-to-toddler/-/A-89483605",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-fleece-pullover-hoodie-and-pants-outfit-set-toddler-to-little-kid/-/A-90022574",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-fleece-boxy-sweatshirt-crop-top-and-jogger-pants-outfit-set-little-kid-to-big-kid/-/A-1001188497",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-t-shirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-89258259",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-tank-top-and-shorts-toddler-to-big-kid/-/A-89268210",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-princess-anna-elsa-girls-sweatshirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-88659990",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-t-shirt-and-shorts-outfit-set-infant-to-little-kid/-/A-87197464",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-moana-princess-frozen-ariel-minnie-mouse-baby-girls-tank-top-and-french-terry-shorts-infant-to-little-kid/-/A-88283059",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-floral-girls-peplum-t-shirt-and-french-terry-shorts-outfit-set-toddler/-/A-87232356",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-lilo-stitch-girls-tank-top-and-pleated-skort-outfit-set-toddler-to-big-kid/-/A-92000265",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-minnie-mouse-frozen-elsa-anna-girls-long-sleeve-shirt-vest-and-legging-pants-set-for-toddler-and-little-kids/-/A-1001307103",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-little-mermaid-peplum-fleece-sweatshirt-and-and-leggings-outfit-set-sizes-2t-10-12/-/A-93164418",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-matching-family-tank-top-and-shorts-outfit-set-little-kid-to-big-kid/-/A-91284821",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-tank-top-and-pleated-skort-outfit-set-little-kid-to-big-kid/-/A-92000268",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-t-shirt-and-crop-top-shorts-outfit-set/-/A-1001917689",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-boys-bluey-bingo-vintage-drop-shoulder-t-shirt-and-shorts-outfit-set-toddler-to-little-kid/-/A-92103804",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-jersey-athletic-tank-top-and-shorts-outfit-set/-/A-1002768851",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-french-terry-drop-shoulder-t-shirt-and-dolphin-shorts-outfit-set-little-kid/-/A-91799028",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-t-shirt-french-terry-shorts-and-scrunchie-3-piece-outfit-set-infant-to-big-kid/-/A-87252861",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-the-child-girls-t-shirt-and-leggings-outfit-set-little-kid/-/A-87195300",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-boxy-drop-shoulder-t-shirt-and-mesh-tulle-skort/-/A-1003210457",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-ribbed-t-shirt-and-shorts-outfit-set-sizes-2t-10-12/-/A-93438733",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-aqua-opal-q-t-pearl-q-t-girls-t-shirt-skirt-and-bag-3-piece-outfit-set-little-kid-to-big-kid/-/A-91427378",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-lilo-stitch-girls-french-terry-tank-top-shirt-dolphin-and-active-shorts-little-kid-to-big-kid/-/A-89003446",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/harry-potter-hedwig-owl-girls-fleece-sweatshirt-and-pleated-skirt-little-kid-to-big-kid/-/A-89895366",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/strawberry-shortcake-square-neck-t-shirt-and-skirt-outfit-set/-/A-1003757653",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-princess-anna-elsa-baby-girls-t-shirt-and-shorts-outfit-set-toddler/-/A-89299150",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-metallic-print-t-shirt-and-tulle-mesh-skirt-little-kid-to-big-kid/-/A-93131233",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-coco-snickers-girls-t-shirt-and-chambray-shorts-outfit-set-toddler/-/A-91080227",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-2fer-drop-shoulder-fleece-sweatshirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-1000558464",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-queen-elsa-little-girls-cosplay-gown-and-headband-7-8/-/A-85236466",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-square-neck-t-shirt-and-skirt-little-kid-to-big-kid/-/A-92302291",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-t-shirt-and-french-terry-shorts-outfit-set-toddler-to-big-kid/-/A-89603115",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-princess-frozen-little-mermaid-t-shirt-leggings-and-scrunchie-3-piece-outfit-set-infant-to-big-kid/-/A-87908624",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-fleece-sweatshirt-and-jogger-pants-set-little-kid-to-big-kid/-/A-90567410",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-girls-sweatshirt-and-pants-set-for-little-and-big-girls/-/A-1001297837",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-floral-girls-peplum-t-shirt-and-french-terry-shorts-outfit-set-little-kid-to-big-kid/-/A-87232361",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-everest-skye-girls-pullover-crossover-fleece-hoodie-and-leggings-outfit-set-toddler-to-little-kid/-/A-85411004",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-girl-s-frozen-2-elsa-anna-and-olaf-graphic-printed-shirt-and-shorts-coordinates-set-blue-and-gray-size-2t/-/A-92538703",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rocky-thermal-underwear-for-girls-long-johns-fleece-lined-set-shirt-pants-base-layer/-/A-93253190",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-winnie-the-pooh-minnie-mouse-lilo-stitch-peplum-t-shirt-and-bike-shorts-outfit-set-newborn-to-big-kid/-/A-91127474",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-baby-girls-french-terry-snap-short-overalls-t-shirt-and-headband-3-piece-outfit-set-newborn-to-infant/-/A-87499703",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-velour-drop-shoulder-sweatshirt-and-jogger-pants-outfit-set-little-kid-to-big-kid/-/A-1000179133",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-girls-skirt-sets-tank-tops-and-pleated-skirts-2-piece-outfits-sleeveless-tops-school-uniform-skirts-clothing-sets/-/A-1003334178",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-lilo-stitch-descendants-evie-uma-girls-t-shirt-and-french-terry-shorts-outfit-set-toddler-to-big-kid/-/A-1003146230",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/kids-girls-tennis-golf-dress-outfit-sleeveless-dress-with-pockets-athletic-skorts-and-polo-tank-top-sets/-/A-1002515889",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-moana-winnie-the-pooh-lion-king-pixar-toy-story-lilo-stitch-t-shirt-shorts-outfit-set-little-kid-to-big-kid/-/A-87289820",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-anna-frozen-girls-t-shirt-and-leggings-outfit-set-infant-to-little-kid/-/A-89496796",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/strawberry-shortcake-girls-square-neck-t-shirt-and-smocked-skirt-outfit-set-toddler/-/A-1003757658",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-crewneck-sweater-and-pants-set-for-infant-toddlers-and-big-kids/-/A-1001307593",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-mulan-rapunzel-jasmine-ariel-belle-cinderella-tiana-tinker-girls-pullover-hoodie-legging-toddler-to-big-kid/-/A-85048667",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/gerber-toddler-girls-2-piece-shirt-and-shorts-set/-/A-1002302788",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-disney-junior-t-shirt-and-mesh-shorts-outfit-set-sizes-2t-14-16/-/A-1000384993",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-tank-top-satin-skirt-and-crossbody-bag-3-piece-outfit-set-sizes-2t-14-16/-/A-1001387281",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-t-shirt-and-bike-shorts-outfit-set/-/A-1001924912",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-fleece-sweatshirt-and-jogger-pants-outfit-set-toddler/-/A-93161073",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-minnie-mouse-girls-fleece-sweatshirt-and-jogger-pants-little-kid-to-big-kid/-/A-88156138",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-cropped-boxy-t-shirt-and-bike-shorts-outfit-set/-/A-1002541598",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-queen-bee-fierce-unity-girls-fleece-sweatshirt-and-jogger-pants-set-little-kid-to-big-kid/-/A-85123620",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-fleece-zip-up-hoodie-and-jogger-pants-set-little-kid-to-big-kid/-/A-88155652",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-minnie-mouse-winnie-the-pooh-rapunzel-eeyore-piglet-fleece-sweatshirt-and-pants-set-infant-to-little-kid/-/A-89618331",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-minnie-mouse-t-shirt-and-shorts-outfit-set-toddler-to-big-kid/-/A-87280790",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-sanrio-girls-2-piece-short-sleeve-t-shirt-and-shorts-set-for-little-and-big-kids/-/A-1003316788",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-floral-girls-t-shirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-92672200",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-t-shirt-and-leggings-outfit-set-toddler/-/A-88282632",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-baby-girls-pullover-fleece-sweatshirt-and-leggings-outfit-set-infant-to-toddler/-/A-87255187",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-fleece-hoodie-and-leggings-outfit-set-toddler/-/A-87384305",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-moana-princess-frozen-ariel-minnie-mouse-baby-girls-tank-top-and-french-terry-shorts-infant-to-little-kid/-/A-88283060",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-disney-junior-ribbed-t-shirt-and-french-terry-shorts-outfit-set/-/A-1002119487",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-daisy-duck-donald-duck-goofy-pluto-girls-fleece-sweatshirt-leggings-outfit-set-toddler-to-little-kid/-/A-92781787",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-fleece-sweatshirt-and-leggings-outfit-set-toddler/-/A-1000133350",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/the-smurfs-girls-t-shirt-and-french-terry-shorts-outfit-set-toddler/-/A-1002725996",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-t-shirt-and-leggings-outfit-set-toddler/-/A-92721303",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-fleece-sweatshirt-and-skirt-toddler-to-big-kid/-/A-89895349",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sesame-street-big-bird-cookie-monster-elmo-girls-pullover-t-shirt-and-leggings-outfit-set-toddler/-/A-89487855",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-fleece-sweatshirt-and-jogger-pants-set-toddler/-/A-90567408",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-encanto-mirabel-girls-pullover-fleece-hoodie-and-leggings-outfit-set-little-kid-to-big-kid/-/A-88164827",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mickey-mouse-friends-minnie-toddler-girls-hoodie-leggings-heather-grey/-/A-84921101",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-t-shirt-and-twill-skirt/-/A-1003006314",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-daisy-duck-donald-duck-goofy-pluto-girls-fleece-sweatshirt-leggings-outfit-set-toddler-to-little-kid/-/A-90023919",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-cakey-cat-mercat-girls-pullover-sweatshirt-leggings-outfit-toddler-to-little-kid/-/A-87403848",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-moana-winnie-the-pooh-lion-king-pixar-toy-story-lilo-stitch-t-shirt-shorts-outfit-set-little-kid-to-big-kid/-/A-88327283",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-diva-drag-racer-bon-bon-fierce-fleece-pullover-hoodie-and-leggings-outfit-set-little-kid-to-big-kid/-/A-85236713",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-classics-minnie-mouse-lilo-stitch-winnie-the-pooh-princess-ariel-tinker-bell-t-shirt-shorts-infant-to-little-kid/-/A-90554587",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-t-shirt-and-flare-pants-outfit-set-little-kid-to-big-kid/-/A-1000179610",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-baby-girls-t-shirt-and-shorts-outfit-set-infant-to-toddler/-/A-89483601",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/gerber-baby-and-toddler-girls-gauze-dress-diaper-cover-set-2-piece/-/A-90991628",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-fleece-sweatshirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-1000133352",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-long-sleeve-shirt-and-legging-pants-set-for-toddlers-and-big-kids/-/A-1001307544",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-little-toddler-girls-clothes-butterfly-sleeveless-dress-top-and-floral-print-short-set-girls-outfits-3-8y/-/A-1003323846",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-lilo-stitch-little-mermaid-ariel-floral-girls-t-shirt-and-french-terry-shorts-outfit-set-little-kid-to-big-kid/-/A-90888309",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-bluey-girls-fleece-hoodie-and-leggings-outfit-set-little-kid-to-big-kid/-/A-85171894",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-girls-usa-made-soft-cozy-thermal-2-piece-long-johns/-/A-90509865",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-t-shirt-and-french-terry-shorts-outfit-set/-/A-1002541446",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-tank-top-and-skirt-little-kid-to-big-kid/-/A-93870939",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-girls-short-sleeve-t-shirt-and-french-terry-shorts-set-for-toddler-and-big-kids/-/A-1003316892",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-t-shirt-and-shorts-outfit-set-little-kid-to-big-kid/-/A-1001925093",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-girls-clothes-2pcs-3d-short-sleeve-crop-top-unicorn-girl-bell-bottom-summer-outfit-toddler-to-big-kids-3-8y/-/A-1003290121",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-long-sleeve-striped-pullover-and-knit-cargo-pants-set-cat-38-jack-8482-navy-blue/-/A-93574472",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/gabby-s-dollhouse-gabby-pandy-paws-girls-zip-up-fleece-hoodie-t-shirt-and-leggings-3-piece-outfit-set-toddler-to-big-kid/-/A-88155695",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-wonder-woman-girls-tank-top-and-dolphin-active-french-terry-shorts-little-kid-to-big-kid/-/A-88825519",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-encanto-mirabel-luisa-isabela-girls-pullover-fleece-sweatshirt-and-leggings-outfit-set-toddler/-/A-87384333",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-summer-baby-kids-girls-plaid-shirt-and-shorts-clothing-set/-/A-1003174663",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-5-piece-mix-and-match-outfit-set-with-2-tops-leggings-shorts-scrunchie-for-big-kids/-/A-1004025238",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-daisy-duck-donald-duck-goofy-pluto-girls-fleece-sweatshirt-leggings-outfit-set-toddler-to-little-kid/-/A-90023924",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-little-girl-s-2-piece-fashion-top-and-dolphin-shorts-sets/-/A-92779303",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-peplum-t-shirt-and-leggings-outfit-set-toddler-to-little-kid/-/A-89414223",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-rubble-marshall-chase-girls-t-shirt-and-leggings-outfit-set-toddler/-/A-87195717",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-princess-frozen-little-mermaid-t-shirt-leggings-and-scrunchie-3-piece-outfit-set-infant-to-big-kid/-/A-87908627",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-nickelodeon-girls-mix-and-match-5-piece-outfit-set-with-tops-leggings-shorts-scrunchie-for-toddler-and-big-kid/-/A-1004025246",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-disney-junior-t-shirt-and-skirt/-/A-1002119583",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-baby-girls-t-shirt-and-leggings-outfit-set-infant/-/A-88282634",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-moana-princess-rapunzel-snow-white-raya-and-the-last-dragon-baby-girls-peplum-t-shirt-and-french-terryshorts-outfit-set-infant/-/A-87232365",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-l-o-l-surprise-toddler-kid-girls-2pcs-character-print-top-with-mesh-tutu-skirt-outfit-set/-/A-1002839479",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-velour-zip-up-sequin-hoodie-t-shirt-and-flared-pants-set-for-toddler-to-big-kids/-/A-1001307095",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/imagikids-birthday-girl-outfit-t-shirt-tulle-tutu-skirt-headband-satin-sash-set-little-kid-to-big-kid-sizes/-/A-1004220678",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-coco-floral-girls-t-shirt-and-leggings-outfit-set-toddler-to-big-kid/-/A-90320472",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/gerber-toddler-girls-3-piece-shirt-and-shorts-set/-/A-1002332804",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-drop-shoulder-t-shirt-and-bike-shorts-outfit-set/-/A-1002471274",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-peplum-t-shirt-and-shorts-outfit-set-little-kid-to-big-kid/-/A-91318373",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/pinkfong-baby-shark-girls-t-shirt-and-leggings-outfit-set-toddler/-/A-88335641",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/pinkfong-baby-shark-baby-girls-graphic-t-shirt-shorts-set-white-blue/-/A-85257160",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/imagikids-girls-short-sleeve-t-shirt-and-chambray-shorts-2-piece-outfit-set-toddler-sizes/-/A-1003757793",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/gerber-baby-and-toddler-girls-2-piece-knit-sweater-pant-set/-/A-89651384",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/kensie-little-girl-s-2-piece-french-terry-cropped-top-and-tulle-skirt-sets/-/A-93003121",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-july-4th-girls-peplum-t-shirt-and-twill-shorts-outfit-set-little-kid-to-big-kid/-/A-91427312",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-princess-anna-elsa-baby-girls-t-shirt-and-shorts-outfit-set-little-kid/-/A-89299151",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-square-neck-t-shirt-and-skirt-toddler/-/A-92302281",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-avengers-spider-man-graphic-t-shirt-leggings/-/A-85069770",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-girls-t-shirt-and-leggings-outfit-set-toddler/-/A-85039022",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-descendants-girls-slip-v-neck-satin-dress-and-drop-shoulder-t-shirt-outfit-set-little-kid-to-big-kid/-/A-94071452",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-t-shirt-and-skirt-sizes-2t-14-16/-/A-1002725736",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-spider-gwen-girls-graphic-t-shirt-tulle-skirt-and-headband-3-piece-outfit-set-toddler-to-big-kid/-/A-88298263",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-princess-moana-little-mermaid-floral-girls-t-shirt-and-leggings-outfit-set-toddler-to-big-kid/-/A-87245920",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-sanrio-girls-2-piece-short-sleeve-t-shirt-and-shorts-set-for-little-and-big-kids/-/A-1003316796",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/gerber-baby-and-toddler-girls-2-piece-sweatshirt-active-pant-set/-/A-89651399",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/kickoff-thermal-underwear-for-kids-thermals-top-bottom-set-girls-thermal-underwear-set-kids-long-underwear-base-layer-kids-pajamas/-/A-1001263594",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-minnie-mouse-girls-t-shirt-and-flare-pants-outfit-set-little-kid-to-big-kid/-/A-1000179420",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-french-terry-sweatshirt-and-shorts-infant-to-big-kid/-/A-90801565",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-minnie-mouse-winnie-the-pooh-rapunzel-eeyore-piglet-fleece-sweatshirt-and-pants-set-infant-to-little-kid/-/A-89618328",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mickey-mouse-friends-minnie-little-girls-hoodie-leggings-heather-grey/-/A-84921124",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-princess-anna-elsa-girls-sweatshirt-and-leggings-outfit-set-toddler/-/A-88659989",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-t-shirt-french-terry-shorts-and-scrunchie-3-piece-outfit-set-infant-to-big-kid/-/A-87252857",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-girls-summer-outfits-animal-print-t-shirt-short-sleeve-top-and-leopard-print-biker-kids-clothing-sets-3-8y/-/A-1003290145",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-girls-short-sleeve-t-shirt-and-french-terry-shorts-set-for-toddler-and-big-kids/-/A-1003316912",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-mouse-t-shirt-and-leggings-outfit-set-infant-to-big-kid/-/A-92302295",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/gerber-baby-toddler-girls-fleece-set-2-piece/-/A-92918604",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/gerber-toddler-girls-dress-top-and-legging-matching-set-3-piece/-/A-93419740",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-nightmare-before-christmas-fleece-hoodie-leggings-set/-/A-85703106",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-winnie-the-pooh-floral-girls-peplum-tank-top-and-cotton-gauze-pants-outfit-set-little-kid-to-big-kid/-/A-92950142",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-baby-girls-t-shirt-and-shorts-outfit-set-infant-to-toddler/-/A-88068226",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-jumpsuit-and-fleece-shrug-outfit-set-little-kid-to-big-kid/-/A-92954439",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-moana-frozen-girls-short-sleeve-shirt-and-tulle-skirt-with-headband-set-for-toddler-and-big-kids-size-3t/-/A-1003920602",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-avengers-spider-man-spider-gwen-captain-america-miles-morales-girls-cosplay-t-shirt-and-leggings-toddler-to-little-kid/-/A-89489636",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-minnie-mouse-girls-pullover-hoodie-woobie-and-flare-pants-outfit-set-little-kid-to-big-kid/-/A-1000179071",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-ribbed-t-shirt-and-french-terry-shorts-outfit-set/-/A-1002034849",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-ghost-spider-girls-cosplay-tank-top-dolphin-active-and-french-terry-shorts-toddler-to-big-kid/-/A-89083414",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-anna-frozen-girls-t-shirt-and-leggings-outfit-set-infant-to-little-kid/-/A-89496794",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-mulan-rapunzel-jasmine-ariel-belle-cinderella-tiana-tinker-girls-pullover-hoodie-legging-toddler-to-big-kid/-/A-85048674",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-girls-fleece-sweatshirt-and-pants-set-little-kid-to-big-kid/-/A-88155849",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-encanto-isabela-luisa-mirabel-sequin-pullover-fleece-hoodie-and-leggings-outfit-set-little-kid-to-big-kid/-/A-88256279",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-little-girls-jersey-athletic-tank-top-and-shorts-outfit-set-red-minnie-mouse-7-8/-/A-1002188082",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-fierce-girls-t-shirt-and-flare-pants-outfit-set-little-kid-to-big-kid/-/A-1000179387",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/jurassic-world-jurassic-park-t-rex-girls-fleece-pullover-hoodie-and-jogger-pants-set-little-kid-to-big-kid/-/A-87357034",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-pullover-fleecehoodie-and-leggings-outfit-set-toddler-to-big-kid/-/A-89979855",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-queen-bee-girls-jumpsuit-and-fleece-shrug-outfit-set-little-kid-to-big-kid/-/A-92954438",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-girls-fleece-hoodie-and-leggings-outfit-set-little-kid-to-big-kid/-/A-89712939",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-star-wars-the-child-girls-fleece-sweatshirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-85052062",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/scooby-doo-scooby-doo-girls-cosplay-t-shirt-dress-and-leggings-outfit-set-little-kid-to-big-kid/-/A-87740799",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-wish-asha-star-girls-fleece-sweatshirt-and-pants-set-toddler-to-little-kid/-/A-90005492",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-avengers-spider-man-graphic-t-shirt-leggings/-/A-85069769",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-tiered-tunic-and-legging-set-purple-multicolor-stripe/-/A-93409799",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-girls-pullover-fleece-sweatshirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-87132511",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rothschild-little-big-girls-design-ski-jacket-and-snowbib-snowsuit-sets/-/A-1000122722",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-moana-girls-t-shirt-and-leggings-outfit-set-toddler/-/A-1004220666",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-wonder-woman-girls-costume-t-shirt-tulle-skirt-headband-and-cape-4-piece-set-toddler/-/A-85415729",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/modern-moments-by-gerber-toddler-girls-2-piece-sweater-set/-/A-1001816395",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-peplum-t-shirt-and-leggings-outfit-set-toddler-to-little-kid/-/A-89414225",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-wish-asha-star-girls-fleece-pullover-hoodie-and-jogger-pants-set-little-kid-to-big-kid/-/A-90541194",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-the-child-girls-t-shirt-and-leggings-outfit-set-toddler/-/A-87195304",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/nickelodeon-paw-patrol-skye-everest-girls-cosplay-tulle-costume-dress-and-tights-infant-to-little-kid/-/A-89713033",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-t-shirt-and-chambray-shorts-outfit-set-sizes-2t-10-12/-/A-1002741476",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-moana-girls-t-shirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-1004220659",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rothschild-little-big-girls-foil-print-ski-jacket-and-snowbib-snowsuit-sets/-/A-94251173",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-abby-cadabby-t-shirt-tulle-skirt-and-scrunchie-3-piece-outfit-set-infant-to-little-kid/-/A-87095086",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-harry-potter-girls-t-shirt-tulle-skirt-and-headband-3-piece-outfit-set-little-kid-to-big-kid/-/A-87280243",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-encanto-mirabel-girls-t-shirt-and-leggings-outfit-set-toddler/-/A-89471595",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-t-shirt-and-shorts-outfit-set-infant-to-little-kid/-/A-87197469",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/the-smurfs-t-shirt-and-french-terry-shorts-outfit-set/-/A-1002726000",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-white-gingerbread-fair-isle-sweater-jegging-set/-/A-94072678",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-full-eyelash-sweater-w-lurex-star-graphic-legging-set/-/A-1000031525",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-frozen-princess-girls-fleece-sweatshirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-93670428",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-sequin-pullover-fleece-hoodie-leggings-outfit-set-toddler-to-big-kid/-/A-88335418",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-lurex-sweater-w-ombre-smiley-graphic-legging-set/-/A-93732711",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-t-shirt-and-dolphin-active-french-terry-shorts-outfit-set-toddler-to-little-kid/-/A-88993083",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-little-and-big-girls-graphic-interchangeable-3d-star-top-faux-leather-skirt-set/-/A-1000080131",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-t-shirt-and-chambray-shorts-outfit-set-sizes-2t-10-12/-/A-1002304966",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/gabby-s-dollhouse-little-girls-raglan-sweatshirt-leggings-set-white/-/A-85562315",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-ghost-spider-girls-t-shirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-87276304",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/peppa-pig-girls-pullover-crossover-fleece-sweatshirt-and-leggings-outfit-set-little-kid/-/A-87294122",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-t-shirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-88282633",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-ice-cream-interchangeable-top-tutu-skirt-set/-/A-94088276",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-t-shirt-and-short-set-for-infant-toddler-little-and-big-girls-pink/-/A-1003316720",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-spider-gwen-girls-fleece-sweatshirt-and-pants-set-little-kid-to-big-kid/-/A-88155855",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lion-king-simba-nala-big-girls-pullover-fleece-hoodie-and-leggings-outfit-set-yellow-white-10-12/-/A-85050394",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-fleece-pullover-sweatshirt-pants-set-gray/-/A-85315903",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sesame-street-big-bird-cookie-monster-elmo-girls-pullover-t-shirt-and-leggings-outfit-set-little-kid/-/A-89487854",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-princess-anna-elsa-girls-zip-up-vest-puffer-t-shirt-and-leggings-3-piece-outfit-set-toddler/-/A-88290025",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-t-shirt-and-french-terry-shorts-outfit-set-blue-pink/-/A-87610274",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-junior-girls-velour-zip-up-hoodie-and-jogger-pants-outfit-set-little-kid-to-big-kid-sizes-2t-14-16/-/A-93048754",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-nightmare-before-christmas-sally-jack-skellington-girls-t-shirt-and-leggings-outfit-set-toddler-to-little-kid/-/A-87197637",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-teal-jersey-dress-w-rainbow-graphic-dress-set/-/A-93286411",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-ruffle-top-and-velvet-bell-bottom-pant-set/-/A-94229738",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-zip-up-t-shirt-and-jogger-fleece-pants-3-piece-toddler-to-big-kid/-/A-90630903",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/pinkfong-mommy-shark-baby-shark-girls-french-terry-pullover-hoodie-poly-hair-felt-teeth-fin-on-hat-costume-and-leggings-outfit-set-little-kid/-/A-87677066",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-zip-up-vest-puffer-t-shirt-and-leggings-3-piece-outfit-set-infant-to-big-kid/-/A-87660664",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-zip-up-vest-puffer-t-shirt-and-leggings-3-piece-outfit-set-infant-to-big-kid/-/A-87660661",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-sanrio-girls-mix-and-match-4-piece-outfit-set-with-2-tops-leggings-and-shorts-for-big-kids/-/A-1004381444",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/roaring-fun-leopard-print-top-and-ruffle-short-set-mia-belle-girls/-/A-1004605887",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/perfect-little-patriot-stars-top-and-striped-short-set-mia-belle-girls/-/A-1004342336",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rosewood-linen-ruffle-halter-top-and-skirt-set-mia-belle-girls/-/A-1004605298",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-spider-gwen-girls-graphic-t-shirt-tulle-skirt-and-headband-3-piece-outfit-set-toddler-to-big-kid/-/A-88298268",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-t-shirt-and-leggings-outfit-set-sizes-2t-10-12/-/A-1001314949",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-gabby-girls-t-shirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-87113783",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-girls-fleece-hoodie-and-leggings-outfit-set-toddler/-/A-89712938",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/harry-potter-t-shirt-and-bike-shorts-outfit-set/-/A-1001924525",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/gerber-toddler-girls-tops-and-pant-3-piece-set/-/A-93385622",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/peppa-pig-girls-graphic-t-shirt-and-shorts-set-little-kid-to-big-kid/-/A-87131618",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-baby-girls-fleece-sweatshirt-and-leggings-outfit-set-infant/-/A-1000133351",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-zip-up-vest-puffer-t-shirt-and-leggings-3-piece-outfit-set-infant-to-big-kid/-/A-87660666",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-moon-girl-and-devil-dinosaur-girls-t-shirt-and-bike-shorts-outfit-set-little-kid-to-big-kid/-/A-89240704",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mickey-mouse-friends-minnie-baby-girls-hoodie-leggings-heather-grey/-/A-84921104",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-pinkie-pie-rainbow-dash-girls-t-shirt-and-bike-shorts-outfit-set-toddler/-/A-89713615",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-t-shirt-french-terry-shorts-and-scrunchie-3-piece-outfit-set-infant-to-big-kid/-/A-87252854",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-the-aristocats-minnie-mouse-girls-t-shirt-and-skirt-little-kid-to-big-kid/-/A-92950062",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-l-o-l-surprise-toddler-kids-girls-clothes-2pcs-outfits-ruffle-sleeveless-top-and-plaid-print-shorts-set/-/A-1002845946",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-girls-cosplay-t-shirt-dress-and-leggings-outfit-set-little-kid/-/A-87741720",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-fleece-sweatshirt-and-leggings-outfit-set-toddler-to-big-kid/-/A-89767678",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-girls-2-piece-floral-flower-hawaiian-outfits-crop-top-and-short-sets-girls-summer-outfits-size-4-8y/-/A-1003290129",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-little-girl-s-3-piece-vest-long-sleeve-top-and-legging-sets/-/A-92993098",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dc-comics-robin-girls-cosplay-t-shirt-dress-leggings-and-cape-3-piece-little-kid-to-big-kid/-/A-87764829",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-snow-white-girls-short-sleeve-t-shirt-and-french-terry-shorts-set-for-toddler-and-big-kids/-/A-1003316901",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-anna-elsa-frozen-girls-graphic-t-shirt-and-leggings-outfit-set-toddler-to-big-kid/-/A-89496790",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-rubble-marshall-chase-girls-t-shirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-87195713",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-baby-grogu-hoodie-leggings/-/A-85038464",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-winnie-the-pooh-minnie-mouse-mickey-mouse-girls-velour-sweatshirt-and-jogger-pants-outfit-set-little-kid-to-big-kid/-/A-1000179386",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-t-shirt-and-shorts-outfit-set-infant-to-little-kid/-/A-90291383",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-kitty-fairy-girls-tank-top-and-shorts-outfit-set-little-kid-to-big-kid/-/A-88296603",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-t-shirt-and-leggings-outfit-set-infant-to-big-kid/-/A-85011895",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/harry-potter-hedwig-owl-girls-t-shirt-and-french-terry-shorts-outfit-set-little-kid-to-big-kid/-/A-89083059",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-tiered-tunic-and-legging-set-white-black-hello/-/A-93409800",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-velour-matching-family-zip-up-hoodie-pants-outfit-set-adult/-/A-89832170",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-toddler-little-big-girls-3-piece-hoodie-tee-legging-sets/-/A-1002862506",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-girls-fleece-cosplay-pullover-hoodie-and-jogger-pants-outfit-set-little-kid-to-big-kid/-/A-93438426",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/jurassic-world-jurassic-park-t-rex-girls-fleece-pullover-hoodie-and-jogger-pants-set-toddler/-/A-87357041",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/peppa-pig-girls-fleece-hoodie-and-leggings-outfit-set/-/A-87196400",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-cakey-cat-mercat-girls-pullover-sweatshirt-leggings-outfit-toddler-to-little-kid/-/A-87403853",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/red-gingham-bow-peplum-top-and-navy-biker-short-set-mia-belle-girls/-/A-1004457479",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-boxy-t-shirt-and-flare-pants-outfit-set-little-kid-to-big-kid/-/A-93871273",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-neon-qt-bon-bon-diva-queen-bee-touchdown-roller-sk8er-t-shirt-and-leggings-outfit-set-toddler-to-big-kid/-/A-88164420",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-baby-girls-t-shirt-and-chambray-shorts-outfit-set-infant-to-big-kid/-/A-93783172",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-t-shirt-and-leggings-outfit-set/-/A-1003827000",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-peplum-t-shirt-and-bike-shorts-outfit-set-infant-to-big-kid/-/A-89133940",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/imagikids-girls-short-sleeve-t-shirt-and-chambray-shorts-2-piece-outfit-set-little-kid-to-big-kid-sizes/-/A-1003757791",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-crossover-tank-top-dolphin-and-french-terry-shorts-little-kid-to-big-kid/-/A-93164313",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-christmas-little-girls-fleece-sweatshirt-legging-set-red/-/A-85124224",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-winnie-the-pooh-t-shirt-and-pants-newborn-to-toddler/-/A-91503064",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-encanto-mirabel-luisa-isabella-girls-t-shirt-and-shorts-outfit-set-toddler-to-big-kid/-/A-86508087",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-bluey-girls-t-shirt-leggings-and-scrunchie-3-piece-outfit-set-toddler-to-little-kid/-/A-85147748",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-top-and-velvet-bell-bottom-pant-set/-/A-94229741",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-encanto-mirabel-luisa-isabela-girls-pullover-fleece-sweatshirt-and-leggings-outfit-set-little-kid/-/A-87384329",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-spider-gwen-ghost-spider-girls-short-sleeve-t-shirt-and-french-terry-shorts-set-for-big-kids/-/A-1003316817",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-minnie-mouse-winnie-the-pooh-rapunzel-eeyore-piglet-fleece-sweatshirt-and-pants-set-infant-to-little-kid/-/A-89619224",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dreamworks-trolls-little-girls-2-piece-long-sleeve-top-and-legging-sets/-/A-93634904",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-unicorn-accessory-top-and-skirt-set/-/A-1000080129",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/blippi-girls-2-piece-hoodie-and-pant-sets-for-toddlers-and-little-kids-peach/-/A-1001307528",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/smartest-apple-puff-sleeve-top-and-skort-set-mia-belle-girls/-/A-1004233799",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/seaside-sunset-bow-legging-set-mia-belle-girls/-/A-1004365054",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-disney-junior-boxy-drop-shoulder-t-shirt-and-mesh-tulle-skort/-/A-1002768556",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-descendants-uma-audrey-evie-minnie-mouse-girls-t-shirt-skirt-and-headband-3-piece-outfit-set-toddler-to-big-kid/-/A-87245373",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/twirl-in-lilacs-tweed-blazer-and-tutu-skirt-set-mia-belle-girls/-/A-1002577049",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/confident-little-diva-halter-tweed-top-and-short-set-mia-belle-girls/-/A-1002460220",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/peppa-pig-pullover-long-sleeve-graphic-t-shirt-leggings-pink-purple/-/A-87290840",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/ms-rachel-baby-girls-fleece-crossover-sweatshirt-and-jogger-pants-outfit-set-infant/-/A-93847122",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-moana-frozen-girls-short-sleeve-shirt-and-tulle-skirt-with-headband-set-for-toddler-and-big-kids-size-3t/-/A-1003920596",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-mulan-rapunzel-jasmine-ariel-belle-cinderella-tiana-tinker-girls-pullover-hoodie-legging-toddler-to-big-kid/-/A-85048668",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-interchangeable-heart-ruffle-top-plaid-skirt-with-sock-set/-/A-94229747",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-minnie-mouse-little-mermaid-elsa-princess-anna-peplum-t-shirt-shorts-scrunchie-3-pc-set-infant-to-big-kid/-/A-88148692",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-cute-and-versatile-two-piece-set-flowers-printed-top-and-solid-color-pants-for-baby-girls-and-toddlers/-/A-1002889002",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-navy-terry-sweatshirt-dress-set/-/A-93286430",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mickey-mouse-friends-minnie-mouse-girls-t-shirt-and-leggings-outfit-set-little-kid/-/A-88290896",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-oatmeal-purple-ombre-striped-sweater-legging-set/-/A-93720226",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-everest-girls-cosplay-costume-t-shirt-mesh-skirt-tulle-cape-and-mask-4-piece-outfit-set-toddler-to-big-kid/-/A-87281312",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-short-sleeve-top-and-tulle-skirt-with-headband-set-blue-3t/-/A-1003488311",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-t-shirt-and-bike-shorts-outfit-set/-/A-1001924951",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-big-girl-s-3-piece-t-shirt-tank-top-and-short-sets/-/A-92725465",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-minnie-mouse-little-mermaid-elsa-princess-anna-peplum-t-shirt-shorts-scrunchie-3-pc-set-infant-to-big-kid/-/A-89191818",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-waffle-knit-t-shirt-and-shorts-outfit-set/-/A-1002195087",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-fleece-boxy-sweatshirt-crop-top-and-flare-pants-outfit-set-little-kid-to-big-kid/-/A-1001176615",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-boxy-tee-t-shirt-and-pleated-skort-little-kid-to-big-kid/-/A-92749761",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/schoolgirl-chic-puff-sleeve-top-and-striped-skort-set-mia-belle-girls/-/A-1004233805",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-junior-french-terry-zip-up-hoodie-and-pants-outfit-set-little-kid-to-big-kid/-/A-1002541375",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/garfield-girls-t-shirt-and-dolphin-french-terry-shorts-outfit-set-little-kid-to-big-kid/-/A-92302310",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-terry-button-up-set/-/A-1002208635",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-purple-long-sleeve-top-w-skirt-set/-/A-93286442",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mickey-mouse-friends-minnie-mouse-girls-pullover-fleece-hoodie-t-shirt-and-leggings-3-piece-outfit-set-little-kid-to-big-kid/-/A-87668270",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/gabby-s-dollhouse-gabby-pandy-paws-girls-zip-up-fleece-hoodie-t-shirt-and-leggings-3-piece-outfit-set-toddler-to-big-kid/-/A-88155691",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-girls-tank-top-skirt-and-bag-3-piece-outfit-set-little-kid-to-big-kid/-/A-92779810",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-baby-grogu-hoodie-leggings/-/A-85038469",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-t-shirt-and-tulle-skirt-little-kid/-/A-90113067",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/blippi-and-meekah-girls-2-piece-sweatshirt-and-pant-sets-for-toddlers-and-little-kids-purple/-/A-1001307533",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-skirt-sets-summer-bow-frilled-neck-ruffle-sleeve-tops-solid-fishtail-mini-short-skirt/-/A-1002517139",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-encanto-mirabel-girls-t-shirt-and-leggings-outfit-set-little-kid/-/A-89471596",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-wonder-woman-girls-tank-top-and-dolphin-active-french-terry-shorts-toddler/-/A-88825514",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-the-little-mermaid-princess-cinderella-girls-t-shirt-leggings-and-headband-3-piece-outfit-set-toddler-to-little-kid/-/A-88226808",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-tiered-tunic-and-legging-set-red-multicolor/-/A-93409801",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-terry-short-set/-/A-1002537397",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-nightmare-before-christmas-fleece-hoodie-leggings-set/-/A-85703111",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-winnie-the-pooh-t-shirt-and-pants-newborn-to-toddler/-/A-89601377",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-star-wars-the-child-girls-fleece-sweatshirt-and-leggings-outfit-set-toddler/-/A-85052071",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girl-paises-legging-set/-/A-1001314461",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-blue-woven-buttondown-and-shorts-set/-/A-1002208626",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-minnie-mouse-little-mermaid-elsa-princess-anna-peplum-t-shirt-shorts-scrunchie-3-pc-set-infant-to-big-kid/-/A-88148698",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-t-shirt-and-twill-skirt/-/A-1003006505",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/pinkfong-baby-shark-girls-t-shirt-and-leggings-outfit-set-little-kid/-/A-88335643",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-girls-t-shirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-85039017",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/pinkfong-baby-shark-baby-girls-t-shirt-and-leggings-outfit-set-infant/-/A-88335659",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-fleece-drop-shoulder-sweatshirt-and-jogger-pants-outfit-set/-/A-1004317105",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-princess-girls-metallic-print-t-shirt-and-flare-pants-toddler-to-big-kid/-/A-92182674",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tennis-golf-outfit-sets-sleeveless-tank-top-side-slit-skorts-with-pockets/-/A-1002518763",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-girls-pants-sets-two-pieces-kids-sleeveless-printing-floral-t-shirt-and-bike-shorts-outfit-set-5-9-years/-/A-1003334172",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-girls-t-shirt-and-french-terry-shorts-outfit-set-little-kid/-/A-87762859",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/care-bears-t-shirt-and-french-terry-shorts-outfit-set/-/A-1002594936",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-plaid-skirt-and-top-with-vest-set/-/A-1000080115",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-girls-raglan-tee-short-pj-set/-/A-1002208652",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-peplum-t-shirt-and-leggings-outfit-set-toddler-to-little-kid/-/A-89666233",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-boxy-drop-shoulder-t-shirt-and-mesh-tulle-skort/-/A-1002683938",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-wonder-woman-girls-costume-t-shirt-tulle-skirt-headband-and-cape-4-piece-set-little-kid-to-big-kid/-/A-85415724",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-bell-ruffle-top-and-velvet-bell-bottom-pant-set/-/A-1000080112",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-burda-tunic-short-set-blazing-yellow-animal-arabesque/-/A-93161555",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-the-child-baby-girls-t-shirt-and-leggings-outfit-set-infant/-/A-87195303",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-girls-dino-sweater-set/-/A-88068795",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-wonder-woman-graphic-t-shirt-shorts-wonder-woman/-/A-87244360",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-girls-graphic-t-shirt-shorts-and-scrunchie-3-piece-outfit-set/-/A-85168299",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-encanto-mirabel-girls-tank-top-and-tulle-skirt-toddler-to-big-kid/-/A-88329545",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-upf50-active-dress-bike-short-set/-/A-1002889765",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-rock-graphic-top-with-skirt-set/-/A-94229746",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/wizard-of-oz-matching-family-t-shirt-and-gingham-dress-outfit-set/-/A-1001188462",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-2-piece-outfits-sleeveless-tiered-ruffle-blouse-top-and-shorts-set-summer-clothing-set/-/A-1002518973",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-princess-ariel-girls-tank-top-and-active-retro-dolphin-shorts-toddler-to-big-kid/-/A-89005321",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/blush-pink-ruffle-sleeve-belted-skirt-set-mia-belle-girls/-/A-1002460226",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/nickelodeon-toddler-little-girl-s-jojo-siwa-t-shirt-and-capri-legging-sets/-/A-92511155",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-princess-anna-elsa-baby-girls-t-shirt-and-shorts-outfit-set-infant/-/A-89299149",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-vampirina-toddler-little-girl-s-2-piece-t-shirt-and-legging-set/-/A-92555254",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-2-piece-outfits-white-blouse-ruffle-long-sleeve-button-down-shirt-and-pleated-skirt-3-12y/-/A-1002528242",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-gymnastic-interchangeable-star-top-tutu-skirt-set/-/A-94229753",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/minecraft-t-shirt-and-chambray-shorts-outfit-set-sizes-4-14-16/-/A-1003021068",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mickey-mouse-friends-minnie-mouse-baby-girls-peplum-t-shirt-and-leggings-outfit-set-infant/-/A-89249902",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-pink-fruit-print-tank-and-shorts-set/-/A-1002208641",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-girls-pointelle-tee-short-pj-set/-/A-1002544145",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-burda-tunic-short-set-sodalite-blue-jacquard-stripe/-/A-93161548",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-plaid-skirt-and-flutter-sleeve-top-with-vest-set/-/A-1000080126",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dreamworks-trolls-poppy-girls-fleece-sweatshirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-85120700",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sesame-street-waffle-knit-t-shirt-and-shorts-outfit-set/-/A-1002195126",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-crochet-scallop-top-shorts-set/-/A-1002543374",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sesame-street-big-bird-cookie-monster-elmo-baby-girls-pullover-t-shirt-and-leggings-outfit-set-infant/-/A-89487853",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sky-blue-ruffle-sleeve-belted-skirt-set-mia-belle-girls/-/A-1002468013",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-big-girls-french-terry-pullover-t-shirt-jogger-and-pants-red-black-14-16/-/A-87244309",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/miraculous-cat-noir-ladybug-girls-dolphin-active-shorts-leggings-tank-top-and-t-shirt-4-piece-outfit-set-little-kid-to-big-kid/-/A-87247480",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-incredibles-violet-cosplay-costume-t-shirt-dress-leggings-and-headband-3-piece-set-newborn-to-toddler/-/A-89770511",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sesame-street-ribbed-t-shirt-and-shorts-outfit-set/-/A-1001924904",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-baby-yoda-little-girls-fleece-sweatshirt-pants-set-pink/-/A-85052206",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-fur-french-terry-sweatshirt-and-leggings-outfit-set-toddler-to-little-kid/-/A-88228859",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-pinkie-pie-girls-short-sleeve-t-shirt-and-french-terry-shorts-set-for-big-kids-size-5/-/A-1004381426",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-pinkie-pie-girls-2-piece-long-sleeve-shirt-and-french-terry-pants-set-for-big-kids-size-12/-/A-1004381431",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-double-ruffle-top-and-velvet-bell-bottom-pant-set/-/A-1000088195",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-top-and-velvet-bell-bottom-fashion-pant-set/-/A-1000080114",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-flutter-sleeve-top-and-velvet-bell-bottom-pant-set/-/A-1000078829",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-lace-top-faux-leather-legging-set/-/A-94240176",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/boys-t-shirts-sets-co-ords-sets-shorts-sets-graphic-shirts-drwastring-shorts-with-pockets/-/A-93725929",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-pink-navy-smiley-crewneck-flare-legging-set/-/A-93590678",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/p-s-from-aeropostale-little-girls-2-piece-short-sleeve-top-short-set/-/A-92779296",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-hufflepuff-ravenclaw-t-shirt-and-leggings-outfit-set-little-kid-to-big-kid/-/A-88238046",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sky-blue-linen-halter-top-and-skirt-set-mia-belle-girls/-/A-1004643382",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/tropical-breeze-hi-lo-tunic-and-legging-set-mia-belle-girls/-/A-1004642516",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sage-oasis-lace-top-and-ruffle-pants-set-mia-belle-girls/-/A-1004642349",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/indigo-bloom-smocked-top-skirt-set-mia-belle-girls/-/A-1004605738",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sandy-stroll-striped-one-shoulder-top-and-palazzo-pants-set-mia-belle-girls/-/A-1004605732",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/cherry-blossom-gingham-top-and-ruffle-skort-set-mia-belle-girls/-/A-1004605226",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/apple-of-my-eye-top-and-paperbag-short-set-mia-belle-girls/-/A-1004578862",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sweet-strawberry-top-and-denim-skirt-set-mia-belle-girls/-/A-1004457517",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-cinderella-girls-2-piece-shirt-and-french-terry-pants-set-for-toddler-and-big-kids/-/A-1004381506",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-cinderella-girls-short-sleeve-t-shirt-and-french-terry-shorts-set-for-toddler-and-big-kids/-/A-1004381493",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-2-piece-long-sleeve-shirt-and-pants-set-for-infant-toddler-and-big-kids/-/A-1004381485",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-short-sleeve-t-shirt-and-french-terry-shorts-set-for-infant-toddler-and-big-kids/-/A-1004381469",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/polka-dot-ruffle-top-and-ruffle-shorts-set-mia-belle-girls/-/A-1004365317",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/elegant-cream-daisy-top-and-short-set-mia-belle-girls/-/A-1004365201",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/sway-my-way-lace-top-and-ruffle-palazzo-pants-set-mia-belle-girls/-/A-1004365042",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rose-garden-one-shoulder-top-and-palazzo-pants-set-mia-belle-girls/-/A-1004363159",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/live-love-learn-tutu-skirt-set-mia-belle-girls/-/A-1004233787",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/apply-ever-after-ruffle-top-and-legging-set-mia-belle-girls/-/A-1004233726",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/little-miss-perfect-plaid-skort-set-mia-belle-girls/-/A-1004233663",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/ola-otter-co-ord-set-breezy-daisy-green/-/A-1004191134",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/cozeeme-modal-girls-layette-t-shirt-and-jogger-pants-play-set-outfit-little-kid/-/A-1004135065",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/cozeeme-modal-girls-layette-t-shirt-and-jogger-pants-play-set-outfit-toddler/-/A-1004135063",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/cozeeme-modal-baby-girls-layette-t-shirt-and-jogger-pants-play-set-outfit-newborn-to-infant/-/A-1004135056",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-short-sleeve-t-shirt-and-french-terry-shorts-set-for-big-kids/-/A-1004025230",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/fuchsia-floral-ruffle-top-and-mint-blossom-shorts-set-mia-belle-girls/-/A-1003867444",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/golden-bloom-eyelet-puff-sleeve-top-and-ruffle-shorts-set-mia-belle-girls/-/A-1003843725",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/boho-charm-smocked-top-and-skirt-set-mia-belle-girls/-/A-1003836804",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-solid-color-bow-patched-sweater-with-pants-sets/-/A-1003787067",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-t-shirt-and-ribbed-flare-leggings-outfit-set/-/A-1003757837",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/3-piece-organic-toddler-girls-summer-bundle/-/A-1003742044",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-striped-pattern-bow-tie-design-belted-tops-combo-shorts-swimwear/-/A-1003705964",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/biker-shorts-shirt-set-mama-s-girl-charlie-lou-baby/-/A-1003296476",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/organic-2-piece-waffle-tee-and-shorts-set/-/A-1003193730",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-chambray-blouse-and-short-set-mint-green-striped/-/A-1003104317",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-tunic-and-solid-leggings-set-pink-and-coral-flowers/-/A-1003032481",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/ola-otter-co-ord-set-gummy-birds/-/A-1003029812",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-terry-tank-top-and-shorts-set-vibrant/-/A-1003028787",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-tank-top-and-short-muslin-set-with-frills/-/A-1003028508",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/nickelodeon-dora-the-explorer-cosplay-t-shirt-and-french-terry-shorts-outfit-set-sizes-2t-7-8/-/A-1002999760",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-dotted-tulle-dress-rufflebutt-set/-/A-1002893196",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-sweet-and-versatile-two-piece-set-round-neck-fleece-top-and-pants-for-baby-girls-and-toddlers/-/A-1002889206",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-cute-and-versatile-two-piece-set-flowers-embroidered-collar-top-and-solid-color-pants-for-baby-girls-and-toddlers/-/A-1002889178",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/xoxo-embroidered-sweater-and-heart-patch-tutu-skirt-set-mia-belle-girls/-/A-1002839656",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-color-blocking-round-neck-ribbed-waist-sport-shorts-dress-set/-/A-1002807697",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tennis-dress-golf-outfit-sets-sleeveless-tank-top-skirt-with-shorts-pockets/-/A-1002761779",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-pink-crochet-top-shorts-set/-/A-1002542572",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-white-rib-knit-tank-and-skirt-set/-/A-1002542222",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-pink-gingham-jersey-top-shorts-set/-/A-1002539849",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/organic-cotton-hoodie-jogger-set-pink-charlie-lou-baby/-/A-1002113113",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-active-tennis-dress-and-bike-short-set/-/A-1001544553",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girl-juegos-legging-set/-/A-1001314455",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-holiday-green-ribbed-knit-tee-skirt-set/-/A-1000154665",
      tags: "Coordinate Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-solid-short-sleeve-cover-up-dress-cat-jack/-/A-92241047",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-cover-up-bottom-cat-38-jack-8482-black/-/A-92240892",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-red-terry-zip-up-swimsuit-cover-up-cat-38-jack-8482-coral-red/-/A-94302372",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-solid-cover-up-pants-art-class/-/A-91942378",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-floral-printed-cover-up-dress-cat-jack/-/A-92240858",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-striped-cover-up-dress-cat-jack-pink/-/A-92241056",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-cover-up-dress-art-class/-/A-91942379",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-cover-up-bottom-art-class-8482-black/-/A-92240896",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-solid-cover-up-dress-cat-jack/-/A-92241050",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-terry-full-zip-cover-up/-/A-88348936",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-loop-terry-cloth-hooded-zip-up-swim-cover-up-little-kid-to-big-kid/-/A-1001871623",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/disney-junior-girls-loop-terry-cloth-hooded-zip-up-swim-cover-up-little-kid-to-big-kid/-/A-1001854251",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-terry-cover-up/-/A-88348855",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-tassel-kaftan-cover-up/-/A-88348852",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-terry-pullover-cover-up/-/A-86529889",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-crochet-beach-cover-up-lightweight-u-neck-kids-swimwear-above-knee-beach-cover-up-for-girls-beachwear-tops/-/A-92364594",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-mesh-cover-up/-/A-1002038229",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-beach-cover-ups-short-sleeve-boho-crochet-beach-dress-lightweight-sweater-cover-ups-for-girls-bathing-suits/-/A-1003853837",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-v-neck-short-sleeve-beach-dress-summer-swimsuit-bikini-cover-up/-/A-1002550742",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-swim-cover-up-crochet-swimsuits-kids-swimwear-beachwear-tops/-/A-1002514992",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-swimsuit-cover-up-kids-fashion-open-front-swimwear-swiss-polka-dot-summer-beach-dress/-/A-1002550732",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-crochet-beach-cover-ups-round-neck-above-knee-length-cover-up-sheer-dress/-/A-93725947",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-flower-hooded-terry-cover-up/-/A-1001718395",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-round-neck-mesh-fabric-short-sleeve-swim-dress-cover-up-summer-casual-dress/-/A-1002807826",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-purple-terry-caftan-cover-up/-/A-1001718445",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-cable-knit-swim-cover-up-cami-dress-short-beach-dress-for-swimsuits-and-bikinis/-/A-1002530230",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-sheer-cover-dress-for-tube-tops-crochet-beach-cover-ups-sleeveless-spaghetti-strap-sheer-beach-sheer-cover-up/-/A-93555406",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-swim-cover-up-crochet-bathing-suit-cover-ups-short-sleeve-summer-beach-dress/-/A-1003062464",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girl-little-remi-knitted-mini-dress-peixoto/-/A-1003278050",
      tags: "Cover Ups, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-10pk-crew-socks-cat-38-jack-8482-white/-/A-93276950",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-premium-girls-39-pure-5pk-crew-socks-white/-/A-89957812",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/kids-6pk-crew-socks-all-in-motion/-/A-89823447",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-6pk-ruffle-crew-socks-cat-38-jack-8482-white/-/A-94482971",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-4pk-ribbed-crew-socks-cat-38-jack-8482-white-pink/-/A-93276949",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-4pk-animal-and-heart-super-soft-crew-socks-cat-jack/-/A-94472264",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-39-cherry-39-mid-crew-socks-art-class-8482-heather-gray/-/A-93276874",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-striped-crew-socks-art-class-8482/-/A-94567260",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-4pk-absolute-active-crew-socks-white/-/A-93666806",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-pokemon-3pk-mid-crew-socks/-/A-93717551",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-4pk-cable-knit-bow-crew-socks-cat-38-jack-8482-black-pink-gray/-/A-94482968",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-6pk-striped-crew-socks-all-in-motion-8482-white/-/A-94472265",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-3pk-mid-crew-socks-blue/-/A-93717550",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-striped-crew-socks-art-class-8482-navy-blue-gray/-/A-94567262",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-striped-crew-socks-art-class-8482-maroon-red/-/A-94567261",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-pumpkin-halloween-crew-socks-cat-38-jack-8482/-/A-94482972",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/champion-girls-6pk-crew-socks-white/-/A-94651545",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/the-lakeside-collection-kids-8-pk-super-soft-cozy-socks-girls-icon-fuzzy-sock-slippers-8-pieces/-/A-93623294",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/poppy-playtime-kids-kissy-missy-character-design-crew-socks-for-boys-and-girls-pink/-/A-90211892",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-kids-basic-soft-rayon-from-bamboo-anklet-socks/-/A-1003517565",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/everything-legwear-girls-valentines-berry-cute-2-pair-crew-socks/-/A-1004068532",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girl-s-kitty-cats-fuzzy-mid-cut-socks-2-pack-gray-one-size/-/A-1003460805",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/ctm-girl-s-solid-colored-soft-uniform-knee-high-socks-1-pair/-/A-90098914",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-leopard-girls-fuzzy-non-skid-socks-2-pair-black-one-size/-/A-1003460788",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-polka-point-girls-cotton-blend-knee-socks/-/A-1003363959",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/textiel-trade-kid-s-winnie-the-pooh-fun-day-sneaker-socks-4-pack/-/A-1003286391",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-rainbow-patch-kids-cotton-blend-crew-sock/-/A-1003455278",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-2-pair-pack-fuzzy-heart-non-skid-socks/-/A-1003403156",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/textiel-trade-girl-s-disney-frozen-anna-elsa-and-olaf-soft-socks-3-pack/-/A-93554230",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/textiel-trade-girl-s-nickelodeon-paw-patrol-skye-power-crew-novelty-socks-3-pack/-/A-92518673",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-metallic-sport-stripe-cotton-blend-crew-sock/-/A-1003455288",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-tie-dye-popsicle-knee-high-socks/-/A-1003366744",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-hello-summer-knee-high-socks/-/A-1003366222",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-step-and-shimmer-ruffle-anklet-socks/-/A-1003453109",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-inspo-athletic-crew-socks/-/A-1003456159",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-two-tone-varsity-stripe-crew-socks/-/A-1003455613",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/ctm-girl-s-super-soft-slouch-socks-1-pair/-/A-90099014",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-checkered-heart-crew-socks/-/A-1003455781",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ziggy-double-ring-cotton-blend-anklet-sock/-/A-1003455383",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-fuzzy-heart-crew-socks/-/A-1003455438",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/textiel-trade-kid-s-disney-miraculous-ladybug-and-cat-noir-crew-socks-4-pack/-/A-93563952",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-cotton-blend-multi-graffiti-hearts-knee-sock/-/A-1003329491",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-tennis-star-crew-socks/-/A-1003455467",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-rockin-robots-girls-knee-socks/-/A-1003364114",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-distressed-wash-denim-cherries-girls-knee-high-sock/-/A-1003336283",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-write-on-camp-kids-cotton-blend-knee-high-socks-3-pack/-/A-1003336549",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-peek-a-boo-sheer-floral-girls-cotton-blend-crew-socks/-/A-1003453705",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-distressed-wash-denim-look-girls-knee-high-socks/-/A-1003336289",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-unicorn-girls-fuzzy-non-skid-socks-2-pair-fuchsia-one-size/-/A-1003460748",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/textiel-trade-girl-s-frozen-themed-novelty-crew-socks-pack-of-3/-/A-1002280753",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/textiel-trade-girl-s-minnie-mouse-fun-day-fluffy-socks-2-pairs/-/A-1003286439",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-neon-stitched-heart-cotton-blend-knee-high-sock/-/A-1003402908",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girl-s-sport-rib-heart-crew-socks-winter-white-2/-/A-1003455767",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-stretch-cotton-tennis-smiley-face-knee-sock-white-4/-/A-1003460683",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-retro-tie-dye-girls-cotton-blend-knee-high-socks/-/A-1003400392",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-bow-knee-high-socks/-/A-1003452087",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-graffiti-star-knee-high-socks/-/A-1003402616",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-color-block-stripe-crew-socks/-/A-1003456090",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girl-musical-notes-bamboo-crew-socks/-/A-1003336691",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-acid-wash-cotton-blend-knee-high-socks/-/A-1003336297",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-air-brush-winking-smiley-cotton-blend-knee-high-sock/-/A-1003402951",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-pearl-burst-cotton-blend-crew-socks/-/A-1003335214",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-rubber-smiley-face-cotton-rich-knee-sock/-/A-1003334377",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/st-patrick-s-day-born-lucky-youth-3-pack-crew-socks/-/A-91018118",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-tie-dye-graffiti-shapes-knee-high-socks/-/A-1003460815",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-stretch-cotton-graffiti-play-knee-sock/-/A-1003460671",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-distressed-wash-denim-stars-girls-knee-high-sock-black-4/-/A-1003460519",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-vintage-stripe-cotton-blend-knee-high-socks/-/A-1003403015",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-polar-bear-girls-fuzzy-mid-cut-socks/-/A-1003403118",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-stretch-cotton-splatter-paint-knee-sock-white-12/-/A-1003460634",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/little-love-bug-company-standard-knee-high-socks/-/A-1003631822",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girl-s-lol-athletic-crew-socks/-/A-1003456137",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-single-heart-logo-crew-socks/-/A-1003455599",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-window-pane-sheer-cotton-blend-socks/-/A-1003453677",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-fluffy-trio-pom-pom-cotton-blend-crew-socks/-/A-1003453638",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-black-tie-affair-cotton-blend-crew-socks/-/A-1003453551",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-pointelle-cotton-blend-knee-high-sock/-/A-1003451559",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-2-pair-pack-i-woke-up-like-this-knee-high-socks-assorted/-/A-1003430559",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-open-work-shimmer-cotton-blend-knee-high-socks/-/A-1003400154",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-shimmer-knee-high-socks/-/A-1003399854",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-embroidered-bicycle-knee-high-socks/-/A-1003368172",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-glitzy-sunglasses-knee-high-socks/-/A-1003366165",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-busy-bee-glitter-cotton-knee-high-socks/-/A-1003365650",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-fruity-fun-watermelon-girls-cotton-blend-knee-high-socks/-/A-1003364045",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-tidy-little-bow-girls-cotton-blend-knee-socks/-/A-1003336888",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-she-shimmers-girls-cotton-blend-knee-socks/-/A-1003336880",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-jewel-mosaic-girls-combed-cotton-knee-high-socks/-/A-1003336768",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-gingham-heart-girls-cotton-blend-knee-high-sock/-/A-1003336488",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-cotton-blend-ruler-knee-high-socks/-/A-1003336477",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-crystal-bear-knee-high-socks/-/A-1003336455",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-velvet-bow-cotton-blend-knee-high-sock/-/A-1003336438",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-v-stripe-lurex-cotton-blend-knee-high-socks/-/A-1003336410",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-fuzzy-stripe-cotton-blend-knee-high-socks/-/A-1003336398",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-striped-bee-cotton-blend-knee-high-sock/-/A-1003336341",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-jeweled-smiley-face-cotton-blend-knee-high-socks/-/A-1003336327",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-starry-night-jeweled-girls-combed-cotton-crew-socks/-/A-1003335223",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-feathery-combed-cotton-faux-pearl-girls-crew-socks/-/A-1003335201",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-string-of-pearls-girls-cotton-blend-crew-socks/-/A-1003335189",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/hearts-galore-cozy-sock/-/A-1003334834",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-snowflake-plush-lined-cozy-socks/-/A-1003334805",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-cotton-blend-graffiti-camp-knee-sock/-/A-1003334446",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-cotton-blend-heart-and-stripes-knee-sock/-/A-1003334358",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-stretch-cotton-multi-stripe-m-graphic-knee-sock/-/A-1003329553",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-fuzzy-smiley-face-knee-high-socks/-/A-1003329273",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/iridescent-balloon-dog-knee-high/-/A-1003329068",
      tags: "Crew Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-denim-vest-art-class/-/A-92955212",
      tags: "Denim Vests, Girl",
    },
    {
      url: "https://www.target.com/p/disney-toddler-little-girls-2-pack-minnie-mouse-casual-fashion-dresses/-/A-1003764881",
      tags: "Dress Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-6pk-scallop-ankle-socks-cat-38-jack-8482/-/A-90873438",
      tags: "Dress Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-3pk-bobby-socks-cat-jack-153-white-navy-black/-/A-51258242",
      tags: "Dress Socks, Girl",
    },
    {
      url: "https://www.target.com/p/kids-3pk-dress-socks-cat-jack-navy/-/A-79468027",
      tags: "Dress Socks, Girl",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-ultra-light-packable-down-jacket/-/A-90227524",
      tags: "Duck Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-ultra-light-real-down-packable-jacket/-/A-92874883",
      tags: "Duck Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-quilted-floral-duffel-bag-art-class-8482-blue/-/A-94435113",
      tags: "Duffel Bags, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-quilted-floral-duffel-bag-art-class-8482-red/-/A-94435110",
      tags: "Duffel Bags, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-red-plaid-satin-bow-holiday-dress/-/A-93502341",
      tags: "Empire Waist Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-girls-organic-short-sleeve-puff-sleeve-party-dress-kids/-/A-1000871958",
      tags: "Empire Waist Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-crochet-detail-empire-waist-seersucker-dress-kids/-/A-1002929817",
      tags: "Empire Waist Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-astrid-long-sleeve-empire-waist-dress-sky-blue/-/A-91487287",
      tags: "Empire Waist Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-flower-mesh-overlay-design-bow-tie-vest-dress-birthday-formal-dress/-/A-1004578693",
      tags: "Empire Waist Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girls-solid-round-collar-design-sleeveless-dress-in-summer/-/A-1004385966",
      tags: "Empire Waist Dresses, Girl",
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
