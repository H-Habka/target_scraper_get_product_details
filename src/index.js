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
      url: "https://www.target.com/p/pok-mon-pikachu-moon-witch-graphic-sleeveless-aline-dress/-/A-1002404349",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-trick-or-treat-graphic-sleeveless-aline-dress/-/A-1002404337",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pumpkin-party-graphic-sleeveless-aline-dress/-/A-1002404328",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-the-snuggle-is-real-pikachu-and-sylveon-graphic-sleeveless-aline-dress/-/A-1002404212",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-charizard-flash-fire-graphic-sleeveless-aline-dress/-/A-1002404197",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-the-snuggle-is-real-pikachu-and-piplup-graphic-sleeveless-aline-dress/-/A-1002404179",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-battle-ready-graphic-sleeveless-aline-dress/-/A-1002404131",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-snowflakes-graphic-sleeveless-aline-dress/-/A-1002404098",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-lights-wreath-graphic-sleeveless-aline-dress/-/A-1002404084",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-happy-holidays-graphic-sleeveless-aline-dress/-/A-1002404082",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-bulba-pattern-graphic-sleeveless-aline-dress/-/A-1002404077",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-with-hat-graphic-sleeveless-aline-dress/-/A-1002404067",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-flakes-graphic-sleeveless-aline-dress/-/A-1002404061",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-seasons-greetings-graphic-sleeveless-aline-dress/-/A-1002404051",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-presents-graphic-sleeveless-aline-dress/-/A-1002404045",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-official-cookie-taster-graphic-sleeveless-aline-dress/-/A-1002404037",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-sled-graphic-sleeveless-aline-dress/-/A-1002404031",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-winter-fun-graphic-sleeveless-aline-dress/-/A-1002404014",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-santa-hat-graphic-sleeveless-aline-dress/-/A-1002404007",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-squirtle-and-snowflakes-graphic-sleeveless-aline-dress/-/A-1002404009",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-gotta-catch-em-all-pikachu-logo-fit-flair-cap-sleeve-dress/-/A-1002397042",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-grid-graphic-short-sleeve-fleece-dress/-/A-1002397022",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-battle-mode-fit-flair-cap-sleeve-dress/-/A-1002397013",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-retro-pok-mon-logo-fit-flair-cap-sleeve-dress/-/A-1002397011",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-character-grid-fit-flair-cap-sleeve-dress/-/A-1002396974",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-bundled-up-pikachu-fit-flair-cap-sleeve-dress/-/A-1002396969",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-trainer-fit-flair-cap-sleeve-dress/-/A-1002396963",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-info-chart-fit-flair-cap-sleeve-dress/-/A-1002396959",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-info-chart-graphic-short-sleeve-fleece-dress/-/A-1002396954",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-wink-face-fit-flair-cap-sleeve-dress/-/A-1002396873",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-kanji-fit-flair-cap-sleeve-dress/-/A-1002396798",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-squirtle-evolution-fit-flair-cap-sleeve-dress/-/A-1002396781",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-stantler-art-fit-flair-cap-sleeve-dress/-/A-1002396520",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-plaid-badge-fit-flair-cap-sleeve-dress/-/A-1002396502",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-plaid-pikachu-fit-flair-cap-sleeve-dress/-/A-1002396493",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-gengar-fit-flair-cap-sleeve-dress/-/A-1002396483",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-electric-type-fit-flair-cap-sleeve-dress/-/A-1002396473",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-gengar-big-face-fit-flair-cap-sleeve-dress/-/A-1002396367",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-logo-fit-flair-cap-sleeve-dress/-/A-1002396360",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-summer-pattern-fit-flair-cap-sleeve-dress/-/A-1002396314",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-logo-graphic-short-sleeve-fleece-dress/-/A-1002396177",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-team-pikachu-fit-flair-cap-sleeve-dress/-/A-1002396062",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-manga-fit-flair-cap-sleeve-dress/-/A-1002396033",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-mon-round-group-fit-flair-cap-sleeve-dress/-/A-1002395911",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-let-s-get-started-fit-flair-cap-sleeve-dress/-/A-1002395744",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-retro-pok-mon-fit-flair-cap-sleeve-dress/-/A-1002395312",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-retrogamer-fit-flair-cap-sleeve-dress/-/A-1002395283",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-face-fit-flair-cap-sleeve-dress/-/A-1002395275",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-wall-fit-flair-cap-sleeve-dress/-/A-1002395274",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-partners-team-fit-flair-cap-sleeve-dress/-/A-1002395253",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-squares-fit-flair-cap-sleeve-dress/-/A-1002395252",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-speed-fit-flair-cap-sleeve-dress/-/A-1002395227",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-pika-graphic-short-sleeve-fleece-dress/-/A-1002395205",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-poke-fit-flair-cap-sleeve-dress/-/A-1002395200",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-boxes-fit-flair-cap-sleeve-dress/-/A-1002395145",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-bolt-fit-flair-cap-sleeve-dress/-/A-1002395059",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-circle-fit-flair-cap-sleeve-dress/-/A-1002395013",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-gotta-catch-em-all-pikachu-design-fit-flair-cap-sleeve-dress/-/A-1002395018",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-attacks-fit-flair-cap-sleeve-dress/-/A-1002395016",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-design-fit-flair-cap-sleeve-dress/-/A-1002395004",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-dex-fit-flair-cap-sleeve-dress/-/A-1002394994",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-pokedex-diagram-graphic-short-sleeve-fleece-dress/-/A-1002385080",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-attack-graphic-short-sleeve-fleece-dress/-/A-1002384906",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-happy-pikachu-graphic-short-sleeve-fleece-dress/-/A-1002381762",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-logo-style-graphic-short-sleeve-fleece-dress/-/A-1002381085",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-pikachu-grid-graphic-short-sleeve-fleece-dress/-/A-1002380509",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-mewtwo-ready-for-battle-fit-flair-cap-sleeve-dress/-/A-1002377539",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-anime-kanji-fit-flair-cap-sleeve-dress/-/A-1002377511",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-pika-scared-graphic-short-sleeve-fleece-dress/-/A-1002377197",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-pika-scared-fit-flair-cap-sleeve-dress/-/A-1002377185",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-pumpkin-fit-flair-cap-sleeve-dress/-/A-1002377151",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-happy-halloween-fit-flair-cap-sleeve-dress/-/A-1002376969",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pick-of-the-patch-fit-flair-cap-sleeve-dress/-/A-1002376900",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-miraidon-collegiate-fit-flair-cap-sleeve-dress/-/A-1002357312",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-collegiate-fit-flair-cap-sleeve-dress/-/A-1002357149",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-moon-witch-fit-flair-cap-sleeve-dress/-/A-1002355171",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pumpkin-party-fit-flair-cap-sleeve-dress/-/A-1002355144",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-witch-pikachu-with-candy-fit-flair-cap-sleeve-dress/-/A-1002355140",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-bulba-pattern-fit-flair-cap-sleeve-dress/-/A-1002353940",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-with-hat-fit-flair-cap-sleeve-dress/-/A-1002353923",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-lights-wreath-fit-flair-cap-sleeve-dress/-/A-1002353925",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-charmander-snowflakes-fit-flair-cap-sleeve-dress/-/A-1002353899",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-squirtle-and-snowflakes-fit-flair-cap-sleeve-dress/-/A-1002353898",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-official-cookie-taster-fit-flair-cap-sleeve-dress/-/A-1002353894",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-presents-fit-flair-cap-sleeve-dress/-/A-1002353890",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-presents-graphic-short-sleeve-fleece-dress/-/A-1002352287",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-group-in-circle-graphic-short-sleeve-fleece-dress/-/A-1002348183",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-battle-ready-fit-flair-cap-sleeve-dress/-/A-1002348128",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-group-in-circle-fit-flair-cap-sleeve-dress/-/A-1002348118",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/tropical-floral-bloom-ruffle-hi-lo-dress-mia-belle-girls/-/A-1002316878",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/tropical-florals-casual-hi-lo-dress-mia-belle-girls/-/A-1002293241",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-witchy-logo-graphic-sleeveless-aline-dress/-/A-1002118203",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-woman-kind-kind-woman-graphic-sleeveless-aline-dress/-/A-1002118010",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-afro-and-hoops-graphic-sleeveless-aline-dress/-/A-1002117849",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-classic-dolls-graphic-sleeveless-aline-dress/-/A-1002117819",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-they-call-me-ken-graphic-sleeveless-aline-dress/-/A-1002117755",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/monster-high-cleo-denile-graphic-sleeveless-aline-dress/-/A-1002117487",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-sleeveless-aline-dress/-/A-1002117270",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-sleeveless-aline-dress/-/A-1002117268",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mattel-mattel-original-logo-graphic-sleeveless-aline-dress/-/A-1002117250",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-hitch-choose-kind-graphic-sleeveless-aline-dress/-/A-1002117117",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-love-every-pony-graphic-sleeveless-aline-dress/-/A-1002117081",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-bff-pony-grid-graphic-sleeveless-aline-dress/-/A-1002117062",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-twilight-sparkle-graphic-sleeveless-aline-dress/-/A-1002117069",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-be-you-be-true-graphic-sleeveless-aline-dress/-/A-1002117059",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-pipp-graphic-graphic-sleeveless-aline-dress/-/A-1002117025",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-crystals-logo-graphic-sleeveless-aline-dress/-/A-1002117016",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-rainbow-love-rules-graphic-sleeveless-aline-dress/-/A-1002116983",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-logo-heads-graphic-sleeveless-aline-dress/-/A-1002116977",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-logo-wings-graphic-sleeveless-aline-dress/-/A-1002116958",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-world-graphic-sleeveless-aline-dress/-/A-1002116962",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-rainbow-heart-graphic-sleeveless-aline-dress/-/A-1002116948",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-stars-and-flowers-girls-aline-dress-graphic-sleeveless-aline-dress/-/A-1002116931",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-gradient-logo-girls-aline-dress-graphic-sleeveless-aline-dress/-/A-1002116908",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-retro-heart-logo-graphic-sleeveless-aline-dress/-/A-1002116916",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-blue-belle-graffiti-graphic-sleeveless-aline-dress/-/A-1002116893",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-sitting-pony-graphic-sleeveless-aline-dress/-/A-1002116857",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunburst-logo-fit-flair-cap-sleeve-dress/-/A-1002112655",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-tie-dye-logo-fit-flair-cap-sleeve-dress/-/A-1002112547",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-lucky-to-have-great-friends-graphic-sleeveless-aline-dress/-/A-1002108188",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-logo-shamrock-pattern-fit-flair-cap-sleeve-dress/-/A-1002108068",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-logo-shamrock-pattern-graphic-short-sleeve-fleece-dress/-/A-1002108006",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002107488",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-faboolous-graphic-short-sleeve-fleece-dress/-/A-1002092048",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-faboolous-fit-flair-cap-sleeve-dress/-/A-1002092010",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-costume-party-graphic-sleeveless-aline-dress/-/A-1002090973",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-birthdays-are-sweet-graphic-sleeveless-aline-dress/-/A-1002090601",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-3-yrs-graphic-sleeveless-aline-dress/-/A-1002086613",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-arrow-heart-logo-fit-flair-cap-sleeve-dress/-/A-1002083915",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-logo-hearts-fit-flair-cap-sleeve-dress/-/A-1002083745",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-heart-grid-graphic-short-sleeve-fleece-dress/-/A-1002082949",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-out-of-box-fit-flair-cap-sleeve-dress/-/A-1002078847",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-patterned-love-fit-flair-cap-sleeve-dress/-/A-1002075967",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-butterfly-logo-fit-flair-cap-sleeve-dress/-/A-1002075904",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-sleeveless-aline-dress/-/A-1002068827",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-individual-classic-icons-create-silhouette-graphic-sleeveless-aline-dress/-/A-1002067415",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-living-the-dream-fit-flair-cap-sleeve-dress/-/A-1002066961",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-living-the-dream-graphic-short-sleeve-fleece-dress/-/A-1002066118",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-mini-mini-mini-graphic-sleeveless-aline-dress/-/A-1002065683",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-leaves-swirling-graphic-sleeveless-aline-dress/-/A-1002065544",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-mini-mini-mini-fit-flair-cap-sleeve-dress/-/A-1002065243",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-leopard-heart-fit-flair-cap-sleeve-dress/-/A-1002064414",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-leopard-heart-graphic-short-sleeve-fleece-dress/-/A-1002064367",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-leopard-heart-graphic-sleeveless-aline-dress/-/A-1002064153",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-made-in-the-90-s-graphic-sleeveless-aline-dress/-/A-1002064205",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-palm-trees-graphic-sleeveless-aline-dress/-/A-1002063805",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-palm-trees-graphic-sleeveless-aline-dress/-/A-1002062984",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-original-icons-in-circle-grid-graphic-sleeveless-aline-dress/-/A-1002060936",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-pattern-colorful-graphic-sleeveless-aline-dress/-/A-1002060726",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-sketch-original-graphic-sleeveless-aline-dress/-/A-1002060692",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sketch-original-fit-flair-cap-sleeve-dress/-/A-1002060584",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-pattern-colorful-fit-flair-cap-sleeve-dress/-/A-1002060422",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-summer-time-dream-graphic-sleeveless-aline-dress/-/A-1002059440",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-sunglasses-and-sun-graphic-sleeveless-aline-dress/-/A-1002058688",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-the-dreamhouse-60th-anniversary-fit-flair-cap-sleeve-dress/-/A-1002058557",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-collage-graphic-sleeveless-aline-dress/-/A-1002055096",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-welcome-to-the-dreamhouse-fit-flair-cap-sleeve-dress/-/A-1002052431",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-to-the-core-fit-flair-cap-sleeve-dress/-/A-1002052240",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-retro-logo-1959-fit-flair-cap-sleeve-dress/-/A-1002051237",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-chasing-dreams-fit-flair-cap-sleeve-dress/-/A-1002050540",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-high-school-dolls-graphic-sleeveless-aline-dress/-/A-1002049445",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-serving-lewks-since-1961-fit-flair-cap-sleeve-dress/-/A-1002048915",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-time-to-shine-graphic-sleeveless-aline-dress/-/A-1002004016",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-bravo-babes-graphic-sleeveless-aline-dress/-/A-1002003973",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-u-glow-girl-graphic-sleeveless-aline-dress/-/A-1002003476",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-grow-grrrl-graphic-sleeveless-aline-dress/-/A-1002002719",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-groovy-beach-babe-graphic-sleeveless-aline-dress/-/A-1002002692",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-catch-some-rays-graphic-sleeveless-aline-dress/-/A-1002002684",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-free-spirit-doll-graphic-sleeveless-aline-dress/-/A-1002002214",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-fierce-doll-graphic-sleeveless-aline-dress/-/A-1002002189",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-computer-design-graphic-sleeveless-aline-dress/-/A-1001997358",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-extra-w-a-side-of-swag-graphic-sleeveless-aline-dress/-/A-1001996998",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-candylicious-original-graphic-sleeveless-aline-dress/-/A-1001996870",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-catch-my-vibe-graphic-sleeveless-aline-dress/-/A-1001996764",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-rainbow-alt-girl-graphic-sleeveless-aline-dress/-/A-1001996685",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rainbow-high-pure-fire-graphic-sleeveless-aline-dress/-/A-1001995973",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-queen-bee-neon-qt-deva-sugar-graphic-sleeveless-aline-dress/-/A-1001991868",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-outrageous-glow-grrrl-graphic-sleeveless-aline-dress/-/A-1001991811",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-bff-vibes-with-queen-bee-deva-neon-qt-graphic-sleeveless-aline-dress/-/A-1001991672",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-b-b-nation-graphic-sleeveless-aline-dress/-/A-1001991465",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-pool-party-vibes-graphic-sleeveless-aline-dress/-/A-1001991442",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-partay-with-kitty-queen-graphic-sleeveless-aline-dress/-/A-1001991300",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-let-s-par-tea-graphic-sleeveless-aline-dress/-/A-1001991081",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-splash-beauty-w-butterflies-hearts-graphic-sleeveless-aline-dress/-/A-1001990906",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-play-dazzle-music-graphic-sleeveless-aline-dress/-/A-1001990806",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-glam-stars-independent-queen-go-go-girl-fit-flair-cap-sleeve-dress/-/A-1001990624",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-glam-series-graphic-sleeveless-aline-dress/-/A-1001990559",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-candylicious-butterflies-hearts-graphic-sleeveless-aline-dress/-/A-1001990423",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-sways-spray-paint-graphic-sleeveless-aline-dress/-/A-1001990338",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-royal-bee-graphic-sleeveless-aline-dress/-/A-1001990207",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-we-re-all-queens-graphic-sleeveless-aline-dress/-/A-1001990206",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-dance-queens-graphic-sleeveless-aline-dress/-/A-1001990172",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-royal-realness-graphic-sleeveless-aline-dress/-/A-1001990142",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-fierce-queens-graphic-sleeveless-aline-dress/-/A-1001990056",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-retro-style-dolls-graphic-sleeveless-aline-dress/-/A-1001990075",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-royal-rebel-graphic-sleeveless-aline-dress/-/A-1001990061",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-neonlicious-graphic-sleeveless-aline-dress/-/A-1001989927",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/the-brady-bunch-the-brady-kids-graphic-sleeveless-aline-dress/-/A-1001989373",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-little-tikes-ready-for-adventure-fit-flair-cap-sleeve-dress/-/A-1001989188",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-the-brady-bunch-the-brady-kids-fit-flair-cap-sleeve-dress/-/A-1001988397",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/little-tikes-fast-food-towing-graphic-sleeveless-aline-dress/-/A-1001986948",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/little-tikes-imagination-is-all-it-takes-graphic-sleeveless-aline-dress/-/A-1001986895",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/little-tikes-find-the-way-graphic-sleeveless-aline-dress/-/A-1001986851",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/little-tikes-i-dream-of-ice-cream-graphic-sleeveless-aline-dress/-/A-1001986828",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/little-tikes-go-green-graphic-sleeveless-aline-dress/-/A-1001986732",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/little-tikes-teamwork-makes-the-dream-work-graphic-sleeveless-aline-dress/-/A-1001986717",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/little-tikes-ready-for-adventure-graphic-sleeveless-aline-dress/-/A-1001986553",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-sleeveless-aline-dress/-/A-1001985167",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-y2k-logo-graphic-sleeveless-aline-dress/-/A-1001984714",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-explore-with-us-graphic-short-sleeve-fleece-dress/-/A-1001984552",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-logo-liquid-metal-graphic-sleeveless-aline-dress/-/A-1001984375",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-funky-flower-dude-graphic-short-sleeve-fleece-dress/-/A-1001984354",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-slime-logo-graphic-sleeveless-aline-dress/-/A-1001984308",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-animal-print-splatter-graphic-sleeveless-aline-dress/-/A-1001984157",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-mtv-logo-jack-o-lantern-fit-flair-cap-sleeve-dress/-/A-1001984099",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-mtv-logo-halloween-fit-flair-cap-sleeve-dress/-/A-1001984040",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-skater-graphic-sleeveless-aline-dress/-/A-1001984043",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-explore-with-us-graphic-sleeveless-aline-dress/-/A-1001983985",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-mtv-skater-fit-flair-cap-sleeve-dress/-/A-1001983928",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-mtv-take-me-to-the-moon-person-fit-flair-cap-sleeve-dress/-/A-1001984036",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-mtv-retro-gamer-logo-fit-flair-cap-sleeve-dress/-/A-1001983937",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-mtv-y2k-logo-fit-flair-cap-sleeve-dress/-/A-1001983940",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-mtv-logo-liquid-metal-fit-flair-cap-sleeve-dress/-/A-1001983888",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-mtv-icon-collage-logo-fit-flair-cap-sleeve-dress/-/A-1001983862",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-mtv-drawn-floral-logo-fit-flair-cap-sleeve-dress/-/A-1001983817",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-mtv-logo-retro-collage-fit-flair-cap-sleeve-dress/-/A-1001983810",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-mtv-funky-flower-dude-fit-flair-cap-sleeve-dress/-/A-1001983816",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-mtv-slime-logo-fit-flair-cap-sleeve-dress/-/A-1001983805",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mattel-mattel-original-logo-graphic-sleeveless-aline-dress/-/A-1001978675",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-slay-all-day-graphic-sleeveless-aline-dress/-/A-1001978256",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-sleigh-what-graphic-sleeveless-aline-dress/-/A-1001978222",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-snowflake-wreath-graphic-sleeveless-aline-dress/-/A-1001978215",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-fa-la-la-la-fierce-graphic-sleeveless-aline-dress/-/A-1001978200",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-sleeveless-aline-dress/-/A-1001977681",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-sleeveless-aline-dress/-/A-1001977540",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-queens-support-each-other-graphic-sleeveless-aline-dress/-/A-1001974229",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/if-movie-imagination-blossom-graphic-sleeveless-aline-dress/-/A-1001970378",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/if-movie-lewis-keyboard-graphic-sleeveless-aline-dress/-/A-1001970329",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-rainbow-love-wins-graphic-sleeveless-aline-dress/-/A-1001961385",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-apple-jack-graphic-sleeveless-aline-dress/-/A-1001960854",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-pinkie-pie-graphic-sleeveless-aline-dress/-/A-1001960779",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-stacked-faces-graphic-sleeveless-aline-dress/-/A-1001960487",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-winter-fun-graphic-sleeveless-aline-dress/-/A-1001960386",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-born-to-shine-graphic-sleeveless-aline-dress/-/A-1001960294",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-love-your-vibe-graphic-sleeveless-aline-dress/-/A-1001960026",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-friendship-conquers-all-graphic-sleeveless-aline-dress/-/A-1001959901",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-applejack-logo-graphic-sleeveless-aline-dress/-/A-1001959853",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-retro-rainbow-badge-graphic-sleeveless-aline-dress/-/A-1001959218",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-red-white-and-deep-blue-sea-graphic-short-sleeve-fleece-dress/-/A-1001738941",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-it-s-lit-graphic-short-sleeve-fleece-dress/-/A-1001738914",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-american-all-star-graphic-short-sleeve-fleece-dress/-/A-1001736162",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-ready-for-baseball-graphic-short-sleeve-fleece-dress/-/A-1001736055",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-gerald-and-abner-graphic-short-sleeve-fleece-dress/-/A-1001731085",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hey-arnold-cool-arnold-graphic-short-sleeve-fleece-dress/-/A-1001731071",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hey-arnold-fresh-arnold-graphic-short-sleeve-fleece-dress/-/A-1001730795",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-and-gerold-bike-graphic-short-sleeve-fleece-dress/-/A-1001730692",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hey-arnold-group-shot-graphic-short-sleeve-fleece-dress/-/A-1001730689",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hey-arnold-distressed-arnold-graphic-short-sleeve-fleece-dress/-/A-1001730226",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hey-arnold-cheat-day-graphic-short-sleeve-fleece-dress/-/A-1001730017",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hey-arnold-3d-arnold-graphic-short-sleeve-fleece-dress/-/A-1001730003",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hey-arnold-ha-air-guitar-graphic-short-sleeve-fleece-dress/-/A-1001729975",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hey-arnold-retro-arnold-and-gerald-graphic-short-sleeve-fleece-dress/-/A-1001729677",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hey-arnold-stoop-kid-graphic-short-sleeve-fleece-dress/-/A-1001729662",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-1996-graphic-short-sleeve-fleece-dress/-/A-1001729576",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hey-arnold-best-buds-graphic-short-sleeve-fleece-dress/-/A-1001729335",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/captain-underpants-wedgie-power/-/A-1001646615",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-shamrocks-filled-graphic-sleeveless-aline-dress/-/A-1001603227",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-shamrock-cuties/-/A-1001603076",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-it-takes-alotl-luck/-/A-1001602540",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-magically-unpinchable-unicorn-graphic-sleeveless-aline-dress/-/A-1001602485",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-shenanigans-with-my-gnomies-graphic-sleeveless-aline-dress/-/A-1001602291",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-mama-s-lucky-charm-graphic-sleeveless-aline-dress/-/A-1001602340",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-outlined-shamrock-graphic-sleeveless-aline-dress/-/A-1001601867",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-leprechaun-truck-delivering-luck/-/A-1001601686",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-rad-little-lad-graphic-sleeveless-aline-dress/-/A-1001601578",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-i-woke-up-this-lucky-graphic-sleeveless-aline-dress/-/A-1001600987",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-sheep-holding-a-shamrock/-/A-1001600950",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-to-not-be-in-trouble-graphic-sleeveless-aline-dress/-/A-1001600678",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-coolest-clover-in-the-patch/-/A-1001600679",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-dinosaur-eatting-rainbow-graphic-sleeveless-aline-dress/-/A-1001600113",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-to-have-my-cousins-graphic-sleeveless-aline-dress/-/A-1001599915",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-love-you-like-pizza-graphic-sleeveless-aline-dress/-/A-1001598917",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-mesh-polo-dress/-/A-86739562",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tiered-gingham-skirt-cat-jack/-/A-94486617",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-lace-trim-a-line-mini-skort-art-class/-/A-94340527",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tennis-skort-art-class/-/A-94610878",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-smocked-tiered-mini-skirt-art-class/-/A-94600766",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-gingham-skirt-cat-jack-blue/-/A-94339785",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-smocked-39-floral-39-ruffle-skirt-cat-38-jack-8482-white/-/A-94472334",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-tiered-eyelet-skort-cat-38-jack-8482/-/A-93143376",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-smocked-ruffle-skirt-cat-38-jack-8482-white/-/A-94408557",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-smocked-drop-waist-tiered-floral-skirt-art-class/-/A-94133381",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-tiered-midi-skirt-cat-38-jack-8482-cream/-/A-94492241",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-midi-skirt-cat-38-jack-8482-indigo/-/A-94624498",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-tulle-skirt-cat-38-jack-8482/-/A-93171131",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-39-rainbow-39-tulle-skirt-cat-38-jack-8482/-/A-93143387",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-floral-chiffon-skort-cat-38-jack-8482/-/A-94492225",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tie-front-striped-circle-skort-art-class/-/A-94133346",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-maxi-skirt-cat-jack-black/-/A-50873239",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-plaid-box-pleat-skirt-top-of-the-knee/-/A-87148504",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-pull-on-kick-pleat-performance-skort/-/A-92383509",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-paperbag-denim-skirt/-/A-87672097",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-ponte-pleat-skirt/-/A-87669954",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-solid-box-pleat-skirt-above-knee/-/A-87673532",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-pleated-two-tab-skort/-/A-92383547",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-2-pack-skorts-toddler-to-big-kid/-/A-92190028",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-peasant-skirt-flower-hair-accessory/-/A-93962695",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-solid-box-pleat-skirt-top-of-knee/-/A-88529244",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-solid-pleated-skirt-below-the-knee/-/A-88529113",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-solid-box-pleat-skirt-below-the-knee/-/A-91378904",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-at-the-knee-plaid-pleated-skirt/-/A-92383986",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-active-skort/-/A-1001827132",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-slim-plaid-a-line-skirt-below-the-knee/-/A-87148955",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-active-tulle-skort/-/A-1003240000",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/sol-angeles-kids-rib-tier-skirt/-/A-1004107855",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-at-the-knee-pleated-skirt/-/A-92384080",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-plaid-pleated-two-tab-scooter/-/A-92383811",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-summer-high-waisted-maxi-skirt-ruffle-hem-cute-long-skirts-with-elastic-waistband-for-kid-girl-5-14y/-/A-1002527820",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-below-the-knee-plaid-pleated-skirt/-/A-92383403",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-baby-toddler-girls-dotted-tulle-skirt/-/A-1003240087",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-knit-gauze-tiered-skirt/-/A-92158796",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-ruffled-skirts-summer-highwaist-maxi-skirts-for-girls-a-line-adjustable-drawstring-skirts-with-irregular-hem/-/A-1003250553",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-plaid-a-line-skirt-below-the-knee/-/A-87148006",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-adaptive-pleated-ponte-scooter-skort/-/A-92383473",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-soft-girls-jersey-tiered-skirt/-/A-91855162",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-active-tulle-skort/-/A-1002889788",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/miamore-gigi-peasant-skirt-and-hat-with-hair-accessory/-/A-93976751",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-below-the-knee-kick-pleat-skirt/-/A-92383764",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-ruffled-maxi-skirts-high-waisted-long-skirt-with-belt-button-front-skirts-with-pocket-grey-5-14y/-/A-1002515399",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/dragonwing-classic-athletic-skirt/-/A-1001547110",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-dotted-tulle-skirt/-/A-1003240083",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-above-the-knee-front-pleated-skirt-with-tabs/-/A-92383485",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-button-midi-skirts-casual-high-elastic-waist-a-line-pleated-midi-chiffon-pink-skirts-with-pockets/-/A-1003989488",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-tutu-set-of-4-osfm-multicolored/-/A-1000042480",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-linen-pull-on-pleated-bow-skort-kids/-/A-1000873134",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-skirts-with-ruffle-sleeve-tops-tie-detail-skirts-ruffled-trim-girls-tops-with-pleated-flutter-skirts/-/A-93313016",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-long-skirt-high-waist-drawstring-swing-maxi-skirt-with-pockets/-/A-1002551297",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-eiffel-tower-eyelet-skirt-petit-confection/-/A-1001050649",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-2pcs-cute-color-printed-short-sleeve-shirt-and-elastic-high-waist-bow-a-line-skirt-sets/-/A-1002568947",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-pique-knit-skirt/-/A-1002457976",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-pleated-skirt-with-buckle-detail-kids/-/A-92959164",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-novelty-circle-skirt/-/A-1003417822",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/maxi-skorts-skirt-for-girls-button-front-high-waisted-long-skirt-with-belt-ruffled-skirts-with-pocket/-/A-1002516708",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-flowy-shorts-with-pockets-athletic-running-skirt-high-waist/-/A-1002808557",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-tiered-elastic-waist-skirt-green-with-white-and-pink-bird/-/A-1003009436",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/dragonwing-vitality-skirt/-/A-1002427200",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-organic-twill-pinafore-skirt-jackalo/-/A-93962680",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-chambray-skort-blue-and-white-cherries/-/A-1004053100",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-active-skort/-/A-1001827142",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-school-uniform-kids-poly-cotton-box-pleat-skirt-top-of-knee/-/A-88529068",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bow-top-and-ruffled-skirt-set-white-and-black-striped/-/A-1003009419",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/kids-solid-pleated-skirt-below-the-knee-girls-satin-skirts/-/A-91883769",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-chambray-skort-navy-blue-and-white-hearts/-/A-1004053122",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-skirts-with-white-blouse-ruffle-long-sleeve-button-down-shirt-and-pleated-skirt-school-uniform-2-piece-outfit-black-120/-/A-93725748",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-a-line-denim-midi-skirt-casual-pleated-buttons-over-knee-skirts-with-pocket-3-12y/-/A-1002529738",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pleated-elastic-high-waist-a-line-swing-maxi-long-metallic-shiny-shimmer-skirt/-/A-1002761977",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/maxi-skorts-skirt-for-girls-button-front-ruffle-high-waisted-long-skirts-with-belt-and-pocket-3-12-years/-/A-91842342",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/dragonwing-harmony-skirt/-/A-1001647400",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/jean-skirt-for-girls-toddler-mini-flared-pleated-toddler-short-jean-skirts-with-pocket-3-12t/-/A-1002528523",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girl-new-york-pleated-skirt-mia/-/A-1004815908",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girl-selma-floral-pinafore-skirt-early-sunday/-/A-1003530749",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girl-boho-floral-skirt-cozmo/-/A-1003530637",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-denim-skirts-high-waist-pleated-a-line-skirts-midi-skirts-side-button-skirts-girls-bottoms-denim-blue-120/-/A-1003242508",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-tulle-skirt/-/A-1003240047",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-ruffle-skirt-black-and-pink-butterflies/-/A-1003009201",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-mesh-skirt-pink-and-green/-/A-1003009159",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-mesh-skirt-lilac-tropical-and-pink-flamingos/-/A-1003009024",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girl-toddler-s-daisy-corduroy-tiered-skirt-petit-confection/-/A-1001376688",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tulle-glitter-skirt-petit-confection/-/A-1000916599",
      tags: "A-line Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girl-liberty-ribbed-bodysuit-petit-confection/-/A-1001376613",
      tags: "Adult Bodysuits, Girl",
    },
    {
      url: "https://www.target.com/p/girls-casual-ankle-socks-6pk-cat-jack-white/-/A-77452211",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-20pk-ankle-socks-colors-may-vary/-/A-84320008",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-10pk-ankle-striped-socks-cat-38-jack-8482/-/A-89823449",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-10pk-ankle-socks-cat-38-jack-8482-white/-/A-93276929",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-6pk-pure-comfort-organic-cotton-ankle-socks-white/-/A-93666809",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/boys-39-8pk-ankle-length-socks-dealworthy-8482/-/A-90629744",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-4pk-absolute-active-heel-shield-socks-colors-may-vary/-/A-93666807",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-10pk-lightweight-ankle-stripe-38-dot-socks-cat-38-jack-8482-gray/-/A-90850039",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-10pk-lightweight-ribbed-ankle-socks-cat-38-jack-8482/-/A-94472239",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-8pk-ankle-socks-dealworthy-8482-pink/-/A-94472238",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-pointelle-cotton-blend-super-soft-anklet-sock/-/A-1003305410",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts-kids-charlie-brown-snoopy-and-woodstock-youth-low-cut-ankle-socks-6-pack-multicoloured/-/A-90027547",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-lace-anklet-socks/-/A-1003451485",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girl-s-kitty-cats-fuzzy-mid-cut-socks-2-pack-gray-one-size/-/A-1003460805",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-kids-ruffle-eyelet-cotton-blend-anklet-socks/-/A-1003303751",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-multicolor-sequin-cotton-blend-girls-anklet-sock/-/A-1003455270",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-leopard-girls-fuzzy-non-skid-socks-2-pair-black-one-size/-/A-1003460788",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-pique-stitch-anklet-socks/-/A-1003451245",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-bow-back-anklet-socks/-/A-1003455488",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-hello-darlin-flower-petal-cotton-blend-girls-anklet-socks/-/A-1003454048",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-crochet-ruffle-trim-mercerized-cotton-blend-ankle-sock/-/A-1003451533",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-colored-ruffle-anklet-socks/-/A-1003455534",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-microfiber-tulle-bow-anklet-socks/-/A-1003454266",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-tulle-bow-anklet-socks/-/A-1003451362",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-dual-layer-eyelet-lace-anklet-sock/-/A-1003305392",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-3-pair-pack-hi-cut-liner-socks/-/A-1003336501",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-bow-trimmed-mercerized-cotton-rich-ankle-sock/-/A-1003451504",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-velvet-pleated-girls-cotton-blend-anklet-socks/-/A-1003454133",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-floral-halo-cotton-anklet-socks/-/A-1003454328",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-socks-kids-book-character-designs-mix-n-match-ankle-socks-6-pack-multicoloured/-/A-90130754",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-neon-multi-pom-pom-cotton-blend-girls-anklet-sock/-/A-1003455256",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-classic-lace-girls-ruffle-anklet-socks/-/A-1003303363",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-silky-side-bow-anklet-socks/-/A-1003455195",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-pretty-in-pearls-cotton-blend-anklet-socks/-/A-1003303863",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-dual-flower-girls-cotton-blend-anklet-sock/-/A-1003455261",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-cotton-blend-swiss-dot-anklet-socks/-/A-1003430700",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/ctm-girls-lace-ruffle-anklet-sock-with-pearl-accent/-/A-90014215",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/sock-house-co-halloween-girls-candy-corn-3-pair-anklet-socks/-/A-1004069856",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-botanic-sheer-girls-floral-embroidered-anklet-socks/-/A-1003454363",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-herringbone-thin-ribbed-anklet/-/A-1003529758",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/ctm-girls-ruffle-trim-lace-anklet-socks-3-pair-pack/-/A-90014227",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-sheer-cotton-blend-flocked-dot-anklet-with-scalloped-cuff/-/A-1003455334",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-petite-floral-lace-cotton-blend-anklet-socks/-/A-1003454288",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-metallic-leaf-girls-cotton-blend-anklet-socks/-/A-1003454145",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-dual-layer-ruffle-anklet-socks/-/A-1003460267",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-confetti-cotton-blend-anklet-sock/-/A-1003453910",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-lacy-loopsy-girls-cotton-blend-anklet-sock/-/A-1003453832",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-fuzzy-shimmer-cotton-blend-anklet-socks/-/A-1003455218",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-layered-lace-cotton-blend-anklet-socks/-/A-1003303104",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-tie-dye-mid-cut-cotton-blend-socks-3-pack/-/A-1003452555",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-oversized-tutu-ballerina-anklet-socks/-/A-1003454504",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-pelerine-cotton-blend-anklet-socks/-/A-1003455236",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-knit-openwork-bow-anklet-socks/-/A-1003451097",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-faux-fur-cuff-cotton-blend-anklet-socks-charcoal-heather-8/-/A-1003454276",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-polar-bear-girls-fuzzy-mid-cut-socks/-/A-1003403118",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/kids-viscose-bamboo-ankle-socks-unisex-thin-in-bulk-soft-boys-girls-stretch-school-wholesale-socks-48-pairs/-/A-1004378771",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-pointelle-soft-stretch-cotton-anklet-socks/-/A-1003460499",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-bow-anklet-socks/-/A-1003460384",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-floral-button-anklet-socks/-/A-1003460309",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-blissful-bloom-anklet-socks/-/A-1003460184",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-m-multi-line-anklet-socks/-/A-1003460105",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-open-work-anklet-socks/-/A-1003455580",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ziggy-double-ring-cotton-blend-anklet-sock/-/A-1003455383",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-flocked-dot-cotton-blend-tulle-anklet/-/A-1003455309",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-metallic-scalloped-cotton-blend-anklet-socks/-/A-1003454245",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-pom-pom-palooza-girls-ankle-socks/-/A-1003454063",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-far-out-cotton-blend-lace-ruffle-socks/-/A-1003453592",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-step-and-shimmer-ruffle-anklet-socks/-/A-1003453109",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-bubble-stitch-welt-anklet-socks/-/A-1003451397",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-pointelle-dot-anklet-socks/-/A-1003451139",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-ditsy-floral-scalloped-cuff-anklet-sock/-/A-1003430863",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-zag-lurex-cotton-blend-anklet-sock/-/A-1003430778",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-glitter-butterfly-cotton-knee-high-socks/-/A-1003364472",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/hearts-galore-cozy-sock/-/A-1003334834",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/memoi-girls-snowflake-plush-lined-cozy-socks/-/A-1003334805",
      tags: "Ankle Socks, Girl",
    },
    {
      url: "https://www.target.com/p/sportoli-girls-fleece-lined-heavy-winter-anorak-jacket-coat-faux-fur-trim-zip-off-hood/-/A-90368170",
      tags: "Anorak Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-hooded-parka-jacket-fleece-linded-winter-coat/-/A-92701680",
      tags: "Anorak Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-winter-coat-with-faux-fur-hood-parka-jacket/-/A-90227397",
      tags: "Anorak Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-baby-girls-fleece-lined-parka-jacket-kids-coat/-/A-92699321",
      tags: "Anorak Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-big-girls-midweight-fleece-lined-anorak-jackets/-/A-93802521",
      tags: "Anorak Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-tumble-shorts-all-in-motion-8482/-/A-93297590",
      tags: "Athletic Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-soft-100-cotton-girls-long-bike-shorts/-/A-92746144",
      tags: "Athletic Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/destira-compression-biker-short/-/A-92084924",
      tags: "Athletic Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-knit-double-layer-dress-all-in-motion-8482/-/A-94369612",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-knit-piping-trim-160-dress-all-in-motion-8482/-/A-94334866",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-contrast-trim-active-dress-all-in-motion/-/A-94501352",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-airy-sleek-dress-all-in-motion/-/A-94471794",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-uniform-polo-dress-all-in-motion/-/A-94742735",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-performance-uniform-dress-cat-jack/-/A-92421267",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tennis-golf-dress-outfit-sleeveless-a-line-pleated-athletic-skirt-dress-with-pockets-safety-inner-shorts/-/A-1002515302",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-outdoor-sports-sleeveless-dress-with-pockets-tennis-golf-outfit-athletic-sets/-/A-1003869470",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-round-neck-tennis-golf-sport-dress-sleeveless-athletic-pleated-skirt-sets-with-built-in-shorts-pockets-purple-3-12y/-/A-1002515178",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-women-s-future-star-tank-dress/-/A-1003319649",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tennis-dress-with-built-in-shorts-girls-athletic-dress-sleeveless-a-line-tennis-dress-pleated-girls-golf-dress/-/A-93555583",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tennis-golf-dress-outfit-sleeveless-tank-top-and-skorts-sets-sport-skirt-with-shorts/-/A-1002473902",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tennis-athletic-dresses-with-built-in-shorts-and-pockets-polo-neck-sleeveless-golf-outfit-dress/-/A-1002514906",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-ruffle-yoke-tutu-dress-girls/-/A-84642559",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-tutu-dress-girls/-/A-84642582",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-classics-double-layer-skirt-tank-dress-girls/-/A-83927532",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-flutter-sleeve-dress-girls/-/A-84642543",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-pinch-front-tank-dress-girls/-/A-84642597",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-silt-tennis-dress-with-built-in-shorts-girls-athletic-dress-sleeveless-a-line-tennis-dress-pleated-girls-golf-dress/-/A-93599991",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-keyhole-back-tutu-dress-girls/-/A-84642715",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tennis-dress-sleeveless-workout-dress-with-separate-shorts-asymmetric-color-block-glof-dress-a-line-athletic-dress-for-girls/-/A-91908754",
      tags: "Athletic Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-bluey-dreamy-fleece-sweatpants-aqua-blue/-/A-93447103",
      tags: "Athletic Jogger Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-moana-2-dreamy-fleece-athletic-jogger-pants-ivory/-/A-92237499",
      tags: "Athletic Jogger Pants, Girl",
    },
    {
      url: "https://www.target.com/p/girls-soft-stretch-jogger-pants-all-in-motion/-/A-94739703",
      tags: "Athletic Jogger Pants, Girl",
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
