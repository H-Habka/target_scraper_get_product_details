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
      url: "https://www.target.com/p/spongebob-squarepants-best-witches/-/A-1000851028",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-boo-tiful/-/A-1000850935",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-franken-sponge/-/A-1000850876",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-creatures-of-the-deep/-/A-1000850838",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-sandy-boo-y-all/-/A-1000850807",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hey-boo/-/A-1000850763",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-no-tricks-just-treats/-/A-1000850746",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongeboo/-/A-1000850647",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-scaredy-pants/-/A-1000850660",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-best-egg-ever/-/A-1000850311",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-bikini-bottom-egg-hunting-champ/-/A-1000850257",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-easter-is-egg/-/A-1000850165",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-happy-st-patricks-day/-/A-1000850053",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hoppy-easter-icons/-/A-1000850025",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hoppy-easter/-/A-1000849888",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-earth-every-day/-/A-1000848494",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-peace-love-pizza/-/A-1000848079",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-usa-raphael/-/A-1000847969",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-born-raised-usa/-/A-1000847855",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-shells-and-stripes/-/A-1000847663",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-best-witches/-/A-1000845120",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-bikini-bottom-beware/-/A-1000845110",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtles-happy-holidays/-/A-1000843284",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtles-get-into-the-ninja-spirit/-/A-1000843244",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtles-have-a-turtley-awesome-holiday/-/A-1000843201",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtles-reindeer-turtles/-/A-1000843146",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtles-turtley-awesome-group/-/A-1000842916",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtles-santas-helpers-in-a-half-shell/-/A-1000842898",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-santas-little-helpers/-/A-1000841770",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-have-an-ice-day/-/A-1000841700",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-happy-holidays-wreath/-/A-1000841673",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-feliz-navi-dog/-/A-1000841687",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-seasons-eatings/-/A-1000841668",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-my-presence-is-your-present/-/A-1000841632",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-north-pole-or-bust/-/A-1000841579",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts-snoopy-s-ski-resort/-/A-1000840444",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-ho-ho-no/-/A-1000840231",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-squidward-bah-humbug/-/A-1000840121",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-seasons-greetings/-/A-1000840099",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-tis-the-season/-/A-1000840010",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-dashing-through-the-snow/-/A-1000839966",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-frosty-friends/-/A-1000839942",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-select-your-turtle-video-game/-/A-1000838898",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-chase-sky-hearts/-/A-1000833021",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-puppy-luv/-/A-1000832968",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-head-over-paws-for-you/-/A-1000832928",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-st-pawddys-day/-/A-1000828671",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-4-paw-clover/-/A-1000828663",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-chase-the-rainbow/-/A-1000828585",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/nickelodeon-paw-patrol-graphic-short-sleeve-fleece-dress/-/A-1000828581",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-team-shamrock/-/A-1000828459",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-who-needs-luck-with-this-charm/-/A-1000827640",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-charmed-i-m-sure/-/A-1000827637",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-squidward-luck/-/A-1000827682",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-prone-to-shenanigans-and-malarkey/-/A-1000827645",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-lucky-dogs/-/A-1000827355",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-undercover-leprechauns/-/A-1000827349",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-movie-logo/-/A-1000827164",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-donatello-raphael-leonardo-michelangelo/-/A-1000827148",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-raphael-going-in-loud/-/A-1000827125",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-michelangelo-aka-mikey/-/A-1000827108",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-leonardo-aka-leo/-/A-1000827088",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/rocket-power-skate-life/-/A-1000826648",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000826004",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000825910",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000825918",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820832",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820828",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820776",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820752",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820728",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820695",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820689",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820679",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820662",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820635",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820562",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819888",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819851",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819801",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819708",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819694",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-mutant-mayhem/-/A-1000819354",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819206",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819195",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819178",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819133",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819024",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819004",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-want-you-to-have-a-happy-fourth/-/A-1000818921",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/nickelodeon-mother-s-day-graphic-short-sleeve-fleece-dress/-/A-1000818358",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/nickelodeon-mother-s-day-graphic-short-sleeve-fleece-dress/-/A-1000818341",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818208",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818159",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818149",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818121",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818114",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818101",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818071",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818070",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818052",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818042",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818035",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817891",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817879",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817843",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817830",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817749",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817728",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817637",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817612",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-shine-like-fireworks/-/A-1000817173",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-silhouette-stars-stripes/-/A-1000817126",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-lit-fireworks-patrick/-/A-1000817117",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-patrick-sparkers-flag/-/A-1000817119",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-flag-fill-sunglasses/-/A-1000817113",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-americana/-/A-1000817024",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-americana/-/A-1000816901",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815700",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815720",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815678",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815670",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815650",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815600",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815563",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815413",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-patrick-trick-or-treating/-/A-1000810513",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-boo-crew/-/A-1000810498",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-ghosting-level-flying-dutchman/-/A-1000810494",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-did-i-scare-ya/-/A-1000810486",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-scare-or-be-scared-flying-dutchman/-/A-1000810477",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-scardey-pants/-/A-1000810419",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-what-costume/-/A-1000810349",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000810296",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000810292",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000810270",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000810077",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000810020",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000809982",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000809985",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-team-paw-rubble/-/A-1000809604",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-team-paw-marshall/-/A-1000809592",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-rubble-graphic/-/A-1000809492",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-chase-rubble-marshall-hexagons/-/A-1000809380",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-pawfect-pals/-/A-1000809332",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-time-to-embark-on-adventure/-/A-1000809215",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-character-art/-/A-1000809221",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-pups-at-play/-/A-1000809180",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-leo-and-brothers-ninja-warriors/-/A-1000809147",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-what-rules-leo-and-brothers/-/A-1000809018",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-live-and-let-shred/-/A-1000809027",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-chase-lightning/-/A-1000807586",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-lightning/-/A-1000807512",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-mighty-movie-character-group/-/A-1000807372",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-reach-for-the-skye/-/A-1000807254",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803227",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803261",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803244",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803233",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803226",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803201",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803175",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803169",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803171",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803162",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803112",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803124",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803104",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803094",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803064",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-chillin-with-friends-graphic-short-sleeve-fleece-dress/-/A-1000799095",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-hello-bello-minion-graphic-short-sleeve-fleece-dress/-/A-1000799075",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-too-rad-to-be-sad-graphic-short-sleeve-fleece-dress/-/A-1000799113",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-minion-banana-stickers-graphic-short-sleeve-fleece-dress/-/A-1000799088",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-only-here-for-the-eats-graphic-short-sleeve-fleece-dress/-/A-1000799017",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-living-the-good-life-graphic-short-sleeve-fleece-dress/-/A-1000799000",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-branch-stacked/-/A-1000798499",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-dance-vibes-poppy-branch/-/A-1000798470",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-music-is-life-branch/-/A-1000798466",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-music-obsessed-poppy-and-branch/-/A-1000798379",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-let-me-hear-you-shout-poppy-and-branch/-/A-1000798289",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-gimme-a-beat-branch-and-poppy/-/A-1000798243",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-trick-or-troll-branch-and-poppy/-/A-1000796926",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-lets-hang-out-branch/-/A-1000796936",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-happy-haunting-branch/-/A-1000796925",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-simply-bootiful-poppy/-/A-1000796904",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-a-lil-bit-bananas/-/A-1000796620",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-not-today-graphic-short-sleeve-fleece-dress/-/A-1000796574",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-minions-on-tour-graphic-short-sleeve-fleece-dress/-/A-1000796585",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-make-yourself-heard-graphic-short-sleeve-fleece-dress/-/A-1000796589",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-hippie-lil-thing-graphic-short-sleeve-fleece-dress/-/A-1000796538",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-sunshine-on-my-mind-graphic-short-sleeve-fleece-dress/-/A-1000796533",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-mine-mine-mine-graphic-short-sleeve-fleece-dress/-/A-1000796518",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-retro-rainbow-skater-graphic-short-sleeve-fleece-dress/-/A-1000796497",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-groovy-since-forever-graphic-short-sleeve-fleece-dress/-/A-1000796489",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-only-here-for-the-eats/-/A-1000796472",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795727",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795723",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795682",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795675",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795666",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795657",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795651",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795643",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795639",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795627",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795614",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795599",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795607",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795587",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795566",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795571",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795563",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795546",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795542",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795515",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795455",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795429",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795437",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795430",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795410",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795367",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795340",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795342",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795309",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795305",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000794822",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000794809",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000794771",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000794768",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000794710",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000794696",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000794629",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791960",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791959",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791940",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791932",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791921",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791867",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791877",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791868",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791850",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791842",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791788",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791833",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791808",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791791",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791806",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791796",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791786",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791779",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791776",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791767",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791771",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791752",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791715",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791702",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-patrick-candy-canes/-/A-1000790985",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-santa-spongebob/-/A-1000790969",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-xmas-sweater/-/A-1000790868",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790766",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790764",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790756",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790749",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790719",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790716",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790693",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790698",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790654",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790662",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790646",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790619",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790601",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790603",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790554",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-garfield-movie-vertical/-/A-1000790073",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-living-the-dream/-/A-1000790020",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/garfield-life-is-just-purrfect/-/A-1000790028",
      tags: "Girl, Sweater Dresses",
    },
    {
      url: "https://www.target.com/p/girls-39-bow-front-sweater-vest-cat-38-jack-8482-cream/-/A-94472211",
      tags: "Girl, Sweater Tank Tops",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-sweatshirt-fruits-on-yellow-background-6-years/-/A-1003010536",
      tags: "Girl, Sweater Tank Tops",
    },
    {
      url: "https://www.target.com/p/girls-39-39-hearts-39-cotton-tights-cat-38-jack-8482-ivory/-/A-93277665",
      tags: "Girl, Sweater Tights",
    },
    {
      url: "https://www.target.com/p/girls-39-fashion-cotton-39-black-dot-39-sweater-tights-cat-38-jack-8482-off-white/-/A-90873439",
      tags: "Girl, Sweater Tights",
    },
    {
      url: "https://www.target.com/p/memoi-girls-ribbed-cotton-blend-sweater-tights/-/A-92512913",
      tags: "Girl, Sweater Tights",
    },
    {
      url: "https://www.target.com/p/memoi-girls-cotton-blend-opaque-sweater-tights/-/A-93503061",
      tags: "Girl, Sweater Tights",
    },
    {
      url: "https://www.target.com/p/girls-open-work-sweater-vest-art-class/-/A-94265621",
      tags: "Girl, Sweater Vests",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-sweater-vest/-/A-89281470",
      tags: "Girl, Sweater Vests",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-fine-gauge-sweater-vest/-/A-89281454",
      tags: "Girl, Sweater Vests",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-v-neck-sweater/-/A-86738947",
      tags: "Girl, Sweater Vests",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-girls-cable-knit-sweater-vest/-/A-93590664",
      tags: "Girl, Sweater Vests",
    },
    {
      url: "https://www.target.com/p/girls-fleece-flare-sweatpants-art-class/-/A-93441994",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/girls-fleece-wide-leg-sweatpants-art-class/-/A-94435223",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/girls-39-fleece-jogger-pants-cat-38-jack-8482/-/A-94492219",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/converse-girls-french-terry-wide-leg-pants/-/A-94687310",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/hanes-kids-comfort-soft-eco-smart-jogger-sweatpants/-/A-81534169",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-jogger-sweatpants/-/A-87254816",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-sweatpants/-/A-86739525",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-iron-knee-fleece-jogger-sweatpants/-/A-88860411",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/leveret-kids-sweatpants/-/A-89317956",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-high-pile-fleece-lined-jogger-sweatpants/-/A-88876530",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-wide-leg-knit-pants/-/A-1002271482",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/eg-pro-girl-fleece-jogger-essential-super-soft-moisture-wicking/-/A-1002668434",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/girl-peached-layering-set-danskin/-/A-1001893740",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/girl-ribbed-hacci-layering-set-danskin/-/A-1001893719",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/girl-s-isabella-gauze-pants-vignette/-/A-1001251586",
      tags: "Girl, Sweatpants",
    },
    {
      url: "https://www.target.com/p/leveret-girls-and-doll-matching-sweatshirt-tunic-dress/-/A-89594881",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-everest-sketch-fit-flair-cap-sleeve-dress/-/A-1000470483",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-this-is-my-camping-sweatshirt-fit-flair-cap-sleeve-dress/-/A-1000871119",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-100-days-of-learning/-/A-1000787330",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-squad-kindergarten/-/A-1000787322",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-everest-sketch/-/A-1000787248",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-chase-sketch/-/A-1000787244",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-squad-preschool/-/A-1000787240",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-squad-second-grade/-/A-1000787233",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-sketch/-/A-1000787229",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-100-days-flew-away/-/A-1000787190",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-lets-play/-/A-1000786525",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-staying-cool/-/A-1000786443",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-present-patrol/-/A-1000781596",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/paw-patrol-pup-pup-lights-up/-/A-1000780739",
      tags: "Girl, Sweatshirt Dresses",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-upf-50-swim-boy-shorts/-/A-91372251",
      tags: "Girl, Swim Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-comfort-waist-stretch-swim-shorts/-/A-87046945",
      tags: "Girl, Swim Shorts",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-upf-50-printed-swim-boy-shorts/-/A-91472246",
      tags: "Girl, Swim Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-slim-stretch-woven-comfort-waist-swim-shorts/-/A-87047137",
      tags: "Girl, Swim Shorts",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-stretch-upf-50-swim-short/-/A-1004356105",
      tags: "Girl, Swim Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-swimmini-swim-skirt/-/A-87034679",
      tags: "Girl, Swim Skirts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-slim-swim-mini-skirt-swim-bottoms/-/A-86529864",
      tags: "Girl, Swim Skirts",
    },
    {
      url: "https://www.target.com/p/hanes-2pk-wire-free-bra-beige-white/-/A-87409058",
      tags: "Girl, T-Shirt Bras",
    },
    {
      url: "https://www.target.com/p/hanes-girls-2pk-underwire-bra-beige-black/-/A-87409051",
      tags: "Girl, T-Shirt Bras",
    },
    {
      url: "https://www.target.com/p/hanes-girls-39-2pk-cotton-molded-t-shirt-bra/-/A-93700159",
      tags: "Girl, T-Shirt Bras",
    },
    {
      url: "https://www.target.com/p/maidenform-girls-39-microfiber-underwire-bra/-/A-90997644",
      tags: "Girl, T-Shirt Bras",
    },
    {
      url: "https://www.target.com/p/girls-pleated-uniform-tennis-dress-cat-jack/-/A-85287013",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/toddler-girls-short-sleeve-pleated-uniform-tennis-dress-cat-jack-navy/-/A-87050089",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/leveret-girl-and-doll-matching-christmas-cotton-dress/-/A-89595937",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/leveret-girl-and-doll-matching-cotton-dress-classic-prints/-/A-93805428",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-evolution-stickers-fit-flair-cap-sleeve-dress/-/A-1002396657",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-garden-floral/-/A-82663361",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-group-fit-flair-cap-sleeve-dress/-/A-1002357151",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-queen-bee-kitty-queen-girls-skater-sequin-dresses-scrunchie-toddler-to-big-kid/-/A-88257632",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-frozen-dress-for-girls-elsa-snowflake-princess-dress-white-pink-lilac/-/A-1003488203",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-poppy/-/A-82663379",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-navy-floral/-/A-82662741",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-blossoms/-/A-82663203",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-kindergarten-squad-thing-1-and-thing-2-fit-flair-cap-sleeve-dress/-/A-1003965209",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ballerina-this-girl-can-dance-fit-flair-cap-sleeve-dress/-/A-93305049",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-baby-girls-cotton-dresses-blush-rose-leopard/-/A-87239929",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-group-circle-fit-flair-cap-sleeve-dress/-/A-93675430",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/leveret-girls-and-doll-matching-drawstring-dress/-/A-89594725",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-heart/-/A-82663481",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-lemons/-/A-82658535",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-how-to-train-your-dragon-dragons-fit-flair-cap-sleeve-dress/-/A-1003892254",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-trolls-turn-it-up-poppy-fit-flair-cap-sleeve-dress/-/A-1000057846",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-hello-first-grade-fit-flair-cap-sleeve-dress/-/A-1003960058",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-spring-bouquet-pattern-logo-fit-flair-cap-sleeve-dress/-/A-1002107381",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-mon-characters-fit-flair-cap-sleeve-dress/-/A-1002396051",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/leveret-girl-and-doll-matching-cotton-dress-animal-prints/-/A-93803570",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-rainbow-high-character-group-fit-flair-cap-sleeve-dress/-/A-1001995228",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-pink-daisy-pattern-logo-fit-flair-cap-sleeve-dress/-/A-1002108018",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876011",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-girl-cotton-dresses-rainbow-stripe/-/A-88768397",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-butterflies/-/A-82658603",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-fit-flair-cap-sleeve-dress/-/A-1002396678",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046480",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-baby-and-toddler-girl-cotton-dress-and-cardigan-set-wildflower/-/A-83937109",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-baby-and-toddler-girl-cotton-dress-and-cardigan-set-poppy-daisy/-/A-83937045",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-garden-floral/-/A-82658016",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046379",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-girl-cotton-dresses-houndstooth-lt-pink/-/A-89267344",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-clawdeen-wolf-draculaura-frankie-stein-polaroids-fit-flair-cap-sleeve-dress/-/A-93675432",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-girl-cotton-dresses-buffalo-plaid-leopard/-/A-89205265",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-girl-cotton-dresses-leopard-gold-heart/-/A-89205275",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/wrapables-girls-casual-print-cotton-dress/-/A-1002865827",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045548",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-botanical/-/A-82658641",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/disney-girl-s-2-pack-minnie-mouse-bow-print-and-polka-dot-casual-dress-set-pink-blue-size-2t/-/A-93231136",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-psyduck-spiral-fit-flair-cap-sleeve-dress/-/A-1002395649",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-starry-mew-fit-flair-cap-sleeve-dress/-/A-1002396536",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-charmander-see-the-evolution-fit-flair-cap-sleeve-dress/-/A-1002396995",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94180113",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045515",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-cowabunga-fit-flair-cap-sleeve-dress/-/A-1000451722",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876712",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-leo-and-brothers-tmnt-fit-flair-cap-sleeve-dress/-/A-1000479109",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-lol-hi-bae-fit-flair-cap-sleeve-dress/-/A-1001998433",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045541",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-sketch-fit-flair-cap-sleeve-dress/-/A-1000470427",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046515",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-chase-skye-marshall-totally-pawsome-fit-flair-cap-sleeve-dress/-/A-1000447715",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-soccer-team-1959-fit-flair-cap-sleeve-dress/-/A-93305022",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-i-live-for-weekends-fit-flair-cap-sleeve-dress/-/A-1000472660",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046405",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-trolls-poppy-stacked-name-fit-flair-cap-sleeve-dress/-/A-94201239",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-when-in-doubt-take-a-nap-fit-flair-cap-sleeve-dress/-/A-93056390",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-sunshine-on-my-mind-fit-flair-cap-sleeve-dress/-/A-94201874",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-race-crew-5-yrs-fit-flair-cap-sleeve-dress/-/A-1002085415",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-classic-logo-pink-fit-flair-cap-sleeve-dress/-/A-1002075746",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-easter-scene-fit-flair-cap-sleeve-dress/-/A-1002610325",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181114",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-lagoona-frankie-cleo-clawdeen-draculaura-pastel-logo-fit-flair-cap-sleeve-dress/-/A-93675471",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-minions-on-tour-fit-flair-cap-sleeve-dress/-/A-1000874960",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ballerina-pose-fit-flair-cap-sleeve-dress/-/A-93305014",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045580",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817455",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000601191",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-character-grid-fit-flair-cap-sleeve-dress/-/A-1000451843",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94179992",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045536",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-diamond-pikachu-fit-flair-cap-sleeve-dress/-/A-1002396810",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-trolls-music-obsessed-poppy-and-branch-fit-flair-cap-sleeve-dress/-/A-1000874916",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000871458",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045363",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-leo-and-brothers-turtle-power-fit-flair-cap-sleeve-dress/-/A-1000479116",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045416",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181102",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/wrapables-girls-casual-long-sleeved-cats-dress/-/A-1002865923",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-infant-and-toddler-girl-cotton-dresses-north-pole/-/A-87724089",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045557",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94180057",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-mighty-movie-character-group-fit-flair-cap-sleeve-dress/-/A-1000807057",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000643157",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046451",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94180069",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181004",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181092",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-charlie-brown-snoopy-merry-christmas-warm-wishes-fit-flair-cap-sleeve-dress/-/A-1000877076",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045595",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000871527",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-christmas-cookies-and-cocoa-fit-flair-cap-sleeve-dress/-/A-1000877102",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-long-sleeve-twirl-dress/-/A-89942784",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94180036",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-girls-organic-cotton-dresses-woodland/-/A-89205329",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-butterflies/-/A-82658380",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045531",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-monster-friends-forever-fit-flair-cap-sleeve-dress/-/A-1001976559",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-mermaid-magic-fit-flair-cap-sleeve-dress/-/A-1000871750",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-original-barbie-fit-flair-cap-sleeve-dress/-/A-1002061861",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-turtles-character-grid-fit-flair-cap-sleeve-dress/-/A-1000875959",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-dress-to-impress-yourself-fit-flair-cap-sleeve-dress/-/A-1000874925",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-sk8er-grl-fit-flair-cap-sleeve-dress/-/A-1001998188",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-grid-fit-flair-cap-sleeve-dress/-/A-1002397028",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-afro-hoops-fit-flair-cap-sleeve-dress/-/A-1002081622",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunglasses-and-sun-fit-flair-cap-sleeve-dress/-/A-1002058597",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-little-tikes-summer-fun-fit-flair-cap-sleeve-dress/-/A-1001989199",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-winter-dolls-fit-flair-cap-sleeve-dress/-/A-1001977963",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-minion-banana-stickers-fit-flair-cap-sleeve-dress/-/A-1000875020",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-i-m-so-sweet-fit-flair-cap-sleeve-dress/-/A-1002396126",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-be-original-squares-fit-flair-cap-sleeve-dress/-/A-1002082993",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-clawdeen-cleo-draculaura-frankie-rainbow-logo-fit-flair-cap-sleeve-dress/-/A-93675515",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-rainbow-checkered-frame-fit-flair-cap-sleeve-dress/-/A-1001995838",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-rainbow-sparkle-box-fit-flair-cap-sleeve-dress/-/A-1001995153",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-trolls-feel-the-vibes-poppy-fit-flair-cap-sleeve-dress/-/A-1000874909",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000661612",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046442",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000875998",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-christie-retro-1987-fit-flair-cap-sleeve-dress/-/A-93304971",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94180046",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817308",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000637119",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-trolls-i-love-pop-poppy-fit-flair-cap-sleeve-dress/-/A-1000874902",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000791441",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046449",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000661517",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045460",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817351",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94180019",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046492",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181095",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045611",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046513",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-this-girl-is-changing-the-world-fit-flair-cap-sleeve-dress/-/A-93305011",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-prone-to-shenanigans-and-malarkey-fit-flair-cap-sleeve-dress/-/A-1000827558",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-donatello-raphael-leonardo-michelangelo-fit-flair-cap-sleeve-dress/-/A-1000827016",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-baby-garfield-paws-and-stars-fit-flair-cap-sleeve-dress/-/A-1000474278",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-basketball-fit-flair-cap-sleeve-dress/-/A-1000460573",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-cutest-kitty-ever-fit-flair-cap-sleeve-dress/-/A-1000474265",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-lucky-cat-fit-flair-cap-sleeve-dress/-/A-1000472420",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046424",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-soar-fit-flair-cap-sleeve-dress/-/A-1000871139",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-adventure-begin-fit-flair-cap-sleeve-dress/-/A-1000447557",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000815556",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-girl-cotton-dresses-metallic-snowflake-star/-/A-89205221",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-momo-cute-fit-flair-cap-sleeve-dress/-/A-1000870901",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-merry-christmas-dude-fit-flair-cap-sleeve-dress/-/A-1000876457",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817397",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-expressions-fit-flair-cap-sleeve-dress/-/A-1000449016",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046367",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-navy-floral/-/A-82662806",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94179872",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607310",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-how-to-train-your-dragon-we-have-dragons-fit-flair-cap-sleeve-dress/-/A-1003890943",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-squirtle-charmander-and-bulbasaur-youth-girls-fit-and-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002396625",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-slowpoke-taking-it-slow-fit-flair-cap-sleeve-dress/-/A-1002397035",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-halloween-barbie-fit-flair-cap-sleeve-dress/-/A-1002092036",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-hand-painted-heart-fit-flair-cap-sleeve-dress/-/A-1002072847",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-all-together-fit-flair-cap-sleeve-dress/-/A-1002069856",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-4th-of-july-fit-flair-cap-sleeve-dress/-/A-1001985067",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-celebr8-fit-flair-cap-sleeve-dress/-/A-1001989706",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607183",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-s-ski-resort-fit-flair-cap-sleeve-dress/-/A-94183113",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94179880",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045474",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-zuko-calming-tea-fit-flair-cap-sleeve-dress/-/A-1000870866",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-little-tikes-imagination-is-all-it-takes-fit-flair-cap-sleeve-dress/-/A-1001989345",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-irish-i-was-a-unicorn-fit-flair-cap-sleeve-dress/-/A-1001602959",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-a-lil-bit-bananas-fit-flair-cap-sleeve-dress/-/A-94201761",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-dream-explore-repeat-fit-flair-cap-sleeve-dress/-/A-1000871247",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045478",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181131",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817409",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045571",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045387",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-trolls-show-up-glow-up-poppy-fit-flair-cap-sleeve-dress/-/A-1000874888",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-the-beatles-fit-flair-cap-sleeve-dress/-/A-1002632207",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-ready-to-rock-pre-k-fit-flair-cap-sleeve-dress/-/A-1003968021",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046496",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000653972",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000637586",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-let-it-snow-fit-flair-cap-sleeve-dress/-/A-1000877308",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000661609",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-chase-sketch-fit-flair-cap-sleeve-dress/-/A-1000470517",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-botanical-10-years/-/A-82658321",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-clawdeen-wolf-leader-of-the-pack-fit-flair-cap-sleeve-dress/-/A-1001973284",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-frankie-draculaura-clawdeen-m-f-f-fit-flair-cap-sleeve-dress/-/A-1002008144",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-garfield-movie-vertical-fit-flair-cap-sleeve-dress/-/A-1000474219",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-dance-vibes-poppy-branch-fit-flair-cap-sleeve-dress/-/A-94201808",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-character-image-fit-flair-cap-sleeve-dress/-/A-1001976513",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181130",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-baby-girls-cotton-dresses-pink-navy-floral/-/A-87239881",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-summer-dreams-trio-fit-flair-cap-sleeve-dress/-/A-93305000",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-girl-cotton-dresses-multicolor-sea-shells/-/A-88768380",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-the-beatles-fit-flair-cap-sleeve-dress/-/A-1002632184",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607583",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000835811",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-heart-grid-fit-flair-cap-sleeve-dress/-/A-1002082900",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-toy-doll-lineup-fit-flair-cap-sleeve-dress/-/A-1001995436",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000818969",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000643160",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-2nd-grade-squad-fit-flair-cap-sleeve-dress/-/A-1000463229",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-magically-unpinchable-unicorn-fit-flair-cap-sleeve-dress/-/A-1001602036",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-american-thing-one-fit-flair-cap-sleeve-dress/-/A-1000065414",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girl-strong-kind-brave-bold-and-fearless-fit-flair-cap-sleeve-dress/-/A-1002071746",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-poppy/-/A-82657969",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-ghoul-squad-fit-flair-cap-sleeve-dress/-/A-1001976554",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-pika-youth-girls-fit-and-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002395133",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-bff-hearts-fit-flair-cap-sleeve-dress/-/A-1002109294",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-baby-and-toddler-girl-organic-cotton-sleeveless-dresses-peach/-/A-83936984",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-baby-and-toddler-girl-cotton-dress-and-cardigan-set-citrus-orange/-/A-83937098",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-hello-kindergarten-fit-flair-cap-sleeve-dress/-/A-1003959963",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-ballerina-let-s-dance-fit-flair-cap-sleeve-dress/-/A-93305035",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-rubble-sketch-fit-flair-cap-sleeve-dress/-/A-1000470475",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-baby-girls-cotton-dresses-ombre-coral-teal/-/A-87239966",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-let-s-roll-marshall-fit-flair-cap-sleeve-dress/-/A-1000876329",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-lucky-shamrocks-filled-fit-flair-cap-sleeve-dress/-/A-1001603214",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-woodstock-beach-heart-fit-flair-cap-sleeve-dress/-/A-93036494",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-summer-is-for-camping-fit-flair-cap-sleeve-dress/-/A-1000871153",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-it-takes-alotl-luck-fit-flair-cap-sleeve-dress/-/A-1001602490",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-gary-the-snail-fit-flair-cap-sleeve-dress/-/A-1000463212",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-retro-floral-logo-fit-flair-cap-sleeve-dress/-/A-93305008",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-poinsettia/-/A-82658904",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000871409",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-love-always-fit-flair-cap-sleeve-dress/-/A-1000447714",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-ready-to-rock-first-grade-fit-flair-cap-sleeve-dress/-/A-1003967699",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-lucky-lil-ducky-fit-flair-cap-sleeve-dress/-/A-1001598800",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-retro-group-april-fit-flair-cap-sleeve-dress/-/A-1000468961",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002107572",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000606601",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000628482",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-select-your-turtle-video-game-fit-flair-cap-sleeve-dress/-/A-1000875917",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-jiggypuff-sing-along-fit-flair-cap-sleeve-dress/-/A-1002395866",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-magical-gamer-girl-fit-flair-cap-sleeve-dress/-/A-1003238276",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-infant-and-toddler-girl-cotton-dresses-pink-black-roses/-/A-88252542",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-woodstock-small-but-trying-my-best-fit-flair-cap-sleeve-dress/-/A-93056381",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-group-logo-brick-wall-fit-flair-cap-sleeve-dress/-/A-1000468773",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-rubble-beach-fit-flair-cap-sleeve-dress/-/A-1000467115",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-girl-pup-power-fit-flair-cap-sleeve-dress/-/A-1000780937",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-make-yourself-heard-fit-flair-cap-sleeve-dress/-/A-1000874989",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-bulbasaur-anime-battle-youth-girls-fit-and-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002377752",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-tiny-hooligan-fit-flair-cap-sleeve-dress/-/A-1001600171",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-usa-things-fit-flair-cap-sleeve-dress/-/A-1000065432",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-hello-bello-minion-fit-flair-cap-sleeve-dress/-/A-1000870458",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-girl-cotton-dresses-black-daisy/-/A-88768411",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-i-m-ready-fit-flair-cap-sleeve-dress/-/A-1000451823",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-ready-to-rock-kindergarten-fit-flair-cap-sleeve-dress/-/A-1003967497",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-valentine-s-day-i-loaf-you-bread-fit-flair-cap-sleeve-dress/-/A-1001599222",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-draculara-pink-fit-flair-cap-sleeve-dress/-/A-1002010199",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-cat-in-the-hat-waving-banners-of-red-white-and-blue-fit-flair-cap-sleeve-dress/-/A-1000065356",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-easter-fit-flair-cap-sleeve-dress/-/A-1002074915",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-retro-style-dolls-fit-flair-cap-sleeve-dress/-/A-1001989271",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-retro-sunset-fit-flair-cap-sleeve-dress/-/A-1000468992",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607338",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-american-thing-two-fit-flair-cap-sleeve-dress/-/A-1000065483",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000802817",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-not-today-fit-flair-cap-sleeve-dress/-/A-1000874982",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000836405",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-let-s-roll-chase-fit-flair-cap-sleeve-dress/-/A-1000876363",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-original-i-am-green-eggs-and-ham-fit-flair-cap-sleeve-dress/-/A-1000871856",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817407",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-valentine-s-day-be-my-meowentine-fit-flair-cap-sleeve-dress/-/A-1001598310",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-lucky-vibes-fit-flair-cap-sleeve-dress/-/A-1001598589",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/hudson-baby-girl-cotton-dresses-black-burgundy-floral/-/A-89205328",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-retro-rainbow-skater-fit-flair-cap-sleeve-dress/-/A-1000874946",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skys-the-limit-fit-flair-cap-sleeve-dress/-/A-1000477000",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000802859",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000601188",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-pizza-power-fit-flair-cap-sleeve-dress/-/A-1000451687",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-chase-skye-rubble-marshall-everest-besties-fit-flair-cap-sleeve-dress/-/A-1000780945",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-beyoutiful-fit-flair-cap-sleeve-dress/-/A-1002082007",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-will-save-the-world-fit-flair-cap-sleeve-dress/-/A-1002073251",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-girls-support-girls-fit-flair-cap-sleeve-dress/-/A-1002061139",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-valentine-s-day-cupid-crew-fit-flair-cap-sleeve-dress/-/A-1001598245",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-leprechaun-truck-delivering-luck-fit-flair-cap-sleeve-dress/-/A-1001601657",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-ready-for-baseball-fit-flair-cap-sleeve-dress/-/A-1000871652",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunny-days-ahead-fit-flair-cap-sleeve-dress/-/A-1000412951",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817468",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-snowman/-/A-82658950",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-group-badge-fit-flair-cap-sleeve-dress/-/A-1001976512",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunny-days-ahead-fit-flair-cap-sleeve-dress/-/A-1000413073",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000820315",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000872352",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-mattel-monster-high-2-girl-crew-fit-flair-cap-sleeve-dress/-/A-1002008114",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-dance-party-fit-flair-cap-sleeve-dress/-/A-1001990052",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-raphael-going-in-loud-fit-flair-cap-sleeve-dress/-/A-1000827076",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-fit-flair-cap-sleeve-dress/-/A-1002396673",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eat-sleep-battle-repeat-fit-flair-cap-sleeve-dress/-/A-1002396819",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-love-earth-fit-flair-cap-sleeve-dress/-/A-1000877034",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-peeking-out-fit-flair-cap-sleeve-dress/-/A-1000870599",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rainbow-high-turn-it-up-fit-flair-cap-sleeve-dress/-/A-1001995303",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-red-white-and-blue-fish-fit-flair-cap-sleeve-dress/-/A-1000871297",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-logo-character-group-fit-flair-cap-sleeve-dress/-/A-1000468988",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-everest-and-skye-besties-be-yourself-fit-flair-cap-sleeve-dress/-/A-1000447809",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-arctic/-/A-82658899",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-scandinavian-bunny-with-flowers-fit-flair-cap-sleeve-dress/-/A-1002611313",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-snorlax-fit-flair-cap-sleeve-dress/-/A-1002396883",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-short-sleeve-dresses-2pk-botanical-6-years/-/A-82658317",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-curious-george-classic-cartoons-fit-flair-cap-sleeve-dress/-/A-1003962634",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-slowpoke-relax-repeat-fit-flair-cap-sleeve-dress/-/A-1002377656",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-be-you-fit-flair-cap-sleeve-dress/-/A-1002082790",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-cell-phone-chat-girls-fit-flair-cap-sleeve-dress/-/A-1001993447",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-rescue-myself-fit-flair-cap-sleeve-dress/-/A-1003238417",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000681017",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-and-eevee-fit-flair-cap-sleeve-dress/-/A-1002395001",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000802825",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-welcome-to-the-barbie-dream-house-fit-flair-cap-sleeve-dress/-/A-1002109459",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-valentine-s-day-love-you-like-pizza-fit-flair-cap-sleeve-dress/-/A-1001598741",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-marshall-sketch-fit-flair-cap-sleeve-dress/-/A-1000470109",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607234",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-ultimate-explorer-fit-flair-cap-sleeve-dress/-/A-1000871085",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000661290",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-multi-color-choose-kindness-fit-flair-cap-sleeve-dress/-/A-1002062634",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000876780",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-you-re-the-sweetest-barbie-fit-flair-cap-sleeve-dress/-/A-1002055816",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-u-glow-girl-fit-flair-cap-sleeve-dress/-/A-1001989063",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-buffalo-plaid/-/A-82662953",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000877403",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-character-art-fit-flair-cap-sleeve-dress/-/A-1000809189",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-race-crew-4-yrs-fit-flair-cap-sleeve-dress/-/A-1002086076",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-hot-wheels-scary-fast-fit-flair-cap-sleeve-dress/-/A-1002093118",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000815506",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-birthday-qt-fit-flair-cap-sleeve-dress/-/A-1001989842",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000817375",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-leaves-swirling-fit-flair-cap-sleeve-dress/-/A-1002065480",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-sokka-aang-katara-fit-flair-cap-sleeve-dress/-/A-1000870891",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-marshall-chase-everest-skye-anything-is-paw-sible-fit-flair-cap-sleeve-dress/-/A-1000780952",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-trolls-let-me-hear-you-shout-poppy-and-branch-fit-flair-cap-sleeve-dress/-/A-1000874895",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000826003",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-strong-girls-make-waves-fit-flair-cap-sleeve-dress/-/A-1002109510",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-space-rock-girls-fit-flair-cap-sleeve-dress/-/A-1001998500",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-lightning-fit-flair-cap-sleeve-dress/-/A-1000807073",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002044617",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-winter-dolls-fit-flair-cap-sleeve-dress/-/A-1001977969",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-garfield-garfields-farm-group-fit-flair-cap-sleeve-dress/-/A-1000472522",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-sketch-character-group-fit-flair-cap-sleeve-dress/-/A-1000470430",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-fun-in-the-sun-fit-flair-cap-sleeve-dress/-/A-93305043",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-rainbow-alt-girl-fit-flair-cap-sleeve-dress/-/A-1001998141",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-hoppy-easter-fit-flair-cap-sleeve-dress/-/A-1000849832",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000802829",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000607285",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-classic-logo-fit-flair-cap-sleeve-dress/-/A-1002112526",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-rugrats-natural-wonder-fit-flair-cap-sleeve-dress/-/A-1000461109",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-hypnotic-pikachu-art-fit-flair-cap-sleeve-dress/-/A-1002396693",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-earth-day-yay-fit-flair-cap-sleeve-dress/-/A-1000877011",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-logo-hearts-fit-flair-cap-sleeve-dress/-/A-1002083745",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-tie-dye-logo-fit-flair-cap-sleeve-dress/-/A-1002112547",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-monster-high-blue-ink-frankie-fit-flair-cap-sleeve-dress/-/A-1001976524",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-long-sleeve-twirl-dress/-/A-89802239",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-so-eggcited-fit-flair-cap-sleeve-dress/-/A-1000849814",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-candy-hearts-fit-flair-cap-sleeve-dress/-/A-1002083443",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-blue-s-clues-you-blue-clues-crew-fit-flair-cap-sleeve-dress/-/A-1000871380",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-fit-flair-cap-sleeve-dress/-/A-1000820268",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-palm-trees-fit-flair-cap-sleeve-dress/-/A-1002063448",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-living-the-good-life-fit-flair-cap-sleeve-dress/-/A-1000875004",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-nations-symbols-fit-flair-cap-sleeve-dress/-/A-1000426201",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-summer-time-dream-fit-flair-cap-sleeve-dress/-/A-1002059435",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-pawsome-friends-fit-flair-cap-sleeve-dress/-/A-1002658727",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-summer-pool-floaties-fit-flair-cap-sleeve-dress/-/A-1002060689",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-stacked-rainbow-logo-fit-flair-cap-sleeve-dress/-/A-1002112479",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-barbie-land-athletics-fit-flair-cap-sleeve-dress/-/A-1002051454",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-incredibly-fabulous-fit-flair-cap-sleeve-dress/-/A-1002048880",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-jiggypuff-sing-along-fit-flair-cap-sleeve-dress/-/A-1002395999",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-let-s-get-started-fit-flair-cap-sleeve-dress/-/A-1002395744",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-squirtle-bulbasaur-charmander-group-fit-flair-cap-sleeve-dress/-/A-1002348144",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-the-snuggle-is-real-pikachu-and-piplup-fit-flair-cap-sleeve-dress/-/A-1002350170",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holidays-christmas-fit-flair-cap-sleeve-dress/-/A-1002049915",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-instant-message-st-patrick-s-day-i-woke-up-this-lucky-fit-flair-cap-sleeve-dress/-/A-1001619872",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-high-school-dolls-fit-flair-cap-sleeve-dress/-/A-1002049566",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-middle-school-dolls-fit-flair-cap-sleeve-dress/-/A-1002047901",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-berry-branch-6-years/-/A-82658083",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-tree-plaid/-/A-82658932",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-holly-berry/-/A-82658847",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-baby-and-toddler-girl-organic-cotton-short-sleeve-dresses-2pk-lemon-tree-10-years/-/A-82663524",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-berry-branch-7-years/-/A-82658085",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-baby-and-toddler-girl-organic-cotton-short-sleeve-dresses-2pk-lemon-tree-12-years/-/A-82663525",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-berry-branch-8-years/-/A-82658086",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-this-is-how-i-roll-holiday-fit-flair-cap-sleeve-dress/-/A-1002048754",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-winter-woodland-8-years/-/A-82658093",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-believe-in-miracles-holiday-fit-flair-cap-sleeve-dress/-/A-1002049844",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-winter-woodland-12-years/-/A-82658095",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-barbie-holiday-friends-fit-flair-cap-sleeve-dress/-/A-1002049278",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-baby-and-toddler-girl-organic-cotton-short-sleeve-dresses-2pk-leopard-12-years/-/A-82663439",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-berry-branch-10-years/-/A-82658087",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-berry-branch-12-years/-/A-82658088",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-baby-and-toddler-girl-organic-cotton-short-sleeve-dresses-2pk-leopard-10-years/-/A-82663438",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-winter-woodland-10-years/-/A-82658094",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-winter-woodland-7-years/-/A-82658092",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/touched-by-nature-big-girls-and-youth-organic-cotton-long-sleeve-dresses-2pk-winter-woodland-6-years/-/A-82658089",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-all-things-red-white-and-blue-fit-flair-cap-sleeve-dress/-/A-1000065501",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/trolls-have-a-hair-raising-halloween-poppy-fit-flair-cap-sleeve-dress/-/A-1000057856",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046522",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181136",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046483",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046486",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181107",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181091",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181083",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046478",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046463",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181080",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181042",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181037",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181035",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046398",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181020",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046381",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000046375",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94181006",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94180994",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045605",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-1000045505",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94179922",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/girls-dr-seuss-fit-flair-cap-sleeve-dress/-/A-94179928",
      tags: "Girl, T-Shirt Dresses",
    },
    {
      url: "https://www.target.com/p/dr-seuss-fit-flair-cap-sleeve-dress/-/A-94179886",
      tags: "Girl, T-Shirt Dresses",
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
