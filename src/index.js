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

  const urls =   [
      {
        "url": "https://www.target.com/p/boy-s-raya-and-the-last-dragon-tuk-tuk-let-s-roll-t-shirt/-/A-82523826",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Raya and the Last Dragon, Tops",
        "filters": {
          "brand": "Raya and the Last Dragon"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-raya-and-the-last-dragon-tuk-tuk-portrait-t-shirt/-/A-82524043",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Raya and the Last Dragon, Tops",
        "filters": {
          "brand": "Raya and the Last Dragon"
        }
      },
      {
        "url": "https://www.target.com/p/red-bull-racing-f1-special-edition-austin-gp-t-shirt-s/-/A-93909088",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Red Bull, Tops",
        "filters": {
          "brand": "Red Bull"
        }
      },
      {
        "url": "https://www.target.com/p/castore-red-bull-racing-f1-kid-s-2025-max-verstappen-team-polo-shirt/-/A-1002208397",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Red Bull, Tops",
        "filters": {
          "brand": "Red Bull"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-train-like-a-champ-graphic-t-shirt/-/A-1004741627",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-los-angeles-kings-graphic-t-shirt-black-xl/-/A-1004741047",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-la-kings-logo-graphic-t-shirt/-/A-1004739973",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-la-kings-2014-western-conference-champions-graphic-t-shirt/-/A-1004741246",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-lit-space-dye-jersey-graphic-t-shirt-grey-4/-/A-1004733884",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-los-angeles-kings-2014-kopitar-graphic-t-shirt-black-l/-/A-1004730945",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-train-like-a-champ-graphic-t-shirt-grey-s/-/A-1004734082",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-la-crown-patch-graphic-t-shirt/-/A-1004772500",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-light-the-lamp-graphic-t-shirt/-/A-1004741238",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-la-kings-graphic-t-shirt/-/A-1004739899",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-space-dye-jersey-graphic-t-shirt/-/A-1004741514",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-los-angeles-kings-graphic-t-shirt/-/A-1004741072",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-2014-stanley-cup-rangers-vs-kings-graphic-t-shirt/-/A-1004756412",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-la-kings-graphic-t-shirt/-/A-1004756434",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-la-kings-graphic-t-shirt/-/A-1004740826",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-jeff-carter-77-la-kings-graphic-t-shirt/-/A-1004739871",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-tom-and-jerry-happy-birthday-graphic-t-shirt/-/A-1004736599",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-la-kings-graphic-t-shirt/-/A-1004739946",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-tom-and-jerry-logo-graphic-t-shirt/-/A-1004736227",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-la-kings-graphic-t-shirt/-/A-1004742193",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-la-kings-graphic-t-shirt/-/A-1004741334",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-l-a-kings-kopitar-graphic-t-shirt/-/A-1004741349",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-printed-hood-graphic-t-shirt/-/A-1004737711",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-los-angeles-kings-muzzin-6-graphic-t-shirt/-/A-1004742117",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-la-kings-arched-fade-embellished-t-shirt/-/A-1004744670",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/reebok-boys-play-dry-hooded-graphic-t-shirt/-/A-1004737927",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Reebok, Tops",
        "filters": {
          "brand": "Reebok"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-godzilla-x-kong-3-pack-graphic-t-shirts/-/A-1004889041",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Ripple Junction, Tops",
        "filters": {
          "brand": "Ripple Junction"
        }
      },
      {
        "url": "https://www.target.com/p/boys-rocky-flag-champion-t-shirt/-/A-1004374321",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Rocky, Tops",
        "filters": {
          "brand": "Rocky"
        }
      },
      {
        "url": "https://www.target.com/p/boys-roger-waters-wall-logo-t-shirt/-/A-1004636504",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Roger Walters, Tops",
        "filters": {
          "brand": "Roger Walters"
        }
      },
      {
        "url": "https://www.target.com/p/boys-roger-waters-the-wall-2-t-shirt/-/A-1004636376",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Roger Walters, Tops",
        "filters": {
          "brand": "Roger Walters"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-rugrats-st-patrick-s-day-reptar-good-to-be-green-t-shirt/-/A-85886393",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Rugrats, Tops",
        "filters": {
          "brand": "Rugrats"
        }
      },
      {
        "url": "https://www.target.com/p/boys-rugrats-for-toys-short-sleeve-graphic-t-shirt/-/A-1000450142",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Rugrats, Tops",
        "filters": {
          "brand": "Rugrats"
        }
      },
      {
        "url": "https://www.target.com/p/boys-rugrats-hope-short-sleeve-graphic-t-shirt/-/A-1000450780",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Rugrats, Tops",
        "filters": {
          "brand": "Rugrats"
        }
      },
      {
        "url": "https://www.target.com/p/boys-rugrats-reptar-swirl-short-sleeve-graphic-t-shirt/-/A-1000450289",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Rugrats, Tops",
        "filters": {
          "brand": "Rugrats"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-rugrats-valentine-s-day-is-for-babies-t-shirt/-/A-85565580",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Rugrats, Tops",
        "filters": {
          "brand": "Rugrats"
        }
      },
      {
        "url": "https://www.target.com/p/sol-angeles-kids-tennis-club-boxy-tee/-/A-1003706478",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SOL ANGELES, Tops",
        "filters": {
          "brand": "SOL ANGELES"
        }
      },
      {
        "url": "https://www.target.com/p/sol-angeles-kids-wild-one-marlow-tee/-/A-1003709339",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SOL ANGELES, Tops",
        "filters": {
          "brand": "SOL ANGELES"
        }
      },
      {
        "url": "https://www.target.com/p/sol-angeles-kids-gradient-wave-marlow-tee/-/A-1003919643",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SOL ANGELES, Tops",
        "filters": {
          "brand": "SOL ANGELES"
        }
      },
      {
        "url": "https://www.target.com/p/sol-angeles-kids-sun-surf-tank/-/A-1004108637",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SOL ANGELES, Tops",
        "filters": {
          "brand": "SOL ANGELES"
        }
      },
      {
        "url": "https://www.target.com/p/sand-land-beelzebub-poster-crew-neck-short-sleeve-boy-s-charcoal-t-shirt/-/A-1001575317",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sand Land, Tops",
        "filters": {
          "brand": "Sand Land"
        }
      },
      {
        "url": "https://www.target.com/p/sand-land-desert-jeep-ride-boy-s-royal-blue-crew-neck-short-sleeve-t-shirt/-/A-1000119128",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sand Land, Tops",
        "filters": {
          "brand": "Sand Land"
        }
      },
      {
        "url": "https://www.target.com/p/sand-land-sheriff-rao-poster-art-youth-black-crew-neck-long-sleeve-sweatshirt/-/A-1001337416",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sand Land, Tops",
        "filters": {
          "brand": "Sand Land"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-boys-shark-chasing-scooby-print-design-t-shirt-kids/-/A-91314396",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-mystery-solved-youth-athletic-heather-long-sleeve-shirt/-/A-86218910",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-checkered-background-boy-s-heather-grey-long-sleeve-shirt/-/A-85731673",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-ghost-ruh-roh-boy-s-athletic-heather-sweater/-/A-85581110",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-laughing-scooby-boy-s-black-long-sleeve-shirt/-/A-85731690",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-mystery-inc-group-art-boy-s-athletic-heather-long-sleeve-shirt/-/A-86383526",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-character-art-youth-black-long-sleeve-shirt/-/A-86218826",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-shaggy-and-scooby-men-s-black-long-sleeve-shirt/-/A-87725106",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-scooby-doo-3-pack-graphic-t-shirts/-/A-85688564",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-scooby-snacks-boy-s-red-t-shirt/-/A-85352567",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-paranormal-investigators-boys-tee/-/A-86183936",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/youth-boys-scooby-doo-character-royal-blue-short-sleeve-graphic-tee-shirt/-/A-84941791",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-shark-kids-youth-boys-blue-short-sleeve-graphic-tee/-/A-84252008",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-what-do-you-mean-no-snacks-youth-red-graphic-tee/-/A-85730947",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/youth-boys-grey-scooby-doo-cartoon-movie-graphic-tee/-/A-84252001",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-this-is-all-i-m-willing-to-do-today-youth-red-graphic-tee/-/A-85729270",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-scared-scooby-with-ghosts-youth-athletic-gray-graphic-tee/-/A-87337783",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-scooby-and-shaggy-with-spooky-ghost-youth-navy-blue-graphic-tee/-/A-87337755",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-scared-shaggy-with-ghosts-youth-charcoal-graphic-tee/-/A-87337759",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-would-you-do-it-for-a-scooby-snack-youth-royal-blue-graphic-tee/-/A-87337767",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-youth-charcoal-short-sleeve-tee/-/A-92548322",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-scooby-doo-halloween-starter-pack-t-shirt/-/A-87697459",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-scooby-doo-moon-silhouette-chase-t-shirt/-/A-87697519",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-too-cool-for-school-youth-black-short-sleeve-crew-neck-tee/-/A-89386705",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-face-boy-s-navy-t-shirt/-/A-85729288",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-and-monsters-youth-black-short-sleeve-crew-neck-tee/-/A-90060814",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-run-scoob-green-monster-youth-charcoal-short-sleeve-crew-neck-tee/-/A-89386734",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-shaggy-zoinks-gray-boy-s-short-sleeve-t-shirt/-/A-85451284",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-ruh-roh-boy-s-navy-t-shirt/-/A-86394052",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-where-are-you-pup-youth-navy-t-shirt/-/A-86103281",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-stay-rad-chrome-dog-boy-s-navy-t-shirt/-/A-85451108",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-best-friends-forever-youth-black-short-sleeve-crew-neck-tee/-/A-89386767",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-scooby-doo-where-are-you-villains-t-shirt/-/A-1001939928",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-scooby-doo-zoinks-monster-audience-t-shirt/-/A-82355076",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-spooked-shaggy-and-scooby-boy-s-navy-blue-tshirt/-/A-86383162",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-color-switch-scooby-boy-s-charcoal-t-shirt/-/A-85729657",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-scooby-doo-easter-eggy-gang-t-shirt/-/A-88718103",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/youth-boys-grey-scooby-doo-kids-cartoon-short-sleeve-shirt/-/A-84251891",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-ruh-roh-youth-boy-s-charcoal-heather-t-shirt/-/A-85352274",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-husky-scooby-doo-zoinks-monster-audience/-/A-87572858",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-scooby-doo-puppy-circle-t-shirt/-/A-82358028",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-scooby-doo-birthday-boy-scoob-t-shirt/-/A-89404918",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-scooby-doo-puppy-frame-t-shirt/-/A-82373650",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-scooby-doo-dog-shadow-t-shirt/-/A-82356290",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-doo-surfing-youth-white-short-sleeve-tee/-/A-92548227",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/scooby-dooby-doo-youth-royal-blue-short-sleeve-crew-neck-tee/-/A-89386708",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Scooby-Doo, Tops",
        "filters": {
          "brand": "Scooby-Doo"
        }
      },
      {
        "url": "https://www.target.com/p/sesame-street-crew-character-heads-crew-neck-long-sleeve-athletic-heather-youth-tee/-/A-92984765",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/sesame-street-book-club-crew-neck-long-sleeve-youth-black-tee/-/A-92987942",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sesame-street-ernie-i-can-t-hear-you-youth-black-crew-neck-sweatshirt/-/A-89764968",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sesame-street-have-you-hugged-a-monster-today-youth-heather-gray-crew-neck-sweatshirt/-/A-89764962",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sesame-street-grover-anywhere-i-am-youth-black-crew-neck-sweatshirt/-/A-89721495",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sesame-street-grover-hello-everybod-eee-youth-black-crew-neck-sweatshirt/-/A-89721507",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sesame-street-core-character-group-youth-black-tee-with-short-sleeves-and-crew-neck/-/A-89764240",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/sesame-street-characters-with-balloons-crew-neck-short-sleeve-athletic-heather-boy-s-t-shirt/-/A-92748668",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sesame-street-rocks-youth-white-tee-with-short-sleeves-and-crew-neck/-/A-89764320",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-just-a-boy-who-loves-cookies-t-shirt/-/A-92218250",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-elmo-face-ugly-christmas-sweater-print-t-shirt/-/A-92218217",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-cookie-monster-world-wide-t-shirt/-/A-92220790",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-halloween-abbey-road-t-shirt/-/A-92219278",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-bert-and-ernie-lean-on-me-t-shirt/-/A-92217508",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-you-are-enough-t-shirt/-/A-92218859",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-birthday-crew-t-shirt/-/A-92218005",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-grover-run-repeat-t-shirt/-/A-92218879",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-cookie-monster-retro-portrait-t-shirt/-/A-92220248",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-friends-for-life-group-t-shirt/-/A-92220526",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-and-cookies-for-all-monster-t-shirt/-/A-92219459",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-elmo-red-logo-sign-t-shirt/-/A-92220019",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-trio-saturated-painting-t-shirt/-/A-92220890",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-me-only-here-for-the-cookies-t-shirt/-/A-92221507",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-four-panels-pals-t-shirt/-/A-92221771",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-big-bird-100-days-of-school-t-shirt/-/A-92220089",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-birthday-boy-elmo-t-shirt/-/A-92218376",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-elmo-heart-fill-t-shirt/-/A-92218127",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sesame-street-the-periodic-table-t-shirt/-/A-1004568123",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-100-days-of-school-crew-t-shirt/-/A-92217819",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-cookie-monster-birthday-kid-t-shirt/-/A-92218505",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-just-a-kid-who-loves-cookies-t-shirt/-/A-92218416",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-oscar-the-grouch-don-t-get-pinched-t-shirt/-/A-1002303120",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-pre-k-graduate-2024-t-shirt/-/A-92217631",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-sign-classic-group-portrait-t-shirt/-/A-92220658",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-the-classics-group-portrait-t-shirt/-/A-92221533",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-elmo-be-kind-to-your-mind-t-shirt/-/A-92218712",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-group-street-smart-t-shirt/-/A-92219549",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/sesame-street-core-characters-varsity-text-crew-neck-short-sleeve-black-boy-s-t-shirt/-/A-92748618",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-oscar-the-grouch-merry-christmas-t-shirt/-/A-92218979",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-elmo-snack-time-t-shirt/-/A-92221595",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sesame-street-comic-scene-kids-lc-oversized-infant-short-sleeve-graphic-t-shirt-short-sleeve-graphic-t-shirt/-/A-1001754972",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sesame-street-9-panel-puppet-grid-t-shirt/-/A-1004564502",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-classic-1969-varsity-t-shirt/-/A-92219155",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-s-is-for-son-t-shirt/-/A-92218510",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-take-a-belly-breath-t-shirt/-/A-92218621",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-cookie-lover-portrait-t-shirt/-/A-92218314",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-small-elmo-greetings-t-shirt/-/A-92219147",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-feeling-grouchy-t-shirt/-/A-92217766",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-kawaii-characters-group-t-shirt/-/A-92219221",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-cookie-monster-collegiate-t-shirt/-/A-92218559",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-pinch-proof-t-shirt/-/A-1002302966",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-elmo-check-in-with-your-friends-t-shirt/-/A-92219040",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-friends-make-the-world-go-round-t-shirt/-/A-92220433",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-elmo-tuxedo-checking-in-t-shirt/-/A-92218849",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-let-s-all-do-our-part-t-shirt/-/A-92221155",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-kindness-matters-trio-t-shirt/-/A-92220680",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-teamwork-makes-the-dream-work-t-shirt/-/A-92218970",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-pre-school-squad-t-shirt/-/A-92220069",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-check-in-on-your-friends-cute-elmo-t-shirt/-/A-92218273",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-cookie-monster-and-daisies-t-shirt/-/A-92221954",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sesame-street-big-bird-100th-day-of-school-t-shirt/-/A-92219838",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sesame Street, Tops",
        "filters": {
          "brand": "Sesame Street"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-spongebob-shirt-boys-stay-weird-character-grid-short-sleeve-graphic-tee-grey/-/A-1003386194",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-five-nights-at-freddy-s-t-shirt-boy-s-game-over-short-sleeve-graphic-tee-blue/-/A-1004478482",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-spongebob-shirt-boys-patrick-fishing-on-shark-short-sleeve-graphic-tee-blue/-/A-1003386211",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-2-boy-s-tails-miles-prower-kids-graphic-print-t-shirt/-/A-91272914",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-naruto-uzumaki-shirt-boy-s-orange-monochrome-short-sleeve-graphic-top-black/-/A-1004743168",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/nasa-boys-this-is-how-i-roll-moon-rover-astronaut-graphic-t-shirt/-/A-91257970",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-big-boys-gameon-challenge-sonic-character-t-shirt/-/A-91272711",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-minecraft-boy-s-periodic-table-kids-short-sleeve-t-shirt/-/A-91272844",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-five-nights-at-freddy-s-fnaf-shirt-boy-s-character-letters-short-sleeve-top-blue/-/A-1004742569",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-boys-speedster-big-face-graphic-print-t-shirt/-/A-91272752",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/peanuts-snoopy-little-kids-usa-skateboard-vintage-distressed-t-shirt/-/A-91272817",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-rugrats-little-boy-s-chuckie-finster-and-tommy-pickles-t-shirt/-/A-91272451",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/pokemon-detective-pikachu-big-boys-short-sleeve-t-shirt-yellow-kids/-/A-89001150",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-boys-gameon-character-design-gaming-t-shirt/-/A-91272840",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-dragon-ball-z-t-shirt-boy-s-goku-super-saiyan-majin-buu-short-sleeve-tee-blue/-/A-1004813564",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-five-night-s-at-freddy-s-shirt-boy-s-bonnie-chica-foxy-bust-through-wall-tee-black/-/A-1004478487",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-five-nights-at-freddy-s-t-shirt-boy-s-chica-foxy-bonnie-faces-short-sleeve-top-blue/-/A-1004478537",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-maruchan-t-shirt-boy-s-instant-lunch-short-sleeve-graphic-tee-white/-/A-1005063053",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-teenage-mutant-ninja-turtles-cartoon-big-boys-short-sleeve-kids-t-shirt/-/A-93546741",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-five-nights-at-freddy-s-t-shirt-boys-fazbears-pizza-fast-delivery-tee/-/A-1005103070",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-dragon-ball-z-t-shirt-boys-goku-running-scene-anime-tee/-/A-1005063058",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-marvel-spiderman-t-shirt-boys-front-and-back-action-poses-tee/-/A-1005063062",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/naruto-shippuden-boys-uzumaki-hidden-leaf-village-licensed-t-shirt/-/A-91272768",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Seven Times Six, Tops",
        "filters": {
          "brand": "Seven Times Six"
        }
      },
      {
        "url": "https://www.target.com/p/shazam-movie-warped-text-crew-neck-short-sleeve-navy-blue-boy-s-t-shirt/-/A-88868038",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shazam!, Tops",
        "filters": {
          "brand": "Shazam!"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shazam-fury-of-the-gods-hero-portrait-t-shirt/-/A-88356595",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shazam!, Tops",
        "filters": {
          "brand": "Shazam!"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shazam-fury-of-the-gods-movie-logo-t-shirt/-/A-88356682",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shazam!, Tops",
        "filters": {
          "brand": "Shazam!"
        }
      },
      {
        "url": "https://www.target.com/p/shazam-movie-character-and-lightning-bolt-pattern-crew-neck-short-sleeve-red-boy-s-t-shirt/-/A-88868113",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shazam!, Tops",
        "filters": {
          "brand": "Shazam!"
        }
      },
      {
        "url": "https://www.target.com/p/shazam-movie-character-in-circle-crew-neck-short-sleeve-charcoal-boy-s-t-shirt/-/A-88868240",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shazam!, Tops",
        "filters": {
          "brand": "Shazam!"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shazam-fury-of-the-gods-strength-of-hercules-t-shirt/-/A-88356632",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shazam!, Tops",
        "filters": {
          "brand": "Shazam!"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shazam-fury-of-the-gods-power-of-shazam-t-shirt/-/A-88356486",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shazam!, Tops",
        "filters": {
          "brand": "Shazam!"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shazam-fury-of-the-gods-shazamily-comic-book-cover-t-shirt/-/A-88356556",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shazam!, Tops",
        "filters": {
          "brand": "Shazam!"
        }
      },
      {
        "url": "https://www.target.com/p/shrek-dear-santa-i-can-explain-short-sleeve-graphic-t-shirt/-/A-1000026362",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/shrek-have-a-smelly-shrekmas-short-sleeve-graphic-t-shirt/-/A-94155093",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-merry-shrekmas-t-shirt/-/A-84866988",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-puss-in-boots-pray-for-mercy-t-shirt/-/A-85153788",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-christmas-smelly-t-shirt/-/A-84867086",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-merry-shrekmas-snowflakes-t-shirt/-/A-84867082",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-christmas-gingerbread-cookies-t-shirt/-/A-84868361",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-donkey-and-shrek-best-friends-t-shirt/-/A-87530047",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-standing-green-shrek-t-shirt/-/A-87529998",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-big-face-eyebrow-raised-t-shirt/-/A-85025905",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-vest-retro-circle-t-shirt/-/A-82364726",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-one-of-a-kind-t-shirt/-/A-85088412",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-birthday-boy-shrek-t-shirt/-/A-87528899",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-happy-easter-cartoon-portraits-t-shirt/-/A-88718483",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-st-patrick-s-day-pinch-me-if-you-dare-t-shirt/-/A-88746591",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-get-outta-my-swamp-shrek-face-t-shirt/-/A-87529962",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-fairytale-squad-group-shot-t-shirt/-/A-87530024",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-happy-easter-cartoon-portraits-t-shirt/-/A-1002734862",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-ugly-christmas-shrekmas-t-shirt/-/A-84868389",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-christmas-santa-claws-puss-in-boots-t-shirt/-/A-84868282",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-shrek-silent-night-smelly-night-t-shirt/-/A-84867099",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Shrek, Tops",
        "filters": {
          "brand": "Shrek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sing-2-miss-crawly-your-destination-is-on-the-right-t-shirt/-/A-86051682",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sing 2, Tops",
        "filters": {
          "brand": "Sing 2"
        }
      },
      {
        "url": "https://www.target.com/p/boys-smurfs-short-sleeve-graphic-t-shirt/-/A-1004152349",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-smurfs-short-sleeve-graphic-t-shirt/-/A-1004152527",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-smurfs-short-sleeve-graphic-t-shirt/-/A-1004152545",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-smurfs-short-sleeve-graphic-t-shirt/-/A-1004152365",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-smurfs-short-sleeve-graphic-t-shirt/-/A-1004152391",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-smurfs-short-sleeve-graphic-t-shirt/-/A-1004152431",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-the-smurfs-the-blues-coach-t-shirt/-/A-1004395855",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-smurfs-short-sleeve-graphic-t-shirt/-/A-1004152333",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-the-smurfs-smurfy-easter-t-shirt/-/A-1002734959",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-smurfs-short-sleeve-graphic-t-shirt/-/A-1004152302",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-the-smurfs-smurfette-love-you-t-shirt/-/A-1001935550",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-the-smurfs-listen-to-the-coach-t-shirt/-/A-1004382508",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-the-smurfs-free-hugs-t-shirt/-/A-1001935709",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-the-smurfs-love-t-shirt/-/A-1001935595",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Smurfs, Tops",
        "filters": {
          "brand": "Smurfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarfs-mining-camp-dwarfs-mine-t-shirt/-/A-91642352",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarves-birthday-grump-t-shirt/-/A-87529133",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarves-athletic-grumpy-performance-tee/-/A-87529196",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarves-grumpy-since-37-performance-tee/-/A-87529398",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarfs-grumpy-i-can-t-even-t-shirt/-/A-91642527",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarfs-i-m-grumpy-cause-you-re-dopey-t-shirt/-/A-91642505",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarves-grumpy-one-t-shirt/-/A-85154098",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-classic-faces-distress-t-shirt/-/A-1002993771",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarfs-i-m-bringing-grumpy-back-t-shirt/-/A-91642417",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-with-grumpy-t-shirt/-/A-1002996162",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarfs-grumpy-diamond-mine-tour-t-shirt/-/A-91642237",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarves-happy-one-t-shirt/-/A-85026065",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarfs-lucky-seven-t-shirt/-/A-91642467",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarfs-hashtag-dopey-t-shirt/-/A-91642321",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarves-squad-goals-t-shirt/-/A-87529065",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarves-grumpy-since-37-t-shirt/-/A-87529168",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarfs-grumpy-as-usual-distressed-t-shirt/-/A-91642485",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarves-sleepy-one-t-shirt/-/A-85026069",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarfs-grumpy-expressions-t-shirt/-/A-91642449",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-grumpy-s-face-t-shirt/-/A-1002995949",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-classic-doc-t-shirt/-/A-1002994110",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-grumpy-mad-skills-t-shirt/-/A-1002996587",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-grumpy-anywhere-but-here-t-shirt/-/A-1002994671",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarfs-sleepy-morning-t-shirt/-/A-91642579",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-with-dopey-t-shirt/-/A-1002996206",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-doc-big-face-t-shirt/-/A-1002997249",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-grumpy-my-many-moods-t-shirt/-/A-1002996487",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-forest-friends-be-kind-to-all-kinds-t-shirt/-/A-1002995870",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-grumpy-do-i-look-like-i-care-t-shirt/-/A-1002995980",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-fairest-goth-t-shirt/-/A-1002995927",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-heigh-ho-heigh-ho-the-fairest-of-them-all-t-shirt/-/A-1002997032",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-princess-collage-t-shirt/-/A-1002995275",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarfs-floral-fairest-one-of-all-t-shirt/-/A-91642542",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-snow-white-and-the-seven-dwarves-grumps-box-logo-t-shirt/-/A-87528915",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-today-i-feel-faces-t-shirt/-/A-1002997054",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-periodic-table-multicolor-t-shirt/-/A-1002996741",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-snow-white-and-the-seven-dwarfs-sleepy-my-many-moods-t-shirt/-/A-1002996431",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Snow White & the Seven Dwarfs, Tops",
        "filters": {
          "brand": "Snow White & the Seven Dwarfs"
        }
      },
      {
        "url": "https://www.target.com/p/boys-solid-light-taco-lettuce-pray-short-sleeve-graphic-t-shirt/-/A-1003969607",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Solid Light, Tops",
        "filters": {
          "brand": "Solid Light"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-classic-characters-3-pack-boy-s-crew-neck-short-sleeve-t-shirt-combo-set/-/A-92354410",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-boys-3-pack-set-includes-two-tees-and-mesh-shorts/-/A-90126003",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sega-sonic-the-hedgehog-knuckles-tails-3-pack-graphic-t-shirts-red-blue-yellow-little-kid-to-big-kid/-/A-85001207",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-don-t-stop-2-pack-boy-s-crew-neck-short-sleeve-performance-tee-combo-set/-/A-92407348",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-characters-kanji-boy-s-4-pack-t-shirt-set/-/A-1000860379",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-sonic-the-hedgehog-boy-s-green-eyes-graphic-print-kids-short-sleeve-t-shirt-grey/-/A-93805564",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-modern-snowy-character-collage-crew-neck-long-sleeve-boys-black-tee/-/A-88317489",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-characters-kanji-boy-s-4-pack-t-shirt-set/-/A-1001698461",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-sonic-knuckles-boy-s-black-long-sleeve-shirt/-/A-86316234",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/youth-boys-sonic-3-pc-hoodie-jogger-t-shirt-combo/-/A-90021880",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-team-up-gear-up-youth-athletic-heather-crew-neck-long-sleeve-sweatshirt/-/A-1003810078",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedghog-sonic-big-boys-t-shirt-kids/-/A-91814860",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-gameon-sega-video-game-boys-t-shirt-kids/-/A-91814869",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-boy-s-pop-art-sonic-kids-short-sleeve-t-shirt/-/A-92507078",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sega-sonic-the-hedgehog-3-pack-graphic-t-shirts-blue-gray-black/-/A-87274726",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-sonic-tails-boy-s-white-t-shirt/-/A-86394165",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/youth-boys-sonic-the-hedgehog-blue-short-sleeve-graphic-tee/-/A-84251903",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sega-sonic-the-hedgehog-checkers-face-youth-royal-blue-graphic-tee/-/A-85355153",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-modern-remix-youth-boy-s-navy-blue-graphic-tee/-/A-84941617",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-modern-character-youth-charcoal-gray-graphic-tee/-/A-84941317",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-modern-character-youth-boy-s-black-graphic-tee/-/A-84940999",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-video-game-character-youth-boys-red-graphic-tee/-/A-84941079",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/youth-boys-sonic-retro-video-game-graphic-tee/-/A-88886919",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sonic-the-hedgehog-mosaic-modern-character-art-youth-red-short-sleeve-tee/-/A-91530252",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sonic-the-hedgehog-running-pose-pop-dimension-graphic-youth-boys-white-t-shirt/-/A-87057074",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-classic-animated-character-30th-anniversary-classic-charcoal-tee/-/A-84939367",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sonic-the-hedgehog-tails-running-pose-pop-dimension-graphic-youth-boys-black-t-shirt/-/A-87057119",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sonic-the-hedgehog-unstoppable-crew-pop-dimension-graphic-youth-boys-royal-blue-t-shirt/-/A-87057226",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-sega-pixelated-youth-boys-short-sleeve-graphic-t-shirt/-/A-84005127",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-classic-boys-t-shirt/-/A-83709858",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-gotta-go-fast-crew-neck-short-sleeve-boy-s-colorblock-t-shirt/-/A-93971836",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-6th-birthday-t-shirt/-/A-1004128471",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-shadow-6th-birthday-t-shirt/-/A-1004128503",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-distressed-shadow-bursting-out-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1003429571",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-shadow-7th-birthday-t-shirt/-/A-1004128485",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-shadow-action-t-shirt/-/A-1004128509",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sonic-the-hedgehog-classic-red-and-black-dot-art-youth-red-short-sleeve-tee/-/A-93325629",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sonic-the-hedgehog-shamrock-rings-t-shirt/-/A-1002301733",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-shadow-stack-t-shirt/-/A-1004546199",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sonic-the-hedgehog-team-in-action-t-shirt/-/A-1003021672",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-warped-checkered-background-crew-neck-short-sleeve-gray-heather-youth-t-shirt/-/A-90064320",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-chili-dogs-all-over-print-youth-tofu-crew-neck-short-sleeve-t-shirt/-/A-1004470694",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-modern-boys-black-crew-neck-short-sleeve-t-shirt/-/A-1004429904",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-golden-rings-boy-s-black-long-sleeve-shirt/-/A-86316370",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sonic-the-hedgehog-mosaic-modern-character-art-youth-heather-gray-short-sleeve-tee/-/A-90370329",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-classic-trio-pose-t-shirt/-/A-1004546340",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-8th-birthday-t-shirt/-/A-1004128419",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/checkered-sonic-the-hedgehog-tails-and-knuckles-youth-boy-s-white-t-shirt/-/A-87143661",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-classic-characters-boy-s-crew-neck-short-sleeve-t-shirt/-/A-93062883",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sonic-the-hedgehog-classic-red-and-black-dot-art-youth-heather-gray-short-sleeve-tee/-/A-93325634",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/pop-colors-sonic-the-hedgehog-youth-boys-navy-t-shirt/-/A-87057013",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-modern-characters-with-logo-youth-boy-s-royal-blue-t-shirt/-/A-87481973",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-shadow-8th-birthday-t-shirt/-/A-1004128497",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-shadow-text-frame-t-shirt/-/A-1004546249",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-classic-poses-t-shirt/-/A-1004546298",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-9th-birthday-t-shirt/-/A-1004128464",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sonic-the-hedgehog-mosaic-modern-character-art-youth-navy-blue-short-sleeve-tee/-/A-93326717",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/seven-times-six-sonic-the-hedgehog-shirt-for-boys-glow-in-the-dark-neon-graphic-t-shirt-black/-/A-1001033608",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-knuckles-portrait-t-shirt/-/A-1004563817",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-all-get-you-soccer-t-shirt/-/A-1004387048",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-shadow-portrait-t-shirt/-/A-1004563861",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-30th-anniversary-classic-black-tee/-/A-84939383",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-sonic-the-hedgehog-classic-red-and-black-dot-art-youth-white-short-sleeve-tee/-/A-90240140",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-classic-sonic-shadow-cut-out-boy-s-royal-blue-t-shirt/-/A-88313738",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-faster-than-the-speed-of-sound-t-shirt/-/A-1004563462",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-shadow-ultimate-power-t-shirt/-/A-1004546533",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-gotta-go-fast-boy-s-athletic-heather-t-shirt/-/A-86316308",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-characters-squares-boy-s-athletic-heather-t-shirt/-/A-86316540",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-sonic-s-the-name-speed-s-my-game-boy-s-black-t-shirt/-/A-86394177",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-modern-boys-blue-crew-neck-short-sleeve-t-shirt/-/A-1004434578",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-prime-new-yoke-city-characters-crew-neck-short-sleeve-boy-s-t-shirt/-/A-89764334",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-sonic-with-ring-boy-s-black-t-shirt/-/A-85353556",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-classic-olgilvie-maurice-boy-s-royal-blue-t-shirt/-/A-87945218",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-sonic-character-art-boy-s-royal-blue-t-shirt/-/A-86103809",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-modern-boys-black-crew-neck-short-sleeve-t-shirt/-/A-1004429930",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/tails-never-fails-youth-boys-royal-blue-t-shirt/-/A-87057030",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-trio-group-shot-t-shirt/-/A-1004563489",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-ultimate-power-duo-2-pack-t-shirts/-/A-1003722815",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-tails-i-can-do-it-boy-s-black-t-shirt/-/A-86316361",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-thumbs-up-t-shirt/-/A-1004546221",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-prime-logo-crew-neck-short-sleeve-boy-s-black-t-shirt/-/A-89764253",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-speed-zone-tape-and-characters-boy-s-royal-blue-t-shirt/-/A-85353759",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-vs-eggman-crew-neck-short-sleeve-boy-s-black-t-shirt/-/A-89258424",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-shadow-9th-birthday-t-shirt/-/A-1004128480",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/superpowered-echidna-sonic-the-hedgehog-youth-boys-red-t-shirt/-/A-87056995",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-sonic-modern-mosaic-art-crew-neck-short-sleeve-boys-black-t-shirt/-/A-88920548",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-game-over-pixel-characters-boy-s-black-t-shirt/-/A-86394255",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-text-logo-boy-s-charcoal-t-shirt/-/A-86394241",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sonic-the-hedgehog-be-my-valentine-t-shirt/-/A-1001934997",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sonic-the-hedgehog-amy-red-balloon-t-shirt/-/A-1001934710",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sonic-the-hedgehog-classic-pose-t-shirt/-/A-1003021685",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sonic-the-hedgehog-pink-and-blue-in-the-fast-lane-t-shirt/-/A-1001934738",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sonic-the-hedgehog-knuckles-is-my-valentine-t-shirt/-/A-1001934702",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-youth-boys-short-sleeve-t-shirt/-/A-84705700",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boys-sonic-the-hedgehog-game-on-pose-t-shirt/-/A-1004546290",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-sonic-the-hedgehog-love-in-the-fast-lane-t-shirt/-/A-1001934977",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-classic-bioworld-sonic-classic-w-tails-star-logo-artwork-on-white-short-sleeve-youth-t-shirt/-/A-1005196852",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-modern-boys-blue-crew-neck-short-sleeve-t-shirt/-/A-1004434572",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-classic-bioworld-sonic-classic-character-group-artwork-on-white-short-sleeve-youth-t-shirt/-/A-1005196992",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/sonic-the-hedgehog-classic-bioworld-sonic-classic-star-rings-portrait-on-royal-blue-short-sleeve-youth-t-shirt/-/A-1005197069",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Sonic the Hedgehog, Tops",
        "filters": {
          "brand": "Sonic the Hedgehog"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-soul-cat-purpose-t-shirt/-/A-82179362",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Soul, Tops",
        "filters": {
          "brand": "Soul"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-soul-jazz-cat-t-shirt/-/A-82177987",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Soul, Tops",
        "filters": {
          "brand": "Soul"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-soul-rainbow-cat-t-shirt/-/A-82177761",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Soul, Tops",
        "filters": {
          "brand": "Soul"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-soul-22-meh-badge-t-shirt/-/A-82178489",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Soul, Tops",
        "filters": {
          "brand": "Soul"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-looney-tunes-3-pack-graphic-t-shirts-little-kid-to-big-kid/-/A-87043157",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-2-welcome-to-the-jam-youth-charcoal-gray-graphic-tee/-/A-84941922",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-space-jam-1996-collegiate-text-with-bugs-bunny-and-daffy-duck-youth-royal-blue-graphic-tee/-/A-87614742",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/navy-blue-splatter-print-space-jam-2-tune-squad-youth-boys-graphic-tee/-/A-84942037",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-2-tune-squad-characters-youth-athletic-gray-graphic-tee/-/A-84940354",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-space-jam-1996-bugs-bunny-with-tune-squad-warped-graphic-youth-royal-blue-graphic-tee/-/A-87614715",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-2-tune-squad-logo-youth-athletic-gray-graphic-tee/-/A-84942270",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-2-welcome-to-the-slam-blue-print-youth-boys-graphic-t-shirt/-/A-83888524",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-space-jam-bugs-bunny-youth-navy-blue-crew-neck-tee/-/A-88032987",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-pete-tunes-vs-goons-t-shirt/-/A-83439792",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-goon-squad-star-t-shirt/-/A-83437033",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-looney-tunes-cartoon-youth-boys-blue-shirt/-/A-84713964",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-dom-james-tune-squad-t-shirt/-/A-83441567",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-serious-bugs-bunny-boy-s-royal-blue-t-shirt/-/A-85729128",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-goon-squad-boxes-t-shirt/-/A-83439591",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-2-a-new-legacy-tune-squad-grey-youth-boys-short-sleeve-t-shirt/-/A-83888499",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-daffy-bugs-and-taz-basketball-match-boy-s-royal-blue-t-shirt/-/A-85352719",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-tune-squad-basketball-logo-t-shirt/-/A-83439618",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-1996-bugs-bunny-with-logo-youth-boy-s-athletic-heather-t-shirt/-/A-87450667",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/bioworld-space-jam-1996-tune-squad-character-group-youth-boys-athletic-heather-gray-t-shirt/-/A-87057127",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boys-space-jam-short-sleeve-t-shirt-toddler-boy-to-youth-boy/-/A-84706390",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-bugs-bunny-face-boy-s-charcoal-tshirt/-/A-86383631",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-full-tune-squad-t-shirt/-/A-83439293",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-bugs-bunny-and-daffy-duck-outline-boy-s-navy-blue-t-shirt/-/A-86103909",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/youth-boys-space-jam-short-sleeve-t-shirt/-/A-86183734",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-characters-and-logo-b0y-s-royal-blue-t-shirt/-/A-86448943",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/space-jam-lola-and-bugs-basketball-match-boy-s-royal-blue-t-shirt/-/A-85352282",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-classic-logo-t-shirt/-/A-83440443",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-lola-bunny-it-s-game-time-t-shirt/-/A-83437198",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-it-s-lit-t-shirt/-/A-83438196",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-bugs-bunny-mix-tapes-t-shirt/-/A-83438543",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-al-g-rhythm-t-shirt/-/A-83441618",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-al-g-rhythm-goon-squad-t-shirt/-/A-83439947",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-tune-squad-music-t-shirt/-/A-83437155",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-marvin-the-martian-boom-box-t-shirt/-/A-83437875",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-lola-bunny-dj-t-shirt/-/A-83441289",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-goon-squad-t-shirt/-/A-83441631",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-welcome-to-the-jam-mix-tape-t-shirt/-/A-83439559",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-pete-pocket-print-t-shirt/-/A-83441018",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-goon-squad-ready-to-jam-t-shirt/-/A-83440582",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-lola-bunny-it-s-on-and-poppin-t-shirt/-/A-83438230",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-tune-squad-cute-logo-t-shirt/-/A-83437104",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-goon-squad-abstract-t-shirt/-/A-83439003",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-space-jam-a-new-legacy-arachnneka-goon-squad-t-shirt/-/A-83440763",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Space Jam, Tops",
        "filters": {
          "brand": "Space Jam"
        }
      },
      {
        "url": "https://www.target.com/p/spellbound-elian-silhouette-love-your-self-youth-black-crew-neck-long-sleeve-tee/-/A-94246103",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spellbound, Tops",
        "filters": {
          "brand": "Spellbound"
        }
      },
      {
        "url": "https://www.target.com/p/spellbound-fairy-flowers-love-yourself-youth-athletic-heather-crew-neck-long-sleeve-tee/-/A-94246107",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spellbound, Tops",
        "filters": {
          "brand": "Spellbound"
        }
      },
      {
        "url": "https://www.target.com/p/spellbound-treehouse-clouds-home-youth-black-crew-neck-long-sleeve-tee/-/A-1000092052",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spellbound, Tops",
        "filters": {
          "brand": "Spellbound"
        }
      },
      {
        "url": "https://www.target.com/p/spellbound-elian-pose-love-your-self-youth-white-crew-neck-short-sleeve-t-shirt/-/A-94244563",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spellbound, Tops",
        "filters": {
          "brand": "Spellbound"
        }
      },
      {
        "url": "https://www.target.com/p/spellbound-fink-love-your-self-youth-royal-blue-crew-neck-short-sleeve-t-shirt/-/A-94244555",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spellbound, Tops",
        "filters": {
          "brand": "Spellbound"
        }
      },
      {
        "url": "https://www.target.com/p/spellbound-flink-line-art-youth-white-crew-neck-short-sleeve-t-shirt/-/A-1003316407",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spellbound, Tops",
        "filters": {
          "brand": "Spellbound"
        }
      },
      {
        "url": "https://www.target.com/p/spellbound-flink-big-hugs-youth-navy-crew-neck-short-sleeve-t-shirt/-/A-1003316320",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spellbound, Tops",
        "filters": {
          "brand": "Spellbound"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-marvel-spider-man-into-the-spider-verse-spray-paint-logo-t-shirt/-/A-79711449",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boys-marvel-spider-man-venom-vs-spidey-battle-t-shirt/-/A-1004564434",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-marvel-spider-man-thwip-pose-starry-night-t-shirt/-/A-1001817857",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-2099-spider-man-logo-t-shirt/-/A-89212120",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-miles-morales-movie-poster-t-shirt/-/A-89018525",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-husky-marvel-spider-man-into-the-spider-verse-spray-paint-logo/-/A-87570567",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boys-marvel-spider-man-cool-it-webhead-t-shirt/-/A-1004563585",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boys-marvel-spider-man-superhero-team-t-shirt/-/A-1004401871",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/five-nights-at-freddy-s-spider-web-freddy-boy-s-black-t-shirt/-/A-85874184",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-graffiti-spider-logo-t-shirt/-/A-89018678",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-evolution-t-shirt/-/A-87898027",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-spray-paint-spider-logo-t-shirt/-/A-89018830",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-marvel-spider-man-into-the-spider-verse-modern-spider-gwen-t-shirt/-/A-85816226",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-group-colorful-poster-t-shirt/-/A-89211943",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-web-shooting-t-shirt/-/A-87896169",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-mask-sketch-circle-t-shirt/-/A-87897156",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-thwip-comic-book-panels-t-shirt/-/A-87896657",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-toy-villain-squares-t-shirt/-/A-87897610",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-comic-clippings-logo-t-shirt/-/A-87898898",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-spider-gwen-portrait-t-shirt/-/A-89211971",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-marvel-spider-man-christmas-spider-man-santa-hat-t-shirt/-/A-1001091950",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-60-amazing-years-t-shirt/-/A-87900143",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-spidey-sense-in-action-t-shirt/-/A-87898597",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-neon-logo-t-shirt/-/A-87896423",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-marvel-spider-man-into-the-spider-verse-hooded-miles-t-shirt/-/A-79592876",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boys-marvel-spider-man-protector-of-new-york-t-shirt/-/A-1004401335",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-marvel-spider-man-far-from-home-logo-splatter-t-shirt/-/A-82369986",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-marvel-gamerverse-spider-man-logo-t-shirt/-/A-85827909",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-retro-1977-t-shirt/-/A-87898541",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-marvel-spider-man-stick-together-spidey-t-shirt/-/A-1001092489",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-red-glitch-spider-logo-t-shirt/-/A-89212001",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-split-distressed-circle-t-shirt/-/A-87899363",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-miles-morales-and-spider-gwen-t-shirt/-/A-89212023",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-marvel-spider-man-spider-webs-t-shirt/-/A-1001817874",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-green-spider-logo-t-shirt/-/A-89211919",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-swing-pose-t-shirt/-/A-87899337",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-hero-mask-t-shirt/-/A-87898650",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-vintage-77-t-shirt/-/A-87896577",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-retro-pose-t-shirt/-/A-87897419",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-characters-logo-t-shirt/-/A-89212038",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-marvel-christmas-spider-man-santa-hat-t-shirt/-/A-81881593",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-miles-logo-t-shirt/-/A-89212161",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-web-slinger-circle-t-shirt/-/A-87897709",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-husky-marvel-spider-man-into-the-spider-verse-hooded-miles/-/A-87569929",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-spider-gwen-paint-splatter-t-shirt/-/A-89211924",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-mask-squares-t-shirt/-/A-87897061",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-spider-man-2099-logo-t-shirt/-/A-89018550",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-retro-tickets-t-shirt/-/A-87896739",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-beyond-amazing-web-slinging-t-shirt/-/A-87898165",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-movie-logo-t-shirt/-/A-89018773",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-movie-logo-white-t-shirt/-/A-89018685",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boys-marvel-spider-man-across-the-spider-verse-graffiti-red-logo-t-shirt/-/A-1004546251",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spider-man-across-the-spider-verse-heroes-t-shirt/-/A-92328032",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Spider-Man, Tops",
        "filters": {
          "brand": "Spider-Man"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-and-patrick-4th-of-july-cheers-t-shirt-red-large/-/A-1002705810",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob, Tops",
        "filters": {
          "brand": "SpongeBob"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-stay-fly-on-the-4th-of-july-t-shirt-light-blue-small/-/A-1002705628",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob, Tops",
        "filters": {
          "brand": "SpongeBob"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-shine-like-4th-of-july-fireworks-t-shirt-light-blue-medium/-/A-1002705823",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob, Tops",
        "filters": {
          "brand": "SpongeBob"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-cheers-it-s-4th-of-july-t-shirt-royal-large/-/A-1002706404",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob, Tops",
        "filters": {
          "brand": "SpongeBob"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-krusty-krab-embroidered-front-and-back-graphic-oversized-short-sleeve-t-shirt-yellow/-/A-93623645",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/spongebob-squarepants-3-pack-t-shirts-little-kid-to-big-kid/-/A-89714414",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/spongebob-squarepants-squidward-patrick-2-pack-t-shirts-little-kid-to-big-kid/-/A-85236342",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/spongebob-squarepants-boys-shirt-spongebob-mr-krrabs-squidward-tee-classic-spongebob-front-and-back-patch-t-shirt-light-blue-14-16/-/A-1004936127",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/spongebob-squarepants-boys-shirt-spongebob-mr-krrabs-squidward-tee-classic-spongebob-front-and-back-patch-t-shirt-light-blue-10-12/-/A-1004936142",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/spongebob-squarepants-boys-shirt-spongebob-mr-krrabs-squidward-tee-classic-spongebob-front-and-back-patch-t-shirt-light-blue-18-20/-/A-1004936156",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/nickelodeon-spongebob-squarepants-boys-4-pack-t-shirt-for-big-kids/-/A-1001307066",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-distressed-best-friends-t-shirt/-/A-87693963",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-group-friends-t-shirt/-/A-87694010",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-kamp-koral-character-badges-short-sleeve-graphic-t-shirt/-/A-92864779",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-like-a-boss-performance-tee/-/A-87693768",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-group-friends-performance-tee/-/A-87693951",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-good-vibes-best-friends-t-shirt/-/A-1004164288",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-neon-attitude-t-shirt/-/A-82369804",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-christmas-wreath-t-shirt/-/A-90164182",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-like-a-boss-t-shirt/-/A-87693957",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-halloween-trick-or-treat-t-shirt/-/A-1001414773",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-yasss-cheer-performance-tee/-/A-87693912",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-ready-for-treats-t-shirt/-/A-87694086",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-here-for-the-sponge-t-shirt/-/A-1002303194",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-skater-bob-t-shirt/-/A-87694039",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-welcome-to-bikini-bottom-t-shirt/-/A-1002735071",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-christmas-santa-can-explain-t-shirt/-/A-81881530",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-sponge-on-the-run-flippin-out-burger-t-shirt/-/A-85154084",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-kamp-koral-krabby-kamper-short-sleeve-graphic-t-shirt/-/A-1000788196",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-best-birthday-ever-t-shirt/-/A-87694070",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-i-m-a-goofy-goober-t-shirt/-/A-87694040",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-kamp-koral-badge-short-sleeve-graphic-t-shirt/-/A-92864719",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-shenanigans-t-shirt/-/A-1002303216",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-bank-geek-practice-t-shirt/-/A-82350531",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-birthday-sponge-t-shirt/-/A-87693985",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-patrick-star-shamrock-bubbles-t-shirt/-/A-1002303117",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-happy-patrick-star-day-t-shirt/-/A-1002303293",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-mr-krab-face-t-shirt/-/A-82352400",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-cupid-be-mine-t-shirt/-/A-85565276",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-sponge-on-the-run-baby-snail-gary-t-shirt/-/A-85088498",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-be-kind-to-our-planet-t-shirt/-/A-88715991",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-sponge-on-the-run-jellyfish-catcher-t-shirt/-/A-85154409",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-happy-patrick-s-day-t-shirt/-/A-1002303014",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-happy-go-lucky-t-shirt/-/A-1002303125",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-st-patrick-s-day-rainbow-duo-t-shirt/-/A-1002303262",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-valentine-s-day-squidward-i-m-my-own-valentine-t-shirt/-/A-88323776",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-shore-thing-t-shirt/-/A-85088537",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-colorful-hoppy-easter-t-shirt/-/A-88718558",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-love-the-earth-t-shirt/-/A-88716018",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-boo-crew-green-ghost-t-shirt/-/A-87693798",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-spongebob-squarepants-distressed-blue-bikini-bottom-t-shirt/-/A-87693966",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boys-spongebob-squarepants-kamp-koral-campsite-bonfire-short-sleeve-graphic-t-shirt/-/A-92864751",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, SpongeBob SquarePants, Tops",
        "filters": {
          "brand": "SpongeBob SquarePants"
        }
      },
      {
        "url": "https://www.target.com/p/boys-39-squishmallows-pizza-party-short-sleeve-graphic-t-shirt-beige/-/A-92517047",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Squishmallows, Tops",
        "filters": {
          "brand": "Squishmallows"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-trek-americana-enterprise-t-shirt/-/A-1004374409",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-voyager-retro-rainbow-logo-t-shirt/-/A-85222459",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-lieutenant-commander-geordi-la-forge-cat-t-shirt/-/A-85976059",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/star-trek-original-series-admiral-kirk-pop-art-boy-s-atheltic-heather-t-shirt/-/A-87945254",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-uss-enterprise-ugly-christmas-sweater-t-shirt/-/A-81882228",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/star-trek-original-series-starship-enterprise-boy-s-navy-t-shirt/-/A-87944605",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-captain-picard-palm-to-face-meme-t-shirt/-/A-85975808",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-valentine-s-pixel-set-phasers-to-stun-t-shirt/-/A-85944633",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-original-series-exploring-final-frontier-since-1966-t-shirt/-/A-85223108",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-starry-night-enterprise-t-shirt/-/A-85222649",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-uss-enterprise-rainbow-streak-t-shirt/-/A-85944861",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-valentine-s-starfleet-candy-hearts-t-shirt/-/A-82188393",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-original-series-starfleet-academy-enterprise-boldly-go-t-shirt/-/A-85975210",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-be-my-starfleet-valentine-t-shirt/-/A-82189322",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-original-series-spock-always-shall-be-valentine-t-shirt/-/A-82189539",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-valentine-s-day-your-the-only-one-in-the-galaxy-for-me-t-shirt/-/A-85944968",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-captain-picard-history-never-forgets-the-name-enterprise-t-shirt/-/A-85943919",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-operations-starfleet-badge-t-shirt/-/A-85223290",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-starfleet-crew-portraits-playing-cards-frame-t-shirt/-/A-85223217",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-starfleet-cozy-cat-emblem-t-shirt/-/A-85223254",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-spock-live-long-and-prosper-ugly-christmas-t-shirt/-/A-84868134",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-cat-spock-live-long-and-prosper-t-shirt/-/A-85222713",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-deep-space-nine-niners-ds9-baseball-league-t-shirt/-/A-85222559",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-captain-jean-luc-picard-cat-t-shirt/-/A-85945189",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-starfleet-ship-collage-t-shirt/-/A-85222596",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-starfleet-classic-color-crew-poster-t-shirt/-/A-85223248",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-captain-kirk-cat-t-shirt/-/A-85223572",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-borg-armor-t-shirt/-/A-86377481",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/star-trek-original-series-cast-with-logo-boy-s-white-t-shirt/-/A-87944596",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-spaceship-rainbow-streak-t-shirt/-/A-85223147",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-cartoon-data-and-cat-t-shirt/-/A-85222810",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-captain-picard-color-streak-engage-t-shirt/-/A-85222735",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-periodic-table-of-starfleet-t-shirt/-/A-85952094",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-lieutenant-commander-worf-cat-t-shirt/-/A-85974829",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-5-year-mission-text-t-shirt/-/A-85223273",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-starfleet-academy-emblem-est-2161-t-shirt/-/A-85222976",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-original-series-uss-enterprise-nc-1701-bridge-owners-manual-t-shirt/-/A-85976429",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-to-boldly-go-starfleet-t-shirt/-/A-85976298",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-discovery-artistic-rainbow-starfleet-logo-t-shirt/-/A-85223578",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-original-series-space-the-final-frontier-t-shirt/-/A-85222666",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-enterprise-starfleet-rainbow-streak-t-shirt/-/A-85223347",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-enterprise-pixel-video-game-battle-t-shirt/-/A-85222524",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-cup-of-tea-earl-grey-hot-captain-picard-t-shirt/-/A-85222935",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-original-series-st-patrick-s-day-spock-lucky-science-officer-performance-tee/-/A-85976025",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-original-series-st-patrick-s-day-captain-kirk-set-phasers-to-lucky-performance-tee/-/A-85975986",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-original-series-st-patrick-s-day-lucky-doctor-mccoy-performance-tee/-/A-85975970",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-original-series-uss-enterprise-space-the-final-frontier-t-shirt/-/A-85944602",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-rainbow-enterprise-crew-playing-cards-t-shirt/-/A-85223623",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-deep-space-nine-space-station-schematics-t-shirt/-/A-85222481",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-captain-picard-make-it-snow-t-shirt/-/A-84867987",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-worf-judging-you-in-klingon-t-shirt/-/A-85975751",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-enterprise-galaxy-class-ncc-1701-d-schematics-t-shirt/-/A-85223397",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-st-patrick-s-day-lucky-doctor-beverly-crusher-performance-tee/-/A-85974932",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-original-series-my-mirror-spock-costume-t-shirt/-/A-81494794",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-commander-data-st-patrick-s-day-lucky-android-t-shirt/-/A-85894036",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-st-patrick-s-day-lucky-captain-picard-t-shirt/-/A-85894941",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-st-patrick-s-day-kirk-this-is-my-lucky-green-shirt-t-shirt/-/A-85975694",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-motion-picture-rainbow-poster-there-is-no-comparison-t-shirt/-/A-85222700",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-st-patrick-s-day-lucky-engineer-la-forge-t-shirt/-/A-85974956",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-this-is-my-lucky-red-shirt-t-shirt/-/A-85223458",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-ugly-christmas-enterprise-boldly-go-t-shirt/-/A-84867966",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-st-patrick-s-day-lucky-doctor-beverly-crusher-t-shirt/-/A-85895608",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-this-is-my-borg-costume-t-shirt/-/A-87257064",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-dad-you-are-as-smart-as-data-as-strong-as-worf-as-dependable-as-geordi-as-brave-as-picard-t-shirt/-/A-87336960",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-uss-enterprise-stained-glass-to-boldly-go-t-shirt/-/A-85944935",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-the-next-generation-uss-enterprise-vertical-retro-rainbow-logo-t-shirt/-/A-85945560",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-dilithium-element-87-t-shirt/-/A-85952366",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-trek-deep-space-nine-defiant-development-assimilate-this-t-shirt/-/A-85222542",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Trek, Tops",
        "filters": {
          "brand": "Star Trek"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-w-is-for-wookie-little-boys-t-shirt-kids/-/A-91882557",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-the-child-baby-yoda-kids-5-piece-gift-set-shirt-socks-sticker-4-multicoloured/-/A-1000995764",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-2-pack-t-shirts-little-kid-to-big-kid/-/A-84932970",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-the-mandalorian-c-3po-chewbacca-stormtrooper-3-pack-t-shirts-little-kid-to-big-kid/-/A-89711046",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-chewbacca-stormtrooper-darth-vader-4-pack-t-shirts-little-kid-to-big-kid/-/A-93615716",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/star-wars-3-pack-t-shirts/-/A-1002540652",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-vintage-hero-character-frame-t-shirt/-/A-81914591",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-captain-rex-mashup-performance-tee/-/A-82350510",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-starship-battle-t-shirt/-/A-86333525",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-epic-darth-vader-t-shirt/-/A-82361683",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-chewbacca-basketball-who-invited-him-t-shirt/-/A-79711218",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-santa-yoda-t-shirt/-/A-81883040",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-cute-sketches-t-shirt/-/A-86926786",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-essentials-t-shirt/-/A-86337802",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-pixel-character-square-t-shirt/-/A-82360450",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-ewok-protect-our-forests-t-shirt/-/A-79712262",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-young-jedi-adventures-lightsaber-group-logo-t-shirt/-/A-89580830",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-millennium-falcon-cartoon-performance-tee/-/A-1001023054",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-ahsoka-rebel-padawan-portrait-performance-tee/-/A-82353508",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-warrior-emblem-performance-tee/-/A-79783033",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-pixel-character-guide-t-shirt/-/A-86334243",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-falcon-t-shirt/-/A-81914515",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-dot-helmet-performance-tee/-/A-86333997",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-tie-fighter-retro-t-shirt/-/A-85270291",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-galactic-empire-essentials-t-shirt/-/A-85827923",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-group-shot-comic-panels-performance-tee/-/A-89597488",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-group-shot-panels-performance-tee/-/A-89597645",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-group-shot-box-up-performance-tee/-/A-89597514",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-yoda-size-matters-not-performance-tee/-/A-89597495",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-visions-trooper-performance-tee/-/A-84644367",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-may-the-fourth-classic-characters-performance-tee/-/A-89039054",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-visions-retro-vader-performance-tee/-/A-84644547",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-square-group-photos-performance-tee/-/A-89597630",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-commander-rex-big-face-performance-tee/-/A-85302247",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-dusty-sunset-performance-tee/-/A-82159848",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-captain-rex-experience-performance-tee/-/A-82350648",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-character-party-t-shirt/-/A-85827827",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-map-points-of-interest-t-shirt/-/A-85827406",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-porg-and-a-shamrock-performance-tee/-/A-85894744",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-millennium-falcon-stay-galactic-performance-tee/-/A-86339424",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-millennium-falcon-shadow-t-shirt/-/A-79681984",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-chewbacca-basketball-who-invited-him-t-shirt/-/A-1001939754",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-galaxy-of-adventures-stormtrooper-loyalty-performance-tee/-/A-1001091092",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-colorful-icons-t-shirt/-/A-86926450",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-stormtrooper-group-t-shirt/-/A-86926504",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-darth-maul-savage-opress-performance-tee/-/A-89597614",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-pop-character-bingo-t-shirt/-/A-81914532",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-captain-head-shot-portrait-performance-tee/-/A-89597496",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-christmas-chewbacca-lights-t-shirt/-/A-81883068",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-retro-darth-vader-poster-t-shirt/-/A-92649692",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-darth-maul-big-face-performance-tee/-/A-89597610",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-yoda-force-is-strong-performance-tee/-/A-89597531",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-stormtrooper-halloween-costumes-t-shirt/-/A-87697600",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-simple-grogu-animation-t-shirt/-/A-89175865",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-tie-fighterprint-t-shirt/-/A-82352749",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-force-is-strong-with-this-one-performance-tee/-/A-79783035",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-christmas-galactic-ornaments-t-shirt/-/A-81951473",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-darth-vader-at-at-walking-the-dog-t-shirt/-/A-1001939778",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-darth-maul-dark-side-warrior-performance-tee/-/A-89597636",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-jedi-sith-panels-performance-tee/-/A-89597502",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-visions-the-force-performance-tee/-/A-84644591",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-stormtroopers-march-shadow-performance-tee/-/A-86334418",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-droid-cuties-performance-tee/-/A-89597367",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-visions-samurai-darth-vader-performance-tee/-/A-84644301",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-dark-side-halloween-performance-tee/-/A-87417060",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-droid-party-performance-tee/-/A-89597315",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-threat-to-the-dark-side-we-are-performance-tee/-/A-89597498",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-faster-than-you-millennium-falcon-performance-tee/-/A-86338987",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-sith-trooper-rocket-performance-tee/-/A-89597373",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-helmet-box-up-t-shirt/-/A-82157728",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-fourth-of-july-tie-fighter-stripes-t-shirt/-/A-82358204",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-characters-logo-t-shirt/-/A-87417078",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-christmas-gingerbread-characters-t-shirt/-/A-81951563",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-tie-fighter-schematic-t-shirt/-/A-1004413917",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-legendary-warrior-performance-tee/-/A-82159998",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-epic-logo-t-shirt/-/A-1004413998",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-corellian-freighter-t-shirt/-/A-1004407739",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-may-the-force-be-with-you-bold-logo-t-shirt/-/A-1004407825",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-galactic-battle-t-shirt/-/A-1004407393",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-sith-trooper-cartoon-performance-tee/-/A-89597378",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-distressed-darth-vader-birthday-kid-t-shirt/-/A-92232323",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-valentine-s-day-yoda-one-for-me-simple-t-shirt/-/A-85778542",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-cartoon-sounds-t-shirt/-/A-86339406",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-halloween-darth-vader-scene-t-shirt/-/A-87697562",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-it-s-not-wise-to-pinch-a-wookie-performance-tee/-/A-85895540",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-visions-boba-fett-jetpack-performance-tee/-/A-84644085",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-tropical-print-darth-vader-helmet-t-shirt/-/A-89632786",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-paint-splatter-emblem-performance-tee/-/A-82158354",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-retro-77-millennium-falcon-stripes-t-shirt/-/A-1004407872",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-sith-lord-maul-t-shirt/-/A-1004407278",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-ewok-kindness-matters-t-shirt/-/A-85904443",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-fourth-of-july-x-wing-performance-tee/-/A-1001023059",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-halloween-grogu-trick-or-treat-t-shirt/-/A-84172864",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-halloween-stormtrooper-have-a-ghoul-actic-halloween-t-shirt/-/A-89929977",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-cute-cartoon-ewok-t-shirt/-/A-86332821",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-cartoon-yoda-lucky-one-performance-tee/-/A-85894608",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-x-wing-squadron-t-shirt/-/A-85270337",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-valentine-s-day-boba-fett-cupid-t-shirt/-/A-85779120",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-red-white-and-popsicles-t-shirt/-/A-1004401370",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-ghoulactic-halloween-stormtrooper-t-shirt/-/A-84090087",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-galactic-ship-journey-t-shirt/-/A-85827611",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-helmet-cartoon-performance-tee/-/A-79783004",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-galaxy-of-adventures-darth-vader-lord-of-the-sith-t-shirt/-/A-89845813",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-feel-force-performance-tee/-/A-86334739",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-only-one-way-t-shirt/-/A-82067919",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-cartoon-costume-t-shirt/-/A-81495339",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-halloween-characters-trick-or-treat-t-shirt/-/A-81496274",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-maul-strikes-performance-tee/-/A-89597597",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-darth-maul-the-galaxy-s-most-wanted-performance-tee/-/A-89597518",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-distressed-rainbow-cast-performance-tee/-/A-1001939680",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-valentine-darth-vader-invitation-t-shirt/-/A-85779322",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-darth-vader-choke-t-shirt/-/A-87417017",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-dark-side-halloween-t-shirt/-/A-87417025",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-at-at-walking-the-dog-t-shirt/-/A-79681982",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-groovy-droid-duo-performance-tee/-/A-89597363",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-darkness-rises-performance-tee/-/A-89597358",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-stormtrooper-portrait-performance-tee/-/A-89597604",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-square-frame-t-shirt/-/A-79592950",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-at-at-retro-circle-t-shirt/-/A-1004407617",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-grogu-green-birthday-boy-t-shirt/-/A-89404992",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-st-patrick-s-day-luck-is-strong-with-this-one-performance-tee/-/A-85894384",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-ugly-sweater-christmas-tree-t-shirt/-/A-84867238",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-ahsoka-big-face-performance-tee/-/A-89597637",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-ombre-millennium-falcon-performance-tee/-/A-89597390",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-force-is-strong-darth-vader-t-shirt/-/A-86338066",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-millennium-falcon-may-the-4th-be-with-you-performance-tee/-/A-89039216",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-halloween-grogu-trick-or-treat-bag-t-shirt/-/A-84172994",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-sparklers-t-shirt/-/A-83027392",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-bb-8-on-the-run-performance-tee/-/A-89597320",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-artistic-helmet-t-shirt/-/A-85827832",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-collage-t-shirt/-/A-82157726",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-halloween-darth-vader-and-stormtroopers-i-find-your-lack-of-candy-disturbing-t-shirt/-/A-87697555",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-halloween-candy-collage-t-shirt/-/A-84172983",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-galaxy-of-adventures-darth-vader-dark-lord-t-shirt/-/A-85827877",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-death-star-streaks-t-shirt/-/A-1001023049",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-arcade-game-t-shirt/-/A-85132518",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-retro-luke-skywalker-silhouette-t-shirt/-/A-86334639",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-2d-bassinet-force-is-strong-t-shirt/-/A-82162268",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-cartoon-portraits-t-shirt/-/A-1004407575",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-i-find-your-lack-of-disturbing-t-shirt/-/A-82188939",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-last-jedi-bb-8-sunset-t-shirt/-/A-85390832",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-halloween-death-star-drip-t-shirt/-/A-84089791",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-halloween-stormtrooper-crossbones-t-shirt/-/A-84089832",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-dark-side-unite-t-shirt/-/A-1004407673",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-halloween-death-star-t-shirt/-/A-84090178",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-mad-sith-skills-t-shirt/-/A-83979458",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-grogu-djarin-red-sunset-art-t-shirt/-/A-1001091537",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-dark-side-partners-t-shirt/-/A-82364284",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-classic-yoda-man-t-shirt/-/A-86334971",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-this-is-the-way-mando-t-shirt/-/A-79681988",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-yoda-nice-or-not-nice-t-shirt/-/A-86339438",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vadercute-cartoon-t-shirt/-/A-85154088",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-patriotic-vintage-millennium-falcon-t-shirt/-/A-86926836",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-boba-it-s-cold-outside-t-shirt/-/A-81883326",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-clone-wars-yoda-epic-are-my-jedi-skills-performance-tee/-/A-89597549",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-valentine-s-day-boba-fett-bounty-on-heart-t-shirt/-/A-85778989",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-classic-scene-circle-t-shirt/-/A-85827742",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-valentine-s-day-yoda-one-for-me-cartoon-t-shirt/-/A-85778707",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-bad-batch-clone-force-99-t-shirt/-/A-82749976",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-patriotic-vintage-millennium-falcon-t-shirt/-/A-86926837",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-grogu-st-patrick-s-day-stars-luck-is-strong-with-this-one-t-shirt/-/A-85893927",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-birthday-cake-logo-t-shirt/-/A-92233006",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-valentine-s-day-i-chews-you-t-shirt/-/A-85779014",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-galaxy-of-adventures-stormtrooper-loyalty-t-shirt/-/A-86378687",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-halloween-vader-skeleton-dance-t-shirt/-/A-82372765",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-galaxy-of-adventures-c-3po-madness-t-shirt/-/A-86378668",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-husky-star-wars-the-mandalorian-father-s-day-grogu-retro-he-goes/-/A-87573112",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-8th-birthday-grogu-bassinet-t-shirt/-/A-89404915",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-retro-stripes-t-shirt/-/A-82162844",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-kylo-ren-emblem-t-shirt/-/A-82356324",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-bassinet-t-shirt/-/A-80219578",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-boba-fett-portrait-t-shirt/-/A-82179529",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-chewbacca-don-t-care-t-shirt/-/A-82368809",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-geometric-stormtrooper-helmet-t-shirt/-/A-82362728",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-young-jedi-adventures-jedi-master-yoda-may-the-force-be-with-you-t-shirt/-/A-89580367",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-ugly-christmas-yoda-silent-night-t-shirt/-/A-81881966",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-halloween-grogu-this-is-the-way-t-shirt/-/A-84172985",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-darth-vader-large-icon-t-shirt/-/A-89632845",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-visions-retro-anime-darth-vader-t-shirt/-/A-84644283",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-may-the-fourth-classic-poster-t-shirt/-/A-83026087",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-vintage-japanese-movie-poster-t-shirt/-/A-85827839",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-last-jedi-lights-t-shirt/-/A-85026292",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-merry-christmas-r2-d2-t-shirt/-/A-81951714",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-halloween-not-the-treats-t-shirt/-/A-84090940",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-r2-d2-5th-birthday-t-shirt/-/A-92232638",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-it-s-my-birthday-t-shirt/-/A-92232905",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-husky-star-wars-helmet-choice/-/A-87573231",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-characters-trick-or-treat-t-shirt/-/A-81914683",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-may-the-fourth-two-tone-box-t-shirt/-/A-83026123",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-cartoon-character-squares-t-shirt/-/A-86334656",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-din-djarin-beskar-armor-t-shirt/-/A-82177652",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-darth-vader-dark-side-empire-t-shirt/-/A-89633043",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-ugly-christmas-lack-of-cheer-disturbing-t-shirt/-/A-81883257",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-bad-guy-panel-t-shirt/-/A-82359005",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-visions-logo-performance-tee/-/A-84643721",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-may-the-fourth-opening-crawl-t-shirt/-/A-83027016",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-visions-anime-r2-d2-performance-tee/-/A-84643694",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-christmas-stormtrooper-helmets-t-shirt/-/A-81881499",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-valentine-s-day-yoda-one-for-me-black-t-shirt/-/A-85778798",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-death-star-out-of-service-t-shirt/-/A-85132567",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-christmas-lights-grogu-t-shirt/-/A-87416904",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-stellar-scene-t-shirt/-/A-1004411978",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-yoda-words-of-wisdom-t-shirt/-/A-79782923",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-x-wing-starfighter-6-years-t-shirt/-/A-92233488",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-halloween-stormtrooper-pumpkin-t-shirt/-/A-87697646",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-scene-t-shirt/-/A-82161086",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-find-droids-for-christmas-t-shirt/-/A-81951379",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-last-jedi-porg-cartoon-t-shirt/-/A-82364386",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-at-at-epic-fail-t-shirt/-/A-82359848",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-boba-fett-may-the-fourth-be-with-you-t-shirt/-/A-89039240",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-it-s-my-birthday-grogu-cupcake-t-shirt/-/A-89405010",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-empire-emblem-t-shirt/-/A-89633084",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-duo-schematics-t-shirt/-/A-82018511",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-r2-d2-retro-vibes-t-shirt/-/A-1004411984",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-grogu-t-shirt/-/A-82179481",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-character-frame-t-shirt/-/A-82156487",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-may-the-fourth-lightsabers-t-shirt/-/A-89039182",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-complicated-bounty-hunting-t-shirt/-/A-82158555",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-grogu-may-the-fourth-be-with-you-starry-night-t-shirt/-/A-82783603",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-halloween-vader-skeletons-t-shirt/-/A-84089119",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-r2-d2-7th-birthday-t-shirt/-/A-92232511",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-mythosaur-skull-logo-performance-tee/-/A-82160949",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-stormtrooper-helmet-frame-t-shirt/-/A-86338096",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-classic-poster-t-shirt/-/A-86334523",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-cartoon-at-at-journey-t-shirt/-/A-86332936",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-boba-fett-no-threats-only-promises-t-shirt/-/A-85271656",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-last-jedi-porg-eyes-t-shirt/-/A-82365497",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-pizza-empire-t-shirt/-/A-87416996",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-tie-fighter-pew-pew-pew-t-shirt/-/A-89633101",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-bad-batch-character-helmets-t-shirt/-/A-1001091633",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-yoda-best-mom-cartoon-t-shirt/-/A-91342941",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-galaxy-of-adventures-stormtrooper-shadow-t-shirt/-/A-86378631",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-r2-d2-coolest-kid-in-the-galaxy-t-shirt/-/A-92233254",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-return-of-the-jedi-ombre-ewok-scene-t-shirt/-/A-89632989",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-husky-star-wars-valentine-s-day-boba-fett-cupid/-/A-87573271",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-groovy-flight-t-shirt/-/A-85270527",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-christmas-the-child-ugly-force-mas-t-shirt/-/A-81966050",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-obi-wan-kenobi-jedi-kenobi-logo-t-shirt/-/A-86751102",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-x-wing-schematics-t-shirt/-/A-85270304",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-messy-boba-fett-painted-helmet-t-shirt/-/A-85155180",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-christmas-tis-the-season-brother-t-shirt/-/A-84867450",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-halloween-stormtrooper-t-shirt/-/A-87416934",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-classic-poster-logo-t-shirt/-/A-89633098",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-battle-t-shirt/-/A-81914485",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-darth-vader-7th-birthday-abstract-background-t-shirt/-/A-1001942132",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-retro-icons-t-shirt/-/A-89632918",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-christmas-darth-vader-santa-s-sleigh-t-shirt/-/A-81882695",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-visions-kanji-logo-t-shirt/-/A-84644117",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-gingerbread-cookies-mando-grogu-t-shirt/-/A-90164142",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-hairy-chewbacca-2nd-birthday-t-shirt/-/A-92232523",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-yoda-luck-of-the-jedi-t-shirt/-/A-90778414",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-armorer-time-for-a-fight-t-shirt/-/A-89034769",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-need-space-t-shirt/-/A-85390811",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-stormtrooper-faux-pocket-logo-t-shirt/-/A-89632808",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-cute-grogu-birthday-boy-t-shirt/-/A-89186896",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-empire-strikes-back-boba-fett-helmet-t-shirt/-/A-89633081",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-way-silhouette-t-shirt/-/A-85404718",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-empire-strikes-back-darth-vader-and-stormtroopers-join-the-empire-poster-t-shirt/-/A-89632757",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-darth-vader-the-force-is-strong-with-this-one-t-shirt/-/A-89632870",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-christmas-grogu-and-din-djarin-santa-hats-t-shirt/-/A-89660805",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-strong-force-t-shirt/-/A-85154733",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-boba-fett-lives-t-shirt/-/A-82178934",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-book-of-boba-fett-distressed-character-line-up-t-shirt/-/A-85751775",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-choking-hazard-t-shirt/-/A-86333164",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-r2-d2-4th-birthday-t-shirt/-/A-92232564",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-halloween-darth-vader-pumpkin-t-shirt/-/A-87697679",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-first-order-sith-trooper-performance-tee/-/A-89597388",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-egg-cellent-easter-t-shirt/-/A-88718363",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-obi-wan-kenobi-darth-vader-vs-obi-wan-kenobi-color-block-t-shirt/-/A-86751285",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-paradise-floral-stormtrooper-helmet-t-shirt/-/A-89632871",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-sparkles-t-shirt/-/A-89175717",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-birthday-boy-cartoon-darth-vader-t-shirt/-/A-92232395",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-easter-come-to-the-dyed-side-text-t-shirt/-/A-82574504",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-easter-egg-rebel-alliance-logo-t-shirt/-/A-86338978",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-din-djarin-schematics-t-shirt/-/A-82156728",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-r2-d2-beep-t-shirt/-/A-86333235",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-yoda-best-son-ever-t-shirt/-/A-89633055",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-one-and-only-t-shirt/-/A-85827892",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-revenge-of-the-sith-darth-vader-tile-mosaic-t-shirt/-/A-89633033",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-1-dad-t-shirt/-/A-86502558",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-may-the-fourth-space-t-shirt/-/A-83026066",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-obi-wan-kenobi-silhouette-kenobi-two-suns-t-shirt/-/A-86827174",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-valentine-s-day-han-and-leia-holding-hands-t-shirt/-/A-85778936",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-obi-wan-kenobi-darth-vader-menacing-glow-t-shirt/-/A-86826656",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-cartoon-yoda-lucky-one-t-shirt/-/A-85894699",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-obi-wan-kenobi-jedi-and-empire-logo-t-shirt/-/A-86750815",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-lightsaber-outline-t-shirt/-/A-85827875",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-last-jedi-st-patrick-s-day-porg-shamrock-t-shirt/-/A-79782888",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-luke-and-leia-grayscale-t-shirt/-/A-85827027",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-stormtroopers-are-ready-to-hunt-eggs-on-easter-t-shirt/-/A-86089005",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-may-the-force-opening-crawl-t-shirt/-/A-86335434",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-yoda-best-cousin-t-shirt/-/A-86336641",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-valentine-s-day-you-r2-awesome-t-shirt/-/A-85778683",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-birthday-grogu-t-shirt/-/A-87416796",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-yoda-lucky-one-t-shirt/-/A-85893848",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-christmas-sith-day-t-shirt/-/A-81951571",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-happy-easter-egg-porg-style-t-shirt/-/A-86089200",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-christmas-grogu-and-din-djarin-joy-is-the-way-t-shirt/-/A-89660552",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-loves-easter-and-baby-chickens-t-shirt/-/A-85904630",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-rise-of-skywalker-sith-villain-trooper-t-shirt/-/A-82350608",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-halloween-grogu-big-treats-t-shirt/-/A-84173007",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-christmas-the-child-ugly-space-pod-t-shirt/-/A-81966027",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-mc-darth-vader-t-shirt/-/A-89633144",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-husky-star-wars-stormtrooper-group/-/A-87573186",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-husky-star-wars-bb-8-porg-party/-/A-87573087",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-x-wing-starfighter-flyby-t-shirt/-/A-1004413920",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-jedi-knight-academy-t-shirt/-/A-86335306",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-strong-attachment-t-shirt/-/A-82157318",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-return-of-the-jedi-forest-of-endor-summer-camp-83-t-shirt/-/A-89633012",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-classic-gold-logo-t-shirt/-/A-89632908",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-darth-vader-and-stormtrooper-pose-t-shirt/-/A-1004407295",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-welcome-to-tatooine-t-shirt/-/A-1004414056",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-last-jedi-r2-d2-schematics-t-shirt/-/A-86335867",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-halloween-grogu-mummy-t-shirt/-/A-89579171",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-may-the-fourth-be-with-you-din-djarin-t-shirt/-/A-89039131",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-spooky-death-star-t-shirt/-/A-87416948",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-protect-the-endor-forest-t-shirt/-/A-1004407521",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-young-jedi-adventures-master-yoda-portrait-t-shirt/-/A-89580669",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-sith-lord-darth-vader-face-t-shirt/-/A-1004407384",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-ewok-summer-camp-t-shirt/-/A-82361890",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-halftone-characters-t-shirt/-/A-1001938933",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-force-awakens-halloween-pumpkin-bb-8-t-shirt/-/A-87257084",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-boba-fett-birthday-kid-t-shirt/-/A-92232141",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-anakin-skywalker-collage-t-shirt/-/A-1004407165",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-obi-wan-kenobi-geometric-obi-wan-t-shirt/-/A-86751352",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-follow-the-candy-t-shirt/-/A-87416861",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-st-patrick-s-day-grogu-may-luck-be-with-you-distressed-t-shirt/-/A-85893923",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-christmas-grogu-galaxy-s-greetings-cute-t-shirt/-/A-89660770",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-9th-birthday-grogu-bassinet-t-shirt/-/A-89404894",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-christmas-logo-string-lights-t-shirt/-/A-81951313",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-halloween-vader-helmet-spray-paint-t-shirt/-/A-82355586",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-galactic-empire-kit-t-shirt/-/A-83978607",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-spooky-trooper-performance-tee/-/A-87416957",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-i-m-all-ears-t-shirt/-/A-80219634",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-visions-darth-vader-portrait-performance-tee/-/A-84644217",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-wicket-ewok-cartoon-t-shirt/-/A-86339270",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-last-jedi-christmas-cold-bb-8-t-shirt/-/A-81883538",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-young-jedi-adventures-kai-brightstar-portrait-t-shirt/-/A-89580833",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-grogu-trick-or-treat-t-shirt/-/A-87416751",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-book-of-boba-fett-rancor-attack-t-shirt/-/A-86283232",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-visions-death-dishonor-t-shirt/-/A-84644060",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-valentine-s-day-the-child-heart-portrait-t-shirt/-/A-82342637",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-stormtrooper-helmet-flamingo-print-t-shirt/-/A-89632855",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-millennium-falcon-outline-t-shirt/-/A-85827028",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-boba-fett-birthday-boy-t-shirt/-/A-92232161",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-clone-wars-yoda-size-matters-not-t-shirt/-/A-86926769",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-tales-of-the-jedi-official-logo-t-shirt/-/A-88404374",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-the-mandalorian-may-the-force-and-fireworks-t-shirt/-/A-1004401376",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-tales-of-the-jedi-ahsoka-tano-use-the-force-t-shirt/-/A-88404506",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-stop-wearing-darth-vader-t-shirt/-/A-86333152",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-frame-t-shirt/-/A-79782897",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-bad-batch-square-logo-t-shirt/-/A-82750822",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-porg-and-a-shamrock-t-shirt/-/A-85895051",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-return-of-the-jedi-tiny-ewok-t-shirt/-/A-89632821",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-happy-easter-stormtroopers-t-shirt/-/A-85904680",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-grogu-st-patrick-s-day-galaxy-stars-pinch-proof-t-shirt/-/A-85894480",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-fourth-of-july-grogu-t-shirt/-/A-83691675",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-st-patrick-s-day-grogu-pot-of-gold-t-shirt/-/A-88746365",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-yoda-pinch-me-not-t-shirt/-/A-79712171",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-millennium-falcon-schematics-t-shirt/-/A-82369915",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-grogu-easter-egging-around-t-shirt/-/A-82611938",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-st-patrick-s-day-grogu-luck-is-strong-with-this-one-distressed-t-shirt/-/A-85894678",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-grogu-st-patrick-s-day-the-luck-is-strong-with-this-one-t-shirt/-/A-82612109",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-book-of-boba-fett-cad-bane-mercenary-and-bounty-hunter-t-shirt/-/A-86220990",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-do-not-pinch-yoda-t-shirt/-/A-85894435",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-birthday-boy-r2-d2-party-t-shirt/-/A-92232216",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-luckiest-in-the-galaxy-t-shirt/-/A-82157488",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-tropical-stormtrooper-t-shirt/-/A-82372165",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boys-star-wars-join-darth-vader-and-stormtroopers-t-shirt/-/A-1004407323",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-yoda-lucky-you-are-t-shirt/-/A-79782891",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-grogu-st-patrick-s-day-may-the-luck-be-with-you-t-shirt/-/A-82612045",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-valentine-s-day-the-child-little-valentine-panels-t-shirt/-/A-82342623",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-st-patrick-s-day-grogu-may-the-luck-be-with-you-distressed-t-shirt/-/A-85894974",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-grogu-st-patrick-s-day-rainbow-lucky-and-cute-t-shirt/-/A-85893971",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-don-t-pinch-a-wookiee-t-shirt/-/A-79782884",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-grogu-and-din-djarin-fall-leaves-apple-of-my-eye-t-shirt/-/A-89578989",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-halloween-candy-bounty-hunter-din-djarin-and-grogu-t-shirt/-/A-87697977",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-bad-batch-crosshair-logo-t-shirt/-/A-82750273",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-st-patrick-s-day-grogu-the-luck-is-strong-with-this-one-t-shirt/-/A-85887581",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-happy-holidays-chibi-characters-t-shirt/-/A-90163891",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-trading-card-t-shirt/-/A-82160227",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-death-star-streaks-t-shirt/-/A-85132497",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-darth-vader-woke-up-like-this-t-shirt/-/A-85827886",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-a-new-hope-c-3po-chewbacca-and-r2-d2-i-got-your-back-t-shirt/-/A-89632934",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-becoming-darth-vader-t-shirt/-/A-85088336",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-simple-logo-t-shirt/-/A-86388382",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-father-s-day-grogu-he-goes-t-shirt/-/A-83609299",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-christmas-dark-side-snowflakes-t-shirt/-/A-84868230",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-considered-armed-and-dangerous-t-shirt/-/A-82159865",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-christmas-empire-lack-of-cheer-t-shirt/-/A-81882026",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-fourth-of-july-cute-grogu-t-shirt/-/A-83691501",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-empire-cartoon-characters-t-shirt/-/A-86337634",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-galaxy-of-stars-poster-t-shirt/-/A-85826954",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-rebel-symbol-clover-fade-t-shirt/-/A-82188314",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-r2-d2-and-bb-8-you-re-the-droid-i-m-looking-for-t-shirt/-/A-85779284",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-force-is-strong-t-shirt/-/A-82154891",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-vintage-rebel-frame-t-shirt/-/A-85827589",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-starry-night-t-shirt/-/A-82174182",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-father-s-day-darth-vader-1-dad-t-shirt/-/A-82783741",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-yoda-force-with-this-one-t-shirt/-/A-82353851",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-valentine-s-day-the-child-floating-candy-hearts-t-shirt/-/A-82342594",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-last-jedi-porgs-frame-t-shirt/-/A-82355675",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-christmas-at-at-reindeer-t-shirt/-/A-81951150",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-hoppy-easter-from-the-jawas-t-shirt/-/A-86089084",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-boba-fett-retro-circle-t-shirt/-/A-82373094",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-bad-batch-badge-t-shirt/-/A-82750267",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-st-patrick-s-day-vader-lack-of-clover-t-shirt/-/A-82188251",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-pixel-darth-vader-and-stormtroopers-t-shirt/-/A-85827847",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-husky-star-wars-park-ranger-endor-ewok-badge/-/A-87573083",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-bounty-heart-pocket-t-shirt/-/A-82158348",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-cutest-in-the-galaxy-pocket-t-shirt/-/A-82155380",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-the-mandalorian-the-child-wanted-unknown-species-t-shirt/-/A-82163265",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      },
      {
        "url": "https://www.target.com/p/boy-s-star-wars-galaxy-of-adventures-yoda-feel-the-force-animated-t-shirt/-/A-89845831",
        "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Star Wars, Tops",
        "filters": {
          "brand": "Star Wars"
        }
      }
    ]

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
