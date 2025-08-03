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
      url: "https://www.target.com/p/youth-funny-t-shirts-problem-child-sarcastic-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003093725",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-powered-by-macaroni-and-cheese-sarcastic-food-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004290295",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-cuter-version-of-dad-tshirt-funny-son-family-boy-graphic-novelty-tee-crazy-dog-youth-t-shirt/-/A-93855435",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-powered-by-butter-noodles-sarcastic-food-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003095243",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-usa-popsicle-sarcastic-fourth-of-july-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004288215",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-angry-but-up-for-ice-cream-sarcastic-dessert-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt-black-xl/-/A-1004289584",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-not-a-fan-of-baths-sarcastic-kitten-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1001527344",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-grandma-told-me-i-could-sarcastic-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003093311",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-father-and-son-baseball-partners-for-life-sarcastic-fathers-day-graphic-tee-for-kids-crazy-dog-youth-t-shirt-red-xl/-/A-1004289829",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-father-and-son-hockey-partners-for-life-sarcastic-fathers-day-graphic-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004289654",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-auntie-told-me-i-could-sarcastic-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003093319",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-future-lawyer-sarcastic-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004289990",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-future-teacher-sarcastic-pencil-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004289336",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-future-doctor-sarcastic-stethoscope-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004289916",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-no-mistletoe-needed-tshirt-funny-christmas-kiss-graphic-novelty-tee-for-children-crazy-dog-youth-t-shirt/-/A-93983092",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-future-police-officer-sarcastic-cop-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004289943",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-hulk-mode-on-t-shirt-funny-nerdy-tee-graphic-top-for-kids-hilarious-crazy-dog-youth-t-shirt/-/A-94061593",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-please-be-patient-im-9-years-old-sarcastic-graphic-novelty-birthday-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003094879",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-please-be-patient-im-8-years-old-sarcastic-graphic-novelty-birthday-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003095921",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-please-be-patient-im-7-years-old-sarcastic-graphic-novelty-birthday-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003095991",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-please-be-patient-im-5-years-old-sarcastic-graphic-novelty-birthday-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003096034",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-please-be-patient-im-6-years-old-sarcastic-graphic-novelty-birthday-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003095926",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-eat-sleep-fish-t-shirt-funny-fishing-tee-cool-graphic-fun-crazy-for-kids-crazy-dog-youth-t-shirt/-/A-94059552",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-explaining-to-my-parents-that-i-cant-pause-an-online-game-t-shirt-funny-video-gamer-equations-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94034323",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-camping-is-in-tents-t-shirt-funny-intense-outdoors-hiking-camp-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1000012713",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/kids-shark-hierarchy-t-shirt-funny-youth-sharks-shirt-i-love-sharks-tee-crazy-dog-youth-t-shirt/-/A-94059719",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-whats-snack-a-lackin-t-shirt-funny-snacktime-treat-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94040484",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-dill-with-it-t-shirt-funny-pickles-deal-with-it-vegetable-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94026414",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-the-chemistry-of-bacon-t-shirt-funny-periodic-table-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94059223",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-fitness-tacos-t-shirt-funny-workout-mexican-food-lovers-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94030480",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-kids-table-club-tshirt-funny-thanksgiving-dinner-turkey-hand-tee-crazy-dog-youth-t-shirt/-/A-93903269",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-my-dog-thinks-im-cool-t-shirt-funny-cute-puppy-pet-lover-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94030287",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-gourmet-boogers-t-shirt-funny-nose-picking-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94037574",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ive-been-goodish-this-year-tshirt-funny-christmas-holiday-party-tee-crazy-dog-youth-t-shirt/-/A-93741154",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-the-nice-ish-elf-t-shirt-funny-good-behavior-xmas-elves-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94033691",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ask-me-about-my-lion-flip-t-shirt-funny-crazy-cat-flipover-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93741016",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-i-like-dogs-and-maybe-3-people-t-shirt-funny-pet-puppy-animal-lover-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94040512",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-cutest-turkey-at-the-table-t-shirt-funny-cute-thanksgiving-dinner-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94033749",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-gingerbread-house-construction-crew-t-shirt-funny-xmas-treat-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94039895",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-nearly-feral-t-shirt-funny-untamed-wild-animal-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94027540",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-of-course-i-talk-to-myself-sometimes-i-need-expert-advice-t-shirt-funny-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94036185",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-tree-rex-tshirt-funny-christmas-t-rex-dinosaur-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93772652",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ive-got-your-back-t-shirt-funny-halloween-skeleton-spine-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93739300",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-stud-muffins-baked-goods-t-shirt-funny-bakery-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94036048",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-zombies-eat-brains-don-t-worry-you-re-safe-t-shirt-funny-dumb-undead-insult-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94033665",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-bacon-chemistry-t-shirt-funny-science-preiodic-table-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93740552",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ask-me-about-my-penguin-tshirt-funny-flip-up-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93740669",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-thats-a-horrible-idea-what-time-t-shirt-funny-mischief-trouble-maker-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94034368",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-pumpkin-pi-t-shirt-funny-math-shirt-pie-tee-thanksgiving-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93852574",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-im-why-we-cant-have-nice-things-t-shirt-funny-trouble-maker-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1000012729",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ask-me-about-my-goat-funny-animal-flip-shirt-cool-costume-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93740903",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-whats-snack-a-lackin-t-shirt-funny-snacktime-treat-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94040484",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-i-came-i-saw-i-forgot-what-i-was-doing-t-shirt-funny-short-term-memory-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1000012707",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-stud-muffins-baked-goods-t-shirt-funny-bakery-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94036048",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ask-me-about-my-trex-t-shirt-funny-cool-dinosaur-flip-graphic-print-kids-crazy-dog-youth-t-shirt/-/A-94234539",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-eat-sleep-game-repeat-t-shirt-funny-nerdy-gamer-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94030484",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ive-got-your-back-t-shirt-funny-halloween-skeleton-spine-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93739300",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-professional-patience-testing-co-t-shirt-funny-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1000014924",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-cutest-turkey-at-the-table-t-shirt-funny-cute-thanksgiving-dinner-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94033749",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-coolest-kid-t-shirt-funny-cute-ice-cold-popsicle-sweet-treat-tee-for-young-kids-crazy-dog-youth-t-shirt/-/A-94035459",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-iron-science-t-shirt-cool-shirts-novelty-kids-funny-t-shirt-graphic-design-crazy-dog-youth-t-shirt/-/A-94060115",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-glowing-ghost-glow-in-the-dark-tshirt-cool-halloween-costume-tee-crazy-dog-youth-t-shirt/-/A-93548518",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-never-tired-t-shirt-funny-young-endless-energy-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1000007729",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-i-like-dogs-and-maybe-3-people-t-shirt-funny-pet-puppy-animal-lover-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94040512",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-5-out-of-4-people-struggle-with-math-t-shirt-funny-nerdy-school-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94034511",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-oldest-child-i-make-the-rules-t-shirt-funny-sarcastic-sibling-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1000192277",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-im-here-youre-welcome-t-shirt-funny-ego-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94030476",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-dont-grow-up-its-a-trap-t-shirt-funny-young-childhood-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94034517",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-name-the-triangles-funny-math-t-shirts-sarcasm-novelty-i-love-math-tee-humor-crazy-dog-youth-t-shirt/-/A-93740969",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ask-me-about-my-raptor-flip-t-shirt-dinosaur-funny-kids-cool-tee-crazy-dog-youth-t-shirt/-/A-93854498",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-tree-rex-tshirt-funny-christmas-t-rex-dinosaur-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93772652",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-coolest-kid-t-shirt-funny-cute-ice-cold-popsicle-sweet-treat-tee-for-young-kids-crazy-dog-youth-t-shirt/-/A-94035459",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-thats-a-horrible-idea-what-time-t-shirt-funny-mischief-trouble-maker-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94034368",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-candy-taste-tester-t-shirt-funny-halloween-trick-or-treat-lovers-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94029133",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-kids-table-club-tshirt-funny-thanksgiving-dinner-turkey-hand-tee-crazy-dog-youth-t-shirt/-/A-93903269",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ask-me-about-my-giraffe-t-shirt-animal-zoo-flip-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93740627",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-i-love-it-when-my-mom-lets-me-play-video-games-sarcastic-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003096654",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-another-fine-day-ruined-by-responsibility-t-shirt-funny-adulting-obligation-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94035987",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-birthday-dude-all-day-long-t-shirt-funny-awesome-celebration-party-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94031450",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-expert-tree-climber-t-shirt-funny-adventurous-exploring-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94037671",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-dont-grow-up-its-a-trap-t-shirt-funny-young-childhood-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94034517",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-have-a-magical-christmas-tshirt-funny-unicorn-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93773904",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-innocent-until-proven-guilty-t-shirt-funny-court-defense-bad-behavior-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94037554",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-of-course-i-talk-to-myself-sometimes-i-need-expert-advice-t-shirt-funny-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94036185",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-the-naughty-elf-t-shirt-funny-bad-behavior-xmas-elves-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94040197",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ask-me-about-squatch-t-shirt-funny-sarcastic-bigfoot-flip-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93799404",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-you-cant-scare-me-i-have-a-crazy-mom-t-shirt-funny-insane-mother-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94034773",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-brother-bear-t-shirt-cute-funny-family-sibling-tee-cool-for-kids-crazy-dog-youth-t-shirt/-/A-93771988",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-eh-team-canada-t-shirt-funny-canadian-shirts-kids-novelty-t-shirt-hilarious-crazy-dog-youth-t-shirt/-/A-94057383",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-santa-jaws-funny-holiday-shark-christmas-cool-novelty-t-shirt-for-kids-crazy-dog-youth-t-shirt/-/A-93740477",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-stand-back-science-funny-shirts-cool-humorous-nerdy-t-shirts-for-geeks-crazy-dog-youth-t-shirt/-/A-94060407",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-i-dont-have-the-time-or-the-crayons-to-explain-this-to-you-t-shirt-funny-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93980636",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ask-me-about-my-wolf-awesome-flip-shirt-for-kids-crazy-dog-youth-t-shirt/-/A-93740385",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-dont-make-me-call-grandma-t-shirt-funny-saying-hilarious-shirt-for-kids-crazy-dog-youth-t-shirt/-/A-93897596",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-worlds-okayest-brother-shirt-funny-t-shirt-big-brother-novelty-gift-fun-crazy-dog-youth-t-shirt/-/A-94057202",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ask-me-why-im-jawsome-cool-movie-great-white-shark-shirt-costume-for-kids-crazy-dog-youth-t-shirt/-/A-93741195",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-save-the-narwhals-tshirt-funny-narwhal-unicorn-shirt-for-kids-crazy-dog-youth-t-shirt/-/A-94061191",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-if-zombies-chase-us-i-m-tripping-you-funny-halloween-tshirt-for-kids-crazy-dog-youth-t-shirt/-/A-94058961",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ask-me-why-i-like-full-moons-awesome-werewolf-t-shirt-costume-for-kids-crazy-dog-youth-t-shirt/-/A-93740826",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ask-me-about-jaws-cool-movie-flip-shirt-for-kids-crazy-dog-youth-t-shirt/-/A-93741000",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-pumpkin-face-t-shirt-funny-halloween-shirt-for-kids-crazy-dog-youth-t-shirt/-/A-94056710",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-little-bear-cute-gift-for-children-brother-funny-novelty-family-t-shirt-crazy-dog-youth-t-shirt/-/A-93756604",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-dont-make-me-call-grandma-t-shirt-funny-saying-hilarious-shirt-for-kids-crazy-dog-youth-t-shirt/-/A-93897596",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-gamer-skull-sarcastic-video-games-graphic-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94060206",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-rockin-the-kid-life-sarcastic-graphic-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1000014710",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-it-was-grandpas-idea-sarcastic-graphic-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94062375",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-awesome-like-my-dad-sarcastic-fathers-lovers-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1001525358",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-awesome-like-my-grandpa-sarcastic-grandfather-lovers-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1001526859",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-official-christmas-cookie-tester-sarcastic-xmas-graphic-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1001525823",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-all-wound-up-sarcastic-toy-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94062278",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-santas-little-helper-funny-christmas-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1000083935",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-awesome-like-my-mom-sarcastic-mothers-lovers-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1001526729",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-dear-santa-i-regret-nothing-sarcastic-christmas-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1001525738",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-side-hustle-sarcastic-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004288906",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-sarcastic-fourth-of-july-popsicle-graphic-novetly-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004287840",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/cousin-squad-youth-t-shirt-funny-family-reunion-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1000014676",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-the-cool-cousin-club-t-shirt-funny-extended-family-cousins-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94060807",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-proud-supporter-of-snowdays-sarcastic-winter-season-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1001525558",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/kids-i-love-sharks-t-shirt-classic-youth-shark-bite-shirt-shark-tee-crazy-dog-youth-t-shirt/-/A-94063720",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-ask-me-why-i-m-lazy-t-shirt-funny-flipup-zoo-animal-sloth-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93741094",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-t-shirts-i-clover-shenanigans-funny-st-patricks-day-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94029429",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-brother-squad-t-shirt-funny-awesome-bro-sibling-joke-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94063784",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-veggies-one-star-sarcastic-vegetables-food-review-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94235103",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-proud-supporter-of-snowdays-sarcastic-winter-season-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1001525558",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-on-my-moms-last-nerve-sarcastic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1001526164",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-on-my-dads-last-nerve-sarcastic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1001525649",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/find-x-youth-t-shirt-funny-variable-student-classroom-math-teacher-tee-for-kids-crazy-dog-youth-t-shirt/-/A-94057206",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-heart-throb-t-shirt-cute-valentines-day-t-shirts-for-kids-crazy-dog-youth-t-shirt/-/A-94039347",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-santa-jaws-funny-holiday-shark-christmas-cool-novelty-t-shirt-for-kids-crazy-dog-youth-t-shirt/-/A-93740477",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cuphead-happy-pose-performance-tee/-/A-86081283",
      tags: "Boys’ Clothing, Cuphead, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cuphead",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cuphead-red-and-blue-best-friends-performance-tee/-/A-1001000900",
      tags: "Boys’ Clothing, Cuphead, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cuphead",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cuphead-smile-and-wave-distressed-performance-tee/-/A-86081207",
      tags: "Boys’ Clothing, Cuphead, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cuphead",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cuphead-happy-pose-t-shirt/-/A-82372981",
      tags: "Boys’ Clothing, Cuphead, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cuphead",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-cuphead-best-friend-mugman/-/A-87574396",
      tags: "Boys’ Clothing, Cuphead, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cuphead",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cuphead-brawl-is-brewing-t-shirt/-/A-86081070",
      tags: "Boys’ Clothing, Cuphead, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cuphead",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cuphead-smile-portrait-t-shirt/-/A-86081059",
      tags: "Boys’ Clothing, Cuphead, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cuphead",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cuphead-grim-matchstick-in-fiery-frolic-poster-t-shirt/-/A-86081244",
      tags: "Boys’ Clothing, Cuphead, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cuphead",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cuphead-red-and-blue-best-friends-t-shirt/-/A-1000127783",
      tags: "Boys’ Clothing, Cuphead, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cuphead",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cuphead-tough-cup-est-1930-t-shirt/-/A-86081048",
      tags: "Boys’ Clothing, Cuphead, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cuphead",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cuphead-vintage-circle-t-shirt/-/A-82342288",
      tags: "Boys’ Clothing, Cuphead, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cuphead",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cuphead-friendly-hello-cuphead-t-shirt/-/A-86081304",
      tags: "Boys’ Clothing, Cuphead, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cuphead",
      },
    },
    {
      url: "https://www.target.com/p/superman-flying-chibi-superman-boy-s-grey-long-sleeve-shirt/-/A-85782358",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/the-suicide-squad-movie-juniors-white-long-sleeve-shirt/-/A-84095538",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-league-of-super-pets-characters-and-title-logo-youth-black-crew-neck-sweatshirt/-/A-86393845",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boys-dc-redwhite-blue-t-shirt/-/A-1004374114",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boys-dc-usa-banner-t-shirt/-/A-1004374328",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boys-dc-jla-american-shield-t-shirt/-/A-1004374373",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boys-dc-american-heroine-t-shirt/-/A-1004374382",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-batman-joker-riddler-3-pack-t-shirts-little-kid-to-big-kid/-/A-89767316",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-batman-2-pack-t-shirts-little-kid-to-big-kid/-/A-87668180",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-batman-superman-the-flash-4-pack-long-sleeve-t-shirts-little-kid-to-big/-/A-84994604",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-t-shirt-sizes-2t-14-16/-/A-1001719953",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-superhero-group-boy-s-royal-blue-t-shirt/-/A-85450685",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-sound-effects-youth-boys-t-shirt/-/A-85867515",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-logo-retro-caped-crusader-t-shirt/-/A-86926583",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-it-s-go-time-youth-red-graphic-tee/-/A-85730367",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-it-s-go-time-youth-red-graphic-tee/-/A-85729758",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-league-of-super-pets-characters-in-circle-youth-red-graphic-tee/-/A-86383579",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-selfie-youth-navy-blue-graphic-tee/-/A-85730757",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/tom-and-jerry-classic-characters-youth-red-graphic-tee/-/A-85729639",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-gameface-youth-royal-blue-graphic-tee/-/A-85730806",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-league-of-super-pets-krypto-ace-youth-royal-blue-graphic-tee/-/A-86383266",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-classic-logo-performance-tee/-/A-87698279",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-teen-titans-go-tshirt-superhero-clothing/-/A-84706894",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/shazam-captain-marvel-youth-red-graphic-tee-medium/-/A-84209802",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/shazam-captain-marvel-youth-red-graphic-tee-xs/-/A-84209799",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/shazam-captain-marvel-youth-red-graphic-tee-large/-/A-84209803",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/shazam-captain-marvel-youth-red-graphic-tee-small/-/A-84209801",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/shazam-captain-marvel-youth-red-graphic-tee-xl/-/A-84209804",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-heropose-youth-navy-blue-graphic-tee/-/A-85730874",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-artistic-red-white-graffiti-performance-tee/-/A-85667425",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-valentine-s-day-harley-quinn-mad-love-t-shirt/-/A-85577273",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-classic-logo-t-shirt/-/A-82370175",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-ready-for-action-performance-tee/-/A-85667464",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-character-panels-boy-s-royal-blue-t-shirt/-/A-85451205",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-christmas-sweater-t-shirt/-/A-85565332",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-jagged-character-squares-boy-s-royal-blue-t-shirt/-/A-85782234",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/batman-number-00-boy-s-heather-grey-t-shirt/-/A-85352258",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-hero-and-sidekick-spotted-t-shirt/-/A-87698469",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-teen-titans-go-shirt-dc-comics-apparel/-/A-84706771",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-characters-and-logo-boy-s-royal-blue-t-shirt/-/A-85782233",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-hero-costume-t-shirt/-/A-81495559",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-red-and-black-silhouette-side-profile-t-shirt/-/A-85667490",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/batman-comic-book-cover-boy-s-red-t-shirt/-/A-85351819",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-character-art-boy-s-navy-blue-t-shirt/-/A-85730042",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-bat-signal-portrait-t-shirt/-/A-89405406",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-it-s-go-time-boy-s-navy-t-shirt/-/A-85782915",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-silhouette-portrait-t-shirt/-/A-85667514",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-red-batcycle-performance-tee/-/A-85667495",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-nightwing-logo-t-shirt/-/A-83988063",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-dark-knight-halloween-costume-t-shirt/-/A-87698177",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-white-lightning-bolt-stamp-t-shirt/-/A-89052220",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-speedster-silhouette-t-shirt/-/A-89053682",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-bold-red-logo-superhero-t-shirt/-/A-89053713",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-superhero-team-and-logos-boy-s-red-t-shirt/-/A-85451467",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-st-patrick-s-day-shenanigans-squad-t-shirt/-/A-85895112",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-st-patrick-s-day-riddler-who-is-the-luckiest-of-them-all-t-shirt/-/A-85894074",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-batmobile-headlights-i-am-the-shadows-t-shirt/-/A-85667473",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-ripped-costume-t-shirt/-/A-81495954",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-valentine-s-day-dad-is-my-hero-t-shirt/-/A-85577355",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-city-of-gotham-t-shirt/-/A-85667552",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-robin-the-boy-wonder-t-shirt/-/A-87697106",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-cyborg-beast-boy-robin-youth-boys-red-t-shirt/-/A-85730897",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-caped-crusader-logo-t-shirt/-/A-82373154",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-all-american-hero-t-shirt/-/A-87698222",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-fresh-boy-s-navy-t-shirt/-/A-85451182",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-speedster-run-t-shirt/-/A-89051665",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-let-s-party-momma-boy-s-heather-grey-t-shirt/-/A-85355307",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-onfleek-boy-s-royal-blue-t-shirt/-/A-85782612",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-heroes-and-emblems-boy-s-navy-t-shirt/-/A-85782968",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-character-grid-character-art-split-image-boy-s-navy-t-shirt/-/A-85783039",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-comics-book-superheroes-t-shirt/-/A-89053691",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-in-the-light-poster-t-shirt/-/A-85667527",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-in-the-light-poster-t-shirt/-/A-85667527",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wonder-woman-pastel-newspaper-t-shirt/-/A-89405352",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-the-best-don-t-rest-boy-s-navy-t-shirt/-/A-85451219",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-batarang-logo-t-shirt/-/A-85667547",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/batman-kaaapoooow-landing-boy-s-heather-grey-t-shirt/-/A-85355409",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-comic-youth-boys-justice-league-superheroes-onfleek-navy-tshirt/-/A-86102975",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-guardian-of-gotham-t-shirt/-/A-83988537",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-hero-pose-t-shirt/-/A-85667475",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-christmas-light-swing-t-shirt/-/A-85565722",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-black-and-white-silhouette-t-shirt/-/A-85667565",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-batcycle-in-the-shadows-t-shirt/-/A-85667358",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-red-shadows-t-shirt/-/A-85667468",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-file-logo-t-shirt/-/A-89052057",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/teen-titans-go-it-s-go-time-main-characters-boy-s-navy-t-shirt/-/A-85783097",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-classic-logo-t-shirt/-/A-87697112",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-time-travel-lightning-bolt-t-shirt/-/A-89053411",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wonder-woman-american-comic-book-cover-t-shirt/-/A-89405164",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-my-hero-t-shirt/-/A-90648086",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-black-armor-batarang-t-shirt/-/A-85667524",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-to-do-list-t-shirt/-/A-82351461",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-dark-knight-tarot-t-shirt/-/A-89580289",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-speedster-red-silhouette-t-shirt/-/A-89052596",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-st-patrick-s-day-joker-here-for-the-shenanigans-t-shirt/-/A-85894639",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/batman-half-art-boy-s-heather-grey-t-shirt/-/A-85355732",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-heroes-classic-blue-emblems-t-shirt/-/A-89053184",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-youth-boys-shazam-text-lightning-bolt-short-sleeve-t-shirt/-/A-84209840",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-man-of-steel-beveled-logo-t-shirt/-/A-86088557",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-st-patrick-s-day-pinch-proof-man-of-steel-t-shirt/-/A-85895387",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-st-patrick-s-day-who-needs-luck-t-shirt/-/A-85894912",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-superhero-logos-boy-s-royal-blue-t-shirt/-/A-85782334",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-st-patrick-s-day-cloverfield-bat-logo-t-shirt/-/A-85894805",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-multiverse-logo-t-shirt/-/A-89053451",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-ready-for-action-t-shirt/-/A-85667363",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-moonlit-batmobile-t-shirt/-/A-85667486",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/batman-dark-knight-line-art-boy-s-heather-grey-t-shirt/-/A-85351895",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-logo-vintage-t-shirt/-/A-79712082",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-st-patrick-s-day-pinch-proof-t-shirt/-/A-85894154",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-st-patrick-s-day-pinch-proof-logo-t-shirt/-/A-85895056",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wonder-woman-distressed-poster-t-shirt/-/A-89405448",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-black-official-logo-t-shirt/-/A-89051781",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wonder-woman-retro-my-hero-t-shirt/-/A-90648154",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wonder-woman-action-pose-t-shirt/-/A-89405390",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-photobomb-youth-boys-t-shirt/-/A-86013043",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-catwoman-my-cat-is-my-valentine-t-shirt/-/A-85577432",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-joker-ha-ha-t-shirt/-/A-83988605",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/batman-flying-bats-logo-boy-s-heather-grey-t-shirt/-/A-85352661",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-birthday-boy-super-logo-t-shirt/-/A-89404776",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-valentine-s-day-all-the-clues-lead-to-you-t-shirt/-/A-85577235",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-valentine-s-day-all-the-clues-lead-to-you-t-shirt/-/A-85577235",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/batman-geometric-art-boy-s-heather-grey-t-shirt/-/A-85352469",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-league-of-super-pets-character-panels-youth-t-shirt/-/A-86102788",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-caped-crusader-t-shirt/-/A-87698173",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-gotham-s-hero-t-shirt/-/A-83988758",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-heroes-in-combat-boy-s-navy-t-shirt/-/A-85783113",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-speedster-stacked-logo-t-shirt/-/A-89053482",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-ready-to-strike-t-shirt/-/A-87698393",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-superhero-charge-boy-s-royal-blue-t-shirt/-/A-85782621",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-group-character-art-boy-s-navy-t-shirt/-/A-85783164",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-hero-break-barriers-t-shirt/-/A-84634820",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-gold-lightning-emblem-t-shirt/-/A-89052819",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-animated-logo-t-shirt/-/A-89052602",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/the-justice-league-boxed-in-heroes-boy-s-navy-t-shirt/-/A-87614662",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-superman-christmas-lights-t-shirt/-/A-85565377",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-joker-sweater-t-shirt/-/A-85565371",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-scarecrow-tarot-t-shirt/-/A-89580326",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-artistic-red-white-graffiti-t-shirt/-/A-85667471",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-superheroes-silhouettes-t-shirt/-/A-89052257",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-past-present-and-future-superheroes-t-shirt/-/A-89052417",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-red-shadow-poster-t-shirt/-/A-85667500",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/black-adam-inside-gold-thunderbolt-youth-boys-navy-t-shirt/-/A-87056977",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-charging-superheroes-youth-navy-blue-t-shirt/-/A-86459999",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-triple-gold-logo-t-shirt/-/A-89053286",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-distressed-superheroes-team-t-shirt/-/A-89051708",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-superhero-team-art-boy-s-charcoal-heather-t-shirt/-/A-85782435",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-shield-logo-boy-s-navy-t-shirt/-/A-85783120",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-gotham-silhouette-t-shirt/-/A-85667537",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-animated-yellow-logo-t-shirt/-/A-89052631",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-speedster-barry-allen-logo-t-shirt/-/A-89052519",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/black-adam-silhouette-with-thunderbolt-youth-boys-royal-blue-t-shirt/-/A-87057018",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-league-of-super-pets-movie-characters-youth-white-t-shirt/-/A-86103869",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-large-lightning-bolt-stamp-t-shirt/-/A-89052076",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-christmas-joker-naughty-t-shirt/-/A-81924106",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-vibrate-your-molecules-t-shirt/-/A-89053191",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-black-adam-movie-leaping-through-lightning-bolt-youth-boys-heather-gray-t-shirt/-/A-87056889",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-group-art-boy-s-red-t-shirt/-/A-85782424",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-black-adam-movie-grayscale-lightning-bolt-portrait-youth-boys-heather-gray-t-shirt/-/A-87056916",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-joker-tarot-t-shirt/-/A-89580431",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-time-travel-logo-t-shirt/-/A-89052817",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-christmas-naughty-penguin-t-shirt/-/A-81924302",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-catwoman-poster-t-shirt/-/A-85667608",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-keep-phasing-t-shirt/-/A-89052560",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wonder-woman-moms-are-everyday-heroes-t-shirt/-/A-88790092",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-on-the-naughty-list-t-shirt/-/A-85565880",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-batman-riddler-back-to-back-t-shirt/-/A-85667368",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-superhero-logo-slate-boy-s-navy-t-shirt/-/A-85783069",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-st-patrick-s-day-riddler-who-needs-luck-distressed-t-shirt/-/A-85895525",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-pixel-characters-boy-s-navy-t-shirt/-/A-85782950",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-christmas-merry-mayhem-t-shirt/-/A-81924098",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-supergirl-sky-flight-t-shirt/-/A-89052149",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-suicide-squad-peacemaker-poster-t-shirt/-/A-84254429",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wonder-woman-comic-book-cover-t-shirt/-/A-89405374",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wonder-woman-power-sketches-t-shirt/-/A-89405300",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-speedster-barry-allen-silhouette-t-shirt/-/A-89052530",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-batgirl-city-crouch-t-shirt/-/A-92915222",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-don-t-confuse-quote-t-shirt/-/A-89052448",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-past-present-and-future-collage-t-shirt/-/A-89052118",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-lightning-bolt-title-movie-t-shirt/-/A-89052415",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-don-t-confuse-motion-t-shirt/-/A-89053597",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-suicide-squad-savant-poster-t-shirt/-/A-84254528",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-triple-red-logo-t-shirt/-/A-89053208",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-two-idiot-kids-quote-t-shirt/-/A-89053049",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-riddler-tarot-t-shirt/-/A-89580183",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-multiverse-curved-logo-t-shirt/-/A-89052948",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-heroes-classic-emblems-t-shirt/-/A-89053545",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-batman-christmas-sleigh-the-hero-t-shirt/-/A-81924130",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-saving-the-future-and-the-past-lighting-bolt-t-shirt/-/A-89051911",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-flash-multiverse-chronobowl-t-shirt/-/A-89052151",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-justice-league-distressed-lightning-logo-t-shirt/-/A-1001414348",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-teamup-boys-t-shirt/-/A-86012979",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-black-adam-movie-name-logo-youth-boys-heather-gray-t-shirt/-/A-87056981",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-black-adam-movie-character-group-in-lightning-bolt-youth-boys-red-t-shirt/-/A-87056926",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-united-we-stand-boy-s-royal-blue-t-shirt/-/A-85782298",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-join-the-league-boy-s-navy-t-shirt/-/A-85783184",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-anime-bobblehead-justice-league-youth-boys-t-shirt/-/A-86012998",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-t-shirt-sizes-2t-14-16/-/A-1001719953",
      tags: "Boys’ Clothing, DC Comics, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC Comics",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-superman-and-krypto-walk-o-clock-t-shirt/-/A-87423910",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-krypto-superman-s-best-friend-t-shirt/-/A-87423511",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-super-powered-pack-panels-t-shirt/-/A-87424692",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-krypto-super-dog-t-shirt/-/A-87424719",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-super-squad-t-shirt/-/A-87423459",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-battle-ready-poster-t-shirt/-/A-87423129",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-activate-group-panels-t-shirt/-/A-87423836",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-tighten-your-collars-panels-t-shirt/-/A-87423031",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-merton-how-fast-can-you-go-t-shirt/-/A-87424164",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-rule-the-world-lulu-badge-t-shirt/-/A-87424219",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-cartoon-krypto-and-ace-dreams-t-shirt/-/A-87423777",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-krypto-solar-paw-punch-t-shirt/-/A-87423194",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-colorful-hero-logos-t-shirt/-/A-87423670",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-superman-emblem-cutouts-t-shirt/-/A-87422603",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-colorful-title-t-shirt/-/A-87423607",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-superman-s-best-friend-flying-krypto-t-shirt/-/A-87422656",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-kneel-before-lulu-poster-t-shirt/-/A-87423398",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dc-league-of-super-pets-chromatic-super-power-pack-t-shirt/-/A-87423143",
      tags: "Boys’ Clothing, DC League of Super-Pets, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC League of Super-Pets",
      },
    },
    {
      url: "https://www.target.com/p/dc-x-sonic-chaos-controller-t-shirt/-/A-93802711",
      tags: "Boys’ Clothing, DC X Sonic the Hedgehog, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC X Sonic the Hedgehog",
      },
    },
    {
      url: "https://www.target.com/p/dc-x-sonic-from-the-shadows-yellow-outline-youth-crew-neck-short-sleeve-t-shirt/-/A-93802733",
      tags: "Boys’ Clothing, DC X Sonic the Hedgehog, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "DC X Sonic the Hedgehog",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-grrific-daniel-tiger-long-sleeve-graphic-t-shirt/-/A-1000749634",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-group-hi-neighbor-long-sleeve-graphic-t-shirt/-/A-1000749820",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-books-are-a-hoot-long-sleeve-graphic-t-shirt/-/A-1000749590",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-daniel-line-art-long-sleeve-graphic-t-shirt/-/A-1000749705",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-a-royal-hello-long-sleeve-graphic-t-shirt/-/A-1000749431",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-yippee-skippy-jodi-platypus-long-sleeve-graphic-t-shirt/-/A-1000749463",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-meow-meow-katerina-kittycat-long-sleeve-graphic-t-shirt/-/A-1000749311",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-boomerific-kids-kids-long-sleeve-t-shirt-long-sleeve-graphic-t-shirt/-/A-1000749765",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-books-are-a-hoot-short-sleeve-graphic-t-shirt/-/A-1000749694",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-grrific-daniel-tiger-short-sleeve-graphic-t-shirt/-/A-1000749344",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-meow-meow-katerina-kittycat-short-sleeve-graphic-t-shirt/-/A-1000749687",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-a-royal-hello-short-sleeve-graphic-t-shirt/-/A-1000749589",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-group-hi-neighbor-short-sleeve-graphic-t-shirt/-/A-1000749177",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-yippee-skippy-jodi-platypus-short-sleeve-graphic-t-shirt/-/A-1000749273",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-daniel-line-art-short-sleeve-graphic-t-shirt/-/A-1000749563",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boys-daniel-tiger-boomerific-youth-short-sleeve-t-shirt-short-sleeve-graphic-t-shirt/-/A-1000749451",
      tags: "Boys’ Clothing, Daniel Tiger, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Daniel Tiger",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-david-bowie-earthling-t-shirt/-/A-88540154",
      tags: "Boys’ Clothing, David Bowie, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "David Bowie",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-descendants-villain-kids-t-shirt/-/A-85823938",
      tags: "Boys’ Clothing, Descendants, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Descendants",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-descendants-the-rise-of-red-i-m-a-rebel-t-shirt/-/A-93078858",
      tags: "Boys’ Clothing, Descendants, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Descendants",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-descendants-chloe-royal-vibes-t-shirt/-/A-93078976",
      tags: "Boys’ Clothing, Descendants, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Descendants",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-descendants-fight-for-the-future-t-shirt/-/A-93078990",
      tags: "Boys’ Clothing, Descendants, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Descendants",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-dark-forest-skull-by-sitchko-t-shirt/-/A-88803598",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-summer-smile-by-radiomode-t-shirt/-/A-84033699",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-mother-s-day-sunflower-mom-by-fridayfusion-t-shirt/-/A-88931740",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-cool-waves-on-a-lonely-beach-by-quilimo-t-shirt/-/A-87026258",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-sketchy-owl-skull-by-dinny-t-shirt/-/A-88800010",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-little-floating-ghost-by-nebenzu-t-shirt/-/A-88801083",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-skeleton-yoga-by-huebucket-t-shirt/-/A-88799573",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-halloween-dad-mom-daughter-adult-costume-unicorn-security-by-minhminh-t-shirt/-/A-84143482",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-blood-moon-lake-mountain-by-ndtank-t-shirt/-/A-87024897",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-fox-by-loujah-t-shirt/-/A-92052109",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-summer-vibes-by-clingcling-t-shirt/-/A-86986851",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-mountain-bear-by-radiomode-t-shirt/-/A-86817333",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-wild-bear-scratching-tree-by-radiomode-t-shirt/-/A-87027142",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-cat-pumpkin-pile-by-awkwarddragon-t-shirt/-/A-88801468",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-design-by-humans-winya-no-89-by-winya-t-shirt/-/A-88803034",
      tags: "Boys’ Clothing, Design by Humans, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Design by Humans",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-3-pack-t-shirts-toddler-to-big-kid/-/A-1001926112",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minions-ready-for-the-weekend-t-shirt/-/A-87186600",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-father-s-day-1-dad-performance-tee/-/A-87406562",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minions-elements-t-shirt/-/A-87186774",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-world-s-best-dad-gru-and-minions-performance-tee/-/A-86502209",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-christmas-carols-minons-banana-t-shirt/-/A-81931594",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minions-fiesta-t-shirt/-/A-85155557",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minions-sk8-or-die-t-shirt/-/A-87188102",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-ugly-christmas-minons-banana-t-shirt/-/A-81881838",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minions-dracula-t-shirt/-/A-84808677",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minion-emotion-periodic-table-t-shirt/-/A-87188785",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minion-good-to-be-king-t-shirt/-/A-82355423",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minions-one-in-a-minion-color-pop-out-t-shirt/-/A-85156065",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minions-mummy-t-shirt/-/A-1000140826",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-christmas-up-to-snow-good-t-shirt/-/A-81929845",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-metal-rock-unicorn-t-shirt/-/A-87191207",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minions-1-villian-t-shirt/-/A-87188217",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minions-cupid-s-wingman-valentine-s-t-shirt/-/A-82191065",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-christmas-good-minion-t-shirt/-/A-81882021",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-christmas-minions-be-good-next-year-t-shirt/-/A-81882769",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minion-brochachos-t-shirt/-/A-87188279",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minion-belt-in-crazy-t-shirt/-/A-87188901",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-gru-lightbulb-t-shirt/-/A-87191004",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-gru-plans-to-steal-moon-t-shirt/-/A-87188285",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minion-trouble-t-shirt/-/A-87188603",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minion-yearbook-t-shirt/-/A-87191272",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minions-worlds-best-dad-t-shirt/-/A-87188000",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minion-lunch-hang-out-t-shirt/-/A-87187850",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minion-trouble-maker-t-shirt/-/A-82351941",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-christmas-minion-i-tried-t-shirt/-/A-81929794",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minions-chill-floatie-t-shirt/-/A-84265895",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-world-s-best-dad-gru-and-minions-t-shirt/-/A-86503066",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minion-my-opinion-t-shirt/-/A-87190217",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minion-party-animal-t-shirt/-/A-87188999",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-father-s-day-1-dad-t-shirt/-/A-82783825",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minion-bad-choices-t-shirt/-/A-82359915",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-father-s-day-one-in-a-minion-dad-t-shirt/-/A-82783571",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-christmas-minions-good-next-year-t-shirt/-/A-81931509",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-minion-today-cancelled-t-shirt/-/A-87190044",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-gru-genius-2010-t-shirt/-/A-87190175",
      tags: "Boys’ Clothing, Despicable Me, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-3-minion-worker-strike-t-shirt/-/A-87189413",
      tags: "Boys’ Clothing, Despicable Me 3, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me 3",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-3-minion-small-but-fierce-t-shirt/-/A-87186682",
      tags: "Boys’ Clothing, Despicable Me 3, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me 3",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-3-villain-brothers-t-shirt/-/A-87188618",
      tags: "Boys’ Clothing, Despicable Me 3, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me 3",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-4-mega-minions-heroes-aren-t-born-they-re-made-t-shirt/-/A-93527644",
      tags: "Boys’ Clothing, Despicable Me 4, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me 4",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-4-mega-minion-mel-unstoppable-unbreakable-t-shirt/-/A-93527692",
      tags: "Boys’ Clothing, Despicable Me 4, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me 4",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-4-avl-dream-team-t-shirt/-/A-93528055",
      tags: "Boys’ Clothing, Despicable Me 4, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me 4",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-4-mega-minions-poster-t-shirt/-/A-93527632",
      tags: "Boys’ Clothing, Despicable Me 4, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me 4",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-4-mega-minion-jerry-t-shirt/-/A-93527980",
      tags: "Boys’ Clothing, Despicable Me 4, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me 4",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-despicable-me-4-mega-minion-dave-t-shirt/-/A-93527650",
      tags: "Boys’ Clothing, Despicable Me 4, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Despicable Me 4",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-mickey-mouse-short-sleeve-graphic-t-shirt-disney-store/-/A-90170781",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-sibling-tee-long-sleeve-graphic-t-shirt/-/A-1000251447",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-birthday-boy-long-sleeve-graphic-t-shirt/-/A-1000185561",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-birthday-boy-spotlight-long-sleeve-graphic-t-shirt/-/A-1000187383",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000335655",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-donald-duck-long-sleeve-graphic-t-shirt/-/A-1000335879",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000335293",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-squad-grid-long-sleeve-graphic-t-shirt/-/A-1000246071",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-dr-teeth-the-electric-mayhem-tour-long-sleeve-graphic-t-shirt/-/A-1000296694",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-the-aristocats-long-sleeve-graphic-t-shirt/-/A-1000376233",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-sweet-style-long-sleeve-graphic-t-shirt/-/A-1000336187",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-pattern-silhouette-long-sleeve-graphic-t-shirt/-/A-93699917",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-donald-duck-skater-ride-slide-long-sleeve-graphic-t-shirt/-/A-93699897",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000335984",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-sketched-long-sleeve-graphic-t-shirt/-/A-1000336018",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336204",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-goofy-it-s-my-birthday-long-sleeve-graphic-t-shirt/-/A-94078767",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-long-sleeve-graphic-t-shirt/-/A-1000323013",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336258",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-the-nightmare-before-christmas-long-sleeve-graphic-t-shirt/-/A-1000373059",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-with-flowers-butterflies-long-sleeve-graphic-t-shirt/-/A-1000336101",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-goofy-pluto-donald-skate-crew-long-sleeve-graphic-t-shirt/-/A-93699913",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-checker-frame-long-sleeve-graphic-t-shirt/-/A-1000247918",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-little-brother-long-sleeve-graphic-t-shirt/-/A-1000251569",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-make-way-it-s-my-birthday-long-sleeve-graphic-t-shirt/-/A-1000186053",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336281",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-i-m-cool-like-that-long-sleeve-graphic-t-shirt/-/A-1000248473",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336367",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-promoted-big-brother-long-sleeve-graphic-t-shirt/-/A-1000251562",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-different-letters-long-sleeve-graphic-t-shirt/-/A-1000336055",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-one-day-at-a-time-long-sleeve-graphic-t-shirt/-/A-1000269292",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pluto-snacks-long-sleeve-graphic-t-shirt/-/A-1000336265",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mickey-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336371",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-the-coolest-kid-long-sleeve-graphic-t-shirt/-/A-1000245467",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000335885",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-hugs-his-puppy-long-sleeve-graphic-t-shirt/-/A-1000336054",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-i-m-just-here-for-recess-long-sleeve-graphic-t-shirt/-/A-1000243842",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-let-the-shenanigans-begin-long-sleeve-graphic-t-shirt/-/A-1000248582",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-donald-goofy-and-pluto-besties-forever-long-sleeve-graphic-t-shirt/-/A-94080433",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-sticker-group-long-sleeve-graphic-t-shirt/-/A-1000269417",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000335900",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-long-sleeve-graphic-t-shirt/-/A-1000323047",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-feelin-silly-long-sleeve-graphic-t-shirt/-/A-1000249025",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-awesome-big-brother-long-sleeve-graphic-t-shirt/-/A-1000251629",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336242",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335614",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-city-sketch-long-sleeve-graphic-t-shirt/-/A-93699992",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-long-sleeve-graphic-t-shirt/-/A-1000323283",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336067",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-chalk-drawing-long-sleeve-graphic-t-shirt/-/A-1000336213",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-no-pants-no-problem-long-sleeve-graphic-t-shirt/-/A-1000246408",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000335937",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-best-brother-long-sleeve-graphic-t-shirt/-/A-1000251695",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-sword-in-the-stone-character-group-long-sleeve-graphic-t-shirt/-/A-1000280444",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336005",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000335992",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-jump-long-sleeve-graphic-t-shirt/-/A-1000269379",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-1st-grade-squad-long-sleeve-graphic-t-shirt/-/A-1000244779",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-making-moves-long-sleeve-graphic-t-shirt/-/A-1000336102",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-minnie-pluto-donald-long-sleeve-graphic-t-shirt/-/A-1000335958",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-birthday-boy-donald-long-sleeve-graphic-t-shirt/-/A-1000187518",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-long-sleeve-graphic-t-shirt/-/A-1000323218",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-character-group-rainbow-flower-long-sleeve-graphic-t-shirt/-/A-1000269303",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-total-legends-long-sleeve-graphic-t-shirt/-/A-1000245201",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-big-brother-long-sleeve-graphic-t-shirt/-/A-1000251595",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-school-is-cool-long-sleeve-graphic-t-shirt/-/A-1000243312",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-sketch-pattern-long-sleeve-graphic-t-shirt/-/A-1000247448",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-kindergarten-squad-long-sleeve-graphic-t-shirt/-/A-1000243725",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-wake-up-be-cool-be-kind-repeat-long-sleeve-graphic-t-shirt/-/A-1000336387",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-the-nightmare-before-christmas-long-sleeve-graphic-t-shirt/-/A-1000373147",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-crew-camping-badges-long-sleeve-graphic-t-shirt/-/A-1000335805",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-minnie-goofy-donald-duck-daisy-pluto-photo-long-sleeve-graphic-t-shirt/-/A-1000336026",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335652",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000336041",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-celebration-long-sleeve-graphic-t-shirt/-/A-1000297233",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-birthday-kid-long-sleeve-graphic-t-shirt/-/A-1000187864",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336130",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-oh-boy-easters-here-long-sleeve-graphic-t-shirt/-/A-1000226701",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-minnie-kiss-long-sleeve-graphic-t-shirt/-/A-1000269363",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-doodle-long-sleeve-graphic-t-shirt/-/A-1000336094",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336042",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-classic-sketch-long-sleeve-graphic-t-shirt/-/A-1000336385",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-superstar-pose-long-sleeve-graphic-t-shirt/-/A-1000335241",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-just-got-a-lot-cooler-pre-k-long-sleeve-graphic-t-shirt/-/A-1000243828",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335477",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-1st-grade-out-of-this-world-long-sleeve-graphic-t-shirt/-/A-1000245018",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335915",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-watch-this-long-sleeve-graphic-t-shirt/-/A-1000246858",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335629",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-just-too-cool-retro-long-sleeve-graphic-t-shirt/-/A-1000376084",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-minnie-together-in-neon-long-sleeve-graphic-t-shirt/-/A-1000335878",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-springtime-smiles-long-sleeve-graphic-t-shirt/-/A-1000226697",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335889",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336177",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-long-sleeve-graphic-t-shirt/-/A-1000323268",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-run-long-sleeve-graphic-t-shirt/-/A-1000269265",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335354",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-bunny-kisses-easter-wishes-long-sleeve-graphic-t-shirt/-/A-1000227281",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335829",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-long-sleeve-graphic-t-shirt/-/A-1000322950",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336421",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335872",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-dr-teeth-the-electric-mayhem-tour-long-sleeve-graphic-t-shirt/-/A-1000296838",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335889",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-original-stay-true-long-sleeve-graphic-t-shirt/-/A-1000336189",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-daisy-duck-long-sleeve-graphic-t-shirt/-/A-1000335978",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-straight-outta-bermuda-long-sleeve-graphic-t-shirt/-/A-1000280394",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-easter-cuties-long-sleeve-graphic-t-shirt/-/A-1000227144",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335220",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-minnie-long-sleeve-graphic-t-shirt/-/A-1000335467",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-birthday-icons-long-sleeve-graphic-t-shirt/-/A-1000185612",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-beauty-in-bloom-long-sleeve-graphic-t-shirt/-/A-1000226897",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-long-sleeve-graphic-t-shirt/-/A-1000323389",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-just-too-cool-retro-long-sleeve-graphic-t-shirt/-/A-1000376084",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000335963",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336177",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-oh-boy-long-sleeve-graphic-t-shirt/-/A-1000269291",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000335942",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-point-to-the-future-long-sleeve-graphic-t-shirt/-/A-1000269285",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-class-goof-long-sleeve-graphic-t-shirt/-/A-1000244570",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000335942",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-figaro-hugs-long-sleeve-graphic-t-shirt/-/A-1000336278",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-little-brother-big-heart-long-sleeve-graphic-t-shirt/-/A-1000251581",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pre-k-out-of-this-world-long-sleeve-graphic-t-shirt/-/A-1000243789",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335509",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-just-too-cool-retro-long-sleeve-graphic-t-shirt/-/A-1000376084",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335829",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-preschool-squad-long-sleeve-graphic-t-shirt/-/A-1000243462",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-minnie-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335470",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-blowing-bubbles-everywhere-long-sleeve-graphic-t-shirt/-/A-1000336192",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-member-of-the-brother-club-long-sleeve-graphic-t-shirt/-/A-1000251610",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-classic-sketch-long-sleeve-graphic-t-shirt/-/A-1000336385",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335354",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335835",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-did-someone-say-recess-long-sleeve-graphic-t-shirt/-/A-1000244654",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-minnie-long-sleeve-graphic-t-shirt/-/A-1000335953",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-dr-teeth-long-winded-tour-long-sleeve-graphic-t-shirt/-/A-1000296892",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-sword-in-the-stone-long-sleeve-graphic-t-shirt/-/A-1000280500",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-friends-long-sleeve-graphic-t-shirt/-/A-1000335237",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pluto-collage-long-sleeve-graphic-t-shirt/-/A-1000269274",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336042",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336177",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-the-nightmare-before-christmas-long-sleeve-graphic-t-shirt/-/A-1000373009",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-you-can-do-hard-things-long-sleeve-graphic-t-shirt/-/A-1000269378",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-ready-for-school-long-sleeve-graphic-t-shirt/-/A-1000243151",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-straight-outta-bermuda-long-sleeve-graphic-t-shirt/-/A-1000280394",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336042",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-friends-long-sleeve-graphic-t-shirt/-/A-1000335237",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-blowing-bubbles-everywhere-long-sleeve-graphic-t-shirt/-/A-1000336192",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-just-too-cool-retro-long-sleeve-graphic-t-shirt/-/A-1000376084",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000336071",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-oh-boy-easter-is-here-long-sleeve-graphic-t-shirt/-/A-1000226826",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-did-someone-say-recess-long-sleeve-graphic-t-shirt/-/A-1000244654",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-run-long-sleeve-graphic-t-shirt/-/A-1000269265",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-class-goof-long-sleeve-graphic-t-shirt/-/A-1000244570",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-superstar-pose-long-sleeve-graphic-t-shirt/-/A-1000335241",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335829",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-pluto-long-sleeve-graphic-t-shirt/-/A-1000335275",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-long-sleeve-graphic-t-shirt/-/A-1000336421",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-long-sleeve-graphic-t-shirt/-/A-1000323389",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-long-sleeve-graphic-t-shirt/-/A-1000335915",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-dr-teeth-the-electric-mayhem-tour-long-sleeve-graphic-t-shirt/-/A-1000296838",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-toy-story-pixar-t-shirt-sets-woody-buzz-lightyear-jessie-rex-hamm-mrpotato-forky-slinky-dog-toddler-birthday-kids-clothes/-/A-1002267640",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-onward-boy-s-ian-and-barley-let-the-quest-begin-t-shirt-kids/-/A-91166628",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-the-emperor-s-new-groove-kuzco-bring-it-on-distressed-t-shirt-kids/-/A-91810269",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-cars-tow-mater-lightning-mcqueen-3-pack-t-shirts-infant-to-big-kid/-/A-92513224",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-goofy-donald-duck-3-pack-graphic-t-shirts-little-kid-to-big-kid/-/A-87246047",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-toy-story-buzz-lightyear-woody-2-pack-t-shirts-little-kid-to-big-kid/-/A-87419684",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-goofy-donald-duck-3-pack-graphic-t-shirts-little-kid-to-big-kid/-/A-87246047",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-stitch-surfing-mineral-wash-tank-top-orange/-/A-94431033",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-lion-guard-lion-king-simba-timon-pumbaa-rafiki-3-pack-t-shirts-toddler-to-big-kid/-/A-87218859",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-pluto-donald-duck-goofy-4-pack-t-shirts-little-kid-to-big-kid/-/A-85431929",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-nightmare-before-christmas-hoodie-nightmare-before-christmas-jack-skellington-cosplay-dress-up-costume-hoodie/-/A-1000106584",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-indiana-jones-classic-shirt-indiana-jones-harrison-ford-indiana-jones-tie-dye-t-shirt/-/A-1000107247",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-this-is-my-disney-shirt-t-shirt/-/A-85824102",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-game-on-youth-royal-blue-graphic-tee/-/A-85352523",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/sega-sonic-the-hedgehog-game-face-youth-navy-blue-graphic-tee/-/A-85351744",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-totally-awesome-youth-royal-blue-graphic-tee/-/A-85352845",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-eat-sleep-repeat-performance-tee/-/A-85637774",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-sibling-tee-short-sleeve-graphic-t-shirt/-/A-1000251141",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-classic-d-letter-pocket-print-performance-tee/-/A-85637588",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/big-hero-6-short-sleeve-graphic-t-shirt/-/A-93207792",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000289095",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-kindergarten-out-of-this-world-short-sleeve-graphic-t-shirt/-/A-1000243917",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pluto-snacks-short-sleeve-graphic-t-shirt/-/A-1000337990",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-kittens-climbing-pocket-badge-performance-tee/-/A-85633122",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000289068",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-donald-duck-short-sleeve-graphic-t-shirt/-/A-1000337935",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-this-is-my-lucky-shirt-performance-tee/-/A-85761108",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-the-coolest-kid-short-sleeve-graphic-t-shirt/-/A-1000245481",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337852",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-promoted-big-brother-short-sleeve-graphic-t-shirt/-/A-1000251234",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pluto-donald-duck-mickey-goofy-short-sleeve-graphic-t-shirt/-/A-1000337672",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-hashtag-mood-short-sleeve-graphic-t-shirt/-/A-1000337801",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-candy-logo-performance-tee/-/A-85574329",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mickey-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337845",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-red-camo-logo-performance-tee/-/A-85637751",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-donald-pluto-chip-and-dale-christmas-grid-short-sleeve-graphic-t-shirt/-/A-94102663",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-big-hero-6-baymax-would-you-like-a-hug-short-sleeve-graphic-t-shirt/-/A-93834750",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-just-a-kid-who-loves-truck-short-sleeve-graphic-t-shirt/-/A-94102684",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-big-hero-6-baymax-grid-short-sleeve-graphic-t-shirt/-/A-93207770",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-goofy-short-sleeve-graphic-t-shirt/-/A-1000289250",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-baymax-i-am-not-fast-short-sleeve-graphic-t-shirt/-/A-93834781",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000289318",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000288983",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-big-brother-short-sleeve-graphic-t-shirt/-/A-1000251324",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-1st-grade-out-of-this-world-short-sleeve-graphic-t-shirt/-/A-1000244952",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-hugs-his-puppy-short-sleeve-graphic-t-shirt/-/A-1000337726",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-goofy-donald-mickey-pluto-stickers-short-sleeve-graphic-t-shirt/-/A-1000269487",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pluto-short-sleeve-graphic-t-shirt/-/A-1000289371",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-donald-duck-short-sleeve-graphic-t-shirt/-/A-1000289254",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-sketch-pattern-short-sleeve-graphic-t-shirt/-/A-1000247519",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-obsessed-performance-tee/-/A-85637737",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-sketched-short-sleeve-graphic-t-shirt/-/A-1000337986",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337443",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-squad-grid-short-sleeve-graphic-t-shirt/-/A-1000245809",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-squad-grid-short-sleeve-graphic-t-shirt/-/A-1000245809",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-up-valentine-s-day-again-short-sleeve-graphic-t-shirt/-/A-94099080",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000336634",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-best-pals-mickey-short-sleeve-graphic-t-shirt/-/A-1000251398",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-little-brother-short-sleeve-graphic-t-shirt/-/A-1000251294",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-birthday-kid-short-sleeve-graphic-t-shirt/-/A-1001736424",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-short-sleeve-graphic-t-shirt/-/A-1000323428",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-short-sleeve-graphic-t-shirt/-/A-1000323291",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-birthday-boy-short-sleeve-graphic-t-shirt/-/A-1000185585",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-figaro-hugs-short-sleeve-graphic-t-shirt/-/A-1000337637",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000336889",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-total-legends-short-sleeve-graphic-t-shirt/-/A-1000245161",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-big-hero-6-squad-short-sleeve-graphic-t-shirt/-/A-93834747",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-dinos-are-my-favorite-short-sleeve-graphic-t-shirt/-/A-94102726",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000338120",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337609",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-pinocchio-short-sleeve-graphic-t-shirt/-/A-94155839",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000288894",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-goofy-it-s-my-birthday-short-sleeve-graphic-t-shirt/-/A-1001736393",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337976",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-birthday-boy-spotlight-short-sleeve-graphic-t-shirt/-/A-1001736464",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pluto-collage-short-sleeve-graphic-t-shirt/-/A-1000269681",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-short-sleeve-graphic-t-shirt/-/A-1000323316",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-pluto-short-sleeve-graphic-t-shirt/-/A-1000336770",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-short-sleeve-graphic-t-shirt/-/A-1000323316",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337874",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-birthday-boy-spotlight-short-sleeve-graphic-t-shirt/-/A-1001736464",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-easily-distracted-by-dinosaurs-short-sleeve-graphic-t-shirt/-/A-94102812",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337485",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-member-of-the-brother-club-short-sleeve-graphic-t-shirt/-/A-1000251288",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-endless-sunshine-short-sleeve-graphic-t-shirt/-/A-1000227119",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000289237",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-best-brother-short-sleeve-graphic-t-shirt/-/A-1000251522",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-different-letters-short-sleeve-graphic-t-shirt/-/A-1000337848",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-let-the-shenanigans-begin-short-sleeve-graphic-t-shirt/-/A-1000248792",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-minnie-goofy-donald-duck-daisy-pluto-photo-short-sleeve-graphic-t-shirt/-/A-1000337650",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000338165",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-classic-multicolored-logo-performance-tee/-/A-85824053",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-pinocchio-stickers-short-sleeve-graphic-t-shirt/-/A-1000026986",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000289121",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-tie-dye-logo-performance-tee/-/A-85637718",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-simple-white-logo-performance-tee/-/A-85637604",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-short-sleeve-graphic-t-shirt/-/A-1000323453",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-the-fox-and-the-hound-double-trouble-short-sleeve-graphic-t-shirt/-/A-1000018282",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-play-all-day-pixels-short-sleeve-graphic-t-shirt/-/A-1000375922",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-wake-up-be-cool-be-kind-repeat-short-sleeve-graphic-t-shirt/-/A-1000338076",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-faces-lion-king-grid-short-sleeve-graphic-t-shirt/-/A-1000254035",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-little-brother-big-heart-short-sleeve-graphic-t-shirt/-/A-1000251371",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000289426",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-awesome-big-brother-short-sleeve-graphic-t-shirt/-/A-1000251632",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-no-pants-no-problem-short-sleeve-graphic-t-shirt/-/A-1000246381",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-playdate-material-short-sleeve-graphic-t-shirt/-/A-1000246026",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-birthday-boy-donald-short-sleeve-graphic-t-shirt/-/A-1001736487",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-bunny-kisses-easter-wishes-short-sleeve-graphic-t-shirt/-/A-1000227193",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000289354",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000288890",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-chalk-drawing-short-sleeve-graphic-t-shirt/-/A-1000337950",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-raya-and-the-last-dragon-short-sleeve-graphic-t-shirt/-/A-1000312210",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-blowing-bubbles-everywhere-short-sleeve-graphic-t-shirt/-/A-1000338025",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-jump-short-sleeve-graphic-t-shirt/-/A-1000269552",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-birthday-icons-short-sleeve-graphic-t-shirt/-/A-1000185504",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337996",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-feelin-silly-short-sleeve-graphic-t-shirt/-/A-1000248977",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-short-sleeve-graphic-t-shirt/-/A-93022947",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-run-short-sleeve-graphic-t-shirt/-/A-1000269447",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-dr-teeth-long-winded-tour-short-sleeve-graphic-t-shirt/-/A-1000296536",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-making-moves-short-sleeve-graphic-t-shirt/-/A-1000338152",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-crew-camping-badges-short-sleeve-graphic-t-shirt/-/A-1000336554",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337686",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000338301",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000289071",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000289137",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337760",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000289072",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-pinocchio-nothin-but-trouble-short-sleeve-graphic-t-shirt/-/A-94156075",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-short-sleeve-graphic-t-shirt/-/A-1000323487",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-big-trucks-loads-of-fun-short-sleeve-graphic-t-shirt/-/A-94103027",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337758",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-big-hero-6-hello-i-am-baymax-short-sleeve-graphic-t-shirt/-/A-93207772",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-short-sleeve-graphic-t-shirt/-/A-1000323329",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-crew-short-sleeve-graphic-t-shirt/-/A-1000337473",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000338260",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-sweet-style-short-sleeve-graphic-t-shirt/-/A-1000338063",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-i-m-just-here-for-recess-short-sleeve-graphic-t-shirt/-/A-1000243850",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-festive-christmas-logo-performance-tee/-/A-85761021",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-1st-grade-squad-short-sleeve-graphic-t-shirt/-/A-1000244657",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-daisy-duck-short-sleeve-graphic-t-shirt/-/A-1000289293",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-hey-watch-this-short-sleeve-graphic-t-shirt/-/A-1000248068",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-leopard-print-logo-performance-tee/-/A-85637665",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-in-the-clouds-short-sleeve-graphic-t-shirt/-/A-1000337985",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-up-dug-my-dog-is-my-valentine-short-sleeve-graphic-t-shirt/-/A-94099258",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-i-m-cool-like-that-short-sleeve-graphic-t-shirt/-/A-1000248472",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-short-sleeve-graphic-t-shirt/-/A-1000323184",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-oh-boy-short-sleeve-graphic-t-shirt/-/A-1000269448",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-pluto-short-sleeve-graphic-t-shirt/-/A-1000337671",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337643",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-raya-and-the-last-dragon-short-sleeve-graphic-t-shirt/-/A-1000312143",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-checker-frame-short-sleeve-graphic-t-shirt/-/A-1000247881",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337849",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-short-sleeve-graphic-t-shirt/-/A-1000323299",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337428",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-sticker-look-short-sleeve-graphic-t-shirt/-/A-1000269893",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-short-sleeve-graphic-t-shirt/-/A-1000323491",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000289179",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-duchess-and-o-malley-night-sky-performance-tee/-/A-85824382",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-hot-cocoa-and-cozy-sweaters-performance-tee/-/A-85761306",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-kindergarten-squad-short-sleeve-graphic-t-shirt/-/A-1000243687",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-original-stay-true-short-sleeve-graphic-t-shirt/-/A-1000338289",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-raya-and-the-last-dragon-short-sleeve-graphic-t-shirt/-/A-1000312129",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-short-sleeve-graphic-t-shirt/-/A-1000323406",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-dr-teeth-the-electric-mayhem-tour-short-sleeve-graphic-t-shirt/-/A-1000296673",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-raya-and-the-last-dragon-short-sleeve-graphic-t-shirt/-/A-1000312145",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-oh-boy-easters-here-short-sleeve-graphic-t-shirt/-/A-1000226801",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pre-k-out-of-this-world-short-sleeve-graphic-t-shirt/-/A-1000243660",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-minnie-pluto-donald-short-sleeve-graphic-t-shirt/-/A-1000337455",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-springtime-smiles-short-sleeve-graphic-t-shirt/-/A-1000226642",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-you-can-do-hard-things-short-sleeve-graphic-t-shirt/-/A-1000269545",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000336625",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-classic-sketch-short-sleeve-graphic-t-shirt/-/A-1000338164",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000337514",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000337514",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-did-someone-say-recess-short-sleeve-graphic-t-shirt/-/A-1000244277",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports-short-sleeve-graphic-t-shirt/-/A-1000323215",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000336625",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000336622",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-big-hero-6-best-flame-bro-short-sleeve-graphic-t-shirt/-/A-93834760",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-dr-teeth-the-electric-mayhem-tour-short-sleeve-graphic-t-shirt/-/A-1000296482",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-later-alligator-short-sleeve-graphic-t-shirt/-/A-1000246730",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-raya-and-the-last-dragon-short-sleeve-graphic-t-shirt/-/A-1000312117",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-springtime-smiles-short-sleeve-graphic-t-shirt/-/A-1000226642",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-oh-boy-easter-is-here-short-sleeve-graphic-t-shirt/-/A-1000226828",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-neon-outlined-short-sleeve-graphic-t-shirt/-/A-1000336726",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000337622",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-raya-and-the-last-dragon-short-sleeve-graphic-t-shirt/-/A-1000312149",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-doodle-short-sleeve-graphic-t-shirt/-/A-1000338141",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-with-flowers-butterflies-short-sleeve-graphic-t-shirt/-/A-1000338222",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-dr-teeth-the-electric-mayhem-tour-short-sleeve-graphic-t-shirt/-/A-1000296673",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-preschool-squad-short-sleeve-graphic-t-shirt/-/A-1000243318",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000336689",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-minnie-short-sleeve-graphic-t-shirt/-/A-1000337482",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pre-k-out-of-this-world-short-sleeve-graphic-t-shirt/-/A-1000243660",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-raya-and-the-last-dragon-short-sleeve-graphic-t-shirt/-/A-1000312193",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-raya-and-the-last-dragon-short-sleeve-graphic-t-shirt/-/A-1000312185",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000338247",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000336739",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-oh-boy-easters-here-short-sleeve-graphic-t-shirt/-/A-1000226801",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-sticker-group-short-sleeve-graphic-t-shirt/-/A-1000269664",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-sword-in-the-stone-short-sleeve-graphic-t-shirt/-/A-1000280494",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-just-too-cool-retro-short-sleeve-graphic-t-shirt/-/A-1000376243",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-together-fur-ever-mickey-pluto-short-sleeve-graphic-t-shirt/-/A-1000269495",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-minnie-together-in-neon-short-sleeve-graphic-t-shirt/-/A-1000337881",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-preschool-squad-short-sleeve-graphic-t-shirt/-/A-1000243318",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000337622",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-pattern-collage-short-sleeve-graphic-t-shirt/-/A-1000337757",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-raya-and-the-last-dragon-short-sleeve-graphic-t-shirt/-/A-1000312129",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-springtime-smiles-short-sleeve-graphic-t-shirt/-/A-1000226642",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-oh-boy-easter-is-here-short-sleeve-graphic-t-shirt/-/A-1000226828",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-just-got-a-lot-cooler-pre-k-short-sleeve-graphic-t-shirt/-/A-1000244168",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337832",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-dr-teeth-the-electric-mayhem-tour-short-sleeve-graphic-t-shirt/-/A-1000296673",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-raya-and-the-last-dragon-short-sleeve-graphic-t-shirt/-/A-1000312227",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-minnie-short-sleeve-graphic-t-shirt/-/A-1000336648",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-nothing-unoriginal-about-me-short-sleeve-graphic-t-shirt/-/A-1000246582",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000288858",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-is-a-fashion-icon-short-sleeve-graphic-t-shirt/-/A-1000338181",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-minnie-short-sleeve-graphic-t-shirt/-/A-1000337482",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-doing-my-thing-short-sleeve-graphic-t-shirt/-/A-1000337944",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-later-alligator-short-sleeve-graphic-t-shirt/-/A-1000246730",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-just-too-cool-retro-short-sleeve-graphic-t-shirt/-/A-1000376243",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-awesome-little-brother-short-sleeve-graphic-t-shirt/-/A-1000251461",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-preschool-squad-short-sleeve-graphic-t-shirt/-/A-1000243318",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000336739",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pre-k-out-of-this-world-short-sleeve-graphic-t-shirt/-/A-1000243660",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-class-goof-short-sleeve-graphic-t-shirt/-/A-1000244969",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-oh-boy-easters-here-short-sleeve-graphic-t-shirt/-/A-1000226801",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000336709",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-character-group-rainbow-flower-short-sleeve-graphic-t-shirt/-/A-1000269567",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-doodle-short-sleeve-graphic-t-shirt/-/A-1000338141",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000337832",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-daisy-duck-short-sleeve-graphic-t-shirt/-/A-1000338078",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-short-sleeve-graphic-t-shirt/-/A-1000338247",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-later-alligator-short-sleeve-graphic-t-shirt/-/A-1000246730",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-short-sleeve-graphic-t-shirt/-/A-1000338277",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-stitch-woven-button-up-shirt-aqua-green/-/A-93623636",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-squad-t-shirt/-/A-91883291",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-classic-d-letter-pocket-print-t-shirt/-/A-85637485",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-z-o-m-b-i-e-s-zed-and-addison-t-shirt/-/A-86126818",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-kitten-strut-movie-logo-t-shirt/-/A-85633265",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-elio-ooooo-smile-t-shirt/-/A-1003560015",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-retro-logo-t-shirt/-/A-85637670",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-tie-dye-logo-t-shirt/-/A-85637622",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-classic-multicolored-logo-t-shirt/-/A-85824276",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-festive-christmas-logo-t-shirt/-/A-85761026",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-classic-multicolored-logo-t-shirt/-/A-85824276",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-princess-distressed-close-up-poster-t-shirt/-/A-89176717",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-xmas-snow-white-and-the-seven-dwarves-heigh-ho-t-shirt/-/A-85446503",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-up-wilderness-explorer-badge-t-shirt/-/A-87573566",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-red-camo-logo-t-shirt/-/A-85637768",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-kitten-strut-movie-logo-t-shirt/-/A-85633265",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-fun-together-t-shirt/-/A-91641810",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wish-star-birthday-boy-t-shirt/-/A-90059066",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-duchess-it-s-the-little-things-in-life-t-shirt/-/A-90983541",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-up-easter-dug-boing-boing-boing-t-shirt/-/A-91247415",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-candy-logo-t-shirt/-/A-85574385",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-elio-bff-duo-t-shirt/-/A-1003560019",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-duchess-and-o-malley-silhouette-t-shirt/-/A-85824155",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-princess-trio-doodles-t-shirt/-/A-91641856",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-elio-squad-adventures-t-shirt/-/A-1003559751",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-rainbow-logo-t-shirt/-/A-85637629",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wish-movie-logo-t-shirt/-/A-90058985",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cruella-fashion-sketch-t-shirt/-/A-83440298",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-kittens-climbing-pocket-badge-t-shirt/-/A-90983696",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-my-cat-is-my-valentine-t-shirt/-/A-85563237",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-simple-logo-t-shirt/-/A-89482113",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-strange-world-splat-drip-logo-t-shirt/-/A-87798114",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-i-heart-logo-t-shirt/-/A-85637657",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-kim-possible-team-possible-t-shirt/-/A-86926449",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-in-my-disney-era-t-shirt/-/A-91883260",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-this-is-my-lucky-shirt-t-shirt/-/A-85761053",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-up-easter-dug-boing-boing-boing-t-shirt/-/A-91247415",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-red-and-green-plaid-logo-t-shirt/-/A-85761143",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-st-patrick-s-day-dopey-dance-t-shirt/-/A-1002301340",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-strange-world-splat-hang-in-there-t-shirt/-/A-87798488",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-strange-world-let-s-go-make-history-t-shirt/-/A-87798703",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-oliver-company-christmas-oliver-t-shirt/-/A-89660513",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-rainbow-stack-t-shirt/-/A-85637747",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-princess-easter-eggs-t-shirt/-/A-91247720",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gargoyles-goliath-let-s-ride-t-shirt/-/A-86126835",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-pinocchio-make-a-splash-valentine-t-shirt/-/A-90647858",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-up-wilderness-explorer-badge-t-shirt/-/A-87573566",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cruella-crowns-logo-t-shirt/-/A-83438278",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-simple-white-logo-t-shirt/-/A-85637689",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-marie-in-a-bed-of-flowers-cuteness-stare-t-shirt/-/A-85633180",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-obsessed-t-shirt/-/A-85637611",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-hot-cocoa-and-cozy-sweaters-t-shirt/-/A-85761245",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cruella-house-logo-t-shirt/-/A-83440124",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cruella-pocket-emblem-t-shirt/-/A-83437772",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-strange-world-comic-book-cover-t-shirt/-/A-87798026",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wish-star-birthday-wishes-t-shirt/-/A-90059143",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wish-valentino-birthday-g-o-a-t-t-shirt/-/A-90059115",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-strange-world-splat-drip-logo-t-shirt/-/A-87798114",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wish-star-birthday-wishes-t-shirt/-/A-90059143",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wish-valentino-birthday-g-o-a-t-t-shirt/-/A-90059115",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-tiana-and-cinderella-dance-t-shirt/-/A-91641728",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cruella-pocket-emblem-t-shirt/-/A-83437772",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-strange-world-avalonia-venture-beyond-t-shirt/-/A-87798005",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-life-s-a-fairytale-t-shirt/-/A-91642117",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-kim-possible-so-not-the-drama-t-shirt/-/A-86926527",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-everybody-wants-to-be-a-cat-t-shirt/-/A-90983544",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-strange-world-clade-family-comic-strips-t-shirt/-/A-87798910",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-kim-possible-mission-kim-t-shirt/-/A-86926571",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-elio-space-silhouette-t-shirt/-/A-1003560010",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wish-asha-wishing-for-adventure-t-shirt/-/A-90059093",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-strange-world-avalonia-geographic-society-t-shirt/-/A-87798701",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-duchess-and-thomas-love-in-paris-t-shirt/-/A-85554622",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-kim-possible-retro-wave-rufus-t-shirt/-/A-86926781",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cruella-house-of-baroness-icon-logo-t-shirt/-/A-83439341",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cruella-lipstick-logo-t-shirt/-/A-83441764",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-princess-trio-doodles-t-shirt/-/A-91641856",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-kim-possible-call-me-beep-me-kim-t-shirt/-/A-86926735",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aristocats-classic-blue-logo-t-shirt/-/A-85824268",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cruella-distressed-red-lips-logo-t-shirt/-/A-83441483",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-sketched/-/A-1000672798",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-toy-story-pixar-cars-mickey-mouse-buzz-lightyear-lightning-mcqueen-birthday-baby-t-shirt-little-kid-to-big-kid/-/A-87293244",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-toy-story-pixar-cars-mickey-mouse-buzz-lightyear-lightning-mcqueen-birthday-baby-t-shirt-little-kid-to-big-kid/-/A-87293244",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-pixar-toy-story-buzz-lightyear-2-pack-t-shirts-little-kid-to-big-kid/-/A-88322010",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-graphic-t-shirt-toddler-to-big-kid/-/A-87294947",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-no-pants-no-problem/-/A-1000590901",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-1st-grade-squad/-/A-1000590475",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-let-the-shenanigans-begin/-/A-1000591224",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-checker-frame/-/A-1000591170",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-pluto/-/A-1000672810",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671055",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse/-/A-1000672877",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-minnie-minnie-mouse/-/A-1000672853",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-i-m-cool-like-that/-/A-1000591244",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-oh-boy-easter-is-here/-/A-1000597586",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-is-a-fashion-icon/-/A-1000672900",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671100",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pluto-snacks/-/A-1000672919",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-together-fur-ever-mickey-pluto/-/A-1000623463",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671142",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse/-/A-1000672953",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-kindergarten-squad/-/A-1000590403",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671105",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671070",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-total-legends/-/A-1000590708",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-minnie/-/A-1000672944",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse/-/A-1000672818",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-feelin-silly/-/A-1000591274",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-different-letters/-/A-1000672843",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pluto-donald-duck-mickey-goofy/-/A-1000672905",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse/-/A-1000672895",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-oh-boy/-/A-1000623446",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-minnie-goofy-donald-duck-daisy-pluto-photo/-/A-1000672807",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671100",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse/-/A-1000672877",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-squad-grid/-/A-1000590792",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-school-is-cool/-/A-1000590346",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671110",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671055",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671142",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pre-k-out-of-this-world/-/A-1000590362",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-oh-boy-easter-is-here/-/A-1000597586",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-oh-boy-easters-here/-/A-1000597572",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-blowing-bubbles-everywhere/-/A-1000672848",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-sticker-group/-/A-1000623474",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-did-someone-say-recess/-/A-1000590457",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse/-/A-1000672952",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-kindergarten-out-of-this-world/-/A-1000590416",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-minnie/-/A-1000672944",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse/-/A-1000672933",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671075",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-bunny-kisses-easter-wishes/-/A-1000597596",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-just-got-a-lot-cooler-pre-k/-/A-1000590390",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-endless-sunshine/-/A-1000597588",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671053",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-donald-duck-goofy/-/A-1000672839",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse/-/A-1000672910",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671070",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-making-moves/-/A-1000672941",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-dr-teeth-long-winded-tour/-/A-1000654405",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-pluto-collage/-/A-1000623462",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671105",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-just-too-cool-retro/-/A-1000722839",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-standard-sports/-/A-1000671093",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-nothing-unoriginal-about-me/-/A-1000590914",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse/-/A-1000672832",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-the-coolest-kid/-/A-1000590735",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-pluto/-/A-1000672810",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse/-/A-1000672953",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse-multicolored-grid/-/A-1000672809",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse/-/A-1000672826",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-watch-this/-/A-1000591063",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-the-aristocats/-/A-1000723047",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-playdate-material/-/A-1000722813",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-the-aristocats/-/A-1000723047",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-mickey-mouse-sketched/-/A-1000672798",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-minnie-mouse/-/A-1000672818",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-kindergarten-squad/-/A-1000590403",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boys-disney-1st-grade-out-of-this-world/-/A-1000590481",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
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
