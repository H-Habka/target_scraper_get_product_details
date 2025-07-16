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
      url: "https://www.target.com/p/oshkosh-b-gosh-little-big-girls-heavyweight-4-in-1-system-jackets/-/A-93713811",
      tags: "3-In-1 Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-solid-woven-dress-cat-38-jack-8482/-/A-94492960",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-sleeveless-terry-dress-cat-jack-red/-/A-94739626",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-knit-eyelet-dress-cat-38-jack-8482/-/A-92982445",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/zenzi-girls-39-sleeveless-lace-ombre-dress-ivory-blush-pink/-/A-93300711",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-woven-dress-cat-38-jack-8482/-/A-94492961",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-floral-tiered-chiffon-dress-cat-38-jack-8482/-/A-94486473",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-woven-eyelet-midi-dress-cat-38-jack-8482-white/-/A-94219170",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-knit-tulle-tiered-dress-cat-38-jack-8482/-/A-92901447",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-uniform-performance-jersey-tennis-dress-cat-38-jack-8482/-/A-94436251",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-puff-sleeve-fit-flare-a-line-dress-art-class/-/A-94137322",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-flutter-sleeve-embroidered-woven-dress-cat-jack/-/A-94147533",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-woven-midi-dress-cat-38-jack-8482-turquoise-green/-/A-94299381",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-ombre-sequin-high-low-skirt-cat-38-jack-8482-coral-pink/-/A-93067222",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-floral-tiered-clip-dot-chiffon-dress-cat-jack-lavender/-/A-94486525",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-denim-shirtdress-cat-38-jack-8482-green/-/A-94492240",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-uniform-safari-dress-cat-jack/-/A-85285871",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-chiffon-dress-cat-38-jack-8482-light-purple/-/A-94299377",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pokemon-sylveon-ruched-neckline-all-over-print-dress-ivory/-/A-93599682",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-lilo-38-stitch-elevated-printed-dress-blue/-/A-93599686",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-mushrooms-elevated-printed-dress-green/-/A-93599681",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-adaptive-abdominal-access-uniform-dress-cat-jack/-/A-94482985",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-flutter-sleeveless-woven-gauze-dress-cat-38-jack-8482-pink-rose/-/A-94600608",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-woven-dress-cat-38-jack-8482/-/A-94219165",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/zenzi-girls-39-sequin-tank-dress-white/-/A-93067228",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/zenzi-girls-cap-sleeve-lace-tulle-dress-white/-/A-93067234",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-2pk-short-sleeve-dress-cat-38-jack-8482-brown-light-pink/-/A-94600605",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-girl-s-tulle-dress-tutu-party-birthday-poster-formal-fancy-flower-princess-dresses/-/A-1003338485",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-short-sleeve-2pk-knit-and-ribbed-dress-cat-38-jack-8482-cream-light-purple/-/A-93574804",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-uniform-solid-jumper/-/A-86739966",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-disney-princess-ariel-puff-cap-sleeve-dress-mint-green-purple/-/A-91363811",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-tulle-dress-little-kid-to-big-kid/-/A-89005080",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/zenzi-girls-39-sleeveless-tiered-ruffle-skirt-dress-melon-pink/-/A-93067231",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-queen-bee-girls-french-terry-cosplay-dress-little-kid-to-big-kid/-/A-88296594",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-pinkie-pie-rainbow-dash-girls-dress-little-kid-to-big-kid/-/A-87294328",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-raya-and-the-last-dragon-encanto-moana-mirabel-sisu-girls-dress-tulle-dress-little-kid-to-big-kid/-/A-87291054",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-dress-little-kid-to-big/-/A-92302265",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-chiffon-pleated-dress/-/A-1002436049",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-girl-s-2-pack-elsa-short-sleeve-frozen-graphic-skater-dress-set-purple-pink-size-2t/-/A-92538696",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-bluey-girls-dress-toddler-to-big-kid/-/A-88201804",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/strawberry-shortcake-tulle-dress-sizes-2t-10-12/-/A-1001554721",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-girls-dress-little-kid-to-big-kid/-/A-89557006",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-mesh-cosplay-dress-little-kid-to-big-kid/-/A-88256269",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-2pk-adaptive-short-sleeve-valentines-day-s-dress-cat-jack-pink-red/-/A-92392002",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-ponte-pleat-jumper/-/A-87721350",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-kirby-hooded-cosplay-dress-pink/-/A-88753427",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-magic-ombre-sequin-bomber-jacket/-/A-93275236",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-rena-rouge-girls-tulle-dress-toddler-to-big-kid/-/A-87237131",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-and-anna-girls-sleeveless-dress-tutu-and-4-ponytail-hair-ties-for-little-kids-blue/-/A-93231385",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-ariel-snow-white-rapunzel-belle-cinderella-little-girls-2-pack-dresses-disney-princesses/-/A-86005748",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-mesh-pleated-polo-dress/-/A-90902470",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/imagikids-girls-chambray-button-down-sleeveless-dress-toddler-to-big-kid-sizes/-/A-1003406937",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lion-king-simba-nala-short-sleeve-dress/-/A-85239152",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-dress-little-kid-to-big-kid/-/A-88417244",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-frozen-minnie-mouse-moana-mulan-the-little-mermaid-cinderella-skater-dress-scrunchie-toddler-to-big-kid/-/A-87274524",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-anna-moana-princess-rapunzel-jasmine-belle-girls-french-terry-dress-little-kid-to-big-kid/-/A-87245446",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-tulle-dress-sizes-2t-14-16/-/A-1001160018",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-family-matching-outfits-boho-floral-print-square-neck-puff-sleeve-smocked-dress-and-short-sleeve-t-shirts-matching-set/-/A-1003646956",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-girls-fur-costume-dress-little-kid-to-big-kid/-/A-1003406892",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peppa-pig-girls-short-sleeve-dress-toddler-to-little-kid/-/A-87294219",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-french-terry-skater-dress/-/A-1002436011",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-2pk-short-sleeve-dress-cat-38-jack-8482-dark-green-cream/-/A-91944397",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-ombre-sequin-sparkle-tulle-puff-sleeve-dress/-/A-1001695081",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-girls-mesh-cosplay-tulle-dress-little-kid-to-big-kid/-/A-88155973",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-square-neck-pleated-dress/-/A-1003209281",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-mouse-rainbow-tulle-dress-toddler-to-big-kid/-/A-88290562",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-yoshi-cosplay-dress-green/-/A-89811164",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/sesame-street-birthday-mesh-dress/-/A-1002811046",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-organza-puff-sleeve-babydoll-dress/-/A-93788533",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-dress-little-kid/-/A-87184999",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dreamworks-trolls-poppy-girls-dress-toddler-to-little-kid/-/A-85239214",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-just-a-girl-who-loves-dinosaurs/-/A-1000782363",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-shimmering-spaghetti-strap-a-line-sequin-dress/-/A-1002280792",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-group-fit-flair-cap-sleeve-dress/-/A-1002357151",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/minions-tulle-dress-sizes-4-6x/-/A-1001372854",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-how-to-train-your-dragon-dragons-fit-flair-cap-sleeve-dress/-/A-1003892254",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-ruched-party-dress-with-embroidered-hem-kids/-/A-91302768",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-sanrio-girls-sleeveless-dress-for-toddler-and-big-kids-size-12/-/A-1004605428",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/boho-blossom-tank-tiered-dress-mia-belle-girls-blush-10-12/-/A-1003839788",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-french-terry-dress-sizes-2t-14-16/-/A-1000863943",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-girls-french-terry-skater-dress-toddler-to-big-kid/-/A-88951172",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-mon-characters-fit-flair-cap-sleeve-dress/-/A-1002396051",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-long-sleeve-valentines-day-39-s-2pk-dress-cat-38-jack-8482-pink-red/-/A-92392001",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-flutter-bow-woven-dress/-/A-91604111",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-vestito-dress-animal-arabesque/-/A-93152794",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-classics-tulle-dress-sizes-2t-14-16/-/A-1001159990",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-long-sleeve-ruffle-trim-dress/-/A-93409802",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-boho-floral-lace-scalloped-hem-dress/-/A-1001833742",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-scuba-cosplay-tulle-dress/-/A-1003633328",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-flounce-sleeve-tiered-linen-dress-kids/-/A-1002929852",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-ruffle-collar-party-dress-with-eyelet-embroidery-kids/-/A-1001113750",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-everest-rubble-marshall-chase-skye-girls-dress-little-kid-to-big-kid/-/A-87251712",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-girls-soft-camisole-dress/-/A-91472145",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-vestito-dress-blazing-yellow/-/A-93152555",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-velour-skater-dress-little-kid-to-big-kid/-/A-1000180890",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-linen-smocked-short-bubble-sleeve-dress-kids/-/A-1001113718",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-tiered-dress/-/A-1002539056",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/family-matching-outfits-women-girls-sleeveless-splicing-floral-leaf-print-midi-dresses-and-colorblock-short-sleeve-shirts/-/A-1003457014",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-twirl-dress/-/A-1002539247",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-soft-knit-jersey-girls-cap-sleeve-dress/-/A-91471840",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-white-fitted-scallop-dress/-/A-1002525140",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-pleated-flutter-sleeve-apron-dress-with-embroidery-kids/-/A-1002929847",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-puff-sleeve-smocked-party-dress-with-ruffle-collar-kids/-/A-1001113852",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-belle-big-girls-french-terry-dress-yellow-10-12/-/A-91118779",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-mesh-dress-little-kid-to-big/-/A-92672187",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-girls-fitted-rib-dress/-/A-90276647",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-ombre-sequin-ruffled-long-sleeve-dress/-/A-1002830009",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-girls-organic-tulip-sleeve-swiss-dot-party-dress-kids/-/A-1001113827",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-girls-french-terry-dress-little-kid-to-big/-/A-89698732",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-girls-lurex-stripe-rib-knit-dress/-/A-90276588",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-athletic-active-tank-top-dress/-/A-88768296",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-short-sleeve-seersucker-dress-with-peter-pan-collar-kids/-/A-90586101",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-gathered-waist-jersey-dress/-/A-87258123",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-girls-organic-short-sleeve-puff-sleeve-party-dress-kids/-/A-1000871958",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/stunning-star-ombr-lilac-party-dress-mia-belle-girls/-/A-1004604431",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/ruffled-apple-striped-dress-mia-belle-girls/-/A-1004233781",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spring-butterflies-smocked-tiered-dress-mia-belle-girls/-/A-1004617695",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-bff-hearts-graphic-sleeveless-aline-dress/-/A-1002083891",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-winter-holidays-graphic-sleeveless-aline-dress/-/A-1002046268",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-sleeveless-aline-dress/-/A-1001977498",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pink-candy-stripe-button-up-linen-ruffle-dress-mia-belle-girls/-/A-1004617544",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-leo-and-brothers-tmnt-fit-flair-cap-sleeve-dress/-/A-1000479109",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-bon-bon-doll-graphic-sleeveless-aline-dress/-/A-1001997223",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-fleece-soft-a-line-dress/-/A-91192721",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-ponte-dress/-/A-91699028",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-slub-jersey-tiered-dress/-/A-1002292714",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-spider-gwen-ghost-spider-girls-french-terry-dress-little-kid-to-big-kid/-/A-91126682",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-velvet-dress/-/A-91191080",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-sunshine-on-my-mind-fit-flair-cap-sleeve-dress/-/A-94201874",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-long-sleeve-ruffle-trim-dress-pink-multicolor-stripes/-/A-93409803",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-classic-logo-pink-fit-flair-cap-sleeve-dress/-/A-1002075746",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-cowabunga-fit-flair-cap-sleeve-dress/-/A-1000451722",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-magical-gamer-girl-graphic-sleeveless-aline-dress/-/A-1003238262",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/monster-high-holographic-logo-graphic-sleeveless-aline-dress/-/A-1001976875",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/little-tikes-summer-fun-graphic-sleeveless-aline-dress/-/A-1001986740",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sateen-cap-sleeve-special-occasion-smocked-flower-girl-dress-kids/-/A-1001270694",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-character-grid-fit-flair-cap-sleeve-dress/-/A-1000451843",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-valentine-s-heartbreaker/-/A-1000833165",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000875767",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-uniform-plaid-jumper/-/A-86739903",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-donald-duck-goofy-minnie-mouse-pluto-daisy-duck-fleece-dress-infant-to-big-kid/-/A-90023301",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-diamond-pikachu-fit-flair-cap-sleeve-dress/-/A-1002396810",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-stretch-poplin-sash-dress-kids/-/A-92214445",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-knit-short-sleeve-twirl-dress/-/A-93068581",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819129",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/multi-print-flower-and-ruffle-dress/-/A-93490904",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-knit-striped-mock-neck-dress/-/A-93291240",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-minions-on-tour-fit-flair-cap-sleeve-dress/-/A-1000874960",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-mighty-movie-character-group-fit-flair-cap-sleeve-dress/-/A-1000807057",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-girls-organic-round-collar-sateen-party-dress-with-embroidered-sash-kids/-/A-1001113785",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-girls-organic-sleeveless-special-occasion-seersucker-party-dress-with-cross-back-kids/-/A-1001113739",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-gary-the-snail/-/A-1000785132",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-fluttershy-graphic-sleeveless-aline-dress/-/A-1001961205",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/kyte-baby-twirl-dress-in-taro/-/A-93677870",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-summer-vibes-graphic-sleeveless-aline-dress/-/A-1002117969",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-skater-chick-w-flowers-graphic-sleeveless-aline-dress/-/A-1001996638",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-outrageous-millennial-girls-graphic-sleeveless-aline-dress/-/A-1001991198",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-long-sleeve-twirl-dress/-/A-89942784",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/nickelodeon-girl-s-2-pack-cutest-girl-pup-ever-paw-patrol-skye-casual-dress-set-pink-purple-size-2t/-/A-92525293",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-cakey-cat-mercat-girls-fleece-dress-toddler-to-big-kid/-/A-90023002",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-interlock-polo-dress/-/A-93037909",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-turtles-character-grid-fit-flair-cap-sleeve-dress/-/A-1000875959",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-dress-to-impress-yourself-fit-flair-cap-sleeve-dress/-/A-1000874925",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-moana-girls-french-terry-skater-dress-with-headband-for-toddler-and-big-kids-size-12/-/A-1004605436",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-grid-fit-flair-cap-sleeve-dress/-/A-1002397028",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-minion-banana-stickers-fit-flair-cap-sleeve-dress/-/A-1000875020",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-clawdeen-cleo-draculaura-frankie-rainbow-logo-fit-flair-cap-sleeve-dress/-/A-93675515",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/how-to-train-your-dragon-we-have-dragons-graphic-sleeveless-aline-dress/-/A-1003890589",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-trainer-graphic-sleeveless-aline-dress/-/A-1002405197",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-eevee-retro-stripe-graphic-sleeveless-aline-dress/-/A-1002404978",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-birthday-graphic-sleeveless-aline-dress/-/A-1002090537",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-turtles-character-grid/-/A-1000838803",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-math-problem-bee-graphic-sleeveless-aline-dress/-/A-1003959987",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790724",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-3d-sunflower-sleeveless-dress-mia-belle-girls/-/A-1002437609",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818993",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-prone-to-shenanigans-and-malarkey-fit-flair-cap-sleeve-dress/-/A-1000827558",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-donatello-raphael-leonardo-michelangelo-fit-flair-cap-sleeve-dress/-/A-1000827016",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-seersucker-flutter-sleeve-open-back-dress-kids/-/A-1000871930",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-sun-surf-fun/-/A-1000786499",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/kyte-baby-twirl-dress-in-midnight/-/A-93677892",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-quilted-puff-sleeve-dress-kids/-/A-92929618",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rugrats-retro-rugrats/-/A-1000784668",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/firecracker-fairy-tulle-dress-mia-belle-girls/-/A-1003939188",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-expressions-fit-flair-cap-sleeve-dress/-/A-1000449016",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-staying-cool/-/A-1000786370",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-retro-swimsuit-graphic-sleeveless-aline-dress/-/A-1002059479",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/fluttering-butterfly-ruffle-sleeve-dress-mia-belle-girls/-/A-1003810112",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-girls-linen-sleeveless-peter-pan-collar-tea-dress-with-waist-sash-kids/-/A-1001270688",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rainbow-high-jade-hunter-rainbow-graffiti-graphic-sleeveless-aline-dress/-/A-1001996030",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-stacked-barbie-vday-graphic-sleeveless-aline-dress/-/A-1002058489",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/do-your-thing-doodle-hi-lo-dress-mia-belle-girls/-/A-1004232970",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/24seven-comfort-apparel-girls-pleated-cold-shoulder-girls-summer-dress/-/A-91675669",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/wrapables-meow-meow-doodling-cat-dress/-/A-1001254369",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-boho-floral-lace-scalloped-hem-dress/-/A-1001833686",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/zenzi-girls-39-embroidered-dress-sage-green/-/A-94493158",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-how-to-train-your-dragon-we-have-dragons-fit-flair-cap-sleeve-dress/-/A-1003890943",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-summer-pattern-graphic-sleeveless-aline-dress/-/A-1002405439",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-run-the-world-graphic-sleeveless-aline-dress/-/A-1002072780",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-logo-retro-collage-graphic-sleeveless-aline-dress/-/A-1001984367",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/trolls-poppy-stacked-name/-/A-1000798184",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-clues-crew/-/A-1000767144",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-sleeveless-aline-dress/-/A-1001985256",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-tacosaurus-graphic-sleeveless-aline-dress/-/A-1003962053",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-holiday-plaid-dress-and-sock-set/-/A-93502346",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-a-lil-bit-bananas-fit-flair-cap-sleeve-dress/-/A-94201761",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-long-sleeve-ruffle-trim-dress/-/A-93409798",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-short-sleeve-sateen-dress-with-peter-pan-collar-kids/-/A-1001113761",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-baby-yoda-french-terry-dress-scrunchy-set/-/A-87266123",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-chase-marshall-girls-french-terry-skater-dress-and-scrunchie-little-kid-to-big-kid/-/A-87280691",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000831530",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-preschool-graphic-sleeveless-aline-dress/-/A-1003967887",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-earth-every-day/-/A-1000848544",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-let-it-snow-fit-flair-cap-sleeve-dress/-/A-1000877308",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-princess-ariel-girls-tulle-dress-toddler-to-big-kid/-/A-89157105",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-retro-group/-/A-1000786649",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-quilted-puff-sleeve-dress-kids/-/A-92688302",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rainbow-high-violet-skyler-jade-graphic-sleeveless-aline-dress/-/A-1001996079",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-puff-sleeve-smocked-party-dress-with-peter-pan-collar-kids/-/A-1001113850",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/glittery-pink-bow-sequin-ruffle-dress-mia-belle-girls-pink-7/-/A-1003836801",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-birthday-qt-graphic-sleeveless-aline-dress/-/A-1001990381",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-brave-girls-club-graphic-sleeveless-aline-dress/-/A-1001958363",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/wrapables-bunnies-in-floral-garden-dress/-/A-1001254284",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-peeking-pikachu-graphic-sleeveless-aline-dress/-/A-1002404766",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-hello-first-grade-graphic-sleeveless-aline-dress/-/A-1003960207",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-sprigatito-stats-graphic-sleeveless-aline-dress/-/A-1002404510",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/worthy-threads-little-big-girls-ruffle-sleeve-tie-back-dresses/-/A-1004009327",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-team-awesome/-/A-1000765705",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000857448",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-vestito-dress-jacquard-stripe/-/A-93151811",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-2nd-grade-squad-fit-flair-cap-sleeve-dress/-/A-1000463229",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-four-elements-square/-/A-1000764510",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-eeveelution-stickers-graphic-sleeveless-aline-dress/-/A-1002405597",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-birthday-girl-graphic-sleeveless-aline-dress/-/A-1002089799",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781228",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-first-grade-graphic-sleeveless-aline-dress/-/A-1003967807",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-kindergarten-graphic-sleeveless-aline-dress/-/A-1003967583",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-learn-alotl-in-2nd-grade-graphic-sleeveless-aline-dress/-/A-1003959590",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-mystic-mermaid-sequin-puff-sleeve-dress/-/A-1002829915",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-pika-youth-girls-fit-and-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002395133",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000857298",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-puff-sleeve-organza-bow-party-dress/-/A-1002422202",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-spectacolar-graphic-sleeveless-aline-dress/-/A-1003959624",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-retro-rainbow-skater-graphic-sleeveless-aline-dress/-/A-1000798583",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/secret-garden-rose-hi-lo-ruffle-dress-mia-belle-girls/-/A-1002508116",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/how-to-train-your-dragon-dragons-graphic-sleeveless-aline-dress/-/A-1003892492",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rainbow-high-rainbow-sparkle-box-graphic-sleeveless-aline-dress/-/A-1001995966",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788525",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/garfield-collegiate/-/A-1000763960",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803003",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-sunny-days-ahead/-/A-1000754760",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-rescue-myself-graphic-sleeveless-aline-dress/-/A-1003238239",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-smiley-print-jersey-dress/-/A-1002500348",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-mighty-movie-character-group/-/A-1000807224",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-peanut-butter-jellyfish-graphic-sleeveless-aline-dress/-/A-1004186271",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-starshine-graphic-sleeveless-aline-dress/-/A-1002117000",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-bubble-gum-sequin-puff-sleeve-dress/-/A-93788527",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/worthy-threads-little-big-girls-sleeveless-open-tie-back-dresses/-/A-1004020853",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-americana/-/A-1000816876",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-hand-painted-heart-graphic-sleeveless-aline-dress/-/A-1002072904",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-earthy-bb-graphic-sleeveless-aline-dress/-/A-1002002980",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/polly-pocket-i-love-polly-pocket-graphic-short-sleeve-fleece-dress/-/A-1002020245",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-irish-i-was-a-unicorn-graphic-sleeveless-aline-dress/-/A-1001602777",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-girls-multi-colored-crushed-velvet-tiered-dress/-/A-93590620",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-gary-the-snail-fit-flair-cap-sleeve-dress/-/A-1000463212",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-cell-phone-chat-girls-graphic-sleeveless-aline-dress/-/A-1001990574",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781205",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-happy-eevee-graphic-sleeveless-aline-dress/-/A-1002405031",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-happy-pikachu-graphic-sleeveless-aline-dress/-/A-1002404940",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-sandy-cheeks/-/A-1000785073",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-waves-hello-graphic-sleeveless-aline-dress/-/A-1000754109",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-select-your-turtle-video-game-fit-flair-cap-sleeve-dress/-/A-1000875917",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-group-logo-brick-wall-fit-flair-cap-sleeve-dress/-/A-1000468773",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-make-yourself-heard-fit-flair-cap-sleeve-dress/-/A-1000874989",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-bulbasaur-anime-battle-youth-girls-fit-and-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002377752",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-rarity-graphic-sleeveless-aline-dress/-/A-1001960583",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-let-s-roll-chase/-/A-1000841947",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-don-t-worry-go-along/-/A-1000765550",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/monster-high-clawdeen-wolf-graphic-sleeveless-aline-dress/-/A-1002117497",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-group-graphic-sleeveless-aline-dress/-/A-1002404446",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-pink-textured-dress/-/A-91502710",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-fly-on-the-4th-of-july/-/A-1000770888",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/bi-material-dress-with-mesh-skirt-multicolored-tie-dye-and-white/-/A-1002805883",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-tiered-dress-ice-lollipops-and-black/-/A-1002806341",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bi-material-dress-with-printed-top-small-flowers-and-pink/-/A-1002806269",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-navy-heather-printed-jersey-dress/-/A-94081178",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-hello-bello-minion-fit-flair-cap-sleeve-dress/-/A-1000870458",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-i-m-ready-fit-flair-cap-sleeve-dress/-/A-1000451823",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-dash-star-fade-graphic-sleeveless-aline-dress/-/A-1001958202",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-birthday-graphic-short-sleeve-fleece-dress/-/A-1002090597",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-plaid-dress-with-hat/-/A-93502360",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-not-today-fit-flair-cap-sleeve-dress/-/A-1000874982",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-original-barbie-graphic-sleeveless-aline-dress/-/A-1002062545",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000875807",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/polly-pocket-polly-pocket-ombre-logo-graphic-sleeveless-aline-dress/-/A-1002017401",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-retro-rainbow-skater-fit-flair-cap-sleeve-dress/-/A-1000874946",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-easter-scene-graphic-sleeveless-aline-dress/-/A-1002610354",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/monster-high-group-with-pets-graphic-sleeveless-aline-dress/-/A-1002008574",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-friendship-bracelet-print-dress/-/A-1002498586",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bi-material-cotton-and-seersucker-dress-white-and-royal-blue/-/A-1002806451",
      tags: "A-line Dresses, Girl",
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
