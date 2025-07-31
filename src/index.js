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
      url: "https://www.target.com/p/girls-peanuts-snoopy-woodstock-beach-buddies-surfing-fit-flair-cap-sleeve-dress/-/A-93036491",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-mixed-media-short-sleeve-tiered-dress/-/A-1004823470",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-mixed-media-short-sleeve-tiered-dress/-/A-1004823164",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/luvable-friends-touched-by-nature-long-sleeve-dresses-2pk-set/-/A-1004812968",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/luvable-friends-hudson-baby-long-sleeve-dresses-2pk/-/A-1004788526",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/luvable-friends-touched-by-nature-short-sleeve-dresses-2pk/-/A-1004788387",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/luvable-friends-hudson-baby-short-sleeve-dresses-2pk/-/A-1004787197",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-floral-print-pattern-round-neck-cotton-dress/-/A-1004709354",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-better-together-fit-flair-cap-sleeve-dress/-/A-1002109475",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-summer-pattern-fit-flair-cap-sleeve-dress/-/A-1002396314",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-friends-fit-flair-cap-sleeve-dress/-/A-1002395005",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-mon-round-group-fit-flair-cap-sleeve-dress/-/A-1002395911",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-3rd-grade-squad-thing-1-and-thing-2-fit-flair-cap-sleeve-dress/-/A-1004529552",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-our-super-power-fit-flair-cap-sleeve-dress/-/A-1003970567",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-open-your-mind-open-your-heart-fit-flair-cap-sleeve-dress/-/A-1003970570",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-recess-is-my-favorite-thing-fit-flair-cap-sleeve-dress/-/A-1004529529",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-number-one-on-the-block-fit-flair-cap-sleeve-dress/-/A-1003970573",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-crown-fit-flair-cap-sleeve-dress/-/A-1003970576",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-conquered-the-world-fit-flair-cap-sleeve-dress/-/A-1003970579",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-we-re-so-ambitous-fit-flair-cap-sleeve-dress/-/A-1003970564",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-country-casuals-raised-on-country-sunshine-fit-flair-cap-sleeve-dress/-/A-1004529476",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-mewtwo-ready-for-battle-fit-flair-cap-sleeve-dress/-/A-1002377539",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-happy-halloween-fit-flair-cap-sleeve-dress/-/A-1002376969",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-pokedex-fit-flair-cap-sleeve-dress/-/A-1002395359",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-poses-fit-flair-cap-sleeve-dress/-/A-1002395304",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-meowth-shadow-fit-flair-cap-sleeve-dress/-/A-1002395542",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-dex-fit-flair-cap-sleeve-dress/-/A-1002394994",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-checkers-fit-flair-cap-sleeve-dress/-/A-1002395158",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-info-chart-fit-flair-cap-sleeve-dress/-/A-1002396959",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-lightning-fit-flair-cap-sleeve-dress/-/A-1002396713",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-electric-type-fit-flair-cap-sleeve-dress/-/A-1002396473",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-electric-type-fit-flair-cap-sleeve-dress/-/A-1002396528",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-gengar-big-face-fit-flair-cap-sleeve-dress/-/A-1002396367",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-pre-k-out-of-this-world-cat-in-the-hat-fit-flair-cap-sleeve-dress/-/A-1003965573",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-k-is-for-kindergarten-fit-flair-cap-sleeve-dress/-/A-1003965872",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-third-grade-out-of-this-world-fit-flair-cap-sleeve-dress/-/A-1003963616",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-cotton-candy-fit-flair-cap-sleeve-dress/-/A-1001996518",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-roadie-fit-flair-cap-sleeve-dress/-/A-1001998163",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-peeking-pikachu-fit-flair-cap-sleeve-dress/-/A-1002360557",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-b-day-b-b-besties-celebrate-birthdays-fit-flair-cap-sleeve-dress/-/A-1001989501",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-winston-karma-alex-fit-flair-cap-sleeve-dress/-/A-1003928575",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-happy-birthday-to-me-fit-flair-cap-sleeve-dress/-/A-1002086336",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-hello-lovely-barbie-fit-flair-cap-sleeve-dress/-/A-1002082910",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-sister-of-birthday-boy-fit-flair-cap-sleeve-dress/-/A-1002085663",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002068999",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-fit-flair-cap-sleeve-dress/-/A-1002067022",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-malibu-sunset-with-palm-trees-fit-flair-cap-sleeve-dress/-/A-1002060481",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-they-call-me-ken-fit-flair-cap-sleeve-dress/-/A-1002059770",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sun-s-out-fit-flair-cap-sleeve-dress/-/A-1002056846",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-tacosaurus-fit-flair-cap-sleeve-dress/-/A-1003970548",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-learn-alotl-in-1st-grade-fit-flair-cap-sleeve-dress/-/A-1003970529",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-ready-to-rock-preschool-fit-flair-cap-sleeve-dress/-/A-1003967802",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-ready-to-rock-second-grade-fit-flair-cap-sleeve-dress/-/A-1003967393",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-ready-to-rock-third-grade-fit-flair-cap-sleeve-dress/-/A-1003967258",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-2nd-grade-squad-thing-1-and-thing-2-fit-flair-cap-sleeve-dress/-/A-1003966523",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-i-know-a-thing-or-two-school-fit-flair-cap-sleeve-dress/-/A-1003966380",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-abc-book-characters-fit-flair-cap-sleeve-dress/-/A-1003966163",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-first-grade-out-of-this-world-fit-flair-cap-sleeve-dress/-/A-1003965996",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-oh-places-youll-go-when-you-read-fit-flair-cap-sleeve-dress/-/A-1003965884",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-1st-grade-squad-thing-1-and-thing-2-fit-flair-cap-sleeve-dress/-/A-1003965502",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-pre-k-squad-thing-1-and-thing-2-fit-flair-cap-sleeve-dress/-/A-1003964956",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-cat-in-the-hat-school-is-cool-fit-flair-cap-sleeve-dress/-/A-1003964147",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-graffiti-art-fit-flair-cap-sleeve-dress/-/A-1003963267",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-karma-art-fit-flair-cap-sleeve-dress/-/A-1003963206",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-love-what-you-love-fit-flair-cap-sleeve-dress/-/A-1003963150",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-swag-is-swag-fit-flair-cap-sleeve-dress/-/A-1003963014",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-curious-george-classic-cartoons-fit-flair-cap-sleeve-dress/-/A-1003962626",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-problem-solver-fit-flair-cap-sleeve-dress/-/A-1003960329",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-i-train-my-brain-fit-flair-cap-sleeve-dress/-/A-1003960164",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-hello-second-grade-fit-flair-cap-sleeve-dress/-/A-1003959816",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-spectacolar-fit-flair-cap-sleeve-dress/-/A-1003959427",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-daddy-daughter-day-fit-flair-cap-sleeve-dress/-/A-1003928958",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-speak-through-art-fit-flair-cap-sleeve-dress/-/A-1003928596",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-we-re-all-stars-fit-flair-cap-sleeve-dress/-/A-1003928527",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-winston-fit-flair-cap-sleeve-dress/-/A-1003928497",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-lyrical-star-airbrush-style-fit-flair-cap-sleeve-dress/-/A-1003928455",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-girl-group-fit-flair-cap-sleeve-dress/-/A-1003928448",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-cozy-gaming-fit-flair-cap-sleeve-dress/-/A-1003238387",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-little-girls-tank-dress-blue-6/-/A-1002811074",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-best-friends-fit-flair-cap-sleeve-dress/-/A-1002658569",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-cottontail-candy-co-fit-flair-cap-sleeve-dress/-/A-1002611597",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-danny-phantom-going-ghost-fit-flair-cap-sleeve-dress/-/A-1000444722",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-a-good-pirate-fit-flair-cap-sleeve-dress/-/A-1000871840",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-the-crew-fit-flair-cap-sleeve-dress/-/A-1000871715",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-mommy-s-little-firecracker-fit-flair-cap-sleeve-dress/-/A-1000871643",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-blue-polaroid-fit-flair-cap-sleeve-dress/-/A-1000871346",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-happy-blue-fit-flair-cap-sleeve-dress/-/A-1000871306",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-blue-s-friend-forever-fit-flair-cap-sleeve-dress/-/A-1000871334",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-team-awesome-fit-flair-cap-sleeve-dress/-/A-1000871126",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-but-first-lasagna-fit-flair-cap-sleeve-dress/-/A-1000870818",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-happy-halloween-icons-fit-flair-cap-sleeve-dress/-/A-1000870725",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-i-live-for-weekends-fit-flair-cap-sleeve-dress/-/A-1000870698",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-witch-way-to-the-candy-fit-flair-cap-sleeve-dress/-/A-1000870522",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-pretend-i-m-listening-fit-flair-cap-sleeve-dress/-/A-1000870591",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-friends-fit-flair-cap-sleeve-dress/-/A-1000870748",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-mommy-s-perfect-pumpkin-fit-flair-cap-sleeve-dress/-/A-1000870498",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-boo-s-clues-fit-flair-cap-sleeve-dress/-/A-1000761545",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-trick-or-treat-fit-flair-cap-sleeve-dress/-/A-1000870552",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-jimmy-neutron-genius-fit-flair-cap-sleeve-dress/-/A-1000856273",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-hey-boo-fit-flair-cap-sleeve-dress/-/A-1000877218",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-easter-is-egg-fit-flair-cap-sleeve-dress/-/A-1000850208",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-st-patricks-day-fit-flair-cap-sleeve-dress/-/A-1000849954",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-heart-earth-fit-flair-cap-sleeve-dress/-/A-1000877003",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-loves-earth-fit-flair-cap-sleeve-dress/-/A-1000877037",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-best-witches-fit-flair-cap-sleeve-dress/-/A-1000876536",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-arrr-ye-ready-for-halloween-fit-flair-cap-sleeve-dress/-/A-1000876560",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-halloween-fit-flair-cap-sleeve-dress/-/A-1000876541",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-reindeer-turtles-fit-flair-cap-sleeve-dress/-/A-1000876476",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-i-regret-nothing-fit-flair-cap-sleeve-dress/-/A-1000876270",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-let-s-roll-al-fit-flair-cap-sleeve-dress/-/A-1000876377",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-ten-four-good-buddy-fit-flair-cap-sleeve-dress/-/A-1000876355",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-have-a-swell-christmas-fit-flair-cap-sleeve-dress/-/A-1000876110",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-merry-beachmas-fit-flair-cap-sleeve-dress/-/A-1000876038",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-city-scape-with-turtles-fit-flair-cap-sleeve-dress/-/A-1000838911",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-game-on-mike-fit-flair-cap-sleeve-dress/-/A-1000838448",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-game-on-don-fit-flair-cap-sleeve-dress/-/A-1000838935",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-pixel-gaming-group-fit-flair-cap-sleeve-dress/-/A-1000875931",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-head-over-paws-for-you-fit-flair-cap-sleeve-dress/-/A-1000832870",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000835885",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000836398",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-nickelodeon-paw-patrol-fit-flair-cap-sleeve-dress/-/A-1000828369",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-nickelodeon-paw-patrol-fit-flair-cap-sleeve-dress/-/A-1000828416",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000826036",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-want-you-to-have-a-happy-fourth-fit-flair-cap-sleeve-dress/-/A-1000482986",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000818951",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817321",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817490",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817537",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000677621",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000820254",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817328",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000820354",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000815569",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-ghosting-level-flying-dutchman-fit-flair-cap-sleeve-dress/-/A-1000480254",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-team-shreadder-foot-clan-member-fit-flair-cap-sleeve-dress/-/A-1000808999",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000651413",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000791405",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000643212",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000791438",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-gotta-catch-em-all-starter-pok-mon-fit-flair-cap-sleeve-dress/-/A-1002397046",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-gotta-catch-em-all-pikachu-logo-fit-flair-cap-sleeve-dress/-/A-1002397042",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-americana-fit-flair-cap-sleeve-dress/-/A-1000816999",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-what-rules-leo-and-brothers-fit-flair-cap-sleeve-dress/-/A-1000479072",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000643044",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-battle-mode-fit-flair-cap-sleeve-dress/-/A-1002397013",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-retro-pok-mon-logo-fit-flair-cap-sleeve-dress/-/A-1002397011",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-character-grid-fit-flair-cap-sleeve-dress/-/A-1002396974",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-bundled-up-pikachu-fit-flair-cap-sleeve-dress/-/A-1002396969",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-trainer-fit-flair-cap-sleeve-dress/-/A-1002396963",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-charmander-retro-gamer-fit-flair-cap-sleeve-dress/-/A-1002396932",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-snow-boarding-fit-flair-cap-sleeve-dress/-/A-1002396894",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-wink-face-fit-flair-cap-sleeve-dress/-/A-1002396873",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-kanji-fit-flair-cap-sleeve-dress/-/A-1002396798",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-team-pikachu-fit-flair-cap-sleeve-dress/-/A-1002396062",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-manga-fit-flair-cap-sleeve-dress/-/A-1002396033",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-team-pok-mon-fit-flair-cap-sleeve-dress/-/A-1002395901",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-mon-squares-fit-flair-cap-sleeve-dress/-/A-1002395861",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-power-nap-fit-flair-cap-sleeve-dress/-/A-1002395737",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-mon-trainer-fit-flair-cap-sleeve-dress/-/A-1002395736",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-magikarp-fit-flair-cap-sleeve-dress/-/A-1002395711",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-psyduck-headache-fit-flair-cap-sleeve-dress/-/A-1002395708",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-outline-fit-flair-cap-sleeve-dress/-/A-1002395668",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-pattern-fit-flair-cap-sleeve-dress/-/A-1002395658",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-neon-pikachu-fit-flair-cap-sleeve-dress/-/A-1002395643",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-panels-fit-flair-cap-sleeve-dress/-/A-1002395626",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-neon-pikachu-fit-flair-cap-sleeve-dress/-/A-1002395631",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-psyduck-spiral-fit-flair-cap-sleeve-dress/-/A-1002395353",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-retro-pok-mon-fit-flair-cap-sleeve-dress/-/A-1002395312",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-face-fit-flair-cap-sleeve-dress/-/A-1002395275",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-retrogamer-fit-flair-cap-sleeve-dress/-/A-1002395283",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-wall-fit-flair-cap-sleeve-dress/-/A-1002395274",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-partners-team-fit-flair-cap-sleeve-dress/-/A-1002395253",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-squares-fit-flair-cap-sleeve-dress/-/A-1002395252",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-speed-fit-flair-cap-sleeve-dress/-/A-1002395227",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-poke-fit-flair-cap-sleeve-dress/-/A-1002395200",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-boxes-fit-flair-cap-sleeve-dress/-/A-1002395145",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-bolt-fit-flair-cap-sleeve-dress/-/A-1002395059",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-gotta-catch-em-all-pikachu-design-fit-flair-cap-sleeve-dress/-/A-1002395018",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-attacks-fit-flair-cap-sleeve-dress/-/A-1002395016",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-circle-fit-flair-cap-sleeve-dress/-/A-1002395013",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-design-fit-flair-cap-sleeve-dress/-/A-1002395004",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-mon-trainer-pokeball-logo-fit-flair-cap-sleeve-dress/-/A-1002395593",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-clover-power-fit-flair-cap-sleeve-dress/-/A-1002108143",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-st-paddys-collage-fit-flair-cap-sleeve-dress/-/A-1002108126",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-logo-shamrock-pattern-fit-flair-cap-sleeve-dress/-/A-1002108068",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-lucky-to-have-great-friends-fit-flair-cap-sleeve-dress/-/A-1002108062",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002107736",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-barbie-friends-halloween-fit-flair-cap-sleeve-dress/-/A-1002092916",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-faboolous-fit-flair-cap-sleeve-dress/-/A-1002092010",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-proud-to-be-me-fit-flair-cap-sleeve-dress/-/A-1002091487",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-witch-sihloutte-fit-flair-cap-sleeve-dress/-/A-1002090806",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-going-big-for-my-birthday-fit-flair-cap-sleeve-dress/-/A-1002086766",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-race-crew-3-yrs-fit-flair-cap-sleeve-dress/-/A-1002086760",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-ready-to-smash-cake-fit-flair-cap-sleeve-dress/-/A-1002086358",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-birthday-kid-fit-flair-cap-sleeve-dress/-/A-1002086100",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-its-my-birthday-fit-flair-cap-sleeve-dress/-/A-1002086047",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-believe-in-yourself-fit-flair-cap-sleeve-dress/-/A-1002084578",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-happy-valentine-s-day-fit-flair-cap-sleeve-dress/-/A-1002084371",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-arrow-heart-logo-fit-flair-cap-sleeve-dress/-/A-1002083915",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-pink-core-fit-flair-cap-sleeve-dress/-/A-1002083718",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-friends-rock-fit-flair-cap-sleeve-dress/-/A-1002083160",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-love-yourself-fit-flair-cap-sleeve-dress/-/A-1002082459",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-friendship-goals-fit-flair-cap-sleeve-dress/-/A-1002082273",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-happy-heart-day-fit-flair-cap-sleeve-dress/-/A-1002081914",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-brave-bold-and-fearless-fit-flair-cap-sleeve-dress/-/A-1002081380",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-inspired-by-barbie-fit-flair-cap-sleeve-dress/-/A-1002081040",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-out-of-box-fit-flair-cap-sleeve-dress/-/A-1002078847",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-butterflies-flutter-fit-flair-cap-sleeve-dress/-/A-1002076642",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-choose-kindness-fit-flair-cap-sleeve-dress/-/A-1002076612",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-patterned-love-fit-flair-cap-sleeve-dress/-/A-1002075967",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-do-what-makes-you-awesome-fit-flair-cap-sleeve-dress/-/A-1002075926",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-butterfly-logo-fit-flair-cap-sleeve-dress/-/A-1002075904",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-fitness-barbie-fit-flair-cap-sleeve-dress/-/A-1002075068",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002074934",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002074737",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-run-the-world-fit-flair-cap-sleeve-dress/-/A-1002073858",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-individual-classic-icons-create-silhouette-fit-flair-cap-sleeve-dress/-/A-1002066430",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-hearts-barbie-fit-flair-cap-sleeve-dress/-/A-1002066022",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-stick-together-fit-flair-cap-sleeve-dress/-/A-1002065645",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-out-of-office-fit-flair-cap-sleeve-dress/-/A-1002065638",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-mini-mini-mini-fit-flair-cap-sleeve-dress/-/A-1002065243",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-love-makes-the-world-go-around-fit-flair-cap-sleeve-dress/-/A-1002064505",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-leopard-heart-fit-flair-cap-sleeve-dress/-/A-1002064414",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-made-in-the-90-s-fit-flair-cap-sleeve-dress/-/A-1002063962",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-support-girls-fit-flair-cap-sleeve-dress/-/A-1002063787",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-pool-water-reflection-fit-flair-cap-sleeve-dress/-/A-1002063776",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sketch-original-fit-flair-cap-sleeve-dress/-/A-1002060584",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-original-icons-in-circle-grid-fit-flair-cap-sleeve-dress/-/A-1002060508",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-pattern-colorful-fit-flair-cap-sleeve-dress/-/A-1002060422",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-retro-swimsuit-fit-flair-cap-sleeve-dress/-/A-1002059412",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-the-dreamhouse-60th-anniversary-fit-flair-cap-sleeve-dress/-/A-1002058557",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-tie-dye-and-butterflies-flutter-around-barbie-fit-flair-cap-sleeve-dress/-/A-1002058409",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-stacked-barbie-vday-fit-flair-cap-sleeve-dress/-/A-1002058377",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-xoxo-barbie-fit-flair-cap-sleeve-dress/-/A-1002058354",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-live-play-outside-the-box-fit-flair-cap-sleeve-dress/-/A-1002058006",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-winter-breeze-fit-flair-cap-sleeve-dress/-/A-1002056075",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunset-and-palm-trees-fit-flair-cap-sleeve-dress/-/A-1002055524",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-valentine-s-collage-fit-flair-cap-sleeve-dress/-/A-1002054946",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-woman-kind-kind-woman-fit-flair-cap-sleeve-dress/-/A-1002054310",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-valentine-s-squad-fit-flair-cap-sleeve-dress/-/A-1002053881",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-since-1961-fit-flair-cap-sleeve-dress/-/A-1002052657",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-to-the-core-fit-flair-cap-sleeve-dress/-/A-1002052240",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-he-ken-can-do-it-all-fit-flair-cap-sleeve-dress/-/A-1002051858",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-retro-logo-1959-fit-flair-cap-sleeve-dress/-/A-1002051237",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-barbie-land-palm-trees-fit-flair-cap-sleeve-dress/-/A-1002051213",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-barbie-news-weather-forecast-sun-everyday-fit-flair-cap-sleeve-dress/-/A-1002051208",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-barbie-land-postal-service-california-fit-flair-cap-sleeve-dress/-/A-1002051195",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holiday-christmas-fit-flair-cap-sleeve-dress/-/A-1002050828",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002050737",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002050665",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-chasing-dreams-fit-flair-cap-sleeve-dress/-/A-1002050540",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002050447",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-toddler-youth-girls-fit-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002050291",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002050243",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-greetings-from-barbie-land-fit-flair-cap-sleeve-dress/-/A-1002050193",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002049819",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002049290",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002049231",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-serving-lewks-since-1961-fit-flair-cap-sleeve-dress/-/A-1002048915",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-property-of-barbie-land-beach-volleyball-team-fit-flair-cap-sleeve-dress/-/A-1002048115",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002047787",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002047556",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002047416",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-valentine-s-day-fit-flair-cap-sleeve-dress/-/A-1002047103",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002047099",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002046811",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-winter-holidays-fit-flair-cap-sleeve-dress/-/A-1002046727",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-winter-holidays-fit-flair-cap-sleeve-dress/-/A-1002046130",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002044258",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-valentine-s-day-fit-flair-cap-sleeve-dress/-/A-1002042839",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-ferris-my-hero-fit-flair-cap-sleeve-dress/-/A-1002032610",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-how-could-i-possibly-fit-flair-cap-sleeve-dress/-/A-1002031324",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-bueller-bueller-bueller-fit-flair-cap-sleeve-dress/-/A-1002031297",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-do-you-know-anything-fit-flair-cap-sleeve-dress/-/A-1002030439",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-ferris-bueller-s-day-off-righteous-dude-fit-flair-cap-sleeve-dress/-/A-1002030022",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-valentine-s-you-make-my-heart-race-fit-flair-cap-sleeve-dress/-/A-1002026348",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-xoxo-heart-fit-flair-cap-sleeve-dress/-/A-1002026022",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-valentine-s-epic-fit-flair-cap-sleeve-dress/-/A-1002026019",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-valentine-s-made-to-race-fit-flair-cap-sleeve-dress/-/A-1002025473",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-living-the-dream-fit-flair-cap-sleeve-dress/-/A-1002051889",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-glow-grrrl-retro-styled-fit-flair-cap-sleeve-dress/-/A-1001996426",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-all-dolls-together-fit-flair-cap-sleeve-dress/-/A-1001996420",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-fierce-graffiti-fit-flair-cap-sleeve-dress/-/A-1001996409",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-school-crest-fit-flair-cap-sleeve-dress/-/A-1001995403",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-jade-hunter-rainbow-graffiti-fit-flair-cap-sleeve-dress/-/A-1001995269",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-pure-fire-fit-flair-cap-sleeve-dress/-/A-1001995254",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-gradient-logo-fit-flair-cap-sleeve-dress/-/A-1001995126",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-violet-skyler-jade-fit-flair-cap-sleeve-dress/-/A-1001995024",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-charmed-the-power-of-three-will-set-you-free-fit-flair-cap-sleeve-dress/-/A-1001994354",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-outrageous-millennial-girls-fit-flair-cap-sleeve-dress/-/A-1001993612",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-splash-beauty-w-butterflies-hearts-fit-flair-cap-sleeve-dress/-/A-1001993494",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-groovy-babe-fit-flair-cap-sleeve-dress/-/A-1001993422",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-sweet-spicy-babes-fit-flair-cap-sleeve-dress/-/A-1001993409",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-candylicious-butterflies-hearts-fit-flair-cap-sleeve-dress/-/A-1001993349",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-spicy-babe-fit-flair-cap-sleeve-dress/-/A-1001993334",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-play-dazzle-music-fit-flair-cap-sleeve-dress/-/A-1001993303",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-money-swag-fit-flair-cap-sleeve-dress/-/A-1001993287",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-girls-club-fit-flair-cap-sleeve-dress/-/A-1001993253",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-royal-bee-fit-flair-cap-sleeve-dress/-/A-1001993191",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-royal-rebel-fit-flair-cap-sleeve-dress/-/A-1001993126",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-skater-chick-w-flowers-fit-flair-cap-sleeve-dress/-/A-1001998051",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-catch-my-vibe-fit-flair-cap-sleeve-dress/-/A-1001997959",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-glam-series-fit-flair-cap-sleeve-dress/-/A-1001997918",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-candylicious-original-fit-flair-cap-sleeve-dress/-/A-1001997905",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-queen-bee-is-born-to-roam-fit-flair-cap-sleeve-dress/-/A-1001997894",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-road-trippin-fit-flair-cap-sleeve-dress/-/A-1001997871",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-small-fry-caf-fit-flair-cap-sleeve-dress/-/A-1001997779",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-fierce-doll-fit-flair-cap-sleeve-dress/-/A-1001997689",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-bon-bon-doll-fit-flair-cap-sleeve-dress/-/A-1001996593",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-chica-chica-tropical-fit-flair-cap-sleeve-dress/-/A-1001996559",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-extra-w-a-side-of-swag-fit-flair-cap-sleeve-dress/-/A-1001996456",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-2fly-4-wrdz-fit-flair-cap-sleeve-dress/-/A-1001993112",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-we-re-all-queens-fit-flair-cap-sleeve-dress/-/A-1001993055",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-royal-realness-fit-flair-cap-sleeve-dress/-/A-1001993036",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-neonlicious-fit-flair-cap-sleeve-dress/-/A-1001992972",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-fierce-queens-fit-flair-cap-sleeve-dress/-/A-1001992961",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-feeling-extra-fit-flair-cap-sleeve-dress/-/A-1001990800",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-catch-some-rays-fit-flair-cap-sleeve-dress/-/A-1001989126",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-groovy-beach-babe-fit-flair-cap-sleeve-dress/-/A-1001989075",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-drip-drop-painting-girls-fit-flair-cap-sleeve-dress/-/A-1001988973",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-go-go-gurl-fit-flair-cap-sleeve-dress/-/A-1001988831",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-boogie-babe-fit-flair-cap-sleeve-dress/-/A-1001988714",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-grow-grrrl-fit-flair-cap-sleeve-dress/-/A-1001988679",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-let-s-be-kind-to-plants-fit-flair-cap-sleeve-dress/-/A-1001988647",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-time-to-shine-fit-flair-cap-sleeve-dress/-/A-1001988584",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-earthy-bb-fit-flair-cap-sleeve-dress/-/A-1001988559",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-friends-grow-together-fit-flair-cap-sleeve-dress/-/A-1001988396",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-the-brady-bunch-the-brady-kids-fit-flair-cap-sleeve-dress/-/A-1001988397",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-the-brady-bunch-classic-hollywood-squares-fit-flair-cap-sleeve-dress/-/A-1001988352",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-little-tikes-find-the-way-fit-flair-cap-sleeve-dress/-/A-1001986547",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-little-tikes-fast-food-towing-fit-flair-cap-sleeve-dress/-/A-1001986495",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-little-tikes-go-green-fit-flair-cap-sleeve-dress/-/A-1001986402",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-4th-of-july-fit-flair-cap-sleeve-dress/-/A-1001985075",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-blue-leaf-frame-fit-flair-cap-sleeve-dress/-/A-1001984886",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-california-fit-flair-cap-sleeve-dress/-/A-1001984832",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-rainbow-high-simone-summers-fit-flair-cap-sleeve-dress/-/A-1001984838",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-rainbow-paris-pearls-fit-flair-cap-sleeve-dress/-/A-1001984821",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mtv-logo-jack-o-lantern-fit-flair-cap-sleeve-dress/-/A-1001984099",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mtv-logo-halloween-fit-flair-cap-sleeve-dress/-/A-1001984040",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mtv-take-me-to-the-moon-person-fit-flair-cap-sleeve-dress/-/A-1001984036",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mtv-y2k-logo-fit-flair-cap-sleeve-dress/-/A-1001983940",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mtv-retro-gamer-logo-fit-flair-cap-sleeve-dress/-/A-1001983937",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mtv-skater-fit-flair-cap-sleeve-dress/-/A-1001983928",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mtv-logo-liquid-metal-fit-flair-cap-sleeve-dress/-/A-1001983888",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mtv-icon-collage-logo-fit-flair-cap-sleeve-dress/-/A-1001983862",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mtv-drawn-floral-logo-fit-flair-cap-sleeve-dress/-/A-1001983817",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mtv-logo-retro-collage-fit-flair-cap-sleeve-dress/-/A-1001983810",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mtv-funky-flower-dude-fit-flair-cap-sleeve-dress/-/A-1001983816",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mtv-slime-logo-fit-flair-cap-sleeve-dress/-/A-1001983805",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mtv-animal-print-splatter-fit-flair-cap-sleeve-dress/-/A-1001983799",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-mattel-original-logo-fit-flair-cap-sleeve-dress/-/A-1001978619",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-mattel-original-logo-fit-flair-cap-sleeve-dress/-/A-1001978519",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-winter-dolls-fit-flair-cap-sleeve-dress/-/A-1001978035",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-heath-burns-let-your-light-shine-fit-flair-cap-sleeve-dress/-/A-1001973305",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-draculaura-aka-fangtastic-fit-flair-cap-sleeve-dress/-/A-1001973298",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-camp-woodstock-graphic-short-sleeve-fleece-dress/-/A-1001738997",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-shamrock-cuties-fit-flair-cap-sleeve-dress/-/A-1001603017",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-shenanigans-with-my-gnomies-fit-flair-cap-sleeve-dress/-/A-1001602565",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-mama-s-lucky-charm-fit-flair-cap-sleeve-dress/-/A-1001602048",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-outlined-shamrock-fit-flair-cap-sleeve-dress/-/A-1001601616",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-rad-little-lad-fit-flair-cap-sleeve-dress/-/A-1001601270",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-sheep-holding-a-shamrock-fit-flair-cap-sleeve-dress/-/A-1001601075",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-lucky-to-have-my-cousins-fit-flair-cap-sleeve-dress/-/A-1001600685",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-lucky-to-not-be-in-trouble-fit-flair-cap-sleeve-dress/-/A-1001600575",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-coolest-clover-in-the-patch-fit-flair-cap-sleeve-dress/-/A-1001600629",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-dinosaur-eatting-rainbow-fit-flair-cap-sleeve-dress/-/A-1001600159",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/birdie-bean-care-bears-cosmic-bears-birdie-dress/-/A-1001519114",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/birdie-bean-thea-birdie-gown-short-sleeve/-/A-1001417348",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-cat-christmas-present-fit-flair-cap-sleeve-dress/-/A-1000877501",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-my-kind-of-reindeer-games-christmas-fit-flair-cap-sleeve-dress/-/A-1000877495",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-property-of-santas-workshop-christmas-fit-flair-cap-sleeve-dress/-/A-1000877475",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000877455",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000877433",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000877420",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-i-m-ready-for-christmas-fit-flair-cap-sleeve-dress/-/A-1000877314",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-patrick-it-s-lit-fit-flair-cap-sleeve-dress/-/A-1000877289",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-my-favorite-color-is-christmas-lights-fit-flair-cap-sleeve-dress/-/A-1000877267",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-creatures-of-the-deep-fit-flair-cap-sleeve-dress/-/A-1000877252",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-best-witches-fit-flair-cap-sleeve-dress/-/A-1000877240",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-franken-sponge-fit-flair-cap-sleeve-dress/-/A-1000877200",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-happy-halloween-fit-flair-cap-sleeve-dress/-/A-1000877165",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-plankton-naughty-list-fit-flair-cap-sleeve-dress/-/A-1000877190",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-boo-tiful-fit-flair-cap-sleeve-dress/-/A-1000877173",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-spongebob-scaredy-pants-fit-flair-cap-sleeve-dress/-/A-1000877167",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-spongeboo-fit-flair-cap-sleeve-dress/-/A-1000877132",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-no-tricks-just-treats-fit-flair-cap-sleeve-dress/-/A-1000877125",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-sandy-boo-y-all-fit-flair-cap-sleeve-dress/-/A-1000877117",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-woodstock-chasing-snowflakes-christmas-fit-flair-cap-sleeve-dress/-/A-1000877109",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-woodstock-ski-pro-fit-flair-cap-sleeve-dress/-/A-1000877068",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-s-cocoa-christmas-fit-flair-cap-sleeve-dress/-/A-1000877072",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-and-woodstock-snow-much-fun-fit-flair-cap-sleeve-dress/-/A-1000877063",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876788",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876767",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876750",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876725",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876719",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876684",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876676",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876667",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876660",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876636",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876639",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876625",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876608",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876604",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-bikini-bottom-beware-fit-flair-cap-sleeve-dress/-/A-1000876580",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876576",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876570",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-hooked-on-halloween-fit-flair-cap-sleeve-dress/-/A-1000876549",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876547",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-santas-helpers-in-a-half-shell-fit-flair-cap-sleeve-dress/-/A-1000876522",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-turtley-awesome-group-fit-flair-cap-sleeve-dress/-/A-1000876514",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-get-into-the-ninja-spirit-fit-flair-cap-sleeve-dress/-/A-1000876485",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-muntant-ninja-turtles-happy-holidays-fit-flair-cap-sleeve-dress/-/A-1000876462",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-have-a-turtley-awesome-holiday-fit-flair-cap-sleeve-dress/-/A-1000876455",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-lil-pups-big-trucks-fit-flair-cap-sleeve-dress/-/A-1000876424",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-let-s-roll-skye-fit-flair-cap-sleeve-dress/-/A-1000876345",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-my-presence-is-your-present-fit-flair-cap-sleeve-dress/-/A-1000876302",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-seasons-eatings-fit-flair-cap-sleeve-dress/-/A-1000876287",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-santas-little-helpers-fit-flair-cap-sleeve-dress/-/A-1000876280",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-feliz-navi-dog-fit-flair-cap-sleeve-dress/-/A-1000876258",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-alaska-last-frontier-fit-flair-cap-sleeve-dress/-/A-1000876228",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-woodstock-ski-stripes-fit-flair-cap-sleeve-dress/-/A-1000876188",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-mountain-retro-fit-flair-cap-sleeve-dress/-/A-1000876192",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-and-woodstock-ski-shop-fit-flair-cap-sleeve-dress/-/A-1000876160",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-utah-fit-flair-cap-sleeve-dress/-/A-1000876183",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-ski-pro-fit-flair-cap-sleeve-dress/-/A-1000876187",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-woodstock-snowfall-fit-flair-cap-sleeve-dress/-/A-1000876165",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-graphic-t-shirt-cat-38-jack-8482/-/A-94651642",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-knit-oversized-cherries-graphic-t-shirt-cat-jack-soft-pink/-/A-94802461",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-gummy-bears-graphic-t-shirt-cat-38-jack-8482-cream/-/A-94645703",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-friendsies-graphic-t-shirt-cat-38-jack-8482-medium-charcoal/-/A-94638317",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-fitted-t-shirt-cat-jack/-/A-94802395",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-fitted-t-shirt-cat-38-jack-8482/-/A-94591757",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-classic-fit-t-shirt-cat-jack/-/A-94576194",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-relaxed-fit-graphic-t-shirt-cat-38-jack-8482/-/A-94576214",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-fitted-embellished-t-shirt-cat-jack/-/A-94802031",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-t-shirt-cat-38-jack-8482/-/A-93747107",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-beach-party-graphic-t-shirt-cat-38-jack-8482-light-purple/-/A-94395459",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-39-usa-39-4th-of-july-graphic-t-shirt-cat-38-jack-8482-cream/-/A-94472315",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-oversized-front-back-graphic-t-shirt-cat-jack/-/A-94749737",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-ice-cream-graphic-t-shirt-cat-38-jack-8482-pink/-/A-93300723",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-ribbed-t-shirt-cat-38-jack-8482/-/A-92982442",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-4th-of-july-39-ice-cream-sandwich-39-graphic-t-shirt-cat-38-jack-8482-red/-/A-94472327",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-graphic-t-shirt-cat-38-jack-8482/-/A-94651716",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/kids-39-short-sleeve-4th-of-july-graphic-t-shirt-cat-38-jack-8482/-/A-94472223",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-oversized-graphic-t-shirt-cat-jack/-/A-91468544",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-graphic-t-shirt-art-class/-/A-94600763",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-textured-t-shirt-cat-38-jack-8482/-/A-94290588",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-crew-t-shirt-art-class/-/A-93564393",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-pineapple-graphic-t-shirt-cat-jack-cream/-/A-94596056",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-4th-of-july-ice-cream-flip-sequin-t-shirt-cat-jack-white/-/A-94231176",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-butterfly-graphic-t-shirt-cat-jack-medium-pink/-/A-94596051",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-flip-sequin-t-shirt-cat-38-jack-8482/-/A-94486580",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-heart-graphic-t-shirt-cat-jack-black/-/A-94596045",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-4th-of-july-usa-raglan-cap-sleeve-graphic-t-shirt-art-class/-/A-94819687",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-floral-smiley-graphic-t-shirt-cat-38-jack-8482-gray/-/A-93300716",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-tennis-animals-graphic-t-shirt-cat-38-jack-8482-lime-green/-/A-93700571",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-jersey-oversized-graphic-t-shirt-art-class/-/A-94600765",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-cinnamoroll-spirit-t-shirt-blue/-/A-94431152",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-ice-cream-graphic-t-shirt-cat-38-jack-8482-mint-green/-/A-92982425",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-terry-top-cat-38-jack-8482/-/A-94290587",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-scenic-happiness-club-t-shirt-cat-38-jack-8482-lavender-mauve/-/A-94645692",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-seoul-graphic-t-shirt-cat-38-jack-8482-dusty-pink/-/A-94645688",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-cowgirl-cats-graphic-t-shirt-cat-38-jack-8482-cream/-/A-94638336",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-textured-knit-t-shirt-cat-38-jack-8482/-/A-92982444",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-heart-graphic-t-shirt-cat-38-jack-8482-charcoal-gray/-/A-94638326",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-floral-graphic-t-shirt-cat-jack-white/-/A-94596046",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-cowboy-boots-graphic-t-shirt-cat-38-jack-8482-soft-pink/-/A-94638311",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-and-friends-oversized-graphic-t-shirt-art-class-pink/-/A-93405121",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-tulum-graphic-t-shirt-cat-38-jack-8482-bright-blue/-/A-94645687",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-ruffle-striped-ribbed-t-shirt-cat-38-jack-8482/-/A-93067243",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-dance-graphic-t-shirt-cat-38-jack-8482-light-blue/-/A-94638313",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-oversized-london-graphic-t-shirt-cat-jack-purple/-/A-94803335",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-ruffle-sleeve-striped-ribbed-t-shirt-cat-38-jack-8482/-/A-93067244",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-shell-heart-graphic-t-shirt-cat-jack-cream/-/A-94596047",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-fitted-floral-pointelle-t-shirt-cat-jack/-/A-94781845",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-oversized-license-graphic-t-shirt-art-class-blue/-/A-94257277",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-knit-oversized-graphic-t-shirt-cat-jack-light-green/-/A-94802462",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-ribbed-t-shirt-art-class-8482/-/A-94482620",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-verona-graphic-baby-t-shirt-ivory/-/A-93405120",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-rainbow-ice-cream-graphic-t-shirt-cat-38-jack-8482-cream/-/A-94645697",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-pointelle-americana-short-sleeve-t-shirt-pink/-/A-94431154",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-crepe-knit-39-shells-39-top-cat-38-jack-8482-cream/-/A-92901440",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-bubble-tea-graphic-t-shirt-cat-38-jack-8482-light-turquoise/-/A-94638328",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-oversized-rose-graphic-t-shirt-cat-jack-gray/-/A-94803336",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-capybara-graphic-t-shirt-cat-38-jack-8482-light-blue/-/A-94638334",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-olivia-rodrigo-oversized-graphic-t-shirt-white/-/A-94308055",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-fitted-flip-sequin-t-shirt-cat-jack/-/A-94802035",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-fitted-pointelle-t-shirt-cat-38-jack-8482/-/A-94576217",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-my-melody-elevated-spirit-t-shirt-pink-white/-/A-94431163",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-raglan-cap-sleeve-graphic-t-shirt-art-class/-/A-94350710",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-unicorn-graphic-t-shirt-cat-jack-light-blue/-/A-94596049",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-fitted-embellished-t-shirt-cat-jack/-/A-94482981",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-graphic-t-shirt-cat-38-jack-8482-charcoal-gray/-/A-94645706",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-fitted-striped-embellished-t-shirt-cat-jack-steel-blue/-/A-94482979",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-t-shirt-cat-38-jack-8482/-/A-93300726",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-baby-graphic-t-shirt-art-class/-/A-94340507",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-and-friends-graphic-t-shirt-pink/-/A-87951627",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-j-39-adore-graphic-t-shirt-cat-38-jack-8482-light-gray/-/A-94645699",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-cali-graphic-t-shirt-cat-38-jack-8482-cream/-/A-94638332",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-snoopy-ditsy-floral-short-sleeve-t-shirt-ivory/-/A-94431153",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-v-neck-ribbed-t-shirt-art-class/-/A-94482623",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-knit-oversized-graphic-t-shirt-cat-jack/-/A-94802029",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-relaxed-fit-t-shirt-cat-38-jack-8482/-/A-94492963",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-dogs-graphic-t-shirt-cat-38-jack-8482-lavender/-/A-94638315",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-4th-of-july-western-pointelle-short-sleeve-t-shirt-heather-gray/-/A-94431156",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-oversized-graphic-t-shirt-art-class/-/A-94021685",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-kiss-oversized-graphic-t-shirt-lilac-purple/-/A-94308054",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-lemons-graphic-t-shirt-cat-jack-light-yellow/-/A-94596054",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-39-rainbow-39-flip-sequin-t-shirt-cat-38-jack-8482-lime-green/-/A-92824080",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-jump-rope-graphic-t-shirt-cat-38-jack-8482-medium-pink/-/A-93700573",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-inside-out-2-short-sleeve-cropped-graphic-t-shirt-lilac-purple/-/A-92744004",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-carb-treats-graphic-t-shirt-cat-38-jack-8482-mint-green/-/A-93700570",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-scenic-desert-graphic-t-shirt-cat-38-jack-8482-pink-rose/-/A-94645695",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-shania-twain-let-s-go-girls-oversized-graphic-t-shirt-art-class-white/-/A-94308056",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-pelican-graphic-t-shirt-cat-jack-lilac/-/A-94596055",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-t-shirt-art-class/-/A-93460292",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-fitness-animals-graphic-t-shirt-cat-jack/-/A-91254611",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-stone-valley-pony-club-graphic-t-shirt-cat-38-jack-8482-ocean-green/-/A-94638345",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-beach-girls-graphic-t-shirt-cat-jack-green/-/A-94710667",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-lace-trim-t-shirt-art-class/-/A-94743274",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-basketball-graphic-t-shirt-cat-38-jack-8482-dark-purple/-/A-93700572",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-butterfly-graphic-t-shirt-cat-jack-peach-orange/-/A-94826729",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-scenic-wild-flowers-graphic-t-shirt-cat-38-jack-8482-light-lime/-/A-94645690",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-squishmallows-pointelle-short-sleeve-t-shirt-blue/-/A-94431155",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-scoop-neck-super-soft-t-shirt-art-class/-/A-93487782",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-strawberry-graphic-baby-t-shirt-pink/-/A-94310270",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-notched-neck-graphic-t-shirt-art-class/-/A-94133777",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-oversized-short-sleeve-striped-t-shirt-art-class/-/A-94482624",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-moody-squishmallows-pointelle-lace-short-sleeve-top-purple/-/A-93599702",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-chill-mode-boxy-short-sleeve-graphic-t-shirt-white/-/A-94442299",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-crew-neck-t-shirt-art-class/-/A-94021683",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-stitch-americana-boxy-short-sleeve-graphic-t-shirt-white/-/A-94431158",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-happy-hanukkah-fitted-short-sleeve-graphic-t-shirt/-/A-1000013259",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/converse-girls-short-sleeve-boxy-t-shirt-white/-/A-94399342",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-pokemon-floral-pikachu-pointelle-lace-short-sleeve-top-green/-/A-93615216",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-strawberry-shortcake-pointelle-lace-short-sleeve-top-pink/-/A-93615217",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/converse-girls-oversized-short-sleeve-graphic-t-shirt-white/-/A-94405040",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-oversized-halloween-graphic-t-shirt-cat-38-jack-8482-olive-green/-/A-94645700",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-los-angeles-dodgers-girls-crew-neck-t-shirt/-/A-94638014",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-americana-boxy-short-sleeve-graphic-t-shirt-blue/-/A-94431162",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/converse-girls-short-sleeve-boxy-fit-t-shirt/-/A-94687275",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-chicago-cubs-girls-39-crew-neck-t-shirt/-/A-94622092",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/converse-girls-oversized-short-sleeve-graphic-t-shirt-violet-heather/-/A-93421488",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-halloween-39-ghost-cat-39-flip-sequin-t-shirt-cat-38-jack-8482-black/-/A-94492965",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-los-angeles-angels-girls-39-crew-neck-t-shirt/-/A-94622097",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-short-sleeve-boxy-t-shirt-pink/-/A-93421452",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-minnesota-twins-girls-crew-neck-t-shirt/-/A-94638024",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-los-angeles-dodgers-girls-39-white-v-neck-t-shirt/-/A-94622121",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-new-york-yankees-girls-39-crew-neck-t-shirt/-/A-94622101",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-halloween-graphic-t-shirt-cat-38-jack-8482-cream/-/A-94638324",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/converse-girls-short-sleeve-t-shirt/-/A-94687284",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-short-sleeve-seamless-t-shirt-art-class/-/A-92186820",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-graphic-rose-baby-t-shirt-art-class-black/-/A-92186828",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-short-sleeve-boxy-t-shirt-blue/-/A-93421451",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/converse-girls-short-sleeve-graphic-t-shirt/-/A-94687319",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-san-francisco-giants-girls-crew-neck-t-shirt/-/A-94638053",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-san-diego-padres-girls-crew-neck-t-shirt/-/A-94638050",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-short-sleeve-sporty-t-shirt-pink/-/A-94708612",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-detroit-tigers-girls-crew-neck-t-shirt/-/A-94638002",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/kids-adaptive-short-sleeve-2pk-t-shirt-cat-jack/-/A-85787567",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-chicago-white-sox-girls-39-crew-neck-t-shirt/-/A-94622091",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-essential-t-shirt/-/A-86739501",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-indiana-fever-girls-39-short-sleeve-caitlin-clark-t-shirt/-/A-94746599",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-minecraft-axolotl-t-shirt/-/A-1001937048",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-short-sleeve-roll-cuff-t-shirt-heather-gray/-/A-94708613",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-chicago-cubs-girls-39-white-v-neck-t-shirt/-/A-94622109",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-graceful-dead-graphic-t-shirt-art-class-cream/-/A-92103211",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-short-sleeve-graphic-t-shirt-cream/-/A-94708614",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-philadelphia-phillies-girls-crew-neck-t-shirt/-/A-94638042",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-new-york-mets-girls-39-crew-neck-t-shirt/-/A-94622100",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-indiana-fever-kids-39-short-sleeve-caitlin-clark-t-shirt/-/A-94746665",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-distressed-red-white-and-blue-t-shirt/-/A-85763746",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-texas-rangers-girls-crew-neck-t-shirt/-/A-94638070",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-detroit-tigers-girls-39-white-v-neck-t-shirt/-/A-94622115",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/disney-descendants-girls-drop-shoulder-t-shirt-little-kid-to-big-kid/-/A-93743490",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-boston-red-sox-girls-crew-neck-t-shirt/-/A-94637966",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-milwaukee-brewers-girls-crew-neck-t-shirt/-/A-94638021",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-billie-eilish-oversized-graphic-t-shirt-art-class-white/-/A-94308053",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-houston-astros-girls-39-crew-neck-t-shirt/-/A-94622096",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-philadelphia-phillies-girls-39-white-v-neck-t-shirt/-/A-94622123",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-indiana-fever-girls-39-short-sleeve-t-shirt/-/A-94746675",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-san-diego-padres-girls-39-white-v-neck-t-shirt/-/A-94622128",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-surfing-aloha-stitch-t-shirt/-/A-90583514",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-atlanta-braves-girls-39-crew-neck-t-shirt/-/A-94622090",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-minnesota-united-fc-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399346",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-arizona-diamondbacks-girls-crew-neck-t-shirt/-/A-94637808",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-birthday-girl-stitch-t-shirt/-/A-89012938",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-minnesota-lynx-girls-39-short-sleeve-t-shirt/-/A-94746677",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-americana-tulle-dress-white/-/A-94442310",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-minnesota-twins-girls-39-white-v-neck-t-shirt/-/A-94622117",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-st-louis-cardinals-girls-crew-neck-t-shirt/-/A-94638064",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-san-francisco-giants-girls-39-white-v-neck-t-shirt/-/A-94622127",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-floral-stitch-t-shirt/-/A-89800752",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-cute-and-fluffy-retro-sunset-crop-top-t-shirt/-/A-89019617",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-unicorn-graphic-t-shirt-cat-jack-medium-lavender/-/A-92406032",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-new-york-yankees-girls-39-white-v-neck-t-shirt/-/A-94622125",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-ruffled-peter-pan-collar-knit-shirt/-/A-87826139",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-8th-birthday-hula-dance-t-shirt/-/A-89404949",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-washington-nationals-girls-39-crew-neck-t-shirt/-/A-94622106",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-holographic-stitch-t-shirt/-/A-87238901",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/acdc-back-in-black-gray-leopard-print-logo-crew-neck-short-sleeve-black-girl-s-t-shirt/-/A-92400298",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/bluey-girls-graphic-t-shirt-little-kid-to-big-kid/-/A-88275335",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-harry-potter-the-magic-letter-t-shirt/-/A-87698258",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-boston-red-sox-girls-39-white-v-neck-t-shirt/-/A-94622108",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-colorado-rockies-girls-39-crew-neck-t-shirt/-/A-94622093",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-gilmore-girls-luke-s-dinner-distressed-logo-t-shirt/-/A-1001037184",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-st-louis-city-sc-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399471",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-graphic-new-york-baby-t-shirt-art-class-blue/-/A-92186826",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-kansas-city-royals-girls-39-crew-neck-t-shirt/-/A-94622094",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-jumping-stitch-t-shirt/-/A-90846350",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-golden-state-valkyries-girls-39-short-sleeve-t-shirt/-/A-94746674",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-minnesota-lynx-kids-39-short-sleeve-napheesa-collier-t-shirt/-/A-94746663",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-americana-boxy-short-sleeve-graphic-t-shirt-pink/-/A-94431157",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-miami-marlins-girls-39-crew-neck-t-shirt/-/A-94622098",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-cleveland-guardians-girls-39-crew-neck-t-shirt/-/A-94622095",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-cincinnati-reds-girls-crew-neck-t-shirt/-/A-94637998",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-san-jose-earthquakes-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399440",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-arizona-diamondbacks-girls-39-white-v-neck-t-shirt/-/A-94622105",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-baltimore-orioles-girls-39-white-v-neck-t-shirt/-/A-94622110",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-halloween-graphic-t-shirt-cat-38-jack-8482-purple/-/A-94638325",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-new-york-mets-girls-39-white-v-neck-t-shirt/-/A-94622124",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/hello-kitty-birthday-t-shirt-sizes-2t-14-16/-/A-1001847949",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-milwaukee-brewers-girls-39-white-v-neck-t-shirt/-/A-94622118",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-oakland-athletics-girls-39-crew-neck-t-shirt/-/A-94622099",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-columbus-crew-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94395527",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-graphic-wednesday-baby-t-shirt-art-class-black/-/A-92186830",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lost-gods-fourth-of-july-usa-watercolor-print-t-shirt/-/A-83027629",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-nashville-sc-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399370",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-girls-2-pack-t-shirts-little-kid-to-big-kid/-/A-90496651",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-mickey-friends-animal-print-minnie-mouse-bow-t-shirt/-/A-89801003",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/barbie-girls-2-pack-adaptive-t-shirts-sensory-friendly-little-kid-sizes-4-7-8/-/A-92780601",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-duck-friends-t-shirt/-/A-90846696",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-houston-astros-girls-39-white-v-neck-t-shirt/-/A-94622116",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-sqiushmallows-americana-boxy-short-sleeve-graphic-t-shirt-blue/-/A-94431161",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-chicago-white-sox-girls-39-white-v-neck-t-shirt/-/A-94622111",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-faded-sketch-stitch-crop-t-shirt/-/A-88272364",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-tropical-hawaii-poster-t-shirt/-/A-89800897",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-fc-cincinnati-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94395544",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-seattle-mariners-girls-crew-neck-t-shirt/-/A-94638058",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-mickey-friends-christmas-mickey-and-minnie-collage-crop-t-shirt/-/A-88272300",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-st-louis-cardinals-girls-39-white-v-neck-t-shirt/-/A-94622130",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-golden-state-valkyries-girls-39-short-sleeve-crewneck-t-shirt/-/A-94746667",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-short-sleeve-graphic-t-shirt-aqua-blue/-/A-86682908",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-orlando-city-sc-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399390",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-seattle-sounders-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399449",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-paul-frank-distressed-i-heart-julius-t-shirt/-/A-90647438",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-atlanta-braves-girls-39-white-v-neck-t-shirt/-/A-94622103",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/sanrio-hello-kitty-girls-3-pack-shorts-sleeve-tees-for-big-kids-multicolor/-/A-1003488233",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-wicked-blinda-and-elphaba-logo-fitted-short-sleeve-graphic-t-shirt/-/A-93965711",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-disney-all-my-friends-are-dogs-t-shirt/-/A-86875303",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-adaptive-2pk-short-sleeve-t-shirt-cat-jack-light-blue-yellow/-/A-94600600",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/patpat-disney-princess-cinderella-snow-white-ariel-belle-toddler-girl-naia-character-print-ruffled-short-sleeve-tee-t-shirts/-/A-1003990784",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-harry-potter-cute-cartoon-hedwig-letter-crop-t-shirt/-/A-91247018",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lost-gods-halloween-treat-friends-t-shirt/-/A-81495279",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/disney-princess-moana-little-girls-3-pack-graphic-t-shirt-pink-white-blue/-/A-85270187",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-mesh-polo-shirt/-/A-86738997",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-atlanta-united-fc-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94395496",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-graphic-rosette-baby-t-shirt-art-class-white/-/A-92186829",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-minecraft-alex-steve-portal-party-t-shirt/-/A-1000140642",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-colorado-rockies-girls-39-white-v-neck-t-shirt/-/A-94622114",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-essential-t-shirt/-/A-86739284",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-pittsburgh-pirates-girls-39-crew-neck-t-shirt/-/A-94622102",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-cap-sleeve-side-shirred-t-shirt-art-class/-/A-92103195",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-colorado-rapids-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94395524",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/converse-girls-varsity-layering-jacket-navy-blue/-/A-94687320",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/pink-floyd-dark-side-of-the-moon-prism-pink-sky-crew-neck-short-sleeve-white-girl-s-t-shirt/-/A-92400291",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/marvel-spidey-and-his-amazing-friends-spider-man-miles-morales-ghost-spider-girls-3-pack-t-shirts-toddler-to-little-kid/-/A-88949243",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-distressed-groovy-planets-stitch-t-shirt/-/A-90846668",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-tangled-flower-sketch-t-shirt/-/A-85026114",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-las-vegas-aces-girls-39-short-sleeve-t-shirt/-/A-94746673",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-wicked-glinda-you-re-gonna-be-popular-t-shirt/-/A-93969322",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-7th-birthday-hula-dance-t-shirt/-/A-89405021",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-baltimore-orioles-girls-crew-neck-t-shirt/-/A-94637865",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-tampa-bay-rays-girls-crew-neck-t-shirt/-/A-94638068",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-indiana-fever-girls-39-short-sleeve-crewneck-t-shirt/-/A-94746668",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-fourth-of-july-wild-and-free-t-shirt/-/A-92224424",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-los-angeles-fc-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399260",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-dallas-wings-youth-paige-bueckers-5-shirt/-/A-94740707",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-descendants-the-rise-of-red-i-m-a-one-girl-riot-t-shirt/-/A-93078935",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-american-flag-sunglasses-stitch-t-shirt/-/A-87238663",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-cleveland-guardians-girls-39-white-v-neck-t-shirt/-/A-94622113",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-bright-neon-outline-t-shirt/-/A-90533592",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/sanrio-hello-kitty-girls-4-pack-shorts-sleeve-tees-for-big-kids-multicolor/-/A-1003488241",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-harry-potter-animals-and-pets-from-hogwarts-t-shirt/-/A-87697249",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-texas-rangers-girls-39-white-v-neck-t-shirt/-/A-94622132",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-good-vibes-only-stitch-t-shirt/-/A-87238878",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-floral-poster-crop-t-shirt/-/A-88272329",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-philadelphia-union-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399400",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/squishmallows-birthday-drop-shoulder-t-shirt/-/A-1002848526",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lost-gods-daisy-heart-t-shirt/-/A-85361632",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-charlotte-fc-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94395514",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-santa-surprise-t-shirt/-/A-87431500",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-graphic-racing-flags-baby-t-shirt-art-class-red/-/A-92186827",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-los-angeles-angels-girls-39-white-v-neck-t-shirt/-/A-94622120",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-seattle-mariners-girls-39-white-v-neck-t-shirt/-/A-94622129",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-3-pack-short-sleeve-t-shirt-for-toddlers-to-big-kids-size-10/-/A-1003488216",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-sporting-kansas-city-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399462",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-stitch-is-my-spirit-animal-crop-t-shirt/-/A-88272343",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lost-gods-fluffy-kitten-in-pink-glasses-t-shirt/-/A-86875098",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-minnesota-lynx-girls-39-short-sleeve-crewneck-t-shirt/-/A-94746669",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-cincinnati-reds-girls-39-white-v-neck-t-shirt/-/A-94622107",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-marvel-black-panther-short-sleeve-graphic-t-shirt-purple/-/A-86655532",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-my-little-pony-retro-rainbow-friends-t-shirt/-/A-82358178",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-las-vegas-aces-girls-39-short-sleeve-crewneck-t-shirt/-/A-94746671",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lost-gods-merry-christmas-reindeer-t-shirt/-/A-90161464",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-pittsburgh-pirates-girls-39-white-v-neck-t-shirt/-/A-94622126",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-pokemon-sprigatito-floral-type-t-shirt/-/A-1002737338",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-lace-trim-v-neck-shirt-art-class/-/A-92186823",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-disney-mickey-and-friends-mousey-christmas-t-shirt/-/A-87433712",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-disney-adorable-classic-kitties-t-shirt/-/A-1000127904",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/disney-classics-lady-and-the-tramp-girls-3-pack-graphic-t-shirts-little-kid-to-big-kid/-/A-87218912",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mtv-neon-pink-blue-light-logo-crew-neck-short-sleeve-charcoal-girl-s-t-shirt/-/A-92400286",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-nintendo-super-mario-princess-peach-friends-t-shirt/-/A-79710545",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-tampa-bay-rays-girls-39-white-v-neck-t-shirt/-/A-94622131",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-flowers-and-a-coconut-t-shirt/-/A-90533857",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-las-vegas-aces-girls-39-short-sleeve-a-39-ja-wilson-t-shirt/-/A-94748132",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/ncaa-lsus-tigers-girls-crew-neck-t-shirt/-/A-94638026",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-girls-3-pack-graphic-t-shirts-little-kid-to-big-kid/-/A-89252074",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-minnie-mouse-girls-4-pack-t-shirts-little-kid-to-big-kid/-/A-91107705",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-marvel-guardians-of-the-galaxy-groot-outdoorsy-graphic-t-shirt-light-blue-cream/-/A-86268809",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/kids-adaptive-2pk-short-sleeve-undershirt-with-abdominal-access-cat-jack-gray-white/-/A-85722384",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-jurassic-park-clever-girl-badge-t-shirt/-/A-89481315",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-wicked-popular-motto-t-shirt/-/A-93969303",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-jurassic-world-fallen-kingdom-dinosaur-identification-card-t-shirt/-/A-82369231",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-matching-family-t-shirt-little-kid-to-big/-/A-91683467",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lost-gods-galaxy-goggles-cat-t-shirt/-/A-86349437",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-disney-princess-arch-t-shirt/-/A-1001942384",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/ncaa-oregon-ducks-girls-crew-neck-t-shirt/-/A-94640350",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-chicago-sky-girls-39-short-sleeve-angel-reese-t-shirt/-/A-94746363",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-angel-large-portrait-t-shirt/-/A-87237854",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/my-little-pony-little-girls-3-pack-graphic-t-shirt-grey-blue-purple/-/A-85270993",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-sonic-the-hedgehog-amy-heart-hands-t-shirt/-/A-1001934858",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-mean-girls-distressed-that-is-so-fetch-t-shirt/-/A-91053206",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-las-vegas-aces-kids-39-short-sleeve-a-39-ja-wilson-t-shirt/-/A-94746666",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-washington-nationals-girls-39-white-v-neck-t-shirt/-/A-94622133",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-kansas-city-royals-girls-39-white-v-neck-t-shirt/-/A-94622112",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-disney-princess-pets-distressed-t-shirt/-/A-89176835",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-chicago-sky-girls-39-short-sleeve-t-shirt/-/A-94746672",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/nasa-spaceship-traveling-in-space-crew-neck-short-sleeve-white-girl-s-t-shirt/-/A-92402419",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/hello-kitty-drop-shoulder-t-shirt-sizes-4-14-16/-/A-1000402994",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lost-gods-christmas-cat-collage-t-shirt/-/A-84868878",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-austin-fc-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94395506",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-friends-central-perk-short-sleeve-graphic-t-shirt-heather-gray/-/A-86745347",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-the-little-mermaid-ariel-and-flounder-sea-t-shirt/-/A-91641853",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lost-gods-horse-retro-love-text-t-shirt/-/A-86875037",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-birthday-girls-short-sleeve-t-shirt-for-toddlers-and-big-kids-size-12/-/A-1004381474",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-inter-miami-cf-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399246",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-wicked-cartoon-together-we-re-unlimited-t-shirt/-/A-1004076097",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-it-s-my-birthday-distressed-t-shirt/-/A-89405096",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/disney-frozen-princess-anna-elsa-girls-3-pack-t-shirts-little-kid-to-big-kid/-/A-85561762",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/disney-princess-cinderella-belle-ariel-3-pack-t-shirts-multicolored/-/A-87358108",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-3-pack-t-shirts-little-kid-to-big-kid/-/A-88290831",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-pokemon-pals-pikachu-and-eevee-t-shirt/-/A-92914623",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lost-gods-american-flag-guitar-t-shirt/-/A-85956629",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-my-little-pony-friendship-is-magic-you-grow-girl-t-shirt/-/A-1002735908",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-kawaii-axolotl-with-bubbles-fitted-short-sleeve-graphic-t-shirt/-/A-94079355",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-ohana-means-family-t-shirt/-/A-87238798",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lost-gods-fourth-of-july-watercolor-american-flag-t-shirt/-/A-83025185",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/disney-princess-ariel-snow-white-rapunzel-girls-3-pack-t-shirts-little-kid-to-big-kid/-/A-88687400",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-feminine-fit-interlock-polo-shirt/-/A-86739279",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-seattle-storm-girls-39-short-sleeve-t-shirt/-/A-94746678",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-stranger-things-short-sleeve-graphic-t-shirt-heather-gray/-/A-86696714",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-chicago-sky-kids-39-short-sleeve-angel-reese-t-shirt/-/A-94746662",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-fc-dallas-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399230",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-disney-princess-believe-sparkle-collage-t-shirt/-/A-86875059",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-care-bears-hanukkah-peace-love-latkes-t-shirt/-/A-91915033",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-san-diego-fc-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399426",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/barbie-girls-mesh-hockey-jersey-long-sleeve-t-shirt-little-kid-to-big/-/A-1000746062",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-descendants-the-rise-of-red-i-m-a-rebel-t-shirt/-/A-93078839",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/seven-times-six-how-to-train-your-dragon-shirt-girl-s-toothless-short-sleeve-graphic-tee-blue/-/A-1004073801",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-houston-dynamo-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399243",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lilo-stitch-surfing-stitch-t-shirt/-/A-90583647",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/peppa-pig-girls-t-shirt-toddler-to-little-kid/-/A-90312834",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-d-c-united-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94395539",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-lost-gods-stay-cool-popsicles-t-shirt/-/A-1001663749",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-wicked-face-to-face-poster-t-shirt/-/A-1004076083",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-pokemon-colorful-sylveon-stars-t-shirt/-/A-1002737580",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-z-o-m-b-i-e-s-zed-and-addison-t-shirt/-/A-86126512",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/moriah-elizabeth-two-cats-girl-s-pink-crew-neck-short-sleeve-tee/-/A-1000030384",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/paw-patrol-nickelodeon-skye-rubble-chase-girls-birthday-t-shirt-toddler-to-big-kid/-/A-88290197",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-harry-potter-list-of-spells-t-shirt/-/A-83439196",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-bluey-girls-2-pack-t-shirts-little-kid-to-big-kid/-/A-89895338",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girls-how-to-train-your-dragon-toothless-stars-fitted-short-sleeve-graphic-t-shirt/-/A-1003382143",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-bluey-girls-2-pack-t-shirts-little-kid-to-big-kid/-/A-89652475",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mls-real-salt-lake-girls-39-short-sleeve-crew-neck-t-shirt/-/A-94399415",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/leveret-kids-long-sleeve-solid-classic-color-t-shirt/-/A-89471095",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-star-wars-stormtrooper-tropical-portrait-t-shirt/-/A-91245881",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-harry-potter-four-hogwarts-houses-collage-crop-t-shirt/-/A-91247171",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/levi-39-s-girls-39-short-sleeve-39-patchwork-39-batwing-t-shirt-white/-/A-89853459",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/wnba-new-york-liberty-kids-39-short-sleeve-sabrina-ionescu-t-shirt/-/A-94746664",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-jurassic-world-fallen-kingdom-cracked-dinosaurs-t-shirt/-/A-86175250",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/mlb-miami-marlins-girls-39-white-v-neck-t-shirt/-/A-94622119",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-scooby-doo-retro-gang-in-the-van-t-shirt/-/A-86875108",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-princess-the-little-mermaid-moana-lilo-stitch-frozen-elsa-birthday-girls-t-shirt-toddler-to-big-kid/-/A-87204448",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-my-little-pony-twilight-sparkle-face-t-shirt/-/A-82885564",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-disney-flowery-pua-t-shirt/-/A-1002737312",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-pokemon-eevee-133-t-shirt/-/A-92915278",
      tags: "Girl, T-shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-minnie-mouse-adorable-pose-t-shirt/-/A-1001034188",
      tags: "Girl, T-shirts",
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
