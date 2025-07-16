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
      url: "https://www.target.com/p/whizmax-girls-nightgown-dress-princess-lace-sleeveless-pajamas-cute-nightwear-size-10-12-years-youth-teen-girls/-/A-91712236",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-ready-for-baseball-fit-flair-cap-sleeve-dress/-/A-1000871652",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-eat-sleep-battle-repeat-graphic-sleeveless-aline-dress/-/A-1002405071",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-girls-2-pack-skater-dresses-little-kid-to-big-kid/-/A-88296619",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/trolls-happy-trolloween-branch-and-cloud-guy/-/A-1000796896",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-attack-graphic-sleeveless-aline-dress/-/A-1002404924",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-drip-drop-painting-girls-graphic-sleeveless-aline-dress/-/A-1002002661",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/trolls-livin-that-poppy-life/-/A-1000798232",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/trolls-i-love-pop-poppy/-/A-1000798156",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-raphael-going-in-loud-fit-flair-cap-sleeve-dress/-/A-1000827076",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-fit-flair-cap-sleeve-dress/-/A-1002396673",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-gary-the-snail/-/A-1000784931",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/ola-otter-a-line-dress-breezy-daisy/-/A-1003020523",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-strong-girls-club-graphic-sleeveless-aline-dress/-/A-1002062018",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-dance-party-graphic-sleeveless-aline-dress/-/A-1001990734",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000857199",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000850453",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eat-sleep-battle-repeat-fit-flair-cap-sleeve-dress/-/A-1002396819",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-sleeveless-aline-dress/-/A-1002117309",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-ripping-out/-/A-1000782045",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-logo-character-group-fit-flair-cap-sleeve-dress/-/A-1000468988",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-property-of-barbie-land-beach-volleyball-team-graphic-sleeveless-aline-dress/-/A-1002118737",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-better-together-graphic-sleeveless-aline-dress/-/A-1001958953",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-bikini-bottom-egg-hunting-champ/-/A-1000850234",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-big-eyes/-/A-1000781125",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-diamond-pikachu-graphic-sleeveless-aline-dress/-/A-1002405506",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-dress-to-impress-yourself-graphic-sleeveless-aline-dress/-/A-1000798777",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-mewtwo-ready-for-battle-graphic-sleeveless-aline-dress/-/A-1002404862",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-sleeveless-aline-dress/-/A-1001977631",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818024",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000782328",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-curious-george-classic-cartoons-fit-flair-cap-sleeve-dress/-/A-1003962634",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-i-loaf-you-bread-graphic-sleeveless-aline-dress/-/A-1001620033",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-retro-graphic-sleeveless-aline-dress/-/A-1002405521",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-love-makes-the-world-go-around-graphic-sleeveless-aline-dress/-/A-1002065071",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803137",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-drawn-floral-logo-graphic-short-sleeve-fleece-dress/-/A-1001984411",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-donatello-raphael-leonardo-michelangelo/-/A-1000827139",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-lt-pint-rib-knit-dress-w-tulle/-/A-1002684028",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-girl-s-2-pack-rock-the-dots-minnie-mouse-short-sleeve-casual-dress-set-red-size-2t/-/A-93231137",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-and-eevee-fit-flair-cap-sleeve-dress/-/A-1002395001",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-snorlax-graphic-sleeveless-aline-dress/-/A-1002405445",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girl-power-in-illusion-wave-graphic-sleeveless-aline-dress/-/A-1002072642",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/monster-high-ghoul-squad-graphic-sleeveless-aline-dress/-/A-1002117185",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-all-dolls-together-graphic-sleeveless-aline-dress/-/A-1001997276",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-smiles-all-summer-graphic-sleeveless-aline-dress/-/A-1000751685",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-patterned-love-graphic-sleeveless-aline-dress/-/A-1002076012",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-knit-short-sleeve-twirl-dress/-/A-93068577",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-mesh-pleated-polo-dress/-/A-1004545272",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/monster-high-clawdeen-purple-graphic-sleeveless-aline-dress/-/A-1002117625",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-it-s-my-birthday-graphic-sleeveless-aline-dress/-/A-1002091047",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/monster-high-character-grid-graphic-sleeveless-aline-dress/-/A-1002008549",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-scandinavian-bunny-with-flowers-graphic-sleeveless-aline-dress/-/A-1002611517",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-pattern-graphic-sleeveless-aline-dress/-/A-1002405302",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-evolutions-graphic-sleeveless-aline-dress/-/A-1002404806",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-icon-cluster/-/A-1000838637",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-pizza-power-fit-flair-cap-sleeve-dress/-/A-1000451687",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-logo-hearts-graphic-sleeveless-aline-dress/-/A-1002117948",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788427",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-this-kid-s-gotta-fly/-/A-1000765719",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-tie-dye-and-butterflies-flutter-around-barbie-graphic-sleeveless-aline-dress/-/A-1002058914",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-all-together-graphic-sleeveless-aline-dress/-/A-1002117844",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-michelangelo-aka-mikey/-/A-1000827034",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-girl-s-2-pack-minnie-mouse-bow-print-and-polka-dot-casual-dress-set-pink-blue-size-2t/-/A-93231136",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-girls-club-graphic-sleeveless-aline-dress/-/A-1001990610",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/polly-pocket-totally-tiny-vibes-graphic-short-sleeve-fleece-dress/-/A-1002012898",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-dragonite-charizard-prepare-for-battle-graphic-sleeveless-aline-dress/-/A-1002404539",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-drawn-floral-logo-graphic-sleeveless-aline-dress/-/A-1001984389",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820646",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-group-logo-brick-wall/-/A-1000786716",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-barbie-character-dress-white-black/-/A-90377980",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-rainbow-be-you-beautiful-graphic-sleeveless-aline-dress/-/A-1002116991",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-icon-collage-logo-graphic-sleeveless-aline-dress/-/A-1001984192",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/monster-high-monster-friends-forever-graphic-sleeveless-aline-dress/-/A-1002117214",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-leo-and-brothers-turtle-power/-/A-1000809081",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/nickelodeon-blue-s-clues-short-sleeve-dress-scrunchy-light-gray/-/A-87265960",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/bi-material-dress-with-printed-dots-on-mesh-skirt-warm-old-pink/-/A-1002805446",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-minions-grid-graphic-sleeveless-aline-dress/-/A-1000798653",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-sandy-cheeks/-/A-1000785126",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-hoppy-easter-fit-flair-cap-sleeve-dress/-/A-1000849832",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-organza-long-sleeve-tiered-babydoll-skater-dress/-/A-1001833844",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-girls-red-plaid-stretch-cord-ruffle-dress/-/A-93590578",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-born-to-create-graphic-sleeveless-aline-dress/-/A-1002117134",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000831518",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-hello-bello-minion/-/A-1000798912",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-dress-pink-multicolored-gummies/-/A-1002805819",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002074770",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rugrats-natural-wonder/-/A-1000784728",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-rugrats-natural-wonder-fit-flair-cap-sleeve-dress/-/A-1000461109",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/disney-fancy-nancy-short-sleeve-tutu-dress-scrunchy-set-pink/-/A-87384200",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/bi-material-dress-with-glitter-hearts-skirt-snow-white/-/A-1002805376",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-sun-and-beaches-graphic-sleeveless-aline-dress/-/A-1002118035",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815733",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/printed-chambray-dress-navy-blue-and-white-hearts/-/A-1002804035",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-long-sleeve-twirl-dress/-/A-89802239",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-seersucker-dress-with-frill-pink-flowers-on-cream-background/-/A-1002806282",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-proud-to-be-punk-graphic-sleeveless-aline-dress/-/A-1001958791",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-classic-logo-pink-graphic-sleeveless-aline-dress/-/A-1002075635",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/trolls-turn-it-up-poppy/-/A-1000798194",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-so-eggcited-fit-flair-cap-sleeve-dress/-/A-1000849814",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/jackalo-long-sleeved-button-down-woven-dress-acorn/-/A-93603358",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-logo-hearts-graphic-short-sleeve-fleece-dress/-/A-1002083988",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/wrapables-girls-casual-print-cotton-dress/-/A-1002865827",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-living-the-good-life-fit-flair-cap-sleeve-dress/-/A-1000875004",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-puff-sleeve-dress-with-waist-tie-pink-and-white-checks/-/A-1002806185",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/multi-tiered-eyelet-dress-gray-blue/-/A-1002805399",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-i-m-so-sweet-graphic-sleeveless-aline-dress/-/A-1002405385",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-cottontail-candy-co-graphic-sleeveless-aline-dress/-/A-1002611265",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-rainbow-scene-graphic-sleeveless-aline-dress/-/A-1001958377",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-sketch/-/A-1000787261",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-feelin-salty/-/A-1000781030",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-empowerment-group-graphic-sleeveless-aline-dress/-/A-1002118302",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-news-weather-forecast-sun-everyday-graphic-sleeveless-aline-dress/-/A-1002118789",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-kamp-koral-kamp-krew/-/A-1000787378",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-not-today-graphic-sleeveless-aline-dress/-/A-1000798827",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/garfield-tennis/-/A-1000784457",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-be-my-meowentine-graphic-sleeveless-aline-dress/-/A-1001620159",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-lagoona-frankie-cleo-clawdeen-draculaura-pastel-logo-fit-flair-cap-sleeve-dress/-/A-93675471",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-splatter-graphic-sleeveless-aline-dress/-/A-1002118284",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-rainbow-dash-graphic-sleeveless-aline-dress/-/A-1001960700",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-pawsome-friends-fit-flair-cap-sleeve-dress/-/A-1002658727",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/short-sleeve-dress-with-ruffle-tulle-skirt-multicolored/-/A-1002805458",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-malibu-vibes-graphic-sleeveless-aline-dress/-/A-1002117935",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-easter-eggs-come-from-where-graphic-sleeveless-aline-dress/-/A-1002611634",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000845548",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-sorry-my-dinosaur-ate-your-unicorn-graphic-sleeveless-aline-dress/-/A-1002118786",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-smocked-organic-cotton-dress-with-mesh-frill-yellow/-/A-1002806378",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-tiny-hooligan-graphic-sleeveless-aline-dress/-/A-1001620150",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-cupid-crew-graphic-sleeveless-aline-dress/-/A-1001620132",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-honk-if-lucky-graphic-sleeveless-aline-dress/-/A-1001620010",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-icon-graphic-sleeveless-aline-dress/-/A-1001619984",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-here-for-the-shenanigans-graphic-sleeveless-aline-dress/-/A-1001620059",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-vibes-graphic-sleeveless-aline-dress/-/A-1001619994",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-butterfly-logo-graphic-short-sleeve-fleece-dress/-/A-1002075743",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-sleeveless-aline-dress/-/A-1001977589",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-will-save-the-world-graphic-sleeveless-aline-dress/-/A-1002060413",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-lil-ducky-graphic-sleeveless-aline-dress/-/A-1001620023",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-stick-together-graphic-sleeveless-aline-dress/-/A-1002065920",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/polly-pocket-polly-pocket-ombre-logo-graphic-short-sleeve-fleece-dress/-/A-1002018233",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-support-girls-graphic-sleeveless-aline-dress/-/A-1002117896",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-malibu-sunset-with-palm-trees-graphic-sleeveless-aline-dress/-/A-1002118604",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-run-the-world-graphic-sleeveless-aline-dress/-/A-1002074815",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-boo-barbie-girls-graphic-sleeveless-aline-dress/-/A-1002118172",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girl-strong-kind-brave-bold-and-fearless-graphic-sleeveless-aline-dress/-/A-1002072385",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-day-graphic-sleeveless-aline-dress/-/A-1002047682",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002118639",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-so-cute-it-s-scary-graphic-sleeveless-aline-dress/-/A-1002091732",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-support-girls-graphic-sleeveless-aline-dress/-/A-1002064369",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/polly-pocket-polly-pocket-pink-logo-graphic-short-sleeve-fleece-dress/-/A-1002014555",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-afro-hoops-graphic-sleeveless-aline-dress/-/A-1002117706",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-summer-pool-floaties-graphic-sleeveless-aline-dress/-/A-1002060502",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-glam-stars-independent-queen-go-go-girl-graphic-sleeveless-aline-dress/-/A-1001991891",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/monster-high-deuce-gorgon-graphic-sleeveless-aline-dress/-/A-1002008499",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-easter-vibes-graphic-sleeveless-aline-dress/-/A-1002072577",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002075051",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rainbow-high-turn-it-up-graphic-sleeveless-aline-dress/-/A-1001995989",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-pool-water-reflection-graphic-sleeveless-aline-dress/-/A-1002063809",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/little-tikes-try-your-best-graphic-sleeveless-aline-dress/-/A-1001986639",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-proud-to-be-me-graphic-sleeveless-aline-dress/-/A-1002091348",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-dolls-rule-graphic-sleeveless-aline-dress/-/A-1002118703",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/monster-high-draculara-graphic-sleeveless-aline-dress/-/A-1002117529",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-witch-graphic-sleeveless-aline-dress/-/A-1002118196",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-butterflies-flutter-graphic-sleeveless-aline-dress/-/A-1002118060",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-st-paddys-collage-graphic-sleeveless-aline-dress/-/A-1002108150",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-space-rock-girls-graphic-sleeveless-aline-dress/-/A-1002003954",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-sleeveless-aline-dress/-/A-1002068470",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/polly-pocket-i-love-polly-pocket-graphic-sleeveless-aline-dress/-/A-1002020286",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-argyle-graphic-sleeveless-aline-dress/-/A-1002047029",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-believe-in-yourself-graphic-sleeveless-aline-dress/-/A-1002082781",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rainbow-high-school-crest-graphic-sleeveless-aline-dress/-/A-1002117402",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-group-lucky-graphic-sleeveless-aline-dress/-/A-1002108220",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-spring-bouquet-pattern-logo-graphic-sleeveless-aline-dress/-/A-1002107394",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-clover-power-graphic-sleeveless-aline-dress/-/A-1002108095",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-2fly-4-wrdz-graphic-sleeveless-aline-dress/-/A-1001990393",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-save-ferris-graphic-sleeveless-aline-dress/-/A-1002117670",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-palm-trees-graphic-sleeveless-aline-dress/-/A-1002118730",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-bffs-4eva-bon-bon-snuggle-babe-graphic-sleeveless-aline-dress/-/A-1002117333",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-greetings-from-barbie-land-graphic-sleeveless-aline-dress/-/A-1002118738",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002073050",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-live-play-outside-the-box-graphic-sleeveless-aline-dress/-/A-1002058158",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hot-wheels-birthday-kid-graphic-sleeveless-aline-dress/-/A-1002118078",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-witch-logo-graphic-sleeveless-aline-dress/-/A-1002118178",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-out-of-office-graphic-sleeveless-aline-dress/-/A-1002060106",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-5-yrs-graphic-sleeveless-aline-dress/-/A-1002085359",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-fierce-strong-female-graphic-sleeveless-aline-dress/-/A-1002069186",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002069523",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-dolls-lead-together-graphic-sleeveless-aline-dress/-/A-1002117537",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/polly-pocket-totally-tiny-vibes-graphic-sleeveless-aline-dress/-/A-1002012882",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-fitness-barbie-graphic-sleeveless-aline-dress/-/A-1002117985",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-sister-of-the-birthday-girl-graphic-short-sleeve-fleece-dress/-/A-1002087273",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-athletics-graphic-sleeveless-aline-dress/-/A-1002118797",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-wild-hearts-graphic-sleeveless-aline-dress/-/A-1001958784",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-delivery-graphic-sleeveless-aline-dress/-/A-1002118721",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/polly-pocket-90s-doll-graphic-sleeveless-aline-dress/-/A-1002021771",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-how-could-i-possibly-graphic-sleeveless-aline-dress/-/A-1002031881",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-happy-heart-day-graphic-sleeveless-aline-dress/-/A-1002081644",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/monster-high-draculara-pink-graphic-sleeveless-aline-dress/-/A-1002010209",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-b-day-bbs-graphic-sleeveless-aline-dress/-/A-1001990386",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-happy-spring-graphic-sleeveless-aline-dress/-/A-1002069955",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/the-brady-bunch-the-brady-kids-graphic-short-sleeve-fleece-dress/-/A-1001989251",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-me-and-my-boo-crew-graphic-sleeveless-aline-dress/-/A-1002118154",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rainbow-high-rainbow-high-character-group-graphic-sleeveless-aline-dress/-/A-1001995957",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-middle-school-graphic-sleeveless-aline-dress/-/A-1002048606",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-sleeveless-aline-dress/-/A-1002067128",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-do-what-makes-you-awesome-graphic-sleeveless-aline-dress/-/A-1002118642",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-sunset-and-palm-trees-graphic-sleeveless-aline-dress/-/A-1002055767",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-multi-color-choose-kindness-graphic-sleeveless-aline-dress/-/A-1002062997",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-roadie-graphic-sleeveless-aline-dress/-/A-1002118253",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-logo-jack-o-lantern-graphic-sleeveless-aline-dress/-/A-1001984162",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-sleeveless-aline-dress/-/A-1002095390",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-sleeveless-aline-dress/-/A-1002095297",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-beyoutiful-graphic-sleeveless-aline-dress/-/A-1002082040",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/polly-pocket-polly-pocket-pink-logo-graphic-sleeveless-aline-dress/-/A-1002014528",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-retro-style-graphic-sleeveless-aline-dress/-/A-1002117345",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-boogie-babe-graphic-sleeveless-aline-dress/-/A-1002002836",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-logo-shamrock-pattern-graphic-sleeveless-aline-dress/-/A-1002108093",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-rock-em-sock-em-logo-graphic-sleeveless-aline-dress/-/A-1002117462",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-b-day-b-b-besties-celebrate-birthdays-graphic-sleeveless-aline-dress/-/A-1001990987",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-living-the-dream-graphic-sleeveless-aline-dress/-/A-1002066327",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/monster-high-pastel-character-group-graphic-sleeveless-aline-dress/-/A-1002010232",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-feeling-extra-graphic-sleeveless-aline-dress/-/A-1001991757",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-costume-party-graphic-short-sleeve-fleece-dress/-/A-1002090893",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-go-go-gurl-graphic-sleeveless-aline-dress/-/A-1002002352",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-sun-s-out-graphic-sleeveless-aline-dress/-/A-1002057031",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-let-s-party-graphic-sleeveless-aline-dress/-/A-1002090845",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-sweet-spicy-babes-graphic-sleeveless-aline-dress/-/A-1001990982",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-retro-gamer-logo-graphic-sleeveless-aline-dress/-/A-1001984528",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-choose-kindness-graphic-sleeveless-aline-dress/-/A-1002076648",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hot-wheels-sister-of-birthday-boy-graphic-sleeveless-aline-dress/-/A-1002085829",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-friends-rock-graphic-sleeveless-aline-dress/-/A-1002083171",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-astro-alien-doll-graphic-sleeveless-aline-dress/-/A-1002002172",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-friends-grow-together-graphic-sleeveless-aline-dress/-/A-1002117511",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-sleeveless-aline-dress/-/A-1002095177",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hot-wheels-ready-to-smash-cake-graphic-sleeveless-aline-dress/-/A-1002086342",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-i-am-powerful-graphic-sleeveless-aline-dress/-/A-1002070090",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-grunge-grrrl-graphic-sleeveless-aline-dress/-/A-1001997417",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-next-level-graphic-sleeveless-aline-dress/-/A-1001990274",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-bueller-bueller-bueller-graphic-sleeveless-aline-dress/-/A-1002031330",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/monster-high-frankiestein-voltageous-graphic-sleeveless-aline-dress/-/A-1002008486",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-electric-dreams-graphic-sleeveless-aline-dress/-/A-1002003840",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-bffs-4-eva-graphic-sleeveless-aline-dress/-/A-1002003795",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-fanime-kawaii-graphic-sleeveless-aline-dress/-/A-1002002532",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-sk8er-grl-graphic-sleeveless-aline-dress/-/A-1002118226",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hot-wheels-happy-birthday-to-me-graphic-sleeveless-aline-dress/-/A-1002118124",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-always-extra-graphic-sleeveless-aline-dress/-/A-1002117519",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-fourth-of-july-graphic-sleeveless-aline-dress/-/A-1002117457",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-bff-4lyfe-graphic-sleeveless-aline-dress/-/A-1002117347",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-sister-of-the-birthday-girl-graphic-sleeveless-aline-dress/-/A-1002087344",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hot-wheels-its-my-birthday-graphic-sleeveless-aline-dress/-/A-1002085868",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hot-wheels-race-crew-4-yrs-graphic-sleeveless-aline-dress/-/A-1002085785",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-heart-grid-graphic-sleeveless-aline-dress/-/A-1002083478",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rainbow-high-rainbow-checkered-frame-graphic-sleeveless-aline-dress/-/A-1002117395",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-glow-grrrl-neon-qt-beats-babe-graphic-sleeveless-aline-dress/-/A-1001991793",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rainbow-high-toy-doll-lineup-graphic-sleeveless-aline-dress/-/A-1001996102",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-lets-unbox-graphic-sleeveless-aline-dress/-/A-1001978245",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-grow-grrrl-hearts-the-earth-graphic-sleeveless-aline-dress/-/A-1002002896",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-winter-breeze-graphic-sleeveless-aline-dress/-/A-1002055996",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-small-fry-caf-graphic-sleeveless-aline-dress/-/A-1002003974",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/if-movie-anything-s-possible-graphic-sleeveless-aline-dress/-/A-1001970382",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-totally-rad-diva-graphic-sleeveless-aline-dress/-/A-1001997081",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-righteous-dude-graphic-sleeveless-aline-dress/-/A-1002030369",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002107826",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-winter-holidays-graphic-sleeveless-aline-dress/-/A-1002044011",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-time-to-shine-graphic-sleeveless-aline-dress/-/A-1002003213",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-spicy-babe-graphic-sleeveless-aline-dress/-/A-1001990995",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-ponies-logo-graphic-sleeveless-aline-dress/-/A-1002118276",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-m-c-swag-vibe-graphic-sleeveless-aline-dress/-/A-1001997241",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-heart-mended-bffs-graphic-sleeveless-aline-dress/-/A-1001991241",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-fierce-graffiti-graphic-sleeveless-aline-dress/-/A-1001996973",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-celebr8-graphic-sleeveless-aline-dress/-/A-1001990921",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-sleeveless-aline-dress/-/A-1002069573",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-rock-em-sock-em-robots-logo-graphic-sleeveless-aline-dress/-/A-1002010990",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-grrrls-run-the-world-graphic-sleeveless-aline-dress/-/A-1002117554",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-chasing-dreams-graphic-sleeveless-aline-dress/-/A-1002050875",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/if-movie-blossom-ballet-graphic-sleeveless-aline-dress/-/A-1001970415",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/paw-patrol-this-my-camping-sweatshirt/-/A-1000765595",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-sleeveless-aline-dress/-/A-1002117773",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-pink-daisy-pattern-logo-graphic-sleeveless-aline-dress/-/A-1002108078",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-the-dreamhouse-60th-anniversary-graphic-sleeveless-aline-dress/-/A-1002058881",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-always-extra-graphic-sleeveless-aline-dress/-/A-1001996859",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-glow-grrrl-retro-styled-graphic-sleeveless-aline-dress/-/A-1001997061",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-howdy-cowgirls-graphic-sleeveless-aline-dress/-/A-1002002121",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-funky-flower-dude-graphic-sleeveless-aline-dress/-/A-1002117277",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-rock-em-robots-graphic-sleeveless-aline-dress/-/A-1002010830",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/hot-wheels-going-big-for-my-birthday-graphic-sleeveless-aline-dress/-/A-1002086876",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/polly-pocket-90s-doll-graphic-short-sleeve-fleece-dress/-/A-1002021757",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-middle-school-dolls-graphic-sleeveless-aline-dress/-/A-1002048136",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-pineapple-party-graphic-sleeveless-aline-dress/-/A-1002010338",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/my-little-pony-retro-group-graphic-sleeveless-aline-dress/-/A-1001961203",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-grrrl-squad-graphic-sleeveless-aline-dress/-/A-1002117581",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/the-brady-bunch-classic-hollywood-squares-graphic-sleeveless-aline-dress/-/A-1002117434",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-postal-service-california-graphic-sleeveless-aline-dress/-/A-1002118707",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-get-ur-party-on-graphic-sleeveless-aline-dress/-/A-1001991350",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-dancing-dolls-dance-graphic-sleeveless-aline-dress/-/A-1002003550",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-coney-island-graphic-sleeveless-aline-dress/-/A-1001974274",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-friendship-goals-graphic-sleeveless-aline-dress/-/A-1002118103",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/charmed-the-power-of-three-will-set-you-free-graphic-sleeveless-aline-dress/-/A-1001994372",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-lets-be-kind-plants-graphic-sleeveless-aline-dress/-/A-1001997220",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-arrow-heart-logo-graphic-sleeveless-aline-dress/-/A-1002117982",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-karaoke-queen-graphic-sleeveless-aline-dress/-/A-1001991213",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-ken-hearts-barbie-graphic-sleeveless-aline-dress/-/A-1002066647",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-chica-chica-tropical-graphic-sleeveless-aline-dress/-/A-1001997075",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-cotton-candy-graphic-sleeveless-aline-dress/-/A-1001996944",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-road-trippin-graphic-sleeveless-aline-dress/-/A-1002001941",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-take-me-to-the-moon-person-graphic-sleeveless-aline-dress/-/A-1001984227",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-sleeveless-aline-dress/-/A-1002094945",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-groovy-babe-graphic-sleeveless-aline-dress/-/A-1001990510",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-squad-graphic-sleeveless-aline-dress/-/A-1002054032",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-oh-so-fierce-graphic-sleeveless-aline-dress/-/A-1001990225",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-butterfly-logo-graphic-sleeveless-aline-dress/-/A-1002075977",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/if-movie-lewis-poster-graphic-sleeveless-aline-dress/-/A-1001970370",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-together-we-slay-graphic-sleeveless-aline-dress/-/A-1001974326",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/garfield-peeking-out/-/A-1000762419",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lol-surprise-lol-hi-bae-graphic-sleeveless-aline-dress/-/A-1002003740",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mtv-slime-logo-graphic-short-sleeve-fleece-dress/-/A-1002118428",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/kyte-baby-twirl-dress-in-blush/-/A-93677877",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-knit-striped-asymmetrical-dress/-/A-93291233",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-slip-dress-with-short-sleeve-tee/-/A-1004847051",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-sparkle-sequin-star-tulle-maxi-dress/-/A-1004824842",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-mixed-media-short-sleeve-tiered-dress/-/A-1004823470",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-mixed-media-short-sleeve-tiered-dress/-/A-1004823164",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-striped-pattern-lace-design-sleeveless-dress/-/A-1004811290",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mary-engelbreit-lola-dress-cherry-red/-/A-1004789356",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mary-engelbreit-roxy-dress-antique-wallpaper/-/A-1004727797",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-floral-print-pattern-round-neck-cotton-dress/-/A-1004709354",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mary-engelbreit-butterfly-garden-smocked-jenny-dress/-/A-1004705735",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-3d-floral-embroidered-ruffled-tulle-girl-dress/-/A-1004690182",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-3d-floral-embroidered-ruffled-tulle-girl-dress/-/A-1004670689",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-colorful-polka-dot-pattern-butterfly-sleeves-cute-dress/-/A-1004661128",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-fruit-pattern-college-style-lapel-design-mesh-patchwork-dress/-/A-1004608290",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-splash-queen-mermaid-dress-mia-belle-girls/-/A-1004605899",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-solid-color-embroidered-design-doll-neck-dress/-/A-1004584753",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-sparkly-sequin-butterfly-embellishment-tulle-birthday-party-dress/-/A-1004581165",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-flower-pattern-show-dress-birthday-party-formal-dress/-/A-1004578901",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-toddler-and-youth-girls-fit-and-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002109298",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-friends-fit-flair-cap-sleeve-dress/-/A-1002395005",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-mon-squares-fit-flair-cap-sleeve-dress/-/A-1002395861",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-mon-trainer-pokeball-logo-fit-flair-cap-sleeve-dress/-/A-1002395593",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-pika-fit-flair-cap-sleeve-dress/-/A-1002395269",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-pattern-fit-flair-cap-sleeve-dress/-/A-1002396578",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-lightning-fit-flair-cap-sleeve-dress/-/A-1002396713",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-spring-grils-baby-kids-long-sleeve-floral-pink-princess-dress/-/A-1004502726",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-peeking-pikachu-fit-flair-cap-sleeve-dress/-/A-1002360557",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-the-brady-bunch-classic-hollywood-squares-fit-flair-cap-sleeve-dress/-/A-1001988352",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-speak-through-art-fit-flair-cap-sleeve-dress/-/A-1003928596",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-floral-patched-pattern-striped-tutu-princess-dress-one-shoulder-dress/-/A-1004457621",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/sweet-cherry-embroidered-pinstripe-tank-dress-mia-belle-girls/-/A-1004457470",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-striped-pattern-v-neck-western-style-formal-dress/-/A-1004397639",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/ola-otter-flutter-sleeve-embroidered-dress-orange/-/A-1004191100",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/ola-otter-flutter-sleeve-embroidered-dress-navy-blue/-/A-1004191093",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/ola-otter-a-line-dress-mixed-fruit-multicoloured/-/A-1004191086",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-jellyfish-ramune-graphic-sleeveless-aline-dress/-/A-1004189112",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-country-casuals-raised-on-country-sunshine-graphic-sleeveless-aline-dress/-/A-1004186874",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-celebrate-family-graphic-sleeveless-aline-dress/-/A-1004185243",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/worthy-threads-little-big-girls-three-quarter-sleeve-twirly-dresses/-/A-1004020895",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/curious-george-classic-cartoons-graphic-short-sleeve-fleece-dress/-/A-1003971424",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/invader-zim-gir-loves-tacos-in-space-graphic-short-sleeve-fleece-dress/-/A-1003971400",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-crown-fit-flair-cap-sleeve-dress/-/A-1003970576",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-pre-k-graphic-sleeveless-aline-dress/-/A-1003968028",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-second-grade-graphic-sleeveless-aline-dress/-/A-1003967449",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-third-grade-graphic-sleeveless-aline-dress/-/A-1003967226",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-2nd-grade-squad-thing-1-and-thing-2-graphic-sleeveless-aline-dress/-/A-1003966535",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-3rd-grade-squad-thing-1-and-thing-2-graphic-sleeveless-aline-dress/-/A-1003966385",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-i-know-a-thing-or-two-school-graphic-sleeveless-aline-dress/-/A-1003966264",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-abc-book-characters-graphic-sleeveless-aline-dress/-/A-1003966135",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-first-grade-out-of-this-world-graphic-sleeveless-aline-dress/-/A-1003966010",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-oh-places-youll-go-when-you-read-graphic-sleeveless-aline-dress/-/A-1003965994",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-k-is-for-kindergarten-graphic-sleeveless-aline-dress/-/A-1003965842",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-kindergarten-out-of-this-world-graphic-sleeveless-aline-dress/-/A-1003965769",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-kindergarten-squad-thing-1-and-thing-2-graphic-sleeveless-aline-dress/-/A-1003965462",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-pre-k-out-of-this-world-cat-in-the-hat-graphic-sleeveless-aline-dress/-/A-1003965428",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-pre-k-squad-thing-1-and-thing-2-graphic-sleeveless-aline-dress/-/A-1003965228",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-1st-grade-squad-thing-1-and-thing-2-graphic-sleeveless-aline-dress/-/A-1003965076",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-recess-is-my-favorite-thing-graphic-sleeveless-aline-dress/-/A-1003964684",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-cat-in-the-hat-school-is-cool-graphic-sleeveless-aline-dress/-/A-1003964195",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/dr-seuss-third-grade-out-of-this-world-graphic-sleeveless-aline-dress/-/A-1003963621",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/karma-s-world-conquer-the-world-graphic-sleeveless-aline-dress/-/A-1003963373",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/karma-s-world-crown-graphic-sleeveless-aline-dress/-/A-1003963336",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/karma-s-world-graffiti-art-graphic-sleeveless-aline-dress/-/A-1003963276",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/karma-s-world-karma-art-graphic-sleeveless-aline-dress/-/A-1003963227",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/karma-s-world-karma-notebook-graphic-sleeveless-aline-dress/-/A-1003963187",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/karma-s-world-love-what-you-love-graphic-sleeveless-aline-dress/-/A-1003963135",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/karma-s-world-number-one-on-the-block-graphic-sleeveless-aline-dress/-/A-1003963120",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/karma-s-world-open-your-mind-open-your-heart-graphic-sleeveless-aline-dress/-/A-1003963105",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/karma-s-world-our-super-power-graphic-sleeveless-aline-dress/-/A-1003963055",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/karma-s-world-swag-is-swag-graphic-sleeveless-aline-dress/-/A-1003963022",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/karma-s-world-we-re-so-ambitous-graphic-sleeveless-aline-dress/-/A-1003962990",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-curious-george-classic-cartoons-fit-flair-cap-sleeve-dress/-/A-1003962626",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-invader-zim-gir-loves-tacos-in-space-fit-flair-cap-sleeve-dress/-/A-1003962396",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-problem-solver-graphic-sleeveless-aline-dress/-/A-1003960271",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-i-train-my-brain-graphic-sleeveless-aline-dress/-/A-1003960230",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-hello-kindergarten-graphic-sleeveless-aline-dress/-/A-1003960128",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-i-m-just-here-for-the-snacks-graphic-sleeveless-aline-dress/-/A-1003959972",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-hello-second-grade-graphic-sleeveless-aline-dress/-/A-1003959825",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-learn-alotl-in-kindergarten-graphic-sleeveless-aline-dress/-/A-1003959390",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-learn-alotl-in-1st-grade-graphic-sleeveless-aline-dress/-/A-1003959272",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-winston-graphic-sleeveless-aline-dress/-/A-1003928835",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-speak-through-art-graphic-sleeveless-aline-dress/-/A-1003928756",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-lyrical-star-airbrush-style-graphic-sleeveless-aline-dress/-/A-1003928716",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-winston-karma-alex-graphic-sleeveless-aline-dress/-/A-1003928701",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-girl-group-graphic-sleeveless-aline-dress/-/A-1003928672",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-daddy-daughter-day-graphic-sleeveless-aline-dress/-/A-1003928638",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/karma-s-world-we-re-all-stars-graphic-sleeveless-aline-dress/-/A-1003928615",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-winston-fit-flair-cap-sleeve-dress/-/A-1003928497",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pink-lace-sleeveless-casual-dress-mia-belle-girls/-/A-1003867437",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/boho-blossom-floral-print-tank-tiered-dress-mia-belle-girls/-/A-1003839794",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/sparkly-blue-bow-sequin-ruffle-dress-mia-belle-girls/-/A-1003836797",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-spring-and-summer-baby-girls-pink-short-sleeves-flowers-collection-dress/-/A-1003356870",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-summer-baby-girls-sleeveless-sailboat-pattern-striped-dress/-/A-1003355828",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-fashion-lace-collar-long-sleeve-baby-onesies-or-girl-dress/-/A-1003339085",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-adorable-baby-lace-collar-onesies-and-floral-pattern-girls-dress-princess-sister-matching-set/-/A-1003336006",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/twirl-dress-in-blush-butterfly/-/A-1003295100",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lev-baby-girls-viscose-from-bamboo-short-sleeve-dress-pink-marble-print/-/A-1003267723",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-cozy-gaming-graphic-sleeveless-aline-dress/-/A-1003238289",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/ola-otter-strap-dress-happy-camping/-/A-1003029940",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-preppy-style-autumn-girls-horse-embroidery-collar-long-sleeves-dress/-/A-1002991038",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-summer-pure-cotton-strawberry-pattern-short-sleeved-dress-with-peter-pan-collar-for-stylish-girls/-/A-1002937906",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-muslin-dress-pink-and-coral-flowers/-/A-1002806687",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bi-material-dress-with-ruffle-gingham-skirt-lilac-and-white/-/A-1002806668",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-dress-off-white-and-koala/-/A-1002806625",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-organic-cotton-dress-small-turquoise-flowers/-/A-1002806616",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-chambray-dress-with-embroidery-golden-beige/-/A-1002806604",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-terry-cloth-dress-turquoise-and-off-white/-/A-1002806496",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-smocked-seersucker-peasant-dress-blue-and-white-striped/-/A-1002806485",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bi-material-mesh-and-organic-cotton-dress-snow-white/-/A-1002806474",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-dress-fruits-on-yellow-background/-/A-1002806462",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-sleeveless-dress-multicolored/-/A-1002806440",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-organic-cotton-dress-with-cut-outs-palm-trees-pink-flamingo-and-turquoise/-/A-1002806419",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-smocked-organic-cotton-dress-with-mesh-frill-lilac/-/A-1002806368",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-dress-lilac-tropical-and-pink-flamingos/-/A-1002806353",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-sleeveless-linen-dress-white-and-sage-striped/-/A-1002806317",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-tiered-color-block-peasant-dress-peach-pink-and-green/-/A-1002806303",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bi-material-cotton-and-mesh-dress-small-flowers-and-multicolored-gradient-skirt/-/A-1002806259",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-dress-with-flounce-sleeves-green-with-white-and-pink-bird/-/A-1002806249",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-ribbed-dress-with-waist-tie-small-flowers-on-white-background/-/A-1002806231",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-sleeveless-color-block-tulle-dress-pink-and-green/-/A-1002806200",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-bubble-dress-black-and-pink-butterflies/-/A-1002805600",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/bi-material-dress-with-printed-skirt-black-pink-and-butterflies/-/A-1002805584",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/tiered-dress-with-bows-pink-and-black/-/A-1002805562",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-terry-beach-dress-pink-and-white/-/A-1002805513",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/printed-beach-dress-yellow-pink-flowers-on-navy-blue-background/-/A-1002805477",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-beach-dress-black-and-multicolored-butterflies/-/A-1002805469",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/textured-smocked-dress-royal-blue/-/A-1002805432",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/multi-tiered-eyelet-dress-red/-/A-1002805410",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bi-material-belted-dress-beiges/-/A-1002805387",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/tiered-printed-mesh-dress-multicolored-with-butterflies/-/A-1002805365",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/milano-dress-with-printed-mesh-skirt-multicolored-with-butterflies/-/A-1002805109",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/printed-eyelet-dress-beige-and-small-flowers/-/A-1002804501",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/plaid-puff-sleeve-dress-beige-pink/-/A-1002804435",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/bi-material-dress-with-printed-mesh-skirt-multicolored/-/A-1002804388",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/crinkle-dress-with-applique-light-old-pink/-/A-1002804094",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/printed-chambray-dress-blue-and-white-cherries/-/A-1002804052",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/instant-message-easter-egg-every-kid-graphic-sleeveless-aline-dress/-/A-1002611116",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-a-good-pirate-fit-flair-cap-sleeve-dress/-/A-1000871840",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-kitty-cat-crew-fit-flair-cap-sleeve-dress/-/A-1000871758",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-my-friends-greatest-treasure-fit-flair-cap-sleeve-dress/-/A-1000871728",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-american-all-star-fit-flair-cap-sleeve-dress/-/A-1000871681",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-mommy-s-little-firecracker-fit-flair-cap-sleeve-dress/-/A-1000871643",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-spongebob-slugger-pants-fit-flair-cap-sleeve-dress/-/A-1000871612",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-outdoor-vibes-skye-and-everest-fit-flair-cap-sleeve-dress/-/A-1000871189",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-no-tricks-just-treats-fit-flair-cap-sleeve-dress/-/A-1000877125",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-plankton-naughty-list-fit-flair-cap-sleeve-dress/-/A-1000877190",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-hey-boo-fit-flair-cap-sleeve-dress/-/A-1000877218",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-boo-tiful-fit-flair-cap-sleeve-dress/-/A-1000877173",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-bikini-bottom-egg-hunting-champ-fit-flair-cap-sleeve-dress/-/A-1000850221",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-luck-of-the-square-pants-fit-flair-cap-sleeve-dress/-/A-1000849929",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-best-witches-fit-flair-cap-sleeve-dress/-/A-1000876536",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-bikini-bottom-beware-fit-flair-cap-sleeve-dress/-/A-1000876580",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-halloween-fit-flair-cap-sleeve-dress/-/A-1000876541",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-get-into-the-ninja-spirit-fit-flair-cap-sleeve-dress/-/A-1000876485",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-reindeer-turtles-fit-flair-cap-sleeve-dress/-/A-1000876476",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-frosty-friends-fit-flair-cap-sleeve-dress/-/A-1000876056",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-have-a-swell-christmas-fit-flair-cap-sleeve-dress/-/A-1000876110",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-merry-beachmas-fit-flair-cap-sleeve-dress/-/A-1000876038",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-press-start-grid-fit-flair-cap-sleeve-dress/-/A-1000838478",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-game-on-mike-fit-flair-cap-sleeve-dress/-/A-1000838448",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-game-on-don-fit-flair-cap-sleeve-dress/-/A-1000838935",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-muntant-ninja-turtle-shredder-pixels-fit-flair-cap-sleeve-dress/-/A-1000875918",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-pixel-gaming-group-fit-flair-cap-sleeve-dress/-/A-1000875931",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-nickelodeon-paw-patrol-fit-flair-cap-sleeve-dress/-/A-1000828491",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-nickelodeon-paw-patrol-fit-flair-cap-sleeve-dress/-/A-1000828486",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-squidward-luck-fit-flair-cap-sleeve-dress/-/A-1000827535",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-st-patricks-day-fit-flair-cap-sleeve-dress/-/A-1000827548",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-movie-logo-fit-flair-cap-sleeve-dress/-/A-1000827017",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-jiggypuff-music-notes-graphic-sleeveless-aline-dress/-/A-1002405397",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-psyduck-headache-graphic-sleeveless-aline-dress/-/A-1002405372",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-let-s-get-started-graphic-sleeveless-aline-dress/-/A-1002405363",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-jiggypuff-sing-along-graphic-sleeveless-aline-dress/-/A-1002405354",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-pattern-graphic-sleeveless-aline-dress/-/A-1002405345",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pokedex-pikachu-graphic-sleeveless-aline-dress/-/A-1002405336",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-thunderbolt-graphic-sleeveless-aline-dress/-/A-1002405327",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-tracer-graphic-sleeveless-aline-dress/-/A-1002405318",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-plaid-badge-graphic-sleeveless-aline-dress/-/A-1002405312",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-nope-not-today-snorlax-graphic-sleeveless-aline-dress/-/A-1002405290",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-catch-em-all-design-graphic-sleeveless-aline-dress/-/A-1002405285",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-stantler-art-graphic-sleeveless-aline-dress/-/A-1002405276",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-neon-pikachu-graphic-sleeveless-aline-dress/-/A-1002405269",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-punk-icons-graphic-sleeveless-aline-dress/-/A-1002405256",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-plaid-logo-graphic-sleeveless-aline-dress/-/A-1002405254",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-squares-graphic-sleeveless-aline-dress/-/A-1002405245",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-round-group-graphic-sleeveless-aline-dress/-/A-1002405239",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-slowpoke-taking-it-slow-graphic-sleeveless-aline-dress/-/A-1002405230",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-stantler-art-graphic-sleeveless-aline-dress/-/A-1002405212",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-team-pikachu-graphic-sleeveless-aline-dress/-/A-1002405217",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-team-pikachu-graphic-sleeveless-aline-dress/-/A-1002405206",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-team-pikachu-graphic-sleeveless-aline-dress/-/A-1002405188",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-happy-art-graphic-sleeveless-aline-dress/-/A-1002405175",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-retro-pok-mon-graphic-sleeveless-aline-dress/-/A-1002405172",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-starter-pok-mon-logo-graphic-sleeveless-aline-dress/-/A-1002405166",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-team-pok-mon-graphic-sleeveless-aline-dress/-/A-1002405157",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-catch-em-all-starters-graphic-sleeveless-aline-dress/-/A-1002405095",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-and-friends-graphic-sleeveless-aline-dress/-/A-1002405080",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-meowth-mischevious-laugh-graphic-sleeveless-aline-dress/-/A-1002405082",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-133-graphic-sleeveless-aline-dress/-/A-1002405056",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-gengar-neon-graphic-sleeveless-aline-dress/-/A-1002405058",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-grid-graphic-sleeveless-aline-dress/-/A-1002405043",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-pokedex-diagram-graphic-sleeveless-aline-dress/-/A-1002405016",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-japanese-graphic-sleeveless-aline-dress/-/A-1002405018",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-electric-type-pikachu-graphic-sleeveless-aline-dress/-/A-1002405000",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-neon-battle-mode-graphic-sleeveless-aline-dress/-/A-1002404996",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-checkered-graphic-sleeveless-aline-dress/-/A-1002404975",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-pikachu-grid-graphic-sleeveless-aline-dress/-/A-1002404981",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-logo-style-graphic-sleeveless-aline-dress/-/A-1002404964",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pokeball-trainer-graphic-sleeveless-aline-dress/-/A-1002404943",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-team-magikarp-graphic-sleeveless-aline-dress/-/A-1002404915",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-panel-comic-manga-graphic-sleeveless-aline-dress/-/A-1002404911",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-psyduck-anime-graphic-sleeveless-aline-dress/-/A-1002404905",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-bulbasaur-anime-battle-youth-girls-a-line-dress-graphic-sleeveless-aline-dress/-/A-1002404896",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-manga-lightning-graphic-sleeveless-aline-dress/-/A-1002404893",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-friends-retro-checkered-graphic-sleeveless-aline-dress/-/A-1002404883",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-anime-kanji-graphic-sleeveless-aline-dress/-/A-1002404882",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-champ-pikachu-shy-graphic-sleeveless-aline-dress/-/A-1002404870",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-pumpkin-graphic-sleeveless-aline-dress/-/A-1002404838",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-eat-em-all-graphic-sleeveless-aline-dress/-/A-1002404827",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pick-of-the-patch-graphic-sleeveless-aline-dress/-/A-1002404821",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-pika-scared-graphic-sleeveless-aline-dress/-/A-1002404817",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-trick-or-treat-graphic-sleeveless-aline-dress/-/A-1002404805",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-koraidon-legend-graphic-sleeveless-aline-dress/-/A-1002404561",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-koraidon-collegiate-graphic-sleeveless-aline-dress/-/A-1002404557",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-quaxly-stats-graphic-sleeveless-aline-dress/-/A-1002404551",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-elements-graphic-sleeveless-aline-dress/-/A-1002404540",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-partners-gcea-grid-graphic-sleeveless-aline-dress/-/A-1002404532",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-fuecoco-stats-graphic-sleeveless-aline-dress/-/A-1002404485",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-collegiate-graphic-sleeveless-aline-dress/-/A-1002404455",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-koraidon-elements-graphic-sleeveless-aline-dress/-/A-1002404460",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-legend-graphic-sleeveless-aline-dress/-/A-1002404435",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-opkm-0031-pikachu-lightning-graphic-sleeveless-aline-dress/-/A-1002404430",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-mewtwo-battle-graphic-sleeveless-aline-dress/-/A-1002404408",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-collegiate-graphic-sleeveless-aline-dress/-/A-1002404402",
      tags: "A-line Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/pok-mon-witch-pikachu-with-candy-graphic-sleeveless-aline-dress/-/A-1002404367",
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
