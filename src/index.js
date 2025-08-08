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
      url: "https://www.target.com/p/paw-patrol-earth-every-day/-/A-1000848494",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-cleo-de-nile-mummy-barb-graphic-short-sleeve-fleece-dress/-/A-1002118457",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongeboo/-/A-1000850647",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-mood/-/A-1000857636",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-battle-ready-graphic-short-sleeve-fleece-dress/-/A-1002348213",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-rock-em-robot-graphic-short-sleeve-fleece-dress/-/A-1002010797",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-woodstock-ski-pro-graphic-short-sleeve-fleece-dress/-/A-1001727762",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-magenta-excited/-/A-1000751944",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-garf-laying/-/A-1000786219",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fall-pumpkin-mania-graphic-short-sleeve-fleece-dress/-/A-1004529235",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-lol-hi-bae-graphic-short-sleeve-fleece-dress/-/A-1001999229",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-lit-fireworks-patrick/-/A-1000817117",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-eat-sleep-battle-repeat-graphic-short-sleeve-fleece-dress/-/A-1002386593",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-bark-in-the-park/-/A-1000786390",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-and-friends-skiing-graphic-short-sleeve-fleece-dress/-/A-1001726371",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-easter-egg-every-kid-graphic-short-sleeve-fleece-dress/-/A-1002632236",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-varsity-seal/-/A-1000784436",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790601",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/karma-s-world-our-super-power-graphic-short-sleeve-fleece-dress/-/A-1003972120",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-scardey-pants/-/A-1000810419",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-reptar-bar/-/A-1000784821",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-leonardo-aka-leo/-/A-1000827088",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-appa-flying-graphic-short-sleeve-fleece-dress/-/A-1001733224",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-fresh-arnold-graphic-short-sleeve-fleece-dress/-/A-1001730795",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-patrick-it-s-lit/-/A-1000851148",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-i-m-so-smart-graphic-short-sleeve-fleece-dress/-/A-1000752655",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-boo-tiful/-/A-1000850935",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000857533",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-1st-grade-is-out-of-this-world-graphic-short-sleeve-fleece-dress/-/A-1001735507",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pumpkin-party-graphic-short-sleeve-fleece-dress/-/A-1002355229",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795546",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-skater-graphic-short-sleeve-fleece-dress/-/A-1001984563",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fall-graphic-short-sleeve-fleece-dress/-/A-1004529201",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-sokka-nope-graphic-short-sleeve-fleece-dress/-/A-1001732997",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-mountains-are-calling-graphic-short-sleeve-fleece-dress/-/A-1001739091",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-varsity-squad-graphic-short-sleeve-fleece-dress/-/A-1001727003",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795657",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-daddy-little-camper-graphic-short-sleeve-fleece-dress/-/A-1001727097",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-everest-sketch/-/A-1000787248",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791808",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-groovy-heart-graphic-short-sleeve-fleece-dress/-/A-1001724375",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-multi-color-choose-kindness-graphic-short-sleeve-fleece-dress/-/A-1002062934",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795643",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-mutant-mayhem/-/A-1000819354",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-all-the-colors-of-the-rainbow-are-beautiful-graphic-short-sleeve-fleece-dress/-/A-1001735118",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-santa-hat-graphic-short-sleeve-fleece-dress/-/A-1002352238",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hoppy-easter/-/A-1000857548",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-celebr8-graphic-short-sleeve-fleece-dress/-/A-1001985394",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000825910",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtles-santas-helpers-in-a-half-shell/-/A-1000842898",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820562",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-collegiate/-/A-1000785043",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-sketch/-/A-1000787229",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-collegiate-graphic-short-sleeve-fleece-dress/-/A-1002357512",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788681",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/captain-underpants-mighty-tighty-whities/-/A-1001646601",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803112",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/karma-s-world-swag-is-swag-graphic-short-sleeve-fleece-dress/-/A-1003971872",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-scary-cute/-/A-1000857558",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781148",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-and-gerald-skateboard-graphic-short-sleeve-fleece-dress/-/A-1001730727",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-tricks-and-pup-treats/-/A-1000852444",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-aang-crest-graphic-short-sleeve-fleece-dress/-/A-1001733379",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-b-day-b-b-besties-celebrate-birthdays-graphic-short-sleeve-fleece-dress/-/A-1001985342",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-my-presence-is-your-present/-/A-1000841632",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-koraidon-collegiate-graphic-short-sleeve-fleece-dress/-/A-1002357594",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788667",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-it-takes-alotl-luck-graphic-short-sleeve-fleece-dress/-/A-1001728956",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-summer-skidoo/-/A-1000856871",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788647",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-kamp-koral-kamp-koral-logo-badge/-/A-1000787380",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820695",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-pre-k-out-of-this-world-cat-in-the-hat-graphic-short-sleeve-fleece-dress/-/A-1003971823",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-koraidon-legend-graphic-short-sleeve-fleece-dress/-/A-1002357579",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-have-a-nice-day/-/A-1000857694",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-ho-ho-no/-/A-1000840231",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-sways-spray-paint-graphic-short-sleeve-fleece-dress/-/A-1001993837",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-bricks/-/A-1000786783",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-keep-cool-graphic-short-sleeve-fleece-dress/-/A-1000752494",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-winston-graphic-short-sleeve-fleece-dress/-/A-1003928995",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000782158",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-pawsome-explorers-graphic-short-sleeve-fleece-dress/-/A-1001734683",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-unrecognized-talent/-/A-1000785238",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/karma-s-world-better-together-graphic-short-sleeve-fleece-dress/-/A-1003972141",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817843",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-kindergarten-is-out-of-this-world-graphic-short-sleeve-fleece-dress/-/A-1001735531",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-garfield-stickers/-/A-1000790042",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-fa-la-la-la-fierce-graphic-short-sleeve-fleece-dress/-/A-1001978301",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-squirtle-charmander-and-bulbasaur-graphic-short-sleeve-fleece-dress/-/A-1002396649",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000794771",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815700",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-can-t-have-rainbow-without-blue-graphic-short-sleeve-fleece-dress/-/A-1001734917",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-groovy-snoopy-graphic-short-sleeve-fleece-dress/-/A-1001739050",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791779",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000809982",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-kamp-koral-kamp-koral-group/-/A-1000787347",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-woodstock-snowfall-graphic-short-sleeve-fleece-dress/-/A-1001726317",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-family-is-everything/-/A-1000789956",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-never-trust-smiling-cat/-/A-1000762590",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-north-pole-or-bust/-/A-1000841579",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-mommy-s-perfect-pumpkin/-/A-1000760584",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795430",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-see-the-evolution-graphic-short-sleeve-fleece-dress/-/A-1002396906",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-elements-graphic-short-sleeve-fleece-dress/-/A-1002357498",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-head-over-paws-for-you/-/A-1000832928",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-the-journey-start-here-graphic-short-sleeve-fleece-dress/-/A-1002395786",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-patrick-trick-or-treating/-/A-1000810513",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-trick-or-treat-graphic-short-sleeve-fleece-dress/-/A-1002355223",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820679",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791771",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803169",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-red-white-turtle-power/-/A-1000857581",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795542",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-thunderbolt-graphic-short-sleeve-fleece-dress/-/A-1002395125",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795309",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803175",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-beagle-scout-california-graphic-short-sleeve-fleece-dress/-/A-1001739038",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-have-a-nice-day/-/A-1000857640",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-who-needs-luck-with-this-charm/-/A-1000827640",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-squad-preschool/-/A-1000787240",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-i-got-it-graphic-short-sleeve-fleece-dress/-/A-1001736167",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-chillin-with-friends-graphic-short-sleeve-fleece-dress/-/A-1000799095",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hey-boo/-/A-1000850763",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-logo-shamrock-pattern-graphic-short-sleeve-fleece-dress/-/A-1002108006",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-more-bored-than-you/-/A-1000857630",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-retro-group-april/-/A-1000786749",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-garf-and-odie-logo/-/A-1000786247",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-is-it-recess-yet-graphic-short-sleeve-fleece-dress/-/A-1001739199",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-rise-but-won-t-shine/-/A-1000762133",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-i-m-just-here-for-the-snacks-graphic-short-sleeve-fleece-dress/-/A-1003972111",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-let-s-party-graphic-short-sleeve-fleece-dress/-/A-1002090784",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-keep-on-graphic-short-sleeve-fleece-dress/-/A-1001738991",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-i-know-a-thing-or-two-school-graphic-short-sleeve-fleece-dress/-/A-1003971799",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791868",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/karma-s-world-winston-karma-alex-graphic-short-sleeve-fleece-dress/-/A-1003972107",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-lucky-to-have-great-friends-graphic-short-sleeve-fleece-dress/-/A-1002108034",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791796",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-ha-ha-graffiti-graphic-short-sleeve-fleece-dress/-/A-1001724458",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-want-you-to-have-a-happy-fourth/-/A-1000818921",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-but-first-lasagna/-/A-1000764039",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788511",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-short-sleeve-fleece-dress/-/A-1002068740",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-b-b-nation-graphic-short-sleeve-fleece-dress/-/A-1001985702",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-group-graphic-short-sleeve-fleece-dress/-/A-1002357502",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-patchwork-doghouse-graphic-short-sleeve-fleece-dress/-/A-1001724430",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-100-days-flew-away/-/A-1000787190",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-peeking-out/-/A-1000762438",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pokedex-pikachu-graphic-short-sleeve-fleece-dress/-/A-1002396533",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803261",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-daddy-s-pawsome-camping-buddy-graphic-short-sleeve-fleece-dress/-/A-1001738911",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-try-to-keep-up/-/A-1000786156",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-the-grinch-never-not-grinchy-wreath/-/A-1000780410",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-sled-graphic-short-sleeve-fleece-dress/-/A-1002352217",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791877",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-americana/-/A-1000817024",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-this-is-my-camping-sweatshirt-graphic-short-sleeve-fleece-dress/-/A-1001734711",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-deuce-gorgon-snake-venom-graphic-short-sleeve-fleece-dress/-/A-1002008854",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-clawsome-fangtastic-creeperific-zapptacular-graphic-short-sleeve-fleece-dress/-/A-1001972895",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-groovy-beach-babe-graphic-short-sleeve-fleece-dress/-/A-1002004800",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-stoop-kid-graphic-short-sleeve-fleece-dress/-/A-1001729662",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-kickin-it/-/A-1000786526",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791867",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-natural-wonder/-/A-1000784750",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/nickelodeon-mother-s-day-graphic-short-sleeve-fleece-dress/-/A-1000818341",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-pre-k-is-out-of-this-world-graphic-short-sleeve-fleece-dress/-/A-1001735423",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-short-sleeve-fleece-dress/-/A-1002095113",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-raphael-going-in-loud/-/A-1000827125",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-loves-earth-graphic-short-sleeve-fleece-dress/-/A-1001727388",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-seasons-greetings-graphic-short-sleeve-fleece-dress/-/A-1002352146",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788697",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-distressed-arnold-graphic-short-sleeve-fleece-dress/-/A-1001730226",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/captain-underpants-the-hypno-ring-graphic-short-sleeve-fleece-dress/-/A-1001644691",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-creeping-it-real/-/A-1000761082",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-3rd-grade-squad-thing-1-and-thing-2-graphic-short-sleeve-fleece-dress/-/A-1003971807",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-here-for-the-shenanigans-graphic-short-sleeve-fleece-dress/-/A-1001599335",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-sleigh-what-graphic-short-sleeve-fleece-dress/-/A-1001978204",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-team-player-graphic-short-sleeve-fleece-dress/-/A-1002396016",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtles-reindeer-turtles/-/A-1000843146",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-american-thing-one/-/A-1000773772",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-don-t-follow-me-art-graphic-short-sleeve-fleece-dress/-/A-1001739066",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-pretend-i-m-listening/-/A-1000762403",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819195",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790749",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-clover-power-graphic-short-sleeve-fleece-dress/-/A-1002108244",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-lol-hos-palm-trees-graphic-short-sleeve-fleece-dress/-/A-1001974447",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-oh-so-fierce-graphic-short-sleeve-fleece-dress/-/A-1001985407",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-woodstock-vampire-graphic-short-sleeve-fleece-dress/-/A-1001728253",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-info-chart-graphic-short-sleeve-fleece-dress/-/A-1002396954",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-daddy-daughter-day-graphic-short-sleeve-fleece-dress/-/A-1003928981",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-cozy-gaming-graphic-short-sleeve-fleece-dress/-/A-1003238373",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-skating-pattern-graphic-short-sleeve-fleece-dress/-/A-1001724506",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-electric-type-pikachu-graphic-short-sleeve-fleece-dress/-/A-1002385217",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-hello-first-grade-graphic-short-sleeve-fleece-dress/-/A-1003971362",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-what-is-today-yesterdays-tomorrow/-/A-1000785120",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-let-me-be-frank/-/A-1000857614",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-aloha-from-bikini-bottom/-/A-1000785094",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795437",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-genuine-attitude/-/A-1000763777",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-lightning-graphic-short-sleeve-fleece-dress/-/A-1002357605",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791786",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-always-blue-s-clues-graphic-short-sleeve-fleece-dress/-/A-1000753944",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819801",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-play-day-graphic-short-sleeve-fleece-dress/-/A-1000753994",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-jiggypuff-sing-along-graphic-short-sleeve-fleece-dress/-/A-1002395981",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-eek/-/A-1000857599",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-lucky-to-have-ya-graphic-short-sleeve-fleece-dress/-/A-1001739015",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788648",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-happy-thanksgiving-icons-graphic-short-sleeve-fleece-dress/-/A-1001727017",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-outlined-shamrock-graphic-short-sleeve-fleece-dress/-/A-1001728908",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-best-witches/-/A-1000851028",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817637",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-i-m-so-sweet-graphic-short-sleeve-fleece-dress/-/A-1002396069",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-creeperific-graphic-short-sleeve-fleece-dress/-/A-1002008083",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-pool-party-vibes-graphic-short-sleeve-fleece-dress/-/A-1001985432",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hoppy-easter-icons/-/A-1000850025",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-explore-with-us-graphic-short-sleeve-fleece-dress/-/A-1001984552",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-the-grinch-here-for-the-roast-beast/-/A-1000781580",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-usa-stripes-graphic-short-sleeve-fleece-dress/-/A-1002104492",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-americana/-/A-1000816901",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-valentine-s-i-love-you-graphic-short-sleeve-fleece-dress/-/A-1001729979",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-shenanigans-with-my-gnomies-graphic-short-sleeve-fleece-dress/-/A-1001729011",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-my-boo-crew-racecar-graphic-short-sleeve-fleece-dress/-/A-1001972818",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-game-on-1st-grade-graphic-short-sleeve-fleece-dress/-/A-1001735608",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-grunge/-/A-1000789786",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-133-graphic-short-sleeve-fleece-dress/-/A-1002380742",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000794710",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bubble-guppies-bubble-puppy-graphic-short-sleeve-fleece-dress/-/A-1000758453",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/little-tikes-teamwork-makes-the-dream-work-graphic-short-sleeve-fleece-dress/-/A-1001986887",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-snowflakes-graphic-short-sleeve-fleece-dress/-/A-1002352230",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-aang-airbender/-/A-1000764829",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-short-sleeve-fleece-dress/-/A-1001985259",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-lucky-snoopy-graphic-short-sleeve-fleece-dress/-/A-1001725468",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fall-graphic-short-sleeve-fleece-dress/-/A-1004529183",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815678",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795599",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-feelin-groovy-snoopy-and-woodstock-graphic-short-sleeve-fleece-dress/-/A-1001724392",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788503",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-utah-graphic-short-sleeve-fleece-dress/-/A-1001739073",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-brave-explorers-graphic-short-sleeve-fleece-dress/-/A-1001739130",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790603",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-japanese-graphic-short-sleeve-fleece-dress/-/A-1002386322",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-s-beach-day-graphic-short-sleeve-fleece-dress/-/A-1001739052",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791806",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-born-to-grow/-/A-1000789691",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-rescue-myself-graphic-short-sleeve-fleece-dress/-/A-1003238325",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-we-re-all-stars-graphic-short-sleeve-fleece-dress/-/A-1003929016",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817749",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-lil-ducky/-/A-1001598790",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795340",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-magenta-blue-graphic-short-sleeve-fleece-dress/-/A-1000752633",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-puffer-cozy-vibes-graphic-short-sleeve-fleece-dress/-/A-1001727668",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-sunshine-and-rainbows-graphic-short-sleeve-fleece-dress/-/A-1001735026",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-tennis/-/A-1000784357",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818114",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-donatello-raphael-leonardo-michelangelo/-/A-1000827148",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788509",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-howl-eek/-/A-1000857657",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795342",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/if-movie-blossom-ballet-graphic-short-sleeve-fleece-dress/-/A-1001970446",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-and-friends-graphic-short-sleeve-fleece-dress/-/A-1001731698",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-run-the-world-graphic-short-sleeve-fleece-dress/-/A-1002073995",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-fall-is-my-favorite-graphic-short-sleeve-fleece-dress/-/A-1001739098",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-play-time-graphic-short-sleeve-fleece-dress/-/A-1000752196",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-raph/-/A-1000786794",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-second-grade-graphic-short-sleeve-fleece-dress/-/A-1003971948",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-dream-explore-repeat-graphic-short-sleeve-fleece-dress/-/A-1001734864",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-i-vant-candy/-/A-1000857610",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795305",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-coney-island-graphic-short-sleeve-fleece-dress/-/A-1001974377",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-ignoring-you/-/A-1000763297",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-pool-water-reflection-graphic-short-sleeve-fleece-dress/-/A-1002063810",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-life-is-better-under-the-star-graphic-short-sleeve-fleece-dress/-/A-1001739113",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-slowpoke-taking-it-slow-graphic-short-sleeve-fleece-dress/-/A-1002397018",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-and-rubble-beach/-/A-1000786550",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-lucky-dogs/-/A-1000827355",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791850",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-university/-/A-1000784420",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-trick-or-treat/-/A-1000857503",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-draculaura-is-fangtastic-graphic-short-sleeve-fleece-dress/-/A-1001973025",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-too-rad-to-be-sad-graphic-short-sleeve-fleece-dress/-/A-1000799113",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818208",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-funky-flower-dude-graphic-short-sleeve-fleece-dress/-/A-1001984354",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-i-am-powerful-graphic-short-sleeve-fleece-dress/-/A-1002070649",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-individually-us-graphic-short-sleeve-fleece-dress/-/A-1001974404",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-resting-cat-face/-/A-1000762174",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-spectacolar-graphic-short-sleeve-fleece-dress/-/A-1003971330",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-garf-pixel-square/-/A-1000786151",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818052",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-earth-day-globe-graphic-short-sleeve-fleece-dress/-/A-1001727424",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-s-clues-me-graphic-short-sleeve-fleece-dress/-/A-1000753875",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-s-wave-ride-graphic-short-sleeve-fleece-dress/-/A-1001739032",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-pika-scared-graphic-short-sleeve-fleece-dress/-/A-1002377197",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-whatever/-/A-1000857607",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-no-tricks-just-treats/-/A-1000850746",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/little-tikes-fast-food-towing-graphic-short-sleeve-fleece-dress/-/A-1001987149",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-logo-jack-o-lantern-graphic-short-sleeve-fleece-dress/-/A-1001984623",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-jellyfish-ramune-graphic-short-sleeve-fleece-dress/-/A-1004189167",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795515",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-hello-second-grade-graphic-short-sleeve-fleece-dress/-/A-1003971376",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-lyrical-star-airbrush-style-graphic-short-sleeve-fleece-dress/-/A-1003928967",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/karma-s-world-number-one-on-the-block-graphic-short-sleeve-fleece-dress/-/A-1003972132",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-smart-cute-graphic-short-sleeve-fleece-dress/-/A-1000751507",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-logo-vertical/-/A-1000789461",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790716",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-spicy-babe-graphic-short-sleeve-fleece-dress/-/A-1001989803",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hoppy-easter/-/A-1000849888",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788506",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-bikini-bottom-egg-hunting-champ/-/A-1000850257",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-trio-squad-graphic-short-sleeve-fleece-dress/-/A-1001733047",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-clues-paw-logo-graphic-short-sleeve-fleece-dress/-/A-1001735001",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795607",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-game-on-pre-k-graphic-short-sleeve-fleece-dress/-/A-1001735437",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-mikey/-/A-1000786690",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/karma-s-world-step-into-the-spotlight-karma-graphic-short-sleeve-fleece-dress/-/A-1003972097",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803064",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-do-what-makes-you-awesome-graphic-short-sleeve-fleece-dress/-/A-1002118630",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-basketball/-/A-1000784421",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-first-grade-just-got-cooler-graphic-short-sleeve-fleece-dress/-/A-1001739193",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-plaid-badge-graphic-short-sleeve-fleece-dress/-/A-1002396415",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815600",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-stacked-barbie-vday-graphic-short-sleeve-fleece-dress/-/A-1002058289",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820662",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-let-s-be-kind-to-plants-graphic-short-sleeve-fleece-dress/-/A-1002004674",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-sweet-spicy-babes-graphic-short-sleeve-fleece-dress/-/A-1001989920",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-shine-like-fireworks/-/A-1000817173",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-starter-pok-mon-logo-graphic-short-sleeve-fleece-dress/-/A-1002396287",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-boomerang-guy-graphic-short-sleeve-fleece-dress/-/A-1001733263",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/nickelodeon-mother-s-day-graphic-short-sleeve-fleece-dress/-/A-1000818358",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781165",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-cute-clued-in-graphic-short-sleeve-fleece-dress/-/A-1000753459",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-clover-dance-graphic-short-sleeve-fleece-dress/-/A-1001725478",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pokeball-trainer-graphic-short-sleeve-fleece-dress/-/A-1002386368",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-heart-earth-graphic-short-sleeve-fleece-dress/-/A-1001727410",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-let-s-par-tea-graphic-short-sleeve-fleece-dress/-/A-1001985553",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-cute-appa-yip-yip-graphic-short-sleeve-fleece-dress/-/A-1001733259",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtles-get-into-the-ninja-spirit/-/A-1000843244",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-sunshine-on-my-mind-graphic-short-sleeve-fleece-dress/-/A-1000796533",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790662",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-1st-grade-rocks-graphic-short-sleeve-fleece-dress/-/A-1001739202",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000810020",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790764",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-shine-on/-/A-1000781614",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-girl-squad-pop-art-graphic-short-sleeve-fleece-dress/-/A-1001977079",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-short-sleeve-fleece-dress/-/A-1001977632",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-birthday-qt-graphic-short-sleeve-fleece-dress/-/A-1001985519",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-frosty-friends/-/A-1000839942",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795571",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-nature-patrol-graphic-short-sleeve-fleece-dress/-/A-1001734696",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-friends/-/A-1000763870",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-start-my-diet-tomorrow/-/A-1000789633",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818042",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-under-the-water-lagoona-blue-graphic-short-sleeve-fleece-dress/-/A-1001972850",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-school-students-graphic-short-sleeve-fleece-dress/-/A-1002008694",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-team-paw-rubble/-/A-1000809604",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, Sweatshirt Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/little-tikes-find-the-way-graphic-short-sleeve-fleece-dress/-/A-1001987085",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791940",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "Sweater Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-everest-sketch-fit-flair-cap-sleeve-dress/-/A-1000470483",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-squad-kindergarten/-/A-1000787322",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-staying-cool/-/A-1000786443",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-squad-second-grade/-/A-1000787233",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-chase-sketch/-/A-1000787244",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-team-shamrock/-/A-1000828459",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-outdoor-vibes-graphic-short-sleeve-fleece-dress/-/A-1001734619",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-mighty-movie-character-group/-/A-1000807372",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-life-is-an-adventure-graphic-short-sleeve-fleece-dress/-/A-1001734785",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-ultimate-explorer-graphic-short-sleeve-fleece-dress/-/A-1001734630",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-we-re-on-it-graphic-short-sleeve-fleece-dress/-/A-1001739172",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-chase-lightning/-/A-1000807586",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-lets-play/-/A-1000786525",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-this-is-my-camping-sweatshirt-fit-flair-cap-sleeve-dress/-/A-1000871119",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Sweatshirt Dresses, T-Shirt Dresses",
      filters: {
        type: "Sweatshirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-blossoms/-/A-82663203",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-navy-floral/-/A-82662741",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817335",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817328",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-botanical-10-years/-/A-82658321",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/luvable-friends-touched-by-nature-long-sleeve-dresses-2pk-set/-/A-1004812968",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-lemons/-/A-82658535",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-navy-floral/-/A-82662806",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-garden-floral/-/A-82663361",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-long-sleeve-twirl-dress/-/A-89942784",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/luvable-friends-touched-by-nature-long-sleeve-dresses-2pk/-/A-1004787822",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-heart/-/A-82663481",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-butterflies/-/A-82658603",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-girls-casual-long-sleeved-cats-dress/-/A-1002865923",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/luvable-friends-touched-by-nature-short-sleeve-dresses-2pk/-/A-1004788387",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-poppy/-/A-82663379",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-butterflies/-/A-82658380",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-big-girls-tank-dress-blue-10-12/-/A-1002811078",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-hello-first-grade-fit-flair-cap-sleeve-dress/-/A-1003960058",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-botanical/-/A-82658641",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-hello-kindergarten-fit-flair-cap-sleeve-dress/-/A-1003959963",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-summer-time-dream-fit-flair-cap-sleeve-dress/-/A-1002059435",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-trolls-turn-it-up-poppy-fit-flair-cap-sleeve-dress/-/A-1000057846",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-rainbow-high-character-group-fit-flair-cap-sleeve-dress/-/A-1001995228",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-buffalo-plaid/-/A-82662953",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-winter-dolls-fit-flair-cap-sleeve-dress/-/A-1001978035",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-girls-organic-cotton-dresses-woodland/-/A-89205329",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/luvable-friends-hudson-baby-long-sleeve-dresses-2pk/-/A-1004788526",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-the-snuggle-is-real-pikachu-and-sylveon-fit-flair-cap-sleeve-dress/-/A-1002349825",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000601191",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-poppy/-/A-82657969",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-how-to-train-your-dragon-dragons-fit-flair-cap-sleeve-dress/-/A-1003892254",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-garden-floral/-/A-82658016",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000661612",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-monster-high-group-circle-fit-flair-cap-sleeve-dress/-/A-93675430",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-toy-doll-lineup-fit-flair-cap-sleeve-dress/-/A-1001995436",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-pink-daisy-pattern-logo-fit-flair-cap-sleeve-dress/-/A-1002108018",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-cowabunga-fit-flair-cap-sleeve-dress/-/A-1000451722",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-spring-bouquet-pattern-logo-fit-flair-cap-sleeve-dress/-/A-1002107381",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876712",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000871458",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-trolls-poppy-stacked-name-fit-flair-cap-sleeve-dress/-/A-94201239",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-i-live-for-weekends-fit-flair-cap-sleeve-dress/-/A-1000472660",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-chase-skye-marshall-totally-pawsome-fit-flair-cap-sleeve-dress/-/A-1000447715",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-when-in-doubt-take-a-nap-fit-flair-cap-sleeve-dress/-/A-93056390",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-cat-in-the-hat-school-is-cool-fit-flair-cap-sleeve-dress/-/A-1003964147",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-long-sleeve-t-shirt-dress/-/A-1004010333",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817455",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-lucky-shamrocks-filled-fit-flair-cap-sleeve-dress/-/A-1001603214",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-pawsitive-vibes-skye-marshall-chase-rubble-fit-flair-cap-sleeve-dress/-/A-1000447794",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-puppy-luv-fit-flair-cap-sleeve-dress/-/A-1000832877",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-k-is-for-kindergarten-fit-flair-cap-sleeve-dress/-/A-1003965872",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-character-grid-fit-flair-cap-sleeve-dress/-/A-1000451843",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-monster-high-clawdeen-wolf-draculaura-frankie-stein-polaroids-fit-flair-cap-sleeve-dress/-/A-93675432",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-monster-high-character-grid-fit-flair-cap-sleeve-dress/-/A-1002010138",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-leo-and-brothers-turtle-power-fit-flair-cap-sleeve-dress/-/A-1000479116",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-only-here-for-the-eats-fit-flair-cap-sleeve-dress/-/A-1000874974",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817351",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-botanical-8-years/-/A-82658320",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000871527",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000875998",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000637119",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000791441",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000661517",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-trolls-i-love-pop-poppy-fit-flair-cap-sleeve-dress/-/A-1000874902",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-prone-to-shenanigans-and-malarkey-fit-flair-cap-sleeve-dress/-/A-1000827558",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-chase-sketch-fit-flair-cap-sleeve-dress/-/A-1000470517",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-dress-to-impress-yourself-fit-flair-cap-sleeve-dress/-/A-1000874925",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000661609",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-basketball-fit-flair-cap-sleeve-dress/-/A-1000460573",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-adventure-begin-fit-flair-cap-sleeve-dress/-/A-1000447557",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000815556",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-momo-cute-fit-flair-cap-sleeve-dress/-/A-1000870901",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-sketch-fit-flair-cap-sleeve-dress/-/A-1000470427",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817397",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-ribbed-dress/-/A-1004939352",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-lace-short-sleeve-dress/-/A-1004938910",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-long-sleeve-drop-waist-dress/-/A-1004010335",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-raphael-going-in-loud-fit-flair-cap-sleeve-dress/-/A-1000827076",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-chillin-like-a-villain-fit-flair-cap-sleeve-dress/-/A-1000875945",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-tracker-paw-patrol-fit-flair-cap-sleeve-dress/-/A-1000470446",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-charmed-the-power-of-three-will-set-you-free-fit-flair-cap-sleeve-dress/-/A-1001994354",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-icon-cluster-fit-flair-cap-sleeve-dress/-/A-1000875939",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-the-beatles-fit-flair-cap-sleeve-dress/-/A-1002632184",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-s-ski-resort-fit-flair-cap-sleeve-dress/-/A-94183113",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-zuko-calming-tea-fit-flair-cap-sleeve-dress/-/A-1000870866",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-panels-fit-flair-cap-sleeve-dress/-/A-1002395626",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-little-tikes-imagination-is-all-it-takes-fit-flair-cap-sleeve-dress/-/A-1001989345",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-4th-of-july-fit-flair-cap-sleeve-dress/-/A-1001985067",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-woodstock-beach-buddies-surfing-fit-flair-cap-sleeve-dress/-/A-93036491",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-drip-drop-painting-girls-fit-flair-cap-sleeve-dress/-/A-1001988973",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-third-grade-out-of-this-world-fit-flair-cap-sleeve-dress/-/A-1003963616",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-the-snuggle-is-real-pikachu-and-piplup-fit-flair-cap-sleeve-dress/-/A-1002350170",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000802825",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-oh-places-youll-go-when-you-read-fit-flair-cap-sleeve-dress/-/A-1003965884",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-scandinavian-bunny-with-flowers-fit-flair-cap-sleeve-dress/-/A-1002611313",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-learn-alotl-in-1st-grade-fit-flair-cap-sleeve-dress/-/A-1003970529",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-irish-i-was-a-unicorn-fit-flair-cap-sleeve-dress/-/A-1001602959",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-dream-explore-repeat-fit-flair-cap-sleeve-dress/-/A-1000871247",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-easter-scene-fit-flair-cap-sleeve-dress/-/A-1002610325",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817409",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-soar-fit-flair-cap-sleeve-dress/-/A-1000871139",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-trolls-show-up-glow-up-poppy-fit-flair-cap-sleeve-dress/-/A-1000874888",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000637586",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000653972",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-garfield-movie-vertical-fit-flair-cap-sleeve-dress/-/A-1000474219",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-dance-vibes-poppy-branch-fit-flair-cap-sleeve-dress/-/A-94201808",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-lol-hi-bae-fit-flair-cap-sleeve-dress/-/A-1001998433",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-leo-and-brothers-tmnt-fit-flair-cap-sleeve-dress/-/A-1000479109",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-american-thing-one-fit-flair-cap-sleeve-dress/-/A-1000065414",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-trolls-feel-the-vibes-poppy-fit-flair-cap-sleeve-dress/-/A-1000874909",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-rainbow-sparkle-box-fit-flair-cap-sleeve-dress/-/A-1001995153",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-trolls-music-obsessed-poppy-and-branch-fit-flair-cap-sleeve-dress/-/A-1000874916",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-celebr8-fit-flair-cap-sleeve-dress/-/A-1001989706",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-grid-fit-flair-cap-sleeve-dress/-/A-1002397028",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-winter-dolls-fit-flair-cap-sleeve-dress/-/A-1001977963",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-little-tikes-summer-fun-fit-flair-cap-sleeve-dress/-/A-1001989199",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-turtles-character-grid-fit-flair-cap-sleeve-dress/-/A-1000875959",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-monster-high-monster-friends-forever-fit-flair-cap-sleeve-dress/-/A-1001976559",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-rainbow-checkered-frame-fit-flair-cap-sleeve-dress/-/A-1001995838",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-kindergarten-squad-thing-1-and-thing-2-fit-flair-cap-sleeve-dress/-/A-1003965209",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girl-s-minnie-mouse-pink-bow-allover-print-dress/-/A-92268842",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-ballerina-let-s-dance-fit-flair-cap-sleeve-dress/-/A-93305035",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-let-s-roll-marshall-fit-flair-cap-sleeve-dress/-/A-1000876329",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-woodstock-beach-heart-fit-flair-cap-sleeve-dress/-/A-93036494",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000643157",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-it-takes-alotl-luck-fit-flair-cap-sleeve-dress/-/A-1001602490",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-retro-floral-logo-fit-flair-cap-sleeve-dress/-/A-93305008",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-magically-unpinchable-unicorn-fit-flair-cap-sleeve-dress/-/A-1001602036",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000871409",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-lucky-lil-ducky-fit-flair-cap-sleeve-dress/-/A-1001598800",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-monster-high-ghoul-squad-fit-flair-cap-sleeve-dress/-/A-1001976554",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-retro-group-april-fit-flair-cap-sleeve-dress/-/A-1000468961",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000606601",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-magical-gamer-girl-fit-flair-cap-sleeve-dress/-/A-1003238276",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-select-your-turtle-video-game-fit-flair-cap-sleeve-dress/-/A-1000875917",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-woodstock-small-but-trying-my-best-fit-flair-cap-sleeve-dress/-/A-93056381",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-group-logo-brick-wall-fit-flair-cap-sleeve-dress/-/A-1000468773",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-rubble-beach-fit-flair-cap-sleeve-dress/-/A-1000467115",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-girl-pup-power-fit-flair-cap-sleeve-dress/-/A-1000780937",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-usa-things-fit-flair-cap-sleeve-dress/-/A-1000065432",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607310",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-the-beatles-fit-flair-cap-sleeve-dress/-/A-1002632207",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-i-m-ready-fit-flair-cap-sleeve-dress/-/A-1000451823",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-hello-bello-minion-fit-flair-cap-sleeve-dress/-/A-1000870458",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-summer-is-for-camping-fit-flair-cap-sleeve-dress/-/A-1000871153",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-cat-in-the-hat-waving-banners-of-red-white-and-blue-fit-flair-cap-sleeve-dress/-/A-1000065356",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-retro-style-dolls-fit-flair-cap-sleeve-dress/-/A-1001989271",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-ballerina-pose-fit-flair-cap-sleeve-dress/-/A-93305014",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-american-thing-two-fit-flair-cap-sleeve-dress/-/A-1000065483",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-rubble-sketch-fit-flair-cap-sleeve-dress/-/A-1000470475",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000802817",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000836405",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-valentine-s-day-be-my-meowentine-fit-flair-cap-sleeve-dress/-/A-1001598310",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-let-s-roll-chase-fit-flair-cap-sleeve-dress/-/A-1000876363",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817407",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-original-i-am-green-eggs-and-ham-fit-flair-cap-sleeve-dress/-/A-1000871856",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-lucky-vibes-fit-flair-cap-sleeve-dress/-/A-1001598589",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-minions-on-tour-fit-flair-cap-sleeve-dress/-/A-1000874960",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-ready-to-rock-pre-k-fit-flair-cap-sleeve-dress/-/A-1003968021",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-retro-rainbow-skater-fit-flair-cap-sleeve-dress/-/A-1000874946",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000802859",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-pizza-power-fit-flair-cap-sleeve-dress/-/A-1000451687",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skys-the-limit-fit-flair-cap-sleeve-dress/-/A-1000477000",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-valentine-s-day-cupid-crew-fit-flair-cap-sleeve-dress/-/A-1001598245",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-chase-skye-rubble-marshall-everest-besties-fit-flair-cap-sleeve-dress/-/A-1000780945",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-leprechaun-truck-delivering-luck-fit-flair-cap-sleeve-dress/-/A-1001601657",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-beyoutiful-fit-flair-cap-sleeve-dress/-/A-1002082007",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-support-girls-fit-flair-cap-sleeve-dress/-/A-1002061139",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817468",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-monster-high-group-badge-fit-flair-cap-sleeve-dress/-/A-1001976512",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-dance-party-fit-flair-cap-sleeve-dress/-/A-1001990052",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000872352",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-2nd-grade-squad-fit-flair-cap-sleeve-dress/-/A-1000463229",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-logo-character-group-fit-flair-cap-sleeve-dress/-/A-1000468988",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-turn-it-up-fit-flair-cap-sleeve-dress/-/A-1001995303",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-red-white-and-blue-fish-fit-flair-cap-sleeve-dress/-/A-1000871297",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-peeking-out-fit-flair-cap-sleeve-dress/-/A-1000870599",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-love-earth-fit-flair-cap-sleeve-dress/-/A-1000877034",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-rescue-myself-fit-flair-cap-sleeve-dress/-/A-1003238417",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-cell-phone-chat-girls-fit-flair-cap-sleeve-dress/-/A-1001993447",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-everest-and-skye-besties-be-yourself-fit-flair-cap-sleeve-dress/-/A-1000447809",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000681017",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607583",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000818969",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000643160",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-valentine-s-day-love-you-like-pizza-fit-flair-cap-sleeve-dress/-/A-1001598741",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-marshall-sketch-fit-flair-cap-sleeve-dress/-/A-1000470109",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-ultimate-explorer-fit-flair-cap-sleeve-dress/-/A-1000871085",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000661290",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-u-glow-girl-fit-flair-cap-sleeve-dress/-/A-1001989063",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000877403",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000815506",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-birthday-qt-fit-flair-cap-sleeve-dress/-/A-1001989842",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817375",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-marshall-chase-everest-skye-anything-is-paw-sible-fit-flair-cap-sleeve-dress/-/A-1000780952",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-trolls-let-me-hear-you-shout-poppy-and-branch-fit-flair-cap-sleeve-dress/-/A-1000874895",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000826003",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000820315",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-lightning-fit-flair-cap-sleeve-dress/-/A-1000807073",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-winter-dolls-fit-flair-cap-sleeve-dress/-/A-1001977969",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-garfields-farm-group-fit-flair-cap-sleeve-dress/-/A-1000472522",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-sketch-character-group-fit-flair-cap-sleeve-dress/-/A-1000470430",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-rainbow-alt-girl-fit-flair-cap-sleeve-dress/-/A-1001998141",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000802829",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rugrats-natural-wonder-fit-flair-cap-sleeve-dress/-/A-1000461109",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-earth-day-yay-fit-flair-cap-sleeve-dress/-/A-1000877011",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-nations-symbols-fit-flair-cap-sleeve-dress/-/A-1000426201",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000820268",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-blue-clues-crew-fit-flair-cap-sleeve-dress/-/A-1000871380",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-let-s-get-started-fit-flair-cap-sleeve-dress/-/A-1002395744",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-i-woke-up-this-lucky-fit-flair-cap-sleeve-dress/-/A-1001619872",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bellabu-bear-toddler-winterberry-red-bamboo-girls-long-sleeve-dress/-/A-1005079105",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-high-school-dolls-fit-flair-cap-sleeve-dress/-/A-1002049566",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/luvable-friends-touched-by-nature-dress-and-blouse-2pc/-/A-1004788025",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/luvable-friends-hudson-baby-short-sleeve-dresses-2pk/-/A-1004787197",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-mama-s-lucky-charm-fit-flair-cap-sleeve-dress/-/A-1001602048",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791921",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-learn-alotl-in-kindergarten-graphic-short-sleeve-fleece-dress/-/A-1003972083",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fall-graphic-short-sleeve-fleece-dress/-/A-1004529144",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-silhouette-pattern-graphic-short-sleeve-fleece-dress/-/A-1001724468",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-dinosaur-eatting-rainbow-fit-flair-cap-sleeve-dress/-/A-1001600159",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-electric-dreams-graphic-short-sleeve-fleece-dress/-/A-1001999393",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-king-cake-beads-crawfish-jazz-graphic-short-sleeve-fleece-dress/-/A-1004189160",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-team-pikachu-graphic-short-sleeve-fleece-dress/-/A-1002396027",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-pumpkin-graphic-short-sleeve-fleece-dress/-/A-1002377147",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-rad-little-lad-fit-flair-cap-sleeve-dress/-/A-1001601270",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-manga-graphic-short-sleeve-fleece-dress/-/A-1002396025",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-math-problem-bee-graphic-short-sleeve-fleece-dress/-/A-1003971308",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-s-hockey-camp-graphic-short-sleeve-fleece-dress/-/A-1001738897",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-celebrate-family-graphic-short-sleeve-fleece-dress/-/A-1004189172",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-ready-to-rock-first-grade-fit-flair-cap-sleeve-dress/-/A-1003967699",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-ready-to-rock-preschool-fit-flair-cap-sleeve-dress/-/A-1003967802",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795367",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-sheep-holding-a-shamrock-fit-flair-cap-sleeve-dress/-/A-1001601075",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-hello-second-grade-fit-flair-cap-sleeve-dress/-/A-1003959816",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-fierce-graffiti-graphic-short-sleeve-fleece-dress/-/A-1001996937",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-shamrock-cuties-fit-flair-cap-sleeve-dress/-/A-1001603017",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-cozy-gaming-fit-flair-cap-sleeve-dress/-/A-1003238387",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803124",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790756",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000782215",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-flakes-graphic-short-sleeve-fleece-dress/-/A-1002352289",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-lights-wreath-graphic-short-sleeve-fleece-dress/-/A-1002352334",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-kindergarten-rocks-graphic-short-sleeve-fleece-dress/-/A-1001739196",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-retrogamer-graphic-short-sleeve-fleece-dress/-/A-1002395294",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815670",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-i-train-my-brain-fit-flair-cap-sleeve-dress/-/A-1003960164",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818121",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-cottontail-candy-co-fit-flair-cap-sleeve-dress/-/A-1002611597",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781116",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815650",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-learn-alotl-in-kindergarten-fit-flair-cap-sleeve-dress/-/A-1003970521",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795614",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-outlined-shamrock-fit-flair-cap-sleeve-dress/-/A-1001601616",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-easter-eggs-come-from-where-fit-flair-cap-sleeve-dress/-/A-1002611484",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791791",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-short-sleeve-fleece-dress/-/A-1001977707",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803226",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-first-grade-graphic-short-sleeve-fleece-dress/-/A-1003971960",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-trick-or-treat-graphic-short-sleeve-fleece-dress/-/A-1002374868",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-problem-solver-fit-flair-cap-sleeve-dress/-/A-1003960329",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000782202",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815563",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000782280",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781175",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820752",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-squares-graphic-short-sleeve-fleece-dress/-/A-1002395852",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-fishing-lures-fit-flair-cap-sleeve-dress/-/A-1004185880",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-pattern-graphic-short-sleeve-fleece-dress/-/A-1002396617",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795727",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-rainbow-clouds-graphic-short-sleeve-fleece-dress/-/A-1001724443",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-woodstock-graphic-short-sleeve-fleece-dress/-/A-1001739107",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-boo-graphic-short-sleeve-fleece-dress/-/A-1001727031",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-ranger-snoopy-graphic-short-sleeve-fleece-dress/-/A-1001738901",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803104",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-grid-graphic-short-sleeve-fleece-dress/-/A-1002397022",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-pre-k-rocks-graphic-short-sleeve-fleece-dress/-/A-1001735326",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000810296",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818159",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-woodstock-house-sleigh-graphic-short-sleeve-fleece-dress/-/A-1001726149",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815720",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-valentine-s-day-i-loaf-you-bread-fit-flair-cap-sleeve-dress/-/A-1001599222",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-coolest-clover-in-the-patch-fit-flair-cap-sleeve-dress/-/A-1001600629",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-power-nap-graphic-short-sleeve-fleece-dress/-/A-1002395343",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788733",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-rainbow-paris-pearls-graphic-short-sleeve-fleece-dress/-/A-1001984856",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-lucky-to-not-be-in-trouble-fit-flair-cap-sleeve-dress/-/A-1001600575",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-tiny-hooligan-fit-flair-cap-sleeve-dress/-/A-1001600171",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-here-for-the-shenanigans-fit-flair-cap-sleeve-dress/-/A-1001599416",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-short-sleeve-fleece-dress/-/A-1001977732",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-ready-to-rock-third-grade-fit-flair-cap-sleeve-dress/-/A-1003967258",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-kindergarten-graphic-short-sleeve-fleece-dress/-/A-1003972005",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-preschooler-by-day-graphic-short-sleeve-fleece-dress/-/A-1001735580",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-camp-woodstock-graphic-short-sleeve-fleece-dress/-/A-1001738997",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000825918",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-s-beach-ball-graphic-short-sleeve-fleece-dress/-/A-1001727181",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000810077",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-spectacolar-fit-flair-cap-sleeve-dress/-/A-1003959427",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts-pre-k-just-got-cooler-graphic-short-sleeve-fleece-dress/-/A-1001739184",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-presents-graphic-short-sleeve-fleece-dress/-/A-1002352287",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-instant-message-celebrate-family-fit-flair-cap-sleeve-dress/-/A-1004185116",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-retro-style-fit-flair-cap-sleeve-dress/-/A-1001990011",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-retro-pok-mon-fit-flair-cap-sleeve-dress/-/A-1002395312",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-kiko-fit-flair-cap-sleeve-dress/-/A-1000871784",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-i-know-a-thing-or-two-school-fit-flair-cap-sleeve-dress/-/A-1003966380",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-fierce-doll-fit-flair-cap-sleeve-dress/-/A-1001997689",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-mini-mini-mini-fit-flair-cap-sleeve-dress/-/A-1002065243",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-electric-type-fit-flair-cap-sleeve-dress/-/A-1002396528",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-i-got-it-fit-flair-cap-sleeve-dress/-/A-1000871665",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000820354",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-swag-is-swag-fit-flair-cap-sleeve-dress/-/A-1003963014",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rocket-power-finish-line-fit-flair-cap-sleeve-dress/-/A-1000826626",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000826058",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-usa-turtles-fit-flair-cap-sleeve-dress/-/A-1000847986",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-easter-is-egg-fit-flair-cap-sleeve-dress/-/A-1000850208",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-grow-grrrl-fit-flair-cap-sleeve-dress/-/A-1001988679",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000628570",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607217",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-aang-avatar-state-fit-flair-cap-sleeve-dress/-/A-1000871000",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-sister-of-birthday-boy-fit-flair-cap-sleeve-dress/-/A-1002085663",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-blue-s-friend-forever-fit-flair-cap-sleeve-dress/-/A-1000871334",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607269",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-school-crest-fit-flair-cap-sleeve-dress/-/A-1001995403",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-smiling-on-the-inside-fit-flair-cap-sleeve-dress/-/A-1000870592",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-santiago-and-friends-logo-fit-flair-cap-sleeve-dress/-/A-1000871702",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000820257",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-patrick-trick-or-treating-fit-flair-cap-sleeve-dress/-/A-1000480230",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000791392",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-lil-pups-big-trucks-fit-flair-cap-sleeve-dress/-/A-1000876424",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-grow-for-it-fit-flair-cap-sleeve-dress/-/A-1000472629",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-vamos-piratas-fit-flair-cap-sleeve-dress/-/A-1000871689",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-ten-four-good-buddy-fit-flair-cap-sleeve-dress/-/A-1000876355",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-my-presence-is-your-present-fit-flair-cap-sleeve-dress/-/A-1000876302",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-girl-power-fit-flair-cap-sleeve-dress/-/A-1002112583",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000628483",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-press-start-grid-fit-flair-cap-sleeve-dress/-/A-1000838478",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-bulba-pattern-fit-flair-cap-sleeve-dress/-/A-1002353940",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-party-animal-fit-flair-cap-sleeve-dress/-/A-1000472743",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876719",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-let-s-roll-al-fit-flair-cap-sleeve-dress/-/A-1000876377",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607216",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mattel-frankie-stein-fit-flair-cap-sleeve-dress/-/A-1001973309",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-dancing-dolls-dance-fit-flair-cap-sleeve-dress/-/A-1001998104",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000606577",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000651666",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000791382",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-gradient-logo-fit-flair-cap-sleeve-dress/-/A-1001995126",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000835822",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rugrats-snowball-fight-fit-flair-cap-sleeve-dress/-/A-1000461378",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-city-scape-with-turtles-fit-flair-cap-sleeve-dress/-/A-1000838911",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-mon-squares-fit-flair-cap-sleeve-dress/-/A-1002395861",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000661302",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876604",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-lights-wreath-fit-flair-cap-sleeve-dress/-/A-1002353925",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-hugs-kisses-pup-treats-fit-flair-cap-sleeve-dress/-/A-1000832857",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000871443",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-california-fit-flair-cap-sleeve-dress/-/A-1001984832",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-i-don-t-do-perky-fit-flair-cap-sleeve-dress/-/A-1000421591",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-lucky-cat-fit-flair-cap-sleeve-dress/-/A-1000472420",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-blue-leaf-frame-fit-flair-cap-sleeve-dress/-/A-1001984886",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-psyduck-headache-fit-flair-cap-sleeve-dress/-/A-1002395708",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000606615",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-garfield-skater-logo-fit-flair-cap-sleeve-dress/-/A-1000466063",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000628482",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-we-re-all-stars-fit-flair-cap-sleeve-dress/-/A-1003928527",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-party-animal-fit-flair-cap-sleeve-dress/-/A-1000472702",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-you-re-the-sweetest-barbie-fit-flair-cap-sleeve-dress/-/A-1002055816",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000653922",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-garfield-boo-fit-flair-cap-sleeve-dress/-/A-1000870734",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-mommy-s-perfect-pumpkin-fit-flair-cap-sleeve-dress/-/A-1000870498",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-barbie-land-postal-service-california-fit-flair-cap-sleeve-dress/-/A-1002051195",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-bark-in-the-park-fit-flair-cap-sleeve-dress/-/A-1000467007",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-witch-pikachu-with-candy-fit-flair-cap-sleeve-dress/-/A-1002355140",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-hello-go-home-now-fit-flair-cap-sleeve-dress/-/A-1000870704",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-bundled-up-pikachu-fit-flair-cap-sleeve-dress/-/A-1002396969",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-love-always-fit-flair-cap-sleeve-dress/-/A-1000447714",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-bon-bon-doll-fit-flair-cap-sleeve-dress/-/A-1001996593",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-colorado-charlie-brown-fit-flair-cap-sleeve-dress/-/A-1000876062",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-fitness-barbie-fit-flair-cap-sleeve-dress/-/A-1002075068",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000791412",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-friends-forever-fit-flair-cap-sleeve-dress/-/A-1000472718",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000651513",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-and-friends-skiing-fit-flair-cap-sleeve-dress/-/A-1000876159",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-seasons-greetings-fit-flair-cap-sleeve-dress/-/A-1000876029",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-karaoke-queen-fit-flair-cap-sleeve-dress/-/A-1001989858",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-nashville-and-bluegrass-queen-fit-flair-cap-sleeve-dress/-/A-1001973912",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-made-in-the-90-s-fit-flair-cap-sleeve-dress/-/A-1002063962",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-computer-design-fit-flair-cap-sleeve-dress/-/A-1001998168",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876889",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876939",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-peeking-pikachu-fit-flair-cap-sleeve-dress/-/A-1002360557",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-avatar-state-aang-fit-flair-cap-sleeve-dress/-/A-1000427990",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-palm-trees-fit-flair-cap-sleeve-dress/-/A-1002063622",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-have-a-turtley-awesome-holiday-fit-flair-cap-sleeve-dress/-/A-1000876455",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-i-m-fine-this-is-fine-fit-flair-cap-sleeve-dress/-/A-1000466334",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-garfield-lasagna-logo-fit-flair-cap-sleeve-dress/-/A-1000466021",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000606715",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-pool-party-vibes-fit-flair-cap-sleeve-dress/-/A-1001990199",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000835885",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-snuggle-buds-fit-flair-cap-sleeve-dress/-/A-1000472519",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-take-life-one-nap-fit-flair-cap-sleeve-dress/-/A-1000870578",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-chase-sky-hearts-fit-flair-cap-sleeve-dress/-/A-1000832921",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876988",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-toph-melon-lord-fit-flair-cap-sleeve-dress/-/A-1000870871",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-muntant-ninja-turtle-game-on-raph-fit-flair-cap-sleeve-dress/-/A-1000838466",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-same-roots-fit-flair-cap-sleeve-dress/-/A-1000870896",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000600942",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-hello-lovely-barbie-fit-flair-cap-sleeve-dress/-/A-1002082910",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mtv-y2k-logo-fit-flair-cap-sleeve-dress/-/A-1001983940",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-creeping-it-real-fit-flair-cap-sleeve-dress/-/A-1000870525",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-going-big-for-my-birthday-fit-flair-cap-sleeve-dress/-/A-1002086766",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817342",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-be-original-squares-fit-flair-cap-sleeve-dress/-/A-1002082993",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-leonardo-aka-leo-fit-flair-cap-sleeve-dress/-/A-1000827134",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876570",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-squares-fit-flair-cap-sleeve-dress/-/A-1002395252",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-spicy-babe-fit-flair-cap-sleeve-dress/-/A-1001993334",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-battle-ready-fit-flair-cap-sleeve-dress/-/A-1002348128",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-xoxo-heart-fit-flair-cap-sleeve-dress/-/A-1002026022",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876788",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-happy-heart-day-fit-flair-cap-sleeve-dress/-/A-1002081914",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000871486",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-vibes-fit-flair-cap-sleeve-dress/-/A-1002072317",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-collegiate-fit-flair-cap-sleeve-dress/-/A-1000870787",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-bikini-bottom-beware-fit-flair-cap-sleeve-dress/-/A-1000876580",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000819691",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-nickelodeon-paw-patrol-fit-flair-cap-sleeve-dress/-/A-1000828390",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000835798",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-outrageous-millennial-girls-fit-flair-cap-sleeve-dress/-/A-1001993612",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-play-dazzle-music-fit-flair-cap-sleeve-dress/-/A-1001993303",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-no-clue-why-i-m-out-of-bed-fit-flair-cap-sleeve-dress/-/A-1000871285",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-info-chart-fit-flair-cap-sleeve-dress/-/A-1002396959",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-logo-fit-flair-cap-sleeve-dress/-/A-1002396360",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000601067",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-since-1961-fit-flair-cap-sleeve-dress/-/A-1002052657",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000871474",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-queen-bee-is-born-to-roam-fit-flair-cap-sleeve-dress/-/A-1001997894",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-mood-fit-flair-cap-sleeve-dress/-/A-1000870634",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-varsity-seal-fit-flair-cap-sleeve-dress/-/A-1000460690",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-glam-series-fit-flair-cap-sleeve-dress/-/A-1001997918",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-cotton-candy-fit-flair-cap-sleeve-dress/-/A-1001996518",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-lyrical-star-airbrush-style-fit-flair-cap-sleeve-dress/-/A-1003928455",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-fit-flair-cap-sleeve-dress/-/A-1002069126",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-malibu-sunset-with-palm-trees-fit-flair-cap-sleeve-dress/-/A-1002060481",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-stacked-rainbow-logo-fit-flair-cap-sleeve-dress/-/A-1002112479",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-try-to-keep-up-fit-flair-cap-sleeve-dress/-/A-1000466285",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-love-what-you-love-fit-flair-cap-sleeve-dress/-/A-1003963150",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-hand-painted-heart-fit-flair-cap-sleeve-dress/-/A-1002072847",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-outline-fit-flair-cap-sleeve-dress/-/A-1002395668",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-afro-hoops-fit-flair-cap-sleeve-dress/-/A-1002081622",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-whatever-fit-flair-cap-sleeve-dress/-/A-1000870516",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-grunge-grrrl-fit-flair-cap-sleeve-dress/-/A-1001998233",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876858",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-nickelodeon-paw-patrol-fit-flair-cap-sleeve-dress/-/A-1000828416",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-official-cookie-taster-fit-flair-cap-sleeve-dress/-/A-1002353894",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-earth-day-globe-fit-flair-cap-sleeve-dress/-/A-1000877016",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-woman-kind-kind-woman-fit-flair-cap-sleeve-dress/-/A-1002054310",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-and-woodstock-snow-much-fun-fit-flair-cap-sleeve-dress/-/A-1000877063",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-rubble-graphic-fit-flair-cap-sleeve-dress/-/A-1000809259",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-nap-time-all-the-time-fit-flair-cap-sleeve-dress/-/A-1000472402",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-happy-blue-fit-flair-cap-sleeve-dress/-/A-1000871306",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-rainbow-high-simone-summers-fit-flair-cap-sleeve-dress/-/A-1001984838",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-ski-pro-fit-flair-cap-sleeve-dress/-/A-1000876187",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000628656",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-blue-polaroid-fit-flair-cap-sleeve-dress/-/A-1000871346",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-life-liberty-pursuit-of-pizza-fit-flair-cap-sleeve-dress/-/A-1000497974",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-katara-and-aang-grid-fit-flair-cap-sleeve-dress/-/A-1000427014",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000637556",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-arlene-heart-fit-flair-cap-sleeve-dress/-/A-1000472692",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-winston-karma-alex-fit-flair-cap-sleeve-dress/-/A-1003928575",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607335",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-boo-pumpkin-fit-flair-cap-sleeve-dress/-/A-1000870834",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-gengar-big-face-fit-flair-cap-sleeve-dress/-/A-1002396367",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-woodstock-ski-stripes-fit-flair-cap-sleeve-dress/-/A-1000876188",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-jimmy-neutron-adventures-of-jimmy-neutron-fit-flair-cap-sleeve-dress/-/A-1000855956",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-nap-attack-fit-flair-cap-sleeve-dress/-/A-1000472378",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876576",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-battle-tycoon-group-fit-flair-cap-sleeve-dress/-/A-1004936228",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-money-swag-fit-flair-cap-sleeve-dress/-/A-1001993287",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-circle-fit-flair-cap-sleeve-dress/-/A-1002395013",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rugrats-group-art-fit-flair-cap-sleeve-dress/-/A-1000449549",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000818951",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-garf-and-odie-logo-fit-flair-cap-sleeve-dress/-/A-1000466194",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-mommy-s-little-firecracker-fit-flair-cap-sleeve-dress/-/A-1000871643",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000820286",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-its-my-birthday-fit-flair-cap-sleeve-dress/-/A-1002086047",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-love-yourself-fit-flair-cap-sleeve-dress/-/A-1002082459",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-we-are-all-barbie-fit-flair-cap-sleeve-dress/-/A-1002109417",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000871496",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-groovy-since-forever-fit-flair-cap-sleeve-dress/-/A-1000874929",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-santas-little-helpers-fit-flair-cap-sleeve-dress/-/A-1000876280",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000628574",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000826012",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876794",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000877420",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-let-s-roll-skye-fit-flair-cap-sleeve-dress/-/A-1000876345",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876870",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-garfield-repeated-fit-flair-cap-sleeve-dress/-/A-1000466036",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-sokka-aang-katara-fit-flair-cap-sleeve-dress/-/A-1000870891",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-have-a-nice-day-fit-flair-cap-sleeve-dress/-/A-1000870718",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876908",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-genuine-attitude-fit-flair-cap-sleeve-dress/-/A-1000870769",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rugrats-graffiti-fit-flair-cap-sleeve-dress/-/A-1000449809",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000836398",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-nature-patrol-fit-flair-cap-sleeve-dress/-/A-1000871202",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000628533",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000871517",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-collegiate-fit-flair-cap-sleeve-dress/-/A-1002357149",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000606589",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-outdoor-vibes-skye-and-everest-fit-flair-cap-sleeve-dress/-/A-1000871189",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-family-is-everything-fit-flair-cap-sleeve-dress/-/A-1000474286",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-fierce-strong-female-fit-flair-cap-sleeve-dress/-/A-1002068943",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-witch-way-to-the-candy-fit-flair-cap-sleeve-dress/-/A-1000870522",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000637297",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000835906",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-boo-s-clues-fit-flair-cap-sleeve-dress/-/A-1000761545",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-faces-grid-fit-flair-cap-sleeve-dress/-/A-1000870794",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-b-b-nation-fit-flair-cap-sleeve-dress/-/A-1001989924",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-speed-fit-flair-cap-sleeve-dress/-/A-1002395227",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-neon-pikachu-fit-flair-cap-sleeve-dress/-/A-1002395631",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000653751",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-poke-fit-flair-cap-sleeve-dress/-/A-1002395200",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-bffs-4eva-bon-bon-snuggle-babe-fit-flair-cap-sleeve-dress/-/A-1001990623",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000637370",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-toph-fit-flair-cap-sleeve-dress/-/A-1000870886",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-groovy-babe-fit-flair-cap-sleeve-dress/-/A-1001993422",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-jade-hunter-rainbow-graffiti-fit-flair-cap-sleeve-dress/-/A-1001995269",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-team-pok-mon-fit-flair-cap-sleeve-dress/-/A-1002395901",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-i-live-for-weekends-fit-flair-cap-sleeve-dress/-/A-1000870698",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-checkers-fit-flair-cap-sleeve-dress/-/A-1002395158",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000877433",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000653859",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-patterned-love-fit-flair-cap-sleeve-dress/-/A-1002075967",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607234",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000606592",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-not-lazy-fit-flair-cap-sleeve-dress/-/A-1000870609",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-polly-pocket-i-love-polly-pocket-fit-flair-cap-sleeve-dress/-/A-1002020209",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876933",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-glow-grrrl-retro-styled-fit-flair-cap-sleeve-dress/-/A-1001996426",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876608",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-aang-arrows-fit-flair-cap-sleeve-dress/-/A-1000870994",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-oh-so-fierce-fit-flair-cap-sleeve-dress/-/A-1001989265",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-ask-me-if-i-care-fit-flair-cap-sleeve-dress/-/A-1000870844",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607369",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817349",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-rainbow-paris-pearls-fit-flair-cap-sleeve-dress/-/A-1001984821",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000653818",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000643044",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-candylicious-butterflies-hearts-fit-flair-cap-sleeve-dress/-/A-1001993349",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-aang-airbender-fit-flair-cap-sleeve-dress/-/A-1000429793",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mtv-skater-fit-flair-cap-sleeve-dress/-/A-1001983928",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-live-and-let-shred-fit-flair-cap-sleeve-dress/-/A-1000808984",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-just-chill-fit-flair-cap-sleeve-dress/-/A-1000870648",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-charmander-retro-gamer-fit-flair-cap-sleeve-dress/-/A-1002396932",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-bffs-4-eva-fit-flair-cap-sleeve-dress/-/A-1001998357",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000871450",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-space-rock-girls-fit-flair-cap-sleeve-dress/-/A-1001998500",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-dear-santa-fit-flair-cap-sleeve-dress/-/A-1000877017",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000637412",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-always-extra-fit-flair-cap-sleeve-dress/-/A-1001998056",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-heart-earth-fit-flair-cap-sleeve-dress/-/A-1000877003",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000791345",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607358",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000820389",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-2fly-4-wrdz-fit-flair-cap-sleeve-dress/-/A-1001993112",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-let-it-shine-fit-flair-cap-sleeve-dress/-/A-1000871312",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-earth-every-day-fit-flair-cap-sleeve-dress/-/A-1000499308",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817426",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-north-pole-or-bust-fit-flair-cap-sleeve-dress/-/A-1000876293",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000877455",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-not-always-right-fit-flair-cap-sleeve-dress/-/A-1000870627",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-violet-skyler-jade-fit-flair-cap-sleeve-dress/-/A-1001995024",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817384",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-this-kid-s-gotta-fly-fit-flair-cap-sleeve-dress/-/A-1000871111",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-catch-some-rays-fit-flair-cap-sleeve-dress/-/A-1001989126",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-we-re-on-it-fit-flair-cap-sleeve-dress/-/A-1000871077",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876625",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-feeling-extra-fit-flair-cap-sleeve-dress/-/A-1001990800",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-kindergarten-out-of-this-world-fit-flair-cap-sleeve-dress/-/A-1003965761",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607179",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000601208",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000802862",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-daddy-s-pawsome-camping-buddy-fit-flair-cap-sleeve-dress/-/A-1000871231",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-shells-and-stripes-fit-flair-cap-sleeve-dress/-/A-1000847669",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-woodstock-snowfall-fit-flair-cap-sleeve-dress/-/A-1000876165",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rugrats-gang-fit-flair-cap-sleeve-dress/-/A-1000449568",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000668970",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000726036",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-mutant-mayhem-fit-flair-cap-sleeve-dress/-/A-1000819476",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-will-trade-dog-for-candy-fit-flair-cap-sleeve-dress/-/A-1000870528",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000835815",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-let-me-be-frank-fit-flair-cap-sleeve-dress/-/A-1000870651",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-adventure-citys-heroes-fit-flair-cap-sleeve-dress/-/A-1000477014",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000651600",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-ignoring-you-fit-flair-cap-sleeve-dress/-/A-1000870674",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-pika-fit-flair-cap-sleeve-dress/-/A-1002395269",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-candy-hearts-fit-flair-cap-sleeve-dress/-/A-1002083443",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-our-super-power-fit-flair-cap-sleeve-dress/-/A-1003970567",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876950",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000820313",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-extra-w-a-side-of-swag-fit-flair-cap-sleeve-dress/-/A-1001996456",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-santas-helpers-in-a-half-shell-fit-flair-cap-sleeve-dress/-/A-1000876522",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-sigh-garfield-fit-flair-cap-sleeve-dress/-/A-1000466351",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-pawsitive-vibes-fit-flair-cap-sleeve-dress/-/A-1000780947",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-join-the-crew-fit-flair-cap-sleeve-dress/-/A-1000871771",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000871465",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876822",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-head-over-paws-for-you-fit-flair-cap-sleeve-dress/-/A-1000832870",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-gotta-catch-em-all-pikachu-design-fit-flair-cap-sleeve-dress/-/A-1002395018",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-elements-harmony-fit-flair-cap-sleeve-dress/-/A-1000870929",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-little-tikes-go-green-fit-flair-cap-sleeve-dress/-/A-1001986402",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876968",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mickey-mouse-friends-minnie-lilo-stitch-floral-girls-smocked-maxi-dress-little-kid-to-big/-/A-91126687",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-minnie-mouse-hawaiian-matching-family-hawaiian-button-down-shirt-adult/-/A-91789891",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-ghost-spider-girls-tulle-tutu-dress-toddler-to-big-kid/-/A-91318268",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-little-girls-french-terry-dress-polka-dots-red-off-white-6/-/A-93890006",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-lion-king-girls-matching-family-maxi-dress-little-kid-to-big/-/A-91503166",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-mesh-cosplay-tulle-dress-toddler-to-big-kid/-/A-88256311",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-square-neck-cami-dress/-/A-1003633214",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-floral-girls-smocked-cami-maxi-dress-little-kid-to-big/-/A-92302326",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bluey-square-neck-smocked-maxi-dress-sizes-2t-10-12/-/A-1002437275",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-square-neck-smocked-dress/-/A-1003633230",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-kitty-fairy-girls-2-pack-dresses-toddler-to-big-kid/-/A-89003522",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-girls-dress-toddler/-/A-87274568",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-chambray-dress-sizes-2t-14-16/-/A-94177652",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-gabby-pandy-paws-girls-tulle-dress-toddler-to-big-kid/-/A-89004323",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peppa-pig-girls-mesh-tulle-dress-toddler-to-little-kid/-/A-90267262",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-little-girls-square-neck-smocked-cami-dress-yellow-6/-/A-1003633236",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-bubble-ribbed-dress/-/A-1003546792",
      tags: "Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "Tunic Dresses",
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
