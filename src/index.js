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
      url: "https://www.target.com/p/boy-s-husky-marvel-periodic-table-of-heroes/-/A-87570527",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-i-m-birthday-boy-spidey-t-shirt/-/A-87570160",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-marvels-action-poses-t-shirt/-/A-90058647",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-we-are-venom-character-menagerie-t-shirt/-/A-79712475",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-kid-iron-man-t-shirt/-/A-89918132",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hulk-team-incredible-t-shirt/-/A-86333206",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-ragnarok-asgardian-warrior-hammer-t-shirt/-/A-86334696",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-super-hero-mode-t-shirt/-/A-82354682",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hulk-smashing-birthday-t-shirt/-/A-87570171",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-captain-america-t-shirt/-/A-89918156",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-color-smudge-t-shirt/-/A-86333417",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-venom-shield-logo-t-shirt/-/A-85312724",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-candy-hearts-t-shirt/-/A-90647776",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-guardians-of-the-galaxy-vol-2-groot-face-t-shirt/-/A-82358960",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-into-the-spider-verse-spider-ham-weirder-t-shirt/-/A-85816394",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-the-falcon-and-the-winter-soldier-captain-america-pose-sam-t-shirt/-/A-83031938",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-marvel-periodic-table-of-heroes/-/A-87570527",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-striped-profile-t-shirt/-/A-81414831",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-avengers-t-shirt/-/A-82362641",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-moon-t-shirt/-/A-79710579",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-groot-jingle-around-t-shirt/-/A-81930247",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-gingerbread-cookie-heroes-t-shirt/-/A-81932081",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-my-mom-is-my-hero-cartoon-heroes-t-shirt/-/A-88789572",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-panther-t-shirt/-/A-87569867",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-candy-heart-love-bug-t-shirt/-/A-85554594",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-hero-collage-t-shirt/-/A-89439528",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-bullseye-t-shirt/-/A-85280371",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-hulk-mech-suit-t-shirt/-/A-87569940",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-into-the-spider-verse-city-t-shirt/-/A-86335602",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-superhero-mask-t-shirt/-/A-89917933",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-into-the-spider-verse-spider-ham-pocket-t-shirt/-/A-85169699",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-cute-avengers-t-shirt/-/A-87570399",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-iron-man-invincible-holiday-t-shirt/-/A-81929933",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-marvel-spider-man-into-the-spider-verse-miles-morales-splat/-/A-87569769",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-filled-mask-t-shirt/-/A-89287333",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-the-avengers-team-awesome-t-shirt/-/A-89287301",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-doctor-strange-portrait-t-shirt/-/A-85627353",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-spider-man-amazingly-lucky-t-shirt/-/A-79783133",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-thunderbolts-red-guardian-star-t-shirt/-/A-1003221740",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-iron-man-in-flight-t-shirt/-/A-85827412",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-thanos-grayscale-t-shirt/-/A-86333268",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-i-am-groot-cute-smiling-groot-face-t-shirt/-/A-86901684",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-leap-t-shirt/-/A-87359732",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-america-shield-comic-print-t-shirt/-/A-79710754",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-venom-face-logo-t-shirt/-/A-79712580",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-amazing-spider-man-jump-t-shirt/-/A-86333916",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-iron-suit-gear-t-shirt/-/A-84934800",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-war-machine-portrait-t-shirt/-/A-89439689",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-miles-morales-glitch-logo-t-shirt/-/A-86332748",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-stronger-together-t-shirt/-/A-79710790",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hulk-gray-grayscale-panels-t-shirt/-/A-85088830",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-america-shield-comic-print-t-shirt/-/A-79710754",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-i-am-groot-cute-smiling-groot-face-t-shirt/-/A-86901684",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-leap-t-shirt/-/A-87359732",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-thanos-grayscale-t-shirt/-/A-86333268",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-spider-man-lucky-clover-t-shirt/-/A-85873139",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-venom-face-logo-t-shirt/-/A-79712580",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-halloween-hulk-classic-costume-t-shirt/-/A-81494806",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-claw-tear-t-shirt/-/A-81414790",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-amazing-spider-man-jump-t-shirt/-/A-86333916",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-miles-morales-glitch-logo-t-shirt/-/A-86332748",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-stronger-together-t-shirt/-/A-79710790",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-groot-portrait-t-shirt/-/A-89439815",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-daddy-you-are-our-super-hero-t-shirt/-/A-86501945",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-valentine-s-day-candy-heart-heroes-t-shirt/-/A-88324141",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-superhero-to-the-rescue-t-shirt/-/A-82362402",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-thunderbolts-bucky-barnes-logo-t-shirt/-/A-1003221324",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-colorful-gargantos-t-shirt/-/A-85832272",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-ironman-t-shirt/-/A-89404806",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-spider-man-birthday-kid-superhero-t-shirt/-/A-89917912",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-venom-attack-t-shirt/-/A-84740544",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-iron-man-in-flight-t-shirt/-/A-85827412",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-iron-man-portrait-t-shirt/-/A-79592896",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-the-mighty-thor-comic-book-shot-t-shirt/-/A-89287299",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-scarlet-witch-t-shirt/-/A-85831649",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-dual-identity-poster-t-shirt/-/A-86120902",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-iron-man-invincible-holiday-t-shirt/-/A-81929933",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-avenger-icons-t-shirt/-/A-90779017",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-comics-miles-birthday-boy-t-shirt/-/A-87573495",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-iron-man-venom-badge-t-shirt/-/A-84739866",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-captain-america-shield-pinch-proof-t-shirt/-/A-85874296",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-hulk-fist-who-needs-luck-t-shirt/-/A-85887107",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-guardians-of-the-galaxy-star-lord-wanted-poster-t-shirt/-/A-82365786",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-guardians-of-the-galaxy-vol-2-groot-growth-t-shirt/-/A-79710869",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-pocket-logo-t-shirt/-/A-89287385",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-be-mine-t-shirt/-/A-85554527",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-marvel-father-s-day-avengers-hero-dad/-/A-87570458",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-smudged-thor-t-shirt/-/A-79711269",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-the-thing-it-s-pinching-time-t-shirt/-/A-85886743",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-hero-tech-frames-t-shirt/-/A-87570554",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-miles-morales-glitch-mask-t-shirt/-/A-86333584",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-groot-rocket-season-grooting-t-shirt/-/A-81931407",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-iron-man-space-poster-t-shirt/-/A-89439724",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-vintage-poster-t-shirt/-/A-89439756",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-superhero-t-shirt/-/A-89917904",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-and-the-wasp-masks-t-shirt/-/A-89439799",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-captain-america-brave-new-world-black-and-red-action-poster-t-shirt/-/A-1002223634",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-amazing-spider-man-responsibility-t-shirt/-/A-84936303",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-thunderbolts-red-guardian-star-t-shirt/-/A-1003221740",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hulk-gray-grayscale-panels-t-shirt/-/A-85088830",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-spider-man-birthday-kid-ghost-spider-t-shirt/-/A-89918170",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-i-am-groot-cute-smiling-groot-face-t-shirt/-/A-86901684",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-america-shield-comic-print-t-shirt/-/A-79710754",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-leap-t-shirt/-/A-87359732",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-thanos-grayscale-t-shirt/-/A-86333268",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-venom-face-logo-t-shirt/-/A-79712580",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-spider-man-lucky-clover-t-shirt/-/A-85873139",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-miles-morales-glitch-logo-t-shirt/-/A-86332748",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-stronger-together-t-shirt/-/A-79710790",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-miles-morales-game-map-t-shirt/-/A-86088857",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hulk-heart-smash-pocket-t-shirt/-/A-85554634",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-the-falcon-and-the-winter-soldier-falcon-repeating-t-shirt/-/A-82558870",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-superhero-to-the-rescue-t-shirt/-/A-82362402",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-color-smudge-t-shirt/-/A-86333417",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-stark-industries-iron-man-logo-t-shirt/-/A-79592964",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-thor-repeat-t-shirt/-/A-79710811",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-spider-man-birthday-kid-superhero-t-shirt/-/A-89917912",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-thunderbolts-john-walker-in-shadows-t-shirt/-/A-1003221329",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-hulk-t-shirt/-/A-82358611",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-wakanda-forever-t-shirt/-/A-81414981",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-grayscale-pose-t-shirt/-/A-81414975",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-avenger-icons-t-shirt/-/A-90779017",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-puzzle-quest-spider-man-web-t-shirt/-/A-82373644",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-into-the-spider-verse-miles-morales-splat-t-shirt/-/A-79711704",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-inhumans-characters-t-shirt/-/A-86375676",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-marvel-avengers-endgame-hero-huddle/-/A-87570513",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-i-am-groot-guardians-of-the-galaxy-wood-moss-logo-t-shirt/-/A-86901639",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-8th-birthday-t-shirt/-/A-89287399",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-get-your-groot-on-t-shirt/-/A-82187663",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-thor-view-t-shirt/-/A-86336588",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-comic-star-logo-t-shirt/-/A-86375604",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-into-the-spider-verse-symbol-t-shirt/-/A-79592537",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-iron-man-venom-badge-t-shirt/-/A-84739866",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-spider-man-santa-hat-t-shirt/-/A-85446023",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-captain-america-s-team-t-shirt/-/A-84958273",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-homecoming-suit-schematics-t-shirt/-/A-85169485",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-hulk-don-t-forget-to-wear-green-t-shirt/-/A-85873365",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-hulk-good-to-be-green-t-shirt/-/A-85882949",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-captain-america-brave-new-world-falcon-and-captain-america-comic-book-cover-t-shirt/-/A-1002223377",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-amazing-spider-man-logo-t-shirt/-/A-85825411",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-galactic-team-t-shirt/-/A-82367270",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-thanos-repeat-t-shirt/-/A-79712584",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-iron-man-gray-grayscale-panels-t-shirt/-/A-85827180",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-easter-egg-hunt-superhero-t-shirt/-/A-88718780",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-classic-t-shirt/-/A-87360309",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-avengers-infinity-war-hulkbuster-2-0-t-shirt/-/A-82359273",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-character-collage-t-shirt/-/A-79711011",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-gold-logo-t-shirt/-/A-85975613",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-the-falcon-and-the-winter-soldier-captain-america-ready-t-shirt/-/A-83031734",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-ripped-costume-t-shirt/-/A-81495653",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-guardians-of-the-galaxy-rocket-target-t-shirt/-/A-82374001",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-classic-thor-battle-scenes-t-shirt/-/A-83988204",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-swinging-6th-birthday-t-shirt/-/A-92225748",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-prism-t-shirt/-/A-85816103",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-guardians-of-the-galaxy-vol-2-baby-groot-close-up-t-shirt/-/A-82360697",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-marvel-st-patrick-s-day-this-is-my-lucky-shirt-t-shirt/-/A-88240457",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-3rd-birthday-spidey-t-shirt/-/A-87570271",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-neon-group-shot-t-shirt/-/A-85831076",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-the-falcon-and-the-winter-soldier-captain-america-paint-t-shirt/-/A-83031913",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-10th-anniversary-more-than-a-fan-t-shirt/-/A-79712376",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-suit-t-shirt/-/A-87359782",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-halloween-hulk-classic-costume-t-shirt/-/A-81494806",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-name-stack-t-shirt/-/A-85980471",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-panther-t-shirt/-/A-87569867",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-wakanda-forever-logo-t-shirt/-/A-89439735",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-hulk-view-t-shirt/-/A-89439862",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-avengers-infinity-war-star-lord-portrait-t-shirt/-/A-85816163",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-groot-venom-badge-t-shirt/-/A-84739978",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-iron-man-core-t-shirt/-/A-87570006",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-spider-man-t-shirt/-/A-87570107",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-wakanda-forever-logo-t-shirt/-/A-89439735",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-tech-pattern-t-shirt/-/A-85171605",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-spider-man-web-t-shirt/-/A-81931180",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-into-the-spider-verse-hexagon-t-shirt/-/A-85168429",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-iron-man-core-t-shirt/-/A-87570006",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-hammer-pinch-proof-st-patrick-s-t-shirt/-/A-82187702",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-spider-man-t-shirt/-/A-87570107",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-festive-hero-icons-t-shirt/-/A-81882806",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-into-the-spider-verse-miles-kick-above-city-t-shirt/-/A-85089370",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-widow-hero-target-t-shirt/-/A-84241866",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-ragnarok-champion-fight-t-shirt/-/A-83978597",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-stealth-hero-t-shirt/-/A-85171750",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-venom-let-there-be-carnage-shiny-v-t-shirt/-/A-85281539",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-scarlet-witch-t-shirt/-/A-85831649",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-america-face-t-shirt/-/A-86058973",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-doc-ock-comic-cover-t-shirt/-/A-85976250",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ugly-christmas-panther-mask-t-shirt/-/A-81930892",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-thunderbolts-disposable-delinquents-logos-t-shirt/-/A-1003221407",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-venom-mask-symbol-t-shirt/-/A-79712393",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-cap-shield-t-shirt/-/A-87570056",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-if-zombie-captain-america-t-shirt/-/A-85302712",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-vote-for-loki-costume-t-shirt/-/A-87570205",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-web-time-t-shirt/-/A-82368988",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-she-hulk-attorney-at-law-flex-icon-outline-t-shirt/-/A-87384700",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-lucky-black-panther-mask-t-shirt/-/A-85887006",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-thor-repeat-t-shirt/-/A-79710811",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-groot-galaxy-greetings-son-t-shirt/-/A-81931874",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-hulk-son-snow-t-shirt/-/A-81930170",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-love-and-thunder-costume-thor-suit-t-shirt/-/A-87118256",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-amazing-santa-spider-man-t-shirt/-/A-81931198",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ugly-christmas-iron-man-t-shirt/-/A-81931711",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-if-zombie-captain-america-t-shirt/-/A-85302712",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-captain-america-clover-shield-t-shirt/-/A-85872125",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-paw-prints-t-shirt/-/A-79711298",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-guardians-of-the-galaxy-groot-greetings-t-shirt/-/A-81881792",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-marvel-star-symbol-swirl-t-shirt/-/A-85816611",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-spider-man-web-t-shirt/-/A-81931180",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-mech-suit-spider-man-birthday-t-shirt/-/A-87570146",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ugly-christmas-spider-man-season-t-shirt/-/A-81882665",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-unlimited-villains-t-shirt/-/A-85304255",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-hero-icon-snowflakes-t-shirt/-/A-81882435",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hulk-gray-grayscale-panels-t-shirt/-/A-85088830",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-w-kabi-emblem-t-shirt/-/A-87359970",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-halloween-hulk-web-t-shirt/-/A-81496234",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-marvel-spider-man-no-way-home-iron-suit-gear/-/A-87570228",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-love-and-thunder-distressed-main-characters-t-shirt/-/A-87573866",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-mask-outline-t-shirt/-/A-81414802",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-hulk-wants-presents-t-shirt/-/A-81883447",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-colorful-stack-t-shirt/-/A-85975599",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-hero-icon-snowflakes-t-shirt/-/A-81882435",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-w-kabi-emblem-t-shirt/-/A-87359970",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-marvel-spider-man-no-way-home-iron-suit-gear/-/A-87570228",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-hulk-wants-presents-t-shirt/-/A-81883447",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-hulk-brother-snow-t-shirt/-/A-81930219",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-diamond-t-shirt/-/A-79711423",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-mecha-spidey-birthday-t-shirt/-/A-87570074",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-america-body-t-shirt/-/A-87570469",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-marvel-guardians-of-galaxy-vol-2-groot-mix-tape/-/A-87570585",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-puzzle-quest-spider-man-web-t-shirt/-/A-82373644",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-kawaii-t-shirt/-/A-81414885",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-every-suit-t-shirt/-/A-82371400",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-marvel-spider-man-birthday-boy-mask/-/A-87569812",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-loki-clock-s-ticking-t-shirt/-/A-82574377",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-mighty-thor-ready-for-battle-t-shirt/-/A-86061222",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-big-cats-poster-t-shirt/-/A-89287432",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-heroic-circle-t-shirt/-/A-85816414",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-spider-man-heroic-son-t-shirt/-/A-81882441",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-homecoming-web-scene-t-shirt/-/A-85169500",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-infinity-stones-heroes-t-shirt/-/A-89439513",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-marvel-star-symbol-costume-t-shirt/-/A-81496040",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-she-hulk-attorney-at-law-flex-icon-outline-t-shirt/-/A-87384700",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-target-acquired-t-shirt/-/A-85282135",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-every-suit-t-shirt/-/A-82371400",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-marvel-spider-man-birthday-boy-mask/-/A-87569812",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-black-panther-lucky-shirt-t-shirt/-/A-85874461",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-loki-clock-s-ticking-t-shirt/-/A-82574377",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-mighty-thor-ready-for-battle-t-shirt/-/A-86061222",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-hero-rainbow-panel-t-shirt/-/A-85825443",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-big-cats-poster-t-shirt/-/A-89287432",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-drax-portrait-t-shirt/-/A-89439523",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-spider-man-nice-list-t-shirt/-/A-81883314",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-heroic-circle-t-shirt/-/A-85816414",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-spider-man-heroic-son-t-shirt/-/A-81882441",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-homecoming-web-scene-t-shirt/-/A-85169500",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-wakanda-forever-t-shirt/-/A-87359728",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-marvel-star-symbol-costume-t-shirt/-/A-81496040",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-target-acquired-t-shirt/-/A-85282135",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-happy-hero-holiday-t-shirt/-/A-81930933",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-captain-marvel-merry-bright-t-shirt/-/A-81929792",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-iron-man-core-t-shirt/-/A-87570006",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-be-mine-t-shirt/-/A-85554487",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-galaxy-t-shirt/-/A-86062182",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thanos-retro-oh-snap-t-shirt/-/A-79592969",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-guardians-of-the-galaxy-halloween-rocket-t-shirt/-/A-84091241",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-wakanda-salute-t-shirt/-/A-81414964",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-contest-of-champions-hulk-battle-t-shirt/-/A-85825703",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-geometric-thor-t-shirt/-/A-89287553",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-videogame-t-shirt/-/A-87570322",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-ragnarok-battle-paint-t-shirt/-/A-86333846",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-jumping-into-action-t-shirt/-/A-86120821",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-spider-man-nice-list-t-shirt/-/A-81883314",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-into-the-spider-verse-green-goblin-t-shirt/-/A-89439821",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-rocket-racoon-body-t-shirt/-/A-87570369",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-marvel-christmas-festive-hero-icons/-/A-87570442",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-miles-morales-mask-pattern-t-shirt/-/A-86333220",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-hulk-mech-suit-punch-t-shirt/-/A-87569770",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-america-shield-neon-light-t-shirt/-/A-85388918",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-hero-poster-t-shirt/-/A-85170571",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-thor-t-shirt/-/A-89405058",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-venomized-hero-circle-t-shirt/-/A-79712339",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-love-and-thunder-demigod-thor-t-shirt/-/A-87574044",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-high-tech-logo-t-shirt/-/A-89439926",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-widow-avenger-symbol-t-shirt/-/A-85155748",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-sanctum-logo-t-shirt/-/A-85832457",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-america-shield-watercolor-print-t-shirt/-/A-85389101",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-classic-tales-to-astonish-t-shirt/-/A-85389385",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-mech-suit-icon-birthday-t-shirt/-/A-87569966",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-panels-t-shirt/-/A-85894417",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-gargantos-sealed-t-shirt/-/A-85832355",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-comic-star-logo-t-shirt/-/A-86375604",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-web-frame-t-shirt/-/A-85169912",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-neon-group-shot-t-shirt/-/A-85831076",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-homecoming-hang-t-shirt/-/A-85168765",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-puzzle-quest-doctor-strange-orb-t-shirt/-/A-85627358",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-starry-characters-t-shirt/-/A-81414854",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-amazing-santa-spider-man-t-shirt/-/A-81931198",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-the-falcon-and-the-winter-soldier-action-logo-t-shirt/-/A-82558902",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-marvel-venom-face-logo/-/A-87570494",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-homecoming-suit-schematics-t-shirt/-/A-85169485",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-if-party-thor-t-shirt/-/A-85302428",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-halloween-thanos-costume-t-shirt/-/A-84808856",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-iron-man-flight-ready-t-shirt/-/A-79711274",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-prism-t-shirt/-/A-85816103",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-webbed-spider-man-amazing-dad-t-shirt/-/A-82783374",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-father-s-day-avengers-dad-traits-t-shirt/-/A-82783630",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-who-is-the-spider-man-t-shirt/-/A-84935416",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-halloween-thor-costume-t-shirt/-/A-81495791",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-guardians-of-the-galaxy-rocket-schematic-t-shirt/-/A-85388454",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-iron-man-avenge-fallen-t-shirt/-/A-85827594",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-shang-chi-and-the-legend-of-the-ten-rings-costume-t-shirt/-/A-84631900",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-the-big-guns-t-shirt/-/A-87570552",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-text-logo-t-shirt/-/A-86335298",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-mask-outline-t-shirt/-/A-81414802",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-earth-day-heroes-icons-t-shirt/-/A-88716313",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-the-falcon-and-the-winter-soldier-baron-zemo-mask-t-shirt/-/A-82718439",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-chillin-like-a-hero-t-shirt/-/A-85827867",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-loki-for-all-time-always-drawing-t-shirt/-/A-82574268",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-minimalist-thor-t-shirt/-/A-89439643",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-group-poster-t-shirt/-/A-85831192",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-text-logo-t-shirt/-/A-86335298",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-loki-glorious-purpose-drawing-t-shirt/-/A-82574262",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-inhumans-characters-t-shirt/-/A-86375676",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ripped-spider-man-costume-t-shirt/-/A-87570151",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-hulk-mech-suit-punch-t-shirt/-/A-87569770",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-earth-day-a-symbol-t-shirt/-/A-88716243",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-black-suit-blueprint-t-shirt/-/A-84935502",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-ready-to-shoot-bow-purple-box-t-shirt/-/A-85980782",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-prism-t-shirt/-/A-85816103",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-gold-logo-t-shirt/-/A-85975613",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-we-are-groot-side-profile-t-shirt/-/A-88716267",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-halloween-iron-man-joke-t-shirt/-/A-84091173",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-character-view-t-shirt/-/A-82372717",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-unlimited-characters-t-shirt/-/A-85304467",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-if-strength-t-shirt/-/A-85302249",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-lightning-strike-t-shirt/-/A-85170534",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-earth-day-heroes-icons-t-shirt/-/A-88716313",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-the-big-guns-t-shirt/-/A-87570552",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-groot-galaxy-greetings-brother-t-shirt/-/A-81931914",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-earth-s-mightiest-hulk-t-shirt/-/A-86338950",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-character-shot-t-shirt/-/A-85815951",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-hulk-wishes-t-shirt/-/A-81930114",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-groovy-strange-t-shirt/-/A-85832310",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-hulk-mech-suit-t-shirt/-/A-87569940",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-avengers-infinity-war-star-lord-portrait-t-shirt/-/A-85816163",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-the-falcon-and-the-winter-soldier-action-logo-t-shirt/-/A-82558902",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-eye-of-agamotto-t-shirt/-/A-85303953",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-guardians-of-the-galaxy-naughty-rocket-t-shirt/-/A-81930754",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-guardians-of-the-galaxy-rocket-seasons-t-shirt/-/A-81930882",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-homecoming-upside-down-t-shirt/-/A-85171543",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-homecoming-classic-logo-t-shirt/-/A-85169816",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-orange-rune-t-shirt/-/A-85831126",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-high-tech-t-shirt/-/A-82368796",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-unlimited-bullet-points-t-shirt/-/A-85304297",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-if-star-lord-t-shirt/-/A-85302632",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-if-hydra-stomper-t-shirt/-/A-85302389",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-makes-a-loki-a-loki-t-shirt/-/A-82574292",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-the-falcon-and-the-winter-soldier-baron-zemo-mask-t-shirt/-/A-82718439",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-neon-strange-t-shirt/-/A-85832291",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-iron-man-end-journey-t-shirt/-/A-85827774",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-halloween-avengers-scene-t-shirt/-/A-81496350",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-epic-view-t-shirt/-/A-81414843",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-kid-hulk-t-shirt/-/A-89917990",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-neon-strange-t-shirt/-/A-85832291",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-iron-man-end-journey-t-shirt/-/A-85827774",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-widow-avenger-logo-t-shirt/-/A-84958364",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-amazing-santa-spider-man-t-shirt/-/A-81931198",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-iron-man-pinch-proof-t-shirt/-/A-85874336",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-thor-mighty-lucky-t-shirt/-/A-82185962",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-dazzler-superhero-friends-comic-book-cover-t-shirt/-/A-92377829",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-groot-galaxy-greetings-son-t-shirt/-/A-81931874",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-knit-pattern-print-t-shirt/-/A-81930870",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-brothers-give-best-thor-presents-t-shirt/-/A-81930842",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-purple-poster-t-shirt/-/A-85282063",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-dad-incredible-like-hulk-t-shirt/-/A-82783180",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-wakanda-silhouette-t-shirt/-/A-81414710",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-guardians-of-the-galaxy-groot-cartoon-t-shirt/-/A-81930935",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-unlimited-logo-t-shirt/-/A-85304206",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-black-logo-t-shirt/-/A-85281242",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-unlimited-bullet-points-t-shirt/-/A-85304297",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-black-suit-blueprint-t-shirt/-/A-84935502",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-venom-claw-symbol-t-shirt/-/A-84740244",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-christmas-cateye-t-shirt/-/A-85280445",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-spider-man-heroic-season-t-shirt/-/A-81883519",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-dazzler-disco-fever-t-shirt/-/A-92377617",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-modern-logo-t-shirt/-/A-79711250",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-if-hydra-stomper-t-shirt/-/A-85302389",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-venom-claw-symbol-t-shirt/-/A-84740244",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-happy-holiday-heroes-t-shirt/-/A-81931505",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-thor-t-shirt/-/A-89918175",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-captain-marvel-pinch-proof-t-shirt/-/A-85874434",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-text-logo-t-shirt/-/A-81414632",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-halloween-avengers-scene-t-shirt/-/A-81496350",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-falcon-logo-t-shirt/-/A-89918129",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-comics-classic-avengers-t-shirt/-/A-87573396",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-marvel-vintage-star-costume-t-shirt/-/A-89439747",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-earth-s-luckiest-heroes-st-patrick-s-t-shirt/-/A-82187565",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-agatha-all-along-purple-logo-t-shirt/-/A-93539571",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-7th-birthday-t-shirt/-/A-92225846",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-carol-danvers-5th-birthday-t-shirt/-/A-92225606",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hulk-crazy-in-love-t-shirt/-/A-90647809",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-hulk-legend-t-shirt/-/A-86337396",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-gambit-6th-birthday-t-shirt/-/A-92225518",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-captain-america-brave-new-world-new-team-comic-book-cover-t-shirt/-/A-1002223491",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-widow-hourglass-silhouette-t-shirt/-/A-84235899",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-dr-strange-costume-t-shirt/-/A-89287550",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-group-repeating-t-shirt/-/A-85013134",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-hammer-4th-birthday-t-shirt/-/A-92225684",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-if-guardians-panels-t-shirt/-/A-85302121",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-hulk-ready-t-shirt/-/A-86334347",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-shuri-and-okoye-4th-birthday-t-shirt/-/A-92225934",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-swinging-3rd-birthday-t-shirt/-/A-92225735",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-shuri-and-okoye-5th-birthday-t-shirt/-/A-92226047",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-geometric-strange-t-shirt/-/A-85832266",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-she-hulk-attorney-at-law-brains-and-muscles-t-shirt/-/A-87387088",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-night-s-hero-t-shirt/-/A-85170609",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-8th-birthday-t-shirt/-/A-92225860",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-action-pose-8th-birthday-t-shirt/-/A-92225955",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-doctor-strange-shirt-t-shirt/-/A-85832074",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-hammer-4th-birthday-t-shirt/-/A-92225684",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-captain-america-brave-new-world-animated-poster-t-shirt/-/A-1002223556",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-cartoon-captain-america-shield-t-shirt/-/A-86333832",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-character-logo-t-shirt/-/A-85831813",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-7th-birthday-t-shirt/-/A-92225846",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-dazzler-secret-sister-comic-book-cover-t-shirt/-/A-92377701",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-carol-danvers-5th-birthday-t-shirt/-/A-92225606",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-earth-s-luckiest-heroes-st-patrick-s-t-shirt/-/A-82187565",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-gambit-7th-birthday-t-shirt/-/A-92225533",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-character-view-t-shirt/-/A-81414933",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-marvels-ms-marvel-portrait-t-shirt/-/A-90058771",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-hawkeye-logo-t-shirt/-/A-89918040",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-parker-queens-1962-t-shirt/-/A-1004546312",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-team-mighty-t-shirt/-/A-86335439",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-solo-strange-t-shirt/-/A-85831934",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-agatha-all-along-purple-logo-t-shirt/-/A-93539571",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-thunderbolts-ghost-silhouette-t-shirt/-/A-1003221461",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-black-and-white-tv-show-logo-t-shirt/-/A-86119484",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-18th-birthday-t-shirt/-/A-92225763",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-widow-hourglass-silhouette-t-shirt/-/A-84235899",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-ragnarok-hulk-fight-t-shirt/-/A-86339371",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-inhumans-family-t-shirt/-/A-86376935",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-black-suit-t-shirt/-/A-85031103",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-agatha-all-along-purple-logo-t-shirt/-/A-93539571",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-she-hulk-attorney-at-law-hero-at-the-beach-t-shirt/-/A-87384652",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-classic-logo-t-shirt/-/A-85170363",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-journey-s-end-t-shirt/-/A-85827219",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-hieroglyphic-moon-phase-logo-t-shirt/-/A-86120753",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-new-suits-assemble-t-shirt/-/A-89439608",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-hammer-4th-birthday-t-shirt/-/A-92225684",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-she-hulk-attorney-at-law-super-lawyer-t-shirt/-/A-87387964",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-thunderbolts-red-guardian-silhouette-t-shirt/-/A-1003221511",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-spider-man-torment-comic-cover-t-shirt/-/A-1004553555",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-friendly-neighborhood-hero-t-shirt/-/A-85032053",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-21st-birthday-t-shirt/-/A-92225660",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-golden-jaguar-t-shirt/-/A-87360203",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-agatha-all-along-coven-true-t-shirt/-/A-93539315",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-ragnarok-battle-ready-t-shirt/-/A-86333836",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-hero-tech-panels-t-shirt/-/A-85827558",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-marvels-photon-portrait-t-shirt/-/A-90058776",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-agatha-all-along-down-the-road-t-shirt/-/A-93539204",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-mysterio-masked-t-shirt/-/A-85171520",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-widow-hourglass-silhouette-t-shirt/-/A-84235899",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-dazzler-secret-sister-comic-book-cover-t-shirt/-/A-92377701",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-spider-man-torment-comic-cover-t-shirt/-/A-1004553555",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-shuri-and-okoye-6th-birthday-t-shirt/-/A-92225975",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-ragnarok-grandmaster-arena-t-shirt/-/A-86334241",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-rocket-and-baby-groot-7th-birthday-t-shirt/-/A-92225709",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-heroes-for-hire-luke-cage-panels-t-shirt/-/A-86060919",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-ragnarok-asgardian-warrior-t-shirt/-/A-86334444",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-action-pose-4th-birthday-t-shirt/-/A-92225741",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-classic-logo-t-shirt/-/A-85170363",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-metallic-iron-man-t-shirt/-/A-89439767",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-agatha-all-along-calderu-card-t-shirt/-/A-93539179",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-captain-marvel-star-symbol-shield-t-shirt/-/A-85816739",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-gold-bird-skull-logo-t-shirt/-/A-86120930",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-love-and-thunder-new-asgard-logo-t-shirt/-/A-87117678",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-if-guardians-of-the-multiverse-t-shirt/-/A-85302582",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-18th-birthday-t-shirt/-/A-92225763",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-character-scene-t-shirt/-/A-85825404",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-groovy-magic-t-shirt/-/A-85830980",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-shadow-streak-t-shirt/-/A-85169221",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-ragnarok-friend-fight-t-shirt/-/A-85391228",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-thunderbolts-ghost-portrait-logo-t-shirt/-/A-1003221246",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-silhouettes-t-shirt/-/A-85011353",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-marvels-photon-portrait-t-shirt/-/A-90058776",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-thunderbolts-john-walker-silhouette-t-shirt/-/A-1003221541",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-thunderbolts-bucky-barnes-logo-t-shirt/-/A-1003221324",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-black-suit-t-shirt/-/A-85031103",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-3rd-birthday-t-shirt/-/A-92225803",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-original-duo-t-shirt/-/A-85155291",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-evil-doc-ock-grip-t-shirt/-/A-85975554",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-contest-of-champions-fight-t-shirt/-/A-86061732",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-drax-portrait-t-shirt/-/A-89439523",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-40th-birthday-t-shirt/-/A-92225707",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-7th-birthday-t-shirt/-/A-92225846",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-captain-america-brave-new-world-animated-poster-t-shirt/-/A-1002223556",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-dazzler-light-beams-comic-book-cover-t-shirt/-/A-92377750",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-eye-of-agamotto-t-shirt/-/A-85303953",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-ragnarok-battle-paint-t-shirt/-/A-86333846",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-widow-hourglass-silhouette-t-shirt/-/A-84235899",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-5th-birthday-spidey-t-shirt/-/A-87570272",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-marvels-s-a-b-e-r-logo-t-shirt/-/A-90058693",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-18th-birthday-action-pose-t-shirt/-/A-92226202",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-hammer-4th-birthday-t-shirt/-/A-92225684",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-circle-logo-t-shirt/-/A-86336543",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-deadpool-cats-animated-frame-t-shirt/-/A-1004563479",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-gold-logo-t-shirt/-/A-85975613",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-cartoon-captain-america-shield-t-shirt/-/A-86333832",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-swinging-7th-birthday-t-shirt/-/A-92225898",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-hammer-4th-birthday-t-shirt/-/A-92225684",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-spider-man-torment-comic-cover-t-shirt/-/A-1004553555",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-8th-birthday-t-shirt/-/A-92225860",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-6th-birthday-t-shirt/-/A-92225757",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-thunderbolts-red-guardian-silhouette-t-shirt/-/A-1003221511",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-strange-comic-t-shirt/-/A-85832113",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-21st-birthday-t-shirt/-/A-92225660",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-gold-spider-t-shirt/-/A-85030787",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-kro-t-shirt/-/A-85011620",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-carol-danvers-6th-birthday-t-shirt/-/A-92225566",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-red-poster-t-shirt/-/A-85031950",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-3rd-birthday-t-shirt/-/A-92225803",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-gold-bird-skull-logo-t-shirt/-/A-86120930",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-contest-of-champions-fight-t-shirt/-/A-86061732",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-7th-birthday-t-shirt/-/A-92225846",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-rocket-and-baby-groot-2nd-birthday-t-shirt/-/A-92225818",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-shamrock-loki-t-shirt/-/A-90778787",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-dr-strange-costume-t-shirt/-/A-89287550",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-agatha-all-along-kale-card-t-shirt/-/A-93539513",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-ragnarok-grandmaster-circle-t-shirt/-/A-86333562",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-rocket-and-baby-groot-8th-birthday-t-shirt/-/A-92225845",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-if-guardians-of-the-multiverse-t-shirt/-/A-85302582",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-grayscale-pose-t-shirt/-/A-81414975",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-mysterio-playing-card-t-shirt/-/A-85168815",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-if-guardians-of-the-multiverse-t-shirt/-/A-85302582",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-captain-america-brave-new-world-shield-logo-t-shirt/-/A-1002223763",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-gold-web-shot-t-shirt/-/A-85031017",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-swinging-3rd-birthday-t-shirt/-/A-92225735",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-circular-gold-t-shirt/-/A-85010831",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-rocket-and-baby-groot-2nd-birthday-t-shirt/-/A-92225818",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-i-heart-you-t-shirt/-/A-90647808",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-spider-man-torment-comic-cover-t-shirt/-/A-1004553555",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-rocket-and-baby-groot-8th-birthday-t-shirt/-/A-92225845",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-iron-man-i-love-you-3000-arc-reactor-t-shirt/-/A-89439829",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-birthday-boy-guardians-logo-t-shirt/-/A-89918005",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-homecoming-modern-logo-t-shirt/-/A-85169583",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-rocket-and-baby-groot-3rd-birthday-t-shirt/-/A-92225554",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-contest-of-champions-honeycomb-t-shirt/-/A-86058933",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-infinity-war-drax-portrait-t-shirt/-/A-89439523",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-silhouettes-t-shirt/-/A-85011353",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-rocket-groot-sister-greetings-t-shirt/-/A-81930168",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-love-and-thunder-new-asgard-logo-t-shirt/-/A-87117678",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-allies-t-shirt/-/A-87360129",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-30th-birthday-t-shirt/-/A-92225664",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hawkeye-bright-neon-portrait-t-shirt/-/A-85980854",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-iron-fist-living-weapon-74-t-shirt/-/A-86060191",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-shuri-and-okoye-7th-birthday-t-shirt/-/A-92225980",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-earth-s-mightiest-panther-t-shirt/-/A-87359788",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-phases-of-moon-knight-t-shirt/-/A-86059657",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-swinging-8th-birthday-t-shirt/-/A-92225981",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-homecoming-web-scene-t-shirt/-/A-85169500",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-wandavision-vintage-tv-t-shirt/-/A-82222488",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-6th-birthday-t-shirt/-/A-92225757",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-hulk-legend-t-shirt/-/A-86337396",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-inhumans-black-bolt-t-shirt/-/A-86376835",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-contest-of-champions-fight-t-shirt/-/A-86061732",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-ragnarok-grandmaster-circle-t-shirt/-/A-86333562",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-ragnarok-battle-ready-t-shirt/-/A-86333836",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-agatha-all-along-coven-true-t-shirt/-/A-93539315",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-shuri-and-okoye-4th-birthday-t-shirt/-/A-92225934",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-loki-glorious-purpose-drawing-t-shirt/-/A-82574262",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-new-suits-assemble-t-shirt/-/A-89439608",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ripped-spider-man-costume-t-shirt/-/A-87570151",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-alone-quote-t-shirt/-/A-85171034",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-shadow-streak-t-shirt/-/A-85169221",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-she-hulk-attorney-at-law-brains-and-muscles-t-shirt/-/A-87387088",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-comic-book-cover-t-shirt/-/A-85976507",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-3rd-birthday-t-shirt/-/A-92225803",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-triangle-captain-america-t-shirt/-/A-86059207",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-fantastic-four-doctor-doom-poster-t-shirt/-/A-1004129840",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-integrated-suit-t-shirt/-/A-84935447",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-ready-for-action-t-shirt/-/A-85832226",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-if-guardians-of-the-multiverse-t-shirt/-/A-85302582",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-silhouettes-t-shirt/-/A-85011353",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-animated-shamrock-hulk-t-shirt/-/A-90778735",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-7th-birthday-t-shirt/-/A-92225846",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-thunderbolts-classic-logo-t-shirt/-/A-1003221627",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-mysterio-playing-card-t-shirt/-/A-85168815",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-eternals-golden-logo-t-shirt/-/A-85979667",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-thunderbolts-taskmaster-logo-t-shirt/-/A-1003221216",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-rocket-and-baby-groot-8th-birthday-t-shirt/-/A-92225845",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-homecoming-upside-down-t-shirt/-/A-85171543",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-marvel-classic-bold-logo/-/A-87570595",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-marvels-s-a-b-e-r-logo-t-shirt/-/A-90058693",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-swinging-3rd-birthday-t-shirt/-/A-92225735",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-widow-hourglass-silhouette-t-shirt/-/A-84235899",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-moon-knight-gold-bird-skull-logo-t-shirt/-/A-86120930",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-carol-danvers-6th-birthday-t-shirt/-/A-92225566",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-st-patrick-s-day-clover-logo-t-shirt/-/A-90778860",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-triangle-thor-t-shirt/-/A-86061837",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-agatha-all-along-vidal-card-t-shirt/-/A-93539416",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-parker-queens-1962-t-shirt/-/A-1004546312",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-christmas-guardians-of-the-galaxy-naughty-rocket-t-shirt/-/A-81930754",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-golden-jaguar-t-shirt/-/A-87360203",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-ant-man-wasp-30th-birthday-t-shirt/-/A-92225664",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-agatha-all-along-symbol-card-t-shirt/-/A-93538989",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-parker-queens-1962-t-shirt/-/A-1004546312",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-iron-man-love-3000-mask-t-shirt/-/A-79711854",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-inhumans-bolt-voice-t-shirt/-/A-86375858",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-marvels-s-a-b-e-r-logo-t-shirt/-/A-90058693",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-what-if-guardians-of-the-multiverse-t-shirt/-/A-85302582",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-journey-s-end-t-shirt/-/A-85827219",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-iron-man-quantum-ready-t-shirt/-/A-85815367",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-hulk-incredible-panels-t-shirt/-/A-85156027",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-spider-man-no-way-home-gold-spider-t-shirt/-/A-85030787",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-carol-danvers-4th-birthday-t-shirt/-/A-92225624",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-thor-ragnarok-work-friends-t-shirt/-/A-85391457",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-earth-s-luckiest-heroes-st-patrick-s-t-shirt/-/A-82187565",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-green-gargantos-t-shirt/-/A-85831025",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-doctor-strange-in-the-multiverse-of-madness-ready-for-action-t-shirt/-/A-85832226",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-valentines-scribble/-/A-1001457949",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/marvel-avengers-hulk-graphic-t-shirt/-/A-87274975",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/marvel-avengers-graphic-t-shirt-logo-toddler-to-big-kid/-/A-87294650",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-heart-valentine/-/A-1001455171",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-comic-panel/-/A-1001469021",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-walters/-/A-1001469796",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-st-patrick-s-day-green-vibes-only/-/A-1001456335",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-easter/-/A-1001457541",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-pink-character-valentine-characters/-/A-1001454847",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-walters/-/A-1001469796",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-comic-panel/-/A-1001469021",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/boys-marvel-heart-valentine/-/A-1001455171",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Marvel, Tops",
      filters: {
        brand: "Marvel",
      },
    },
    {
      url: "https://www.target.com/p/castore-mclaren-f1-kids-core-world-tour-graphic-t-shirt/-/A-1005175594",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, McLaren, Tops",
      filters: {
        brand: "McLaren",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-megaman-shirt-cartoon-apparel-kids-clothing/-/A-84706957",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mega Man, Tops",
      filters: {
        brand: "Mega Man",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-messi-cheer-short-sleeve-graphic-t-shirt-white/-/A-94467763",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Messi, Tops",
      filters: {
        brand: "Messi",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-messi-short-sleeve-graphic-t-shirt-gray/-/A-94467770",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Messi, Tops",
      filters: {
        brand: "Messi",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-messi-graphic-short-sleeve-t-shirt-pink/-/A-94467764",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Messi, Tops",
      filters: {
        brand: "Messi",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-mickey-mouse-short-sleeve-graphic-t-shirt-disney-store/-/A-90170781",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse, Tops",
      filters: {
        brand: "Mickey Mouse",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-little-boys-minnie-and-mickey-holding-hands-heather-kids-t-shirt/-/A-92623897",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse, Tops",
      filters: {
        brand: "Mickey Mouse",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-2-pack-luggage-straps/-/A-1000764199",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-happy-tail-pluto-holiday-t-shirt/-/A-85752632",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-classic-cartoon-smile-performance-tee/-/A-85436119",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-classic-mickey-distressed-performance-tee/-/A-85436804",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-cropped-portraits-performance-tee/-/A-85439298",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-moods-of-donald-duck-performance-tee/-/A-85435730",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-group-portraits-performance-tee/-/A-85438881",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-smiling-mickey-mouse-distressed-performance-tee/-/A-87810829",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-28-t-shirt/-/A-85435806",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-large-donald-duck-t-shirt/-/A-85439119",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-artistic-mickey-mouse-t-shirt/-/A-85439145",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-original-art-t-shirt/-/A-85438229",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-donald-duck-geometric-pattern-t-shirt/-/A-89406123",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-vintage-oops-face-performance-tee/-/A-1001021338",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-soccer-usa-performance-tee/-/A-85439023",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-traditional-mickey-performance-tee/-/A-85437582",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-baseball-player-performance-tee/-/A-85439008",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-running-performance-tee/-/A-85437247",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-pluto-perked-dog-ears-performance-tee/-/A-85438319",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-soccer-star-performance-tee/-/A-85761049",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-silly-faces-performance-tee/-/A-85436750",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-goofy-portrait-performance-tee/-/A-85438105",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-distressed-performance-tee/-/A-85435954",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-signature-performance-tee/-/A-85436925",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-plaid-minnie-mouse-logo-performance-tee/-/A-85761437",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-official-one-only-performance-tee/-/A-85437888",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-paisley-silhouette-performance-tee/-/A-85760608",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-all-american-festival-tour-performance-tee/-/A-85761165",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-goofy-wave-performance-tee/-/A-85438834",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-old-school-mickey-performance-tee/-/A-85438610",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-impatient-performance-tee/-/A-85438706",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-minnie-i-love-you-to-the-moon-and-back-performance-tee/-/A-85437090",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-heart-performance-tee/-/A-85437237",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-astronaut-performance-tee/-/A-85435558",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-walking-towards-haunted-mansion-performance-tee/-/A-85753241",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-americana-flag-performance-tee/-/A-85761572",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-club-house-group-shot-performance-tee/-/A-85437502",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-28-performance-tee/-/A-85435838",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-monstera-silhouette-performance-tee/-/A-85436762",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-lean-performance-tee/-/A-85435741",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-tie-dye-mickey-performance-tee/-/A-85435858",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-pluto-portrait-performance-tee/-/A-85436942",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-minnie-ice-cream-cones-performance-tee/-/A-85435436",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-starry-silhouette-performance-tee/-/A-85761562",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-watermelon-silhouette-performance-tee/-/A-85438249",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-american-peace-sign-performance-tee/-/A-89801777",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-scenes-fill-performance-tee/-/A-90924604",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-soccer-canada-performance-tee/-/A-85435488",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-donald-duck-wink-performance-tee/-/A-1001021717",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-pump-up-the-volume-performance-tee/-/A-85436028",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-the-gangs-together-for-holiday-performance-tee/-/A-87433742",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-friends-grid-performance-tee/-/A-85436739",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-mouse-camo-bow-performance-tee/-/A-85436581",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-cute-poses-performance-tee/-/A-85437731",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-surf-board-performance-tee/-/A-85437901",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-90s-sunglasses-mickey-performance-tee/-/A-89801008",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-large-pose-performance-tee/-/A-85436706",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-respect-nature-performance-tee/-/A-85439239",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-happy-tail-pluto-holiday-performance-tee/-/A-85752671",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-checkers-performance-tee/-/A-85439193",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-portrait-performance-tee/-/A-85438850",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-soccer-mexico-performance-tee/-/A-85439200",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-breakfast-silhouette-performance-tee/-/A-85437431",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-headshot-performance-tee/-/A-85435821",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-90s-mickey-mouse-distressed-performance-tee/-/A-85435224",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-portrait-performance-tee/-/A-85438764",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-portrait-performance-tee/-/A-85439131",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-original-grump-performance-tee/-/A-85437063",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-donald-pluto-goofy-performance-tee/-/A-85437451",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-pizza-performance-tee/-/A-85439272",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-pineapple-silhouette-performance-tee/-/A-85437279",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-tiled-crew-performance-tee/-/A-1001021335",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-one-man-band-performance-tee/-/A-85438814",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-tiled-crew-performance-tee/-/A-1001021335",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-grumpy-performance-tee/-/A-85439019",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-pluto-performance-tee/-/A-85437973",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-minnie-giddyup-performance-tee/-/A-85437419",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-ballin-performance-tee/-/A-85436330",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-large-donald-duck-performance-tee/-/A-85438939",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-pizza-silhouette-performance-tee/-/A-85439010",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-old-school-distressed-performance-tee/-/A-85437397",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-face-distressed-performance-tee/-/A-85436416",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-icons-silhouettes-performance-tee/-/A-85435735",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-airbrushed-signature-performance-tee/-/A-85437082",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-the-true-original-performance-tee/-/A-85435794",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-that-friend-who-is-a-little-goofy-performance-tee/-/A-85435249",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-tiger-print-silhouette-performance-tee/-/A-85435594",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-simple-minnie-performance-tee/-/A-85438649",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-americana-tie-dye-performance-tee/-/A-85761593",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-lucky-stack-performance-tee/-/A-85761000",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-name-stack-distressed-performance-tee/-/A-85435345",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-home-iconic-ears-performance-tee/-/A-85438274",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-neon-outlines-performance-tee/-/A-85437542",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-tie-dye-silhouette-performance-tee/-/A-85436233",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-performance-tee/-/A-85436296",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-all-you-need-is-pizza-performance-tee/-/A-85436391",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-minnie-jersey-performance-tee/-/A-85435668",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-tie-dye-pants-portrait-performance-tee/-/A-85437748",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-28-kanji-performance-tee/-/A-85439049",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-the-egg-squad-crew-performance-tee/-/A-85760813",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-classic-circle-performance-tee/-/A-85439007",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-clover-silhouette-performance-tee/-/A-85761625",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-patriotic-dancing-goofy-performance-tee/-/A-85760715",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-large-portrait-performance-tee/-/A-85438670",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-logo-filled-with-hearts-performance-tee/-/A-85760736",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-true-original-distressed-performance-tee/-/A-85437677",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-tropical-minnie-performance-tee/-/A-85438618",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-sailor-donald-performance-tee/-/A-85437863",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-artistic-mickey-mouse-performance-tee/-/A-85435991",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-fruit-silhouettes-performance-tee/-/A-85435697",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-basketball-dunk-performance-tee/-/A-85761175",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-lucky-rainbow-performance-tee/-/A-85761007",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-sunshine-and-good-vibes-mickey-performance-tee/-/A-89143123",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-retro-distressed-minnie-performance-tee/-/A-85437487",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-donald-duck-clover-luck-dance-performance-tee/-/A-85760898",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-radical-performance-tee/-/A-85437068",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-pluto-30-american-flag-performance-tee/-/A-85760905",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-retro-minnie-boxes-performance-tee/-/A-85435661",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-angry-donald-duck-performance-tee/-/A-85436737",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-minnie-retro-circle-performance-tee/-/A-85436961",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-sunflower-silhouette-performance-tee/-/A-85438529",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-cut-pineapple-silhouette-performance-tee/-/A-85436039",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-minnie-share-a-sundae-performance-tee/-/A-85763545",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-panels-performance-tee/-/A-85435922",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-daisy-and-donald-duck-distressed-performance-tee/-/A-85438032",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-character-grid-performance-tee/-/A-89012762",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-with-irish-hat-performance-tee/-/A-85761248",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-tongue-out-performance-tee/-/A-85437332",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-peace-sign-performance-tee/-/A-85439245",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-minimalist-name-performance-tee/-/A-85437169",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-peace-sign-performance-tee/-/A-85435266",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-classic-style-performance-tee/-/A-85437156",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-friends-pictures-performance-tee/-/A-85438185",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-costume-performance-tee/-/A-85437192",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-classic-circle-distressed-performance-tee/-/A-85438030",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-soccer-france-performance-tee/-/A-85437359",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-tropical-flower-silhouette-performance-tee/-/A-85436300",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-daisy-duck-performance-tee/-/A-85438146",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-rose-bow-minnie-performance-tee/-/A-85438036",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-skate-all-day-performance-tee/-/A-85435696",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-mouse-magical-performance-tee/-/A-85436415",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-minnie-vintage-couple-performance-tee/-/A-85436376",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-soccer-japan-performance-tee/-/A-85436890",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-classic-mouse-flowers-performance-tee/-/A-90550816",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-winter-ready-goofy-outline-performance-tee/-/A-85763735",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-minnie-paisley-silhouette-performance-tee/-/A-85760669",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-french-minnie-performance-tee/-/A-85439168",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-neon-wave-performance-tee/-/A-85437453",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-mouse-and-daisy-duck-hearts-performance-tee/-/A-85436317",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-haunted-house-performance-tee/-/A-87529663",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-plaid-silhouette-performance-tee/-/A-85436109",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-floral-face-performance-tee/-/A-85438454",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-m-portrait-performance-tee/-/A-85437026",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-vintage-lean-performance-tee/-/A-85438983",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-polka-dot-minnie-performance-tee/-/A-85438098",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-mickey-and-friends-minnie-american-darling-performance-tee/-/A-85752598",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-cheetah-print-silhouette-performance-tee/-/A-85436521",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-athletic-club-performance-tee/-/A-85439183",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-celebrate-the-magic-of-holidays-performance-tee/-/A-85760686",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-minne-you-prickle-my-fancy-cactus-silhouettes-performance-tee/-/A-85437969",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-distressed-sitting-minnie-performance-tee/-/A-85438906",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-minnie-retro-cowboys-performance-tee/-/A-85436980",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-year-of-the-tiger-performance-tee/-/A-90550741",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-floral-outline-silhouette-performance-tee/-/A-85436078",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-flower-crown-silhouette-performance-tee/-/A-85437606",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-bow-tie-with-clovers-performance-tee/-/A-85761191",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-sketchbook-t-shirt/-/A-85437163",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-character-square-t-shirt/-/A-85436004",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-airbrushed-t-shirt/-/A-85436661",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-neon-mickey-t-shirt/-/A-85437610",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-always-on-the-nice-list-mickey-t-shirt/-/A-90925098",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-heart-t-shirt/-/A-85437100",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-mickey-mouse-peace-sign-t-shirt/-/A-1002992988",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-donald-duck-bah-humbug-t-shirt/-/A-89406171",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-camo-silhouette-t-shirt/-/A-85435417",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-retro-sketchbook-t-shirt/-/A-85437163",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-it-s-my-5th-birthday-t-shirt/-/A-91643548",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-birthday-boy-donald-t-shirt/-/A-85436260",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-merry-and-bright-pluto-t-shirt/-/A-90165271",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-mouse-o-lantern-t-shirt/-/A-87257331",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-halloween-group-shot-t-shirt/-/A-90925130",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-wreath-mickey-t-shirt/-/A-90924811",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-angry-donald-duck-t-shirt/-/A-85436518",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-santa-hat-mickey-t-shirt/-/A-89405834",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-firefighters-to-the-rescue-t-shirt/-/A-89405951",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-pluto-portrait-t-shirt/-/A-85435873",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-happy-block-party-t-shirt/-/A-1000128086",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-since-1928-t-shirt/-/A-87809806",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-distressed-group-wreath-t-shirt/-/A-89405868",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-minnie-retro-signatures-t-shirt/-/A-85436361",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-learn-discover-mickey-and-minnie-t-shirt/-/A-89406058",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-festive-cheer-t-shirt/-/A-85763871",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-festive-cheer-t-shirt/-/A-85763871",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-pocket-surfer-t-shirt/-/A-85437023",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-winter-snowflakes-mickey-t-shirt/-/A-89406359",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-distressed-group-print-happy-holidays-t-shirt/-/A-89405988",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-ugly-sweater-t-shirt/-/A-87433781",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-light-silhouette-t-shirt/-/A-85763864",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-wonderland-icon-collage-t-shirt/-/A-87433648",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-mickey-friends-soccer-usa/-/A-87574286",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-dear-santa-i-tried-t-shirt/-/A-90924915",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-festive-mickey-mouse-wreath-t-shirt/-/A-85761580",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-rainbow-circle-t-shirt/-/A-92649974",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-and-the-gorilla-t-shirt/-/A-85438120",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-pose-t-shirt/-/A-90551166",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-santa-hat-mickey-t-shirt/-/A-89405834",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-gingerbread-cookies-collage-t-shirt/-/A-87433664",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-donald-duck-caroling-t-shirt/-/A-89406260",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-oh-what-fun-t-shirt/-/A-90924971",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-goofy-christmas-glasses-t-shirt/-/A-90165306",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-crew-t-shirt/-/A-90551398",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-goofy-christmas-ears-t-shirt/-/A-90164939",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-holiday-cheer-with-mickey-pluto-t-shirt/-/A-85752447",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-tongue-out-t-shirt/-/A-85437108",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-goofy-dig-t-shirt/-/A-85437507",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-this-family-is-in-vacation-mode-t-shirt/-/A-87433741",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-festive-mickey-mouse-wreath-t-shirt/-/A-85761580",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-tongue-out-t-shirt/-/A-85437108",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-goofy-dig-t-shirt/-/A-85437507",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-this-family-is-in-vacation-mode-t-shirt/-/A-87433741",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-true-original-retro-t-shirt/-/A-89405856",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-mousey-christmas-t-shirt/-/A-87433694",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-happy-turkey-day-t-shirt/-/A-87618165",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-hooray-it-s-my-5th-birthday-t-shirt/-/A-91643551",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-character-square-t-shirt/-/A-85436004",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-birthday-boy-pluto-t-shirt/-/A-89404901",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-angry-donald-duck-t-shirt/-/A-85436518",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-halloween-haunted-house-crew-t-shirt/-/A-89929783",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-flag-silhouette-pose-t-shirt/-/A-90925110",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-friends-ombre-group-t-shirt/-/A-85437626",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-pluto-t-shirt/-/A-85435692",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-happy-holidays-mickey-t-shirt/-/A-90925196",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-christmas-wreath-mickey-t-shirt/-/A-89406372",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-pluto-smile-with-santa-hat-t-shirt/-/A-85764064",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-portrait-t-shirt/-/A-85438937",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-donald-pluto-goofy-t-shirt/-/A-85439203",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-portrait-t-shirt/-/A-85438859",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-lucky-stack-t-shirt/-/A-85760864",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-halloween-retro-mickey-mouse-creepin-it-real-t-shirt/-/A-89929815",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-oh-what-fun-sled-t-shirt/-/A-87809383",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-american-flag-march-t-shirt/-/A-92214664",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-family-squad-t-shirt/-/A-92215094",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-hooray-it-s-my-7th-birthday-t-shirt/-/A-91643621",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-crew-t-shirt/-/A-90551398",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-expressing-emotions-t-shirt/-/A-90924623",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-buddies-lineup-t-shirt/-/A-90551410",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-dressed-up-for-st-patrick-s-t-shirt/-/A-85752786",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-encircled-mice-t-shirt/-/A-90925005",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-fire-chief-donald-t-shirt/-/A-85438419",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-pluto-portrait-t-shirt/-/A-85435873",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-mickey-friends-halloween-mouse-o-lantern/-/A-87574101",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-mickey-friends-camo-mickey-logo/-/A-87574219",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-the-club-checkered-t-shirt/-/A-89143426",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-grumpy-t-shirt/-/A-85438667",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-mickey-friends-distressed-sun-icon-t-shirt/-/A-1003878427",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-lucky-leprechaun-pose-t-shirt/-/A-1002300849",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-neon-gradient-t-shirt/-/A-85438175",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-donald-duck-pop-art-portrait-moody-t-shirt/-/A-89405473",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-all-stars-t-shirt/-/A-85437848",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-28-checkered-mickey-t-shirt/-/A-89405789",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-sporty-side-profile-t-shirt/-/A-90550912",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-father-s-day-best-goofy-dad-ever-t-shirt/-/A-87811268",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-mood-t-shirt/-/A-85438016",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-life-is-better-in-the-wilderness-t-shirt/-/A-85438628",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-life-is-better-in-the-wilderness-t-shirt/-/A-85438628",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-soccer-france-t-shirt/-/A-85436985",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-5th-birthday-oh-boy-let-s-party-mickey-t-shirt/-/A-89405619",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-classic-circle-distressed-t-shirt/-/A-85438269",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-face-t-shirt/-/A-85435895",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-varsity-large-face-t-shirt/-/A-90551108",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-2nd-birthday-oh-boy-let-s-party-mickey-t-shirt/-/A-89405717",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-mouse-starry-bow-t-shirt/-/A-85761533",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-goofy-gwarsh-t-shirt/-/A-85436635",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-who-needs-luck-t-shirt/-/A-1002300825",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-shamrock-has-all-your-friends-t-shirt/-/A-85761310",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-birthday-boy-goofy-t-shirt/-/A-85436066",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-flag-silhouette-pose-t-shirt/-/A-90925110",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-it-s-my-6th-birthday-t-shirt/-/A-91643438",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-easter-eggs-and-mouse-ears-t-shirt/-/A-85761454",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-mouse-cheetah-print-bow-signature-t-shirt/-/A-87619341",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-legend-poster-t-shirt/-/A-85439308",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-americana-flag-t-shirt/-/A-85760772",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-go-happy-go-lucky-t-shirt/-/A-1002301295",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-colorful-name-t-shirt/-/A-85437265",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-team-mickey-badge-germany-t-shirt/-/A-85437193",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-sea-scouts-t-shirt/-/A-85438627",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-breakfast-silhouette-t-shirt/-/A-85436970",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-gamer-t-shirt/-/A-85435456",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-team-mickey-badge-canada-t-shirt/-/A-85437900",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-rose-silhouette-t-shirt/-/A-85763819",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-santa-christmas-wreath-t-shirt/-/A-90924929",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-fruit-silhouettes-t-shirt/-/A-85436927",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-tropical-best-day-ever-t-shirt/-/A-89918227",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-it-s-all-good-t-shirt/-/A-90924830",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-realism-t-shirt/-/A-85437799",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-halloween-oh-my-t-shirt/-/A-87257289",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-warped-silhouette-t-shirt/-/A-90925446",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-clover-big-smile-t-shirt/-/A-85760966",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-birthday-boy-balloons-t-shirt/-/A-85436056",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-earth-heart-t-shirt/-/A-85435240",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-walking-towards-haunted-mansion-t-shirt/-/A-85753093",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-distressed-mickey-square-t-shirt/-/A-89405820",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-daisy-and-donald-duck-distressed-t-shirt/-/A-85437906",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-halloween-come-alive-t-shirt/-/A-90925449",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-soccer-mexico-t-shirt/-/A-85439327",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-the-birthday-boy-is-6-t-shirt/-/A-89143247",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-usa-pride-t-shirt/-/A-85761154",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-with-irish-hat-t-shirt/-/A-85761235",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-gamer-t-shirt/-/A-85435456",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-leprechaun-luck-t-shirt/-/A-1002300880",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-soccer-star-t-shirt/-/A-85760613",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-it-s-my-8th-birthday-t-shirt/-/A-91643377",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-shamrock-has-all-your-friends-t-shirt/-/A-85761310",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-ballin-t-shirt/-/A-85436320",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-donald-and-pluto-astronauts-t-shirt/-/A-90925197",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-shamrock-circle-t-shirt/-/A-1002300934",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-with-irish-hat-t-shirt/-/A-85761235",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-it-s-my-birthday-group-shot-t-shirt/-/A-89404945",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-easter-so-egg-cited-t-shirt/-/A-91247734",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-happy-birthday-kid-t-shirt/-/A-91642927",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-four-retro-mice-t-shirt/-/A-90925225",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-hiker-t-shirt/-/A-85435422",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-distressed-90s-t-shirt/-/A-89014548",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-classic-cartoon-smile-t-shirt/-/A-85436473",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-scared-donald-duck-halloween-t-shirt/-/A-87257272",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-heart-distressed-t-shirt/-/A-85437401",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-6th-birthday-oh-boy-let-s-party-mickey-t-shirt/-/A-89405663",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-lean-t-shirt/-/A-85437594",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-birthday-boy-goofy-t-shirt/-/A-85436066",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-t-shirt/-/A-85436092",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-it-s-my-7th-birthday-t-shirt/-/A-91643399",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-change-the-world-with-kindness-t-shirt/-/A-1002737097",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-mickey-friends-vintage-large-pose/-/A-87574220",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-polygonal-portrait-t-shirt/-/A-90551406",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-duck-impatient-t-shirt/-/A-85438436",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-character-name-t-shirt/-/A-90551214",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-distressed-cool-brother-t-shirt/-/A-92215070",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-donald-costume-t-shirt/-/A-85437812",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-and-friends-lucky-stack-t-shirt/-/A-85760864",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-going-plaid-for-christmas-t-shirt/-/A-85752428",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-happy-birthday-boy-t-shirt/-/A-91642955",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-sensational-six-portrait-t-shirt/-/A-90924537",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-shapes-group-t-shirt/-/A-90924881",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-goofy-pose-t-shirt/-/A-87894880",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-mickey-friends-vintage-large-pose/-/A-87574220",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-4th-birthday-oh-boy-let-s-party-mickey-t-shirt/-/A-89405692",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-red-white-and-goofy-t-shirt/-/A-85760972",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-happy-easter-friends-t-shirt/-/A-88717276",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-california-skateboard-t-shirt/-/A-85435229",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-lean-t-shirt/-/A-85437594",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-retro-american-flag-shorts-t-shirt/-/A-92214708",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-spring-break-squad-t-shirt/-/A-1002736542",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-cool-summer-cousin-t-shirt/-/A-92215807",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-minnie-portrait-t-shirt/-/A-85438937",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-the-egg-squad-crew-t-shirt/-/A-85760922",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-best-friend-square-t-shirt/-/A-89406046",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-scared-donald-duck-halloween-t-shirt/-/A-87257272",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-distressed-best-day-ever-t-shirt/-/A-89918259",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-expressions-boxes-t-shirt/-/A-85438997",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-four-retro-mice-t-shirt/-/A-90925225",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-mickey-friends-birthday-boy-pluto-t-shirt/-/A-89404901",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-cheetah-print-silhouette-t-shirt/-/A-85439065",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-mickey-mouse-the-moon-t-shirt/-/A-85763905",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Mickey Mouse & Friends, Tops",
      filters: {
        brand: "Mickey Mouse & Friends",
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
