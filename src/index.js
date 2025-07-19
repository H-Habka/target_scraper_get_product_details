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
      url: "https://www.target.com/p/mykids-usa-baby-girl-rabbit-graphic-long-sleeve-cotton-hoodies/-/A-1004336379",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girl-textured-sequin-sweater-mia/-/A-1003278111",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girl-flutter-sleeve-sweater-mia/-/A-1003278109",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-christmas-knit-pullover-sweaters-turtleneck-kids-long-sleeve-chunky-winter-warm-cute-funny-tops/-/A-1003265692",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-christmas-turtleneck-sweaters-kids-long-sleeve-chunky-knit-pullover-tops-for-winter/-/A-1003263061",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-summer-polo-shirt-v-neck-button-down-knit-school-crop-tops/-/A-1003146001",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-sweater-with-fringe-multicolor-stripes/-/A-1003013457",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/christmas-sweater-long-sleeve-crew-neck-knitted-pullover-reindeer-for-kids/-/A-1002830649",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girl-fringe-cardigan-rylee-cru/-/A-1002669048",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/matching-christmas-sweaters-for-family-boys-girls-crew-neck-reindeer-snowflakes-knitted-funny-pullover-sweaters-holiday-party/-/A-1002635830",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-christmas-sweaters-casual-crewneck-long-sleeve-knit-pullover-jumper-tops/-/A-1002551650",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girl-floral-puff-sleeve-sweatshirt-happy-prince/-/A-1001401267",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girl-s-fiona-short-sleeve-sweater-vignette/-/A-1001251653",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girl-s-fiona-short-sleeve-sweater-vignette/-/A-1001251564",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girl-s-kenzie-cardigan-sweater-vignette/-/A-1001251550",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girl-s-utmost-comfort-sweater-southern-grace/-/A-1001116483",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-39-relaxed-fit-french-terry-pullover-shirt-cat-38-jack-8482/-/A-94802021",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-fleece-hoodie-art-class/-/A-93441893",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-fleece-crew-neck-pullover-sweatshirt-art-class/-/A-94350684",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-oversized-fleece-hoodie-sweatshirt-art-class/-/A-94430428",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-cherry-oversized-hooded-fleece-sweatshirt-red/-/A-94653594",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-39-cozy-lightweight-crewneck-sweatshirt-all-in-motion-8482/-/A-93070922",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-39-smileyworld-adventure-oversized-hooded-fleece-sweatshirt/-/A-94653598",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-colorblock-dreamy-fleece-sweatshirt-aqua-blue/-/A-93529417",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-rolling-stones-graphic-sweatshirt-navy-blue/-/A-94269019",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/montauk-pullover-sweatshirt-art-class-blue/-/A-94257250",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-french-terry-oversized-pullover-sweatshirt-art-class/-/A-94599976",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-39-moana-2-dreamy-fleece-sweatshirt-ivory/-/A-92237494",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-39-pokemon-floral-eevee-elevated-1-4-zip-sweatshirt-white-lime-green/-/A-93599960",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-bows-dreamy-fleece-crewneck-sweatshirt-green/-/A-93599699",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-faux-shearling-pullover-sweatshirt-coral-pink-light-blue-ivory/-/A-92253715",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-39-lilo-stitch-oversized-sweatshirt-oatmeal/-/A-94431065",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-39-minnie-mouse-ditsy-floral-dreamy-fleece-sweatshirt-ivory/-/A-93599964",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-sanrio-keroppi-dreamy-fleece-crew-neck-pullover-sweatshirt-oatmeal/-/A-91363812",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-4th-of-july-fleece-crew-neck-pullover-sweatshirt-art-class/-/A-94819686",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-38-friends-dreamy-fleece-crew-neck-pullover-sweatshirt-ivory/-/A-91363879",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-squishmallows-dreamy-fleece-pullover-sweatshirt-pink/-/A-91363897",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-the-nightmare-before-christmas-jack-38-sally-dreamy-fleece-pullover-sweatshirt-gray/-/A-91363885",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/converse-girls-pullover-sweatshirt-hoodie/-/A-94687305",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/converse-girls-pullover-sweatshirt-french-terry-hoodie/-/A-94687301",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-def-leppard-oversized-fleece-crewneck-sweatshirt-light-purple/-/A-93069449",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/kids-target-matching-family-sweatshirt-wondershop-red/-/A-92295978",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-olivia-rodrigo-oversized-fleece-crew-neck-sweatshirt-gray/-/A-93069450",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/converse-girls-french-terry-quarter-zip-sweatshirt/-/A-94687318",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-half-zip-woobie-sweatshirt-little-kid-to-big-kid/-/A-1000177526",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-pullover-crew-fleece-sweatshirt-cat-38-jack-8482-heather-gray/-/A-94486505",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/space-jam-looney-tunes-space-jam-sylvester-buggs-bunny-daffy-duck-girls-french-terry-sweatshirt-little-kid-to-big-kid/-/A-88272545",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/universal-studios-wicked-fleece-drop-shoulder-pullover-hoodie-sizes-2t-14-16/-/A-1001731876",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/hello-kitty-and-friends-fleece-hoodie-sizes-2t-14-16/-/A-1001012097",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-french-terry-crossover-hoodie-toddler-to-big-kid/-/A-88301140",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-hedwig-owl-slytherin-hufflepuff-ravenclaw-girls-french-terry-pullover-hoodie-toddler-to-big-kid/-/A-88222115",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-fleece-fur-sweatshirt-little-kid-to-big-kid/-/A-88229951",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-crew-sweatshirt/-/A-86908833",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-fleece-pullover-fur-sweatshirt-little-kid-to-big-kid/-/A-94124599",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-90042351",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/hello-kitty-french-terry-pullover-crossover-hoodie/-/A-1004629236",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-active-zip-up-hoodie/-/A-1002931365",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-fleece-pullover-hoodie/-/A-87678275",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-hooded-pullover-sweatshirt/-/A-86908862",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-frozen-minnie-mouse-princess-moana-nightmare-before-christmas-toy-story-lion-king-lilo-stitch-girls-pullover-sweatshirt-little-kid-to-big/-/A-87483678",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/hello-kitty-fleece-cosplay-pullover-hoodie-sizes-2t-14-16/-/A-1000402971",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/leveret-kids-long-sleeve-classic-solid-color-sweatshirt/-/A-89567170",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-that-girl-lay-lay-hoodie-teal-green/-/A-86963406",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-thin-bow-youth-graphic-hoodie/-/A-1002349978",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/nhl-florida-panthers-girls-faux-fur-long-sleeve-hooded-sweatshirt/-/A-93823929",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-love-flower-youth-graphic-hoodie/-/A-1001743159",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-cakey-cat-mercat-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-90116554",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/tirrinia-kids-blanket-hoodie-sweatshirt-oversized-wearable-blanket-hooded-faux-shearling-lined-blanket-gift-for-kids-teens-youth/-/A-1000028623",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/barbie-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-90042648",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-mercat-cakey-cat-girls-french-terry-sweatshirt-toddler-to-big-kid/-/A-91109237",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-french-terry-oversized-drop-shoulder-sweatshirt-little-kid-to-big/-/A-92749512",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/coraline-girls-black-long-sleeve-hooded-sweatshirt/-/A-1004432757",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/unicorn-girl-s-cradle-pink-long-sleeve-cosplay-zip-up-hoodie/-/A-94162496",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-holly-leaves-coquette-youth-ultra-soft-graphic-sweatshirt/-/A-93717314",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-girls-fleece-half-zip-hoodie-little-kid-to-big-kid/-/A-88196088",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/dog-man-jumping-youth-girl-s-athletic-heather-long-sleeve-hooded-sweatshirt/-/A-1002655675",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-christmas-collage-youth-ultra-soft-graphic-sweatshirt/-/A-93349830",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-knit-crewneck-sweatshirt/-/A-1001905412",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-frozen-minnie-mouse-princess-moana-nightmare-before-christmas-toy-story-lion-king-mickey-lilo-stitch-r-baby-girls-pullover-sweatshirt-infant/-/A-87483662",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ncaa-virginia-tech-hokies-girls-39-hooded-sweatshirt/-/A-88786463",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-girls-french-terry-oversized-matching-family-sweatshirt-little-kid-to-adult/-/A-1000320519",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-abby-cadabby-girls-sweatshirt-toddler/-/A-87483781",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-candy-cane-cutie-stars-youth-ultra-soft-graphic-sweatshirt/-/A-93302610",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/leveret-kids-long-sleeve-boho-solid-color-sweatshirt/-/A-89567038",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-mickey-mouse-fashion-crewneck-sweatshirt-collegiate-athletic-crewneck-sweatshirt-mickey-minnie-sweatshirt/-/A-1004522267",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-abby-cadabby-girls-sweatshirt-little-kid/-/A-87483790",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/reebok-girls-cowl-neck-yoga-sweatshirt/-/A-1004736239",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-st-nick-s-tree-farm-youth-ultra-soft-graphic-sweatshirt-l-natural/-/A-93349979",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-christmas-girly-youth-ultra-soft-graphic-sweatshirt/-/A-93349834",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ncaa-ucla-bruins-girls-39-hooded-sweatshirt/-/A-88786458",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-birthday-girl-checkered-youth-ultra-soft-graphic-sweatshirt/-/A-93879160",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ncaa-kansas-state-wildcats-girls-39-hooded-sweatshirt/-/A-88786456",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-valentine-kittens-youth-graphic-hoodie/-/A-1001647253",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-queen-bee-diva-girls-fleece-pullover-hoodie-little-kid-to-big-kid/-/A-87079638",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ncaa-oregon-ducks-girls-39-hooded-sweatshirt/-/A-88786460",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-encanto-mirabel-girls-hoodie-toddler-to-big-kid/-/A-87289635",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-sweatshirt-infant-to-big-kid/-/A-89790021",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-athletic-lightweight-sweatshirt/-/A-87678788",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-big-sis-square-toddler-graphic-sweatshirt/-/A-91869427",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-be-a-kind-human-lightning-bolt-youth-ultra-soft-graphic-sweatshirt/-/A-93879161",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ncaa-miami-hurricanes-girls-39-hooded-sweatshirt/-/A-88786464",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/latino-heritage-month-kids-hoodie-sweatshirt-blue/-/A-91007649",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-encanto-minnie-mouse-stitch-isabela-mirabel-girls-fleece-fur-sweatshirt-little-kid-to-big-kid/-/A-88223178",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/lanky-box-boxy-foxy-front-back-graphics-girl-s-cradle-pink-long-sleeve-hooded-sweatshirt/-/A-94199507",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-santa-chart-youth-ultra-soft-graphic-sweatshirt/-/A-93349857",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/rolling-stones-girls-french-terry-pullover-sweatshirt-toddler-to-big-kid/-/A-89270438",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-goofy-donald-duck-daisy-girls-pullover-hoodie-little-kid-to-big/-/A-85075290",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/minecraft-creeper-girls-french-terry-pullover-sweatshirt-little-kid-to-big-kid/-/A-88164913",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ncaa-michigan-state-spartans-girls-39-hooded-sweatshirt/-/A-88786459",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-that-girl-lay-lay-princess-slaya-hoodie-gray/-/A-86963405",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-l-o-l-surprise-faux-shearling-sweatshirt-yellow/-/A-86900639",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ncaa-oklahoma-sooners-girls-39-crew-neck-fleece-gray-sweatshirt/-/A-92747566",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-cat-noir-girls-fleece-hoodie-little-kid-to-big-kid/-/A-87244269",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-fries-before-guys-bold-youth-graphic-hoodie/-/A-1001743317",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-ghost-spider-girls-pullover-hoodie-little-kid/-/A-85036701",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/care-bears-girls-half-zip-drop-shoulder-woobie-sweatshirt-little-kid-to-big-kid/-/A-93859692",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-chase-skye-everest-girls-pullover-sweatshirt/-/A-87483765",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-baby-yoda-sweatshirt-pink/-/A-87482870",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-encanto-mirabel-girls-fleece-pullover-hoodie-toddler-to-big-kid/-/A-88178327",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ncaa-syracuse-orange-girls-39-hooded-sweatshirt/-/A-88786474",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-girls-fleece-fur-sweatshirt-toddler-to-big-kid/-/A-90042450",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-doc-mcstuffins-girls-sweatshirt-little-kid/-/A-88225749",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-smiley-disco-youth-ultra-soft-graphic-sweatshirt/-/A-1002532886",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-girls-hoodie-toddler-to-big-kid/-/A-89032073",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-frozen-queen-elsa-little-girls-fleece-pullover-sweatshirt-tie-dye-7-8/-/A-87246451",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-girls-fleece-oversized-drop-shoulder-sweatshirt-little-kid-to-big-kid/-/A-93743475",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ncaa-oklahoma-sooners-girls-39-hooded-sweatshirt/-/A-88786469",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-valentine-kittens-youth-ultra-soft-graphic-sweatshirt/-/A-1001646887",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/nhl-san-jose-sharks-girls-faux-fur-long-sleeve-hooded-sweatshirt/-/A-93823938",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-valentine-s-gnomes-youth-graphic-hoodie/-/A-1001743183",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-cozy-ruffle-sweatshirt-top-large-black-stars-print/-/A-93536567",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/cry-babies-magic-tears-girls-child-pocket-sweatshirt-hoodie-pullover-pink/-/A-1000487795",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-fall-pumpkin-chart-youth-ultra-soft-graphic-sweatshirt-s-natural/-/A-93302586",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-girls-french-terry-sweatshirt-little-kid-to-big-kid/-/A-89160642",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-abby-cadabby-baby-girls-sweatshirt-infant/-/A-87483786",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smiley-flowers-with-sunglasses-youth-ultra-soft-graphic-sweatshirt/-/A-1002532982",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-love-gnomes-youth-graphic-hoodie/-/A-1001743223",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-girls-fleece-pullover-hoodie-little-kid/-/A-85039601",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/tasty-peach-studios-peachy-cafe-youth-girl-tofu-hoodie-with-ears/-/A-1002894406",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/my-little-pony-rainbow-dash-girls-french-terry-pullover-crossover-hoodie-toddler-to-big-kid/-/A-88296673",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/star-wars-little-girls-stronger-than-you-think-baby-grogu-sweatshirt/-/A-92911551",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ncaa-michigan-state-spartans-girls-39-crew-neck-fleece-gray-sweatshirt/-/A-92747458",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-fleece-cosplay-pullover-hoodie-toddler-sizes-2t-14-16/-/A-1000402973",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ncaa-west-virginia-mountaineers-girls-39-hooded-sweatshirt/-/A-88786457",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-ship-anchor-youth-graphic-hoodie/-/A-1002313549",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ncaa-arizona-state-sun-devils-girls-39-crew-neck-fleece-gray-sweatshirt/-/A-92747446",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-husky-fleece-hooded-sweatshirt/-/A-1003408699",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-girls-minnie-mouse-chasing-sunshine-cropped-crewneck-sweatshirt/-/A-92276495",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ncaa-arizona-state-sun-devils-girls-39-hooded-sweatshirt/-/A-88741803",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-nautical-collage-youth-ultra-soft-graphic-sweatshirt/-/A-1002313501",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-thin-bow-youth-ultra-soft-graphic-sweatshirt/-/A-1002350205",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-youth-hoodie-l-black/-/A-1003380821",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/tasty-peach-witch-frog-brewing-potion-youth-girl-s-black-long-sleeve-hooded-sweatshirt-with-3d-ears/-/A-1001810596",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-youth-hoodie-xl-black/-/A-1003380822",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-youth-hoodie-xs-black/-/A-1003380811",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-smiley-face-outline-youth-ultra-soft-graphic-sweatshirt-l-black/-/A-1002349832",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-youth-hoodie-s-black/-/A-1003380817",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-candy-monster-horns-glitter-youth-ultra-soft-graphic-sweatshirt/-/A-93404609",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-so-franken-cute-glitter-youth-ultra-soft-graphic-sweatshirt/-/A-93404311",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-coquette-christmas-snowflake-bow-youth-ultra-soft-graphic-sweatshirt/-/A-93457465",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-tis-the-season-scarecrow-youth-ultra-soft-graphic-sweatshirt/-/A-93302580",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ufc-girls-script-pullover-hoodie-sweatshirt-red-xl/-/A-1004765948",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/ufc-girls-roaring-glory-sweatshirt/-/A-1004764791",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/dreamworks-shrek-french-terry-zip-up-cosplay-hoodie/-/A-1004611408",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-mickey-mouse-fashion-crewneck-sweatshirt-collegiate-athletic-crewneck-sweatshirt-mickey-minnie-sweatshirt/-/A-1004522261",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-lilo-and-stitch-fashion-sweatshirt-disney-collegiate-athletic-crewneck-sweatshirt-lilo-and-stitch-sweatshirt/-/A-1004522255",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/touch-girls-miami-dolphins-ruffled-hoodie-sweatshirt/-/A-1004302920",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/spellbound-elian-oracles-magic-is-everywhere-youth-girl-s-royal-blue-long-sleeve-hooded-sweatshirt/-/A-1004162260",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/g-iii-sports-girls-cleveland-cavaliers-hoodie-sweatshirt/-/A-1004146001",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/g-iii-sports-girls-michigan-state-spartans-hoodie-sweatshirt/-/A-1004142906",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-cartoon-unicorn-patches-pattern-cotton-shirt/-/A-1003768536",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-unicorn-floral-pattern-mesh-patchwork-design-hoodie/-/A-1003709158",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-be-good-do-good-smiley-face-youth-hoodie-m-black/-/A-1003380819",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-embroidered-smiley-face-outline-youth-hoodie/-/A-1003380714",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/mykids-usa-butterfly-pattern-soft-cotton-autumn-hoodie/-/A-1003355023",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-sweatshirt-off-white-and-koala/-/A-1003010786",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-sweatshirt-old-pink-and-flowers/-/A-1003010777",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-vibes-cartoon-rainbow-youth-ultra-soft-graphic-sweatshirt/-/A-1002532981",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-lucky-clover-checkered-youth-ultra-soft-graphic-sweatshirt/-/A-1002532863",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smiley-clover-daisy-youth-ultra-soft-graphic-sweatshirt/-/A-1002532831",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-little-miss-lucky-charm-youth-ultra-soft-graphic-sweatshirt/-/A-1001890582",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/disney-lion-king-nala-simba-fleece-hoodie-pink/-/A-87526868",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-peace-love-cupid-youth-graphic-hoodie/-/A-1001743200",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girl-kids-winter-animals-sweatshirt-happy-prince/-/A-1001401465",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girl-liberty-sweatshirt-set-petit-confection/-/A-1001376650",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girl-kids-organic-cotton-sweatshirt-makemake-organics/-/A-1001116311",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girl-s-sequin-patch-style-long-sleeve-top-southern-grace/-/A-1000916451",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girl-s-cheerful-on-sparkly-glitter-sweatshirt-southern-grace/-/A-1000916025",
      tags: "Girl, Pullover Sweatshirts",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-blouson-jacket-art-class-8482/-/A-92954460",
      tags: "Girl, Quilted Jackets",
    },
    {
      url: "https://www.target.com/p/girls-adaptive-quilted-jacket-cat-jack/-/A-88077274",
      tags: "Girl, Quilted Jackets",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-quilted-mid-season-jacket-multicolored-butterflies-on-black-background/-/A-1002931159",
      tags: "Girl, Quilted Jackets",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-quilted-mid-season-jacket-small-white-flowers-on-sage-green-background/-/A-1002908394",
      tags: "Girl, Quilted Jackets",
    },
    {
      url: "https://www.target.com/p/maidenform-girls-39-2pk-seamless-lace-racerback-bra-pink-beige/-/A-93666783",
      tags: "Girl, Racerback Bras",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-fits-all-scoop-bra-art-class-8482/-/A-92941198",
      tags: "Girl, Racerback Bras",
    },
    {
      url: "https://www.target.com/p/hanes-girls-39-2pk-cotton-sports-bra/-/A-94495399",
      tags: "Girl, Racerback Bras",
    },
    {
      url: "https://www.target.com/p/maidenform-girls-2pk-seamfree-lace-back-padded-crop-bra-white/-/A-53059847",
      tags: "Girl, Racerback Bras",
    },
    {
      url: "https://www.target.com/p/girls-seamless-sports-bra-all-in-motion/-/A-94088513",
      tags: "Girl, Racerback Bras",
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-racerback-bra-top-girls/-/A-84318456",
      tags: "Girl, Racerback Bras",
    },
    {
      url: "https://www.target.com/p/girls-39-woven-jacket-all-in-motion-8482/-/A-94579755",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-iridescent-rain-coat-cat-38-jack-8482-turquoise-blue/-/A-92927324",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/kids-rain-coat-cat-jack/-/A-94427240",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-waterproof-rain-coats-rubberized-jackets/-/A-90511810",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/minnie-mouse-girl-s-umbrella-and-raincoat-set-kids-ages-2-5-pink/-/A-90411077",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-water-resistant-hooded-slicker-rain-jacket/-/A-1001887369",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/barbie-zip-up-waterproof-hooded-rain-jacket-coat/-/A-1003005808",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-zip-up-waterproof-hooded-rain-jacket-coat-sizes-2t-7-8/-/A-1000558454",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/trolls-girls-raincoat-and-umbrella-and-raincoat-set-kids-ages-4-7/-/A-89919268",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/minnie-mouse-girl-s-umbrella-and-raincoat-set-kids-ages-2-5-red/-/A-90411094",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/jojo-siwa-kids-umbrella-and-raincoat-set-rain-wear-for-girls-ages-4-7/-/A-89892500",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/disney-junior-zip-up-waterproof-hooded-rain-jacket-coat/-/A-1003487813",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/frozen-elsa-and-anna-girl-s-umbrella-and-raincoat-set-kids-ages-4-7-blue-purple/-/A-90411055",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girl-s-lightweight-rainslicker-coat/-/A-93364222",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-zip-up-jacket-little-kid-to-big-kid/-/A-94071489",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-rain-jacket/-/A-92925626",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/peppa-pig-little-girl-s-rain-jacket-windbreaker-shell-raincoat-slicker-2t-5/-/A-90214587",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/paw-patrol-girl-s-raincoat-and-umbrella-set-kids-ages-2-7-light-pink/-/A-90411318",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-water-resistant-hooded-rain-jacket/-/A-1001887361",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-diva-neon-q-t-m-c-swag-girls-button-down-waterproof-rain-jacket-little-kid-to-big-kid/-/A-88578943",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/kids-lightweight-packable-rain-jacket-waterproof-hooded-raincoats-windproof-for-boys-and-girls/-/A-1002746392",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/paw-patrol-girl-s-raincoat-and-umbrella-set-kids-ages-2-7-dark-pink/-/A-90411317",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/c-c-girl-s-shiny-rain-bucket-hat/-/A-93995962",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-coconut-q-t-dawn-surfer-babe-waterproof-rain-jacket/-/A-87449935",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-waterproof-hooded-rain-jacket-little-kid/-/A-88578464",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/girl-ladybug-raincoat-kidorable/-/A-1003070641",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/girl-lucky-cat-raincoat-kidorable/-/A-1002669036",
      tags: "Girl, Rain Coats",
    },
    {
      url: "https://www.target.com/p/girls-39-americana-tie-dye-rash-guard-bikini-set-cat-38-jack-8482/-/A-94290571",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/girls-floral-printed-rash-guard-set-cat-jack-blue-pink/-/A-92240861",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-floral-printed-rash-guard-set-cat-38-jack-8482/-/A-92240860",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/girls-floral-printed-rash-guard-set-art-class/-/A-92160490",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-orange-blossom-gingham-checkered-rash-guard-set-art-class-8482-navy-blue/-/A-93323510",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-floral-printed-rash-guard-bikini-set-cat-38-jack-8482-pink/-/A-93114817",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-celebrate-summer-one-piece-swimwear-set-cat-38-jack-8482/-/A-94396720",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-tie-dye-design-rash-guard-set-art-class-8482/-/A-92241076",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-abstract-rash-guard-set-art-class-8482-pink/-/A-92240852",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-island-keepsake-floral-printed-swimwear-set-cat-38-jack-8482-yellow/-/A-94302357",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-seascape-bikini-set-art-class-8482-purple/-/A-94567281",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/girls-stitch-floral-printed-rash-guard-set-coral-pink/-/A-93306649",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/bluey-upf-50-rash-guard-and-bikini-bottom-sizes-2t-10-12/-/A-1001374839",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-chlorine-resistant-short-sleeve-rash-guard-swim-top-and-bikini-set/-/A-1002840987",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/wicked-girls-upf-50-rash-guard-and-bikini-bottom-swim-set-little-kid-to-big-kid/-/A-1001854264",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/patpat-disney-stitch-toddler-girls-kids-two-piece-long-sleeve-swimsuit-rashguard-swimwear-sets-bathing-suit/-/A-1003927108",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/girls-swim-set-with-long-sleeve-rash-guard-swim-shorts-and-sunglasses-kids-ages-3t-8-years-pink-beach-life/-/A-90442729",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/disney-princess-frozen-minnie-mouse-girls-5-piece-swim-set-little-kid-to-big-kid/-/A-88164955",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-long-sleeve-zipper-rash-guard-2-piece/-/A-88271094",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/bluey-girls-upf-50-rash-guard-and-bikini-bottom-toddler-sizes-2t-10-12/-/A-1001374843",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/disney-girls-minnie-mouse-upf-50-long-sleeve-rash-guard-and-bikini-bottom-2-piece-swimsuit-set-for-toddler-and-big-kids-3t/-/A-1003763995",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/lands-end-big-kids-3-piece-upf-50-sun-protection-rash-guard-set/-/A-86530046",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/disney-princess-moana-girls-two-piece-upf-50-protection-tankini-bathing-suits-sports-beach-rash-guard-orange-swimwear/-/A-1004400400",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-long-sleeve-rash-guard-bikini/-/A-91267490",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/disney-princess-belle-2-piece-tankini-swimsuit-set-toddler-girl-rash-guard-upf-50-swimwear-summer-ruffle-swim-suit/-/A-1004400153",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/barbie-girls-rash-guard-and-bikini-bottom-little-kid-to-big-kid/-/A-86953153",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-girls-rash-guard-and-bikini-bottom-little-kid-to-big-kid/-/A-88170786",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-slim-rash-guard-swim-top-bikini-top-and-bottoms-upf-50-swimsuit-set/-/A-86530025",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/miraculous-cat-noir-ladybug-girls-one-piece-bathing-suit-rash-guard-tankini-top-and-bikini-bottom-4-swimsuit-set-little-kid-to-big-kid/-/A-86952279",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/go-coco-little-big-girls-2-piece-rashguard-bikini-swimsuit-set/-/A-1003025506",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-pink-rashguard-and-floral-print-shorts-set/-/A-1001718448",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-2-piece-star-prints-rashguard-swim-set/-/A-1004328838",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-textured-floral-print-rashguard-set/-/A-1001618311",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-long-sleeve-rash-guard-bikini/-/A-91267484",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-long-sleeve-rash-guard-bikini/-/A-91267495",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/kiko-max-baby-toddler-and-little-girl-s-2-piece-short-sleeve-bikini-swimsuit-sets/-/A-92511134",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-classic-short-sleeve-upf50-rash-guard-bikini/-/A-92501982",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-baby-girls-long-sleeve-rash-guard-bikini/-/A-91267469",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-orange-textured-long-sleeve-raglan-zip-rash-guard-short-set/-/A-1001718474",
      tags: "Girl, Rash Guard Sets",
    },
    {
      url: "https://www.target.com/p/girls-solid-rash-guard-top-cat-jack/-/A-91940748",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/girls-solid-rash-guard-top-cat-jack-black/-/A-94582914",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-graphic-mock-neck-upf-50-sun-protection-rash-guard/-/A-86529720",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-zip-front-upf-50-rash-guard/-/A-91598327",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-mock-neck-upf-50-swim-rash-guard/-/A-88504211",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-slim-short-sleeve-crew-neck-upf-50-swim-rash-guard/-/A-86529913",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-upf-50-sun-protection-hoodie/-/A-88504190",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-upf-50-printed-long-sleeve-rashguard-tee/-/A-91547327",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-upf-50-puff-sleeve-rashguard/-/A-1003391463",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-upf-50-long-sleeve-rashguard/-/A-91319298",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-upf-50-color-block-long-sleeve-rashguard-tee/-/A-91559063",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-upf-50-short-sleeve-rashguard/-/A-92349270",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-swim-peplum-upf-50-long-sleeve-girls-rashguard-tee/-/A-91533578",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/calypsa-girl-s-chloe-swim-top/-/A-90073796",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/calypsa-girl-s-round-neck-surfer-swim-top/-/A-1001863593",
      tags: "Girl, Rash Guard Tops",
    },
    {
      url: "https://www.target.com/p/girls-knit-romper-cat-jack/-/A-94146070",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-stitch-peace-love-ohana-romper-the-disney-collection-by-cat-jack-white-navy-blue/-/A-94290603",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-woven-romper-cat-38-jack-8482/-/A-94576191",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-39-knit-romper-all-in-motion-8482/-/A-94334750",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-embroidered-terry-short-sleeve-romper-blue/-/A-94431067",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-sleeveless-floral-romper-cat-38-jack-8482-purple/-/A-94290595",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-sleeveless-floral-romper-cat-38-jack-8482/-/A-94600611",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-knit-tie-dye-stars-romper-cat-jack-blue/-/A-94147303",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/patpat-disney-princess-frozen-elsa-toddler-girl-cute-romper-with-tulle-skirt-overlay-birthday-summer-jumpsuit-2-6years/-/A-1004002720",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/patpat-disney-mickey-mouse-friends-minnie-toddler-girl-romper-sleeveless-bowknot-character-doodle-print-jumpsuit-3-10-years/-/A-1003991075",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/disney-princess-moana-frozen-rapunzel-jasmine-belle-girls-romper-and-skirt-little-kid-to-big-kid/-/A-87274129",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/disney-princess-mulan-belle-ariel-cinderella-sleeveless-romper-pink/-/A-87255273",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-polly-puppy-french-terry-sleeveless-romper-infant-to-big-kid/-/A-1001418062",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-smocked-waist-chambray-romper-kids/-/A-1002929863",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-volant-ruffle-shorts-romper-jacquard-stripe/-/A-93159370",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-mouse-nightmare-before-christmas-pixar-toy-story-lion-king-baby-girls-romper-infant-to-big-kid/-/A-87266004",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/volant-ruffle-shorts-romper-sodalite-blue/-/A-93159926",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-chase-marshall-girls-sleeveless-romper-little-kid-to-big-kid/-/A-87274558",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-the-child-girls-french-terry-romper-little-kid-to-big-kid/-/A-89224470",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-girls-romper-little-kid-to-big-kid/-/A-89160635",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-harry-potter-girls-french-terry-sleeveless-romper-little-kid-to-big-kid/-/A-88669951",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-terry-cloth-romper-vibrant-orange-and-white/-/A-1002973408",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-terry-cloth-romper-vibrant-pink-and-white/-/A-1002958070",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-linen-peter-pan-collar-button-front-romper-kids/-/A-1001269744",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-puff-sleeve-smocked-romper-kids/-/A-1002929965",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-romper-flounce-squar-neck-belted-jumpsuit-with-lace-trim-elastic-adjustbale-neckline-romper/-/A-93018916",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-linen-ruffle-collar-pull-on-romper-kids/-/A-1002929979",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-flutter-sleeve-faux-top-pull-on-linen-romper-kids/-/A-90598269",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-minnie-mouse-girls-sleeveless-romper-toddler-to-big-kid/-/A-89603032",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-volant-ruffle-shorts-romper-animal-arabesque/-/A-93159211",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-girls-romper/-/A-87184715",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/warner-bros-dc-comics-justice-league-wonder-woman-romper-mask-grey/-/A-87262604",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-girls-sleeveless-romper-little-kid/-/A-87721796",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-floral-knit-criss-cross-back-romper-petit-confection/-/A-1001354774",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-romper-with-frills-green-with-white-and-pink-bird/-/A-1002957826",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-floral-romper-petit-confection/-/A-1000915764",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-summer-romper-kickee/-/A-1004815923",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-summer-romper-kickee/-/A-1004815886",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-summer-romper-kickee/-/A-1004815887",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-summer-romper-kickee/-/A-1004815847",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-romper-lilac-tropical-and-pink-flamingos/-/A-1002973011",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-sleeveless-seersucker-romper-blue-and-white-striped/-/A-1002957793",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/larkspur-baby-zip-romper-in-rose/-/A-1001857224",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-print-ruffle-tank-romper-kickee/-/A-1001401284",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-eyelet-romper-petit-confection/-/A-1000915755",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-floral-smocked-ruffle-romper-petit-confection/-/A-1001376643",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-kids-star-printed-jersey-romper-copenhagen-delights/-/A-1001376593",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-heart-printed-jersey-romper-copenhagen-delights/-/A-1001376587",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-birds-printed-muslin-romper-makemake-organics/-/A-1001165329",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-s-floral-printed-romper-emile-et-rose/-/A-1001165298",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-kid-s-unisex-christening-gift-set-romper-precious-moments/-/A-1001143307",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-liberty-jersey-romper-petit-confection/-/A-1000915771",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-daisy-jersey-romper-petit-confection/-/A-1000915811",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-s-floral-tiered-romper-petit-confection/-/A-1000915715",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-knitted-romper-bean-baby-clothes/-/A-1000916261",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-strawberry-printed-romper-petit-confection/-/A-1000915809",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-liberty-ruffle-romper-petit-confection/-/A-1000915783",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-floral-ruffle-romper-petit-confection/-/A-1000915750",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-kids-muslin-romper-petit-confection/-/A-1000915753",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-paisley-romper-petit-confection/-/A-1000915734",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girls-polka-dot-ruffle-romper-petit-confection/-/A-1000915740",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/girl-kids-muslin-romper-petit-confection/-/A-1000915728",
      tags: "Girl, Rompers",
    },
    {
      url: "https://www.target.com/p/maidenform-girls-wire-free-padded-bra/-/A-88282583",
      tags: "Girl, Scoop Neck Bras",
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-camisole-bra-top-girls/-/A-83775199",
      tags: "Girl, Scoop Neck Bras",
    },
    {
      url: "https://www.target.com/p/girls-39-pull-on-uniform-knit-skort-cat-38-jack-8482/-/A-88909052",
      tags: "Girl, Scooters",
    },
    {
      url: "https://www.target.com/p/toddler-girls-pull-on-uniform-knit-skort-cat-jack/-/A-87050915",
      tags: "Girl, Scooters",
    },
    {
      url: "https://www.target.com/p/dragonwing-showcase-dress/-/A-1001541848",
      tags: "Girl, Sheath Dresses",
    },
    {
      url: "https://www.target.com/p/girls-bluey-square-neck-all-over-print-dress-blue/-/A-93447112",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/toddler-girls-39-adaptive-sleeveless-4th-of-july-39-star-39-dress-cat-38-jack-8482-red/-/A-94310276",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-sleeveless-woven-floral-dress-cat-38-jack-8482-turquoise-green/-/A-94310274",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-sleeveless-4th-of-july-39-star-39-dress-cat-38-jack-8482-red/-/A-94310275",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-magic-ombre-sequin-bomber-jacket/-/A-93275236",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-mesh-pleated-polo-dress/-/A-90902470",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/toddler-girls-39-adaptive-sleeveless-woven-floral-dress-cat-38-jack-8482-turquoise-green/-/A-94310272",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/fluttering-butterfly-ruffle-sleeve-dress-mia-belle-girls/-/A-1003810112",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/ruffled-apple-striped-dress-mia-belle-girls/-/A-1004233781",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-bubble-gum-sequin-puff-sleeve-dress/-/A-93788527",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/sparkle-hop-sequined-fur-easter-dress-mia-belle-girls/-/A-1002839650",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-hooded-dress-pink-flowers-on-white-background/-/A-1002805894",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-colorful-stardust-sequin-puff-sleeve-dress/-/A-1000912771",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/reebok-girls-la-kings-drop-waist-dress/-/A-1004746122",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/mary-engelbreit-kayla-dress-dusty-blue-sailor/-/A-1003554814",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/pink-sequin-daisy-pearl-accent-shift-dress-mia-belle-girls/-/A-1003885720",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/sol-angeles-kids-one-shoulder-mini-ruffle-dress/-/A-1003665978",
      tags: "Girl, Shift Dresses",
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-short-sleeve-polo-dress/-/A-93421496",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-frozen-princess-lion-king-jasmine-elsa-simba-girls-tulle-dress-little-kid-to-big-kid/-/A-87894051",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/bluey-character-print-girls-dress-infants-to-big-kids/-/A-91123918",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-queen-bee-girls-french-terry-cosplay-dress-little-kid-to-big-kid/-/A-88296594",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/my-little-pony-pinkie-pie-rainbow-dash-girls-dress-little-kid-to-big-kid/-/A-87294328",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girls-dress-little-kid-to-big/-/A-92302265",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-chiffon-pleated-dress/-/A-1002436049",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-mesh-pleated-polo-dress/-/A-89626463",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hello-kitty-square-neck-pleated-dress/-/A-1003209265",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-mouse-rainbow-tulle-dress-toddler-to-big-kid/-/A-88290562",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-junior-square-neck-pleated-dress/-/A-1003209288",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-girls-french-terry-skater-dress-toddler-to-big-kid/-/A-88951172",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-girls-dress-little-kid-to-big-kid/-/A-89557006",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-bluey-girls-dress-toddler-to-big-kid/-/A-88201804",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/strawberry-shortcake-tulle-dress-sizes-2t-10-12/-/A-1001554721",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/bluey-girls-mesh-cosplay-dress-little-kid-to-big-kid/-/A-88256269",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-frozen-dress-for-girls-elsa-snowflake-princess-dress-white-pink-lilac/-/A-1003488203",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/mattel-monster-high-dress-sizes-4-14-16/-/A-1002435990",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-chambray-dress-little-kid-to-big/-/A-92302318",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-rena-rouge-girls-tulle-dress-toddler-to-big-kid/-/A-87237131",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-princess-frozen-minnie-mouse-moana-mulan-the-little-mermaid-cinderella-skater-dress-scrunchie-toddler-to-big-kid/-/A-87274524",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-princess-ariel-snow-white-rapunzel-belle-cinderella-little-girls-2-pack-dresses-disney-princesses/-/A-86005748",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-moana-girls-2-pack-dress-multicolor-10/-/A-1003488315",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-lion-king-simba-nala-short-sleeve-dress/-/A-85239152",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-anna-moana-princess-rapunzel-jasmine-belle-girls-french-terry-dress-little-kid-to-big-kid/-/A-87245446",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-tulle-dress-sizes-2t-14-16/-/A-1001160018",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-girls-fur-costume-dress-little-kid-to-big-kid/-/A-1003406892",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/peppa-pig-girls-short-sleeve-dress-toddler-to-little-kid/-/A-87294219",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/star-wars-french-terry-skater-dress/-/A-1002436011",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-girls-mesh-cosplay-tulle-dress-little-kid-to-big-kid/-/A-88155973",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/bluey-square-neck-pleated-dress/-/A-1003209281",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/sesame-street-birthday-mesh-dress/-/A-1002811046",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-dress-little-kid/-/A-87184999",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dreamworks-trolls-poppy-girls-dress-toddler-to-little-kid/-/A-85239214",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/minions-tulle-dress-sizes-4-6x/-/A-1001372854",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-collar-dress-for-toddler-and-big-kids/-/A-1003298328",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-tie-shoulder-twirl-dress/-/A-1003407904",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-interlock-polo-dress/-/A-93037909",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-everest-rubble-marshall-chase-skye-girls-dress-little-kid-to-big-kid/-/A-87251712",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hello-kitty-sanrio-girls-long-sleeve-shirt-overall-jumper-skirt-set-for-toddler-to-little-kids/-/A-1001307951",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-mesh-dress-little-kid-to-big/-/A-92672187",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/wrapables-girls-casual-summer-dress-with-sequins/-/A-1002844340",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/sesame-street-elmo-french-terry-short-sleeve-dress-scrunchy-set-red/-/A-87237364",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-mesh-pleated-polo-dress/-/A-1004545272",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/nickelodeon-blue-s-clues-short-sleeve-dress-scrunchy-light-gray/-/A-87265960",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-fancy-nancy-short-sleeve-tutu-dress-scrunchy-set-pink/-/A-87384200",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-tie-shoulder-twirl-dress/-/A-1003407940",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-save-ferris-graphic-short-sleeve-fleece-dress/-/A-1002118433",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-ferris-my-hero-graphic-short-sleeve-fleece-dress/-/A-1002032866",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/charmed-the-power-of-three-will-set-you-free-graphic-short-sleeve-fleece-dress/-/A-1001994398",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-how-could-i-possibly-graphic-short-sleeve-fleece-dress/-/A-1002031722",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-bueller-bueller-bueller-graphic-short-sleeve-fleece-dress/-/A-1002031453",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-do-you-know-anything-graphic-short-sleeve-fleece-dress/-/A-1002030585",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-this-is-my-camping-shirt-graphic-short-sleeve-fleece-dress/-/A-1001738933",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-mesh-polo-dress/-/A-86739562",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-adventure-citys-heroes/-/A-1000807407",
      tags: "Girl, Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girls-4-pack-cotton-activewear-biker-shorts-set/-/A-1003791044",
      tags: "Girl, Short Sets",
    },
    {
      url: "https://www.target.com/p/disney-princess-ariel-belle-rapunzel-moana-girls-4-pack-bike-shorts-toddler-to-big-kid/-/A-88398096",
      tags: "Girl, Short Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-denim-shortalls-cat-38-jack-8482-medium-wash/-/A-94130968",
      tags: "Girl, Shortalls",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-shortalls/-/A-82243176",
      tags: "Girl, Shortalls",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-ribbed-dress-cat-38-jack/-/A-94486514",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-39-rib-tank-dress-cat-38-jack-8482-hot-pink/-/A-94219171",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-tank-dress-cat-38-jack-8482/-/A-94147428",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-knit-dress-cat-jack/-/A-89487285",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-tiered-ribbed-dress-cat-38-jack-8482/-/A-92901438",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-39-moana-2-cosplay-dress-coral-red-ivory/-/A-92185954",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-halloween-dress-cat-jack/-/A-94486516",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-halloween-dress-cat-38-jack/-/A-94486513",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-organza-puff-sleeve-babydoll-dress-red/-/A-93276260",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-2-pack-skater-dresses-little-kid-to-big/-/A-91318240",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/just-love-girls-twirl-dress-girls-short-sleeve-twirly-skater-dress/-/A-1002806899",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/squishmallows-2-pack-skater-dresses/-/A-1003364007",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-raya-and-the-last-dragon-encanto-moana-mirabel-sisu-girls-dress-tulle-dress-little-kid-to-big-kid/-/A-87291054",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/leveret-girls-and-doll-matching-skirt-dress/-/A-89594643",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/bluey-mom-dad-bingo-girls-2-pack-skater-dresses-toddler-to-big-kid/-/A-88256298",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-evolution-stickers-fit-flair-cap-sleeve-dress/-/A-1002396657",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-mouse-daisy-lilo-stitch-princess-belle-ariel-girls-chambray-skater-dress-toddler-to-big-kid/-/A-91112581",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/bluey-girls-dress-little-kid-to-big-kid/-/A-88417244",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-queen-bee-kitty-queen-girls-skater-sequin-dresses-scrunchie-toddler-to-big-kid/-/A-88257632",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-skater-dress-with-headband-for-toddler-and-big-kids-size-2t/-/A-1004605444",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hello-kitty-sanrio-girls-french-terry-skater-dress-for-toddler-and-big-kids-size-12/-/A-1004605419",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-ombre-sequin-sparkle-tulle-puff-sleeve-dress/-/A-1001695081",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-princess-anna-olaf-christmas-girls-skater-dress-little-kid/-/A-85239228",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ballerina-this-girl-can-dance-fit-flair-cap-sleeve-dress/-/A-93305049",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-group-fit-flair-cap-sleeve-dress/-/A-1002357151",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-sleeveless-knit-pinafore-dress-kids/-/A-90586123",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-organza-puff-sleeve-babydoll-fit-flare-dress/-/A-1001024516",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-organza-puff-sleeve-babydoll-dress/-/A-93788533",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-iridescent-star-sequin-puff-sleeve-dress/-/A-1000939526",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-soft-girls-jersey-short-sleeve-twirly-skater-dress/-/A-91487571",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-button-front-ruffle-sundress-kids/-/A-1002929811",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-scuba-cosplay-tulle-dress/-/A-1003633328",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-ruffle-collar-party-dress-with-eyelet-embroidery-kids/-/A-1001113750",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-chambray-sundress-with-embroidery-kids/-/A-1002929800",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-fit-flair-cap-sleeve-dress/-/A-1002396678",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-print-3-4-sleeve-twirl-dress/-/A-1004010297",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/bluey-girls-velour-skater-dress-little-kid-to-big-kid/-/A-1000180890",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-flutter-sleeve-eyelet-dress-kids/-/A-1002929989",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-schoolgirl-cable-sweater-dress-kids/-/A-92214479",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-pleated-flutter-sleeve-apron-dress-with-embroidery-kids/-/A-1002929847",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-puff-sleeve-smocked-party-dress-with-ruffle-collar-kids/-/A-1001113852",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-girls-organic-sleeveless-pleated-sweater-dress-with-bow-kids/-/A-1001113679",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-short-sleeve-seersucker-dress-with-peter-pan-collar-kids/-/A-90586101",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-organza-long-sleeve-tiered-babydoll-skater-dress/-/A-1001833844",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/harry-potter-2-pack-skater-dresses/-/A-1002897100",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-psyduck-spiral-fit-flair-cap-sleeve-dress/-/A-1002395649",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-starry-mew-fit-flair-cap-sleeve-dress/-/A-1002396536",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-charmander-see-the-evolution-fit-flair-cap-sleeve-dress/-/A-1002396995",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-eeveelution-stickers-graphic-sleeveless-aline-dress/-/A-1002405597",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-eevee-retro-stripe-graphic-sleeveless-aline-dress/-/A-1002404978",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-short-sleeve-puff-sleeve-party-dress-kids/-/A-90598312",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-39-astrid-skater-dress-white/-/A-91487285",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-crochet-detail-empire-waist-seersucker-dress-kids/-/A-1002929817",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-soft-cotton-jersey-s-s-peter-pan-polo-twirly-dress/-/A-92901118",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-soccer-team-1959-fit-flair-cap-sleeve-dress/-/A-93305022",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-cap-sleeve-party-dress-with-bow-sash-kids/-/A-89804775",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-race-crew-5-yrs-fit-flair-cap-sleeve-dress/-/A-1002085415",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-classic-logo-pink-fit-flair-cap-sleeve-dress/-/A-1002075746",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-solid-sleeveless-twirl-dress/-/A-1004010308",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sateen-cap-sleeve-special-occasion-smocked-flower-girl-dress-kids/-/A-1001270694",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-stretch-poplin-sash-dress-kids/-/A-92214445",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-jersey-long-sleeve-twirly-skater-dress/-/A-90461636",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/kyte-baby-twirl-dress-in-taro/-/A-93677870",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-skater-chick-w-flowers-graphic-sleeveless-aline-dress/-/A-1001996638",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-mermaid-magic-fit-flair-cap-sleeve-dress/-/A-1000871750",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-original-barbie-fit-flair-cap-sleeve-dress/-/A-1002061861",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/disney-moana-girls-french-terry-skater-dress-with-headband-for-toddler-and-big-kids-size-12/-/A-1004605436",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-sk8er-grl-fit-flair-cap-sleeve-dress/-/A-1001998188",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-afro-hoops-fit-flair-cap-sleeve-dress/-/A-1002081622",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunglasses-and-sun-fit-flair-cap-sleeve-dress/-/A-1002058597",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-i-m-so-sweet-fit-flair-cap-sleeve-dress/-/A-1002396126",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-be-original-squares-fit-flair-cap-sleeve-dress/-/A-1002082993",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-clawdeen-cleo-draculaura-frankie-rainbow-logo-fit-flair-cap-sleeve-dress/-/A-93675515",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-trainer-graphic-sleeveless-aline-dress/-/A-1002405197",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-christie-retro-1987-fit-flair-cap-sleeve-dress/-/A-93304971",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-organza-long-sleeve-tiered-babydoll-skater-dress/-/A-1001833842",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-seersucker-flutter-sleeve-open-back-dress-kids/-/A-1000871930",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-this-girl-is-changing-the-world-fit-flair-cap-sleeve-dress/-/A-93305011",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-peter-pan-collar-seersucker-dress-kids/-/A-90585910",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/kyte-baby-twirl-dress-in-midnight/-/A-93677892",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-sleeveless-special-occasion-party-dress-with-cross-back-detail-kids/-/A-90586267",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-quilted-puff-sleeve-dress-kids/-/A-92929618",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-cable-knit-peter-pan-collar-sweater-dress-kids/-/A-92929491",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-merry-christmas-dude-fit-flair-cap-sleeve-dress/-/A-1000876457",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-squirtle-charmander-and-bulbasaur-youth-girls-fit-and-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002396625",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-slowpoke-taking-it-slow-fit-flair-cap-sleeve-dress/-/A-1002397035",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-halloween-barbie-fit-flair-cap-sleeve-dress/-/A-1002092036",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-hand-painted-heart-fit-flair-cap-sleeve-dress/-/A-1002072847",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-all-together-fit-flair-cap-sleeve-dress/-/A-1002069856",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girls-run-the-world-graphic-sleeveless-aline-dress/-/A-1002072780",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-short-bubble-sleeve-smocked-dress-kids/-/A-90598282",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-short-sleeve-sateen-dress-with-peter-pan-collar-kids/-/A-1001113761",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-baby-yoda-french-terry-dress-scrunchy-set/-/A-87266123",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-chase-marshall-girls-french-terry-skater-dress-and-scrunchie-little-kid-to-big-kid/-/A-87280691",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-let-it-snow-fit-flair-cap-sleeve-dress/-/A-1000877308",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-quilted-puff-sleeve-dress-kids/-/A-92688302",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-frankie-draculaura-clawdeen-m-f-f-fit-flair-cap-sleeve-dress/-/A-1002008144",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-puff-sleeve-smocked-party-dress-with-peter-pan-collar-kids/-/A-1001113850",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-short-sleeve-dresses-2-pack/-/A-1004010293",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-character-image-fit-flair-cap-sleeve-dress/-/A-1001976513",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-tennis-sweater-dress-kids/-/A-1000871924",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-summer-dreams-trio-fit-flair-cap-sleeve-dress/-/A-93305000",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-heart-grid-fit-flair-cap-sleeve-dress/-/A-1002082900",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girl-strong-kind-brave-bold-and-fearless-fit-flair-cap-sleeve-dress/-/A-1002071746",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-puff-sleeve-organza-bow-party-dress/-/A-1002422202",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/twirl-dress-in-the-very-hungry-caterpillar-and-friends/-/A-1003295088",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-bff-hearts-fit-flair-cap-sleeve-dress/-/A-1002109294",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-spider-gwen-ghost-spider-girls-2-pack-skater-dresses-little-kid-to-big/-/A-91318366",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-happy-eevee-graphic-sleeveless-aline-dress/-/A-1002405031",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002107572",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-jiggypuff-sing-along-fit-flair-cap-sleeve-dress/-/A-1002395866",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/disney-frozen-2-girls-elsa-and-anna-lavender-kids-sleeveless-dress/-/A-92711251",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-bulbasaur-anime-battle-youth-girls-fit-and-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002377752",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-group-graphic-sleeveless-aline-dress/-/A-1002404446",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-fly-on-the-4th-of-july/-/A-1000770888",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-long-sleeve-tiered-button-front-peter-pan-collar-dress-kids/-/A-89379345",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002074915",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-pizza-power-fit-flair-cap-sleeve-dress/-/A-1000451687",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-will-save-the-world-fit-flair-cap-sleeve-dress/-/A-1002073251",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-support-girls-fit-flair-cap-sleeve-dress/-/A-1002061139",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunny-days-ahead-fit-flair-cap-sleeve-dress/-/A-1000412951",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-girls-2-pack-skater-dresses-little-kid-to-big-kid/-/A-88296619",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunny-days-ahead-fit-flair-cap-sleeve-dress/-/A-1000413073",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-monster-high-2-girl-crew-fit-flair-cap-sleeve-dress/-/A-1002008114",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-fit-flair-cap-sleeve-dress/-/A-1002396673",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/twirl-dress-in-construction/-/A-1003295109",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-strong-girls-club-graphic-sleeveless-aline-dress/-/A-1002062018",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-property-of-barbie-land-beach-volleyball-team-graphic-sleeveless-aline-dress/-/A-1002118737",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-bikini-bottom-egg-hunting-champ/-/A-1000850234",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-big-eyes/-/A-1000781125",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-snorlax-fit-flair-cap-sleeve-dress/-/A-1002396883",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-be-you-fit-flair-cap-sleeve-dress/-/A-1002082790",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-retro-graphic-sleeveless-aline-dress/-/A-1002405521",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-and-eevee-fit-flair-cap-sleeve-dress/-/A-1002395001",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-snorlax-graphic-sleeveless-aline-dress/-/A-1002405445",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-four-elements-square/-/A-1000764510",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-welcome-to-the-barbie-dream-house-fit-flair-cap-sleeve-dress/-/A-1002109459",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-evolutions-graphic-sleeveless-aline-dress/-/A-1002404806",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-race-crew-4-yrs-fit-flair-cap-sleeve-dress/-/A-1002086076",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-scary-fast-fit-flair-cap-sleeve-dress/-/A-1002093118",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-sleeveless-bow-shoulder-simple-sundress-kids/-/A-88766137",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-leaves-swirling-fit-flair-cap-sleeve-dress/-/A-1002065480",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-dragonite-charizard-prepare-for-battle-graphic-sleeveless-aline-dress/-/A-1002404539",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/wrapables-girls-casual-print-cotton-dress/-/A-1002865827",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-ruffle-collar-sweater-dress-black-with-gold-7/-/A-93415883",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-strong-girls-make-waves-fit-flair-cap-sleeve-dress/-/A-1002109510",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-fun-in-the-sun-fit-flair-cap-sleeve-dress/-/A-93305043",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002074770",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-classic-logo-fit-flair-cap-sleeve-dress/-/A-1002112526",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-hypnotic-pikachu-art-fit-flair-cap-sleeve-dress/-/A-1002396693",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-logo-hearts-fit-flair-cap-sleeve-dress/-/A-1002083745",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-sleeveless-twirl-dress-botanical-floral/-/A-1004010315",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-blue-ink-frankie-fit-flair-cap-sleeve-dress/-/A-1001976524",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-candy-hearts-fit-flair-cap-sleeve-dress/-/A-1002083443",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-palm-trees-fit-flair-cap-sleeve-dress/-/A-1002063448",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/seven-times-six-my-little-pony-friendship-is-magic-girl-s-rainbow-dash-tank-top-dress-for-kids-grey/-/A-1000138305",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-i-m-so-sweet-graphic-sleeveless-aline-dress/-/A-1002405385",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-feelin-salty/-/A-1000781030",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-summer-pool-floaties-fit-flair-cap-sleeve-dress/-/A-1002060689",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-barbie-land-athletics-fit-flair-cap-sleeve-dress/-/A-1002051454",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-incredibly-fabulous-fit-flair-cap-sleeve-dress/-/A-1002048880",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-ruffle-sleeve-ponte-dress-with-suede-detail-kids-6/-/A-90368716",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-jiggypuff-sing-along-fit-flair-cap-sleeve-dress/-/A-1002395999",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-squirtle-bulbasaur-charmander-group-fit-flair-cap-sleeve-dress/-/A-1002348144",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002049915",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-solid-3-4-sleeve-twirl-dress/-/A-1004482056",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-middle-school-dolls-fit-flair-cap-sleeve-dress/-/A-1002047901",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girls-support-girls-graphic-sleeveless-aline-dress/-/A-1002064369",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-afro-hoops-graphic-sleeveless-aline-dress/-/A-1002117706",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-summer-pool-floaties-graphic-sleeveless-aline-dress/-/A-1002060502",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-deuce-gorgon-graphic-sleeveless-aline-dress/-/A-1002008499",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-witch-graphic-sleeveless-aline-dress/-/A-1002118196",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-believe-in-yourself-graphic-sleeveless-aline-dress/-/A-1002082781",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-solid-3-4-sleeve-twirl-dress/-/A-1004482057",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-birthday-kid-graphic-sleeveless-aline-dress/-/A-1002118078",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-5-yrs-graphic-sleeveless-aline-dress/-/A-1002085359",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-athletics-graphic-sleeveless-aline-dress/-/A-1002118797",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-sleeveless-aline-dress/-/A-1002067128",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-sister-of-birthday-boy-graphic-sleeveless-aline-dress/-/A-1002085829",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-ready-to-smash-cake-graphic-sleeveless-aline-dress/-/A-1002086342",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-i-am-powerful-graphic-sleeveless-aline-dress/-/A-1002070090",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-sk8er-grl-graphic-sleeveless-aline-dress/-/A-1002118226",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-happy-birthday-to-me-graphic-sleeveless-aline-dress/-/A-1002118124",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-4-yrs-graphic-sleeveless-aline-dress/-/A-1002085785",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-proud-to-be-me-graphic-sleeveless-aline-dress/-/A-1002091348",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-happy-spring-graphic-sleeveless-aline-dress/-/A-1002069955",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-out-of-office-graphic-sleeveless-aline-dress/-/A-1002060106",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-righteous-dude-graphic-sleeveless-aline-dress/-/A-1002030369",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-sleeveless-aline-dress/-/A-1002069573",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girls-run-the-world-graphic-sleeveless-aline-dress/-/A-1002074815",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-happy-heart-day-graphic-sleeveless-aline-dress/-/A-1002081644",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-sun-s-out-graphic-sleeveless-aline-dress/-/A-1002057031",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-going-big-for-my-birthday-graphic-sleeveless-aline-dress/-/A-1002086876",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-how-could-i-possibly-graphic-sleeveless-aline-dress/-/A-1002031881",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-fitness-barbie-graphic-sleeveless-aline-dress/-/A-1002117985",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-ken-hearts-barbie-graphic-sleeveless-aline-dress/-/A-1002066647",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-frankiestein-voltageous-graphic-sleeveless-aline-dress/-/A-1002008486",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-i-wheelie-love-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1002104985",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-this-is-how-i-roll-holiday-fit-flair-cap-sleeve-dress/-/A-1002048754",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-believe-in-miracles-holiday-fit-flair-cap-sleeve-dress/-/A-1002049844",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holiday-friends-fit-flair-cap-sleeve-dress/-/A-1002049278",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-clover-power-graphic-sleeveless-aline-dress/-/A-1002108095",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/kyte-baby-twirl-dress-in-blush/-/A-93677877",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-skater-dress-with-headband-for-toddler-and-big-kids-size-2t/-/A-1004605451",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-summer-pattern-fit-flair-cap-sleeve-dress/-/A-1002396314",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-open-your-mind-open-your-heart-fit-flair-cap-sleeve-dress/-/A-1003970570",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-we-re-so-ambitous-fit-flair-cap-sleeve-dress/-/A-1003970564",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-solid-3-4-sleeve-twirl-dress/-/A-1004482058",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-solid-3-4-sleeve-twirl-dress/-/A-1004482052",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-solid-3-4-sleeve-twirl-dress/-/A-1004482051",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-witch-pikachu-with-candy-fit-flair-cap-sleeve-dress/-/A-1002355140",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/seven-times-six-dc-comics-wonder-woman-dress-girls-cosplay-skater-dress/-/A-1004478522",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-happy-birthday-to-me-fit-flair-cap-sleeve-dress/-/A-1002086336",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002074737",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-they-call-me-ken-fit-flair-cap-sleeve-dress/-/A-1002059770",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/worthy-threads-little-big-girls-three-quarter-sleeve-twirly-dresses/-/A-1004020895",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/worthy-threads-little-big-girls-ruffle-cap-sleeve-racer-back-dresses/-/A-1004020865",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/twirl-dress-in-blush-butterfly/-/A-1003295100",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/mykids-usa-preppy-style-autumn-girls-horse-embroidery-collar-long-sleeves-dress/-/A-1002991038",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bi-material-dress-with-ruffle-gingham-skirt-lilac-and-white/-/A-1002806668",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/p-s-from-aeropostale-toddler-little-girls-2-piece-skater-dresses/-/A-1002589046",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-dear-santa-fit-flair-cap-sleeve-dress/-/A-1000877017",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-game-on-mike-fit-flair-cap-sleeve-dress/-/A-1000838448",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-what-rules-leo-and-brothers-fit-flair-cap-sleeve-dress/-/A-1000479072",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-team-shreadder-foot-clan-member-fit-flair-cap-sleeve-dress/-/A-1000808999",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-electric-type-graphic-sleeveless-aline-dress/-/A-1002405591",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-gengar-graphic-sleeveless-aline-dress/-/A-1002405571",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-halloween-fit-flair-cap-sleeve-dress/-/A-1000877165",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-bikini-bottom-egg-hunting-champ-fit-flair-cap-sleeve-dress/-/A-1000850221",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-best-witches-fit-flair-cap-sleeve-dress/-/A-1000876536",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-bikini-bottom-beware-fit-flair-cap-sleeve-dress/-/A-1000876580",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-hooked-on-halloween-fit-flair-cap-sleeve-dress/-/A-1000876549",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-frosty-friends-fit-flair-cap-sleeve-dress/-/A-1000876056",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-halloween-y-all-fit-flair-cap-sleeve-dress/-/A-1000480355",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-scardey-pants-fit-flair-cap-sleeve-dress/-/A-1000480242",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-hypnotic-pikachu-art-graphic-sleeveless-aline-dress/-/A-1002405497",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-catch-em-all-graphic-sleeveless-aline-dress/-/A-1002405470",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-see-the-evolution-graphic-sleeveless-aline-dress/-/A-1002405454",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-squirtle-evolution-graphic-sleeveless-aline-dress/-/A-1002405433",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-squirtle-charmander-and-bulbasaur-graphic-sleeveless-aline-dress/-/A-1002405424",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-magikarp-graphic-sleeveless-aline-dress/-/A-1002405406",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-jiggypuff-music-notes-graphic-sleeveless-aline-dress/-/A-1002405397",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-psyduck-headache-graphic-sleeveless-aline-dress/-/A-1002405372",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-let-s-get-started-graphic-sleeveless-aline-dress/-/A-1002405363",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-jiggypuff-sing-along-graphic-sleeveless-aline-dress/-/A-1002405354",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-pattern-graphic-sleeveless-aline-dress/-/A-1002405345",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-catch-em-all-design-graphic-sleeveless-aline-dress/-/A-1002405285",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-neon-pikachu-graphic-sleeveless-aline-dress/-/A-1002405269",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-team-magikarp-graphic-sleeveless-aline-dress/-/A-1002404915",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-psyduck-anime-graphic-sleeveless-aline-dress/-/A-1002404905",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-bulbasaur-anime-battle-youth-girls-a-line-dress-graphic-sleeveless-aline-dress/-/A-1002404896",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-friends-retro-checkered-graphic-sleeveless-aline-dress/-/A-1002404883",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-slowpoke-relax-repeat-graphic-sleeveless-aline-dress/-/A-1002404869",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-happy-eevee-cute-graphic-sleeveless-aline-dress/-/A-1002404849",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-eat-em-all-graphic-sleeveless-aline-dress/-/A-1002404827",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pick-of-the-patch-graphic-sleeveless-aline-dress/-/A-1002404821",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-koraidon-collegiate-graphic-sleeveless-aline-dress/-/A-1002404557",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-quaxly-stats-graphic-sleeveless-aline-dress/-/A-1002404551",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-elements-graphic-sleeveless-aline-dress/-/A-1002404540",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-fuecoco-stats-graphic-sleeveless-aline-dress/-/A-1002404485",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-koraidon-elements-graphic-sleeveless-aline-dress/-/A-1002404460",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-collegiate-graphic-sleeveless-aline-dress/-/A-1002404455",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-legend-graphic-sleeveless-aline-dress/-/A-1002404435",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-witch-pikachu-with-candy-graphic-sleeveless-aline-dress/-/A-1002404367",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pumpkin-party-graphic-sleeveless-aline-dress/-/A-1002404328",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-charizard-flash-fire-graphic-sleeveless-aline-dress/-/A-1002404197",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-squirtle-bulbasaur-charmander-group-graphic-sleeveless-aline-dress/-/A-1002404142",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-snowflakes-graphic-sleeveless-aline-dress/-/A-1002404098",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-bulba-pattern-graphic-sleeveless-aline-dress/-/A-1002404077",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-flakes-graphic-sleeveless-aline-dress/-/A-1002404061",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-squirtle-and-snowflakes-graphic-sleeveless-aline-dress/-/A-1002404009",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/pok-mon-winter-fun-graphic-sleeveless-aline-dress/-/A-1002404014",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-snow-boarding-fit-flair-cap-sleeve-dress/-/A-1002396894",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-squirtle-evolution-fit-flair-cap-sleeve-dress/-/A-1002396781",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-pattern-fit-flair-cap-sleeve-dress/-/A-1002396578",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-gengar-fit-flair-cap-sleeve-dress/-/A-1002396483",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-electric-type-fit-flair-cap-sleeve-dress/-/A-1002396473",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-magikarp-fit-flair-cap-sleeve-dress/-/A-1002395711",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-neon-pikachu-fit-flair-cap-sleeve-dress/-/A-1002395643",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-neon-pikachu-fit-flair-cap-sleeve-dress/-/A-1002395631",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-psyduck-spiral-fit-flair-cap-sleeve-dress/-/A-1002395353",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-retrogamer-fit-flair-cap-sleeve-dress/-/A-1002395283",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-design-fit-flair-cap-sleeve-dress/-/A-1002395004",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-gotta-eat-em-all-fit-flair-cap-sleeve-dress/-/A-1002376980",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pick-of-the-patch-fit-flair-cap-sleeve-dress/-/A-1002376900",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-miraidon-collegiate-fit-flair-cap-sleeve-dress/-/A-1002357312",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pumpkin-party-fit-flair-cap-sleeve-dress/-/A-1002355144",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-bulba-pattern-fit-flair-cap-sleeve-dress/-/A-1002353940",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-flakes-fit-flair-cap-sleeve-dress/-/A-1002353905",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-charmander-snowflakes-fit-flair-cap-sleeve-dress/-/A-1002353899",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-squirtle-and-snowflakes-fit-flair-cap-sleeve-dress/-/A-1002353898",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-winter-fun-fit-flair-cap-sleeve-dress/-/A-1002353882",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-battle-ready-fit-flair-cap-sleeve-dress/-/A-1002348128",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-faboolous-graphic-sleeveless-aline-dress/-/A-1002118162",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-woman-kind-kind-woman-graphic-sleeveless-aline-dress/-/A-1002118010",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-afro-and-hoops-graphic-sleeveless-aline-dress/-/A-1002117849",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girls-all-together-graphic-sleeveless-aline-dress/-/A-1002117844",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-they-call-me-ken-graphic-sleeveless-aline-dress/-/A-1002117755",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunburst-logo-fit-flair-cap-sleeve-dress/-/A-1002112655",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girl-power-fit-flair-cap-sleeve-dress/-/A-1002112583",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-so-cute-it-s-scary-fit-flair-cap-sleeve-dress/-/A-1002112494",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-better-together-fit-flair-cap-sleeve-dress/-/A-1002109475",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-will-save-the-world-fit-flair-cap-sleeve-dress/-/A-1002109440",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-we-are-all-barbie-fit-flair-cap-sleeve-dress/-/A-1002109417",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-friends-brightest-rainbow-fit-flair-cap-sleeve-dress/-/A-1002109353",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-iconic-like-barbie-fit-flair-cap-sleeve-dress/-/A-1002109360",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-toddler-and-youth-girls-fit-and-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002109298",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-group-lucky-fit-flair-cap-sleeve-dress/-/A-1002108217",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-st-paddys-collage-fit-flair-cap-sleeve-dress/-/A-1002108126",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-clover-power-fit-flair-cap-sleeve-dress/-/A-1002108143",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-lucky-to-have-great-friends-fit-flair-cap-sleeve-dress/-/A-1002108062",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002107736",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002107488",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-faboolous-fit-flair-cap-sleeve-dress/-/A-1002092010",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-proud-to-be-me-fit-flair-cap-sleeve-dress/-/A-1002091487",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-witch-sihloutte-fit-flair-cap-sleeve-dress/-/A-1002090806",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-boo-barbie-girls-fit-flair-cap-sleeve-dress/-/A-1002090671",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-going-big-for-my-birthday-fit-flair-cap-sleeve-dress/-/A-1002086766",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-race-crew-3-yrs-fit-flair-cap-sleeve-dress/-/A-1002086760",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-3-yrs-graphic-sleeveless-aline-dress/-/A-1002086613",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-ready-to-smash-cake-fit-flair-cap-sleeve-dress/-/A-1002086358",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-birthday-kid-fit-flair-cap-sleeve-dress/-/A-1002086100",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-its-my-birthday-fit-flair-cap-sleeve-dress/-/A-1002086047",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/hot-wheels-its-my-birthday-graphic-sleeveless-aline-dress/-/A-1002085868",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-sister-of-birthday-boy-fit-flair-cap-sleeve-dress/-/A-1002085663",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-believe-in-yourself-fit-flair-cap-sleeve-dress/-/A-1002084578",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-happy-valentine-s-day-fit-flair-cap-sleeve-dress/-/A-1002084371",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-arrow-heart-logo-fit-flair-cap-sleeve-dress/-/A-1002083915",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-pink-core-fit-flair-cap-sleeve-dress/-/A-1002083718",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-friends-rock-fit-flair-cap-sleeve-dress/-/A-1002083160",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-love-yourself-fit-flair-cap-sleeve-dress/-/A-1002082459",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-friendship-goals-fit-flair-cap-sleeve-dress/-/A-1002082273",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-happy-heart-day-fit-flair-cap-sleeve-dress/-/A-1002081914",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-brave-bold-and-fearless-fit-flair-cap-sleeve-dress/-/A-1002081380",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-inspired-by-barbie-fit-flair-cap-sleeve-dress/-/A-1002081040",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-out-of-box-fit-flair-cap-sleeve-dress/-/A-1002078847",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-butterflies-flutter-fit-flair-cap-sleeve-dress/-/A-1002076642",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-choose-kindness-fit-flair-cap-sleeve-dress/-/A-1002076612",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-do-what-makes-you-awesome-fit-flair-cap-sleeve-dress/-/A-1002075926",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-fitness-barbie-fit-flair-cap-sleeve-dress/-/A-1002075068",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002074934",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-run-the-world-fit-flair-cap-sleeve-dress/-/A-1002073858",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002073050",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002072723",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girl-power-in-illusion-wave-graphic-sleeveless-aline-dress/-/A-1002072642",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girl-power-in-illusion-wave-fit-flair-cap-sleeve-dress/-/A-1002072390",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-vibes-fit-flair-cap-sleeve-dress/-/A-1002072317",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-run-the-world-fit-flair-cap-sleeve-dress/-/A-1002072240",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-i-am-powerful-fit-flair-cap-sleeve-dress/-/A-1002070987",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-happy-spring-fit-flair-cap-sleeve-dress/-/A-1002069809",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002069523",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-fit-flair-cap-sleeve-dress/-/A-1002069253",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-fit-flair-cap-sleeve-dress/-/A-1002069126",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002068999",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-fierce-strong-female-fit-flair-cap-sleeve-dress/-/A-1002068943",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-fit-flair-cap-sleeve-dress/-/A-1002067394",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-fit-flair-cap-sleeve-dress/-/A-1002067022",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-living-the-dream-fit-flair-cap-sleeve-dress/-/A-1002066961",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-individual-classic-icons-create-silhouette-fit-flair-cap-sleeve-dress/-/A-1002066430",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-living-the-dream-graphic-sleeveless-aline-dress/-/A-1002066327",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-hearts-barbie-fit-flair-cap-sleeve-dress/-/A-1002066022",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-girls-stick-together-graphic-sleeveless-aline-dress/-/A-1002065920",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-pool-water-reflection-graphic-sleeveless-aline-dress/-/A-1002063809",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-support-girls-fit-flair-cap-sleeve-dress/-/A-1002063787",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-pool-water-reflection-fit-flair-cap-sleeve-dress/-/A-1002063776",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-palm-trees-fit-flair-cap-sleeve-dress/-/A-1002063622",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-multi-color-choose-kindness-fit-flair-cap-sleeve-dress/-/A-1002062634",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sketch-original-fit-flair-cap-sleeve-dress/-/A-1002060584",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-original-icons-in-circle-grid-fit-flair-cap-sleeve-dress/-/A-1002060508",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-pattern-colorful-fit-flair-cap-sleeve-dress/-/A-1002060422",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-tie-dye-and-butterflies-flutter-around-barbie-graphic-sleeveless-aline-dress/-/A-1002058914",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-the-dreamhouse-60th-anniversary-fit-flair-cap-sleeve-dress/-/A-1002058557",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-stacked-barbie-vday-graphic-sleeveless-aline-dress/-/A-1002058489",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-tie-dye-and-butterflies-flutter-around-barbie-fit-flair-cap-sleeve-dress/-/A-1002058409",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-stacked-barbie-vday-fit-flair-cap-sleeve-dress/-/A-1002058377",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-xoxo-barbie-fit-flair-cap-sleeve-dress/-/A-1002058354",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-live-play-outside-the-box-fit-flair-cap-sleeve-dress/-/A-1002058006",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sun-s-out-fit-flair-cap-sleeve-dress/-/A-1002056846",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-winter-breeze-fit-flair-cap-sleeve-dress/-/A-1002056075",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-winter-breeze-graphic-sleeveless-aline-dress/-/A-1002055996",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunset-and-palm-trees-fit-flair-cap-sleeve-dress/-/A-1002055524",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-woman-kind-kind-woman-fit-flair-cap-sleeve-dress/-/A-1002054310",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-valentine-s-squad-fit-flair-cap-sleeve-dress/-/A-1002053881",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-since-1961-fit-flair-cap-sleeve-dress/-/A-1002052657",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-welcome-to-the-dreamhouse-fit-flair-cap-sleeve-dress/-/A-1002052431",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-to-the-core-fit-flair-cap-sleeve-dress/-/A-1002052240",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-living-the-dream-fit-flair-cap-sleeve-dress/-/A-1002051889",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-he-ken-can-do-it-all-fit-flair-cap-sleeve-dress/-/A-1002051858",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holiday-christmas-fit-flair-cap-sleeve-dress/-/A-1002050828",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002050737",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002050665",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-chasing-dreams-fit-flair-cap-sleeve-dress/-/A-1002050540",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-toddler-youth-girls-fit-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002050291",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002050243",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-greetings-from-barbie-land-fit-flair-cap-sleeve-dress/-/A-1002050193",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002049290",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002049231",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-serving-lewks-since-1961-fit-flair-cap-sleeve-dress/-/A-1002048915",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-property-of-barbie-land-beach-volleyball-team-fit-flair-cap-sleeve-dress/-/A-1002048115",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002047787",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002047556",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002047416",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-valentine-s-day-fit-flair-cap-sleeve-dress/-/A-1002047103",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002046811",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-winter-holidays-fit-flair-cap-sleeve-dress/-/A-1002046727",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002044258",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-valentine-s-day-fit-flair-cap-sleeve-dress/-/A-1002042839",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-ferris-my-hero-graphic-sleeveless-aline-dress/-/A-1002032805",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-ferris-my-hero-fit-flair-cap-sleeve-dress/-/A-1002032610",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-bueller-bueller-bueller-graphic-sleeveless-aline-dress/-/A-1002031330",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-how-could-i-possibly-fit-flair-cap-sleeve-dress/-/A-1002031324",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-bueller-bueller-bueller-fit-flair-cap-sleeve-dress/-/A-1002031297",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-do-you-know-anything-fit-flair-cap-sleeve-dress/-/A-1002030439",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-righteous-dude-fit-flair-cap-sleeve-dress/-/A-1002030022",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-valentine-s-you-make-my-heart-race-fit-flair-cap-sleeve-dress/-/A-1002026348",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-xoxo-heart-fit-flair-cap-sleeve-dress/-/A-1002026022",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-valentine-s-epic-fit-flair-cap-sleeve-dress/-/A-1002026019",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-valentine-s-made-to-race-fit-flair-cap-sleeve-dress/-/A-1002025473",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-red-rocker-blue-bomber-graphic-sleeveless-aline-dress/-/A-1002011367",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/monster-high-lagoona-blue-bubbles-graphic-sleeveless-aline-dress/-/A-1002010271",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-deuce-gorgon-fit-flair-cap-sleeve-dress/-/A-1002010145",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-lagoona-blue-bubbles-fit-flair-cap-sleeve-dress/-/A-1002010115",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-monster-skull-bow-fit-flair-cap-sleeve-dress/-/A-1002008164",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-cleo-mermaid-besties-fit-flair-cap-sleeve-dress/-/A-1002008156",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-nickelodeon-monster-high-the-movie-fit-flair-cap-sleeve-dress/-/A-1002008115",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-skater-chick-w-flowers-fit-flair-cap-sleeve-dress/-/A-1001998051",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-royal-rebel-fit-flair-cap-sleeve-dress/-/A-1001993126",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/lol-surprise-royal-rebel-graphic-sleeveless-aline-dress/-/A-1001990061",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/mtv-skater-graphic-sleeveless-aline-dress/-/A-1001984043",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-monster-friends-forever-fit-flair-cap-sleeve-dress/-/A-1001976559",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-frankie-stein-fit-flair-cap-sleeve-dress/-/A-1001973309",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-heath-burns-let-your-light-shine-fit-flair-cap-sleeve-dress/-/A-1001973305",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-draculaura-aka-fangtastic-fit-flair-cap-sleeve-dress/-/A-1001973298",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/if-movie-anything-s-possible-graphic-sleeveless-aline-dress/-/A-1001970382",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-patrick-it-s-lit-fit-flair-cap-sleeve-dress/-/A-1000877289",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-best-witches-fit-flair-cap-sleeve-dress/-/A-1000877240",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-franken-sponge-fit-flair-cap-sleeve-dress/-/A-1000877200",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-plankton-naughty-list-fit-flair-cap-sleeve-dress/-/A-1000877190",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-no-tricks-just-treats-fit-flair-cap-sleeve-dress/-/A-1000877125",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-boo-tiful-fit-flair-cap-sleeve-dress/-/A-1000877173",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-spongeboo-fit-flair-cap-sleeve-dress/-/A-1000877132",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-spongebob-scaredy-pants-fit-flair-cap-sleeve-dress/-/A-1000877167",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-arrr-ye-ready-for-halloween-fit-flair-cap-sleeve-dress/-/A-1000876560",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-halloween-fit-flair-cap-sleeve-dress/-/A-1000876541",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-santas-helpers-in-a-half-shell-fit-flair-cap-sleeve-dress/-/A-1000876522",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-dashing-through-the-snow-fit-flair-cap-sleeve-dress/-/A-1000876071",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-merry-beachmas-fit-flair-cap-sleeve-dress/-/A-1000876038",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-christmas-crew-fit-flair-cap-sleeve-dress/-/A-1000876035",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-chillin-like-a-villain-fit-flair-cap-sleeve-dress/-/A-1000875945",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-select-your-turtle-video-game-fit-flair-cap-sleeve-dress/-/A-1000875917",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-another-awesome-pirate-adventure-fit-flair-cap-sleeve-dress/-/A-1000871832",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-bff-of-the-sea-fit-flair-cap-sleeve-dress/-/A-1000871825",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-bonnie-bones-swabs-fit-flair-cap-sleeve-dress/-/A-1000871812",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-bonnie-bones-queen-fit-flair-cap-sleeve-dress/-/A-1000871804",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-enrique-palacios-fit-flair-cap-sleeve-dress/-/A-1000871792",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-kitty-cat-crew-fit-flair-cap-sleeve-dress/-/A-1000871758",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-my-friends-greatest-treasure-fit-flair-cap-sleeve-dress/-/A-1000871728",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-american-all-star-fit-flair-cap-sleeve-dress/-/A-1000871681",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-i-got-it-fit-flair-cap-sleeve-dress/-/A-1000871665",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-fly-on-the-4th-of-july-fit-flair-cap-sleeve-dress/-/A-1000871660",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-ready-for-baseball-fit-flair-cap-sleeve-dress/-/A-1000871652",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-spongebob-slugger-pants-fit-flair-cap-sleeve-dress/-/A-1000871612",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-zuko-fire-nation-fit-flair-cap-sleeve-dress/-/A-1000870850",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-adventures-of-jimmy-neutron/-/A-1000857475",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hoppy-easter/-/A-1000857239",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-genius/-/A-1000856371",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-gotta-blast/-/A-1000856381",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-jimmy-neutron-boy-genius-fit-flair-cap-sleeve-dress/-/A-1000856378",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-jimmy-neutron-genius-fit-flair-cap-sleeve-dress/-/A-1000856273",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-gotta-blast/-/A-1000856207",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-jimmy-neutron-adventures-of-jimmy-neutron-fit-flair-cap-sleeve-dress/-/A-1000855956",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-let-it-snow/-/A-1000851078",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-patrick-it-s-lit/-/A-1000851037",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-plankton-naughty-list/-/A-1000851006",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-best-witches/-/A-1000850972",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-boo-tiful/-/A-1000850911",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-franken-sponge/-/A-1000850882",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-creatures-of-the-deep/-/A-1000850848",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-sandy-boo-y-all/-/A-1000850794",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hey-boo/-/A-1000850776",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-no-tricks-just-treats/-/A-1000850729",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-scaredy-pants/-/A-1000850678",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongeboo/-/A-1000850671",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-easter-is-egg-fit-flair-cap-sleeve-dress/-/A-1000850208",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-easter-is-egg/-/A-1000850154",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-easter-weaster/-/A-1000850125",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-st-patricks-day-fit-flair-cap-sleeve-dress/-/A-1000850021",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hoppy-easter-icons/-/A-1000850039",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-happy-st-patricks-day/-/A-1000850024",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-hoppy-easter-fit-flair-cap-sleeve-dress/-/A-1000850009",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-luck-of-the-square-pants-fit-flair-cap-sleeve-dress/-/A-1000849929",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-st-patricks-day-fit-flair-cap-sleeve-dress/-/A-1000849954",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-luck-of-the-square-pants/-/A-1000849936",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-so-eggcited/-/A-1000849838",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-hoppy-easter-fit-flair-cap-sleeve-dress/-/A-1000849832",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hoppy-easter/-/A-1000849826",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-so-eggcited-fit-flair-cap-sleeve-dress/-/A-1000849814",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-happy-st-patricks-day/-/A-1000849705",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-dear-santa/-/A-1000848724",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-bikini-bottom-beware/-/A-1000845124",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-best-witches/-/A-1000845093",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-squidward-bah-humbug/-/A-1000840181",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-tis-the-season/-/A-1000840126",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-ho-ho-no/-/A-1000840061",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-dashing-through-the-snow/-/A-1000839878",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-frosty-friends/-/A-1000839806",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-city-scape-with-turtles-fit-flair-cap-sleeve-dress/-/A-1000838911",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-muntant-ninja-turtle-game-on-raph-fit-flair-cap-sleeve-dress/-/A-1000838466",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-who-needs-luck-with-this-charm/-/A-1000827676",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-happy-st-patricks-day/-/A-1000827624",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-squidward-luck/-/A-1000827610",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-charmed-i-m-sure/-/A-1000827601",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-prone-to-shenanigans-and-malarkey/-/A-1000827583",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-prone-to-shenanigans-and-malarkey-fit-flair-cap-sleeve-dress/-/A-1000827558",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-st-patricks-day-fit-flair-cap-sleeve-dress/-/A-1000827548",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-squidward-luck-fit-flair-cap-sleeve-dress/-/A-1000827535",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-charmed-i-m-sure-fit-flair-cap-sleeve-dress/-/A-1000827470",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rocket-power-skate-life-fit-flair-cap-sleeve-dress/-/A-1000826801",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/rocket-power-skate-life/-/A-1000826661",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-lit-fireworks-patrick/-/A-1000817243",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-silhouette-stars-stripes/-/A-1000817163",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-shine-like-fireworks/-/A-1000817131",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-did-i-scare-ya/-/A-1000810374",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-boo-crew/-/A-1000810437",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-scardey-pants/-/A-1000810342",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-what-costume/-/A-1000810365",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-boo-crew-fit-flair-cap-sleeve-dress/-/A-1000810346",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-patrick-trick-or-treating/-/A-1000810340",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-chillin-like-villains-fit-flair-cap-sleeve-dress/-/A-1000809037",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-team-shreadder-foot-clan-member/-/A-1000809046",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-xmas-sweater/-/A-1000790886",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-kamp-koral-kamp-koral-badge/-/A-1000787396",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-garfield-skater-logo/-/A-1000786000",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-squidward-bed/-/A-1000785190",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-feelin-fineapple/-/A-1000785166",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-be-the-change/-/A-1000784983",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-gary-the-snail/-/A-1000784931",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-absorb-the-love/-/A-1000784899",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-no-just-no/-/A-1000784887",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-no-pants/-/A-1000782195",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-patrick-gary/-/A-1000782166",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-character-grid/-/A-1000782139",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/rugrats-91-checkers/-/A-1000782006",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/rugrats-tommy-pickles/-/A-1000781817",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-nope-not-today/-/A-1000781694",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-stay-weird/-/A-1000781659",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-sea-ya-later/-/A-1000781661",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-bikini-bottom-group/-/A-1000781655",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-stay-silly/-/A-1000781651",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-another-awesome-pirate-adventure/-/A-1000781436",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-i-got-it/-/A-1000781355",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-i-m-ready/-/A-1000781109",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/rugrats-checkers/-/A-1000781046",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-bikini-bottom-super-band/-/A-1000781028",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-adventure-awaits-amigos/-/A-1000773145",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-bonnie-bones-queen/-/A-1000773132",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-enrique-palacios/-/A-1000772923",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-bff-of-the-sea/-/A-1000772867",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-bonnie-bones-swabs/-/A-1000772782",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-kitty-cat-crew/-/A-1000772394",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-mermaid-magic/-/A-1000771968",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-splashtastic/-/A-1000771478",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-american-all-star/-/A-1000770904",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-it-s-lit/-/A-1000770845",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-red-white-and-deep-blue-sea/-/A-1000770820",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-slugger-pants/-/A-1000770800",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-ready-for-baseball/-/A-1000770758",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-aang-2005/-/A-1000764786",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/barbie-sunny-days-ahead/-/A-1000754716",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-easter-weaster-fit-flair-cap-sleeve-dress/-/A-1000501798",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-hoppy-easter-icons-fit-flair-cap-sleeve-dress/-/A-1000501443",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-life-liberty-pursuit-of-pizza-fit-flair-cap-sleeve-dress/-/A-1000497974",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-did-i-scare-ya-fit-flair-cap-sleeve-dress/-/A-1000480386",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-ghosting-level-flying-dutchman-fit-flair-cap-sleeve-dress/-/A-1000480254",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-it-be-halloween-matey-fit-flair-cap-sleeve-dress/-/A-1000480236",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-patrick-trick-or-treating-fit-flair-cap-sleeve-dress/-/A-1000480230",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-leo-and-brothers-turtle-power-fit-flair-cap-sleeve-dress/-/A-1000479116",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-spongebob-xmas-sweater-fit-flair-cap-sleeve-dress/-/A-1000474871",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-garfield-skater-logo-fit-flair-cap-sleeve-dress/-/A-1000466063",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-gary-the-snail-fit-flair-cap-sleeve-dress/-/A-1000463212",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-bikini-bottom-university-fit-flair-cap-sleeve-dress/-/A-1000463148",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rugrats-reptar-tokyo-fit-flair-cap-sleeve-dress/-/A-1000461389",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-weird-fit-flair-cap-sleeve-dress/-/A-1000451855",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-not-today-fit-flair-cap-sleeve-dress/-/A-1000451830",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-spongebob-silly-face-fit-flair-cap-sleeve-dress/-/A-1000451758",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-sewer-skateboard-fit-flair-cap-sleeve-dress/-/A-1000451753",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-high-five-fit-flair-cap-sleeve-dress/-/A-1000451667",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rugrats-breakout-fit-flair-cap-sleeve-dress/-/A-1000450157",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rugrats-reptar-revival-tour-fit-flair-cap-sleeve-dress/-/A-1000449898",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rugrats-reptar-bar-fit-flair-cap-sleeve-dress/-/A-1000449805",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rugrats-sorry-for-what-i-said-fit-flair-cap-sleeve-dress/-/A-1000449713",
      tags: "Girl, Skater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-39-floral-woven-skort-cat-38-jack-8482/-/A-94624494",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-knit-patch-pocket-skort-cat-jack/-/A-90866795",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-39-woven-performance-uniform-skort-cat-38-jack-8482-khaki/-/A-88297950",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-39-tiered-knit-skort-cat-38-jack-8482/-/A-92929060",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-knit-skort-art-class/-/A-93460935",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-39-knit-terry-skort-cat-38-jack-8482/-/A-94286425",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-39-pull-on-knit-skort-cat-38-jack/-/A-94624499",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-pleated-twill-uniform-skort-cat-jack/-/A-89456307",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-tiered-skort-cat-jack/-/A-93205332",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-39-gauze-woven-skort-cat-38-jack-8482/-/A-94624500",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/toddler-girls-39-uniform-quick-dry-skort-cat-38-jack-8482/-/A-94253668",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-39-woven-performance-pleated-uniform-skort-cat-38-jack-8482-blue/-/A-88297945",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-friends-pleated-woven-skort-off-white/-/A-94431150",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-friends-pleated-woven-skort-blue/-/A-94431149",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-39-woven-performance-pleated-uniform-skort-cat-38-jack-8482-khaki/-/A-88297940",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-fleece-skort-art-class/-/A-94435217",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-knit-skort/-/A-86738553",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-blend-chino-skort-above-knee/-/A-87148851",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-performance-pleated-skort-above-the-knee/-/A-93004093",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-plaid-skort-top-of-knee/-/A-93324129",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-side-pleat-plaid-skort-above-knee/-/A-86739440",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-indigo-skort/-/A-86508138",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-blend-chino-skort-top-of-knee/-/A-87148749",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-solid-pleated-skort-top-of-knee/-/A-93004042",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-active-chino-skort-top-of-the-knee/-/A-88529069",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-slim-side-pleat-plaid-skort-above-knee/-/A-86739308",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-athletic-active-skort/-/A-88570998",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-slim-blend-chino-skort-above-knee/-/A-87149380",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-ponte-button-front-skort/-/A-87671114",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-slim-blend-chino-skort-top-of-knee/-/A-87149573",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-smocked-skorts/-/A-91379442",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-solid-a-line-skirt-below-the-knee/-/A-87148983",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-slim-solid-a-line-skirt-below-the-knee/-/A-87149576",
      tags: "Girl, Skorts",
    },
    {
      url: "https://www.target.com/p/girls-tiered-dress-art-class/-/A-94340880",
      tags: "Girl, Slip Dresses",
    },
    {
      url: "https://www.target.com/p/kids-kaitlyn-court-sneakers-art-class/-/A-89514529",
      tags: "Girl, Sneakers",
    },
    {
      url: "https://www.target.com/p/kids-marlowe-retro-court-sneakers-art-class/-/A-94268901",
      tags: "Girl, Sneakers",
    },
    {
      url: "https://www.target.com/p/kids-hollis-slip-on-sneakers-cat-jack/-/A-94267049",
      tags: "Girl, Sneakers",
    },
    {
      url: "https://www.target.com/p/s-sport-by-skechers-girls-vana-performance-sneakers/-/A-85285881",
      tags: "Girl, Sneakers",
    },
    {
      url: "https://www.target.com/p/kids-calantha-mary-jane-sneakers-art-class/-/A-94268811",
      tags: "Girl, Sneakers",
    },
    {
      url: "https://www.target.com/p/rothschild-little-big-girls-ski-jacket-and-snowbib-snowsuit-sets/-/A-94133417",
      tags: "Girl, Snow Bib and Jacket Sets",
    },
    {
      url: "https://www.target.com/p/rothschild-little-big-girls-design-ski-jacket-and-snowbib-snowsuit-sets/-/A-1000122722",
      tags: "Girl, Snow Bib and Jacket Sets",
    },
    {
      url: "https://www.target.com/p/rothschild-little-big-girls-foil-print-ski-jacket-and-snowbib-snowsuit-sets/-/A-94251173",
      tags: "Girl, Snow Bib and Jacket Sets",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-iron-knee-insulated-winter-snow-bibs/-/A-87888133",
      tags: "Girl, Snow Bibs",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-squall-waterproof-iron-knee-bib-snow-pants/-/A-87888155",
      tags: "Girl, Snow Bibs",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-squall-waterproof-iron-knee-winter-snow-pants/-/A-87888322",
      tags: "Girl, Snow Pants",
    },
    {
      url: "https://www.target.com/p/jessica-simpson-little-big-girls-heavyweight-overall-insulated-snowsuit/-/A-93763297",
      tags: "Girl, Snowsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-sports-bra-cat-38-jack-8482/-/A-91235192",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/girls-2pk-sports-bra-cat-jack-white-black/-/A-92878056",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/maidenform-girls-39-spacer-sports-bra/-/A-93666789",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/maidenform-girls-39-ribbed-sports-bra/-/A-89690531",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-39-hearts-39-printed-sports-bra-cat-38-jack-8482-peach-orange/-/A-93278211",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/girls-39-seamless-t-back-sports-bra-art-class-8482/-/A-90781600",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/girls-racerback-sports-bra-all-in-motion/-/A-94088528",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-sports-bra-cat-38-jack-8482-denim-blue-wash/-/A-94328446",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/just-love-girls-bras-pack-of-4-comfortable-and-stylish-training-bras-for-girls/-/A-1002778594",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-cotton-sports-bra-6-pack/-/A-85561148",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/just-love-girls-bras-pack-of-6/-/A-1002779097",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-sports-bras-3-pack/-/A-1004010417",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bralettes-3-pack/-/A-1004372487",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-ladder-back-bratop-girls/-/A-84318270",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/capezio-girl-s-c-est-la-vie-couture-longline-bra-child/-/A-1003315757",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/dragonwing-harmony-sports-bra/-/A-1001647465",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bralettes-3-pack/-/A-1004372488",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/capezio-seamless-racerback-sports-bra-girls/-/A-84637016",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/dragonwing-v-neck-crop-top/-/A-1002515611",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bralettes-3-pack/-/A-1004372486",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/dragonwing-level-up-sports-bra/-/A-1001687546",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/dragonwing-fearless-seamless-crop-top/-/A-1001541856",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/dragonwing-vitality-bandeau-top/-/A-1001664919",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bralettes-3-pack/-/A-1004372491",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/dragonwing-ava-sports-bra/-/A-1001540613",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/dragonwing-ignite-crop-top/-/A-1002512635",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/dragonwing-daydream-crop-top/-/A-1001623560",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/dragonwing-criss-cross-crop-top/-/A-1002526598",
      tags: "Girl, Sports Bras",
    },
    {
      url: "https://www.target.com/p/dragonwing-vitality-strappy-crop-top/-/A-1001687161",
      tags: "Girl, Sports Bras",
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
