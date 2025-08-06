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
      url: "https://www.target.com/p/tasty-peach-kekitsu-eating-sweets-crew-neck-long-sleeve-athletic-heather-youth-tee/-/A-91498819",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tasty Peach Studios, Tops",
      filters: {
        brand: "Tasty Peach Studios",
      },
    },
    {
      url: "https://www.target.com/p/tee-luv-kids-smokey-bear-only-you-can-prevent-wildfires-youth-t-shirt/-/A-1002533362",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tee Luv, Tops",
      filters: {
        brand: "Tee Luv",
      },
    },
    {
      url: "https://www.target.com/p/tee-luv-kids-yo-mtv-raps-youth-t-shirt/-/A-1002667383",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tee Luv, Tops",
      filters: {
        brand: "Tee Luv",
      },
    },
    {
      url: "https://www.target.com/p/tee-luv-tee-luv-kids-teenage-mutant-ninja-turtles-t-shirt-grass-green-large/-/A-1002535413",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tee Luv, Tops",
      filters: {
        brand: "Tee Luv",
      },
    },
    {
      url: "https://www.target.com/p/tee-luv-tee-luv-kids-patrick-star-face-t-shirt-pink-x-large/-/A-1002616522",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tee Luv, Tops",
      filters: {
        brand: "Tee Luv",
      },
    },
    {
      url: "https://www.target.com/p/tee-luv-tee-luv-kids-spongebob-squarepants-face-youth-t-shirt-banana-yellow-medium/-/A-1002616464",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tee Luv, Tops",
      filters: {
        brand: "Tee Luv",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-robin-youth-red-graphic-tee/-/A-88346602",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teen Titans, Tops",
      filters: {
        brand: "Teen Titans",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-teen-titans-go-boys-terrific-trio-t-shirt/-/A-1004477080",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teen Titans Go!, Tops",
      filters: {
        brand: "Teen Titans Go!",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-battle-tycoon-group-long-sleeve-graphic-t-shirt/-/A-1004936285",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-peace-love-pizza-long-sleeve-graphic-t-shirt/-/A-1000593157",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-life-liberty-pursuit-of-pizza-long-sleeve-graphic-t-shirt/-/A-1000593346",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-turtle-power-americana-long-sleeve-graphic-t-shirt/-/A-1000720361",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-born-raised-usa-long-sleeve-graphic-t-shirt/-/A-1000720592",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-battle-tycoon-do-you-even-game-bro-long-sleeve-graphic-t-shirt/-/A-1004936304",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-usa-turtles-long-sleeve-graphic-t-shirt/-/A-1000593395",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-red-white-turtle-power-long-sleeve-graphic-t-shirt/-/A-1000720397",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-battle-tycoon-sewer-long-sleeve-graphic-t-shirt/-/A-1004936237",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-shells-and-stripes-long-sleeve-graphic-t-shirt/-/A-1000593087",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-battle-tycoon-achievement-unlocked-long-sleeve-graphic-t-shirt/-/A-1004936384",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-usa-raphael-long-sleeve-graphic-t-shirt/-/A-1000592983",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-4th-of-july-headshot-kids-t-shirt-for-youth-athletic-heather-x-large/-/A-1001848798",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-american-heroes-4th-of-july-kids-t-shirt-for-youth-light-blue-small/-/A-1001848814",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-4th-of-july-shells-and-stripes-kids-t-shirt-for-youth-white-large/-/A-1001848789",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-love-4th-of-july-t-shirt/-/A-1004374148",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-leonardo-michelangelo-raphael-3-pack-athletic-t-shirts-little-kid-to-big-kid/-/A-87042005",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-6th-birthday-pizza-party-t-shirt/-/A-82369702",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-best-friend-shot-performance-tee/-/A-87573067",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-best-friend-shot-t-shirt/-/A-82366617",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-5th-birthday-pizza-party-t-shirt/-/A-79782886",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-teenage-mutant-ninja-turtles-hooded-long-sleeve-graphic-t-shirt-green/-/A-92185942",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-brick-jump-performance-tee/-/A-87572874",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-usa-turtles-short-sleeve-graphic-t-shirt/-/A-1000434991",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-turtle-power-circle-performance-tee/-/A-87572952",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-peace-love-pizza-short-sleeve-graphic-t-shirt/-/A-1000434456",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-usa-raphael-short-sleeve-graphic-t-shirt/-/A-1000433265",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-life-liberty-pursuit-of-pizza-short-sleeve-graphic-t-shirt/-/A-1000434711",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-red-white-turtle-power-short-sleeve-graphic-t-shirt/-/A-1000498006",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-born-raised-usa-short-sleeve-graphic-t-shirt/-/A-1000497980",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-shells-and-stripes-short-sleeve-graphic-t-shirt/-/A-1000434062",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-battle-tycoon-sewer-short-sleeve-graphic-t-shirt/-/A-1004936371",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-turtle-power-americana-short-sleeve-graphic-t-shirt/-/A-1000497823",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-distressed-retro-striped-brothers-t-shirt/-/A-90168198",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-leonardo-face-t-shirt/-/A-84645569",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-michelangelo-face-t-shirt/-/A-85155836",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-michelangelo-costume-t-shirt/-/A-81495613",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-halloween-rad-to-the-bone-t-shirt/-/A-89580737",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-donatello-face-t-shirt/-/A-82371711",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-ugly-christmas-sweater-t-shirt/-/A-85445932",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-keep-the-earth-green-t-shirt/-/A-88715913",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-4th-birthday-pizza-party-t-shirt/-/A-79782926",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-shadow-heroes-t-shirt/-/A-85153746",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-donatello-costume-t-shirt/-/A-81495598",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-raphael-costume-t-shirt/-/A-81495541",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-they-re-lean-they-re-green-t-shirt/-/A-90166672",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-st-patrick-s-day-michelangelo-shamrock-fill-t-shirt/-/A-85893910",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-st-patrick-s-day-raphael-don-t-push-your-luck-t-shirt/-/A-85893983",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-candy-hearts-t-shirt/-/A-85565898",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-7th-birthday-pizza-party-t-shirt/-/A-82373467",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-luck-of-the-ninja-t-shirt/-/A-1002302924",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-happy-easter-cute-best-friends-t-shirt/-/A-88718119",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-teenage-mutant-ninja-turtles-heroes-in-a-half-shell-group-shot-t-shirt/-/A-92378198",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-battle-tycoon-group-raglan-graphic-t-shirt/-/A-1004936226",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-turtle-power-americana/-/A-1000720539",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-usa-turtles/-/A-1000593386",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-born-raised-usa/-/A-1000720505",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-usa-raphael/-/A-1000593066",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-peace-love-pizza/-/A-1000593167",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-shells-and-stripes/-/A-1000593103",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-red-white-turtle-power/-/A-1000720469",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-life-liberty-pursuit-of-pizza/-/A-1000593308",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boys-teenage-mutant-ninja-turtles-battle-tycoon-do-you-even-game-bro-raglan-graphic-t-shirt/-/A-1004936251",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Teenage Mutant Ninja Turtles, Tops",
      filters: {
        brand: "Teenage Mutant Ninja Turtles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-addams-family-cousin-itt-party-animal-t-shirt/-/A-84645514",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Addams Family, Tops",
      filters: {
        brand: "The Addams Family",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-addams-family-pugsley-fire-in-the-hole-t-shirt/-/A-85026257",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Addams Family, Tops",
      filters: {
        brand: "The Addams Family",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-addams-family-theatrical-poster-t-shirt/-/A-82369330",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Addams Family, Tops",
      filters: {
        brand: "The Addams Family",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-addams-family-wednesday-i-am-smiling-t-shirt/-/A-85154431",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Addams Family, Tops",
      filters: {
        brand: "The Addams Family",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-addams-family-portrait-panels-t-shirt/-/A-85026198",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Addams Family, Tops",
      filters: {
        brand: "The Addams Family",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-bad-guys-mr-wolf-and-friends-silhouettes-long-sleeve-graphic-t-shirt/-/A-1004828877",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Bad Guys, Tops",
      filters: {
        brand: "The Bad Guys",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-bad-guys-mr-wolf-and-friends-long-sleeve-graphic-t-shirt/-/A-1004829842",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Bad Guys, Tops",
      filters: {
        brand: "The Bad Guys",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-bad-guys-mr-wolf-and-friends-short-sleeve-graphic-t-shirt/-/A-1004829823",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Bad Guys, Tops",
      filters: {
        brand: "The Bad Guys",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-bad-guys-mr-wolf-and-friends-silhouettes-short-sleeve-graphic-t-shirt/-/A-1004829673",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Bad Guys, Tops",
      filters: {
        brand: "The Bad Guys",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-bad-guys-mr-wolf-and-friends-raglan-graphic-t-shirt/-/A-1004829758",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Bad Guys, Tops",
      filters: {
        brand: "The Bad Guys",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-bad-guys-mr-wolf-and-friends-silhouettes-raglan-graphic-t-shirt/-/A-1004829721",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Bad Guys, Tops",
      filters: {
        brand: "The Bad Guys",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-emperor-s-new-groove-kronk-squirrel-squeak-t-shirt/-/A-84643453",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Emperor's New Groove, Tops",
      filters: {
        brand: "The Emperor's New Groove",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-past-to-future-circle-graphic-crew-neck-long-sleeve-athletic-heather-youth-tee/-/A-89097464",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-batman-flash-green-lantern-superman-boy-s-short-sleeve-performance-swim-tee-boardshorts-combo-set/-/A-92407336",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-comics-panels-boy-s-athletic-heather-long-sleeve-shirt/-/A-85731669",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-the-flash-youth-boys-athletic-heather-gray-long-sleeve-shirt/-/A-87614953",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-white-running-silhouette-youth-black-long-sleeve-shirt/-/A-86104526",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-movie-hero-running-youth-athletic-heather-long-sleeve-shirt/-/A-86104518",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-character-art-youth-black-sweatshirt/-/A-89097440",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-saving-the-future-and-the-past-youth-black-long-sleeve-shirt/-/A-86104505",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-lightning-bolt-logo-youth-red-graphic-tee/-/A-85729249",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-christmas-youth-red-graphic-tee/-/A-85731015",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-lightning-bolt-emblem-youth-red-graphic-tee/-/A-85730507",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/fast-like-the-flash-youth-red-graphic-tee/-/A-84706775",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-supersonic-speed-youth-red-graphic-tee/-/A-84940757",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-lightning-bolt-logo-youth-red-graphic-tee/-/A-85729245",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-lightning-fast-character-youth-red-graphic-tee/-/A-85731202",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-the-flash-superhero-and-lightning-bolt-youth-red-graphic-tee/-/A-86393995",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-supersonic-speed-force-youth-red-graphic-tee/-/A-84942312",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-be-right-back-youth-red-graphic-tee/-/A-85731098",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-why-being-flash-is-awesome-youth-red-graphic-tee/-/A-85730273",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-delivery-in-a-flash-youth-red-graphic-tee/-/A-85730918",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-lightning-bolt-youth-red-graphic-tee/-/A-88886877",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-vintage-lightning-and-flame-youth-navy-blue-graphic-tee/-/A-84941209",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-lightning-bolt-logo-youth-red-graphic-tee/-/A-85731265",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/dc-comic-youth-boys-flash-superhero-logo-red-graphic-t-shirt/-/A-86103216",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-running-in-lightning-youth-heather-gray-graphic-tee/-/A-86103959",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-running-in-circle-youth-red-graphic-tee/-/A-86103975",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/dco-flash-logo-youth-boys-red-t-shirt/-/A-85730285",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-geometric-art-logo-boy-s-red-t-shirt/-/A-85451665",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-gold-dripping-logo-youth-boys-red-t-shirt/-/A-85729353",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-distressed-edges-character-key-art-crew-neck-short-sleeve-red-boy-s-t-shirt/-/A-89097326",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/dco-the-flash-you-can-t-catch-me-youth-boys-navy-t-shirt/-/A-85730453",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-flashlight-characters-boy-s-black-t-shirt/-/A-85450661",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-pop-art-squares-boy-s-white-t-shirt/-/A-87523160",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-split-panel-character-art-boy-s-black-t-shirt/-/A-89097228",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-spray-paint-with-graffiti-effect-boy-s-black-t-shirt/-/A-87523239",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-character-in-name-text-boy-s-white-t-shirt/-/A-89097325",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-crimson-comet-graphic-boy-s-red-t-shirt/-/A-85355478",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-running-superhero-logo-boy-s-red-t-shirt/-/A-87035962",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-the-fastest-man-alive-text-with-doodle-art-youth-boy-s-red-t-shirt/-/A-87450636",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-yellow-and-red-logo-boy-s-royal-blue-t-shirt/-/A-89097122",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-fake-sequin-logo-boy-s-red-t-shirt/-/A-85354040",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-superhero-logo-boy-s-red-t-shirt/-/A-85352556",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-fast-not-last-boy-s-red-t-shirt/-/A-85354129",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-boxed-in-superhero-boy-s-red-t-shirt/-/A-89097355",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-superspeed-run-boy-s-charcoal-t-shirt/-/A-85353574",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-multiple-flash-boy-s-athletic-heather-t-shirt/-/A-87523212",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-logo-trap-graphics-youth-navy-t-shirt/-/A-86103791",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-logo-youth-boys-red-t-shirt/-/A-85730937",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-flash-logo-boy-s-red-t-shirt/-/A-85351795",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/dco-flash-lightning-fast-youth-boys-red-t-shirt/-/A-85730462",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-comic-book-flash-boy-s-red-t-shirt/-/A-85351983",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-speed-run-boy-s-white-t-shirt/-/A-89097287",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-speed-force-youth-boy-s-athletic-heather-gray-t-shirt/-/A-87450627",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-running-pose-boy-s-athletic-heather-t-shirt/-/A-86103865",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-boxed-in-flash-logo-boy-s-royal-blue-t-shirt/-/A-89097223",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-superspeed-run-boy-s-navy-blue-t-shirt/-/A-85352959",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-distressed-edges-character-group-poster-art-crew-neck-short-sleeve-boys-black-t-shirt/-/A-89097252",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-distressed-edges-character-group-poster-art-with-logo-crew-neck-short-sleeve-boys-white-t-shirt/-/A-89097352",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/the-flash-movie-repeat-text-boy-s-black-t-shirt/-/A-89097232",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-silhouette-art-with-speed-force-youth-boy-s-red-t-shirt/-/A-87450563",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/flash-superspeed-run-boy-s-red-t-shirt/-/A-85353112",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flash, Tops",
      filters: {
        brand: "The Flash",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-flintstones-my-mom-rocks-t-shirt/-/A-89018892",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flintstones, Tops",
      filters: {
        brand: "The Flintstones",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flintstones-my-mom-rocks-performance-tee/-/A-91342220",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flintstones, Tops",
      filters: {
        brand: "The Flintstones",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flintstones-barney-happy-st-paddy-s-day-t-shirt/-/A-90778122",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flintstones, Tops",
      filters: {
        brand: "The Flintstones",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flintstones-fred-pinch-proof-t-shirt/-/A-90778171",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Flintstones, Tops",
      filters: {
        brand: "The Flintstones",
      },
    },
    {
      url: "https://www.target.com/p/lost-pet-shark-youth-boys-red-graphic-tee/-/A-85354381",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Good Dinosaur, Tops",
      filters: {
        brand: "The Good Dinosaur",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-goonies-skull-map-logo-performance-tee/-/A-87698577",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Goonies, Tops",
      filters: {
        brand: "The Goonies",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-goonies-skull-map-logo-t-shirt/-/A-86926610",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Goonies, Tops",
      filters: {
        brand: "The Goonies",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-goonies-artistic-chunk-performance-tee/-/A-1001937561",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Goonies, Tops",
      filters: {
        brand: "The Goonies",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-grim-adventures-of-billy-mandy-pinch-me-i-dare-you-t-shirt/-/A-90778791",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grim Adventures of Billy&Mandy, Tops",
      filters: {
        brand: "The Grim Adventures of Billy&Mandy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-grim-adventures-of-billy-mandy-good-to-be-green-t-shirt/-/A-90778956",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grim Adventures of Billy&Mandy, Tops",
      filters: {
        brand: "The Grim Adventures of Billy&Mandy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-airbrush-grinch-t-shirt/-/A-90385826",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grinch, Tops",
      filters: {
        brand: "The Grinch",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-christmas-the-grinch-you-re-a-mean-one-portrait-t-shirt/-/A-90199424",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grinch, Tops",
      filters: {
        brand: "The Grinch",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-the-grinch-christmas-be-the-person-t-shirt/-/A-90199900",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grinch, Tops",
      filters: {
        brand: "The Grinch",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-christmas-don-t-be-a-grinch-t-shirt/-/A-90199840",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grinch, Tops",
      filters: {
        brand: "The Grinch",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-christmas-the-grinch-is-it-too-late-t-shirt/-/A-90199174",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grinch, Tops",
      filters: {
        brand: "The Grinch",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-grinch-birthday-kid-t-shirt/-/A-92649404",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grinch, Tops",
      filters: {
        brand: "The Grinch",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-merry-grinchmas-t-shirt/-/A-90199374",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grinch, Tops",
      filters: {
        brand: "The Grinch",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-christmas-the-grinch-you-re-a-mean-one-t-shirt/-/A-90199370",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grinch, Tops",
      filters: {
        brand: "The Grinch",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-framed-grinch-painting-t-shirt/-/A-90385068",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grinch, Tops",
      filters: {
        brand: "The Grinch",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-grinch-eyes-t-shirt/-/A-90385335",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grinch, Tops",
      filters: {
        brand: "The Grinch",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-grinch-birthday-boy-t-shirt/-/A-92649652",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grinch, Tops",
      filters: {
        brand: "The Grinch",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-distressed-never-not-grinchy-t-shirt/-/A-90385310",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Grinch, Tops",
      filters: {
        brand: "The Grinch",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-incredibles-mr-incredible-character-short-sleeve-graphic-t-shirt/-/A-92722816",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Incredibles, Tops",
      filters: {
        brand: "The Incredibles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-incredibles-2-dash-incredible-son-circle-t-shirt/-/A-79592686",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Incredibles, Tops",
      filters: {
        brand: "The Incredibles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-incredibles-2-jack-jack-shake-t-shirt/-/A-1001411803",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Incredibles, Tops",
      filters: {
        brand: "The Incredibles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-incredibles-classic-symbol-t-shirt/-/A-94119023",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Incredibles, Tops",
      filters: {
        brand: "The Incredibles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-incredibles-2-ugly-christmas-family-t-shirt/-/A-84868453",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Incredibles, Tops",
      filters: {
        brand: "The Incredibles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-incredibles-classic-logo-t-shirt/-/A-79592755",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Incredibles, Tops",
      filters: {
        brand: "The Incredibles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-incredibles-2-vintage-jack-jack-emblem-t-shirt/-/A-85153972",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Incredibles, Tops",
      filters: {
        brand: "The Incredibles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-incredibles-edna-mode-never-look-back-t-shirt/-/A-87267455",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Incredibles, Tops",
      filters: {
        brand: "The Incredibles",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-jetsons-george-feelin-lucky-t-shirt/-/A-90780173",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Jetsons, Tops",
      filters: {
        brand: "The Jetsons",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-jetsons-george-no-luck-quote-t-shirt/-/A-90778152",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Jetsons, Tops",
      filters: {
        brand: "The Jetsons",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-golf-par-tee-varsity-youth-short-sleeve-tee/-/A-1002444042",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-talk-football-to-me-ball-youth-long-sleeve-tee/-/A-1001834925",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-wink-rainbow-swirl-youth-tank-top/-/A-1003376575",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-be-you-rainbow-circle-youth-tank-top/-/A-1003377640",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-your-best-is-enough-floral-youth-tank-top/-/A-1003378014",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-just-happy-to-be-here-youth-tank-top/-/A-1003377915",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-cool-summer-ice-cream-pink-youth-tank-top/-/A-1003376387",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-be-kind-to-our-planet-rainbow-youth-tank-top/-/A-1003377819",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-red-white-and-cute-popsicle-youth-tank-top/-/A-1003379727",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-self-love-club-wave-youth-tank-top/-/A-1003376677",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-let-s-go-dump-truck-youth-tank-top/-/A-1003376150",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-sunny-honey-youth-tank-top/-/A-1003378068",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-cute-little-sunshine-youth-tank-top/-/A-1003376201",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-bee-the-change-youth-tank-top/-/A-1003378377",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-arched-varsity-youth-tank-top/-/A-1003378625",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-checkered-lightning-distressed-youth-long-sleeve-tee/-/A-1003377491",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-be-you-groovy-youth-long-sleeve-tee/-/A-1003378530",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-football-game-day-stacked-wavy-youth-short-sleeve-tee/-/A-90203445",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-cousin-crew-elf-youth-short-sleeve-tee/-/A-90285372",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-rudolph-reindeer-names-youth-short-sleeve-tee/-/A-90145234",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-distressed-smiley-face-youth-short-sleeve-tee/-/A-90504730",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-embrace-joy-youth-long-sleeve-tee/-/A-1003376628",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-gnome-lights-youth-short-sleeve-tee/-/A-90096238",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-never-grow-up-youth-long-sleeve-tee/-/A-1003377388",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-santa-s-little-helper-youth-short-sleeve-tee/-/A-90202798",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-believe-in-the-magic-santa-youth-short-sleeve-tee/-/A-90096230",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-oh-snap-youth-short-sleeve-tee/-/A-90145209",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-football-collage-youth-short-sleeve-tee/-/A-90203468",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-my-deer-youth-short-sleeve-tee/-/A-90293154",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-little-elf-youth-short-sleeve-tee/-/A-90229318",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-reindeer-names-antlers-youth-short-sleeve-tee/-/A-90145267",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-believe-stacked-car-youth-short-sleeve-tee/-/A-90096203",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-giant-snowflake-youth-short-sleeve-tee/-/A-90202793",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-the-world-needs-more-love-youth-long-sleeve-tee/-/A-1003377967",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-let-s-go-dump-truck-youth-long-sleeve-tee/-/A-1003376105",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-you-re-dino-mite-youth-long-sleeve-tee/-/A-1003375839",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-have-the-day-you-deserve-groovy-youth-long-sleeve-tee/-/A-1003377020",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-be-kind-to-our-planet-rainbow-youth-long-sleeve-tee/-/A-1003377786",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-melting-outline-youth-long-sleeve-tee/-/A-1003377526",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-pool-floats-youth-long-sleeve-tee/-/A-1003375938",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-march-vibes-basketball-youth-short-sleeve-tee/-/A-1002399644",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-north-pole-magic-youth-short-sleeve-tee/-/A-90202714",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-i-really-tried-car-youth-short-sleeve-tee/-/A-90137816",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-reindeer-boy-youth-short-sleeve-tee/-/A-90319747",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-having-a-meltdown-snowman-youth-short-sleeve-tee/-/A-90202776",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-jolly-boy-star-youth-short-sleeve-tee/-/A-90293157",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-merry-and-bright-stacked-youth-short-sleeve-tee/-/A-90137855",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-gobble-sunglasses-youth-short-sleeve-tee/-/A-90145155",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-i-m-snow-cute-youth-short-sleeve-tee/-/A-90137801",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-let-s-do-the-yam-thing-youth-short-sleeve-tee/-/A-90047180",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-santa-s-cutest-helper-youth-short-sleeve-tee/-/A-90203509",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-naughty-and-i-know-it-lights-youth-short-sleeve-tee/-/A-90145202",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-i-was-framed-lights-youth-short-sleeve-tee/-/A-90202701",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-let-s-get-tacos-varsity-youth-short-sleeve-tee/-/A-1003379581",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-retro-easter-collage-youth-short-sleeve-tee/-/A-1003378833",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-birthday-dude-bold-youth-long-sleeve-tee/-/A-1003375734",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-bee-the-change-youth-long-sleeve-tee/-/A-1003378461",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-self-love-club-wave-youth-long-sleeve-tee/-/A-1003376812",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-wish-you-were-here-youth-long-sleeve-tee/-/A-1003376785",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-watercolor-flag-coquette-youth-tank-top/-/A-1003379900",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-patriotic-fish-youth-tank-top/-/A-1003380076",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-bruh-paint-drip-distressed-youth-tank-top/-/A-1003378320",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-checkered-lightning-distressed-youth-tank-top/-/A-1003377419",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-patriotic-eagle-sunglasses-youth-tank-top/-/A-1003379811",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-stacked-smiles-youth-tank-top/-/A-1003377593",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-don-t-burst-my-bubble-youth-tank-top/-/A-1003378502",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-party-in-the-usa-youth-tank-top/-/A-1003377285",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-chill-the-4th-out-youth-tank-top/-/A-1003379739",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-patriotic-stars-stacked-youth-tank-top/-/A-1003377176",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-the-land-of-the-free-coquette-youth-tank-top/-/A-1003379911",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-keeping-it-reel-fish-youth-tank-top/-/A-1003376075",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-pickleball-love-youth-tank-top/-/A-1003379120",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-handsome-dude-sunglasses-youth-tank-top/-/A-1003376283",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-be-kind-to-our-planet-retro-youth-tank-top/-/A-1003377759",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-cool-summer-ice-cream-blue-youth-tank-top/-/A-1003376366",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-stay-groovy-youth-tank-top/-/A-1003376583",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-main-squeeze-lemon-youth-tank-top/-/A-1003376746",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-melting-outline-youth-tank-top/-/A-1003377580",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-have-the-day-you-deserve-circle-youth-tank-top/-/A-1003376962",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-checkered-floral-smile-youth-tank-top/-/A-1003376842",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-checkered-lightning-floral-youth-tank-top/-/A-1003377706",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-summer-wave-stacked-youth-tank-top/-/A-1003376998",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-need-space-youth-tank-top/-/A-1003376850",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-red-white-and-cool-popsicle-youth-tank-top/-/A-1003379645",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-america-circle-stars-youth-tank-top/-/A-1003379843",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-smileyworld-patriotic-star-wink-youth-tank-top/-/A-1003377181",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Juniper Shop, Tops",
      filters: {
        brand: "The Juniper Shop",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-cute-and-courageous-t-shirt/-/A-85753461",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-hakuna-matata-sunset-circle-performance-tee/-/A-85646237",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-timon-distressed-chill-performance-tee/-/A-85646376",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-hakuna-matata-silhouette-performance-tee/-/A-85646247",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-painted-simba-performance-tee/-/A-85646262",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-geometric-mufasa-portrait-performance-tee/-/A-85753940",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-nala-simba-timon-pumbaa-faces-with-flowers-short-sleeve-graphic-t-shirt/-/A-92864791",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-hakuna-matata-friends-performance-tee/-/A-85753189",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-hakuna-matata-heart-performance-tee/-/A-85554268",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-simba-character-short-sleeve-graphic-t-shirt/-/A-92864835",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-retro-simba-circle-short-sleeve-graphic-t-shirt/-/A-92864743",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-character-group-shot-t-shirt/-/A-85753109",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-simba-and-mufasa-remember-who-you-are-short-sleeve-graphic-t-shirt/-/A-92864727",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-simba-timon-pumbaa-zazu-silhouettes-with-logo-short-sleeve-graphic-t-shirt/-/A-92864757",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-pride-land-characters-t-shirt/-/A-85753822",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-scar-i-m-surrounded-by-idiots-performance-tee/-/A-85646298",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-king-in-training-performance-tee/-/A-85646242",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-no-worries-distressed-t-shirt/-/A-85752515",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-hakuna-matata-jungle-sun-performance-tee/-/A-85646437",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-pumbaa-i-m-not-lazy-i-m-saving-energy-performance-tee/-/A-85754046",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-valentine-simba-king-performance-tee/-/A-85646257",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-scar-surrounded-by-idiots-sunset-performance-tee/-/A-85646252",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-retro-distressed-friends-t-shirt/-/A-85752846",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-lion-king-hakuna-matata-silhouette/-/A-87574383",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-ugly-christmas-sweater-print-performance-tee/-/A-87430996",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-never-forget-who-you-are-t-shirt/-/A-85752508",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-sunset-pose-t-shirt/-/A-85646370",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-hakuna-matata-means-no-worries-performance-tee/-/A-85646422",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-sunset-simba-t-shirt/-/A-85646433",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-hakuna-matata-t-shirt/-/A-85753430",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-painted-simba-t-shirt/-/A-85646421",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-sky-silhouette-t-shirt/-/A-85753228",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-geometric-scar-emblem-t-shirt/-/A-85753525",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-hakuna-matata-friends-t-shirt/-/A-85753223",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-decorative-noble-simba-t-shirt/-/A-85645870",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-retro-simba-on-pride-rock-t-shirt/-/A-85752787",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-retro-hakuna-matata-dance-t-shirt/-/A-85752990",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-nala-and-simba-you-are-my-valentine-t-shirt/-/A-90647458",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-hakuna-matata-jungle-sun-t-shirt/-/A-85646436",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-sunset-pride-rock-pose-t-shirt/-/A-85753338",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-ugly-christmas-hakuna-matata-t-shirt/-/A-87430989",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-retro-cub-love-t-shirt/-/A-85753043",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-profile-t-shirt/-/A-85752954",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-and-nala-feel-the-love-performance-tee/-/A-85554323",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-the-cub-t-shirt/-/A-85752861",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-strong-like-father-mufasa-t-shirt/-/A-84232787",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-splatter-art-t-shirt/-/A-85752569",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-hakuna-matata-jungle-trio-t-shirt/-/A-85088253",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-retro-pride-rock-line-art-t-shirt/-/A-85753783",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-achin-for-some-bacon-t-shirt/-/A-85646364",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-cartoon-jungle-friends-t-shirt/-/A-85646432",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-no-worries-besties-performance-tee/-/A-85753570",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-can-t-wait-to-be-king-t-shirt/-/A-85753718",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-rafiki-geometric-rainbow-t-shirt/-/A-79783104",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-timon-distressed-chill-t-shirt/-/A-85026312",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-and-nala-feel-the-love-t-shirt/-/A-85554554",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-famous-trio-besties-t-shirt/-/A-85646394",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-silhouette-pride-rock-t-shirt/-/A-82355639",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-scar-i-wouldn-t-trust-me-either-t-shirt/-/A-85752873",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-timon-speaks-fluent-sarcasm-t-shirt/-/A-85754005",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-savannah-sunset-crew-t-shirt/-/A-85752589",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-hakuna-matata-silhouette-t-shirt/-/A-85646278",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-animal-kingdom-crew-t-shirt/-/A-85646358",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-athletic-jersey-t-shirt/-/A-85753111",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-live-on-the-wild-side-t-shirt/-/A-85753687",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-mufasa-stripe-profile-t-shirt/-/A-85646352",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-paw-movie-poster-t-shirt/-/A-85753533",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-no-worries-vibrant-sunshine-t-shirt/-/A-85752651",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-scar-i-m-surrounded-by-idiots-t-shirt/-/A-85646385",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-jungle-parade-t-shirt/-/A-85646391",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-no-worries-besties-t-shirt/-/A-85753416",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-timon-and-pumbaa-all-day-everyday-t-shirt/-/A-85646423",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-retro-nope-timon-t-shirt/-/A-85646426",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-and-rafiki-scene-t-shirt/-/A-85753177",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-retro-rainbow-94-silhouette-t-shirt/-/A-85753739",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-nala-pride-lands-crew-t-shirt/-/A-85753677",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-distressed-best-friends-group-shot-t-shirt/-/A-85752635",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-vintage-sunset-logo-t-shirt/-/A-82356507",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-cub-life-t-shirt/-/A-85646419",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-live-the-king-sketch-t-shirt/-/A-85753888",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-timon-achin-for-bacon-t-shirt/-/A-85825778",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-nala-and-simba-distressed-t-shirt/-/A-85753873",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-king-s-mane-2019-t-shirt/-/A-85752418",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-groovy-silhouette-logo-performance-tee/-/A-85646418",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-pride-rock-movie-poster-t-shirt/-/A-85753929",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-scar-surrounded-by-idiots-sunset-t-shirt/-/A-82358095",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-starry-airbrush-simba-t-shirt/-/A-85753841",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-best-friends-cartoon-t-shirt/-/A-85088719",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-simba-not-worried-bout-a-thing-t-shirt/-/A-85646267",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-no-worries-cartoon-t-shirt/-/A-85753638",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lion-king-greetings-from-pride-rock-t-shirt/-/A-85646294",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-disney-the-lion-king-t-shirt-boys-hakuna-matata-trio-sunrise-silhouette-t-shirt-red/-/A-94214853",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lion King, Tops",
      filters: {
        brand: "The Lion King",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-little-mermaid-flounder-large-portrait-t-shirt/-/A-91641815",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Little Mermaid, Tops",
      filters: {
        brand: "The Little Mermaid",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-little-mermaid-ariel-dinglehopper-portrait-t-shirt/-/A-89235428",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Little Mermaid, Tops",
      filters: {
        brand: "The Little Mermaid",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-little-mermaid-ariel-under-the-sea-quote-t-shirt/-/A-91641977",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Little Mermaid, Tops",
      filters: {
        brand: "The Little Mermaid",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-little-mermaid-ariel-curious-kind-t-shirt/-/A-89235383",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Little Mermaid, Tops",
      filters: {
        brand: "The Little Mermaid",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-little-mermaid-ariel-and-flounder-sea-t-shirt/-/A-91641959",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Little Mermaid, Tops",
      filters: {
        brand: "The Little Mermaid",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-little-mermaid-ariel-part-of-your-world-quote-t-shirt/-/A-91642014",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Little Mermaid, Tops",
      filters: {
        brand: "The Little Mermaid",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-little-mermaid-ariel-and-flounder-friendship-goals-t-shirt/-/A-91642411",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Little Mermaid, Tops",
      filters: {
        brand: "The Little Mermaid",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-little-mermaid-ariel-cartoon-friends-t-shirt/-/A-91642021",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Little Mermaid, Tops",
      filters: {
        brand: "The Little Mermaid",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-little-mermaid-waves-of-fun-t-shirt/-/A-91641727",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Little Mermaid, Tops",
      filters: {
        brand: "The Little Mermaid",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lord-of-the-rings-fellowship-of-the-ring-gandalf-all-we-have-to-decide-t-shirt/-/A-88119250",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Lord of the Rings, Tops",
      filters: {
        brand: "The Lord of the Rings",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-animal-costume-tee-t-shirt/-/A-86126488",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-gonzo-costume-tee-t-shirt/-/A-82208857",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-muppets-dr-teeth-and-the-electric-mayhem-rock-band-short-sleeve-graphic-t-shirt/-/A-92722797",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boys-the-muppets-beaker-and-dr-bunsen-total-overreactor-short-sleeve-graphic-t-shirt/-/A-92722929",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-kermit-costume-tee-t-shirt/-/A-82209535",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-birthday-boy-t-shirt/-/A-85334728",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-boxed-characters-t-shirt/-/A-82206759",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-miss-piggy-karate-t-shirt/-/A-82209519",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-gonzo-chili-peppers-t-shirt/-/A-82208299",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-electric-mayhem-t-shirt/-/A-85334556",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-ho-ho-holidays-t-shirt/-/A-87471948",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-the-animal-made-it-to-the-naughty-list-t-shirt/-/A-87471930",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-animal-metal-t-shirt/-/A-82206532",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-animal-party-t-shirt/-/A-82210501",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-sam-eagle-work-with-turkeys-t-shirt/-/A-82207107",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-kermit-pop-art-t-shirt/-/A-82206712",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-animal-go-wild-t-shirt/-/A-82208933",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-character-panels-t-shirt/-/A-82209947",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-mood-chart-t-shirt/-/A-86126498",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-christmas-kermit-and-piggy-hug-t-shirt/-/A-82210337",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-periodic-table-t-shirt/-/A-82206729",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-holiday-cheers-t-shirt/-/A-87471902",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-dreaming-of-a-green-christmas-t-shirt/-/A-87471924",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-muppets-get-your-kermit-on-t-shirt/-/A-1002300669",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Muppets, Tops",
      filters: {
        brand: "The Muppets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-this-is-halloween-jack-face-t-shirt/-/A-89875488",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-let-s-boogie-portrait-t-shirt/-/A-89875258",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-oogie-boogie-ugly-sweater-t-shirt/-/A-87391913",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-jack-santa-hat-t-shirt/-/A-89659985",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-character-christmas-tree-t-shirt/-/A-87391930",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-oogie-boogie-roll-the-dice-t-shirt/-/A-89874794",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-jack-skellington-santa-hat-logo-t-shirt/-/A-89660050",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-christmas-sandy-claws-t-shirt/-/A-89874446",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-the-nightmare-before-christmas-emotional-jack-skellington/-/A-87573890",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-no-sleep-til-christmas-t-shirt/-/A-87391900",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-holiday-vibes-jack-skellington-t-shirt/-/A-89875375",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-jack-skellington-master-of-fear-t-shirt/-/A-87257278",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-master-of-fright-t-shirt/-/A-87257155",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-jack-and-sally-on-spiral-hill-t-shirt/-/A-87257169",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-character-collage-poster-t-shirt/-/A-89874655",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-lock-shock-and-barrel-neon-circle-t-shirt/-/A-89874994",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-jack-and-sally-meant-to-be-t-shirt/-/A-87391925",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-jack-skellington-s-lament-t-shirt/-/A-87257380",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-jack-skellington-s-world-tour-t-shirt/-/A-89874414",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-long-live-the-pumpkin-king-t-shirt/-/A-87257161",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-halloween-hound-zero-t-shirt/-/A-89875291",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-season-s-creepings-t-shirt/-/A-87392073",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-jack-and-oogie-boogie-distressed-t-shirt/-/A-85754047",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-easter-bunny-we-caught-him-t-shirt/-/A-91247880",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-est-1993-neon-rainbow-jack-t-shirt/-/A-89874502",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-king-jack-skellington-t-shirt/-/A-87257184",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-pumpkin-king-script-t-shirt/-/A-87257365",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-jack-and-sally-christmas-portrait-t-shirt/-/A-89875330",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-spiral-hill-scene-t-shirt/-/A-89874614",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-jack-skellington-king-of-fright-t-shirt/-/A-87257191",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-egg-cited-for-easter-t-shirt/-/A-91247933",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-lock-shock-and-barrel-t-shirt/-/A-85753032",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-sally-the-scream-queen-t-shirt/-/A-87257310",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-holiday-scares-jack-face-t-shirt/-/A-89874767",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-jack-season-s-creepings-t-shirt/-/A-89874937",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-scary-christmas-santa-claus-t-shirt/-/A-89874317",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-fright-christmas-jack-and-sally-t-shirt/-/A-89875424",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-christmas-believe-jack-and-sally-t-shirt/-/A-89875206",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-you-are-such-a-scream-t-shirt/-/A-89874556",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-sally-s-apothecary-t-shirt/-/A-89874490",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-deadly-nightshade-sally-t-shirt/-/A-89874513",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-jack-and-sally-love-t-shirt/-/A-1001930623",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-jack-good-scares-towards-all-t-shirt/-/A-89875430",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-scary-bright-tree-t-shirt/-/A-89874322",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-easter-bunny-caught-t-shirt/-/A-91247883",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-nightmare-before-christmas-oogie-boogie-retro-glitch-t-shirt/-/A-89874219",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Nightmare Before Christmas, Tops",
      filters: {
        brand: "The Nightmare Before Christmas",
      },
    },
    {
      url: "https://www.target.com/p/polar-express-characters-on-train-crew-neck-short-sleeve-boys-white-t-shirt/-/A-88562006",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Polar Express, Tops",
      filters: {
        brand: "The Polar Express",
      },
    },
    {
      url: "https://www.target.com/p/polar-express-the-things-we-can-t-see-boy-s-red-t-shirt/-/A-85353057",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Polar Express, Tops",
      filters: {
        brand: "The Polar Express",
      },
    },
    {
      url: "https://www.target.com/p/polar-express-golden-ticket-crew-neck-short-sleeve-boys-black-t-shirt/-/A-88318451",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Polar Express, Tops",
      filters: {
        brand: "The Polar Express",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-polar-express-vectored-train-facade-graphic-youth-black-short-sleeve-crew-neck-tee/-/A-88679634",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Polar Express, Tops",
      filters: {
        brand: "The Polar Express",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-polar-express-believe-retro-train-t-shirt/-/A-87433600",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Polar Express, Tops",
      filters: {
        brand: "The Polar Express",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-polar-express-believe-train/-/A-89019090",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Polar Express, Tops",
      filters: {
        brand: "The Polar Express",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-polar-express-all-aboard-quote-t-shirt/-/A-1001940428",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Polar Express, Tops",
      filters: {
        brand: "The Polar Express",
      },
    },
    {
      url: "https://www.target.com/p/space-jam-tune-squad-youth-boys-black-graphic-tee/-/A-85355486",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Powerpuff Girls, Tops",
      filters: {
        brand: "The Powerpuff Girls",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-princess-and-the-frog-firefly-five-plus-louis-t-shirt/-/A-91642147",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Princess and the Frog, Tops",
      filters: {
        brand: "The Princess and the Frog",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-princess-and-the-frog-tiana-make-your-own-destiny-t-shirt/-/A-91641705",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Princess and the Frog, Tops",
      filters: {
        brand: "The Princess and the Frog",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-princess-and-the-frog-tiana-jazz-it-up-t-shirt/-/A-91641665",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Princess and the Frog, Tops",
      filters: {
        brand: "The Princess and the Frog",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-simpsons-bart-whatever-t-shirt/-/A-94116289",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Simpsons, Tops",
      filters: {
        brand: "The Simpsons",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-simpsons-skeleton-bart-and-lisa-t-shirt/-/A-90376626",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, The Simpsons, Tops",
      filters: {
        brand: "The Simpsons",
      },
    },
    {
      url: "https://www.target.com/p/thomas-friends-tank-engine-2-pack-t-shirts-little-kid-to-big-kid/-/A-85236492",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Thomas & Friends, Tops",
      filters: {
        brand: "Thomas & Friends",
      },
    },
    {
      url: "https://www.target.com/p/thomas-friends-tank-engine-2-pack-t-shirts-toddler-to-little-kid/-/A-85270918",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Thomas & Friends, Tops",
      filters: {
        brand: "Thomas & Friends",
      },
    },
    {
      url: "https://www.target.com/p/tom-jerry-you-can-t-catch-me-youth-athletic-heather-graphic-tee/-/A-85729817",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tom and Jerry, Tops",
      filters: {
        brand: "Tom and Jerry",
      },
    },
    {
      url: "https://www.target.com/p/tom-jerry-beast-mode-youth-navy-blue-graphic-tee/-/A-85730172",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tom and Jerry, Tops",
      filters: {
        brand: "Tom and Jerry",
      },
    },
    {
      url: "https://www.target.com/p/tom-jerry-headless-tom-with-jerry-youth-gray-graphic-tee/-/A-85729841",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tom and Jerry, Tops",
      filters: {
        brand: "Tom and Jerry",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tom-and-jerry-pastel-duo-t-shirt/-/A-87698351",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tom and Jerry, Tops",
      filters: {
        brand: "Tom and Jerry",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tom-and-jerry-classic-logo-t-shirt/-/A-86926489",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tom and Jerry, Tops",
      filters: {
        brand: "Tom and Jerry",
      },
    },
    {
      url: "https://www.target.com/p/tom-jerry-brush-art-crew-neck-short-sleeve-royal-blue-boy-s-t-shirt/-/A-88032931",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tom and Jerry, Tops",
      filters: {
        brand: "Tom and Jerry",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tom-and-jerry-bring-out-the-hammer-t-shirt/-/A-87698247",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tom and Jerry, Tops",
      filters: {
        brand: "Tom and Jerry",
      },
    },
    {
      url: "https://www.target.com/p/tom-jerry-besties-forever-boy-s-navy-t-shirt/-/A-86394098",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tom and Jerry, Tops",
      filters: {
        brand: "Tom and Jerry",
      },
    },
    {
      url: "https://www.target.com/p/tom-jerry-instagram-pose-boy-s-royal-blue-t-shirt/-/A-85782220",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tom and Jerry, Tops",
      filters: {
        brand: "Tom and Jerry",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tom-and-jerry-stay-chill-duo-t-shirt/-/A-94115070",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tom and Jerry, Tops",
      filters: {
        brand: "Tom and Jerry",
      },
    },
    {
      url: "https://www.target.com/p/tom-jerry-besties-forever-retro-text-crew-neck-short-sleeve-navy-boy-s-t-shirt/-/A-88032969",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tom and Jerry, Tops",
      filters: {
        brand: "Tom and Jerry",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tom-and-jerry-here-for-the-shenanigans-t-shirt/-/A-90779891",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tom and Jerry, Tops",
      filters: {
        brand: "Tom and Jerry",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tonka-retro-truck-t-shirt/-/A-82885189",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tonka, Tops",
      filters: {
        brand: "Tonka",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tonka-tough-like-dad-performance-tee/-/A-86500074",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tonka, Tops",
      filters: {
        brand: "Tonka",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tonka-elements-of-being-tough-t-shirt/-/A-87692695",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tonka, Tops",
      filters: {
        brand: "Tonka",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tonka-truck-chart-t-shirt/-/A-82884945",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tonka, Tops",
      filters: {
        brand: "Tonka",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tonka-built-to-last-t-shirt/-/A-82885091",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tonka, Tops",
      filters: {
        brand: "Tonka",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tonka-trencher-blueprint-t-shirt/-/A-82884851",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tonka, Tops",
      filters: {
        brand: "Tonka",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tonka-4th-birthday-t-shirt/-/A-82885299",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tonka, Tops",
      filters: {
        brand: "Tonka",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tonka-i-like-big-trucks-t-shirt/-/A-82884998",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tonka, Tops",
      filters: {
        brand: "Tonka",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-logo-distressed-performance-tee/-/A-87102379",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-fighter-jet-logo-performance-tee/-/A-87100812",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-you-are-the-maverick-to-my-goose-performance-tee/-/A-87100655",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-american-flag-aviator-sunglasses-logo-performance-tee/-/A-86117848",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-circle-of-stars-logo-performance-tee/-/A-87101089",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-talk-to-me-goose-quote-performance-tee/-/A-87100991",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-negative-ghost-rider-the-pattern-is-full-performance-tee/-/A-87100852",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-maverick-performance-tee/-/A-87101992",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-aviator-sunglasses-logo-performance-tee/-/A-87101009",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-character-name-stack-performance-tee/-/A-87101239",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-keeping-up-foreign-relations-performance-tee/-/A-87101200",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-aviator-sunglasses-reflection-logo-performance-tee/-/A-87102060",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-fightertown-usa-performance-tee/-/A-87101332",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-fighter-jet-logo-t-shirt/-/A-86117940",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-because-i-was-inverted-performance-tee/-/A-87100729",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-maverick-talk-to-me-goose-t-shirt/-/A-87100996",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-negative-ghost-rider-the-pattern-is-full-t-shirt/-/A-87100837",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-maverick-codename-patches-t-shirt/-/A-86117835",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Maverick, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun: Maverick",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-top-gun-maverick-distressed-wingman-patch-t-shirt/-/A-86118283",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Maverick, Tangled, Top Gun, Tops",
      filters: {
        brand: "Top Gun: Maverick",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-character-logo-party-t-shirt/-/A-79592098",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-infinity-and-beyond-rainbow-t-shirt/-/A-84036005",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-squeeze-alien-costume-tee-t-shirt/-/A-79592421",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-buzz-woody-rocket-car-performance-tee/-/A-87573990",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-buzz-poster-performance-tee/-/A-86745134",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-friend-in-me-scene-t-shirt/-/A-79710680",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-halloween-boo-squad-t-shirt/-/A-89579162",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-pizza-planet-logo-t-shirt/-/A-1001410253",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-pizza-planet-alien-claw-pile-t-shirt/-/A-1001415239",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-christmas-light-woody-lasso-t-shirt/-/A-84867923",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-valentine-rex-hugger-performance-tee/-/A-88323727",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-rex-cellent-90s-vibe-t-shirt/-/A-85154071",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-buzz-woody-rocket-car-t-shirt/-/A-87574015",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-halloween-look-on-the-fright-side-t-shirt/-/A-89930061",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-iconic-pizza-planet-logo-t-shirt/-/A-85088647",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-buzz-woody-portraits-t-shirt/-/A-1001415277",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-emperor-zurg-distressed-t-shirt/-/A-86744038",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-halloween-toy-treats-t-shirt/-/A-84089411",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-christmas-candy-cane-alien-t-shirt/-/A-84868998",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-christmas-alien-stocking-t-shirt/-/A-84867690",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-grinning-rex-face-t-shirt/-/A-79712552",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-little-green-men-catchphrase-t-shirt/-/A-1004164282",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-ducky-bunny-stick-with-it-motto-t-shirt/-/A-84036211",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-dj-blu-jay-toy-t-shirt/-/A-84035836",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-christmas-santa-rex-t-shirt/-/A-81881832",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-gang-is-all-here-t-shirt/-/A-79712046",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-retro-best-friend-toys-t-shirt/-/A-85088890",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-christmas-woody-light-lasso-t-shirt/-/A-81559745",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-christmas-woody-santa-claus-t-shirt/-/A-84867993",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-vintage-buzz-to-infinity-and-beyond-t-shirt/-/A-86743804",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-lucky-aliens-t-shirt/-/A-1002302915",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-christmas-alien-wreath-t-shirt/-/A-81883442",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-retro-distressed-buzz-and-sox-t-shirt/-/A-86744175",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-father-s-day-buzz-woody-t-shirt/-/A-86502170",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-spacesuit-poster-t-shirt/-/A-86743734",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-three-eyed-alien-friend-t-shirt/-/A-84035980",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-forky-talkin-trash-rainbow-t-shirt/-/A-79591948",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-christmas-santa-aliens-t-shirt/-/A-84868635",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-buzz-lightyear-star-commblack-and-white-logo-t-shirt/-/A-85154288",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-zurg-and-lightyear-t-shirt/-/A-86744191",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-toy-story-buzz-woody-rocket-car/-/A-87574109",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-halloween-squeeze-alien-boo-ghosts-t-shirt/-/A-84089876",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-made-in-the-90s-t-shirt/-/A-84036180",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-alien-i-only-have-eyes-for-you-t-shirt/-/A-85554452",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-ducky-bunny-stick-with-us-bffs-t-shirt/-/A-84035729",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-valentine-rex-cellent-t-shirt/-/A-85554572",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-squad-t-shirt/-/A-1001409929",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-4-ducky-and-bunny-easter-funday-t-shirt/-/A-91247771",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-buzz-in-space-t-shirt/-/A-86743782",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-i-m-buzz-lightyear-i-m-always-sure-t-shirt/-/A-86743502",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-rex-nervous-t-shirt/-/A-1001414919",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-halloween-alien-close-encounter-t-shirt/-/A-1001414474",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-christmas-alien-snow-globe-t-shirt/-/A-81883499",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-xl-01-spaceship-blueprints-t-shirt/-/A-86744223",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-christmas-bff-argyle-print-t-shirt/-/A-84867425",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-toy-story-easter-buzz-lightyear-and-aliens-marshmallow-bunny-army-ahoy-t-shirt/-/A-91247572",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lightyear-property-of-star-command-t-shirt/-/A-86743521",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Toy Story",
      filters: {
        brand: "Toy Story",
      },
    },
    {
      url: "https://www.target.com/p/transformers-optimus-prime-bumblebee-2-pack-t-shirts-toddler-to-big-kid/-/A-87198804",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-transformers-boy-s-autobot-decepticon-grid-kids-short-sleeve-t-shirt-black/-/A-93283899",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/transformers-bumblebee-optimus-prime-3-pack-graphic-t-shirts-yellow-blue-black/-/A-87233149",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-split-bot-logo-t-shirt/-/A-82149770",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952423",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952647",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952981",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952531",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952536",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952406",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952855",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952620",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952457",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952946",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952526",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952358",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952955",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952390",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952635",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952346",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952384",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952929",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952919",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952607",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boys-transformers-earth-spark-short-sleeve-graphic-t-shirt/-/A-1001952641",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-optimus-prime-80s-retro-t-shirt/-/A-87692700",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-optimus-prime-grid-t-shirt/-/A-92938585",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-bumblebee-5th-birthday-t-shirt/-/A-82150046",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-autobots-9-square-layout-t-shirt/-/A-92938425",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-distressed-optimus-prime-autobot-killer-t-shirt/-/A-92938462",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-optimus-prime-autobots-logo-t-shirt/-/A-88535942",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-autobot-santa-t-shirt/-/A-82150267",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-bumblebee-4th-birthday-t-shirt/-/A-82150079",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-transforming-optimus-prime-t-shirt/-/A-88535871",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-optimus-prime-retro-circle-t-shirt/-/A-87692639",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-autobots-logo-t-shirt/-/A-87692843",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-megatron-vs-optimus-prime-fight-panel-t-shirt/-/A-92938269",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-decepticon-santa-t-shirt/-/A-82150247",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-40-years-skids-panels-t-shirt/-/A-92937993",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-transforming-bumblebee-t-shirt/-/A-88535876",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-rise-of-the-beasts-team-logo-t-shirt/-/A-89222720",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-feast-mode-t-shirt/-/A-89581305",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-optimus-prime-roll-out-ugly-xmas-t-shirt/-/A-82149950",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-got-bot-t-shirt/-/A-88536359",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-bumblebee-bee-my-valentine-t-shirt/-/A-85563755",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-optimus-prime-roll-out-t-shirt/-/A-88536217",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-bumblebee-6th-birthday-t-shirt/-/A-82149483",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-bumblebee-badge-t-shirt/-/A-88536521",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-bumblebee-3rd-birthday-t-shirt/-/A-82150073",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-character-panels-t-shirt/-/A-88536006",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-rise-of-the-beasts-graffiti-poster-t-shirt/-/A-1001664263",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-war-for-cybertron-characters-t-shirt/-/A-82149856",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-rise-of-the-beasts-autobot-jungle-logo-t-shirt/-/A-89222766",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-autobots-graffiti-logo-t-shirt/-/A-82149537",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-rise-of-the-beasts-graffiti-poster-t-shirt/-/A-89222724",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-rise-of-the-beasts-optimus-prime-t-shirt/-/A-89222744",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-autobot-rusted-logo-t-shirt/-/A-82149786",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-soundwave-lightning-waves-t-shirt/-/A-82150157",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-periodic-table-of-transformers-t-shirt/-/A-86926585",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-optimus-roll-out-t-shirt/-/A-88535994",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-decepticon-graffiti-logo-t-shirt/-/A-82150130",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-autobots-retro-trio-t-shirt/-/A-87692984",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-rise-of-the-beasts-group-poster-t-shirt/-/A-89222697",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-anniversary-comic-logo-t-shirt/-/A-92938048",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-optimus-prime-wants-you-t-shirt/-/A-87692635",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-st-patrick-s-day-cloverfield-decepticon-logo-t-shirt/-/A-85872222",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-autobots-collage-t-shirt/-/A-92938332",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-autobots-character-panels-t-shirt/-/A-82149595",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-optimus-prime-autobots-leader-t-shirt/-/A-82149836",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-grimlock-saves-the-universe-t-shirt/-/A-87692629",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-megatron-decepticons-leader-t-shirt/-/A-82149876",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-rise-of-the-beasts-movie-logo-character-squares-t-shirt/-/A-89222807",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-optimus-prime-join-the-autobots-t-shirt/-/A-87692621",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-home-team-t-shirt/-/A-88536174",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-autobots-space-battle-logo-t-shirt/-/A-92938405",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-megatron-decepticon-logo-t-shirt/-/A-88536109",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-rise-of-the-beasts-optimus-prime-stack-logo-t-shirt/-/A-1001664258",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-optimus-prime-valentine-roll-out-t-shirt/-/A-85563766",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-bumblebee-autobots-logo-t-shirt/-/A-88536329",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-siege-poster-t-shirt/-/A-82149667",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-rise-of-the-beasts-face-squares-t-shirt/-/A-89222804",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-bumblebee-portrait-t-shirt/-/A-88536502",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-autobots-ready-to-roll-out-t-shirt/-/A-87692902",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-bumblebee-ugly-xmas-t-shirt/-/A-82150239",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-bumblebee-2nd-birthday-t-shirt/-/A-82150255",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-decepticon-characters-boxes-t-shirt/-/A-87692691",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-split-bot-neon-logo-t-shirt/-/A-82149776",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-this-is-my-bumblebee-costume-t-shirt/-/A-82374282",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-rise-of-the-beasts-optimus-prime-seek-adventure-t-shirt/-/A-89222780",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-be-fearless-t-shirt/-/A-88536565",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-be-fearless-badge-t-shirt/-/A-88536426",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-krunch-optimus-prime-t-shirt/-/A-92938435",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-mo-and-thrash-t-shirt/-/A-88536352",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-heroes-run-in-the-family-t-shirt/-/A-88536234",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-40-years-of-autobots-logo-t-shirt/-/A-92938014",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-earthspark-group-portrait-t-shirt/-/A-88536342",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-transformers-distressed-rolling-out-for-40-years-t-shirt/-/A-92937944",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Transformers",
      filters: {
        brand: "Transformers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-twister-american-patriotic-logo-t-shirt/-/A-92915276",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Twister",
      filters: {
        brand: "Twister",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-twister-spin-fall-repeat-t-shirt/-/A-92915318",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Twister",
      filters: {
        brand: "Twister",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-twister-dad-says-make-your-move-t-shirt/-/A-92914860",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Twister",
      filters: {
        brand: "Twister",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-twister-let-s-twist-t-shirt/-/A-92914959",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Twister",
      filters: {
        brand: "Twister",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-twister-but-first-twist-t-shirt/-/A-92915157",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Twister",
      filters: {
        brand: "Twister",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-twister-spin-to-win-t-shirt/-/A-92914649",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Twister",
      filters: {
        brand: "Twister",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-twister-don-t-get-it-twisted-t-shirt/-/A-92915361",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Twister",
      filters: {
        brand: "Twister",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-fist-inside-logo-graphic-t-shirt/-/A-1004766168",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-distressed-logo-graphic-t-shirt/-/A-1004765858",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-fist-inside-logo-graphic-t-shirt/-/A-1004766163",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-fist-inside-logo-graphic-t-shirt/-/A-1004765941",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-octagon-logo-graphic-t-shirt-blue-l/-/A-1004733932",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-distressed-fist-graphic-t-shirt-grey-s/-/A-1004736124",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-octagon-logo-graphic-t-shirt/-/A-1004766307",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-distressed-logo-graphic-t-shirt/-/A-1004765884",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-fist-inside-logo-graphic-t-shirt/-/A-1004765910",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-distressed-print-graphic-t-shirt/-/A-1004766014",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-fist-inside-logo-graphic-t-shirt/-/A-1004766083",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-distressed-logo-graphic-t-shirt/-/A-1004766092",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-no-248-two-title-fights-graphic-t-shirt/-/A-1004741445",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-international-fight-week-2017-graphic-t-shirt/-/A-1004741088",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/ufc-boys-hammer-fist-graphic-t-shirt/-/A-1004741013",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, UFC",
      filters: {
        brand: "UFC",
      },
    },
    {
      url: "https://www.target.com/p/sega-modern-sonic-the-hedgehog-youth-boys-royal-blue-graphic-tee/-/A-85353022",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, USA",
      filters: {
        brand: "USA",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-blue-boys-t-shirt/-/A-85352547",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, USA",
      filters: {
        brand: "USA",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-rising-emi-youth-black-crew-neck-long-sleeve-tee/-/A-94157283",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Ultraman",
      filters: {
        brand: "Ultraman",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-chibi-flying-ultraman-youth-charcoal-short-sleeve-crew-neck-tee/-/A-89244026",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Ultraman",
      filters: {
        brand: "Ultraman",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-fighting-a-monster-youth-red-short-sleeve-crew-neck-tee/-/A-89243958",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Ultraman",
      filters: {
        brand: "Ultraman",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-flying-chibi-ultraman-with-title-logo-youth-navy-blue-short-sleeve-crew-neck-tee/-/A-89243980",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Ultraman",
      filters: {
        brand: "Ultraman",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-portraits-youth-white-short-sleeve-crew-neck-tee/-/A-89243972",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Ultraman",
      filters: {
        brand: "Ultraman",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-red-character-silhouette-with-checkered-background-and-kanji-title-youth-white-short-sleeve-tee/-/A-89243995",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Ultraman",
      filters: {
        brand: "Ultraman",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-rising-ultraman-strike-pose-crew-neck-short-sleeve-boy-s-black-t-shirt/-/A-92986174",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Ultraman",
      filters: {
        brand: "Ultraman",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-rising-glowing-ultraman-crew-neck-short-sleeve-boy-s-black-t-shirt/-/A-92986165",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Ultraman",
      filters: {
        brand: "Ultraman",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-beam-stance-crew-neck-short-sleeve-boy-s-black-t-shirt/-/A-89243940",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Ultraman",
      filters: {
        brand: "Ultraman",
      },
    },
    {
      url: "https://www.target.com/p/ultraman-monochrome-hero-in-colored-panels-crew-neck-short-sleeve-boy-s-black-t-shirt/-/A-89243963",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Ultraman",
      filters: {
        brand: "Ultraman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-land-before-time-dinosaur-summer-splash-t-shirt/-/A-85088314",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Universal",
      filters: {
        brand: "Universal",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-land-before-time-dinosaur-squares-t-shirt/-/A-85088948",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Universal",
      filters: {
        brand: "Universal",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-universal-monsters-ugly-christmas-style-t-shirt/-/A-84868060",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Universal Studios Monsters",
      filters: {
        brand: "Universal Studios Monsters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-universal-monsters-christmas-creature-from-the-lagoon-creepy-string-lights-t-shirt/-/A-84868249",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Universal Studios Monsters",
      filters: {
        brand: "Universal Studios Monsters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-universal-monsters-christmas-creature-from-the-lagoon-creepy-t-shirt/-/A-84868055",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Universal Studios Monsters",
      filters: {
        brand: "Universal Studios Monsters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-wolf-man-halloween-ripped-chest-costume-t-shirt/-/A-87528905",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Universal Studios Monsters",
      filters: {
        brand: "Universal Studios Monsters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-creature-form-the-black-lagoon-halloween-scaly-chest-costume-t-shirt/-/A-87528898",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Universal Studios Monsters",
      filters: {
        brand: "Universal Studios Monsters",
      },
    },
    {
      url: "https://www.target.com/p/usagi-yojimbo-distressed-character-sketch-youth-black-crew-neck-long-sleeve-sweatshirt/-/A-1003810106",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Usagi Yojimbo",
      filters: {
        brand: "Usagi Yojimbo",
      },
    },
    {
      url: "https://www.target.com/p/usagi-yojimbo-usagi-poster-art-youth-black-crew-neck-long-sleeve-sweatshirt/-/A-1003810084",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Usagi Yojimbo",
      filters: {
        brand: "Usagi Yojimbo",
      },
    },
    {
      url: "https://www.target.com/p/usagi-yojimbo-dual-blades-sketch-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1003807239",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Usagi Yojimbo",
      filters: {
        brand: "Usagi Yojimbo",
      },
    },
    {
      url: "https://www.target.com/p/usagi-yojimbo-dual-blades-sketch-youth-white-crew-neck-short-sleeve-t-shirt/-/A-1003807319",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Usagi Yojimbo",
      filters: {
        brand: "Usagi Yojimbo",
      },
    },
    {
      url: "https://www.target.com/p/venum-kid-s-gorilla-jungle-t-shirt-sand-black/-/A-91723444",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Venum",
      filters: {
        brand: "Venum",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-voltron-defender-of-the-universe-space-walk-t-shirt/-/A-85153780",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Voltron",
      filters: {
        brand: "Voltron",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-voltron-defender-of-the-universe-defender-stance-t-shirt/-/A-82364674",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Voltron",
      filters: {
        brand: "Voltron",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-voltron-defender-of-the-universe-retro-robot-lions-t-shirt/-/A-84263584",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Voltron",
      filters: {
        brand: "Voltron",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-voltron-defender-of-the-universe-retro-oval-mouth-t-shirt/-/A-85153776",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Voltron",
      filters: {
        brand: "Voltron",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-voltron-legendary-defender-lions-team-panels-t-shirt/-/A-87530064",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Voltron",
      filters: {
        brand: "Voltron",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-voltron-defender-of-the-universe-retro-rainbow-lions-t-shirt/-/A-82364324",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Voltron",
      filters: {
        brand: "Voltron",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wall-e-journey-into-space-performance-tee/-/A-87573499",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WALL-E",
      filters: {
        brand: "WALL-E",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wall-e-valentine-s-day-her-wall-e-performance-tee/-/A-88323736",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WALL-E",
      filters: {
        brand: "WALL-E",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-wall-e-wall-e-eve-in-space/-/A-87573361",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WALL-E",
      filters: {
        brand: "WALL-E",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wall-e-eve-robot-triangle-t-shirt/-/A-1001542555",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WALL-E",
      filters: {
        brand: "WALL-E",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wall-e-new-axiom-poster-t-shirt/-/A-82360407",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WALL-E",
      filters: {
        brand: "WALL-E",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wall-e-easter-basket-fun-t-shirt/-/A-91248510",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WALL-E",
      filters: {
        brand: "WALL-E",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-john-cena-respect-earn-it-t-shirt/-/A-87894765",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-tropical-jey-uso-t-shirt/-/A-1003929587",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-hulk-hogan-american-flag-t-shirt/-/A-1001262853",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-we-the-ones-bloodline-t-shirt/-/A-1003929875",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-cody-rhodes-patriotic-pose-t-shirt/-/A-1001262686",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-cody-rhodes-finish-the-story-t-shirt/-/A-1003929595",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-cm-punk-t-shirt/-/A-1003929602",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-randy-orton-strikefirst-rko-t-shirt/-/A-87187723",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-bray-wyatt-collage-t-shirt/-/A-1003929578",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-boy-who-loves-wrestling-distressed-t-shirt/-/A-1001048389",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-elements-of-superstars-t-shirt/-/A-1001048420",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-john-cena-never-give-up-logo-t-shirt/-/A-1001262824",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-americana-logo-t-shirt/-/A-1001048448",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-rey-mysterio-poster-t-shirt/-/A-87895856",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-rhodes-skull-logo-t-shirt/-/A-1001411448",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-championship-belt-t-shirt/-/A-87189773",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-letter-logo-t-shirt/-/A-1003929943",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-the-rock-the-people-s-champ-t-shirt/-/A-1003929362",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-stone-cold-steve-austin-signature-photo-t-shirt/-/A-87188254",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-jake-the-snake-retro-t-shirt/-/A-87895367",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-john-cena-you-can-t-see-me-blue-t-shirt/-/A-1004414102",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-chrome-logo-t-shirt/-/A-87895483",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-bloodline-we-the-ones-t-shirt/-/A-1003929734",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-seth-freakin-rollins-gradient-t-shirt/-/A-1003929619",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-roman-portrait-t-shirt/-/A-1003929985",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-john-cena-the-champ-is-here-t-shirt/-/A-87894729",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-stone-cold-steve-austin-3-16-white-logo-t-shirt/-/A-87896017",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-the-undertaker-face-logo-t-shirt/-/A-1003930030",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-dominik-mysterio-purple-art-t-shirt/-/A-1003929965",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-monochrome-roman-portrait-t-shirt/-/A-1003929999",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-american-nightmare-cody-t-shirt/-/A-1003929325",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-hulk-hogan-hulkster-rules-t-shirt/-/A-87897275",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-john-cena-cenation-animated-t-shirt/-/A-87895655",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-finn-balor-portrait-t-shirt/-/A-87895414",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-hulk-hogan-vs-the-ultimate-warrior-poster-t-shirt/-/A-1003929353",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-ultimate-warrior-retro-poster-t-shirt/-/A-87188134",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-roman-reigns-poster-t-shirt/-/A-1001411879",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-roman-reigns-poster-t-shirt/-/A-87897851",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-stone-cold-steve-austin-silver-logo-t-shirt/-/A-87187021",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-ultimate-warrior-always-believe-electric-ropes-t-shirt/-/A-87188545",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-john-cena-never-give-up-blue-logo-t-shirt/-/A-87897587",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-the-rock-vs-steve-austin-t-shirt/-/A-1003929833",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-aj-styles-the-phenomenal-one-t-shirt/-/A-87896378",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-john-cena-the-champ-t-shirt/-/A-1001048490",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-the-bloodline-team-t-shirt/-/A-1003929608",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-retro-wrestlers-triangle-t-shirt/-/A-1001048397",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-austin-3-16-t-shirt/-/A-87187914",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-irish-wrestlers-t-shirt/-/A-90779684",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-new-day-rocks-t-shirt/-/A-87895186",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-rock-around-the-christmas-tree-t-shirt/-/A-1003929312",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-ripley-black-and-white-photo-t-shirt/-/A-87898782",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-elements-of-superstars-t-shirt/-/A-1001048437",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-wrestlemania-gold-shiny-logo-t-shirt/-/A-87896559",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-stone-cold-steve-austin-3-16-collage-t-shirt/-/A-87898180",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-team-angle-t-shirt/-/A-1004382304",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-stone-cold-steve-austin-black-and-white-photo-t-shirt/-/A-87189506",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-razor-ramon-t-shirt/-/A-87188059",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-stone-cold-steve-austin-3-16-animated-t-shirt/-/A-87189524",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-drew-mcintyre-sword-pose-t-shirt/-/A-1003929573",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-undertaker-flames-t-shirt/-/A-87896628",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-new-day-unicorn-animated-t-shirt/-/A-87899872",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-undertaker-purple-flames-t-shirt/-/A-87897618",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-rey-mysterio-roman-reigns-and-bobby-lashley-t-shirt/-/A-1001048481",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-undertaker-purple-lightning-logo-t-shirt/-/A-87897394",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-stone-cold-steve-austin-3-16-shattered-glass-t-shirt/-/A-87898184",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-shawn-michaels-vs-stone-cold-march-1998-t-shirt/-/A-1003929794",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-boy-who-loves-wrestling-t-shirt/-/A-1001048474",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-deadman-forever-undertaker-t-shirt/-/A-1003929320",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-wrestlemania-logo-t-shirt/-/A-87188094",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-john-cena-you-can-t-see-me-t-shirt/-/A-87187483",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-raw-is-war-t-shirt/-/A-87187579",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-razor-ramon-comic-t-shirt/-/A-87899179",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-steve-austin-cause-mom-said-so-t-shirt/-/A-1001262703",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-new-world-order-logo-t-shirt/-/A-87188587",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-neon-logo-2000-t-shirt/-/A-1003929826",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-boy-who-loves-wrestling-t-shirt/-/A-1001262800",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-the-rock-electric-bull-logo-t-shirt/-/A-87898986",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-the-rock-hey-jabroni-t-shirt/-/A-87898910",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-world-heavyweight-champion-logo-t-shirt/-/A-87188297",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-this-is-my-brutality-t-shirt/-/A-1003929880",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-boy-who-loves-wrestling-distressed-t-shirt/-/A-1001262771",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-ultimate-warrior-retro-logo-t-shirt/-/A-87187687",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-hitman-bret-hart-t-shirt/-/A-87187231",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-team-rock-t-shirt/-/A-1001411760",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-hot-rod-roddy-piper-t-shirt/-/A-87187629",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-stone-cold-steve-austin-poster-t-shirt/-/A-87187056",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-eddie-guerrero-poster-t-shirt/-/A-87897263",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-austin-3-16-shattered-logo-t-shirt/-/A-87188797",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wwe-the-hart-foundation-t-shirt/-/A-87187660",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-triple-h-the-game-logo-t-shirt/-/A-1003930065",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-new-world-order-t-shirt/-/A-1003929709",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-gold-bianca-belair-t-shirt/-/A-1004407108",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-mcintyre-dragon-t-shirt/-/A-1003929960",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-bell-logo-t-shirt/-/A-1003929799",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-the-headbangers-t-shirt/-/A-1003929633",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/boys-wwe-iconic-austin-3-16-t-shirt/-/A-1003930025",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, WWE",
      filters: {
        brand: "WWE",
      },
    },
    {
      url: "https://www.target.com/p/warner-bros-justice-league-robin-cosplay-t-shirt-and-cape-toddler-to-big-kid/-/A-93890851",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Warner Bros.",
      filters: {
        brand: "Warner Bros.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-we-bare-bears-ice-bear-will-take-care-of-it-t-shirt/-/A-82362997",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, We Bare Bears",
      filters: {
        brand: "We Bare Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-we-bare-bears-here-for-shenanigans-t-shirt/-/A-90779375",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, We Bare Bears",
      filters: {
        brand: "We Bare Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-dance-moves-t-shirt/-/A-89879664",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-birthday-yes-happy-never-t-shirt/-/A-89879704",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-the-addams-family-card-t-shirt/-/A-89880136",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-black-and-white-dance-scene-t-shirt/-/A-88325100",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-we-wear-black-portrait-t-shirt/-/A-89879710",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-iconic-scenes-t-shirt/-/A-88325254",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-dance-scene-logo-t-shirt/-/A-89879719",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-nightshade-society-distressed-logo-t-shirt/-/A-89879996",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-small-nevermore-crest-t-shirt/-/A-88325081",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-thing-very-hands-on-t-shirt/-/A-88325313",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-thing-snap-twice-t-shirt/-/A-88325397",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-character-poster-t-shirt/-/A-89879900",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-halloween-haunted-house-t-shirt/-/A-89879819",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-always-an-addams-t-shirt/-/A-89879786",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-i-m-allergic-to-color-skulls-t-shirt/-/A-88325370",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-thing-logo-t-shirt/-/A-89880058",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-dance-scene-t-shirt/-/A-88325149",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-i-m-not-weird-everyone-else-is-t-shirt/-/A-89880006",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-raven-logo-t-shirt/-/A-89880459",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-black-is-my-happy-color-silhouette-t-shirt/-/A-89880201",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-simple-logo-t-shirt/-/A-89880285",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-nevermore-portrait-t-shirt/-/A-89880504",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-a-little-ray-of-jet-black-t-shirt/-/A-88325484",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-the-most-interesting-plants-grow-in-the-shade-photo-t-shirt/-/A-88325488",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-are-you-mansplaining-my-power-t-shirt/-/A-88325685",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-small-nevermore-crest-black-and-white-t-shirt/-/A-88325420",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-the-most-interesting-plants-grow-in-the-shade-t-shirt/-/A-88325590",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-fangs-furs-sirens-stoners-t-shirt/-/A-88325822",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-we-all-have-a-dark-side-t-shirt/-/A-89879903",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-darkness-my-old-friend-t-shirt/-/A-89880259",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-nevermore-academy-crest-t-shirt/-/A-89880141",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-nightshades-ravens-t-shirt/-/A-89879740",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-solitude-suits-me-portrait-t-shirt/-/A-89879840",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-we-prefer-kooky-t-shirt/-/A-89880364",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-weathervane-cafe-logo-t-shirt/-/A-88325765",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-give-me-a-hand-t-shirt/-/A-89880338",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-wwwd-what-would-wednesday-do-t-shirt/-/A-88325179",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wednesday-floral-portrait-t-shirt/-/A-89879707",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wednesday Series",
      filters: {
        brand: "Wednesday Series",
      },
    },
    {
      url: "https://www.target.com/p/where-the-wild-things-are-max-leaves-background-youth-charcoal-crew-neck-short-sleeve-t-shirt/-/A-1004342868",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Where the Wild Things Are",
      filters: {
        brand: "Where the Wild Things Are",
      },
    },
    {
      url: "https://www.target.com/p/where-the-wild-things-are-monsters-king-max-boy-s-navy-crew-neck-short-sleeve-t-shirt/-/A-93890248",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Where the Wild Things Are",
      filters: {
        brand: "Where the Wild Things Are",
      },
    },
    {
      url: "https://www.target.com/p/where-the-wild-things-are-monster-parts-grid-boy-s-white-crew-neck-short-sleeve-t-shirt/-/A-93890233",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Where the Wild Things Are",
      filters: {
        brand: "Where the Wild Things Are",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-where-s-waldo-retro-character-circle-t-shirt/-/A-85155775",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Where's Waldo?",
      filters: {
        brand: "Where's Waldo?",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-where-s-waldo-hide-and-seek-champion-t-shirt/-/A-85088642",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Where's Waldo?",
      filters: {
        brand: "Where's Waldo?",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wicked-elphaba-silhouette-frame-t-shirt/-/A-93969523",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wicked",
      filters: {
        brand: "Wicked",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wicked-official-logo-t-shirt/-/A-93969498",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wicked",
      filters: {
        brand: "Wicked",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wicked-elphaba-stars-t-shirt/-/A-1001941691",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wicked",
      filters: {
        brand: "Wicked",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wicked-defy-gravity-witch-hat-t-shirt/-/A-93969380",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wicked",
      filters: {
        brand: "Wicked",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wicked-elphaba-defy-gravity-t-shirt/-/A-1001937467",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wicked",
      filters: {
        brand: "Wicked",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-kanga-and-roo-i-love-mom-t-shirt/-/A-88789474",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-bear-big-face-t-shirt/-/A-85752880",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-retro-character-panels-t-shirt/-/A-85753704",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-eeyore-face-portrait-t-shirt/-/A-85645899",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-tigger-pocket-sketch-performance-tee/-/A-85752960",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-rainy-watercolor-eeyore-performance-tee/-/A-85752753",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-tigger-big-face-t-shirt/-/A-85753349",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-my-aunt-thinks-i-m-sweet-t-shirt/-/A-89577343",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-eeyore-monday-mood-performance-tee/-/A-85753798",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-sort-of-attached-t-shirt/-/A-85753049",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-beary-sleepy-t-shirt/-/A-89577490",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-yellow-white-and-blue-script-t-shirt/-/A-85753781",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-best-friends-performance-tee/-/A-85753839",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-pumpkin-tigger-t-shirt/-/A-87257261",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-handstand-tigger-t-shirt/-/A-85753496",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-it-s-my-birthday-t-shirt/-/A-89404858",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-we-ll-be-friends-forever-piglet-t-shirt/-/A-85563419",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-eeyore-not-a-morning-person-t-shirt/-/A-85645984",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-piglet-tower-of-honey-jars-performance-tee/-/A-85645915",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-sleepy-in-the-night-sky-t-shirt/-/A-89577596",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-eeyore-pocket-sketch-t-shirt/-/A-85753205",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-red-white-and-blue-tigger-t-shirt/-/A-85763956",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-star-spangled-eeyore-t-shirt/-/A-85764021",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-never-stop-dreaming-t-shirt/-/A-85752998",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-santa-eeyore-t-shirt/-/A-85763969",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-making-wishes-t-shirt/-/A-89577746",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-tigger-colorful-script-t-shirt/-/A-85753051",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-eeyore-7th-birthday-t-shirt/-/A-89579029",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-eeyore-8th-birthday-t-shirt/-/A-89578975",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-eeyore-5th-birthday-t-shirt/-/A-89578983",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-scene-panels-t-shirt/-/A-85754075",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-eeyore-6th-birthday-t-shirt/-/A-89579015",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-winnie-the-pooh-little-dreamer-t-shirt/-/A-89577420",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Winnie the Pooh",
      filters: {
        brand: "Winnie the Pooh",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-slytherin-tshirt-harry-potter-graphic-tee/-/A-84707330",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-gryffindor-shirt-boys-graphic-tee-gryffindor-kids-clothing/-/A-84707312",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/youth-harry-potter-hogwarts-house-letters-graphic-w-logo-screen-print-black-hoodie/-/A-84810498",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-dobby-snap-boy-s-black-long-sleeve-shirt/-/A-85731668",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-house-shields-boy-s-black-long-sleeve-shirt/-/A-85731722",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-houses-diamond-screen-print-youth-boys-heather-grey-long-sleeve-shirt/-/A-84811035",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-chibi-characters-blue-boys-t-shirt-graphic-tee/-/A-83709802",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-wizard-in-training-youth-navy-blue-graphic-tee/-/A-85730358",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-lion-youth-blue-graphic-tee/-/A-84942199",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-wizard-in-training-graphic-tee-boys-t-shirt/-/A-84707159",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-chibi-characters-group-youth-red-graphic-tee/-/A-84941511",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-hogwarts-houses-and-crest-graphic-tee/-/A-84707056",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-houses-youth-royal-blue-graphic-tee/-/A-84942247",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-lion-youth-charcoal-graphic-tee/-/A-84942047",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-wizard-in-training-hogwarts-crest-boy-s-navy-blue-tee/-/A-84706940",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-express-boy-s-red-tee/-/A-84707308",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-ravenclaw-eagle-emblem-boy-s-navy-blue-tee/-/A-85353784",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-pride-boy-s-red-tee/-/A-85352292",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-quidditch-hogwarts-youth-boys-navy-t-shirt/-/A-85730603",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-mascot-art-youth-athletic-heather-t-shirt/-/A-86218505",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-quidditch-gryffindor-crest-boy-s-navy-t-shirt/-/A-85783171",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-house-mascots-boy-s-navy-blue-tshirt/-/A-86383236",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-i-d-rather-be-at-hogwarts-boy-s-heather-gray-t-shirt/-/A-85352426",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-houses-boy-s-royal-blue-t-shirt/-/A-85451533",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-houses-diamond-boy-s-athletic-heather-t-shirt/-/A-85352588",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/youth-harry-potter-shirt-short-sleeve-youth-gryffindor-shirt/-/A-84707035",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/mischief-managed-youth-short-sleeve-shirt/-/A-84707226",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-ravenclaw-quidditch-boy-s-royal-blue-t-shirt/-/A-84707327",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-mascot-shield-youth-navy-t-shirt/-/A-86218523",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-hogwarts-legacy-the-graphorn-logo-t-shirt/-/A-88404027",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-quidditch-boy-s-red-t-shirt/-/A-84707323",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-hogwarts-legacy-golden-snidget-logo-t-shirt/-/A-88403879",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-lion-and-sword-boy-s-red-tshirt/-/A-86383571",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-crest-mascots-youth-royal-blue-t-shirt/-/A-86382781",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-wizard-in-training-boy-s-navy-blue-t-shirt/-/A-85352500",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-quidditch-crest-navy-boy-s-short-sleeve-t-shirt/-/A-85450615",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-crest-boy-s-navy-t-shirt/-/A-85729339",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-symbol-gray-boy-s-short-sleeve-t-shirt/-/A-85450628",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/fantastic-beasts-newt-s-case-chibi-art-boy-s-charcoal-t-shirt/-/A-86449054",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-crest-boy-s-red-t-shirt-medium/-/A-84726317",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-g-is-for-gryffindor-youth-navy-t-shirt/-/A-86382748",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-hogwarts-legacy-live-the-unwritten-t-shirt/-/A-88403976",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-quidditch-confetti-blue-boy-s-short-sleeve-t-shirt/-/A-85450960",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-mascot-art-youth-charcoal-t-shirt/-/A-86383385",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-hogwarts-legacy-small-art-deco-logo-t-shirt/-/A-88403910",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-crest-boy-s-red-t-shirt-xl/-/A-84726321",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-crest-boy-s-red-t-shirt-small/-/A-84726316",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-crest-boy-s-red-t-shirt-xs/-/A-84726314",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-hogwarts-legacy-art-deco-logo-t-shirt/-/A-88403956",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/fantastic-beasts-you-re-one-of-us-now-boy-s-charcoal-t-shirt/-/A-86448902",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wizarding World Harry Potter",
      filters: {
        brand: "Wizarding World Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boys-wonder-woman-strong-usa-shield-t-shirt/-/A-1004374120",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wonder Woman",
      filters: {
        brand: "Wonder Woman",
      },
    },
    {
      url: "https://www.target.com/p/boys-wonder-woman-1984-logo-wings-t-shirt/-/A-1004374156",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wonder Woman",
      filters: {
        brand: "Wonder Woman",
      },
    },
    {
      url: "https://www.target.com/p/boys-wonder-woman-4th-of-july-red-white-and-blue-logo-t-shirt/-/A-1004374298",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wonder Woman",
      filters: {
        brand: "Wonder Woman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wonka-noodle-portrait-t-shirt/-/A-90465353",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wonka",
      filters: {
        brand: "Wonka",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wonka-chocolates-t-shirt/-/A-90464663",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wonka",
      filters: {
        brand: "Wonka",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wonka-fickelgruber-chocolate-t-shirt/-/A-90465301",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Wonka",
      filters: {
        brand: "Wonka",
      },
    },
    {
      url: "https://www.target.com/p/boys-woody-the-woodpecker-yesiree-that-s-me-circle-short-sleeve-graphic-t-shirt/-/A-92722559",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Woody Woodpecker",
      filters: {
        brand: "Woody Woodpecker",
      },
    },
    {
      url: "https://www.target.com/p/boys-woody-the-woodpecker-busy-doing-nothing-short-sleeve-graphic-t-shirt/-/A-92722707",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Woody Woodpecker",
      filters: {
        brand: "Woody Woodpecker",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-yahtzee-how-i-roll-t-shirt/-/A-92914572",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yahtzee",
      filters: {
        brand: "Yahtzee",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-yahtzee-roll-with-it-t-shirt/-/A-92914600",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yahtzee",
      filters: {
        brand: "Yahtzee",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-yahtzee-retro-how-i-roll-t-shirt/-/A-92914539",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yahtzee",
      filters: {
        brand: "Yahtzee",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-blue-eyes-white-dragon-crew-neck-long-sleeve-black-fleece-youth-tee/-/A-88756385",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-main-characters-youth-royal-blue-graphic-tee/-/A-84942352",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-main-characters-youth-navy-blue-graphic-tee/-/A-84810969",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/yami-yugi-and-his-cards-yu-gi-oh-character-boys-navy-blue-graphic-tee/-/A-84938894",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-main-characters-youth-white-graphic-tee/-/A-84810970",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/kaiba-yu-gi-oh-anime-cartoon-youth-boys-black-graphic-tee-shirt/-/A-85353259",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-shirt-youth-boys-graphic-tee-anime-apparel/-/A-84705895",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-main-characters-youth-black-graphic-tee/-/A-84809868",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-main-characters-youth-charcoal-graphic-tee/-/A-84809564",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/yugioh-main-characters-youth-boys-graphic-tees-t-shirt/-/A-84013234",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-seto-kaiba-and-blue-eyes-white-dragon-youth-white-short-sleeve-crew-neck-tee/-/A-88562032",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/yugioh-anime-poster-youth-navy-t-shirt/-/A-85783041",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-dark-magician-collegiate-style-crew-neck-short-sleeve-boys-white-t-shirt/-/A-88868177",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-yami-yugi-duel-monsters-crew-neck-short-sleeve-boys-black-t-shirt/-/A-88868137",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/yu-gi-oh-yami-yugi-and-exodia-crew-neck-short-sleeve-boys-black-t-shirt/-/A-88868099",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, Yu-Gi-Oh!",
      filters: {
        brand: "Yu-Gi-Oh!",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-short-sleeve-organic-cotton-graphic-tee-gradient-white-and-beige/-/A-1003635364",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-short-sleeve-organic-cotton-graphic-tee-gradient-pale-blue-and-dark-old-rose/-/A-1003635412",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-organic-cotton-graphic-tee-black-and-red-shoe-3-years/-/A-1003635265",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-short-sleeve-organic-cotton-graphic-tee-sage-and-multi-4-years/-/A-1003032377",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-organic-cotton-graphic-tee-black-and-multicolored-dino/-/A-1003844614",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-organic-cotton-graphic-tee-sage-and-multi/-/A-1003844776",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-short-sleeve-graphic-tee-blue-and-ramen/-/A-1003844710",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-organic-cotton-graphic-tee-light-gray-shimmer/-/A-1003844735",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-organic-cotton-graphic-tee-gray-black-and-white/-/A-1003844619",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-short-sleeve-organic-cotton-graphic-tee-teal-and-dark-old-rose/-/A-1003635385",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-short-sleeve-button-down-shirt-black-and-beige-plaid/-/A-1003014775",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-printed-organic-cotton-tee-orange-sunset/-/A-1003844801",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-organic-cotton-tee-dark-gray-and-multicolored-vespa/-/A-1003844749",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-short-sleeve-rashguard-black-and-multicolored-crocodiles-11-12-years/-/A-1003032336",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-printed-athletic-top-blue-and-black/-/A-1004053133",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/deux-par-deux-boy-short-sleeve-rashguard-light-blue-and-black/-/A-1004084274",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, deux par deux",
      filters: {
        brand: "deux par deux",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-halloween-donutella-t-shirt/-/A-89922402",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-adios-portrait-t-shirt/-/A-89922369",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-zombie-unicorno-milo-t-shirt/-/A-89922548",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-christmas-naughty-or-nice-t-shirt/-/A-90163426",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-christmas-cozy-season-t-shirt/-/A-90163505",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-adios-christmas-presents-t-shirt/-/A-90163782",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-halloween-caramella-and-friends-t-shirt/-/A-89922695",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-skeleton-sandy-t-shirt/-/A-89922560",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-halloween-trick-or-treat-couple-t-shirt/-/A-89922395",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-donutino-and-donutina-present-t-shirt/-/A-90163850",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-trick-or-treat-caramella-t-shirt/-/A-89922690",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-holiday-unicornos-t-shirt/-/A-90163413",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-sprucy-christmas-presents-t-shirt/-/A-90163586",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-happy-halloween-cactus-rocker-t-shirt/-/A-89922589",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-christmas-jingles-t-shirt/-/A-90163726",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-merry-christmas-donutella-t-shirt/-/A-90163971",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-christmas-group-t-shirt/-/A-90163398",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-christmas-presents-unicorno-t-shirt/-/A-90163892",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-autumn-and-snoop-kitty-fall-is-in-the-air-t-shirt/-/A-89922422",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-halloween-jack-o-lantern-sandy-t-shirt/-/A-89922432",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-tokidoki-autumn-palette-t-shirt/-/A-89922306",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tangled, Tops, tokidoki",
      filters: {
        brand: "tokidoki",
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
