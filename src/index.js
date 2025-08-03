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
      url: "https://www.target.com/p/boys-disney-pluto-snacks/-/A-1000672919",
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
      url: "https://www.target.com/p/boys-disney-just-got-a-lot-cooler-pre-k/-/A-1000590390",
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
      url: "https://www.target.com/p/boys-disney-preschool-squad/-/A-1000590372",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-goofy-graphic-t-shirt-yellow/-/A-87253773",
      tags: "Boys’ Clothing, Disney, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-princesses-once-upon-a-time-profile-t-shirt/-/A-83989195",
      tags: "Boys’ Clothing, Disney Princess, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney Princess",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-princesses-periodic-table-t-shirt/-/A-83988997",
      tags: "Boys’ Clothing, Disney Princess, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney Princess",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-princesses-magic-keywords-t-shirt/-/A-83989228",
      tags: "Boys’ Clothing, Disney Princess, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney Princess",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-princesses-christmas-greetings-from-brother-t-shirt/-/A-84868501",
      tags: "Boys’ Clothing, Disney Princess, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney Princess",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-princesses-christmas-greetings-from-son-t-shirt/-/A-84868962",
      tags: "Boys’ Clothing, Disney Princess, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney Princess",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-disney-princesses-christmas-son-believes-in-magic-t-shirt/-/A-84869004",
      tags: "Boys’ Clothing, Disney Princess, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Disney Princess",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-youth-3-pack-t-shirts/-/A-1001056519",
      tags: "Boys’ Clothing, Dog Man, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dog Man",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-petey-the-cat-lil-petey-youth-heather-gray-short-sleeve-tee/-/A-1002652814",
      tags: "Boys’ Clothing, Dog Man, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dog Man",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-characters-inside-logo-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1003192887",
      tags: "Boys’ Clothing, Dog Man, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dog Man",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-running-youth-navy-crew-neck-short-sleeve-t-shirt/-/A-1003192907",
      tags: "Boys’ Clothing, Dog Man, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dog Man",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-the-bark-night-crew-neck-short-sleeve-youth-royal-blue-t-shirt/-/A-93317157",
      tags: "Boys’ Clothing, Dog Man, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dog Man",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-vive-la-revolution-cats-on-strike-youth-white-short-sleeve-tee/-/A-1003192847",
      tags: "Boys’ Clothing, Dog Man, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dog Man",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-stars-2016-youth-navy-crew-neck-short-sleeve-t-shirt/-/A-1003316268",
      tags: "Boys’ Clothing, Dog Man, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dog Man",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-me-snug-and-petey-the-cat-youth-heather-gray-short-sleeve-tee/-/A-1002652808",
      tags: "Boys’ Clothing, Dog Man, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dog Man",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-hand-drawn-bark-knight-logo-youth-white-crew-neck-short-sleeve-t-shirt/-/A-1003193197",
      tags: "Boys’ Clothing, Dog Man, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dog Man",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-surrounded-by-stars-youth-navy-crew-neck-short-sleeve-t-shirt/-/A-1003193090",
      tags: "Boys’ Clothing, Dog Man, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dog Man",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-superhero-costume-boy-s-blue-crew-neck-short-sleeve-t-shirt-with-detachable-cape/-/A-1001387136",
      tags: "Boys’ Clothing, Dog Man, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dog Man",
      },
    },
    {
      url: "https://www.target.com/p/dog-man-hand-drawn-dog-with-colorful-logo-the-bark-knight-on-athletic-heather-youth-t-shirt/-/A-1005131106",
      tags: "Boys’ Clothing, Dog Man, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dog Man",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dora-the-explorer-an-a-dora-ble-halloween-t-shirt/-/A-89581183",
      tags: "Boys’ Clothing, Dora the Explorer, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dora the Explorer",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dora-the-explorer-halloween-friends-boo-t-shirt/-/A-89581129",
      tags: "Boys’ Clothing, Dora the Explorer, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dora the Explorer",
      },
    },
    {
      url: "https://www.target.com/p/boys-dora-the-explorer-i-love-my-boots-short-sleeve-graphic-t-shirt/-/A-1003937700",
      tags: "Boys’ Clothing, Dora the Explorer, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dora the Explorer",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-abc-book-characters-long-sleeve-graphic-t-shirt/-/A-1003966066",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-kindergarten-out-of-this-world-long-sleeve-graphic-t-shirt/-/A-1003965716",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-first-grade-out-of-this-world-long-sleeve-graphic-t-shirt/-/A-1003965902",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-i-know-a-thing-or-two-school-long-sleeve-graphic-t-shirt/-/A-1003966168",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-1st-grade-squad-thing-1-and-thing-2-long-sleeve-graphic-t-shirt/-/A-1003965214",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-oh-places-you-ll-go-when-you-read-long-sleeve-graphic-t-shirt/-/A-1003965816",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-third-grade-out-of-this-world-long-sleeve-graphic-t-shirt/-/A-1003963638",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-kindergarten-squad-thing-1-and-thing-2-long-sleeve-graphic-t-shirt/-/A-1003965427",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-2nd-grade-squad-thing-1-and-thing-2-long-sleeve-graphic-t-shirt/-/A-1003966504",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-3rd-grade-squad-thing-1-and-thing-2-long-sleeve-graphic-t-shirt/-/A-1003966245",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-k-is-for-kindergarten-long-sleeve-graphic-t-shirt/-/A-1003965832",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-k-is-for-kindergarten-kangaroo-short-sleeve-graphic-t-shirt/-/A-92864504",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-thing-1-thing-2-1st-grade-squad-short-sleeve-graphic-t-shirt/-/A-92722087",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-kindergarten-out-of-this-world-short-sleeve-graphic-t-shirt/-/A-1003965590",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-first-grade-out-of-this-world-short-sleeve-graphic-t-shirt/-/A-1003965941",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-i-know-a-thing-or-two-school-short-sleeve-graphic-t-shirt/-/A-1003966101",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-thing-1-thing-2-kindergarten-squad-short-sleeve-graphic-t-shirt/-/A-93022446",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-oh-places-you-ll-go-when-you-read-short-sleeve-graphic-t-shirt/-/A-1003965649",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-third-grade-out-of-this-world-short-sleeve-graphic-t-shirt/-/A-1003963549",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/the-cat-in-the-hat-loves-book-and-reading-youth-white-short-sleeve-tee/-/A-1004578991",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-2nd-grade-squad-thing-1-and-thing-2-short-sleeve-graphic-t-shirt/-/A-1003966427",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-3rd-grade-squad-thing-1-and-thing-2-short-sleeve-graphic-t-shirt/-/A-1003966281",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-abc-book-characters-short-sleeve-graphic-t-shirt/-/A-1003966188",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-horton-painting-t-shirt/-/A-90199845",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-horton-painting-t-shirt/-/A-90199845",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-the-cat-in-the-hat-it-s-better-to-know-quote-t-shirt/-/A-90199193",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-lucky-cat-t-shirt/-/A-1002300922",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-the-cat-in-the-hat-falling-things-t-shirt/-/A-1001153413",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-thing-one-and-thing-two-birthday-t-shirt/-/A-92649593",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-oh-the-places-you-ll-go-quotes-t-shirt-navy-blue-heather-small/-/A-90199591",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-it-s-a-green-thing-t-shirt/-/A-1002300656",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-thing-1-and-thing-2-youth-red-crew-neck-short-sleeve-t-shirt/-/A-1001907398",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-lucky-thing-t-shirt/-/A-1002300800",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-the-cat-in-the-hat-and-friends-4th-birthday-t-shirt/-/A-1004564737",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-oh-what-a-journey-you-re-on-t-shirt-charcoal-heather-x-large/-/A-90199217",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dr-seuss-best-hopper-ever-t-shirt-charcoal-heather-x-large/-/A-90199936",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-first-grade-out-of-this-world-raglan-graphic-t-shirt/-/A-1003965921",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-third-grade-out-of-this-world-raglan-graphic-t-shirt/-/A-1003963666",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-kindergarten-out-of-this-world-raglan-graphic-t-shirt/-/A-1003965690",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-kindergarten-squad-thing-1-and-thing-2-raglan-graphic-t-shirt/-/A-1003964846",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-oh-places-youll-go-when-you-read-raglan-graphic-t-shirt/-/A-1003965877",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-i-know-a-thing-or-two-school-raglan-graphic-t-shirt/-/A-1003966175",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-1st-grade-squad-thing-1-and-thing-2-raglan-graphic-t-shirt/-/A-1003965202",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-2nd-grade-squad-thing-1-and-thing-2-raglan-graphic-t-shirt/-/A-1003966528",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-3rd-grade-squad-thing-1-and-thing-2-raglan-graphic-t-shirt/-/A-1003966422",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-k-is-for-kindergarten-raglan-graphic-t-shirt/-/A-1003965829",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-batty-for-halloween-thing-1-and-thing-2/-/A-1000760303",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-halloween-is-my-thing/-/A-1000760140",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/boys-dr-seuss-batty-for-halloween-thing-1-and-thing-2/-/A-1000760303",
      tags: "Boys’ Clothing, Dr. Seuss, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dr. Seuss",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-characters-youth-black-graphic-tee/-/A-88886577",
      tags: "Boys’ Clothing, Dragon Ball Super, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Super",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-dragon-ball-z-short-sleeve-graphic-t-shirt-gray/-/A-89206980",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-characters-crew-neck-short-sleeve-4pk-boy-s-tees/-/A-92130042",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-boys-3-pack-set-includes-two-tees-and-mesh-shorts/-/A-90125990",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-3-pack-boy-s-orange-short-sleeve-tee-gray-muscle-tank-blue-athletic-shorts-set/-/A-92386179",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-blue-and-black-2-pack-boy-s-crew-neck-short-sleeve-performance-tee/-/A-92407106",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-saiyan-characters-boy-s-2-pack-crew-neck-short-sleeve-t-shirt-set/-/A-1001178350",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-character-art-3-pack-crew-neck-short-sleeve-youth-boy-s-t-shirt-set/-/A-93163044",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-goku-and-kanji-title-logo-youth-gloves-set-of-3/-/A-90207412",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-goku-and-title-logo-oversized-graphic-youth-sweatshirt-and-joggers-2-piece-set/-/A-89766030",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-main-characters-screenshot-boy-s-2-pack-hoodie-joggers-set/-/A-1000960909",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-dragon-ball-z-3-pc-hoodie-jogger-t-shirt-combo/-/A-90021870",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/yellowstone-dutton-ranch-men-s-bifold-wallet/-/A-89981976",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/saiyans-dragon-ball-z-anime-characters-royal-blue-youth-boys-graphic-tee/-/A-84941286",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-anime-cartoon-characters-youth-boys-grey-graphic-tee-shirt/-/A-84940693",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-dragon-ball-z-anime-cartoon-blue-graphic-tee-shirt/-/A-84940632",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-broly-movie-goku-youth-royal-blue-graphic-tee/-/A-85354635",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-dragon-ball-z-saiyan-goku-youth-white-graphic-tee/-/A-87367740",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-dragon-ball-z-vegito-character-group-youth-royal-blue-graphic-tee/-/A-87367819",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-vegeta-goku-saiyan-graphic-boy-s-white-t-shirt/-/A-87450581",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragonball-z-vegete-with-kanji-youth-navy-blue-short-sleeve-crew-neck-tee/-/A-88813805",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-boxed-characters-boy-s-charcoal-heather-t-shirt/-/A-85450881",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-favorite-characters-youth-boy-charcoal-short-sleeve-tee/-/A-1002959121",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-goku-w-symbol-graphic-youth-boy-s-athletic-heather-t-shirt/-/A-87945324",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-get-on-my-level-graphic-youth-boy-s-black-t-shirt/-/A-85353156",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/goku-with-dragon-on-navy-blue-tee/-/A-85352450",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-goku-group-art-youth-black-t-shirt/-/A-86102998",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-dragon-ball-super-broly-short-sleeve-t-shirt/-/A-87237125",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-character-collage-boy-s-navy-t-shirt/-/A-85783094",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-frieza-saga-character-layout-boy-s-navy-blue-t-shirt/-/A-88346869",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragonball-z-father-and-son-attacking-grid-youth-navy-blue-short-sleeve-crew-neck-tee/-/A-88813766",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragonball-z-legend-in-the-making-goku-boys-black-short-sleeve-t-shirt/-/A-85450981",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-group-character-art-and-kanji-logo-boy-s-red-t-shirt/-/A-85451077",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-saiyan-group-youth-boy-s-royal-blue-t-shirt/-/A-87945213",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-unstoppable-goku-boy-s-black-t-shirt/-/A-85451164",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-fusion-ha-youth-boy-s-navy-crew-neck-t-shirt/-/A-85354942",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-legend-in-the-making-youth-crew-neck-short-sleeve-navy-blue-t-shirt/-/A-84013193",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-character-circles-crew-neck-short-sleeve-white-boy-s-t-shirt/-/A-92986093",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-goku-multi-colored-text-boy-s-white-t-shirt/-/A-85351855",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-goku-giant-ape-transformation-crew-neck-short-sleeve-boy-s-black-t-shirt/-/A-93652243",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-son-goten-with-ombre-kanji-youth-boy-s-white-t-shirt/-/A-87143668",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-super-saiyan-goten-repeat-text-boy-s-black-crew-neck-short-sleeve-t-shirt/-/A-93890242",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-goku-character-circle-crew-neck-short-sleeve-athletic-heather-boy-s-t-shirt/-/A-91498675",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-goku-saiyan-transformation-youth-navy-t-shirt/-/A-86103001",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-goten-trunks-fusion-move-boy-s-black-crew-neck-short-sleeve-t-shirt/-/A-93890269",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-super-saiyan-character-group-boy-s-black-t-shirt/-/A-87614779",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-saiyans-and-androids-boy-s-white-t-shirt/-/A-88346569",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-super-saiyan-characters-layout-w-logo-youth-boy-s-white-t-shirt/-/A-86801477",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-goku-with-kanji-youth-boy-s-red-t-shirt/-/A-87143618",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-frieza-group-with-colorful-background-boy-s-heather-gray-t-shirt/-/A-87945313",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-majin-buu-vs-gohan-goku-trunks-and-vegeta-youth-black-t-shirt/-/A-86103194",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-boys-shirt-boys-black-z-warriors-dragon-ball-z-clothing/-/A-84209828",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-group-character-art-boy-s-red-t-shirt/-/A-85782660",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-character-circles-boy-s-black-t-shirt/-/A-85451073",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-like-son-boy-s-black-t-shirt/-/A-85355173",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-goku-piccolo-shenron-crew-neck-short-sleeve-boy-s-athletic-heather-t-shirt/-/A-93652264",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-dragon-ball-z-goku-rotated-logo-boy-s-athletic-heather-t-shirt/-/A-87217720",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-goku-just-saiyan-boy-s-black-t-shirt/-/A-85451487",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-super-saiyan-character-group-boy-s-black-crew-neck-short-sleeve-t-shirt/-/A-93890254",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragonball-z-heroes-vs-villains-boys-black-short-sleeve-t-shirt/-/A-85450986",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-super-goku-super-saiyan-charge-youth-black-t-shirt/-/A-86102927",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/dragon-ball-z-super-saiyan-goku-crew-neck-long-sleeve-youth-black-sweatshirt-medium/-/A-92987963",
      tags: "Boys’ Clothing, Dragon Ball Z, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dragon Ball Z",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-black-and-white-squares-t-shirt/-/A-85637353",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-pink-elephants-on-parade-t-shirt/-/A-85824363",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-boxed-up-side-portrait-t-shirt/-/A-85637521",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-the-flying-elephant-circus-t-shirt/-/A-85637386",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-silly-faces-t-shirt/-/A-89482207",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-in-the-pocket-t-shirt/-/A-85637336",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-stay-fly-sketch-t-shirt/-/A-85823718",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-stay-fly-rainbow-t-shirt/-/A-85823311",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-timothy-q-mouse-circus-poster-t-shirt/-/A-85823609",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-stay-fly-outline-t-shirt/-/A-89482164",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-blue-logo-and-big-ears-t-shirt/-/A-85637412",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-casey-junior-s-back-florida-postcard-t-shirt/-/A-85637638",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-of-the-circus-comic-book-panels-t-shirt/-/A-85637341",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-circus-act-t-shirt/-/A-90596288",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-timothy-q-mouse-t-shirt/-/A-85823580",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-classic-storybook-cover-t-shirt/-/A-90596853",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-don-t-just-fly-soar-t-shirt/-/A-90596181",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-don-t-just-fly-soar-t-shirt/-/A-85637392",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dumbo-movie-logo-and-clown-dumbo-t-shirt/-/A-85637408",
      tags: "Boys’ Clothing, Dumbo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dumbo",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-nautiloids-design-youth-black-long-sleeve-crew-neck-tee/-/A-89721502",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-baldur-s-gate-logo-youth-black-long-sleeve-crew-neck-tee/-/A-89721525",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-mimic-crew-neck-long-sleeve-youth-tee/-/A-88814043",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-youth-boys-4-pack-tees/-/A-90019134",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-beholder-logo-boy-s-athletic-heather-long-sleeve-shirt/-/A-86316360",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-red-dragon-flying-youth-black-graphic-tee/-/A-86459994",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-and-dragons-ambersand-youth-boys-charcoal-heather-graphic-tee/-/A-84941197",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-role-playing-game-youth-boys-blue-graphic-tee-shirt/-/A-84941556",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-dungeons-and-dragons-teal-logo-navy-blue-graphic-tee-shirt/-/A-84941070",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-dungeons-dragons-expert-rule-book-cover-youth-navy-blue-short-sleeve-crew-neck-tee/-/A-88043010",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-dungeons-dragons-distressed-eyes-of-the-beholder-youth-royal-blue-short-sleeve-crew-neck-tee/-/A-88042916",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dungeons-dragons-st-patrick-s-day-naturally-lucky-dice-t-shirt/-/A-88745799",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-owlbear-crew-neck-short-sleeve-boys-black-t-shirt/-/A-88312955",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-gale-and-baldur-s-gate-logo-youth-white-tee-with-short-sleeves-and-crew-neck/-/A-89764313",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-red-dragon-crew-neck-short-sleeve-navy-boy-s-t-shirt/-/A-88313064",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-metallic-print-youth-boys-black-shirt/-/A-84707144",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dungeons-dragons-st-patrick-s-day-unlucky-dice-t-shirt/-/A-88745922",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dungeons-dragons-st-patrick-s-day-four-leaf-clover-logo-t-shirt/-/A-88745888",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-winged-helmet-logo-youth-black-t-shirt/-/A-86103515",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-d20-dice-boy-s-black-t-shirt/-/A-85824785",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-critical-threat-patch-boy-s-red-t-shirt/-/A-85824779",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dungeons-dragons-classic-logo-t-shirt/-/A-1001939492",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dungeons-dragons-honor-among-thieves-mosaic-logo-t-shirt/-/A-1001001320",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-i-cast-magic-missile-boy-s-black-t-shirt/-/A-85824797",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-iae-zel-and-baldur-s-gate-logo-youth-black-tee-with-short-sleeves-and-crew-neck/-/A-89764239",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-go-forth-to-adventure-boy-s-black-t-shirt/-/A-86394129",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-warduke-evil-fighter-patch-boy-s-navy-blue-t-shirt/-/A-85824771",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/dungeons-dragons-red-logo-boy-s-black-t-shirt/-/A-85824770",
      tags: "Boys’ Clothing, Dungeons & Dragons, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Dungeons & Dragons",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-e-t-the-extra-terrestrial-earth-phone-home-t-shirt/-/A-88716398",
      tags: "Boys’ Clothing, E.T. the Extra-Terrestrial, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "E.T. the Extra-Terrestrial",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elemental-group-portrait-t-shirt/-/A-89406583",
      tags: "Boys’ Clothing, Elemental, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elemental",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elemental-ember-and-wade-naturally-awesome-t-shirt/-/A-89406328",
      tags: "Boys’ Clothing, Elemental, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elemental",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elemental-ember-find-your-fire-poster-t-shirt/-/A-89406633",
      tags: "Boys’ Clothing, Elemental, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elemental",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elemental-ember-i-am-calm-t-shirt/-/A-89406577",
      tags: "Boys’ Clothing, Elemental, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elemental",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elemental-wade-feel-the-flow-poster-t-shirt/-/A-89406373",
      tags: "Boys’ Clothing, Elemental, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elemental",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elemental-four-element-friends-t-shirt/-/A-89406534",
      tags: "Boys’ Clothing, Elemental, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elemental",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elemental-distressed-characters-it-s-elemental-t-shirt/-/A-89406487",
      tags: "Boys’ Clothing, Elemental, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elemental",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elemental-firetown-poster-t-shirt/-/A-89406522",
      tags: "Boys’ Clothing, Elemental, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elemental",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elemental-wade-thumbs-up-t-shirt/-/A-89406034",
      tags: "Boys’ Clothing, Elemental, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elemental",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elemental-lutz-poster-t-shirt/-/A-89406434",
      tags: "Boys’ Clothing, Elemental, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elemental",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elemental-cyclone-stadium-poster-t-shirt/-/A-89406645",
      tags: "Boys’ Clothing, Elemental, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elemental",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elemental-periodic-park-poster-t-shirt/-/A-89406409",
      tags: "Boys’ Clothing, Elemental, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elemental",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elemental-air-earth-water-fire-t-shirt/-/A-89406666",
      tags: "Boys’ Clothing, Elemental, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elemental",
      },
    },
    {
      url: "https://www.target.com/p/elf-doodle-on-buddy-with-title-logo-youth-heather-gray-crew-neck-sweatshirt/-/A-87944703",
      tags: "Boys’ Clothing, Elf, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elf",
      },
    },
    {
      url: "https://www.target.com/p/elf-treat-every-day-like-christmas-chibi-buddy-with-snowflakes-youth-black-crew-neck-sweatshirt/-/A-87944750",
      tags: "Boys’ Clothing, Elf, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elf",
      },
    },
    {
      url: "https://www.target.com/p/elf-sounds-like-somebody-needs-to-sing-a-christmas-carol-youth-black-crew-neck-sweatshirt/-/A-87944743",
      tags: "Boys’ Clothing, Elf, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elf",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-elf-ugly-christmas-sweater-graphic-tee/-/A-84706636",
      tags: "Boys’ Clothing, Elf, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elf",
      },
    },
    {
      url: "https://www.target.com/p/elf-movie-i-m-actually-human-but-i-was-raised-by-elves-youth-red-graphic-tee/-/A-87945344",
      tags: "Boys’ Clothing, Elf, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elf",
      },
    },
    {
      url: "https://www.target.com/p/elf-movie-raised-by-elves-youth-royal-blue-graphic-tee/-/A-87945226",
      tags: "Boys’ Clothing, Elf, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elf",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elf-santa-i-know-him-quote-t-shirt/-/A-85445873",
      tags: "Boys’ Clothing, Elf, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elf",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elf-buddy-raised-by-elves-quote-t-shirt/-/A-1001005067",
      tags: "Boys’ Clothing, Elf, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elf",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elf-buddy-son-of-a-nutcracker-t-shirt/-/A-85446016",
      tags: "Boys’ Clothing, Elf, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elf",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-elf-four-main-food-groups-t-shirt/-/A-1001005113",
      tags: "Boys’ Clothing, Elf, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elf",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-elf-on-the-shelf-scout-elves-fun-t-shirt/-/A-90164882",
      tags: "Boys’ Clothing, Elf on the Shelf, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elf on the Shelf",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-elf-on-the-shelf-plaid-love-t-shirt/-/A-90165782",
      tags: "Boys’ Clothing, Elf on the Shelf, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elf on the Shelf",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-the-elf-on-the-shelf-christmas-cheer-t-shirt/-/A-90165187",
      tags: "Boys’ Clothing, Elf on the Shelf, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Elf on the Shelf",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-mirabel-the-magic-of-family-circle-performance-tee/-/A-87287378",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-cultivate-kindness-performance-tee/-/A-87286859",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-the-magic-of-family-performance-tee/-/A-87288147",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-we-don-t-talk-about-bruno-green-text-t-shirt/-/A-85993088",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-antonio-wild-t-shirt/-/A-87572695",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-mirabel-familia-is-everything-performance-tee/-/A-87287628",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-we-don-t-talk-about-bruno-tropical-leaves-t-shirt/-/A-87288020",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-mirabel-all-about-the-butterflies-performance-tee/-/A-87287012",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-mirabel-uniquely-me-with-butterflies-performance-tee/-/A-87287897",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-mirabel-in-nature-floral-and-butterflies-performance-tee/-/A-87287946",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-family-portrait-t-shirt/-/A-85911639",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-colombia-mi-encanto-candle-t-shirt/-/A-87286880",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-the-family-with-magical-gifts-t-shirt/-/A-85904268",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-family-is-everything-sisters-t-shirt/-/A-85904084",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-luisa-is-strong-and-smiling-performance-tee/-/A-87286460",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-no-se-habla-de-bruno-green-text-t-shirt/-/A-87288024",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-dolores-i-heard-that-t-shirt/-/A-85911513",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-luisa-floral-by-sebas-pakui-t-shirt/-/A-84684071",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-antonio-best-cousin-circle-t-shirt/-/A-87286415",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-birthday-boy-antonio-t-shirt/-/A-87572710",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-camilo-best-cousin-circle-t-shirt/-/A-87286542",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-hidden-casita-by-sebas-pakui-t-shirt/-/A-84683865",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-the-magic-of-family-t-shirt/-/A-85907307",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-pepa-clear-skies-t-shirt/-/A-85911237",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-pepa-clear-skies-t-shirt/-/A-85911237",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-luisa-surface-pressure-strong-t-shirt/-/A-87287938",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-luisa-i-got-it-t-shirt/-/A-85911756",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-family-box-up-performance-tee/-/A-87288184",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-isabela-portrait-magical-floral-powers-performance-tee/-/A-87287537",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-the-family-with-magical-gifts-performance-tee/-/A-87287770",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-postcard-from-a-magical-casa-t-shirt/-/A-85907325",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-dolores-que-t-shirt/-/A-85911390",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-we-don-t-talk-about-bruno-quote-t-shirt/-/A-85911366",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-family-box-up-t-shirt/-/A-85907308",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-mirable-isabela-luisa-magical-sisters-t-shirt/-/A-85907339",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-magical-door-by-sebas-pakui-t-shirt/-/A-84684308",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-las-emociones-de-mirabel-t-shirt/-/A-85904147",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-familia-unida-by-sebas-pakui-t-shirt/-/A-84684091",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-mirabel-the-magic-of-family-t-shirt/-/A-85907302",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-luisa-i-got-this-motto-with-butterfly-t-shirt/-/A-87286780",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-luisa-en-lo-profundo-strong-t-shirt/-/A-87287750",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-antonio-icons-by-sebas-pakui-t-shirt/-/A-84684342",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-encanto-mirabel-waiting-on-a-miracle-t-shirt/-/A-87287147",
      tags: "Boys’ Clothing, Encanto, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Encanto",
      },
    },
    {
      url: "https://www.target.com/p/fantastic-beasts-stupefy-boy-s-red-t-shirt/-/A-85353245",
      tags: "Boys’ Clothing, Fantastic Beasts, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fantastic Beasts",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-out-of-this-world-t-shirt/-/A-86332984",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-chrome-logo-t-shirt/-/A-86335995",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-guitar-chart-t-shirt/-/A-86336817",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-colorful-kaleidoscope-guitars-t-shirt/-/A-1000126831",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-classic-logo-t-shirt/-/A-86337355",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-guitar-spotlight-logo-t-shirt/-/A-86338797",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boys-fender-red-white-blue-logo-t-shirt/-/A-1004401342",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-celestial-amp-logo-t-shirt/-/A-86338991",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-sunburst-stratocaster-t-shirt/-/A-86338843",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-54-stratocaster-t-shirt/-/A-86333430",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-colorful-logo-t-shirt/-/A-86333115",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-neon-logo-t-shirt/-/A-86336071",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-telecaster-logo-t-shirt/-/A-86334799",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-stratocaster-boxes-t-shirt/-/A-86337312",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-triple-fret-logo-t-shirt/-/A-86336462",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-fall-leaves-logo-t-shirt/-/A-89581986",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fender-92880-corona-ca-logo-t-shirt/-/A-86338115",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boys-fender-headstock-and-snake-logo-t-shirt/-/A-1004395865",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boys-fender-fine-electric-poster-t-shirt/-/A-1004381850",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boys-fender-star-badge-t-shirt/-/A-1004395059",
      tags: "Boys’ Clothing, Fender, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-master-builder-poster-t-shirt/-/A-87406325",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-birthday-builder-boy-t-shirt/-/A-86926614",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-ninjago-character-portraits-t-shirt/-/A-86926432",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-ninjago-ninja-group-shot-t-shirt/-/A-86926461",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-ninjago-ninja-kai-birthday-7-t-shirt/-/A-86926751",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-never-stop-building-t-shirt/-/A-87406335",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-ninjago-master-wu-ninjas-t-shirt/-/A-87406311",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-ninjago-ninja-kai-birthday-5-t-shirt/-/A-86926662",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-space-exploration-schematic-t-shirt/-/A-91770301",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-little-robots-t-shirt/-/A-91770690",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-the-sky-is-the-limit-astronauts-t-shirt/-/A-87371934",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-hot-dog-days-of-summer-t-shirt/-/A-87372179",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-ninjago-ninja-kai-birthday-8-t-shirt/-/A-86926491",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-ninjago-ninja-kai-birthday-6-t-shirt/-/A-86926675",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-we-come-in-pieces-t-shirt/-/A-91770290",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-aim-for-stars-t-shirt/-/A-91770461",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-explore-the-galaxy-t-shirt/-/A-91770594",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-awesome-rock-star-birthday-7-t-shirt/-/A-86926672",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-space-out-t-shirt/-/A-91770371",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-ninjago-ninja-kai-birthday-4-t-shirt/-/A-86926717",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-st-patrick-s-day-lucky-leprechaun-t-shirt/-/A-88745683",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-build-unbuild-rebuild-t-shirt/-/A-87372042",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-brown-haired-boy-t-shirt/-/A-86926558",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-build-and-rebuild-t-shirt/-/A-87372046",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-it-s-a-system-t-shirt/-/A-91770496",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-birthday-kid-clown-t-shirt/-/A-86926336",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-what-planet-are-you-on-t-shirt/-/A-91770578",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-awesome-rock-star-birthday-6-t-shirt/-/A-86926524",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-alien-friends-t-shirt/-/A-91770266",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-my-happy-space-t-shirt/-/A-91770442",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-show-me-the-bunny-t-shirt/-/A-1001415158",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-awesome-rock-star-birthday-8-t-shirt/-/A-86926471",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-make-believe-train-t-shirt/-/A-87372123",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-90-years-of-play-t-shirt/-/A-87372009",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-awesome-rock-star-birthday-5-t-shirt/-/A-86926520",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-awesome-rock-star-birthday-4-t-shirt/-/A-86926601",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-wienerschnitzel-the-delicious-one-halloween-costumes-t-shirt-black-small/-/A-92651525",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boys-greg-lutzka-skater-rex-t-shirt/-/A-1003696093",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-barrel-of-monkeys-classic-logo-t-shirt/-/A-92915100",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boys-greg-lutzka-astronaut-fast-food-t-shirt/-/A-1003696000",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-barrel-of-monkeys-ugly-christmas-sweater-print-t-shirt/-/A-92915154",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-my-pet-hooligan-valentine-s-day-cupid-heart-hands-t-shirt/-/A-1001931065",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-lego-stargazing-is-my-favorite-t-shirt/-/A-91770409",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fraggle-rock-boober-doom-is-inevitable-t-shirt/-/A-1001941456",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fraggle-rock-party-down-t-shirt/-/A-1001941110",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boys-greg-lutzka-skater-pink-man-t-shirt/-/A-1003695793",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boys-greg-lutzka-skater-rat-graffiti-t-shirt/-/A-1003695954",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boys-greg-lutzka-skater-rat-grip-it-and-rip-it-t-shirt/-/A-1003696087",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-barrel-of-monkeys-classic-logo-t-shirt/-/A-92915100",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fraggle-rock-boober-doom-is-inevitable-t-shirt/-/A-1001941456",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fraggle-rock-party-down-t-shirt/-/A-1001941110",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boys-greg-lutzka-skater-rat-grip-it-and-rip-it-t-shirt/-/A-1003696087",
      tags: "Boys’ Clothing, Fifth Sun, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fifth Sun",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-finding-dory-just-keep-swimming-t-shirt/-/A-86089456",
      tags: "Boys’ Clothing, Finding Dory, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Finding Dory",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-finding-dory-always-a-way-t-shirt/-/A-87574553",
      tags: "Boys’ Clothing, Finding Dory, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Finding Dory",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-finding-nemo-crush-and-squirt-ride-the-current-t-shirt/-/A-1001412084",
      tags: "Boys’ Clothing, Finding Nemo, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Finding Nemo",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-plays-well-with-otters-short-sleeve-graphic-t-shirt/-/A-1001966725",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-good-doggie-boston-terrier-short-sleeve-graphic-t-shirt/-/A-1001966371",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-cool-kids-read-books-short-sleeve-graphic-t-shirt/-/A-1001967039",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-rawrsome-mom-short-sleeve-graphic-t-shirt/-/A-1001967272",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-toys-bringing-fun-since-1930-short-sleeve-graphic-t-shirt/-/A-92722837",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-what-s-poppin-toy-short-sleeve-graphic-t-shirt/-/A-92722775",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-feeling-fintastic-shark-short-sleeve-graphic-t-shirt/-/A-1001961585",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-fisher-price-60s-toys-grid-short-sleeve-graphic-t-shirt/-/A-1001965794",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-i-was-in-a-band-once-short-sleeve-graphic-t-shirt/-/A-1001965365",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-be-a-star-short-sleeve-graphic-t-shirt/-/A-1001962473",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-happy-to-sea-you-short-sleeve-graphic-t-shirt/-/A-1001967517",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-flying-high-plane-with-rainbow-short-sleeve-graphic-t-shirt/-/A-92722934",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-dinosaur-pattern-short-sleeve-graphic-t-shirt/-/A-1001965982",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-just-a-kid-who-loves-dinos-short-sleeve-graphic-t-shirt/-/A-1001965338",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-vintage-vibes-phone-short-sleeve-graphic-t-shirt/-/A-1001963191",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-dinosaur-expert-short-sleeve-graphic-t-shirt/-/A-1001965990",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-lets-read-together-short-sleeve-graphic-t-shirt/-/A-1001967057",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-future-paleontologist-short-sleeve-graphic-t-shirt/-/A-1001965827",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-i-woof-u-mom-short-sleeve-graphic-t-shirt/-/A-1001967842",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-good-doggie-dachshund-short-sleeve-graphic-t-shirt/-/A-1001966225",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-read-me-a-story-short-sleeve-graphic-t-shirt/-/A-1001966426",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-just-go-with-the-flow-short-sleeve-graphic-t-shirt/-/A-1001966878",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-my-dad-is-rawrsome-short-sleeve-graphic-t-shirt/-/A-92722788",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-not-old-classic-short-sleeve-graphic-t-shirt/-/A-1001964868",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-my-dad-is-rawrsome-short-sleeve-graphic-t-shirt/-/A-92722788",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-lets-read-together-short-sleeve-graphic-t-shirt/-/A-1001967057",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-tis-the-sea-short-sleeve-graphic-t-shirt/-/A-1001966604",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-i-woof-u-dad-short-sleeve-graphic-t-shirt/-/A-1001967865",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-not-old-classic-short-sleeve-graphic-t-shirt/-/A-1001964868",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-beary-cute-short-sleeve-graphic-t-shirt/-/A-1001953752",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-ring-ring-hello-short-sleeve-graphic-t-shirt/-/A-1001965839",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-non-stop-poppin-short-sleeve-graphic-t-shirt/-/A-1001964425",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-make-a-splash-short-sleeve-graphic-t-shirt/-/A-1001967083",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-read-me-a-story-short-sleeve-graphic-t-shirt/-/A-1001966426",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-social-butterfly-short-sleeve-graphic-t-shirt/-/A-1001967078",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-fish-short-sleeve-graphic-t-shirt/-/A-1001961696",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-need-a-tagalong-short-sleeve-graphic-t-shirt/-/A-1001966102",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-just-go-with-the-flow-short-sleeve-graphic-t-shirt/-/A-1001966878",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-i-woof-u-mom-short-sleeve-graphic-t-shirt/-/A-1001967842",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/boys-fisher-price-player-for-life-short-sleeve-graphic-t-shirt/-/A-1001963204",
      tags: "Boys’ Clothing, Fisher-Price, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fisher-Price",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-value-4-pack-of-youth-boy-s-short-sleeve-tees/-/A-1002538590",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-polygon-art-crew-neck-long-sleeve-black-youth-tee/-/A-85783138",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-boys-3-pack-set-includes-two-tees-and-mesh-shorts/-/A-90126012",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-i-survived-boy-s-3-pack-crew-neck-long-sleeve-tees/-/A-1000795838",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-art-boy-s-2-pack-long-sleeve-short-sleeve-tee-combo-set/-/A-1001178286",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-boy-s-short-sleeve-performance-tee-lounge-shorts-combo-set/-/A-92356440",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-heads-youth-camo-cuff-beanie-magic-gloves/-/A-1001164987",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-i-survived-boy-s-athletic-heather-long-sleeve-shirt/-/A-85731701",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-youth-boys-five-night-at-freddy-s-t-shirt-3pk/-/A-89924383",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-boy-s-2-pack-black-baseball-jersey-short-sleeve-t-shirt-combo-set/-/A-1000105211",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-boxed-in-characters-boy-s-black-long-sleeve-shirt/-/A-86316421",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-glitchtrap-crew-neck-long-sleeve-black-youth-sweatshirt/-/A-91498918",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-pizza-character-art-boy-s-3-pack-crew-neck-short-sleeve-t-shirt-set/-/A-1001250943",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-s-pizza-boy-s-black-long-sleeve-shirt/-/A-86711128",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-art-3-pack-boy-s-crew-neck-short-sleeve-t-shirt-combo-set/-/A-92356434",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-art-boy-s-2-pack-crew-neck-sweatshirt-joggers-set/-/A-1000960906",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-five-nights-at-freddy-s-3-pc-hoodie-jogger-t-shirt-combo/-/A-90021860",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-4-pack-boy-s-crew-neck-short-sleeve-t-shirt-combo-set/-/A-91543344",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-celebrate-boy-s-black-t-shirt/-/A-85874164",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-party-till-5-am-boy-s-royal-blue-t-shirt/-/A-85873960",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/are-you-ready-five-nights-at-freddys-youth-boys-black-graphic-tee/-/A-85353918",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-and-friends-youth-dark-heather-graphic-tee/-/A-86219119",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-five-nights-at-freddy-s-character-blackout-art-heather-grey-graphic-tee/-/A-84940495",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-youth-red-graphic-tee/-/A-85353878",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-scary-video-game-bear-youth-black-graphic-tee/-/A-86383039",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-pixelated-freddy-bear-youth-white-graphic-tee/-/A-86219077",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-split-head-character-youth-black-graphic-tee/-/A-85351631",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/youth-five-nights-at-freddys-fazbear-s-pizza-tshirt-boys-graphic-tee/-/A-83709890",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-pizzeria-character-group-classic-red-tee/-/A-84939468",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-five-nights-at-freddy-s-group-image-in-red-frame-layout-screen-print-on-white-tee/-/A-84939762",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-chica-game-over-junior-s-charcoal-tee-shirt/-/A-90124695",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-bonnie-the-bunny-tie-dye-youth-boy-s-short-sleeve-tee/-/A-1001698127",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-five-nights-at-freddy-s-fun-time-characters-youth-red-short-sleeve-tee/-/A-90370343",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-trap-graphics-boy-s-black-t-shirt/-/A-85874154",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-five-nights-at-freddy-s-fazbear-s-pizza-security-layout-screen-print-on-athletic-heather-tee/-/A-84939024",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/freddy-fazbear-five-nights-at-freddy-s-youth-boys-heather-gray-tee/-/A-86711130",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-five-nights-at-freddy-s-freddy-burger-youth-black-short-sleeve-tee/-/A-1001337413",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-graphic-grid-boy-s-black-t-shirt/-/A-85873994",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-pixel-art-youth-boys-navy-tee/-/A-86711111",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-big-face-gray-short-sleeve-tee-shirt/-/A-84939330",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-foxy-character-tie-dye-youth-boy-s-short-sleeve-tee/-/A-1001698195",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-fnaf-graphics-boy-s-black-t-shirt/-/A-85355281",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-graphic-fake-sequin-freddy-boy-s-black-t-shirt/-/A-85353897",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-boy-s-black-short-sleeve-tee/-/A-91366492",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-characters-in-stacked-design-youth-black-short-sleeve-crew-neck-tee/-/A-89208151",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/royal-blue-video-game-five-nights-at-freddy-s-tee-shirt/-/A-84939754",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/freddy-s-big-face-video-game-white-tee-shirt/-/A-84939008",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-characters-in-circles-youth-boys-black-tee/-/A-86710952",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-doffing-his-hat-youth-athletic-heather-gray-tee/-/A-86219096",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-chica-freddy-and-bonnie-junior-s-heather-tee-shirt/-/A-90119799",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-chicko-character-tie-dye-youth-boy-s-short-sleeve-tee/-/A-1001698136",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-character-tie-dye-youth-boy-s-short-sleeve-tee/-/A-1001698202",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-five-nights-at-freddys-tshirt-freddy-fazbear-shirt/-/A-84713957",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-youth-heather-gray-short-sleeve-crew-neck-tee/-/A-89764249",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-five-nights-at-freddy-s-fun-time-characters-youth-royal-blue-short-sleeve-tee/-/A-90370337",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-favorite-characters-youth-boy-black-short-sleeve-tee/-/A-1002959127",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-favorite-characters-youth-black-short-sleeve-tee/-/A-1003192955",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-comic-cover-art-boy-s-black-t-shirt/-/A-85874193",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-animatronic-silhouettes-boy-s-navy-t-shirt/-/A-85874238",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-face-and-hands-boy-s-navy-t-shirt/-/A-85783111",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-american-flag-freddy-boy-s-charcoal-heather-t-shirt/-/A-85450792",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-pocket-boy-s-navy-t-shirt/-/A-85873915",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-squares-boy-s-navy-t-shirt/-/A-85873910",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-christmas-lights-freddy-face-boy-s-black-t-shirt/-/A-85874056",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-animatronic-characters-mash-up-boy-s-black-t-shirt/-/A-85874118",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-characters-and-pizza-boy-s-black-t-shirt/-/A-85874272",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-characters-pins-boy-s-black-t-shirt/-/A-85450644",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-character-sheet-boy-s-black-t-shirt/-/A-85354055",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-let-s-party-boy-s-navy-t-shirt/-/A-85874103",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-foil-boy-s-black-t-shirt/-/A-85354264",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-art-boy-s-crew-neck-short-sleeve-t-shirt/-/A-93062881",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-characters-boy-s-white-t-shirt/-/A-86394049",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-boy-s-gray-short-sleeve-tee/-/A-86316728",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-animatronic-characters-boy-s-navy-t-shirt/-/A-85874218",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-main-characters-boy-s-navy-t-shirt/-/A-85874224",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-animatronic-characters-mash-up-boy-s-navy-t-shirt/-/A-85874275",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-chicha-and-foxy-boy-s-royal-blue-t-shirt/-/A-85782394",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-ready-for-freddy-boy-s-athletic-heather-t-shirt/-/A-86316719",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-let-s-party-boy-s-navy-t-shirt/-/A-85783059",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-trick-or-treat-boy-s-black-t-shirt/-/A-85352276",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-big-freddy-face-boy-s-navy-blue-t-shirt/-/A-86103949",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-foxy-game-over-boy-s-black-t-shirt/-/A-85874109",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-pixel-characters-boy-s-royal-blue-t-shirt/-/A-85873891",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-sister-location-is-someone-there-boy-s-navy-t-shirt/-/A-86195971",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-comic-cover-art-boy-s-charcoal-heather-t-shirt/-/A-85874177",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-multi-colored-freddy-boy-s-black-t-shirt/-/A-85354855",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-faces-boy-s-royal-blue-t-shirt/-/A-85874004",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-santa-freddy-boy-s-black-t-shirt/-/A-85874079",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-we-get-to-stay-up-late-boy-s-red-t-shirt/-/A-85355294",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-art-boy-s-crew-neck-short-sleeve-t-shirt/-/A-93062881",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-head-game-over-text-boy-s-black-t-shirt/-/A-87614606",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-freddy-face-boy-s-black-t-shirt/-/A-85874137",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-sister-location-shadow-faces-boy-s-black-t-shirt/-/A-86195720",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-are-you-ready-for-freddy-boy-s-black-t-shirt/-/A-85873930",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-fazbear-face-flag-boy-s-black-t-shirt/-/A-85354716",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-character-specs-boy-s-black-t-shirt/-/A-85873942",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-animatronic-silhouettes-boy-s-navy-t-shirt/-/A-85874238",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-character-specs-boy-s-black-t-shirt/-/A-85873942",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-baby-characters-boy-s-navy-t-shirt/-/A-88346980",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-hard-mode-bonnie-crew-neck-short-sleeve-black-boy-s-t-shirt/-/A-91543865",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-party-animals-youth-white-crew-neck-short-sleeve-t-shirt/-/A-1003316375",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-boys-i-survived-raglan-long-sleeve-t-shirt/-/A-92507168",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-shadow-boy-s-black-t-shirt/-/A-85874123",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-animatronics-character-art-boy-s-red-t-shirt/-/A-85874159",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-fazbear-face-flag-boy-s-black-t-shirt/-/A-85354716",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-gel-ink-character-grid-crew-neck-short-sleeve-boy-s-black-t-shirt/-/A-93653057",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-group-boy-s-black-t-shirt/-/A-85874020",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-pocket-boy-s-navy-t-shirt/-/A-85873915",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-sister-location-fun-times-boy-s-red-t-shirt/-/A-86195954",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-let-s-eat-boy-s-black-t-shirt/-/A-85874009",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-retro-gaming-youth-boys-t-shirt/-/A-84706931",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-sister-location-party-time-boy-s-black-t-shirt/-/A-86196070",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-animatronic-characters-mash-up-boy-s-navy-t-shirt/-/A-85874275",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-heads-arch-text-crew-neck-short-sleeve-boy-s-white-t-shirt/-/A-1001575323",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-night-at-freddy-s-breaking-walls-boy-s-black-t-shirt/-/A-85873926",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-disintegrating-freddy-fazbear-boy-s-black-t-shirt/-/A-85874097",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-he-s-here-game-over-boy-s-red-t-shirt/-/A-85355474",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-sister-location-bon-bon-say-hello-boy-s-charcoal-heather-t-shirt/-/A-86196068",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-foxy-with-warning-signs-crew-neck-short-sleeve-black-men-s-t-shirt/-/A-89764302",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-shadow-freddy-boy-s-black-t-shirt/-/A-85354361",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-main-characters-boy-s-navy-t-shirt/-/A-85874114",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-sister-location-bon-bon-say-hello-boy-s-charcoal-heather-t-shirt/-/A-86196068",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-face-line-art-boy-s-red-t-shirt/-/A-85782818",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-animatronic-collage-art-boy-s-charcoal-heather-t-shirt/-/A-85874142",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-panel-collage-boy-s-black-t-shirt/-/A-85874263",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-hat-tip-boy-s-charcoal-t-shirt/-/A-86801525",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-i-survived-boy-s-black-t-shirt/-/A-85450833",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-s-pizza-ad-boy-s-black-t-shirt/-/A-85874074",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-it-s-me-foxy-and-friends-boy-s-black-t-shirt/-/A-85874202",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-sister-location-shadow-faces-boy-s-black-t-shirt/-/A-86195720",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-animatronic-character-heads-boy-s-navy-t-shirt/-/A-85783156",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-animatronic-squad-caution-tape-boy-s-black-t-shirt/-/A-85354750",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-group-character-art-boy-s-red-t-shirt/-/A-85874198",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-he-s-here-game-over-boy-s-red-t-shirt/-/A-85355474",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-are-you-ready-for-freddy-boy-s-black-t-shirt/-/A-85873930",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/freddy-fazbear-horror-video-game-red-short-sleeve-shirt/-/A-87081376",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-party-animals-youth-red-crew-neck-short-sleeve-t-shirt/-/A-1002959100",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-repeat-text-boy-s-black-t-shirt/-/A-85353234",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-starter-pack-boy-s-black-t-shirt/-/A-85450688",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-group-art-boy-s-navy-blue-t-shirt/-/A-86103920",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-boy-s-red-t-shirt/-/A-85352628",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-squares-boy-s-black-t-shirt/-/A-85874166",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-paper-tear-animatronic-mash-up-boy-s-royal-blue-t-shirt/-/A-86316610",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-neon-pink-freddy-against-the-wall-boy-s-black-t-shirt/-/A-85874136",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-i-survived-boy-s-heather-grey-t-shirt/-/A-85354318",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-nice-naughty-list-boy-s-red-t-shirt/-/A-85354008",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/freddy-fazbear-horror-video-game-red-short-sleeve-shirt/-/A-87081376",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-shadow-boy-s-black-t-shirt/-/A-85874123",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-animatronic-silhouettes-boy-s-navy-t-shirt/-/A-85874238",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-animatronic-collage-art-boy-s-charcoal-heather-t-shirt/-/A-85874142",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-leprechaun-freddy-boy-s-black-t-shirt/-/A-85874178",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-outline-art-boy-s-navy-t-shirt/-/A-85783085",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-animatronic-squad-caution-tape-boy-s-black-t-shirt/-/A-85354750",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-dancing-animatronics-boy-s-royal-blue-t-shirt/-/A-85873967",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-trick-or-treat-boy-s-black-t-shirt/-/A-85352276",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-main-characters-boy-s-navy-t-shirt/-/A-85874224",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-characters-boy-s-white-t-shirt/-/A-86394049",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-behind-the-head-boy-s-red-t-shirt/-/A-85352705",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-pixel-art-boy-s-black-t-shirt/-/A-85782885",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-freddy-pixel-art-boy-s-red-t-shirt/-/A-85353455",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-line-art-boy-s-black-t-shirt/-/A-85450610",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-boy-s-gray-short-sleeve-tee/-/A-86316728",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-double-faces-crew-neck-short-sleeve-royal-blue-youth-t-shirt/-/A-89762931",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-paper-tear-animatronic-mash-up-boy-s-royal-blue-t-shirt/-/A-86316610",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-group-character-art-boy-s-red-t-shirt/-/A-85874198",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-full-cast-boy-s-heather-grey-t-shirt/-/A-85355654",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-video-game-red-short-sleeve-tee/-/A-84939283",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-party-animals-youth-athletic-heather-crew-neck-short-sleeve-t-shirt/-/A-1002959090",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-starter-pack-boy-s-black-t-shirt/-/A-85450688",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-repeat-freddy-boy-s-athletic-heather-t-shirt/-/A-86316245",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-party-animals-youth-navy-crew-neck-short-sleeve-t-shirt/-/A-1003316298",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-five-nights-at-freddy-s-pizza-boys-youth-t-shirt-nice-blue/-/A-1002895685",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-plush-characters-group-short-youth-royal-blue-crew-neck-short-sleeve-t-shirt/-/A-1002959061",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-big-freddy-face-boy-s-gray-t-shirt/-/A-86103969",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-plush-characters-group-short-youth-re-crew-neck-short-sleeve-t-shirt/-/A-1002959062",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-let-s-party-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1003192983",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-plush-characters-group-shot-youth-navy-crew-neck-short-sleeve-t-shirt/-/A-1003316317",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-leprechaun-freddy-boy-s-black-t-shirt/-/A-85874178",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-sister-location-funtime-freddy-foxy-and-baby-boy-s-navy-blue-t-shirt/-/A-88346956",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-party-animals-youth-athletic-heather-crew-neck-short-sleeve-t-shirt/-/A-1002959090",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-low-battery-checkered-squares-all-over-print-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1004470755",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-sister-location-funtime-freddy-foxy-and-baby-boy-s-black-t-shirt/-/A-86195755",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-art-boy-s-crew-neck-short-sleeve-t-shirt/-/A-93062881",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-game-over-freddy-face-boy-s-black-t-shirt/-/A-85874137",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-plush-characters-group-short-youth-charcoal-crew-neck-short-sleeve-t-shirt/-/A-1002959078",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-five-nights-at-freddy-s-boys-freddy-fazbear-glow-in-the-dark-t-shirt-blue/-/A-1003765921",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-video-game-red-short-sleeve-tee/-/A-84939283",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-it-s-me-boy-s-black-t-shirt/-/A-85450582",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-excited-characters-crew-neck-short-sleeve-boy-s-black-t-shirt/-/A-93652399",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-line-art-boy-s-black-t-shirt/-/A-85450610",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-sister-location-is-someone-there-boy-s-navy-t-shirt/-/A-86195971",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-party-animals-boy-s-royal-blue-t-shirt/-/A-85874251",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-character-art-boy-s-crew-neck-short-sleeve-t-shirt/-/A-93062881",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-party-animals-youth-navy-crew-neck-short-sleeve-t-shirt/-/A-1003316298",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-sister-location-is-someone-there-boy-s-navy-t-shirt/-/A-86195971",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-low-battery-checkered-squares-all-over-print-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1004470755",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-plush-characters-group-short-youth-charcoal-crew-neck-short-sleeve-t-shirt/-/A-1002959078",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-five-nights-at-freddy-s-boys-freddy-fazbear-glow-in-the-dark-t-shirt-blue/-/A-1003765921",
      tags: "Boys’ Clothing, Five Nights at Freddy's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Five Nights at Freddy's",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-formula-1-soccer-jersey-white/-/A-94408551",
      tags: "Boys’ Clothing, Formula 1, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Formula 1",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-raven-logo-t-shirt/-/A-82525486",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-classic-logo-character-fill-t-shirt/-/A-90952711",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-victory-royale-gradient-logo-t-shirt/-/A-82525253",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peel-yourself-logo-performance-tee/-/A-90923333",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-victory-royale-gradient-logo-performance-tee/-/A-90924048",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-yarn-lifter-meowscles-performance-tee/-/A-90923837",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-classic-white-logo-performance-tee/-/A-91645825",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-durr-burger-logo-performance-tee/-/A-90954191",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-agent-jones-surfer-shark-performance-tee/-/A-90952312",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-surfer-meowscles-performance-tee/-/A-90952398",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-character-stack-performance-tee/-/A-91647451",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-rainbow-smash-large-performance-tee/-/A-91645993",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-raven-float-on-performance-tee/-/A-90923829",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-rippley-ghost-performance-tee/-/A-91644428",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-raven-logo-performance-tee/-/A-90924335",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-meowscles-pancakes-performance-tee/-/A-90951922",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-victory-royale-slime-performance-tee/-/A-90953102",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-durr-burger-performance-tee/-/A-91644268",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-raven-attack-performance-tee/-/A-90923534",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-logo-character-fill-t-shirt/-/A-90952957",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peel-yourself-logo-t-shirt/-/A-90923362",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-victory-royale-sunglasses-t-shirt/-/A-90953110",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-bash-defy-the-storm-t-shirt/-/A-1002565862",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-jellie-logo-t-shirt/-/A-1002566144",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-the-brat-party-logo-t-shirt/-/A-1002565975",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-ctl-retro-logo-performance-tee/-/A-90953543",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peely-peace-sign-logo-t-shirt/-/A-1001048181",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boys-fortnite-cute-characters-logo-t-shirt/-/A-1004563837",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-llama-pinatas-pocket-logo-performance-tee/-/A-90923978",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-grimey-logo-t-shirt/-/A-1002566006",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peely-peace-sign-logo-t-shirt/-/A-90923635",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-character-stack-t-shirt/-/A-91647406",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peely-banana-smoothie-performance-tee/-/A-90924943",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boys-fortnite-supply-llama-victory-royale-t-shirt/-/A-1003722819",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-dj-yonder-where-we-dropping-t-shirt/-/A-1002565842",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-meowscles-pancakes-t-shirt/-/A-1001048206",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boys-fortnite-neon-fishstick-ramen-t-shirt/-/A-1004564452",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peely-banana-smoothie-t-shirt/-/A-90924977",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-cuddle-team-leader-popsicle-performance-tee/-/A-90952124",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-grimey-where-we-droppin-t-shirt/-/A-1002566041",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-classic-white-logo-t-shirt/-/A-91645762",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boys-fortnite-meowscles-pancakes-t-shirt/-/A-1004563559",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boys-fortnite-uncle-pete-s-pizza-pit-t-shirt/-/A-1004563834",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-surfer-meowscles-t-shirt/-/A-1001206951",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-loot-drop-party-llama-performance-tee/-/A-91644889",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-rainbow-smash-console-performance-tee/-/A-90952630",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-rippley-s-surf-shop-performance-tee/-/A-90952965",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-painted-logo-t-shirt/-/A-94120811",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-fortnite-peely-peace-sign/-/A-87573198",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peely-aerosol-can-performance-tee/-/A-90923442",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-agent-jones-surfer-shark-t-shirt/-/A-90952405",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-loot-drop-party-performance-tee/-/A-91645385",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peely-peace-sign-t-shirt/-/A-82524183",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-classic-white-logo-t-shirt/-/A-91645846",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-durr-burger-sticker-t-shirt/-/A-91646888",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-cuddle-name-tag-t-shirt/-/A-82524877",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-raven-poster-t-shirt/-/A-1002565971",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-rippley-ghost-t-shirt/-/A-91644351",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boys-fortnite-fishing-lure-white-logo-t-shirt/-/A-1004564423",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-llama-pinatas-pocket-logo-t-shirt/-/A-82525404",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peely-peace-sign-t-shirt/-/A-90924352",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-durr-burger-t-shirt/-/A-82524313",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-dynamo-spiral-t-shirt/-/A-1002565914",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-retro-victory-royale-t-shirt/-/A-90952866",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-spray-can-graffiti-t-shirt/-/A-82525054",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-rippley-ghost-small-t-shirt/-/A-91644315",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-classic-white-logo-t-shirt/-/A-1001206967",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-life-is-better-around-the-campfire-t-shirt/-/A-91647091",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peely-peace-sign-performance-tee/-/A-90924326",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-halloween-character-jack-o-lanterns-t-shirt/-/A-91646172",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-fortnite-victory-royale-gradient-logo/-/A-87573100",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-rainbow-smash-cone-logo-t-shirt/-/A-90952106",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-ctl-retro-logo-t-shirt/-/A-90953489",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-raven-victory-royale-t-shirt/-/A-82524265",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-skull-trooper-all-hail-glow-t-shirt/-/A-82525535",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-loot-drop-party-llama-t-shirt/-/A-91645033",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-peely-aerosol-can-t-shirt/-/A-90923464",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-small-pink-royale-t-shirt/-/A-90952341",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-i-survived-haunted-hills-t-shirt/-/A-1002565984",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-hot-dog-logo-t-shirt/-/A-1002566153",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-victory-royale-gold-script-t-shirt/-/A-82525555",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-victory-royale-gold-chain-t-shirt/-/A-82524476",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-mancake-pancakes-t-shirt/-/A-1002565962",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-raven-attack-t-shirt/-/A-90923471",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-rainbow-smash-large-t-shirt/-/A-91645980",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-rainbow-smash-party-t-shirt/-/A-91645166",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-small-retro-1-victory-royale-arcade-t-shirt/-/A-90952752",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-victory-royale-slime-t-shirt/-/A-90953244",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-8-ball-battle-royale-t-shirt/-/A-1002566180",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-greetings-from-weeping-woods-t-shirt/-/A-1002565966",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-retro-gold-logo-t-shirt/-/A-1002566127",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-raven-float-on-t-shirt/-/A-90923530",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-spray-can-graffiti-performance-tee/-/A-91644472",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-cuddle-team-leader-broken-heart-performance-tee/-/A-90953134",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-ctl-retro-small-logo-t-shirt/-/A-90953372",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-boogie-bomb-performance-tee/-/A-1002566141",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-lonely-lodge-t-shirt/-/A-1002566044",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-8-ball-logo-t-shirt/-/A-1002565869",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-cuddle-team-leader-broken-heart-t-shirt/-/A-90953000",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-renegade-lynx-t-shirt/-/A-1002565909",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-loot-drop-party-t-shirt/-/A-91645296",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-dynamo-logo-t-shirt/-/A-1002566112",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-cuddle-team-leader-pink-logo-t-shirt/-/A-90953273",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-flush-factory-t-shirt/-/A-1002566088",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-boogie-bomb-t-shirt/-/A-1002566209",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-spectra-knight-t-shirt/-/A-1002565920",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-mancake-logo-t-shirt/-/A-1002566133",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-renegade-raider-t-shirt/-/A-1002565874",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-fortnite-red-knight-t-shirt/-/A-1002565994",
      tags: "Boys’ Clothing, Fortnite, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Fortnite",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-foster-s-home-for-imaginary-friends-here-for-the-shenanigans-t-shirt/-/A-91691985",
      tags: "Boys’ Clothing, Foster's Home for Imaginary Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Foster's Home for Imaginary Friends",
      },
    },
    {
      url: "https://www.target.com/p/friends-tv-show-you-re-my-lobster-youth-athletic-heather-long-sleeve-shirt/-/A-86218806",
      tags: "Boys’ Clothing, Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Friends",
      },
    },
    {
      url: "https://www.target.com/p/friends-tv-show-we-were-on-a-break-boy-s-athletic-heather-long-sleeve-shirt/-/A-86316349",
      tags: "Boys’ Clothing, Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Friends",
      },
    },
    {
      url: "https://www.target.com/p/friends-tv-show-stick-to-the-routine-boy-s-black-long-sleeve-shirt/-/A-86316406",
      tags: "Boys’ Clothing, Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Friends",
      },
    },
    {
      url: "https://www.target.com/p/friends-tv-show-we-were-on-a-break-boy-s-charcoal-t-shirt/-/A-86448919",
      tags: "Boys’ Clothing, Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-friends-valentine-s-day-how-you-doin-heart-t-shirt/-/A-88323381",
      tags: "Boys’ Clothing, Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Friends",
      },
    },
    {
      url: "https://www.target.com/p/friends-tv-show-when-we-re-together-youth-athletic-heather-t-shirt/-/A-86218655",
      tags: "Boys’ Clothing, Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Friends",
      },
    },
    {
      url: "https://www.target.com/p/friends-tv-show-outside-bad-inside-good-youth-navy-t-shirt/-/A-86218686",
      tags: "Boys’ Clothing, Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Friends",
      },
    },
    {
      url: "https://www.target.com/p/friends-tv-show-character-frame-boy-s-charcoal-t-shirt/-/A-86448984",
      tags: "Boys’ Clothing, Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Friends",
      },
    },
    {
      url: "https://www.target.com/p/friends-tv-logo-crew-neck-short-sleeve-white-unisex-youth-t-shirt/-/A-90467994",
      tags: "Boys’ Clothing, Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-friends-happy-turkey-day-t-shirt/-/A-89579937",
      tags: "Boys’ Clothing, Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-friends-thanksgiving-throwbacks-scene-t-shirt/-/A-89580029",
      tags: "Boys’ Clothing, Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Friends",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-friends-tv-life-is-better-with-friends-boy-s-royal-blue-t-shirt/-/A-87217756",
      tags: "Boys’ Clothing, Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Friends",
      },
    },
    {
      url: "https://www.target.com/p/boys-friends-could-i-be-any-cuter-quote-t-shirt/-/A-1004127764",
      tags: "Boys’ Clothing, Friends, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Friends",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-christmas-olaf-wishes-t-shirt/-/A-81883084",
      tags: "Boys’ Clothing, Frozen, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-olaf-smile-t-shirt/-/A-83987322",
      tags: "Boys’ Clothing, Frozen, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-rock-on-trolls-t-shirt/-/A-83986994",
      tags: "Boys’ Clothing, Frozen, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-easter-egg-silhouettes-t-shirt/-/A-91247853",
      tags: "Boys’ Clothing, Frozen, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-snowflake-hugs-t-shirt/-/A-83987463",
      tags: "Boys’ Clothing, Frozen, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-olaf-build-snowman-t-shirt/-/A-79592759",
      tags: "Boys’ Clothing, Frozen, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-character-snowflakes-t-shirt/-/A-83987348",
      tags: "Boys’ Clothing, Frozen, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-elsa-keep-calm-t-shirt/-/A-83987521",
      tags: "Boys’ Clothing, Frozen, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-trio-t-shirt/-/A-82362629",
      tags: "Boys’ Clothing, Frozen, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-happy-harvest-t-shirt/-/A-89581912",
      tags: "Boys’ Clothing, Frozen, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-sven-kristoff-olaf-trio-courage-is-calling-t-shirt/-/A-82366953",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-sister-forest-frame-t-shirt/-/A-83987742",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-vintage-journey-connects-t-shirt/-/A-82368094",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-anna-winter-wind-t-shirt/-/A-85373974",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-bruni-the-salamander-watercolor-portrait-t-shirt/-/A-82366282",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-olaf-warm-hugs-t-shirt/-/A-82359842",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-bruni-pocket-t-shirt/-/A-83988551",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-sven-fearless-by-nature-crest-t-shirt/-/A-83989115",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-winter-traveler-t-shirt/-/A-82369784",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-magical-traveler-silhouette-t-shirt/-/A-82353799",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-olaf-signature-moves-t-shirt/-/A-1001048242",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-i-don-t-even-know-a-samantha-olaf-t-shirt/-/A-1001048214",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-olaf-be-cool-t-shirt/-/A-82355054",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-sister-stained-glass-t-shirt/-/A-82356526",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-trust-your-journey-crest-t-shirt/-/A-83989083",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-sister-shadows-t-shirt/-/A-83988693",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-sister-live-truth-t-shirt/-/A-83989137",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-frozen-2-natural-element-large-text-t-shirt/-/A-83989252",
      tags: "Boys’ Clothing, Frozen 2, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Frozen 2",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-captain-america-4-funko-graphic-t-shirt/-/A-94467698",
      tags: "Boys’ Clothing, Funko, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Funko",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-furby-troublemaker-tarot-card-t-shirt/-/A-92915841",
      tags: "Boys’ Clothing, Furby, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Furby",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-furby-christmas-lights-ugly-sweater-print-t-shirt/-/A-92915756",
      tags: "Boys’ Clothing, Furby, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Furby",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-furby-i-heart-christmas-ugly-sweater-print-t-shirt/-/A-92915751",
      tags: "Boys’ Clothing, Furby, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Furby",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-furby-colorful-birhtday-line-up-t-shirt/-/A-92912813",
      tags: "Boys’ Clothing, Furby, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Furby",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-furby-brother-of-the-birthday-boy-t-shirt/-/A-92915543",
      tags: "Boys’ Clothing, Furby, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Furby",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-furby-halloween-sketch-t-shirt/-/A-92915628",
      tags: "Boys’ Clothing, Furby, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Furby",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-furby-halloween-party-monster-t-shirt/-/A-92915937",
      tags: "Boys’ Clothing, Furby, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Furby",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-furby-birthday-boy-sketch-t-shirt/-/A-92915507",
      tags: "Boys’ Clothing, Furby, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Furby",
      },
    },
    {
      url: "https://www.target.com/p/g-iii-sports-boys-cincinnati-bengals-super-bowl-lvi-graphic-t-shirt/-/A-1004142669",
      tags: "Boys’ Clothing, G-III, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G-III",
      },
    },
    {
      url: "https://www.target.com/p/g-iii-sports-boys-arizona-hotshots-graphic-t-shirt/-/A-1004144904",
      tags: "Boys’ Clothing, G-III, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G-III",
      },
    },
    {
      url: "https://www.target.com/p/g-iii-sports-boys-arizona-hotshots-graphic-t-shirt/-/A-1004145134",
      tags: "Boys’ Clothing, G-III, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G-III",
      },
    },
    {
      url: "https://www.target.com/p/g-iii-sports-boys-super-bowl-lvi-graphic-t-shirt/-/A-1004142745",
      tags: "Boys’ Clothing, G-III, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G-III",
      },
    },
    {
      url: "https://www.target.com/p/g-iii-sports-boys-stallions-19-jersey/-/A-1004145208",
      tags: "Boys’ Clothing, G-III, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G-III",
      },
    },
    {
      url: "https://www.target.com/p/boys-g-i-joe-hero-character-fill-short-sleeve-graphic-t-shirt/-/A-92722958",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-80s-cartoon-psa-phrase-performance-tee/-/A-87692718",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-group-shot-t-shirt/-/A-82884932",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-comic-panels-t-shirt/-/A-82884971",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-cobra-logo-t-shirt/-/A-82885633",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-christmas-snake-eyes-season-s-greetings-t-shirt/-/A-82884906",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-toy-line-character-vehicle-roster-t-shirt/-/A-87692808",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-character-box-t-shirt/-/A-82886162",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-fight-mode-joes-t-shirt/-/A-87692611",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-snake-eyes-schematics-t-shirt/-/A-82885506",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-real-american-hero-performance-tee/-/A-87692781",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-comic-cover-t-shirt/-/A-82885605",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-knowing-is-half-the-battle-t-shirt/-/A-82885004",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-team-joe-t-shirt/-/A-82885434",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gi-joe-real-american-hero-t-shirt/-/A-82885368",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boys-g-i-joe-character-group-short-sleeve-graphic-t-shirt/-/A-92722913",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boys-gi-joe-red-white-and-heroic-t-shirt/-/A-1004387723",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boys-gi-joe-patriotic-circle-up-t-shirt/-/A-1004387728",
      tags: "Boys’ Clothing, G.I. Joe, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "G.I. Joe",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-garfield-st-patrick-s-day-odie-lucky-shamrocks-t-shirt/-/A-85886377",
      tags: "Boys’ Clothing, Garfield, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Garfield",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-garfield-lasagna-is-my-valentine-t-shirt/-/A-85563345",
      tags: "Boys’ Clothing, Garfield, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Garfield",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-garfield-pooky-happy-mother-s-day-t-shirt/-/A-88789274",
      tags: "Boys’ Clothing, Garfield, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Garfield",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-garfield-st-patrick-s-day-this-is-my-lucky-shirt-t-shirt/-/A-85886289",
      tags: "Boys’ Clothing, Garfield, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Garfield",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-garfield-st-patrick-s-day-lucky-charm-t-shirt/-/A-85886624",
      tags: "Boys’ Clothing, Garfield, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Garfield",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-garfield-st-patrick-s-day-odie-shamrock-balloon-t-shirt/-/A-85886335",
      tags: "Boys’ Clothing, Garfield, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Garfield",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-garfield-st-patrick-s-day-who-needs-luck-when-you-have-lasagna-t-shirt/-/A-85886728",
      tags: "Boys’ Clothing, Garfield, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Garfield",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-garfield-don-t-worry-be-stupid-t-shirt/-/A-87693733",
      tags: "Boys’ Clothing, Garfield, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Garfield",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-garfield-i-hate-mondays-t-shirt/-/A-1001207172",
      tags: "Boys’ Clothing, Garfield, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Garfield",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-garfield-happy-easter-bunny-ears-cat-t-shirt/-/A-1002734972",
      tags: "Boys’ Clothing, Garfield, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Garfield",
      },
    },
    {
      url: "https://www.target.com/p/ghostbusters-frozen-empire-gloss-no-ghost-logo-youth-t-shirt/-/A-93987337",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-who-you-gonna-call-tiles-t-shirt/-/A-85585435",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-classic-logo-t-shirt/-/A-82354571",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-slime-logo-t-shirt/-/A-82355437",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-christmas-wreath-logo-t-shirt/-/A-84868200",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-halloween-pumpkin-logo-t-shirt/-/A-84088742",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-halloween-stay-puft-marshmallow-man-t-shirt/-/A-81495126",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-classic-logo-t-shirt/-/A-1001940747",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-ecto-1-wagon-logo-t-shirt/-/A-82357006",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-ecto-1-blueprint-t-shirt/-/A-85583574",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-ain-t-afraid-ghost-collage-t-shirt/-/A-85583436",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-stay-puft-marshmallow-man-melt-t-shirt/-/A-84035749",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-proton-pack-blueprint-t-shirt/-/A-85583450",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-ecto-1-wagon-retro-stripe-t-shirt/-/A-84035699",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-ray-stantz-t-shirt/-/A-85585452",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-i-ain-t-afraid-of-no-ghost-streak-t-shirt/-/A-85583594",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-egon-spengler-t-shirt/-/A-85585373",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-slimer-drip-face-t-shirt/-/A-84035637",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-cartoon-slimer-t-shirt/-/A-85583711",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-ecto-2-black-blueprint-t-shirt/-/A-85583602",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-venkman-t-shirt/-/A-85583472",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-brick-spray-logo-t-shirt/-/A-85583690",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-realistic-slimer-t-shirt/-/A-85583457",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-venkman-back-off-i-m-a-scientist-t-shirt/-/A-85584173",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-winston-zeddemore-name-t-shirt/-/A-85585395",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-back-off-man-i-m-a-scientist-t-shirt/-/A-85585338",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-who-you-gonna-call-collage-t-shirt/-/A-85584103",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-who-you-gonna-call-collage-t-shirt/-/A-85583755",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ghostbusters-white-logo-t-shirt/-/A-85583979",
      tags: "Boys’ Clothing, Ghostbusters, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ghostbusters",
      },
    },
    {
      url: "https://www.target.com/p/godzilla-3-pack-of-youth-boy-s-short-sleeve-tees/-/A-1002535202",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-value-3-pack-of-youth-boy-s-sleeveless-muscle-shirts/-/A-1003216356",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-creepers-value-3-pack-of-youth-boy-s-sleeveless-muscle-shirts/-/A-1003216352",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/classic-godzilla-youth-heather-gray-graphic-tee/-/A-84809282",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-godzilla-monster-movie-navy-graphic-tee/-/A-88886847",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/classic-godzilla-youth-royal-blue-graphic-tee/-/A-84810996",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/classic-godzilla-youth-red-graphic-tee/-/A-84810985",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/classic-godzilla-youth-charcoal-gray-graphic-tee/-/A-84810946",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/classic-godzilla-youth-white-graphic-tee/-/A-84810952",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/godzilla-classic-king-of-monsters-god-side-graphic-tee-boys-t-shirt/-/A-84642395",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/classic-godzilla-youth-black-graphic-tee/-/A-84810958",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/godzilla-grid-kanji-crew-neck-short-sleeve-black-boy-s-t-shirt/-/A-93146766",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/godzilla-king-of-the-monsters-crew-neck-short-sleeve-athletic-heather-boy-s-t-shirt/-/A-88000977",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/godzilla-head-and-kanji-letters-boy-s-black-t-shirt/-/A-85354074",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/godzilla-monster-head-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1002959114",
      tags: "Boys’ Clothing, Godzilla, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Godzilla",
      },
    },
    {
      url: "https://www.target.com/p/green-lantern-emblem-boy-s-black-long-sleeve-shirt/-/A-87944765",
      tags: "Boys’ Clothing, Graphic Tees, Green Lantern, Kids’ Clothing, Tops",
      filters: {
        brand: "Green Lantern",
      },
    },
    {
      url: "https://www.target.com/p/green-lantern-flying-superhero-boy-s-black-long-sleeve-shirt/-/A-87944768",
      tags: "Boys’ Clothing, Graphic Tees, Green Lantern, Kids’ Clothing, Tops",
      filters: {
        brand: "Green Lantern",
      },
    },
    {
      url: "https://www.target.com/p/the-justice-league-batman-green-lantern-and-aquaman-youth-athletic-heather-gray-graphic-tee/-/A-87614622",
      tags: "Boys’ Clothing, Graphic Tees, Green Lantern, Kids’ Clothing, Tops",
      filters: {
        brand: "Green Lantern",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-green-lantern-happy-st-patrick-s-day-t-shirt/-/A-86126845",
      tags: "Boys’ Clothing, Graphic Tees, Green Lantern, Kids’ Clothing, Tops",
      filters: {
        brand: "Green Lantern",
      },
    },
    {
      url: "https://www.target.com/p/green-lantern-dripping-logo-youth-boys-navy-t-shirt/-/A-85729688",
      tags: "Boys’ Clothing, Graphic Tees, Green Lantern, Kids’ Clothing, Tops",
      filters: {
        brand: "Green Lantern",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-green-lantern-st-patrick-s-day-who-needs-luck-distressed-t-shirt/-/A-86126754",
      tags: "Boys’ Clothing, Graphic Tees, Green Lantern, Kids’ Clothing, Tops",
      filters: {
        brand: "Green Lantern",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-green-lantern-starry-night-lantern-logo-t-shirt/-/A-92914088",
      tags: "Boys’ Clothing, Graphic Tees, Green Lantern, Kids’ Clothing, Tops",
      filters: {
        brand: "Green Lantern",
      },
    },
    {
      url: "https://www.target.com/p/gremlins-movie-character-canon-ball-youth-boys-charcoal-graphic-tee-shirt/-/A-84942222",
      tags: "Boys’ Clothing, Graphic Tees, Gremlins, Kids’ Clothing, Tops",
      filters: {
        brand: "Gremlins",
      },
    },
    {
      url: "https://www.target.com/p/gremlins-chibi-gizmo-boy-s-navy-blue-t-shirt/-/A-87217703",
      tags: "Boys’ Clothing, Graphic Tees, Gremlins, Kids’ Clothing, Tops",
      filters: {
        brand: "Gremlins",
      },
    },
    {
      url: "https://www.target.com/p/gremlins-gizmo-toppling-text-boy-s-royal-blue-t-shirt/-/A-88886906",
      tags: "Boys’ Clothing, Graphic Tees, Gremlins, Kids’ Clothing, Tops",
      filters: {
        brand: "Gremlins",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-gremlins-midnight-snack-ugly-christmas-sweater-print-t-shirt/-/A-1001412295",
      tags: "Boys’ Clothing, Graphic Tees, Gremlins, Kids’ Clothing, Tops",
      filters: {
        brand: "Gremlins",
      },
    },
    {
      url: "https://www.target.com/p/gremlins-what-you-see-isn-t-always-what-you-get-boy-s-heather-grey-t-shirt/-/A-88886447",
      tags: "Boys’ Clothing, Graphic Tees, Gremlins, Kids’ Clothing, Tops",
      filters: {
        brand: "Gremlins",
      },
    },
    {
      url: "https://www.target.com/p/gremlins-trouble-maker-spike-boy-s-royal-blue-tshirt/-/A-86382726",
      tags: "Boys’ Clothing, Graphic Tees, Gremlins, Kids’ Clothing, Tops",
      filters: {
        brand: "Gremlins",
      },
    },
    {
      url: "https://www.target.com/p/gremlins-boys-black-crew-neck-short-sleeve-t-shirt/-/A-1004429936",
      tags: "Boys’ Clothing, Graphic Tees, Gremlins, Kids’ Clothing, Tops",
      filters: {
        brand: "Gremlins",
      },
    },
    {
      url: "https://www.target.com/p/growing-up-creepie-character-elements-logo-crew-neck-short-sleeve-athletic-heather-boy-s-t-shirt/-/A-89097308",
      tags: "Boys’ Clothing, Graphic Tees, Growing Up Creepie, Kids’ Clothing, Tops",
      filters: {
        brand: "Growing Up Creepie",
      },
    },
    {
      url: "https://www.target.com/p/growing-up-creepie-bug-it-on-youth-heather-gray-short-sleeve-crew-neck-tee/-/A-89050769",
      tags: "Boys’ Clothing, Graphic Tees, Growing Up Creepie, Kids’ Clothing, Tops",
      filters: {
        brand: "Growing Up Creepie",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-birthday-kid-groot-t-shirt/-/A-89404957",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-vol-3-groot-and-rocket-poster-t-shirt/-/A-89175562",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-vol-3-star-lord-square-t-shirt/-/A-89175337",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-guardians-of-the-galaxy-baby-face-birthday-boy-groot-t-shirt/-/A-87573355",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-silhouettes-christmas-tree-t-shirt/-/A-87738513",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-guardians-of-the-galaxy-birthday-kid-pot-plant-groot-t-shirt/-/A-87573333",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-mantis-candy-cane-hug-t-shirt/-/A-87738160",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-groot-springtime-t-shirt/-/A-91245489",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-groot-all-things-grow-with-love-t-shirt/-/A-89019009",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-groot-flower-dance-t-shirt/-/A-1002735120",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-vol-3-black-and-white-movie-logo-t-shirt/-/A-89175341",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-vol-3-metallic-badge-t-shirt/-/A-89175346",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-guardians-of-the-galaxy-birthday-boy-pot-plant-groot-t-shirt/-/A-87573350",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-birthday-boy-groot-t-shirt/-/A-89917959",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-groot-and-flower-portrait-t-shirt/-/A-91245690",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-christmas-sweater-square-t-shirt/-/A-87738719",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-mom-s-little-guardian-shield-t-shirt/-/A-89018980",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-vol-3-group-badge-t-shirt/-/A-89175440",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-earth-day-we-are-groot-t-shirt/-/A-1002735050",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-christmas-lights-badge-t-shirt/-/A-87738574",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-season-s-grootings-t-shirt/-/A-87738852",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-christmas-sweater-print-t-shirt/-/A-87738918",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-yondu-ruined-christmas-animated-t-shirt/-/A-87738082",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-a-very-guardians-christmas-t-shirt/-/A-87738651",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-a-very-guardians-christmas-t-shirt/-/A-87738651",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-earth-day-we-are-groot-t-shirt/-/A-89019079",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-shield-christmas-tree-t-shirt/-/A-87738177",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-white-logo-t-shirt/-/A-87738457",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-guardians-of-the-galaxy-birthday-kid-dancing-groot-t-shirt/-/A-87573318",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-guardians-badge-t-shirt/-/A-87738862",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-small-guardians-badge-t-shirt/-/A-87738732",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-vol-3-it-s-good-to-have-friends-t-shirt/-/A-89175365",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-character-ornaments-t-shirt/-/A-87738303",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-vol-3-gamora-square-t-shirt/-/A-89175468",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-vol-3-movie-logo-t-shirt/-/A-89175608",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-yondu-ruined-christmas-lights-t-shirt/-/A-87738100",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-ugly-christmas-sweater-t-shirt/-/A-87738268",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-guardians-of-the-galaxy-holiday-special-alien-writing-t-shirt/-/A-87738549",
      tags: "Boys’ Clothing, Graphic Tees, Guardians of the Galaxy, Kids’ Clothing, Tops",
      filters: {
        brand: "Guardians of the Galaxy",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-hershey-s-milk-chocolate-logo-t-shirt/-/A-88009526",
      tags: "Boys’ Clothing, Graphic Tees, HERSHEY'S, Kids’ Clothing, Tops",
      filters: {
        brand: "HERSHEY'S",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-hershey-s-the-perfect-s-mores-t-shirt/-/A-88009430",
      tags: "Boys’ Clothing, Graphic Tees, HERSHEY'S, Kids’ Clothing, Tops",
      filters: {
        brand: "HERSHEY'S",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-hershey-s-state-of-mind-rainbow-t-shirt/-/A-88009678",
      tags: "Boys’ Clothing, Graphic Tees, HERSHEY'S, Kids’ Clothing, Tops",
      filters: {
        brand: "HERSHEY'S",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-hershey-s-s-mores-equation-t-shirt/-/A-88009508",
      tags: "Boys’ Clothing, Graphic Tees, HERSHEY'S, Kids’ Clothing, Tops",
      filters: {
        brand: "HERSHEY'S",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-pj-masks-boys-wings-stripes-shields-pullover-and-jogger-2-piece-outfit-set-multicoloured/-/A-1000995721",
      tags: "Boys’ Clothing, Graphic Tees, Happy Threads, Kids’ Clothing, Tops",
      filters: {
        brand: "Happy Threads",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-life-is-better-at-hogwarts-boy-s-black-long-sleeve-shirt/-/A-86316384",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-boys-hogwarts-quidditch-youth-short-sleeve-t-shirt-kids/-/A-91166479",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-3-pack-t-shirts-little-kid-to-big-kid/-/A-1000155942",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-2-pack-t-shirts-little-kid-to-big-kid/-/A-93339229",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-3-pack-graphic-t-shirts/-/A-85049160",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-deathly-hallows-hogwarts-poster-t-shirt/-/A-83439221",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-dobby-free-house-elves-t-shirt/-/A-83987242",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-best-friend-magic-trio-t-shirt/-/A-79711941",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-8th-birthday-friends-t-shirt/-/A-90483023",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hogwarts-herbology-t-shirt/-/A-82548675",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-harry-potter-sorcerer-s-stone-movie-poster/-/A-87572860",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-harry-kawaii-cutie-t-shirt/-/A-82369792",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hogwarts-houses-vintage-collage-t-shirt/-/A-82371214",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-decorative-hogwarts-symbol-t-shirt/-/A-87967164",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-harry-potter-gryffindor-quidditch-team-youth-red-graphic-tee/-/A-87369527",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-harry-potter-ravenclaw-quidditch-team-youth-navy-graphic-tee/-/A-87369538",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-harry-potter-hufflepuff-quidditch-team-youth-blue-graphic-tee/-/A-87369560",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-harry-potter-ravenclaw-clubhouse-youth-navy-graphic-tee/-/A-87369512",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-harry-potter-gryffindor-clubhouse-youth-red-graphic-tee/-/A-87369537",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-harry-potter-ravenclaw-clubhouse-youth-blue-graphic-tee/-/A-87369532",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-wizard-in-training-graphic-tee-boys-t-shirt/-/A-1002928177",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hogwarts-houses-vintage-collage-performance-tee/-/A-83438717",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-quidditch-ravenclaw-team-crest-performance-tee/-/A-87698630",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-house-shield-performance-tee/-/A-1001022547",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-line-art-crest-t-shirt/-/A-83439944",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-quidditch-gold-team-seeker-t-shirt/-/A-83439432",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-wizard-and-owl-performance-tee/-/A-87698622",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-letter-from-hogwarts-t-shirt/-/A-86926684",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-sorcerer-s-stone-movie-poster-t-shirt/-/A-83440193",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-ravenclaw-crest-performance-tee/-/A-1001410779",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-ornate-crest-performance-tee/-/A-1001410800",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-dobby-is-a-free-elf-performance-tee/-/A-83440166",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hufflepuff-gold-crest-performance-tee/-/A-87698634",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-emblem-youth-boys-red-t-shirt/-/A-87550774",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hufflepuff-quidditch-seeker-t-shirt/-/A-83440051",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hogwarts-line-art-moonrise-t-shirt/-/A-83987026",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-house-crests-shield-t-shirt/-/A-82373576",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-list-of-spells-t-shirt/-/A-83441112",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boys-harry-potter-hogwarts-alumni-t-shirt/-/A-1004412769",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-ravenclaw-8th-birthday-t-shirt/-/A-90482564",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-line-art-seal-t-shirt/-/A-83439913",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-houses-grid-boy-s-heather-gray-t-shirt/-/A-85351817",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-ravenclaw-r-logo-t-shirt/-/A-83437042",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-deathly-hallows-symbol-t-shirt/-/A-89212583",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-g-logo-t-shirt/-/A-83441693",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-harry-potter-platform-9-3-4-logo/-/A-87572853",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boys-harry-potter-snake-symbol-t-shirt/-/A-1004407595",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hufflepuff-emblem-youth-boys-navy-t-shirt/-/A-87550733",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-no-hogwarts-without-hagrid-t-shirt/-/A-87698552",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-i-m-a-what-meme-boy-s-red-t-shirt/-/A-85352381",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-mandrake-root-recipe-t-shirt/-/A-87965597",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hogwarts-at-night-t-shirt/-/A-87966884",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-slytherin-snake-emblem-t-shirt/-/A-82351752",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-slytherin-mascot-youth-athletic-heather-t-shirt/-/A-86103570",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hufflepuff-birthday-kid-t-shirt/-/A-90482638",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-legend-portrait-t-shirt/-/A-87966617",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-slytherin-coat-of-arms-t-shirt/-/A-89212597",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boys-harry-potter-slytherin-quidditch-team-seeker-t-shirt/-/A-1004413987",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-ravenclaw-house-crest-t-shirt/-/A-89212517",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-stand-together-anime-friends-t-shirt/-/A-87966339",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-dumbledore-humble-wisdom-t-shirt/-/A-83987316",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-all-aboard-t-shirt/-/A-87698530",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-school-boxed-icons-youth-boys-royal-blue-t-shirt/-/A-87550786",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-ravenclaw-emblem-youth-boys-heather-gray-t-shirt/-/A-87550744",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-slytherin-house-crest-t-shirt/-/A-89212511",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-teachings-of-dumbledore-t-shirt/-/A-87698623",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-it-s-my-magical-birthday-cute-characters-t-shirt/-/A-89601483",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hufflepuff-mascot-youth-athletic-heather-t-shirt/-/A-86103477",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-ravenclaw-7th-birthday-t-shirt/-/A-90482673",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-harry-potter-back-to-hogwarts-cartoon/-/A-87572890",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-all-i-want-for-wizard-christmas-t-shirt/-/A-87698464",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-quidditch-elements-t-shirt/-/A-87698590",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-collegiate-logo-boy-s-athletic-heather-t-shirt/-/A-86801294",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-4th-birthday-friends-t-shirt/-/A-90482970",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-wizard-training-t-shirt/-/A-87698540",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-death-eaters-morsmordre-t-shirt/-/A-90483062",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-dobby-has-come-to-save-cartoon-t-shirt/-/A-87967212",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-slytherin-7th-birthday-t-shirt/-/A-90482337",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-magical-birthday-boy-icons-t-shirt/-/A-89601469",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-believe-in-magic-t-shirt/-/A-83441565",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-harry-potter-cartoon-hedwig-letter/-/A-87572901",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hufflepuff-house-crest-t-shirt/-/A-89212508",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-wizard-in-training-t-shirt/-/A-85975166",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-waiting-for-my-hogwarts-letter-t-shirt/-/A-89212285",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-slytherin-s-logo-t-shirt/-/A-83438076",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-deathly-hallows-group-shot-t-shirt/-/A-89212304",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-proud-member-of-dumbledore-s-army-t-shirt/-/A-87966820",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-order-of-phoenix-flight-t-shirt/-/A-89212574",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hogwarts-slytherin-t-shirt/-/A-87697118",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hogwarts-alumni-slytherin-house-t-shirt/-/A-87967001",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-dragon-flame-silhouette-t-shirt/-/A-83437863",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-castle-youth-boys-royal-blue-t-shirt/-/A-87550770",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-slytherin-house-shield-t-shirt/-/A-79711930",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-ron-kawaii-cutie-t-shirt/-/A-83989119",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-i-d-rather-be-at-hogwarts-boy-s-red-t-shirt/-/A-85352929",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-4-hogwarts-houses-youth-boys-heather-gray-t-shirt/-/A-87550730",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-property-of-hogwarts-boy-s-red-t-shirt/-/A-85352243",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hagrid-hedwig-kawaii-cuties-t-shirt/-/A-82351167",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-ravenclaw-house-shield-t-shirt/-/A-79711609",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hufflepuff-h-logo-t-shirt/-/A-83440664",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-vintage-hogwarts-letter-t-shirt/-/A-89212363",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hufflepuff-birthday-boy-t-shirt/-/A-90482615",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-triwizard-tournament-flag-t-shirt/-/A-87967511",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-coat-of-arms-t-shirt/-/A-89212397",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-cartoon-hedwig-letter-t-shirt/-/A-82373883",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-draco-dormiens-nunquam-titilandus-youth-royal-blue-t-shirt/-/A-86103276",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-harry-potter-platform-9-3-4-line-art/-/A-87572900",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-back-to-being-a-wizard-t-shirt/-/A-87698498",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-join-spew-boy-s-athletic-heather-t-shirt/-/A-87614718",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-slytherin-snake-logo-t-shirt/-/A-86926659",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-husky-harry-potter-ravenclaw-line-art-crest/-/A-87572865",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-ugly-christmas-sweater-print-t-shirt/-/A-1001415079",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-house-emblem-t-shirt/-/A-89212543",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hufflepuff-7th-birthday-t-shirt/-/A-90482717",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-ravenclaw-quidditch-seeker-t-shirt/-/A-83439932",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-durmstrang-crest-t-shirt/-/A-83986977",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-8th-birthday-t-shirt/-/A-90482994",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-platform-9-3-4-t-shirt/-/A-83441609",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-quidditch-hufflepuff-team-crest-t-shirt/-/A-87698682",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-6th-birthday-t-shirt/-/A-90483009",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-5th-birthday-friends-t-shirt/-/A-90482930",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-house-mascots-t-shirt/-/A-87698449",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-houses-mascots-boy-s-red-t-shirt/-/A-87215568",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hogwarts-houses-vintage-collage-t-shirt/-/A-1001410393",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-7th-birthday-t-shirt/-/A-90482917",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-platform-9-3-4-logo-t-shirt/-/A-1001022237",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-gryffindor-quidditch-coat-of-arms-t-shirt/-/A-83439589",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-6th-birthday-friends-t-shirt/-/A-90482437",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-hermione-kawaii-cutie-t-shirt/-/A-83987195",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-just-as-sane-as-luna-lovegood-t-shirt/-/A-83437537",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-little-wizard-t-shirt/-/A-85975687",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-limited-colors-boy-s-white-t-shirt/-/A-87614725",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-the-marauder-animals-t-shirt/-/A-87966322",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-harry-potter-expecto-patronum-animals-t-shirt/-/A-87967064",
      tags: "Boys’ Clothing, Graphic Tees, Harry Potter, Kids’ Clothing, Tops",
      filters: {
        brand: "Harry Potter",
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
